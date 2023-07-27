import SurveyList from '../components/SurveyList';
import { DashboardProps } from '../types/types';


const Dashboard = (props: DashboardProps) => {

  return (
    <>
      <SurveyList
        surveys={props.surveys} />
    </>
  );
};

export default Dashboard;
