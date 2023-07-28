import { Card, Stack } from 'react-bootstrap';
import './CompanyCard.css';

interface CompanyCard {
  company: string;
}

const CompanyCard = ({ company }: CompanyCard) => {
  return (
    <Card className="h-11 text-decoration-none card">
      <Card.Body>
        <Stack
          gap={2}
          className="align-items-center justify-content-center h-100"
        >
          <span className="fs-5">{company}</span>
        </Stack>
      </Card.Body>
    </Card>
  );
};
export default CompanyCard;
