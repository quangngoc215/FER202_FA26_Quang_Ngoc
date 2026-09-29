import { useState } from 'react';
import Quiz from './Quiz';

export default function QuizApp() {
  const [attempt, setAttempt] = useState(1);

  return (
    <div className="p-3">
      <h3 className="mb-3">📝 Quiz trắc nghiệm</h3>
      <p className="text-muted">Lượt làm bài thứ {attempt}</p>

      <Quiz
        key={attempt}
        onRestart={() => setAttempt((a) => a + 1)}
      />
    </div>
  );
}