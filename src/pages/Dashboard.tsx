import SurveyList from '../components/SurveyList';
import { SurveyData } from '../types/types';

interface DashboardProps {
  surveys: SurveyData[];
  onSurveyMenuButtonClick: () => void;
}

const Dashboard = ({ surveys, onSurveyMenuButtonClick }: DashboardProps) => {
  return (
    <>
      <SurveyList surveys={surveys} onSurveyMenuButtonClick={onSurveyMenuButtonClick}/>
    </>
  );
};

export default Dashboard;
