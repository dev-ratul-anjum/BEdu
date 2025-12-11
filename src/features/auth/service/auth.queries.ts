import { TApi_response } from '@/common/types';
import { TUser } from '@/common/types/models';
import { api } from '@/lib/api';
import { queryOptions } from '@tanstack/react-query';

export const get_current_user = () =>
  queryOptions({
    queryKey: ['user', 'current'],
    queryFn: async () => {
      try {
        const res = await api.get<TApi_response<TUser>>('/v1/user/me');
        return res.data.data;
      } catch (err) {
        throw err;
      }
    },
  });
