import React, { useMemo, useState } from 'react';
import { Space, Typography } from 'antd';
import Notice_Header from './components/Notice_header';
import Notice_Overview from './components/Notice_overview';
import Notice_List from './components/Notice_list';

const { Title } = Typography;

import { sample_notices } from '../../data/notice_data';

const Notice: React.FC = () => {
  const [selected_month, set_selected_month] = useState<string>('January 2025');
  const [search_query, set_search_query] = useState<string>('');
  const [pinned_notices, set_pinned_notices] = useState<Set<string>>(
    new Set(sample_notices.filter((n) => n.is_pinned).map((n) => n.id))
  );
  const [read_notices, set_read_notices] = useState<Set<string>>(
    new Set(sample_notices.filter((n) => n.is_read).map((n) => n.id))
  );

  // Filter notices by month and search query
  const filtered_notices = useMemo(() => {
    return sample_notices
      .filter((notice) => notice.month === selected_month)
      .filter(
        (notice) =>
          notice.title.toLowerCase().includes(search_query.toLowerCase()) ||
          notice.content.toLowerCase().includes(search_query.toLowerCase())
      )
      .map((notice) => ({
        ...notice,
        is_pinned: pinned_notices.has(notice.id),
        is_read: read_notices.has(notice.id),
      }))
      .sort((a, b) => (b.is_pinned ? 1 : 0) - (a.is_pinned ? 1 : 0));
  }, [selected_month, search_query, pinned_notices, read_notices]);

  // Calculate stats
  const total_notices = useMemo(
    () => sample_notices.filter((n) => n.month === selected_month).length,
    [selected_month]
  );

  const unread_notices = useMemo(() => {
    return sample_notices
      .filter((n) => n.month === selected_month)
      .filter((n) => !read_notices.has(n.id)).length;
  }, [selected_month, read_notices]);

  const pinned_count = useMemo(() => pinned_notices.size, [pinned_notices]);

  const month_options = Array.from(new Set(sample_notices.map((n) => n.month)))
    .sort()
    .reverse()
    .map((m) => ({
      label: m,
      value: m,
    }));

  const handle_pin = (id: string) => {
    const new_pinned = new Set(pinned_notices);
    if (new_pinned.has(id)) {
      new_pinned.delete(id);
    } else {
      new_pinned.add(id);
    }
    set_pinned_notices(new_pinned);
  };

  const handle_mark_read = (id: string) => {
    const new_read = new Set(read_notices);
    if (new_read.has(id)) {
      new_read.delete(id);
    } else {
      new_read.add(id);
    }
    set_read_notices(new_read);
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <Title
          level={3}
          className="!mb-0"
        >
          Notice Board
        </Title>
      </div>

      <Space
        direction="vertical"
        size="large"
        className="w-full"
      >
        <Notice_Header
          selected_month={selected_month}
          on_month_change={(val) => set_selected_month(String(val))}
          month_options={month_options}
          search_query={search_query}
          on_search_change={set_search_query}
        />

        <div className="mb-6">
          <Notice_Overview
            total_notices={total_notices}
            unread_notices={unread_notices}
            pinned_notices={pinned_count}
          />
        </div>

        <Notice_List
          notices={filtered_notices}
          on_pin={handle_pin}
          on_mark_read={handle_mark_read}
        />
      </Space>
    </div>
  );
};

export default Notice;
