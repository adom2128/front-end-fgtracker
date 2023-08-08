import './Payments.css';
import PaymentsList from '../components/PaymentsList';

import { SurveyData } from '../types/types';

interface PaymentsProps {
  surveys: SurveyData[];
}

const Payments = ({
  surveys,
}: PaymentsProps) => {
  return (
    <>
      <PaymentsList
        surveys={surveys}
      />
    </>
  );
};

export default Payments;
