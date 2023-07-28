import { SurveyData } from '../types/types';

const Survey = ({ id, company, topic, payment, notes, stage }: SurveyData) => {
  return (
    <p>
      {company} |{topic} |{payment} |{notes} ____ |{stage} |
    </p>
  );
};
export default Survey;
