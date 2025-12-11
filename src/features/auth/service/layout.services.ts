import { api } from '@/lib/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useLogoutMutaion = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async () => {
      const res = await api.post('/v1/user/logout');
      console.log(res);
      return res.data;
    },
    onSuccess: () => {
      queryClient.setQueryData(['auth-user'], null);
      queryClient.clear();

      navigate('/');
    },
  });
};
