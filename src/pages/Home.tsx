import { SurveyData } from '../types/types';
import { Row, Col } from 'react-bootstrap';
import CompanyCard from '../components/CompanyCard';
import './Home.css';

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
  const uniqueCompanies = new Set<string>(); // Use a Set to keep track of unique companies
  const filteredSurveys = surveys.filter((survey) => {
    if (
      (!survey.dateFGCompleted ||
        isOverSixMonthsAgo(new Date(survey.dateFGCompleted))) &&
      !uniqueCompanies.has(survey.company) // Check if company is not already in the Set
    ) {
      uniqueCompanies.add(survey.company); // Add the company to the Set
      return true; // Include this survey in the filtered list
    }
    return false; // Exclude this survey from the filtered list
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
            <Col>
                <CompanyCard company={survey.company} />
            </Col>
          ))}
      </Row></div>
      
    </div>
  );
};

export default Home;
