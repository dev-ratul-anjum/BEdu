import { TUser_Role } from '@/common/types/models';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const redirectByRole = (role: TUser_Role) => {
  switch (role) {
    case 'SUPER_ADMIN':
      return '/super-admin-dashboard';
    case 'ADMIN':
      return '/admin-dashboard';
    case 'TEACHER':
      return '/teacher-dashboard';
    case 'STUDENT':
      return '/student-dashboard';
    case 'PARENT':
      return '/parent-dashboard';
    default:
      return '/';
  }
};
