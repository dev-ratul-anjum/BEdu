import { Button } from '@/common/components/shadcn-ui/button';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import NoticeTable, { TNoticeTable } from './components/Notice_table';

const mockNotices: TNoticeTable[] = [
  {
    key: '1',
    id: '1',
    title: 'New year vacation',
    description: 'content...',
    publishedDate: '20/09/2026',
    fileUrl: 'public/.png',
  },
  {
    key: '2',
    id: '2',
    title: 'Eid vacation',
    description: 'content...',
    publishedDate: '14/12/2026',
    fileUrl: 'public/.png',
  },
];

export default function Notice_management_page() {
  return (
    <main>
      <header className="flex items-center justify-between mt-3 mb-6">
        <h1 className="text-3xl font-semibold">Notice Management</h1>

        <Button asChild>
          <Link to={'add-notice'}>
            <Plus /> Add Notice
          </Link>
        </Button>
      </header>

      <NoticeTable notices={mockNotices} />
    </main>
  );
}
