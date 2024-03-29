import { Modal, Button, Stack, Row, Col } from 'react-bootstrap';
import './Survey.css';
import { SurveyData } from '../types/types';
import { formatBoolean } from '../helpers';

interface Props {
  show: boolean;
  onCancel: () => void;
  onEdit: () => void;
  selectedSurveyData: SurveyData | undefined;
}

const Survey = ({ show, onCancel, onEdit, selectedSurveyData }: Props) => {
  return (
    <Modal show={show} onHide={onCancel} centered>
      <Modal.Header closeButton className="modal-close-button-styling">
        <Modal.Title>
          {selectedSurveyData?.topic} - {selectedSurveyData?.company}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-survey">
        <Stack gap={3}>
          <Row>
            <Col className="titles">Company:</Col>{' '}
            <Col>{selectedSurveyData?.company}</Col>
          </Row>
          <Row>
            <Col className="titles">Topic:</Col>{' '}
            <Col>{selectedSurveyData?.topic}</Col>
          </Row>
          <Row>
            <Col className="titles">Date Survey Submitted:</Col>{' '}
            <Col>{selectedSurveyData?.dateSurveyCompleted}</Col>
          </Row>
          <Row>
            <Col className="titles">Payment:</Col>{' '}
            <Col>${selectedSurveyData?.payment}</Col>
          </Row>

          <Row>
            <Col className="titles">Stage:</Col>
            <Col> {selectedSurveyData?.stage}</Col>
          </Row>
          <Row>
            <Col className="titles">Date FG Completed:</Col>
            <Col> {selectedSurveyData?.dateFGCompleted}</Col>
          </Row>

          <Row>
            <Col className="titles">Payment Received:</Col>
            <Col>{formatBoolean(selectedSurveyData?.paymentReceived)}</Col>
          </Row>
          <Row>
            <Col className="titles">Balance: </Col>
            <Col>${selectedSurveyData?.paymentLeft}</Col>
          </Row>
          <Row>
            <Col className="titles">Payment Last Four Digits:</Col>
            <Col>{selectedSurveyData?.lastFour}</Col>
          </Row>
          <Row>
            <Col className="titles">Payment Link:</Col>
            <Col>
              <a
                href={selectedSurveyData?.link}
                target="_blank"
                rel="noreferrer"
              >
                Here
              </a>
            </Col>
          </Row>

          <Row>
            <Col className="titles">Notes:</Col>
          </Row>
          <Row>
            <Col className="notes-section">{selectedSurveyData?.notes}</Col>
          </Row>
        </Stack>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" variant="primary" onClick={onEdit}>
          Edit
        </Button>
        <Button type="button" variant="outline-secondary" onClick={onCancel}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default Survey;
