import MenuButton from './MenuButton';
import { SurveyData } from '../types/types';
import { StringLiteral } from 'typescript';

interface SurveyTableEntryProps {
  company: string;
  topic: string;
  payment: number | undefined;
  stage: string;
  dateSurveyCompleted: string | undefined;
  surveyID: number;
  onEditSurveyClick: (surveyID: number) => void;
  onDeleteSurveyClick: (surveyID: number) => void;
  onViewSurveyClick: (surveyID: number) => void;
}

const SurveyTableEntry = ({
  company,
  topic,
  payment,
  stage,
  dateSurveyCompleted,
  surveyID,
  onEditSurveyClick,
  onDeleteSurveyClick,
  onViewSurveyClick,
}: SurveyTableEntryProps) => {
  return (
    <>
      <td>{company}</td>
      <td>{topic}</td>
      <td>${payment}</td>
      <td>{stage}</td>
      <td>{dateSurveyCompleted}</td>
      <td>
        <MenuButton
          surveyID={surveyID}
          onViewSurveyClick={onViewSurveyClick}
          onDeleteSurveyClick={onDeleteSurveyClick}
          onEditSurveyClick={onEditSurveyClick}
        />
      </td>
    </>
  );
};

export default SurveyTableEntry;
