import { Card, Stack, ListGroup, ListGroupItem } from 'react-bootstrap';
import './CompanyCard.css';
import { findCompanyLink } from '../helpers';

interface CompanyCardProps {
  company: string;
}

const CompanyCard = ({ company }: CompanyCardProps) => {
  return (
    <div className="card-space">
      {/* <Card className="text-decoration-none card"> */}
      {/* <Card.Body> */}
      {/* <Stack className="align-items-center justify-content-center h-100"> */}
        {/* <span className="fs-5"> */}
          <a href={findCompanyLink(company)} target="_blank" rel="noreferrer">
            {company}
          </a>
        {/* </span> */}
      {/* </Stack> */}
      {/* </Card.Body> */}
      {/* </Card> */}
    </div>
  );
};
export default CompanyCard;
