import Survey from './Survey';
import { SurveyListProps } from '../types/types';

const SurveyList = (props: SurveyListProps) => {
  return (
    <>
      <ul>
        {props.surveys.map((survey) => (
          <Survey key={survey.survey_id} />
        ))}
      </ul>
    </>
  );
};

export default SurveyList;
