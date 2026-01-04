import { Notice_card } from './components/notice_card/Notice_card';
import { useNavigate } from 'react-router-dom';

const notices = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: `Notice Title ${i + 1}`,
  date: new Date(2025, 0, 15 - i).toLocaleDateString(),
  image: '/.png',
}));

export default function All_notice_list() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {notices.map((notice) => (
          <Notice_card
            key={notice.id}
            title={notice.title}
            date={notice.date}
            image={notice.image}
            onClick={() => navigate(`/parent/detail-notice`)}
          />
        ))}
      </div>
    </div>
  );
}
