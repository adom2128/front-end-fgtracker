export type SurveyData = {
  survey_id: number;
};

export type SurveyDataArray = SurveyData[];

export type SurveyListProps = {
  surveys: SurveyDataArray;
};

export type DashboardProps = {
  surveys: SurveyDataArray;
};
