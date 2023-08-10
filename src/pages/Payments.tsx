import './Payments.css';
import PaymentsList from '../components/PaymentsList';
import { SurveyData } from '../types/types';
import { calculateTotalBalance } from '../helpers';

interface PaymentsProps {
  surveys: SurveyData[];
}

const Payments = ({ surveys }: PaymentsProps) => {
  return (
    <>
      <div className="payments-container">
        <span className="payment-total">
          <p>Total Available Balance: {calculateTotalBalance(surveys)}</p>
        </span>
        <PaymentsList surveys={surveys} />
      </div>
    </>
  );
};

export default Payments;
