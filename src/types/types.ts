export interface SurveyData {
  id?: number;
  company: string;
  topic: string;
  payment: number;
  notes?: string;
  stage?: string;
  date_survey_completed?: Date;
  date_fg_completed?: Date;
  payment_received?: boolean;
  payment_expiration_date?: Date;
  payment_left?: number;
}
