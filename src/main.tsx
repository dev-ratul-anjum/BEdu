import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import './index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import router from './routes/Router';
import Auth_provider from './contexts/Auth_context';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Auth_provider>
                <RouterProvider router={router} />
            </Auth_provider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </React.StrictMode>
);
