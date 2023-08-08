import { Card, Stack, Row, Col } from 'react-bootstrap';
import { formatExpDate } from '../helpers';
import './PaymentCard.css';

interface PaymentCardProps {
  paymentLeft: number;
  paymentExpiration: string;
  lastFour: string;
  link: string;
}

const PaymentCard = ({
  paymentLeft,
  paymentExpiration,
  lastFour,
  link,
}: PaymentCardProps) => {
  return (
    <Card className="payment-card card-space">
      <Card.Body>
        <Stack>
          <Row>
            <a href={link} target="_blank" rel="noreferrer">
              Details
            </a>
          </Row>

          <Row className="payment-left">${paymentLeft}</Row>
          <Row>
            <Col>...{lastFour}</Col>
            <Col>Exp: {formatExpDate(paymentExpiration)}</Col>
          </Row>
        </Stack>
      </Card.Body>
    </Card>
  );
};
export default PaymentCard;
