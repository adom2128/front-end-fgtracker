import { SurveyData } from '../types/types';
import { Row, Col } from 'react-bootstrap';
import PaymentCard from './PaymentCard';
import './PaymentsList.css';

interface PaymentsListProps {
  surveys: SurveyData[];
}

const PaymentsList = ({
  surveys,
}: PaymentsListProps) => {
  return (
    <div className="payment-card-container">
      <Row xs={1} sm={2} lg={3} xl={3} className="g-2">
        {surveys
          ?.filter(
            (survey) => survey.stage === 'Completed' && survey.paymentLeft! > 0
          )
          ?.map((survey) => (
            <Col key={survey.id}>
              <PaymentCard
                paymentLeft={survey.paymentLeft!}
                paymentExpiration={survey.paymentExpirationDate!}
                lastFour={survey.lastFour!}
                link={survey.link!}
              />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default PaymentsList;
