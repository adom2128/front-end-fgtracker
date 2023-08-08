import './Payments.css';
import PaymentsList from '../components/PaymentsList';

import { PaymentData } from '../types/types';

interface PaymentsProps {
  payments: PaymentData[];
  onEditPaymentClick: (paymentID: number) => void;
  onDeletePaymentClick: (paymentID: number) => void;
}

const Payments = ({ payments, onEditPaymentClick, onDeletePaymentClick }: PaymentsProps) => {
  return (
    <>
      <PaymentsList
        payments={payments}
        onDeletePaymentClick={onDeletePaymentClick}
        onEditPaymentClick={onEditPaymentClick}
      />
    </>
  );
};

export default Payments;
