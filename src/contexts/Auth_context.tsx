import api from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import React, { createContext, useContext } from 'react';

const Auth_context = createContext(null);

export const useAuth = () => {
    return useContext(Auth_context);
};

const Auth_provider = ({ children }) => {
    const { data: user, isLoading } = useQuery({
        queryKey: ['auth-user'],
        queryFn: async () => {
            try {
                const res = await api.get('/user/me');
                return res.data;
            } catch (err) {
                return null;
            }
        },
        retry: false,
        staleTime: Infinity,
    });

    return (
        <Auth_context.Provider value={{ user, isLoading }}>
            {children}
        </Auth_context.Provider>
    );
};
export default Auth_provider;
