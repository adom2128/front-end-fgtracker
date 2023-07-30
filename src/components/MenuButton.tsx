import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from 'react-bootstrap';
import './MenuButton.css';

interface MenuButtonProps {
  surveyID: number;
  onSurveyMenuButtonClick: () => void;
}

const MenuButton = ({ onSurveyMenuButtonClick, surveyID }: MenuButtonProps) => {
  return (
    <>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <FontAwesomeIcon icon={faEllipsisVertical} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </>
  );
};

export default MenuButton;
