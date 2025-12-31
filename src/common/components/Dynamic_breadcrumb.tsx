import { to_spaced_lowercase, to_title_case } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '../components/shadcn-ui/breadcrumb';

function format_breadcrumb_label(str: string) {
  return to_title_case(to_spaced_lowercase(str));
}

export const Dynamic_breadcrumb = ({ className = 'mb-6' }: TProps) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumb_items = [
    ...pathnames.map((pathname, index) => {
      const navigate_to = `/${pathnames.slice(0, index + 1).join('/')}`;
      const is_last = index === pathnames.length - 1;
      const label = format_breadcrumb_label(pathname); // This handles kebab-case, snake_case, and camelCase

      return {
        title: is_last ? label : <Link to={navigate_to}>{label}</Link>,
      };
    }),
  ];

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumb_items.map((item, index) => (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink href="#">{item.title}</BreadcrumbLink>
              {index !== breadcrumb_items.length - 1 && (
                <BreadcrumbSeparator className="hidden md:block" />
              )}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};

type TProps = {
  className?: string;
  home_label?: string;
  include_home?: boolean;
};
