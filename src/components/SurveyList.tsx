import { useState } from 'react';
import Survey from './Survey';
import { SurveyData } from '../types/types';
import MenuButton from './MenuButton';
import { Table } from 'react-bootstrap';
import './SurveyList.css'

interface SurveyListProps {
  surveys: SurveyData[];
  onEditSurveyClick: (surveyID: number) => void;
  onDeleteSurveyClick: (surveyID: number) => void;
}

const SurveyList = ({ surveys, onEditSurveyClick, onDeleteSurveyClick }: SurveyListProps) => {

  return (
    <>
      <div className="table-responsive survey-table">
        <Table hover>
          <thead>
            <tr>
              <th>Company</th>
              <th>Topic</th>
              <th>Payment</th>
              <th>Notes</th>
              <th>Stage</th>
              <th>Date Submitted</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {surveys.map((survey) => (
              <tr key={survey.id}>
                <td>{survey.company}</td>
                <td>{survey.topic}</td>
                <td>{survey.payment}</td>
                <td>{survey.notes}</td>
                <td>{survey.stage}</td>
                <td>{survey.dateSurveyCompleted}</td>
                <td>
                  <MenuButton
                    surveyID={survey.id}
                    onDeleteSurveyClick={onDeleteSurveyClick}
                    onEditSurveyClick={onEditSurveyClick}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default SurveyList;
