import { Card } from 'antd';

export interface NoticeCardData {
  id?: number;
  title: string;
  date: string;
  onClick?: () => void;
}

export const Notice_card: React.FC<NoticeCardData> = ({ title, date, onClick }) => {
  return (
    <Card
      onClick={onClick}
      className="bg-gray-400 border-border p-6 hover:border-primary hover:shadow-lg transition-all cursor-pointer group"
    >
      <div className="space-y-4">
        <div className="h-32 bg-white border-2 border-border rounded-lg group-hover:border-primary transition-colors" />
        <div>
          <h3 className="text-foreground font-semibold line-clamp-2">{title}</h3>
          <p className="text-muted-foreground text-sm mt-1">{date}</p>
        </div>
      </div>
    </Card>
  );
};
