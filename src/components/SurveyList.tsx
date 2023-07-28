import Survey from './Survey';
import { SurveyData } from '../types/types';

interface SurveyListProps {
  surveys: SurveyData[];
}

const SurveyList = ({ surveys }: SurveyListProps) => {
  return (
    <>
      <ul>company | topic | payment | notes | stage</ul>
      <ul>
        {surveys.map((survey) => (
          <Survey
            id={survey.id}
            company={survey.company}
            topic={survey.topic}
            payment={survey.payment}
            notes={survey.notes}
            date_completed={survey.date_completed}
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
