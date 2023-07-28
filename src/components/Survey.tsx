import { SurveyData } from '../types/types';

const Survey = ({
  id,
  company,
  topic,
  payment,
  notes,
  stage,
  dateSurveyCompleted,
}: SurveyData) => {
  return (
    <p>
      {company} |{topic} |{payment} |{notes} ____ |{stage} |
      {dateSurveyCompleted}
    </p>
  );
};
export default Survey;
