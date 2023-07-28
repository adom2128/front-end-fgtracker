import Survey from './Survey';
import { SurveyData } from '../types/types';

interface SurveyListProps {
  surveys: SurveyData[];
}

const SurveyList = ({ surveys }: SurveyListProps) => {
  return (
    <>
      <ul>company | topic | payment | notes | stage | date survey</ul>
      <ul>
        {surveys.map((survey) => (
          <Survey
            key={survey.id}
            id={survey.id}
            company={survey.company}
            topic={survey.topic}
            payment={survey.payment}
            notes={survey.notes}
            stage={survey.stage}
            dateSurveyCompleted={survey.dateSurveyCompleted}
          />
          
        ))}
      </ul>
    </>
  );
};

export default SurveyList;
