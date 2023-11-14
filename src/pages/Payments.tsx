import './Payments.css';
import PaymentsList from '../components/PaymentsList';
import { SurveyData } from '../types/types';
import { calculateTotalBalance } from '../helpers';

interface Props {
  surveys: SurveyData[];
}

const Payments = ({ surveys }: Props) => {
  return (
    <>
      <div className="payments-container">
        <span>
          <p className="payment-total">
            Total Available Balance: ${calculateTotalBalance(surveys)}
          </p>
        </span>
        <PaymentsList surveys={surveys} />
      </div>
    </>
  );
};

export default Payments;
