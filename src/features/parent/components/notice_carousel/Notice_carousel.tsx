import { useState } from 'react';
import { Card } from 'antd';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface Notice {
  id: number;
  title: string;
  date: string;
  content: string;
  type: 'event' | 'announcement' | 'urgent';
  icon: string;
}

interface NoticeCarouselProps {
  notices: Notice[];
}

export const Notice_carousel: React.FC<NoticeCarouselProps> = ({ notices }) => {
  const [currentNoticeIndex, setCurrentNoticeIndex] = useState(0);
  const currentNotice = notices[currentNoticeIndex];

  const nextNotice = () => setCurrentNoticeIndex((prev) => (prev + 1) % notices.length);

  const prevNotice = () =>
    setCurrentNoticeIndex((prev) => (prev - 1 + notices.length) % notices.length);

  const getNoticeTypeColor = (type: string) => {
    switch (type) {
      case 'urgent':
        return 'from-red-500/20 to-red-600/20 border-red-500/30';
      case 'event':
        return 'from-purple-500/20 to-purple-600/20 border-purple-500/30';
      case 'announcement':
        return 'from-blue-500/20 to-cyan-600/20 border-blue-500/30';
      default:
        return 'from-slate-500/20 to-slate-600/20 border-slate-500/30';
    }
  };

  return (
    <Card
      bodyStyle={{ padding: 0 }} // 🔴 VERY IMPORTANT
      className={`bg-gradient-to-r ${getNoticeTypeColor(
        currentNotice.type
      )} border backdrop-blur-sm rounded-xl overflow-hidden`}
    >
      <div className="p-4 md:p-6 flex flex-col md:flex-row gap-4">
        {/* CONTENT */}
        <div className="flex-1 min-w-0">
          {/* Title */}
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl md:text-3xl shrink-0">{currentNotice.icon}</span>
            <div className="min-w-0">
              <h4 className="text-slate-900 font-semibold text-base md:text-lg truncate">
                {currentNotice.title}
              </h4>
              <p className="text-slate-700 text-xs">{currentNotice.date}</p>
            </div>
          </div>

          {/* 🔥 TEXT OVERFLOW FIX */}
          <div
            className="
              text-slate-800 text-sm leading-relaxed
              max-h-[96px] md:max-h-none
              overflow-y-auto
              break-words
              pr-1
            "
          >
            {currentNotice.content}
          </div>
        </div>

        {/* CONTROLS */}
        <div className="flex justify-between md:flex-col gap-2 shrink-0">
          <button
            onClick={prevNotice}
            className="p-2 rounded-lg border border-slate-600/40 
                       bg-slate-700/40 hover:bg-slate-600/40 transition"
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>

          <button
            onClick={nextNotice}
            className="p-2 rounded-lg border border-slate-600/40 
                       bg-slate-700/40 hover:bg-slate-600/40 transition"
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2 pb-3">
        {notices.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentNoticeIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentNoticeIndex ? 'bg-cyan-400 w-6' : 'bg-slate-500 w-2'
            }`}
          />
        ))}
      </div>
    </Card>
  );
};
