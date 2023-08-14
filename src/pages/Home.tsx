import { Row, Col } from 'react-bootstrap';
import './Home.css';
import { SurveyData } from '../types/types';
import CompanyCard from '../components/CompanyCard';

interface HomeProps {
  surveys: SurveyData[];
}

function isOverSixMonthsAgo(date: Date) {
  const currentDate = new Date();

  const monthDifference =
    (currentDate.getFullYear() - date.getFullYear()) * 12 +
    (currentDate.getMonth() - date.getMonth());

  return monthDifference > 6;
}

const Home = ({ surveys }: HomeProps) => {
  const uniqueCompanies = new Set<string>();
  const filteredSurveys = surveys.filter((survey) => {
    if (
      (!survey.dateFGCompleted ||
        isOverSixMonthsAgo(new Date(survey.dateFGCompleted))) &&
      !uniqueCompanies.has(survey.company)
    ) {
      uniqueCompanies.add(survey.company);
      return true;
    }
    return false;
  });

  return (
    <div className="home-container">
      <Row className="top-row">
        <p className="home-text">
          It's been 6 months since you participated in a focus group from one of
          these companies, apply now:
        </p>
      </Row>
      <div className="company-card-area">
        <Row xs={1} sm={2} lg={3} xl={3} className="g-3">
          {filteredSurveys.map((survey) => (
            <Col key={survey.id}>
              <CompanyCard company={survey.company} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
