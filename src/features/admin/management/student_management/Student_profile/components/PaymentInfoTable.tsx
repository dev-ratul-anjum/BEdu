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
  if (totalDue === 0) {
    return (
      <Card>
        <CardHeader className="pb-3 border-b">
          <CardTitle className="text-base font-medium">Class {className}</CardTitle>
        </CardHeader>
        <CardContent className="p-6 text-center text-muted-foreground">
          No due found for Class {className}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="pb-3 border-b">
        <CardTitle className="text-base font-medium">Class {className}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50 hover:bg-slate-50 border-b-slate-200">
              <TableHead className="text-slate-900 font-medium w-1/4">Date</TableHead>
              <TableHead className="text-slate-900 font-medium w-1/4">Time</TableHead>
              <TableHead className="text-slate-900 font-medium w-1/4">Method</TableHead>
              <TableHead className="text-slate-900 font-medium text-right w-1/4">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paymentRecords.length > 0 ? (
              paymentRecords.map((record, index) => (
                <TableRow
                  key={index}
                  className="hover:bg-transparent"
                >
                  <TableCell>{record.date}</TableCell>
                  <TableCell>{record.time}</TableCell>
                  <TableCell>{record.method}</TableCell>
                  <TableCell className="text-right">{record.amount}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow className="h-20 hover:bg-transparent">
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            )}
          </TableBody>
          <TableFooter className="bg-white border-t border-slate-200">
            <TableRow>
              <TableCell colSpan={2}></TableCell>
              <TableCell className="text-right font-medium">Total Due : {totalDue}</TableCell>
              <TableCell className="text-right font-medium text-slate-900">
                Total Payment: {totalPayment}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  );
}
