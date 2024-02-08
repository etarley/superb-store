'use client'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';

import { QueryCache } from '@tanstack/react-query';

const queryCache = new QueryCache({
  onError: (error) => {
    console.log(error)
  },
  // eslint-disable-next-line no-unused-vars
  onSuccess: (data) => {
  },
  onSettled: (data, error) => {
    console.log(error)
  },
})



const queryClient = new QueryClient({
  queryCache,
  defaultOptions:{
    queries:{
      staleTime: 60 * 1000,
    
    }
  }
})



export default function QueryProvider ({children}:{children:ReactNode}) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}



