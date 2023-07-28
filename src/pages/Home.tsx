import { SurveyData } from '../types/types';
import { Row, Col } from 'react-bootstrap';
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
  const filteredSurveys = surveys.filter(
    (survey) =>
      !survey.date_fg_completed ||
      isOverSixMonthsAgo(new Date(survey.date_fg_completed))
  );

  return (
    <>
      <Row>
        <Col>
          <h1></h1>
          It's been 6 months since you participated in a focus group from one of
          these companies, apply now:
        </Col>
      </Row>
      <Row xs={1} sm={2} lg={3} xl={4} className="g-3">
        {filteredSurveys.map((survey) => (
          <Col>
            {' '}
            <CompanyCard company={survey.company} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
