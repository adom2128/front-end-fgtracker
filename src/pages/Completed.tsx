import CompletedSurveyList from '../components/CompletedSurveyList';
import { SurveyData } from '../types/types';

interface CompletedProps {
  surveys: SurveyData[];
  onSurveyMenuButtonClick: () => void;
}

const Completed = ({ surveys, onSurveyMenuButtonClick }: CompletedProps) => {
  
  return (
    <div className="table-container">
      <CompletedSurveyList surveys={surveys} onSurveyMenuButtonClick={onSurveyMenuButtonClick} />
    </div>
  );
};

export default Completed;
