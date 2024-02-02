// 'use client'
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
import { ChevronRight, PlusIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

// const fetchProduct = async (productId: string) => {
//   const response = await axios.get<Product>(`https://fakestoreapi.com/products/${productId}`);
//   return response.data;
// };

async function getProduct(productId: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch data for product ${productId}`);
  }

  return res.json();
}

const Page: React.FC<{ params: { id: string } }> = async ({ params }) => {
  // const { data, isLoading, isError } = useQuery(
  //   {
  //     queryKey:['product'],
  //     queryFn:()=> fetchProduct(params.id)
  //   }
  //   );

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <div>Error fetching data for product {params.id}</div>;
  // }

  const product = await getProduct(params.id) as Product;

  return (
    <div className='grid sm:my-4 sm:grid-cols-2 sm:gap-1'>
      <p className="text-neutral-500 sm:col-span-2">categories<ChevronRight className='inline size-4'/>{product.category}</p>
      <Image src={product.image} alt={product.title} className="mr-4 rounded border object-contain p-2 sm:size-[36rem]" width={1500} height={1500} />
      <div className='flex flex-col gap-1'>
        <h1 className="mb-0.5 text-2xl sm:text-3xl font-bold">{product.title}</h1>
        {/* <div className='flex flex-col gap-2'>     */}
         <Separator />
        <p className="text-2xl font-semibold text-neutral-800">$ {product.price}</p>
        <Button>Add to Cart <PlusIcon className='ml-2 size-4' /></Button>
        {/* </div> */}
      </div>
<div className='mt-6 sm:col-span-2'>
          <h2 className='text-2xl font-semibold'>Description</h2>
          <p className="mt-4 text-sm">{product.description}</p>
</div>
    </div>
  );
};

export default Page;
