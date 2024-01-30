import { ShoppingCart } from 'lucide-react';
import React from 'react';

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

const Cart: React.FC = () => {
  return (<DropdownMenu>
  <DropdownMenuTrigger className='mr-4' asChild>
    <Button variant="outline" className='relative rounded-full outline-none ring-0'>
        <ShoppingCart/>
        <Badge className="absolute right-0 top-0 -translate-y-1/3 translate-x-1/3">3</Badge>
    <span className="sr-only">Shopping Cart</span>
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align='end' forceMount className='w-96'>
     <div className="p-4">
            <h3 className="text-lg font-semibold">Your Cart</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Your cart is currently empty.</p>
          </div>
  </DropdownMenuContent>
</DropdownMenu>);
}

export default Cart;