export type TUser_Role = 'SUPER_ADMIN' | 'ADMIN' | 'TEACHER' | 'STUDENT' | 'PARENT';

export type TUser = {
  id: string;
  username: string;
  password: string;
  role: TUser_Role;
};
