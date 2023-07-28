import CompletedSurveyList from '../components/CompletedSurveyList';
import { SurveyData } from '../types/types';

interface CompletedProps {
  surveys: SurveyData[];
}

const Completed = ({ surveys }: CompletedProps) => {
  return (
    <>
      <CompletedSurveyList surveys={surveys} />
    </>
  );
};

export default Completed;
