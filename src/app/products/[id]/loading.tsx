import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronRight } from "lucide-react";

export default function Loading() {
  return (
  <div className='grid sm:my-4 sm:grid-cols-2 sm:gap-1'>
    <p className="text-neutral-500 sm:col-span-2">
      categories<ChevronRight className='inline size-4'/>Loading...
    </p>
    <Skeleton className="mr-4 size-[30rem] rounded border object-contain p-2 sm:size-[36rem]" />
    <div className='flex flex-col'>
      <h1 className="mb-0.5 text-2xl font-bold sm:text-3xl"><Skeleton className="h-6 w-full" /></h1>
      <Separator />
      <Skeleton className="my-2 h-8 w-[10rem]" />
      <Skeleton className="h-10 w-full" />
    </div>
    <div className='mt-4 sm:col-span-2 sm:mt-6'>
      <h2 className='text-2xl font-semibold'>Description</h2>
      <Skeleton className="mt-2 h-16 w-full" />
    </div>
    <div className='mt-6 sm:col-span-2 sm:mt-8'>
      <Separator />
      <Carousel opts={
        {
            align:'start'
        }
      }>
        <CarouselContent className="justify-between py-6">
        {
            [...Array(5)].map((_,index) => (
                 <CarouselItem className='ml-4 md:basis-1/2 lg:basis-1/5' key={index}>
    <Card>
      <CardContent className='items-center'>
        <Skeleton className="m-2 h-[20rem] w-full " />
        <CardTitle className=''><Skeleton className="h-4 w-[80%]" /></CardTitle>
        <p><Skeleton className="h-4 w-[50%]" /></p>
      </CardContent>
    </Card>
  </CarouselItem>
            )
            )
        }
        </CarouselContent>
        <CarouselPrevious className='-left-8 top-1/2 -translate-y-1/2' />
  <CarouselNext className='-right-8 top-1/2 -translate-y-1/2'/>

      </Carousel>
   
    </div>
  </div>
  );
}
