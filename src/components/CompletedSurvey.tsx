import { SurveyData } from '../types/types';

const CompletedSurvey = ({
  id,
  company,
  topic,
  payment,
  notes,
  stage,
  paymentReceived,
  paymentExpirationDate,
  paymentLeft,
  dateSurveyCompleted,
  dateFGCompleted
}: SurveyData) => {
  return (
    <p>
      {company} |{topic} |{payment} |{notes} ____ |{stage} | {paymentReceived} | {paymentExpirationDate && paymentExpirationDate.toString()} |
       {paymentLeft} | {dateSurveyCompleted!.toString()} | {dateFGCompleted!.toString()}
    </p>
  );
};
export default CompletedSurvey;
