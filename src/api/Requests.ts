import axios from 'axios';
import { SurveyData } from '../types/types';

export const getAllSurveys = async () => {
  try {
    const response = await axios.get(
      'https://back-end-fgtracker.onrender.com/surveys'
    );
    return response.data;
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
