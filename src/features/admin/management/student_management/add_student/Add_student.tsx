import { ArrowLeft, CalendarIcon, Plus, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format, isValid, parse } from 'date-fns';
import { useEffect, useState } from 'react';

import { Button } from '@/common/components/shadcn-ui/button';
import { Input } from '@/common/components/shadcn-ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/common/components/shadcn-ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/common/components/shadcn-ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/common/components/shadcn-ui/popover';
import { Calendar } from '@/common/components/shadcn-ui/calendar';

/* ----------------------------- Schema ----------------------------- */

const guardianSchema = z.object({
  type: z.string().min(1),
  name: z.string().min(1, { message: 'Name is required' }),
  phone: z.string().min(1, { message: 'Phone is required' }),
  occupation: z.string().optional(),
  email: z.string().email('Invalid email').optional(),
});

const formSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  class: z.string().min(1, { message: 'Class is required' }),
  section: z.string().min(1, { message: 'Section is required' }),
  roll: z.string().min(1, { message: 'Roll is required' }),
  dob: z.date(),
  gender: z.string().min(1, { message: 'Gender is required' }),
  bloodGroup: z.string().optional(),
  address: z.string().optional(),
  religion: z.string().optional(),
  photo: z.any().optional(),

  guardians: z
    .array(guardianSchema)
    .min(1)
    .refine((guardians) => new Set(guardians.map((g) => g.phone)).size === guardians.length, {
      message: 'Guardian phone numbers must be unique',
    }),
});

/* --------------------------- Constants ---------------------------- */

const guardianTypes = [
  { value: 'father', label: 'Father' },
  { value: 'mother', label: 'Mother' },
  { value: 'brother', label: 'Brother' },
  { value: 'sister', label: 'Sister' },
  { value: 'guardian', label: 'Other Guardian' },
  { value: 'uncle', label: 'Uncle' },
  { value: 'aunt', label: 'Aunt' },
  { value: 'cousin', label: 'Cousin' },
  { value: 'grandmother', label: 'Grandmother' },
  { value: 'grandfather', label: 'Grandfather' },
];

const guardianLabelMap: Record<string, string> = {
  father: "Father's",
  mother: "Mother's",
  brother: "Brother's",
  sister: "Sister's",
  uncle: "Uncle's",
  aunt: "Aunt's",
  cousin: "Cousin's",
  grandmother: "Grandmother's",
  grandfather: "Grandfather's",

  guardian: "Guardian's",
};

/* --------------------------- Component ---------------------------- */

export default function Add_student() {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      class: '',
      section: '',
      roll: '',
      dob: undefined,
      gender: '',
      bloodGroup: '',
      address: '',
      religion: '',
      guardians: [
        {
          type: 'father',
          name: '',
          phone: '',
          occupation: '',
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'guardians',
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert('Student added successfully (check console)');
  }

  return (
    <div className="p-6">
      {/* Header */}
      <header className="mb-6 flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => navigate(-1)}
          className="h-10 w-10 rounded-xl"
        >
          <ArrowLeft size={20} />
        </Button>
        <h1 className="text-2xl font-semibold">Add New Student</h1>
      </header>

      <div className="max-w-5xl mx-auto rounded-xl border bg-white p-8 shadow-sm">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-10"
          >
            {/* ---------------- Student Info ---------------- */}
            <Section title="Student Info">
              <Grid>
                <InputField
                  name="firstName"
                  label="First Name"
                />
                <InputField
                  name="lastName"
                  label="Last Name"
                />
                <InputField
                  name="roll"
                  label="Class Roll"
                />

                <SelectField
                  name="class"
                  label="Class"
                  options={Array.from({ length: 12 }, (_, i) => ({
                    value: String(i + 1),
                    label: `Class ${i + 1}`,
                  }))}
                />

                <SelectField
                  name="section"
                  label="Section"
                  options={['A', 'B', 'C'].map((s) => ({ value: s, label: s }))}
                />

                <FormField
                  control={form.control}
                  name="dob"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date of Birth</FormLabel>
                      <DatePickerWithInput
                        value={field.value}
                        onChange={field.onChange}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Grid>
            </Section>

            {/* ---------------- Guardian Info ---------------- */}
            <Section
              title="Guardian Info"
              action={
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    append({
                      type: 'father',
                      name: '',
                      phone: '',
                      occupation: '',
                    })
                  }
                >
                  <Plus size={18} />
                </Button>
              }
            >
              {fields.map((field, index) => {
                const type = form.watch(`guardians.${index}.type`);
                const prefix = guardianLabelMap[type] || "Guardian's";

                return (
                  <div
                    key={field.id}
                    className="relative rounded-xl border p-6 mb-6"
                  >
                    {fields.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute top-3 right-3"
                        onClick={() => remove(index)}
                      >
                        <Trash2
                          className="text-red-500"
                          size={18}
                        />
                      </Button>
                    )}

                    <Grid>
                      <SelectField
                        name={`guardians.${index}.type`}
                        label="Guardian Type"
                        options={guardianTypes}
                      />
                      <InputField
                        name={`guardians.${index}.name`}
                        label={`${prefix} Name`}
                      />
                      <InputField
                        name={`guardians.${index}.phone`}
                        label={`${prefix} Phone`}
                      />
                      <InputField
                        name={`guardians.${index}.occupation`}
                        label={`${prefix} Occupation`}
                      />
                    </Grid>
                  </div>
                );
              })}
            </Section>

            <div className="flex justify-center">
              <Button
                type="submit"
                className="px-12 h-12 text-base"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

/* ----------------------- Helper Components ----------------------- */

function Section({
  title,
  children,
  action,
}: {
  title: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center justify-between border-b pb-2 mb-4">
        <h2 className="text-lg font-medium">{title}</h2>
        {action}
      </div>
      {children}
    </div>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>;
}

function InputField({ name, label }: { name: string; label: string }) {
  return (
    <FormField
      name={name as any}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function SelectField({
  name,
  label,
  options,
}: {
  name: string;
  label: string;
  options: { value: string; label: string }[];
}) {
  return (
    <FormField
      name={name as any}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={`Select ${label}`} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((o) => (
                <SelectItem
                  key={o.value}
                  value={o.value}
                >
                  {o.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

/* ----------------------- Date Picker ----------------------- */

function DatePickerWithInput({
  value,
  onChange,
}: {
  value?: Date;
  onChange: (date: Date | undefined) => void;
}) {
  const [dateString, setDateString] = useState(value ? format(value, 'yyyy-MM-dd') : '');

  useEffect(() => {
    if (value) setDateString(format(value, 'yyyy-MM-dd'));
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setDateString(val);
    const parsed = parse(val, 'yyyy-MM-dd', new Date());
    if (isValid(parsed) && val.length === 10) onChange(parsed);
    if (val === '') onChange(undefined);
  };

  return (
    <div className="flex gap-2">
      <Input
        value={dateString}
        onChange={handleInputChange}
        placeholder="YYYY-MM-DD"
      />
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="icon"
          >
            <CalendarIcon className="h-4 w-4 opacity-60" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <Calendar
            mode="single"
            selected={value}
            onSelect={onChange}
            disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
