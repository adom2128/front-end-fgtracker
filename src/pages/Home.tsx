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
  const filteredSurveys = surveys.filter(
    (survey) =>
      !survey.dateFGCompleted ||
      isOverSixMonthsAgo(new Date(survey.dateFGCompleted))
  );

  return (
    <div className="home-container">
      <Row>
        <p></p>
        <p>
          It's been 6 months since you participated in a focus group from one of
          these companies, apply now:
        </p>
      </Row>
      <Row xs={1} sm={2} lg={3} xl={4} className="g-3">
        {filteredSurveys.map((survey) => (
          <Col key={survey.id}>
            <CompanyCard company={survey.company} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
