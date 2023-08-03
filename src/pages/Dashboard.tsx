import SurveyList from '../components/SurveyList';
import { SurveyData } from '../types/types';
import './Dashboard.css'

interface DashboardProps {
  surveys: SurveyData[];
  onEditSurveyClick: (surveyID: number) => void;
  onDeleteSurveyClick: (surveyID: number) => void;
  onViewSurveyClick: (surveyID: number) => void;
}

const Dashboard = ({ surveys, onEditSurveyClick, onDeleteSurveyClick, onViewSurveyClick }: DashboardProps) => {
  return (
    <>
      <SurveyList
        surveys={surveys}
        onDeleteSurveyClick={onDeleteSurveyClick}
        onEditSurveyClick={onEditSurveyClick}
        onViewSurveyClick={onViewSurveyClick}
      />
    </>
  );
};

export default Dashboard;
