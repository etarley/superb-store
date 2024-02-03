'use client'
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardTitle } from './ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';


interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

const ProductsCarrousel= ({products} : {products: Product[]}) => {
  return (
    <Carousel
    opts={
        {
            loop:true,
            align:'start'
        }
    }
    plugins={[
        Autoplay({
          delay: 3000,
          stopOnFocusIn:true,
          stopOnMouseEnter:true
        }),
      ]}
      className='container max-w-xs p-0 sm:max-w-none'
    >
    <CarouselContent className='justify-between py-6'>
         {products.map((product) => (
          <CarouselItem key={product.id} className='ml-4 md:basis-1/2 lg:basis-1/5'>
            <Card className='group transition-transform duration-300 ease-in-out hover:scale-105'>
              <CardContent className='items-center'>
                <Link href={`/products/${product.id}`}>
                  
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={300}
                      height={300}
                      className='size-[20rem] object-contain p-2'
                    />
                    
                    <CardTitle className='truncate text-base group-hover:underline'>{product.title}</CardTitle>
                    <p>{`$${product.price}`}</p>
                </Link>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='-left-8 top-1/2 -translate-y-1/2' />
  <CarouselNext className='-right-8 top-1/2 -translate-y-1/2'/>
    </Carousel>
  )
}

export default ProductsCarrousel;