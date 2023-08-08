import { PaymentData } from '../types/types';
import { Table } from 'react-bootstrap';

interface PaymentsListProps {
  payments: PaymentData[];
  onEditPaymentClick: (paymentID: number) => void;
  onDeletePaymentClick: (paymentID: number) => void;
}

const PaymentsList = ({
  payments,
  onDeletePaymentClick,
  onEditPaymentClick,
}: PaymentsListProps) => {
  return (
    <>
      <div className="table-responsive payment-table">
        <Table hover>
          <thead>
            <tr>
              <th>Last Four Digits</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((payment) => (
              <tr key={payment.paymentId}>
                <td>{payment.lastFour}</td>
                <td>{payment.link}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default PaymentsList;
