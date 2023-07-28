import CompletedSurvey from './CompletedSurvey';
import { SurveyData } from '../types/types';

interface CompletedSurveyListProps {
  surveys: SurveyData[];
}

const CompletedSurveyList = ({ surveys }: CompletedSurveyListProps) => {
  return (
    <>
      <ul>
        company | topic | payment | notes | stage | payment received | payment
        expiration date | payment left
      </ul>
      <ul>
        {surveys
          .filter((survey) => survey.stage === 'Completed')
          .map((survey) => (
            <CompletedSurvey
              id={survey.id}
              company={survey.company}
              topic={survey.topic}
              payment={survey.payment}
              notes={survey.notes}
              stage={survey.stage}
              date_completed={survey.date_completed}
              payment_received={survey.payment_received}
              payment_expiration_date={survey.payment_expiration_date}
              payment_left={survey.payment_left}
            />
          ))}
      </ul>
    </>
  );
};

export default CompletedSurveyList;
