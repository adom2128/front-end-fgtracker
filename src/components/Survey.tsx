import { SurveyData } from '../types/types';

const Survey = ({
  id,
  company,
  topic,
  payment,
  notes,
  stage,
  payment_received,
  payment_expiration_date,
  payment_left,
}: SurveyData) => {
  return (
    <h1>
      {' '}
      survey {id}, company {company}
    </h1>
  );
};
export default Survey;
