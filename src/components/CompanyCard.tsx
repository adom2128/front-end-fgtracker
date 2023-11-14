import './CompanyCard.css';
import { findCompanyLink } from '../helpers';

interface Props {
  company: string;
}

const CompanyCard = ({ company }: Props) => {
  return (
    <div className="card-space">
      <a href={findCompanyLink(company)} target="_blank" rel="noreferrer">
        {company}
      </a>
    </div>
  );
};
export default CompanyCard;
