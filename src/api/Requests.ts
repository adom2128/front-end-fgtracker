import axios from 'axios';
import { SurveyData, ApiSurveyData } from '../types/types';

export const getAllSurveys = async () => {
  try {
    const response = await axios.get(
      'https://back-end-fgtracker.onrender.com/surveys'
    );
    return response.data.map(convertFromApi);
  } catch (error) {
    console.log(error);
  }
};

export const postSurvey = async (newSurvey: SurveyData) => {
  try {
    const response = await axios.post(
      'https://back-end-fgtracker.onrender.com/surveys',
      newSurvey
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// const extractDate = (dateString: string) => {
//   const dateObject = new Date(dateString);
//     return dateObject.toISOString().slice(0, 10);
// }

// const convertFromApi = (apiSurvey: apiSurveyData) => {
//   const { company, date_fg_completed: dateFGCompleted, date_survey_completed: dateSurveyCompleted, notes, payment, payment_expiration_date: paymentExpirationDate, payment_left: paymentLeft, payment_received: paymentReceived, stage, survey_id: id, topic } = apiSurvey;
//   return {company, dateFGCompleted, dateSurveyCompleted, notes, payment, paymentExpirationDate, paymentLeft, paymentReceived, stage, id, topic};
// }

const convertFromApi = (apiSurvey: ApiSurveyData): SurveyData => {
  const {
    company,
    date_fg_completed,
    date_survey_completed,
    notes,
    payment,
    payment_expiration_date,
    payment_left,
    payment_received,
    stage,
    survey_id,
    topic,
  } = apiSurvey;

  const extractDate = (dateString: string): string => {
    const dateObject = new Date(dateString);
    return dateObject.toISOString().slice(0, 10);
  };

  return {
    company,
    dateFGCompleted: extractDate(date_fg_completed),
    dateSurveyCompleted: extractDate(date_survey_completed),
    notes,
    payment,
    paymentExpirationDate: payment_expiration_date,
    paymentLeft: payment_left,
    paymentReceived: payment_received,
    stage,
    id: survey_id,
    topic,
  };
};
