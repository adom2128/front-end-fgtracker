import SurveyList from '../components/SurveyList';
import { SurveyData } from '../types/types';

interface DashboardProps {
  surveys: SurveyData[];
}

const Dashboard = (props: DashboardProps) => {
  return (
    <>
      <SurveyList surveys={props.surveys} />
    </>
  );
};

export default Dashboard;
