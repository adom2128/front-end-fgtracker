import { useRef, FormEvent } from 'react';
import { Form, Row, Col, Stack, Button } from 'react-bootstrap';
import { SurveyData } from '../types/types';

interface AddSurveyPopUpProps {
  onCancel: () => void;
  onSaveClick: (data: SurveyData) => void;
}

const AddSurveyPopUp = ({ onCancel, onSaveClick }: AddSurveyPopUpProps) => {
  const companyRef = useRef<HTMLInputElement>(null);
  const topicRef = useRef<HTMLInputElement>(null);
  const paymentRef = useRef<HTMLInputElement>(null);
  const notesRef = useRef<HTMLTextAreaElement>(null);

  const handleSave = (e: FormEvent) => {
    e.preventDefault();

    const newSurvey = {
      company: companyRef.current!.value,
      topic: topicRef.current!.value,
      payment: Number(paymentRef.current!.value),
      notes: notesRef.current!.value,
    };

    onSaveClick(newSurvey);
  };

  return (
    <div
      className="modal show"
      style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Survey</h5>
            <button type="button" className="close" onClick={onCancel}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <Form onSubmit={handleSave}>
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
              <Stack
                direction="horizontal"
                gap={2}
                className="justify-content-end mt-2 col-md-12"
              >
                <Button type="submit" variant="primary">
                  Save
                </Button>
                <Button
                  type="button"
                  variant="outline-secondary"
                  onClick={onCancel}
                >
                  Cancel
                </Button>
              </Stack>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSurveyPopUp;
