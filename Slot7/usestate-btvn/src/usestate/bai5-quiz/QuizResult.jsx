import { Button, ListGroup } from 'react-bootstrap';

export default function QuizResult({ questions, answers, score, onRestart }) {
  return (
    <div>
      <h4 className="mb-3">
        🎉 Bạn đúng {score}/{questions.length} câu
      </h4>

      <ListGroup className="mb-3">
        {questions.map((q) => {
          const userPick = answers[q.id];
          const correct = userPick === q.answer;
          return (
            <ListGroup.Item
              key={q.id}
              variant={correct ? 'success' : 'danger'}
            >
              <div className="fw-semibold mb-1">{q.text}</div>
              <div>
                Bạn chọn:{' '}
                <strong>
                  {userPick !== undefined ? q.options[userPick] : '(bỏ trống)'}
                </strong>
              </div>
              {!correct && (
                <div>
                  Đáp án đúng: <strong>{q.options[q.answer]}</strong>
                </div>
              )}
            </ListGroup.Item>
          );
        })}
      </ListGroup>

      <Button variant="primary" onClick={onRestart}>
        Làm lại
      </Button>
    </div>
  );
}