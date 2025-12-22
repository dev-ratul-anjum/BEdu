import { TUser_Role } from '@/common/types/models';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function redirect_by_role(role: TUser_Role) {
  switch (role) {
    case 'SUPER_ADMIN':
      return '/super-admin/dashboard';
    case 'ADMIN':
      return '/admin/dashboard';
    case 'TEACHER':
      return '/teacher/dashboard';
    case 'STUDENT':
      return '/student/dashboard';
    case 'PARENT':
      return '/parent/dashboard';
    default:
      return '/';
  }
}

export function to_spaced_lowercase(str: string) {
  return str
    .replace(/[-_]/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ');
}

export function to_title_case(str: string) {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
