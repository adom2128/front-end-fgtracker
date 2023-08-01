import { useRef, FormEvent, useState } from 'react';
import { Form, Row, Col, Stack, Button, Modal, Alert } from 'react-bootstrap';
import { SurveyData } from '../types/types';
import DatePicker from 'react-datepicker';
import { formatDate } from '../helpers';

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
  const [showAlert, setShowAlert] = useState(false);

  const [selectedStageValue, setSelectedStageValue] = useState(
    selectedSurveyData.stage
  );
  const [paymentReceivedValue, setPaymentReceivedValue] = useState(
    selectedSurveyData.paymentReceived
  );

  const initialDateSurveyCompleted = selectedSurveyData.dateSurveyCompleted
    ? new Date(selectedSurveyData.dateSurveyCompleted)
    : null;

  const initialDateFGCompleted = selectedSurveyData.dateFGCompleted
    ? new Date(selectedSurveyData.dateFGCompleted)
    : null;

  const initialPaymentExpirationDate = selectedSurveyData.paymentExpirationDate
    ? new Date(selectedSurveyData.paymentExpirationDate)
    : null;

  const [dateSurveyCompleted, setDateSurveyCompleted] = useState<Date | null>(
    initialDateSurveyCompleted
  );

  const [dateFGCompleted, setDateFGCompleted] = useState<Date | null>(
    initialDateFGCompleted
  );

  const [paymentExpirationDate, setPaymentExpirationDate] =
    useState<Date | null>(initialPaymentExpirationDate);

  const companyRef = useRef<HTMLInputElement>(null);
  const topicRef = useRef<HTMLInputElement>(null);
  const paymentRef = useRef<HTMLInputElement>(null);
  const notesRef = useRef<HTMLTextAreaElement>(null);
  const paymentReceivedRef = useRef<HTMLInputElement>(null);
  const paymentLeftRef = useRef<HTMLInputElement>(null);

  const handleSave = (e: FormEvent) => {
    e.preventDefault();

    const focusGroupCompleted = dateFGCompleted !== null;

    if (selectedStageValue === 'Completed' && !focusGroupCompleted) {
      setShowAlert(true);
      // window.alert('Please fill out the "Date Focus Group Completed" field when the stage is set to "Completed."');
      return;
    }

    const updatedSurvey = {
      id: selectedSurveyData.id,
      company: companyRef.current!.value,
      topic: topicRef.current!.value,
      payment: Number(paymentRef.current!.value),
      notes: notesRef.current!.value,
      date_survey_completed: dateSurveyCompleted
        ? formatDate(dateSurveyCompleted)
        : null,
      date_fg_completed: dateFGCompleted ? formatDate(dateFGCompleted) : null,
      payment_received: paymentReceivedRef.current?.checked || false,
      payment_left: Number(paymentLeftRef.current!.value),
      payment_expiration_date: paymentExpirationDate
        ? formatDate(paymentExpirationDate)
        : null,
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
                    <Form.Label>Date Survey Submitted</Form.Label>
                    <DatePicker
                      todayButton="Today"
                      selected={dateSurveyCompleted}
                      onChange={(date) => setDateSurveyCompleted(date)}
                      dateFormat="MMMM d, yyyy"
                      className="form-control"
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
                <Form.Group>
                  <Form.Label>Stage</Form.Label>
                  <Form.Select
                    value={selectedStageValue}
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
              </Row>
              <Alert
                variant="danger"
                show={showAlert}
                onClose={() => setShowAlert(false)}
                dismissible
              >
                Please fill out the "Date Focus Group Completed" field when the
                stage is set to "Completed."
              </Alert>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Date Focus Group Completed</Form.Label>
                    <DatePicker
                      todayButton="Today"
                      selected={dateFGCompleted}
                      onChange={(date) => setDateFGCompleted(date)}
                      dateFormat="MMMM d, yyyy"
                      className="form-control"
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
                    <DatePicker
                      todayButton="Today"
                      selected={paymentExpirationDate}
                      onChange={(date) => setPaymentExpirationDate(date)}
                      dateFormat="MMMM d, yyyy"
                      className="form-control"
                    />
                  </Form.Group>
                </Col>
              </Row>
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
