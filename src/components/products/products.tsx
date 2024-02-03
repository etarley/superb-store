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

const fetchProducts = async () => {
  const response = await axios.get<Product[]>(`https://fakestoreapi.com/products`);
  return response.data;
};

// async function getData() {
//   const res = await fetch ('https://fakestoreapi.com/products')

//   if (!res.ok){
//     throw new Error('Failed to fetch data')
//   }
//   return res.json() 
// }

const Products: React.FC = () => {

  const activePage = parseInt(useSearchParams().get('page')||'1')
  
  
    const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  if(!data){
    return
  }

   const itemsPerPage = 8;
  const startIdx = (activePage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const currentData = data.slice(startIdx, endIdx);

  const pageCount = Math.ceil(data.length / itemsPerPage);
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);



  return (
    <div>
    <div className="my-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {currentData?.map((product) => (
        <Card key={product.id} className="rounded-lg shadow-lg">
         <CardContent>
<Link href={`products/${product.id}`}>
             <Image src={product.image} alt={product.title} className="mb-2 size-80 object-contain p-2" width={800} height={800}/>
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
          {activePage > 1 && <PaginationPrevious href={`?page=${activePage-1}`} />}
        </PaginationItem>
        {
          pages.map(page=>(
            <PaginationItem key={page}>
              {activePage ===page ? <PaginationLink href={`?page=${page}`} isActive>{page}</PaginationLink>:
               <PaginationLink href={`?page=${page}`}>{page}</PaginationLink>
              }
             
              
            </PaginationItem>
          ))
        }
        <PaginationItem>
          {activePage < pages.length && <PaginationNext href={`?page=${activePage+1}`} />}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
    </div>
  );
};

export default Products;
