'use client'
import { CartItem } from '@/components/products/products';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from '@/lib/utils';
import { Minus, Plus, ShoppingCart, Trash } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Cart: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);


  useEffect(() => {
    const existingCart = sessionStorage.getItem('cart');
    if (existingCart) {
      setCart(JSON.parse(existingCart));
    }
  }, []);

    useEffect(() => {
    const handleStorageChange = () => {
      const updatedCart = sessionStorage.getItem('cart');
      if (updatedCart) {
        setCart(JSON.parse(updatedCart));
      }
    };

    // Add event listener for 'storage' event
    window.addEventListener('storage', handleStorageChange);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []); 

  const updateCart = (updatedCart: CartItem[]) => {
    setCart(updatedCart);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
    updateCartCount(updatedCart.length);
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    updateCart(updatedCart);
  };

  const increaseQuantity = (productId: number) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    updateCart(updatedCart);
  };

  const decreaseQuantity = (productId: number) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    updateCart(updatedCart);
  };

  const updateCartCount = (count: number) => {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
      cartCountElement.textContent = count.toString();
    }
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0).toFixed(2);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='mr-4' asChild>
        <Button variant="outline" className='relative rounded-full outline-none ring-0'>
          <ShoppingCart/>
          <Badge id="cart-count" className="absolute right-0 top-0 -translate-y-1/3 translate-x-1/3">{cart.length}</Badge>
          <span className="sr-only">Shopping Cart</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' forceMount className='max-h-[90vh] w-96 overflow-auto'>
        <div className="p-4">
          <h3 className="text-lg font-semibold">Your Cart</h3>
          {cart.length === 0 ? (
            <p className="text-sm text-primary opacity-70 ">Your cart is currently empty.</p>
          ) : (
            <div>
              {cart.map(product => (
                 <Card key={product.id} className="my-2 flex items-center">
    <CardContent className='grid grid-cols-2 p-4'>
        <Image src={product.image} alt={product.title} width={64} height={64} className="row-span-2 mr-4 size-16 object-contain" />
        
          <div>
            <p className="truncate text-sm font-semibold">{product.title}</p>
            <p className="text-xs text-primary opacity-70">${product.price}</p>
          </div>
        
        
        <div className='flex'>
          <Button variant='ghost' size="icon" onClick={() => removeFromCart(product.id)} className="mr-2">
          <Trash size={16} className='text-destructive' />
        </Button>
          <div className="flex w-fit items-center justify-center rounded border">
            <Button variant='ghost' size="icon" onClick={() => decreaseQuantity(product.id)} className={cn("mr-2", product.quantity === 1 && "disabled")}>
              <Minus size={16}/>
            </Button>
            <span>{product.quantity}</span>
            <Button variant='ghost' size="icon" onClick={() => increaseQuantity(product.id)} className="ml-2">
              <Plus size={16} />
            </Button>
          </div>
        </div>
    </CardContent>
  </Card>
              ))}
              <div className="mt-4 flex justify-between">
                <span className="text-sm font-semibold">Subtotal:</span>
                <span className="text-sm font-semibold">${calculateSubtotal()}</span>
              </div>
              <Button className="mt-4 w-full">
                Checkout
              </Button>
            </div>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Cart;
