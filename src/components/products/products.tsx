'use client'
import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { PlusIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Card, CardContent, CardFooter } from '../ui/card';

import { useSearchParams } from 'next/navigation';
 

interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

const fetchProducts = async (category?: string | null) => {
  let url = 'https://fakestoreapi.com/products';
  if (category) {
    url += `/category/${category}`;
  }
  const response = await axios.get<Product[]>(url);
  return response.data;
};

// async function getData() {
//   const res = await fetch ('https://fakestoreapi.com/products')

//   if (!res.ok){
//     throw new Error('Failed to fetch data')
//   }
//   return res.json() 
// }

const SkeletonProduct: React.FC = () => (
  <Card className="rounded-lg shadow-lg">
    <CardContent className='pb-1'>
      <Skeleton className="my-2 h-80 w-full" />
      <div className="space-y-2">
        <Skeleton className="h-[28px] w-[250px]" />
        <Skeleton className="h-6 w-[100px]" />
      </div>
    </CardContent>
    <CardFooter className='justify-end'>
      <Skeleton className="h-10 w-[140px]" />
    </CardFooter>
  </Card>
);

const Products = () => {
 
  const searchParams = useSearchParams()
  const activePage = parseInt(searchParams.get('page') || '1');
  const activeCategory = searchParams.get('category')
  const activeSearch = searchParams.get('search')


  

  const { data, isLoading, isError } = useQuery({
    queryKey: ['products', activeCategory],
    queryFn:()=> fetchProducts(activeCategory),
     
  });

  const itemsPerPage = 8;

  if (isLoading) {
    // Render skeleton loading state while data is loading
    return (
      <div className="my-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[...Array(itemsPerPage)].map((_, index) => (
          <SkeletonProduct key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  if (!data) {
    return null;
  }

  // Filter data based on search query
  const filteredData = activeSearch
    ? data.filter(product => product.title.toLowerCase().includes(activeSearch.toLowerCase()))
    : data;

  // Calculate pageCount based on filteredData
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  // Calculate start and end indices for current page
  const startIdx = (activePage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;

  // Get data for the current page
  const currentData = filteredData.slice(startIdx, endIdx);

  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <div>
      <div className="my-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentData?.map((product) => (
          <Card key={product.id} className="rounded-lg shadow-lg">
            <CardContent>
              <Link href={`products/${product.id}`}>
                <Image
                  src={product.image}
                  alt={product.title}
                  className="mb-2 size-80 object-contain p-2"
                  width={800}
                  height={800}
                />
                <h3 className="truncate text-lg font-medium">{product.title}</h3>
              </Link>
              <p className="text-gray-600">${product.price}</p>
            </CardContent>
            <CardFooter className='justify-end'>
              <Button>Add to Cart <PlusIcon className='ml-2 size-4'/></Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Pagination className='mb-6'>
        <PaginationContent>
          <PaginationItem>
            {activePage > 1 && (
              <PaginationPrevious
                href={{
                  query: { page: activePage - 1, ...(activeCategory && { category: activeCategory }), ...(activeSearch && { search: activeSearch }) }
                }}
              />
            )}
          </PaginationItem>
          {pages.map((page) => (
            <PaginationItem key={page}>
              {activePage === page ? (
                <PaginationLink
                  href={{
                    query: { page: page, ...(activeCategory && { category: activeCategory }), ...(activeSearch && { search: activeSearch }) }
                  }}
                  isActive
                >
                  {page}
                </PaginationLink>
              ) : (
                <PaginationLink
                  href={{
                    query: { page: page, ...(activeCategory && { category: activeCategory }), ...(activeSearch && { search: activeSearch }) }
                  }}
                >
                  {page}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}
          <PaginationItem>
            {activePage < pages.length && (
              <PaginationNext
                href={{
                  query: { page: activePage + 1, ...(activeCategory && { category: activeCategory }), ...(activeSearch && { search: activeSearch }) }
                }}
              />
            )}
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Products;
