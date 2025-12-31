import { Notice_description } from './Notice_description';
import { Notice_file_viewer } from './Notice_file_viewer';

interface Notice_detail_cardProps {
  title: string;
  date: string;
  fileUrl?: string;
  description: string;
}

export const Notice_detail_card: React.FC<Notice_detail_cardProps> = ({
  title,
  date,
  fileUrl,
  description,
}) => {
  return (
    <div className="flex flex-col h-full">
      {/* HEADER */}
      <div className="mb-4">
        <h2 className="font-sans text-2xl font-semibold">{title}</h2>
        <p className="font-sans text-sm text-gray-600 mt-1">{date}</p>
      </div>

      <div className="flex-1 mb-4">
        <Notice_file_viewer fileUrl={fileUrl} />
      </div>

      <Notice_description description={description} />
    </div>
  );
};
