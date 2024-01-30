import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

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
    color: "bg-red-100",
    url: "categories/electronics",
    key: 1,
  },
  {
    name: "Jewelry",
    icon: (
      <Image
        src="https://res.cloudinary.com/dahrgkaxc/image/upload/v1706487475/categories/Jewlry_cjhdiy.png"
        height={160}
        width={160}
        className="p-4"
        alt="Jewelry"
      />
    ),
    color: "bg-cyan-100",
    url: "categories/jewelry",
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
    color: "bg-blue-100",
    url: "categories/mens-clothing",
    key: 3,
  },
  {
    name: "Women's Clothing",
    icon: (
      <Image
        src="https://res.cloudinary.com/dahrgkaxc/image/upload/v1706487475/categories/Women_s_clothing_x88z0y.png"
        height={160}
        width={160}
        className="p-4"
        alt="Women's Clothing"
      />
    ),
    color: "bg-rose-100",
    url: "categories/womens-clothing",
    key: 4,
  },
];

const Categories: React.FC = () => {
  return (
    <div className="flex justify-between gap-8 rounded-lg bg-slate-50 p-8">
      {categories.map((category) => (
        <Link href={category.url} key={category.key} className="group flex flex-col">
          <div
            className={cn(category.color, 'p-4 rounded-full transition duration-300 group-hover:bg-opacity-60 shadow-lg')}
          >
            {category.icon}
          </div>
          <span className="text-center group-hover:underline">{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
