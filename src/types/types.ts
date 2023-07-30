export interface SurveyData {
  id: number;
  company: string;
  dateFGCompleted?: string;
  dateSurveyCompleted?: string;
  notes?: string;
  payment?: number;
  paymentExpirationDate?: string;
  paymentLeft?: number;
  paymentReceived?: boolean;
  stage?: string;
  topic: string;
}

export interface ApiSurveyData {
  company: string;
  date_fg_completed: string;
  date_survey_completed: string;
  notes: string;
  payment: number;
  payment_expiration_date: string;
  payment_left: number;
  payment_received: boolean;
  stage: string;
  survey_id: number;
  topic: string;
}

// export interface NewSurveyData {
//   company: string,
//   topic: string,
//   payment: number,
//   notes: string,
// };