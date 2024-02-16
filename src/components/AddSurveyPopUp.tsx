import { useRef, FormEvent } from 'react';
import { Form, Row, Col, Stack, Button, Modal } from 'react-bootstrap';
import { SurveyData } from '../types/types';

interface Props {
  show: boolean;
  onCancel: () => void;
  onSaveClick: (data: Partial<SurveyData>) => void;
}

export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const AddSurveyPopUp = ({ onCancel, onSaveClick, show }: Props) => {
  const companyRef = useRef<HTMLInputElement>(null);
  const topicRef = useRef<HTMLInputElement>(null);
  const paymentRef = useRef<HTMLInputElement>(null);
  const notesRef = useRef<HTMLTextAreaElement>(null);

  const handleSave = (e: FormEvent) => {
    e.preventDefault();

    const newSurvey = {
      company: companyRef.current?.value,
      topic: topicRef.current?.value,
      payment: Number(paymentRef.current?.value),
      notes: notesRef.current?.value,
      date_survey_completed: formatDate(new Date()),
    };

    onSaveClick(newSurvey);
  };

  return (
    <Modal show={show} onHide={onCancel} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Survey</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSave}>
        <Modal.Body>
          <Stack gap={4}>
            <Row>
              <Form.Group>
                <Form.Label>Company</Form.Label>
                <Form.Control ref={companyRef} required />
              </Form.Group>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Topic</Form.Label>
                  <Form.Control ref={topicRef} required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Payment</Form.Label>
                  <Form.Control
                    ref={paymentRef}
                    className="form-icon-trailing"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>Notes</Form.Label>
              <Form.Control ref={notesRef} as="textarea" rows={2} />
            </Form.Group>
          </Stack>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="primary">
            Save
          </Button>
          <Button type="button" variant="outline-secondary" onClick={onCancel}>
            Cancel
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddSurveyPopUp;
