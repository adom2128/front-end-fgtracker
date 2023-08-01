import axios from 'axios';
import { SurveyData } from '../types/types';
import { convertFromApi } from '../helpers';

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

