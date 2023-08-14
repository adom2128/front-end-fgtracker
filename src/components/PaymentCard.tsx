import { Card } from 'react-bootstrap';
import './PaymentCard.css';
import { formatExpDate } from '../helpers';

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
      <Card.Body className="card-body-customization">
          <div className="payment-card-details">
            <a href={link} target="_blank" rel="noreferrer">
              Details
            </a>
          </div>

          <div className="payment-left">${paymentLeft}</div>
          <div className="payment-card-footer">
            <span className="left-text">...{lastFour}</span>
            <span className="right-text">Exp: {formatExpDate(paymentExpiration)}</span>
          </div>
      </Card.Body>
    </Card>
  );
};
export default PaymentCard;
