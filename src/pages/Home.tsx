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

  const filteredSurveys = surveys.filter((survey) =>
    isOverSixMonthsAgo(new Date(survey.date_completed))
  );

  return (
    <>
    It's been 6 months since you participated in a focus group from one of these companies, apply now:
    <ul>
      {filteredSurveys.map((survey) => (
        <CompanyCard
          company={survey.company}
        />
      ))}
    </ul>
  </>
  );
};

export default Home;
