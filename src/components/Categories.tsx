
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

const categories = [
  {
    name: "Electronics",
    icon: (
      <Image
        src="https://res.cloudinary.com/dahrgkaxc/image/upload/v1706487475/categories/electronics_xxusx5.png"
        height={160}
        width={160}
        className="p-4"
        alt="Electronics"
      />
    ),
    color: "bg-red-400",
    query: "electronics",
    key: 1,
  },
  {
    name: "Jewelery",
    icon: (
      <Image
        src="https://res.cloudinary.com/dahrgkaxc/image/upload/v1706487475/categories/Jewlry_cjhdiy.png"
        height={160}
        width={160}
        className="p-4"
        alt="Jewelery"
      />
    ),
    color: "bg-cyan-400",
    query: "jewelery",
    key: 2,
  },
  {
    name: "Men's Clothing",
    icon: (
      <Image
        src="https://res.cloudinary.com/dahrgkaxc/image/upload/v1706487475/categories/Men_s_clothing_nxotsd.png"
        height={160}
        width={160}
        className="p-4"
        alt="Men's Clothing"
      />
    ),
    color: "bg-blue-400",
    query: "men's%20clothing",
    key: 3,
  },
  {
    name: "Women's Clothing",
    icon: (
      <div>
        <Image
          src="https://res.cloudinary.com/dahrgkaxc/image/upload/v1706487475/categories/Women_s_clothing_x88z0y.png"
          height={160}
          width={160}
          className="p-4"
          alt="Women's Clothing"
        />
      </div>
    ),
    color: "bg-rose-400",
    query: "women's%20clothing",
    key: 4,
  },
];

const Categories = ({categoryParam}:{categoryParam: string | string[] | undefined}) => {

  

  return (
    <div className="mb-4 rounded-lg bg-slate-50 p-8 dark:bg-slate-900">
    <Carousel  opts={{loop:true}}>
      <CarouselContent className='flex justify-between'>
      {categories.map((category) => (
        <CarouselItem key={category.key} className='sm:basis-1/2 md:basis-1/3 lg:basis-1/4'>
        <Link href={{query:{category:category.query}}} replace  className="group flex flex-col items-center gap-4">
          <div
            className={cn(category.color, categoryParam === category.query ? 'bg-opacity-90' : 'bg-opacity-30',  ' p-4 rounded-full transition duration-300 group-hover:bg-opacity-100 shadow-lg size-40')}
          >
            {category.icon}
          </div>
          <span className={cn(categoryParam === category.query && "underline", "text-center font-medium shadow group-hover:underline")}>{category.name}</span>
        </Link>
        </CarouselItem>
      ))}
      </CarouselContent>
       <CarouselPrevious className='-left-8 top-1/2 -translate-y-1/2 lg:hidden' />
  <CarouselNext className='-right-8 top-1/2 -translate-y-1/2 lg:hidden'/>
    </Carousel>
    </div>
  );
};


export default Categories;
