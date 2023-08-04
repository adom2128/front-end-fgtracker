import { Card, Stack } from 'react-bootstrap';
import './CompanyCard.css';
import { findCompanyLink } from '../helpers';

interface CompanyCardProps {
  company: string;
}


const CompanyCard = ({ company }: CompanyCardProps) => {
  return (
    <Card className="h-11 text-decoration-none card">
      <Card.Body>
        <Stack
          gap={2}
          className="align-items-center justify-content-center h-100"
        >
          <span className="fs-5"><a href={findCompanyLink(company)}>{company}</a></span>
        </Stack>
      </Card.Body>
    </Card>
  );
};
export default CompanyCard;
