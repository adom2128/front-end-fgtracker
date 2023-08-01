import { useRef, FormEvent, useState } from 'react';
import { Form, Row, Col, Stack, Button, Modal } from 'react-bootstrap';
import { SurveyData } from '../types/types';

interface EditSurveyPopUpProps {
  show: boolean;
  onCancel: () => void;
  onSaveClick: (updatedSurvey: SurveyData, surveyID: number) => void;
  selectedSurveyData: SurveyData;
}

const stageOptions = ['Applied', 'Screened', 'Scheduled', 'Completed'];

const EditSurvey = ({
  show,
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
  // const stageRef = useRef<HTMLSelectElement>(null);

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
      stage: selectedStageValue,
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
    <>
      <Modal show={show} onHide={onCancel} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSave}>
          <Modal.Body>
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
                  // ref={stageRef}
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
          </Modal.Body>
          <Modal.Footer>
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
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default EditSurvey;
