import { api } from '@/lib/api';
import { queryOptions } from '@tanstack/react-query';

export const get_current_user = () =>
  queryOptions({
    queryKey: ['user', 'current'],
    queryFn: async () => {
      try {
        const res = await api.get('/v1/user/me');
        return res.data;
      } catch (err) {
        throw err;
      }
    },
  });
