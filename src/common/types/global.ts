export type TApi_response<T extends unknown> = {
  success: boolean;
  message: string;
  data?: T | null | undefined;
  [x: string]: unknown;
};
