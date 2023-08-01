import axios from 'axios';
import { format } from 'date-fns';
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

export const postSurvey = async (newSurvey: Partial<SurveyData>) => {
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

export const updateSurvey = async (
  updatedSurvey: SurveyData,
  surveyID: number
) => {
  try {
    console.log(updatedSurvey);
    const response = await axios.put(
      `https://back-end-fgtracker.onrender.com/surveys/${surveyID}`,
      updatedSurvey
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteSurvey = async (surveyID: number) => {
  try {
    const response = await axios.delete(
      `https://back-end-fgtracker.onrender.com/surveys/${surveyID}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

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

  // const extractDate = (dateString: string): string => {
  //   const dateObject = new Date(dateString);
  //   return dateObject.toISOString().slice(0, 10);
  // };

  const extractLongDateFormat = (dateString: string): string => {
    if (!dateString) {
      return '';
    }

    const dateObject = new Date(dateString);
    const longDateFormat = format(dateObject, 'MMMM d, yyyy');

    return longDateFormat;
  };

  return {
    company,
    dateFGCompleted: extractLongDateFormat(date_fg_completed),
    dateSurveyCompleted: extractLongDateFormat(date_survey_completed),
    notes,
    payment,
    paymentExpirationDate: extractLongDateFormat(payment_expiration_date),
    paymentLeft: payment_left,
    paymentReceived: payment_received,
    stage,
    id: survey_id,
    topic,
  };
};
