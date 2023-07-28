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
              key={survey.id}
              id={survey.id}
              company={survey.company}
              topic={survey.topic}
              payment={survey.payment}
              notes={survey.notes}
              stage={survey.stage}
              dateSurveyCompleted={survey.dateSurveyCompleted}
              dateFGCompleted={survey.dateFGCompleted}
              paymentReceived={survey.paymentReceived}
              paymentExpirationDate={survey.paymentExpirationDate}
              paymentLeft={survey.paymentLeft}
            />
          ))}
      </ul>
    </>
  );
};

export default CompletedSurveyList;
