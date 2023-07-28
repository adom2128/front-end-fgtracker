import SurveyList from '../components/SurveyList';
import { SurveyData } from '../types/types';

interface DashboardProps {
  surveys: SurveyData[];
}

const Dashboard = ({ surveys }: DashboardProps) => {
  return (
    <>
      <SurveyList surveys={surveys} />
    </>
  );
};

export default Dashboard;
