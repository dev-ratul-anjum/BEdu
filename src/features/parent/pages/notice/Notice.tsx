import React, { useMemo, useState } from 'react';
import { Space, Typography } from 'antd';
import Notice_Header from './components/Notice_header';
import Notice_Overview from './components/Notice_overview';
import Notice_List from './components/Notice_list';

const { Title } = Typography;

interface Notice_Item {
    key: string | number;
    id: string;
    title: string;
    content: string;
    date: string;
    month: string;
    category: 'academic' | 'event' | 'holiday' | 'general';
    is_pinned: boolean;
    is_read: boolean;
}

const sample_notices: Notice_Item[] = [
    {
        key: 1,
        id: '1',
        title: 'Mid-Term Exam Schedule Released',
        content:
            'The mid-term examination schedule for all classes has been released. Examinations will commence from January 15, 2025. Students are advised to prepare accordingly.',
        date: '05-01-2025',
        month: 'January 2025',
        category: 'academic',
        is_pinned: true,
        is_read: false,
    },
    {
        key: 2,
        id: '2',
        title: 'School Annual Sports Day',
        content:
            'The annual sports day will be held on January 20, 2025. All students are requested to participate in various events. Registration will close on January 10.',
        date: '03-01-2025',
        month: 'January 2025',
        category: 'event',
        is_pinned: true,
        is_read: true,
    },
    {
        key: 3,
        id: '3',
        title: 'New Uniform Distribution',
        content:
            'New uniforms for the academic year 2025 will be distributed from January 8 to January 12. Students should collect them from the office during school hours.',
        date: '01-01-2025',
        month: 'January 2025',
        category: 'general',
        is_pinned: false,
        is_read: true,
    },
    {
        key: 4,
        id: '4',
        title: 'Holiday Announcement - Republic Day',
        content:
            'The school will remain closed on January 26, 2025 (Republic Day). Classes will resume on January 27, 2025.',
        date: '20-12-2024',
        month: 'December 2024',
        category: 'holiday',
        is_pinned: false,
        is_read: true,
    },
    {
        key: 5,
        id: '5',
        title: 'Classroom Renovation Update',
        content:
            'Renovation of classroom blocks will start from January 6, 2025. Classes will be shifted to alternate blocks. Students are advised to check the notice board for their new classroom assignments.',
        date: '18-12-2024',
        month: 'December 2024',
        category: 'general',
        is_pinned: false,
        is_read: false,
    },
    {
        key: 6,
        id: '6',
        title: 'Science Fair Registration Open',
        content:
            'Registration for the Science Fair is now open. Interested students should submit their projects by December 25, 2024. Projects will be displayed on December 28.',
        date: '15-12-2024',
        month: 'December 2024',
        category: 'event',
        is_pinned: false,
        is_read: true,
    },
    {
        key: 7,
        id: '7',
        title: 'Parent-Teacher Meeting Schedule',
        content:
            'Parent-Teacher meetings will be held on December 22, 2024 from 2:00 PM to 5:00 PM. Parents are requested to collect their time slots from the school office.',
        date: '10-12-2024',
        month: 'December 2024',
        category: 'general',
        is_pinned: false,
        is_read: true,
    },
    {
        key: 8,
        id: '8',
        title: 'Library Extended Hours',
        content:
            'The school library will remain open during examination period from 7:00 AM to 6:00 PM. Students can utilize the facility for their exam preparation.',
        date: '05-12-2024',
        month: 'December 2024',
        category: 'academic',
        is_pinned: false,
        is_read: false,
    },
    {
        key: 9,
        id: '9',
        title: 'Winter Break Notice',
        content:
            'Winter break will be from December 20, 2024 to January 5, 2025. Classes will resume on January 6, 2025. Have a wonderful break!',
        date: '25-11-2024',
        month: 'November 2024',
        category: 'holiday',
        is_pinned: false,
        is_read: true,
    },
    {
        key: 10,
        id: '10',
        title: 'Computer Lab Maintenance',
        content:
            'The computer lab will be under maintenance from November 25 to November 28. No classes will be conducted in the lab during this period.',
        date: '20-11-2024',
        month: 'November 2024',
        category: 'general',
        is_pinned: false,
        is_read: true,
    },
];

const Notice: React.FC = () => {
    const [selected_month, set_selected_month] =
        useState<string>('January 2025');
    const [search_query, set_search_query] = useState<string>('');
    const [pinned_notices, set_pinned_notices] = useState<Set<string>>(
        new Set(sample_notices.filter(n => n.is_pinned).map(n => n.id))
    );
    const [read_notices, set_read_notices] = useState<Set<string>>(
        new Set(sample_notices.filter(n => n.is_read).map(n => n.id))
    );

    // Filter notices by month and search query
    const filtered_notices = useMemo(() => {
        return sample_notices
            .filter(notice => notice.month === selected_month)
            .filter(
                notice =>
                    notice.title
                        .toLowerCase()
                        .includes(search_query.toLowerCase()) ||
                    notice.content
                        .toLowerCase()
                        .includes(search_query.toLowerCase())
            )
            .map(notice => ({
                ...notice,
                is_pinned: pinned_notices.has(notice.id),
                is_read: read_notices.has(notice.id),
            }))
            .sort((a, b) => (b.is_pinned ? 1 : 0) - (a.is_pinned ? 1 : 0));
    }, [selected_month, search_query, pinned_notices, read_notices]);

    // Calculate stats
    const total_notices = useMemo(
        () => sample_notices.filter(n => n.month === selected_month).length,
        [selected_month]
    );

    const unread_notices = useMemo(() => {
        return sample_notices
            .filter(n => n.month === selected_month)
            .filter(n => !read_notices.has(n.id)).length;
    }, [selected_month, read_notices]);

    const pinned_count = useMemo(() => pinned_notices.size, [pinned_notices]);

    const month_options = Array.from(new Set(sample_notices.map(n => n.month)))
        .sort()
        .reverse()
        .map(m => ({
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
                    on_month_change={val => set_selected_month(String(val))}
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
