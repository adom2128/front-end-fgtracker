import Survey from './Survey';
// import { SurveyListProps } from '../types/types';
import { SurveyData } from '../types/types';

interface SurveyListProps {
  surveys: SurveyData[];
}

const SurveyList = ({ surveys }: SurveyListProps) => {
  return (
    <>
      <ul>
        {surveys.map((survey) => (
          <Survey
            id={survey.id}
            company={survey.company}
            topic={survey.topic}
            payment={survey.payment}
            notes={survey.notes}
            stage={survey.stage}
            payment_received={survey.payment_received}
            payment_expiration_date={survey.payment_expiration_date}
            payment_left={survey.payment_left}
          />
        ))}
      </ul>
    </>
  );
};

export default SurveyList;
