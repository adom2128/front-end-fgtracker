import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './PlusButton.css';

interface Props {
  onClick: () => void;
}

const PlusButton = ({ onClick }: Props) => {
  return (
    <>
      <button
        onClick={onClick}
        className="plus-btn btn btn-primary btn-lg rounded-circle"
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </>
  );
};

export default PlusButton;
