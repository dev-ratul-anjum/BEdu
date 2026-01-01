import { ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/common/components/shadcn-ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/common/components/shadcn-ui/tabs';

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/common/components/shadcn-ui/table';
import { useState } from 'react';
import { Button } from '@/common/components/shadcn-ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/common/components/shadcn-ui/select';
import { PaymentInfoTable } from './components/Payment_info_table';

export default function Student_profile() {
  const navigate = useNavigate();
  const { studentId } = useParams();
  const [selectedClass, setSelectedClass] = useState('2'); // Default to Class 2

  // Mock Data matching the wireframe
  const studentInfo = {
    name: 'Xyz', // Assuming Xyz is the name from wireframe
    class: '2',
    section: 'A',
    roll: '3',
    due: '0 BDT',
    totalPay: '10000 BDT',
    photoUrl: '', // Placeholder
  };

  const personalInfo = {
    fatherName: 'Xyz Xyz',
    motherName: 'ZyX',
    guardianNum: '203405u23',
    address: 'asdfbwuefe',
  };

  // Consolidated Mock Payment Data
  const paymentData: Record<string, { records: any[]; totalDue: number; totalPayment: number }> = {
    '3': {
      records: [
        { date: '10 Jan 2025', time: '09:00 AM', method: 'Cash', amount: 2000 },
        { date: '15 Feb 2025', time: '11:00 AM', method: 'Bkash', amount: 3000 },
      ],
      totalDue: 300,
      totalPayment: 5000,
    },
    '2': {
      records: [
        { date: '20 Jan 2025', time: '10:25 AM', method: 'bkash', amount: 5000 },
        { date: '02 Feb 2025', time: '00:25 AM', method: 'nagad', amount: 5000 },
      ],
      totalDue: 0,
      totalPayment: 10000,
    },
    // '5' and others will default to undefined/empty in usage
  };

  return (
    <div className="p-6 space-y-6">
      <header className="flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => navigate(-1)}
          className="h-10 w-10 rounded-xl bg-white text-primary hover:bg-primary hover:text-white"
        >
          <ArrowLeft size={20} />
        </Button>
        <h1 className="text-2xl font-semibold text-gray-800">
          Information About {studentInfo.name}
        </h1>
      </header>

      <div className="grid grid-cols-1 gap-6">
        {/* Top Profile Section */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Student Photo Placeholder */}
              <div className="h-40 w-40 rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center shrink-0 overflow-hidden">
                {studentInfo.photoUrl ? (
                  <img
                    src={studentInfo.photoUrl}
                    alt="Student"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-blue-50/50" />
                )}
              </div>

              {/* Basic Info */}
              <div className="space-y-1.5 pt-2">
                <div className="flex gap-2 text-[15px]">
                  <span className="font-medium text-slate-700 min-w-[80px]">Name:</span>
                  <span className="text-slate-600 font-medium">{studentInfo.name}</span>
                </div>
                <div className="flex gap-2 text-[15px]">
                  <span className="font-medium text-slate-700 min-w-[80px]">Class:</span>
                  <span className="text-slate-600 font-medium">{studentInfo.class}</span>
                </div>
                <div className="flex gap-2 text-[15px]">
                  <span className="font-medium text-slate-700 min-w-[80px]">Section:</span>
                  <span className="text-slate-600 font-medium">{studentInfo.section}</span>
                </div>
                <div className="flex gap-2 text-[15px]">
                  <span className="font-medium text-slate-700 min-w-[80px]">Roll:</span>
                  <span className="text-slate-600 font-medium">{studentInfo.roll}</span>
                </div>
                <div className="flex gap-2 text-[15px] pt-1">
                  <span className="font-medium text-slate-700 min-w-[80px]">Due:</span>
                  <span className="text-slate-600 font-medium">{studentInfo.due}</span>
                </div>
                <div className="flex gap-2 text-[15px]">
                  <span className="font-medium text-slate-700 min-w-[80px]">Total Pay:</span>
                  <span className="text-slate-600 font-medium">{studentInfo.totalPay}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs Section */}
        <Tabs
          defaultValue="personal"
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-3 max-w-md h-auto p-1 bg-transparent gap-4 justify-start">
            {/* Custom styling to match wireframe 'pill' look with blue background on active */}
            <TabsTrigger
              value="personal"
              className="data-[state=active]:bg-blue-200 data-[state=active]:text-blue-900 border border-slate-200 bg-white shadow-sm h-14 rounded-xl px-4 whitespace-normal leading-tight"
            >
              Personal Info
            </TabsTrigger>
            <TabsTrigger
              value="academic"
              className="data-[state=active]:bg-blue-200 data-[state=active]:text-blue-900 border border-slate-200 bg-white shadow-sm h-14 rounded-xl px-4 whitespace-normal leading-tight"
            >
              Academic Info
            </TabsTrigger>
            <TabsTrigger
              value="payment"
              className="data-[state=active]:bg-blue-200 data-[state=active]:text-blue-900 border border-slate-200 bg-white shadow-sm h-14 rounded-xl px-4 whitespace-normal leading-tight"
            >
              Payment Info
            </TabsTrigger>
          </TabsList>

          <div className="mt-6">
            <TabsContent value="personal">
              <Card>
                <CardContent className="p-8 space-y-3">
                  <div className="grid grid-cols-1 gap-3 max-w-2xl">
                    <div className="grid grid-cols-[140px_1fr] items-center">
                      <span className="font-medium text-slate-700">Father's Name :</span>
                      <span className="text-slate-600">{personalInfo.fatherName}</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-center">
                      <span className="font-medium text-slate-700">Mother's Name :</span>
                      <span className="text-slate-600">{personalInfo.motherName}</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-center">
                      <span className="font-medium text-slate-700">Guardian Num :</span>
                      <span className="text-slate-600">{personalInfo.guardianNum}</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-start">
                      <span className="font-medium text-slate-700">Address :</span>
                      <span className="text-slate-600">{personalInfo.address}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="academic">
              <Card>
                <CardContent className="p-6">
                  <div className="rounded-md border border-slate-200 overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-slate-50 hover:bg-slate-50">
                          <TableHead className="text-slate-900 font-medium">Class</TableHead>
                          <TableHead className="text-center text-slate-900 font-medium">
                            Roll
                          </TableHead>
                          <TableHead className="text-right text-slate-900 font-medium">
                            Final Result
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {/* Empty body as per wireframe, or placeholder rows */}
                        <TableRow className="h-24">
                          <TableCell
                            colSpan={3}
                            className="text-center text-muted-foreground"
                          ></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="payment">
              <div className="space-y-6">
                <div className="w-[200px]">
                  <Select
                    value={selectedClass}
                    onValueChange={setSelectedClass}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Class" />
                    </SelectTrigger>
                    <SelectContent>
                      {/* Generate class options 1-12 */}
                      {Array.from({ length: 12 }, (_, i) => (i + 1).toString())
                        .reverse()
                        .map((cls) => (
                          <SelectItem
                            key={cls}
                            value={cls}
                          >
                            Class {cls}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-8">
                  <PaymentInfoTable
                    className={selectedClass}
                    paymentRecords={paymentData[selectedClass]?.records || []}
                    totalDue={paymentData[selectedClass]?.totalDue || 0}
                    totalPayment={paymentData[selectedClass]?.totalPayment || 0}
                  />
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
