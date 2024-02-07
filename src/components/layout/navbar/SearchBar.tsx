'use client'
import { Input } from '@/components/ui/input';
import { cn, createUrl } from '@/lib/utils';
import { Search as SearchIcon } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef } from 'react';

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === '/') {
        e.preventDefault();
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }
    };

    document.addEventListener('keypress', handleKeyPress);

    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newParams = new URLSearchParams(searchParams.toString());
    const value = e.target.value;

    if (value) {
      newParams.set('search', value);
    } else {
      newParams.delete('search');
    }

    router.push(createUrl('/', newParams));
  }

  return (
    <form className="flex h-14 items-center justify-center px-4 md:px-6 lg:px-8">
      <div className="relative w-full max-w-3xl">
        <Input
          ref={searchInputRef}
          className={cn(
            "transition-all duration-300 ease-in-out h-10 pl-10 pr-8 rounded-md text-sm",
            "w-full bg-gray-100 dark:bg-gray-800 focus:outline-none focus:bg-white dark:focus:bg-gray-900",
          )}
          placeholder="Search for products..."
          type="search"
          name="search"
          autoComplete="off"
          defaultValue={searchParams?.get('search') || ''}
          onChange={handleInputChange}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <SearchIcon className="size-5 text-gray-500 dark:text-gray-400" />
        </div>
      </div>
    </form>
  );
}
