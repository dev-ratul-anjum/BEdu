import { Dynamic_breadcrumb } from '@/common/components/Dynamic_breadcrumb';
import {
  AlertTriangle,
  BookOpen,
  Calendar,
  CheckCircle,
  ChevronDown,
  Clock,
  Filter,
  MapPin,
  MoreHorizontal,
  Plus,
  User,
  X,
} from 'lucide-react';
import { FormEvent, useState } from 'react';

// --- Types & Interfaces ---

type DayOfWeek = 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday';

interface ClassSession {
  id: string;
  subject: string;
  teacher: string;
  room: string;
}

// Key format: "Day-TimeStart" e.g., "Sunday-09:00"
type ScheduleMap = Record<string, ClassSession>;

interface TimeSlot {
  label: string;
  start: string;
  type: 'class' | 'break';
}

interface NewSlotFormData {
  class: string;
  section: string;
  day: DayOfWeek;
  startTime: string;
  endTime: string;
  subject: string;
  teacher: string;
  room: string;
}

// --- Mock Data ---

const DAYS: DayOfWeek[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
const MOCK_CLASSES = ['Class 9', 'Class 10', 'Class 11'];
const MOCK_SECTIONS = ['Section A', 'Section B', 'Section C'];

const INITIAL_TIME_SLOTS: TimeSlot[] = [
  { label: '09:00 AM - 10:00 AM', start: '09:00', type: 'class' },
  { label: '10:00 AM - 11:00 AM', start: '10:00', type: 'class' },
  { label: '11:00 AM - 11:30 AM', start: '11:00', type: 'break' },
  { label: '11:30 AM - 12:30 PM', start: '11:30', type: 'class' },
  { label: '12:30 PM - 01:30 PM', start: '12:30', type: 'class' },
  { label: '01:30 PM - 02:30 PM', start: '13:30', type: 'class' },
];

// Initial schedule data
const INITIAL_SCHEDULE: ScheduleMap = {
  'Sunday-09:00': {
    id: '1',
    subject: 'Mathematics',
    teacher: 'Mr. Rofiq',
    room: '101',
  },
  'Monday-09:00': {
    id: '2',
    subject: 'English',
    teacher: 'Ms. Nasima',
    room: '102',
  },
  'Tuesday-09:00': {
    id: '3',
    subject: 'Science',
    teacher: 'Mr. Dipok',
    room: 'Lab A',
  },
  'Sunday-10:00': {
    id: '4',
    subject: 'History',
    teacher: 'Mrs. Mina',
    room: '103',
  },
  'Tuesday-11:30': {
    id: '5',
    subject: 'Math',
    teacher: 'Mr. Rofiq',
    room: '101',
  },
  // Intentional conflict for demo:
  'Tuesday-10:00': {
    id: '6',
    subject: 'Physics',
    teacher: 'Mr. Rofiq',
    room: 'Lab B',
  },
};

// Default form data for a new slot
const DEFAULT_NEW_SLOT_FORM: NewSlotFormData = {
  class: MOCK_CLASSES[0],
  section: MOCK_SECTIONS[0],
  day: DAYS[0],
  startTime: '09:00',
  endTime: '10:00',
  subject: '',
  teacher: '',
  room: '',
};

export default function Routine_schedule_page() {
  // --- State ---
  const [schedule, setSchedule] = useState<ScheduleMap>(INITIAL_SCHEDULE);
  const [selectedClass, setSelectedClass] = useState('Class 9');
  const [selectedSection, setSelectedSection] = useState('Section A');
  const [conflictResolved, setConflictResolved] = useState(false);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>(INITIAL_TIME_SLOTS);
  const [rowCount, setRowCount] = useState(6);

  // Modal States
  const [isAddSlotModalOpen, setIsAddSlotModalOpen] = useState(false);
  const [isEditSlotModalOpen, setIsEditSlotModalOpen] = useState(false);
  const [isAddTimeModalOpen, setIsAddTimeModalOpen] = useState(false);

  const [newSlotFormData, setNewSlotFormData] = useState<NewSlotFormData>(DEFAULT_NEW_SLOT_FORM);

  const [editingSlot, setEditingSlot] = useState<{
    day: DayOfWeek;
    timeStart: string;
  } | null>(null);
  const [editFormData, setEditFormData] = useState({
    subject: '',
    teacher: '',
    room: '',
  });

  const [newTimeSlot, setNewTimeSlot] = useState({ start: '', end: '' });

  // --- Handlers ---

  const handleResolveConflict = () => {
    const newSchedule = { ...schedule };
    const conflictClass = newSchedule['Tuesday-10:00'];
    delete newSchedule['Tuesday-10:00'];
    newSchedule['Thursday-10:00'] = conflictClass;
    setSchedule(newSchedule);
    setConflictResolved(true);
  };

  const openEditModal = (day: DayOfWeek, timeStart: string) => {
    setEditingSlot({ day, timeStart });
    const existing = schedule[`${day}-${timeStart}`];
    if (existing) {
      setEditFormData({
        subject: existing.subject,
        teacher: existing.teacher,
        room: existing.room,
      });
    } else {
      setEditFormData({ subject: '', teacher: '', room: '' });
    }
    setIsEditSlotModalOpen(true);
  };

  const handleSaveEdit = (e: FormEvent) => {
    e.preventDefault();
    if (!editingSlot) return;

    if (!editFormData.subject || !editFormData.teacher) {
      console.error('Subject and Teacher are required');
      return;
    }

    const key = `${editingSlot.day}-${editingSlot.timeStart}`;
    setSchedule((prev) => ({
      ...prev,
      [key]: {
        id: Math.random().toString(36).substr(2, 9),
        ...editFormData,
      },
    }));

    setIsEditSlotModalOpen(false);
  };

  const handleDeleteSlot = () => {
    if (!editingSlot) return;
    const key = `${editingSlot.day}-${editingSlot.timeStart}`;
    const newSchedule = { ...schedule };
    delete newSchedule[key];
    setSchedule(newSchedule);
    setIsEditSlotModalOpen(false);
  };

  const handleAddNewSlot = (e: FormEvent) => {
    e.preventDefault();

    if (
      !newSlotFormData.subject ||
      !newSlotFormData.teacher ||
      !newSlotFormData.startTime ||
      !newSlotFormData.day
    ) {
      console.error('Missing required fields for new slot.');
      return;
    }

    const key = `${newSlotFormData.day}-${newSlotFormData.startTime}`;

    if (schedule[key]) {
      console.error('A class already exists in this slot.');
      return;
    }

    setSchedule((prev) => ({
      ...prev,
      [key]: {
        id: Math.random().toString(36).substr(2, 9),
        subject: newSlotFormData.subject,
        teacher: newSlotFormData.teacher,
        room: newSlotFormData.room,
      },
    }));

    setNewSlotFormData(DEFAULT_NEW_SLOT_FORM);
    setIsAddSlotModalOpen(false);
  };

  const handleAddTimeSlot = (e: FormEvent) => {
    e.preventDefault();

    if (!newTimeSlot.start || !newTimeSlot.end) {
      console.error('Start time and end time are required');
      return;
    }

    const formatTime = (time: string) => {
      const [hours, minutes] = time.split(':');
      const hour = parseInt(hours);
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour % 12 || 12;
      return `${displayHour}:${minutes} ${ampm}`;
    };

    const newSlot: TimeSlot = {
      label: `${formatTime(newTimeSlot.start)} - ${formatTime(newTimeSlot.end)}`,
      start: newTimeSlot.start,
      type: 'class',
    };

    setTimeSlots((prev) => {
      const newSlots = [...prev, newSlot];
      newSlots.sort((a, b) => a.start.localeCompare(b.start));
      return newSlots;
    });

    setNewTimeSlot({ start: '', end: '' });
    setIsAddTimeModalOpen(false);
    setRowCount((prev) => prev + 1);
  };

  const handleAddRow = () => {
    setRowCount((prev) => prev + 1);
    const lastTimeSlot = timeSlots[timeSlots.length - 1];
    const lastHour = parseInt(lastTimeSlot.start.split(':')[0]);
    const newStartTime = `${(lastHour + 1).toString().padStart(2, '0')}:00`;
    const newEndTime = `${(lastHour + 2).toString().padStart(2, '0')}:00`;

    const formatTime = (time: string) => {
      const [hours] = time.split(':');
      const hour = parseInt(hours);
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour % 12 || 12;
      return `${displayHour}:00 ${ampm}`;
    };

    const newSlot: TimeSlot = {
      label: `${formatTime(newStartTime)} - ${formatTime(newEndTime)}`,
      start: newStartTime,
      type: 'class',
    };

    setTimeSlots((prev) => [...prev, newSlot]);
  };

  const renderFormInput = (
    label: string,
    name: keyof NewSlotFormData,
    type: 'text' | 'time' = 'text',
    options?: string[]
  ) => (
    <div className="relative">
      <label className="block text-xs font-medium text-slate-500 mb-1">{label}</label>
      {options ? (
        <>
          <select
            name={name}
            value={newSlotFormData[name] as string}
            onChange={(e) =>
              setNewSlotFormData({
                ...newSlotFormData,
                [name]: e.target.value as any,
              })
            }
            className="w-full appearance-none pl-4 pr-10 py-2 bg-white border border-slate-200 text-slate-700 text-sm  focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all cursor-pointer"
          >
            {options.map((opt) => (
              <option
                key={opt}
                value={opt}
              >
                {opt}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 mt-2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        </>
      ) : (
        <input
          type={type}
          name={name}
          value={newSlotFormData[name]}
          onChange={(e) =>
            setNewSlotFormData({
              ...newSlotFormData,
              [name]: e.target.value,
            })
          }
          required={['subject', 'teacher'].includes(name)}
          placeholder={label}
          className="w-full px-4 py-2  border border-slate-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-sm"
        />
      )}
    </div>
  );

  return (
    <>
      <Dynamic_breadcrumb />

      <main className="min-h-screen space-y-6">
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6  shadow-sm border border-slate-200">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-3">
              <div className="p-2.5 bg-indigo-600  shadow-md shadow-indigo-500/20">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              Routine & Schedule Management
            </h1>
            <p className="text-slate-500 mt-1.5 ml-1 text-sm">
              Manage class timings, assign teachers, and resolve conflicts.
            </p>
          </div>
          <div className="hidden md:flex flex-col items-end mr-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Current Term
            </span>
            <span className="text-sm font-medium text-slate-700">Fall 2024</span>
          </div>
        </div>
        {/* --- Filters and Controls --- */}
        <div className="bg-white  border border-slate-200 shadow-sm p-4">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              {/* Class Selector */}
              <div className="relative group w-full sm:w-48">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <BookOpen className="w-4 h-4 text-slate-500" />
                </div>
                <select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="w-full appearance-none pl-9 pr-10 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium  hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all cursor-pointer"
                >
                  {MOCK_CLASSES.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
              {/* Section Selector */}
              <div className="relative group w-full sm:w-48">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Filter className="w-4 h-4 text-slate-500" />
                </div>
                <select
                  value={selectedSection}
                  onChange={(e) => setSelectedSection(e.target.value)}
                  className="w-full appearance-none pl-9 pr-10 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium  hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all cursor-pointer"
                >
                  {MOCK_SECTIONS.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
              {/* Add Time Button */}
              <button
                onClick={() => setIsAddTimeModalOpen(true)}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-50 text-indigo-700  hover:bg-indigo-100 font-medium transition-all border border-indigo-200 whitespace-nowrap"
              >
                <Plus className="w-4 h-4" />
                Add Time
              </button>
              {/* Add Row Button */}
              <button
                onClick={handleAddRow}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-green-50 text-green-700  hover:bg-green-100 font-medium transition-all border border-green-200 whitespace-nowrap"
              >
                <Plus className="w-4 h-4" />
                Add Row ({rowCount})
              </button>
            </div>
            {/* Add Routine Button */}
            <button
              onClick={() => setIsAddSlotModalOpen(true)}
              className="flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-600 text-white  hover:bg-indigo-700 font-medium transition-all shadow-md shadow-indigo-500/20 whitespace-nowrap w-full lg:w-auto"
            >
              <Plus className="w-5 h-5" />
              Add Routine
            </button>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500 mt-4">
            <span className="flex items-center gap-1">
              <div className="w-3 h-3 bg-indigo-50 border border-indigo-200 "></div> Academic
            </span>
            <span className="flex items-center gap-1 ml-2">
              <div className="w-3 h-3 bg-amber-50 border border-amber-200 "></div> Break
            </span>
          </div>
        </div>
        {/* --- Conflict Alert --- */}
        {!conflictResolved && (
          <div className="bg-rose-50 border-l-4 border-rose-500 p-5 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-4">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-white  shadow-sm">
                <AlertTriangle className="h-6 w-6 text-rose-500" />
              </div>
              <div>
                <h4 className="font-bold text-rose-800 text-lg">Conflict Detected</h4>
                <p className="text-rose-700 text-sm mt-1">
                  <strong>Tuesday, 10:00 AM:</strong> Teacher{' '}
                  <span className="font-semibold">Mr. Rofiq</span> is assigned to two classes
                  simultaneously (Class 7 & Class 9).
                </p>
              </div>
            </div>
            <button
              onClick={handleResolveConflict}
              className="whitespace-nowrap px-4 py-2 bg-rose-600 text-white text-sm font-medium  hover:bg-rose-700 transition-colors shadow-sm"
            >
              Resolve Conflict
            </button>
          </div>
        )}
        {/* --- Schedule Table --- */}
        <div className="bg-white border border-slate-200  shadow-sm overflow-hidden">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50/80">
                <tr>
                  <th className="px-4 py-4 text-center text-xs font-bold text-slate-500 uppercase tracking-wider w-32 min-w-[120px] sticky left-0 bg-slate-50 z-10 border-r border-slate-200 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                    Time Slot
                  </th>
                  {DAYS.map((day) => (
                    <th
                      key={day}
                      className="px-4 py-4 text-center text-xs font-bold text-slate-500 uppercase tracking-wider min-w-[160px]"
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {timeSlots.slice(0, rowCount).map((slot, idx) => (
                  <tr
                    key={idx}
                    className={
                      slot.type === 'break' ? 'bg-amber-50/40' : 'group hover:bg-slate-50/50'
                    }
                  >
                    {/* Time Column */}
                    <td className="px-4 py-4 whitespace-nowrap text-xs font-semibold text-slate-600 border-r border-slate-200 text-center sticky left-0 bg-white group-hover:bg-slate-50 transition-colors z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                      <div className="flex flex-col items-center gap-1">
                        <Clock className="w-4 h-4 text-slate-400" />
                        <span>{slot.label}</span>
                      </div>
                    </td>
                    {/* Break Row Logic */}
                    {slot.type === 'break' ? (
                      <td
                        colSpan={DAYS.length}
                        className="px-4 py-3 text-center"
                      >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5  bg-amber-100/50 text-amber-700 text-sm font-bold border border-amber-200 border-dashed">
                          ☕ Tiffin Break / Prayer Break
                        </span>
                      </td>
                    ) : (
                      /* Class Slots */
                      DAYS.map((day) => {
                        const session = schedule[`${day}-${slot.start}`];
                        const isConflict =
                          !conflictResolved && day === 'Tuesday' && slot.start === '10:00';
                        return (
                          <td
                            key={`${day}-${slot.start}`}
                            className={`p-2 border-r border-slate-100 last:border-0 relative align-top h-28 ${isConflict ? 'bg-rose-100/50' : ''}`}
                          >
                            {session ? (
                              <div
                                onClick={() => openEditModal(day, slot.start)}
                                className={`h-full w-full p-3  border hover:shadow-md transition-all cursor-pointer group/card flex flex-col justify-between ${isConflict ? 'bg-rose-100 border-rose-300' : 'bg-indigo-50 border-indigo-100 hover:border-indigo-300'}`}
                              >
                                <div>
                                  <div
                                    className={`font-bold text-sm mb-1 ${isConflict ? 'text-rose-900' : 'text-indigo-900'}`}
                                  >
                                    {session.subject}
                                  </div>
                                  <div
                                    className={`flex items-center gap-1.5 text-xs mb-0.5 ${isConflict ? 'text-rose-700' : 'text-indigo-700'}`}
                                  >
                                    <User className="w-3 h-3" /> {session.teacher}
                                  </div>
                                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                    <MapPin className="w-3 h-3" /> Room {session.room}
                                  </div>
                                </div>
                                <div className="opacity-0 group-hover/card:opacity-100 transition-opacity flex justify-end">
                                  <div className="p-1 bg-white  shadow-sm text-indigo-600">
                                    <MoreHorizontal className="w-3 h-3" />
                                  </div>
                                </div>
                                {isConflict && (
                                  <AlertTriangle className="absolute top-2 right-2 w-4 h-4 text-rose-600" />
                                )}
                              </div>
                            ) : (
                              <div
                                onClick={() => openEditModal(day, slot.start)}
                                className="h-full w-full  border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-2 text-slate-300 hover:border-indigo-300 hover:text-indigo-500 hover:bg-indigo-50/30 transition-all cursor-pointer"
                              >
                                <Plus className="w-6 h-6" />
                                <span className="text-xs font-medium">Add Class</span>
                              </div>
                            )}
                          </td>
                        );
                      })
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* --- Add Routine Modal (Same for button and cell clicks) --- */}
        {(isAddSlotModalOpen || isEditSlotModalOpen) && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
              onClick={() => {
                setIsAddSlotModalOpen(false);
                setIsEditSlotModalOpen(false);
              }}
            ></div>
            <div className="flex min-h-full items-center justify-center p-4">
              <div className="relative bg-white  shadow-xl w-full max-w-5xl transform transition-all">
                {/* Modal Header */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-slate-100 bg-indigo-50 ">
                  <h3 className="text-xl font-bold text-indigo-800 flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    {isAddSlotModalOpen ? 'Schedule New Class Slot' : 'Edit Class Slot'}
                  </h3>
                  <button
                    onClick={() => {
                      setIsAddSlotModalOpen(false);
                      setIsEditSlotModalOpen(false);
                    }}
                    className="p-2 text-slate-500 hover:bg-indigo-100  transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                {/* Form */}
                <div className="p-6">
                  <form
                    onSubmit={isAddSlotModalOpen ? handleAddNewSlot : handleSaveEdit}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4"
                  >
                    {isAddSlotModalOpen ? (
                      <>
                        {renderFormInput('Class', 'class', 'text', MOCK_CLASSES)}
                        {renderFormInput('Section', 'section', 'text', MOCK_SECTIONS)}
                        {renderFormInput('Day', 'day', 'text', DAYS)}
                        {renderFormInput(
                          'Start Time',
                          'startTime',
                          'text',
                          timeSlots.filter((t) => t.type === 'class').map((t) => t.start)
                        )}
                        {renderFormInput('End Time', 'endTime', 'time')}
                        {renderFormInput('Subject', 'subject')}
                        {renderFormInput('Teacher', 'teacher')}
                        {renderFormInput('Room Number', 'room')}
                      </>
                    ) : (
                      <>
                        <div className="col-span-2">
                          <label className="block text-xs font-medium text-slate-500 mb-1">
                            Day
                          </label>
                          <div className="px-4 py-2 bg-slate-50  text-sm">{editingSlot?.day}</div>
                        </div>
                        <div className="col-span-2">
                          <label className="block text-xs font-medium text-slate-500 mb-1">
                            Time Slot
                          </label>
                          <div className="px-4 py-2 bg-slate-50  text-sm">
                            {timeSlots.find((t) => t.start === editingSlot?.timeStart)?.label}
                          </div>
                        </div>
                        <div className="col-span-2 md:col-span-4 lg:col-span-4">
                          <label className="block text-xs font-medium text-slate-500 mb-1">
                            Subject
                          </label>
                          <input
                            type="text"
                            value={editFormData.subject}
                            onChange={(e) =>
                              setEditFormData({
                                ...editFormData,
                                subject: e.target.value,
                              })
                            }
                            placeholder="e.g. Mathematics"
                            className="w-full px-4 py-2  border border-slate-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-sm"
                          />
                        </div>
                        <div className="col-span-2 md:col-span-4 lg:col-span-2">
                          <label className="block text-xs font-medium text-slate-500 mb-1">
                            Teacher
                          </label>
                          <input
                            type="text"
                            value={editFormData.teacher}
                            onChange={(e) =>
                              setEditFormData({
                                ...editFormData,
                                teacher: e.target.value,
                              })
                            }
                            placeholder="e.g. Mr. Rofiq"
                            className="w-full px-4 py-2  border border-slate-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-sm"
                          />
                        </div>
                        <div className="col-span-2 md:col-span-4 lg:col-span-2">
                          <label className="block text-xs font-medium text-slate-500 mb-1">
                            Room Number
                          </label>
                          <input
                            type="text"
                            value={editFormData.room}
                            onChange={(e) =>
                              setEditFormData({
                                ...editFormData,
                                room: e.target.value,
                              })
                            }
                            placeholder="e.g. 101"
                            className="w-full px-4 py-2  border border-slate-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-sm"
                          />
                        </div>
                      </>
                    )}
                    <div className="col-span-2 md:col-span-4 lg:col-span-8 flex justify-end gap-3 pt-4 border-t border-slate-100 mt-4">
                      <button
                        type="button"
                        onClick={() => {
                          if (isAddSlotModalOpen) {
                            setNewSlotFormData(DEFAULT_NEW_SLOT_FORM);
                            setIsAddSlotModalOpen(false);
                          } else {
                            setIsEditSlotModalOpen(false);
                          }
                        }}
                        className="px-5 py-2 border border-slate-300 text-slate-600  hover:bg-slate-100 font-medium transition-colors"
                      >
                        Cancel
                      </button>
                      {isEditSlotModalOpen && (
                        <button
                          type="button"
                          onClick={handleDeleteSlot}
                          className="px-5 py-2 border border-rose-200 text-rose-600  hover:bg-rose-50 font-medium transition-colors"
                        >
                          Clear Slot
                        </button>
                      )}
                      <button
                        type="submit"
                        className="px-5 py-2 bg-indigo-600 text-white  hover:bg-indigo-700 font-medium transition-colors shadow-md shadow-indigo-500/20 flex items-center gap-2"
                      >
                        <CheckCircle className="w-4 h-4" />
                        {isAddSlotModalOpen ? 'Add Schedule' : 'Save Changes'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* --- Add Time Slot Modal --- */}
        {isAddTimeModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
              onClick={() => setIsAddTimeModalOpen(false)}
            ></div>
            <div className="flex min-h-full items-center justify-center p-4">
              <div className="relative bg-white  shadow-xl w-full max-w-md transform transition-all">
                <div className="flex justify-between items-center px-6 py-4 border-b border-slate-100 bg-blue-50 ">
                  <h3 className="text-xl font-bold text-blue-800 flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    Add New Time Slot
                  </h3>
                  <button
                    onClick={() => setIsAddTimeModalOpen(false)}
                    className="p-2 text-slate-500 hover:bg-blue-100  transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <form
                  onSubmit={handleAddTimeSlot}
                  className="p-6 space-y-4"
                >
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Start Time
                    </label>
                    <input
                      type="time"
                      value={newTimeSlot.start}
                      onChange={(e) =>
                        setNewTimeSlot({
                          ...newTimeSlot,
                          start: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2  border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      End Time
                    </label>
                    <input
                      type="time"
                      value={newTimeSlot.end}
                      onChange={(e) =>
                        setNewTimeSlot({
                          ...newTimeSlot,
                          end: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2  border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                      required
                    />
                  </div>
                  <div className="flex gap-3 pt-4 mt-2">
                    <button
                      type="button"
                      onClick={() => setIsAddTimeModalOpen(false)}
                      className="flex-1 px-4 py-2 border border-slate-300 text-slate-600  hover:bg-slate-100 font-medium transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-4 py-2 bg-blue-600 text-white  hover:bg-blue-700 font-medium transition-colors shadow-sm flex justify-center items-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      Add Time Slot
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
