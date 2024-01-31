'use client'
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { PlusIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Card, CardContent, CardFooter } from '../ui/card';

interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

const fetchProducts = async () => {
  const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
  return response.data;
};

const Products: React.FC = () => {
  const { data, isLoading, isError } = useQuery({queryKey:['products'], queryFn:fetchProducts});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className="my-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data?.map((product) => (
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
  );
};

export default Products;
