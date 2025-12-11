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

export function toSpacedLowercase(str: string) {
  return str
    .replace(/[-_]/g, ' ') // Replace hyphens and underscores with spaces
    .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space between camelCase words
    .toLowerCase() // Convert to lowercase
    .trim() // Remove any leading/trailing whitespace
    .replace(/\s+/g, ' '); // Replace multiple spaces with single space
}

export function toTitleCase(str: string) {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
