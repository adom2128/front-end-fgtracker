import { format } from 'date-fns';
import { ApiSurveyData, SurveyData } from './types/types';

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
    id,
    topic,
    last_four,
    link,
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
    id,
    topic,
    lastFour: last_four,
    link,
  };
};

export const formatDate = (date: Date | null) => {
  if (!date) {
    return null;
  }

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

export const findCompanyLink = (company?: string) => {
  if (!company) {
    return;
  }

  const companyFocusGroupApplicationLinks = {
    'Fieldwork NRC': 'https://www.facebook.com/fieldwork.NRC',
    'Fieldwork Denver': 'https://www.facebook.com/FieldworkDenver',
    'Probe Research': 'https://www.facebook.com/probemarketresearch',
    'Winn Winn Research': 'https://www.facebook.com/panelparticipants',
    'Ascendancy Research': 'https://www.facebook.com/AscendancyResearch',
    'Q-Insights': 'https://respondent.q-insights.com/portal/default',
    'Assistance in Marketing': 'https://www.facebook.com/aimhackensack',
    Ipsos: 'https://www.ipsosisay.com/en-us/user/login',
    'Contact Design': 'https://www.facebook.com/yourcontacthub',
    'Clarosicion Research and Marketing':
      'https://crmfirm.com/marketresearch/current-studies/',
    'Fieldwork Chicago-Schaumburg':
      'https://www.facebook.com/FieldworkSchaumburg',
    'Fieldwork Dallas': 'https://www.facebook.com/fieldworkdallas',
    'Schlessinger Group': 'https://www.focusgroup.com/Offerwall/Surveys',
    Sago: 'https://www.focusgroup.com/Offerwall/Surveys',
    'Opinions for Cash': 'https://www.facebook.com/Opinionsforcashllc',
  };
  const companyLinks: { [key: string]: string } =
    companyFocusGroupApplicationLinks;
  return companyLinks[company];
};

export const formatExpDate = (date: string | null | undefined) => {
  if (!date) {
    return null;
  }

  const formattedDate = date.replace(
    /(\d+)(?:st|nd|rd|th)? ([A-Za-z]+), (\d+)/,
    '$1 $2 $3'
  );
  const dateObject = new Date(formattedDate);

  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, '0');
  return `${month}/${year}`;
};

export const calculateTotalBalance = (surveys: SurveyData[]) => {
  if (!surveys) {
    return;
  }

  let totalBalance = 0;
  for (const survey of surveys) {
    if (survey.paymentLeft) {
      totalBalance += survey.paymentLeft;
    }
  }
  return totalBalance.toFixed(2);
};
