import { SurveyData } from '../types/types';

const CompletedSurvey = ({
  id,
  company,
  topic,
  payment,
  notes,
  stage,
  payment_received,
  payment_expiration_date,
  payment_left,
  date_survey_completed,
  date_fg_completed
}: SurveyData) => {
  return (
    <p>
      {company} |{topic} |{payment} |{notes} ____ |{stage} | {payment_received} | {payment_expiration_date && payment_expiration_date.toString()} | {payment_left} | {date_survey_completed!.toString()} |{date_survey_completed!.toString()} | {date_fg_completed!.toString()}
    </p>
  );
};
export default CompletedSurvey;
