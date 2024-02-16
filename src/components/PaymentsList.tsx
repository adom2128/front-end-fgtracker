import { Row, Col } from 'react-bootstrap';
import './PaymentsList.css';
import PaymentCard from './PaymentCard';
import { SurveyData } from '../types/types';

interface Props {
  surveys: SurveyData[];
}

const PaymentsList = ({ surveys }: Props) => {
  if (!surveys) {
    return null;
  }

  return (
    <div className="payment-card-container">
      <Row xs={1} sm={2} lg={3} xl={3} className="g-2">
        {surveys
          .filter(
            (survey) =>
              survey.stage === 'Completed' &&
              survey.paymentLeft &&
              survey.paymentLeft > 0
          )
          .map((survey) => (
            <Col key={survey.id}>
              <PaymentCard
                paymentLeft={survey.paymentLeft}
                paymentExpiration={survey.paymentExpirationDate}
                lastFour={survey.lastFour}
                link={survey.link}
              />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default PaymentsList;
