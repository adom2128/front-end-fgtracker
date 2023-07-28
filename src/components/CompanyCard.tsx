interface CompanyCard {
    company: string
}

const CompanyCard = ({ company }: CompanyCard) => {
  return (
    <p>
      {company}
    </p>
  );
};
export default CompanyCard;