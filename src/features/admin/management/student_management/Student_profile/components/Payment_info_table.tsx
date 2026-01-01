import { Card, CardContent, CardHeader, CardTitle } from '@/common/components/shadcn-ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/common/components/shadcn-ui/table';

interface PaymentRecord {
  date: string;
  time: string;
  method: string;
  amount: number;
}

interface PaymentInfoTableProps {
  className: string;
  paymentRecords: PaymentRecord[];
  totalDue: number;
  totalPayment: number;
}

export function PaymentInfoTable({
  className,
  paymentRecords,
  totalDue,
  totalPayment,
}: PaymentInfoTableProps) {
  // Calculate total payment dynamically from records
  const calculatedTotalPayment = paymentRecords.reduce((sum, record) => sum + record.amount, 0);

  return (
    <Card>
      <CardHeader className="pb-3 border-b">
        <CardTitle className="text-base font-medium">Class {className}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50 hover:bg-slate-50 border-b-slate-200">
              <TableHead className="text-slate-900 font-medium w-1/4 pl-6">Date</TableHead>
              <TableHead className="text-slate-900 font-medium w-1/4">Time</TableHead>
              <TableHead className="text-slate-900 font-medium w-1/4">Method</TableHead>
              <TableHead className="text-slate-900 font-medium text-right w-1/4 pr-6">
                Amount
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paymentRecords.length > 0 ? (
              paymentRecords.map((record, index) => (
                <TableRow
                  key={index}
                  className="hover:bg-transparent border-b-slate-100"
                >
                  <TableCell className="pl-6 py-4">{record.date}</TableCell>
                  <TableCell className="py-4">{record.time}</TableCell>
                  <TableCell className="py-4">{record.method}</TableCell>
                  <TableCell className="text-right pr-6 py-4">{record.amount}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow className="h-24 hover:bg-transparent">
                <TableCell
                  colSpan={4}
                  className="text-center text-muted-foreground"
                >
                  No payment records found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          <TableFooter className="bg-white border-t-2 border-slate-200">
            <TableRow className="hover:bg-transparent">
              <TableCell
                colSpan={4}
                className="p-4"
              >
                <div className="flex justify-between items-center w-full px-2">
                  <div className="flex-1"></div> {/* Spacer */}
                  <div className="flex gap-12 text-lg font-semibold text-slate-800">
                    <span>Total Due : {totalDue}</span>
                    <span>Total Payment: {calculatedTotalPayment}</span>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  );
}
