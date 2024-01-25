'use client'
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Search as SearchIcon } from 'lucide-react';




function SearchBar() {

  return (
    <div className="flex items-center justify-center h-14 px-4 md:px-6 lg:px-8">
      <div className="relative w-full max-w-3xl">
        <Input
           className={cn(
            "transition-all duration-300 ease-in-out h-10 pl-10 pr-8 rounded-md text-sm",
            "w-full bg-gray-100 dark:bg-gray-800 focus:outline-none focus:bg-white dark:focus:bg-gray-900",
             
          )}
          placeholder="Search for products..."
          type="search"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <SearchIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
