import SurveyList from '../components/SurveyList';
import { SurveyData } from '../types/types';

interface DashboardProps {
  surveys: SurveyData[];
  onEditSurveyClick: (surveyID: number) => void;
  onDeleteSurveyClick: (surveyID: number) => void;
}

const Dashboard = ({ surveys, onEditSurveyClick, onDeleteSurveyClick }: DashboardProps) => {
  return (
    <>
      <SurveyList
        surveys={surveys}
        onDeleteSurveyClick={onDeleteSurveyClick}
        onEditSurveyClick={onEditSurveyClick}
      />
    </>
  );
};

export default Dashboard;
