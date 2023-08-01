import { Modal, Button, Stack, Row, Col } from 'react-bootstrap';
import { SurveyData } from '../types/types';
import { formatBoolean } from '../helpers';

interface Survey {
  show: boolean;
  onCancel: () => void;
  onEdit: () => void;
  selectedSurveyData: SurveyData;
}

const Survey = ({ show, onCancel, onEdit, selectedSurveyData }: Survey) => {
  return (
    <Modal show={show} onHide={onCancel} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {selectedSurveyData.topic} - {selectedSurveyData.company}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Stack gap={4}>
          <Row>
            <Col>Company: {selectedSurveyData.company}</Col>
          </Row>
          <Row>
            <Col>Topic: {selectedSurveyData.topic}</Col>
          </Row>
          <Row>
            <Col>
              Date Survey Submitted: {selectedSurveyData.dateSurveyCompleted}
            </Col>{' '}
          </Row>
          <Row>
            <Col>Payment: {selectedSurveyData.payment}</Col>
          </Row>

          <Row>
            <Col>Stage: {selectedSurveyData.stage}</Col>
          </Row>
          <Row>
            <Col>
              Date Focus Group Completed: {selectedSurveyData.dateFGCompleted}
            </Col>
          </Row>

          <Row>
            <Col>
              {' '}
              Payment Received:{' '}
              {formatBoolean(selectedSurveyData.paymentReceived)}
            </Col>
          </Row>
          <Row>
            <Col>Payment Left: {selectedSurveyData.paymentLeft}</Col>{' '}
          </Row>
          <Row>
            <Col>
              Payment Expiration Date:{' '}
              {selectedSurveyData.paymentExpirationDate}
            </Col>
          </Row>

          <Row>
            <Col>Notes:</Col>
          </Row>
          <Row>
            <Col>{selectedSurveyData.notes}</Col>
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
