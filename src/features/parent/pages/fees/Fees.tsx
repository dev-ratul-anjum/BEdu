import React, { useMemo, useState } from 'react';
import Fees_Header from './components/fees_header';
import Fees_Overview from './components/fees_overview';
import Fees_Table, { Invoice } from './components/fees_table';
import { Card, Modal, Typography } from 'antd';

const sample_invoices: Invoice[] = [
  {
    key: '1',
    invoice_no: 'INV-001',
    student_name: 'Rahim Uddin',
    due_date: '2025-12-10',
    amount: 1500,
    status: 'due',
  },
  {
    key: '2',
    invoice_no: 'INV-002',
    student_name: 'Sadia Akter',
    due_date: '2025-11-20',
    amount: 2000,
    status: 'paid',
  },
  {
    key: '3',
    invoice_no: 'INV-003',
    student_name: 'Akbar Hossain',
    due_date: '2025-10-30',
    amount: 1800,
    status: 'overdue',
  },
];

const Fees: React.FC = () => {
  const [invoices, set_invoices] = useState<Invoice[]>(sample_invoices);
  const [selected_month, set_selected_month] = useState<string>('all');
  const [selected_year, set_selected_year] = useState<string>('2025');
  const [search_query, set_search_query] = useState<string>('');

  const total_due = useMemo(
    () => invoices.filter((i) => i.status !== 'paid').reduce((s, i) => s + i.amount, 0),
    [invoices]
  );
  const total_paid = useMemo(
    () => invoices.filter((i) => i.status === 'paid').reduce((s, i) => s + i.amount, 0),
    [invoices]
  );
  const overdue_count = useMemo(
    () => invoices.filter((i) => i.status === 'overdue').length,
    [invoices]
  );

  const handle_pay = (row: Invoice) => {
    set_invoices((prev) => prev.map((i) => (i.key === row.key ? { ...i, status: 'paid' } : i)));
  };

  const [is_modal_open, set_is_modal_open] = useState<boolean>(false);
  const [active_invoice, set_active_invoice] = useState<Invoice | null>(null);

  const handle_view = (row: Invoice) => {
    set_active_invoice(row);
    set_is_modal_open(true);
  };

  const handle_modal_close = () => {
    set_is_modal_open(false);
    set_active_invoice(null);
  };

  const filtered_invoices = useMemo(() => {
    return invoices.filter((i) => {
      if (selected_month !== 'all') {
        const month = i.due_date.split('-')[1];
        if (month !== selected_month) return false;
      }
      if (selected_year) {
        const year = i.due_date.split('-')[0];
        if (year !== selected_year) return false;
      }
      if (search_query) {
        const q = search_query.toLowerCase();
        if (
          !(`${i.student_name}`.toLowerCase().includes(q) || i.invoice_no.toLowerCase().includes(q))
        )
          return false;
      }
      return true;
    });
  }, [invoices, selected_month, selected_year, search_query]);

  return (
    <div>
      <div className="mb-6">
        <Typography.Title
          level={3}
          className="!mb-0"
        >
          Fees
        </Typography.Title>
      </div>

      <Fees_Header
        month={selected_month}
        year={selected_year}
        on_month_change={set_selected_month}
        on_year_change={set_selected_year}
        on_search={set_search_query}
      />

      <Fees_Overview
        total_due={total_due}
        total_paid={total_paid}
        overdue_count={overdue_count}
      />

      <Fees_Table
        data={filtered_invoices}
        on_pay={handle_pay}
        on_view={handle_view}
      />

      <Modal
        title={`Invoice Details ${active_invoice ? `(${active_invoice.invoice_no})` : ''}`}
        open={is_modal_open}
        onOk={handle_modal_close}
        onCancel={handle_modal_close}
        width={700}
      >
        {active_invoice ? (
          <div>
            <p>
              <strong>Invoice:</strong> {active_invoice.invoice_no}
            </p>
            <p>
              <strong>Student:</strong> {active_invoice.student_name}
            </p>
            <p>
              <strong>Due Date:</strong> {active_invoice.due_date}
            </p>
            <p>
              <strong>Amount:</strong> $ {active_invoice.amount.toFixed(2)}
            </p>
            <p>
              <strong>Status:</strong> {active_invoice.status}
            </p>
            <hr />
            <p className="text-sm text-gray-600">
              Additional invoice details can be shown here — breakdown, items, payment history,
              notes, etc.
            </p>
          </div>
        ) : (
          <p>No invoice selected</p>
        )}
      </Modal>
    </div>
  );
};

export default Fees;
