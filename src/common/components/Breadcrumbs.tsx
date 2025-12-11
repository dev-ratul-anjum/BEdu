import { cn, toSpacedLowercase, toTitleCase } from '@/lib/utils';
import { Breadcrumb } from 'antd'; // or your UI library
import { Link, useLocation } from 'react-router-dom';

interface TProps {
  className?: string;
  homeLabel?: string;
  includeHome?: boolean;
}

function formatBreadcrumbLabel(str: string) {
  return toTitleCase(toSpacedLowercase(str));
}

export const DynamicBreadcrumb = ({ className = 'mb-6' }: TProps) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbItems = [
    ...pathnames.map((pathname, index) => {
      const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
      const isLast = index === pathnames.length - 1;
      const label = formatBreadcrumbLabel(pathname); // This handles kebab-case, snake_case, and camelCase

      return {
        title: isLast ? label : <Link to={routeTo}>{label}</Link>,
      };
    }),
  ];

  return (
    <Breadcrumb
      className={cn(className)}
      items={breadcrumbItems}
    />
  );
};
