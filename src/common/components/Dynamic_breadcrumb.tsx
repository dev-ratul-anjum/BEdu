import { to_spaced_lowercase, to_title_case } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '../components/shadcn-ui/breadcrumb';

export const Dynamic_breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathnames.map((pathname, index) => {
          const title = format_breadcrumb_label(pathname);
          const navigate_to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const is_last = index === pathnames.length - 1;

          return is_last ? (
            <BreadcrumbItem key={index}>{title}</BreadcrumbItem>
          ) : (
            <Fragment key={index}>
              <BreadcrumbItem>
                <Link to={navigate_to}>{title}</Link>
              </BreadcrumbItem>

              {!is_last && <BreadcrumbSeparator className="hidden md:block" />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

function format_breadcrumb_label(str: string) {
  return to_title_case(to_spaced_lowercase(str));
}
