import { useRef, FormEvent, useState } from 'react';
import { Form, Row, Col, Stack, Button } from 'react-bootstrap';
import { SurveyData } from '../types/types';

interface EditSurveyPopUpProps {
  onCancel: () => void;
  onSaveClick: (updatedSurvey: SurveyData, surveyID: number) => void;
  selectedSurveyData: SurveyData;
}

const stageOptions = ['Applied', 'Screened', 'Scheduled', 'Completed'];

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');
const todayDate = `${year}-${month}-${day}`;

const EditSurvey = ({
  onCancel,
  onSaveClick,
  selectedSurveyData,
}: EditSurveyPopUpProps) => {
  const [selectedStageValue, setSelectedStageValue] = useState(
    selectedSurveyData.stage
  );
  const [paymentReceivedValue, setPaymentReceivedValue] = useState(
    selectedSurveyData.paymentReceived
  );

  const companyRef = useRef<HTMLInputElement>(null);
  const topicRef = useRef<HTMLInputElement>(null);
  const paymentRef = useRef<HTMLInputElement>(null);
  const notesRef = useRef<HTMLTextAreaElement>(null);
  const dateSurveyCompletedRef = useRef<HTMLInputElement>(null);
  const dateFGCompletedRef = useRef<HTMLInputElement>(null);
  const paymentReceivedRef = useRef<HTMLInputElement>(null);
  const paymentLeftRef = useRef<HTMLInputElement>(null);
  const paymentExpirationRef = useRef<HTMLInputElement>(null);
  const stageRef = useRef<HTMLSelectElement>(null);

  const handleSave = (e: FormEvent) => {
    e.preventDefault();

    const updatedSurvey = {
      id: selectedSurveyData.id,
      company: companyRef.current!.value,
      topic: topicRef.current!.value,
      payment: Number(paymentRef.current!.value),
      notes: notesRef.current!.value,
      date_survey_completed: dateSurveyCompletedRef.current!.value,
      date_fg_completed: dateFGCompletedRef.current?.value || undefined,
      payment_received: paymentReceivedRef.current?.checked || false,
      payment_left: Number(paymentLeftRef.current!.value),
      payment_expiration_date: paymentExpirationRef.current?.value || null,
      stage: stageRef.current!.value,
    };

    onSaveClick(updatedSurvey, selectedSurveyData.id);
  };

  const handleStageChange = (e: FormEvent<HTMLSelectElement>) => {
    const newSelectedStageValue = e.currentTarget.value;
    setSelectedStageValue(newSelectedStageValue);
  };

  const handlePaymentReceivedChange = (e: FormEvent<HTMLInputElement>) => {
    const newPaymentReceivedValue = e.currentTarget.checked;
    setPaymentReceivedValue(newPaymentReceivedValue);
  };

  return (
    <div
      className="modal show"
      style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit</h5>
            <button type="button" className="close" onClick={onCancel}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <Form onSubmit={handleSave}>
              <Stack gap={4}>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Company</Form.Label>
                      <Form.Control
                        ref={companyRef}
                        required
                        defaultValue={selectedSurveyData.company}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Topic</Form.Label>
                      <Form.Control
                        ref={topicRef}
                        required
                        defaultValue={selectedSurveyData.topic}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Date Survey Completed</Form.Label>
                      <Form.Control
                        ref={dateSurveyCompletedRef}
                        required
                        defaultValue={selectedSurveyData.dateSurveyCompleted}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Payment</Form.Label>
                      <Form.Control
                        ref={paymentRef}
                        defaultValue={selectedSurveyData.payment}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Date Focus Group Completed</Form.Label>
                      <Form.Control
                        ref={dateFGCompletedRef}
                        required
                        defaultValue={selectedSurveyData.dateFGCompleted}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Payment Received</Form.Label>
                      <Form.Check
                        type="checkbox"
                        ref={paymentReceivedRef}
                        checked={paymentReceivedValue}
                        onChange={handlePaymentReceivedChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Payment Left</Form.Label>
                      <Form.Control
                        ref={paymentLeftRef}
                        required
                        defaultValue={selectedSurveyData.paymentLeft}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Payment Expiration Date</Form.Label>
                      <Form.Control
                        ref={paymentExpirationRef}
                        defaultValue={selectedSurveyData.paymentExpirationDate}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group>
                  <Form.Label>Stage</Form.Label>
                  <Form.Select
                    value={selectedStageValue}
                    ref={stageRef}
                    onChange={handleStageChange}
                  >
                    <option value={selectedStageValue}>
                      {selectedStageValue}
                    </option>
                    {stageOptions.map((option) =>
                      option !== selectedSurveyData.stage ? (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ) : null
                    )}
                  </Form.Select>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Notes</Form.Label>
                  <Form.Control
                    ref={notesRef}
                    as="textarea"
                    rows={2}
                    defaultValue={selectedSurveyData.notes}
                  />
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

export default EditSurvey;
