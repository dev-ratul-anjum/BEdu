import { z } from 'zod';

export default function validate_field<T extends z.ZodRawShape, K extends keyof T>(
  schema: z.ZodObject<T>,
  fieldName: K
) {
  return {
    async validator(_: unknown, value: unknown) {
      try {
        // @ts-expect-error: the library definition is wrong
        const pickedSchema = schema.pick({ [fieldName]: true });
        await pickedSchema.parseAsync({ [fieldName]: value });
      } catch (error) {
        if (error instanceof z.ZodError) {
          const issue = error.issues[0];
          throw new Error(issue.message);
        }
        throw new Error('Validation error');
      }
    },
  };
}
