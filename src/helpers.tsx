import { ApiSurveyData, SurveyData } from './types/types';
import { format } from 'date-fns';

export const convertFromApi = (apiSurvey: ApiSurveyData): SurveyData => {
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

  const extractLocalDate = (dateString: string): string => {
    if (!dateString) {
      return '';
    }

    const dateObject = new Date(dateString);

    const timezoneOffset = dateObject.getTimezoneOffset();

    const dateLocal = new Date(
      dateObject.getTime() + timezoneOffset * 60 * 1000
    );

    return format(dateLocal, 'MMMM d, yyyy');
  };

  return {
    company,
    dateFGCompleted: extractLocalDate(date_fg_completed),
    dateSurveyCompleted: extractLocalDate(date_survey_completed),
    notes,
    payment,
    paymentExpirationDate: extractLocalDate(payment_expiration_date),
    paymentLeft: payment_left,
    paymentReceived: payment_received,
    stage,
    id: survey_id,
    topic,
  };
};

export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const formatBoolean = (boolean: Boolean | null | undefined) => {
  if (boolean) {
    return 'Yes';
  } else {
    return 'No';
  }
};

export const companyEmails = (company: string) => {
  const companyFocusGroupApplicationLinks = {
    'Fieldwork NRC': 'https://www.facebook.com/fieldwork.NRC',
    'Fieldwork Denver': 'https://www.facebook.com/FieldworkDenver',
  };
  const companyLinks: { [key: string]: string } =
    companyFocusGroupApplicationLinks;
  return companyLinks[company];
};
