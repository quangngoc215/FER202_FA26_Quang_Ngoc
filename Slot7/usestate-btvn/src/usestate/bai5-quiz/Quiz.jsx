import { useState } from 'react';
import { shuffle } from '../common/shuffle';
import { QUESTIONS } from './questions';
import { calcScore } from './calcScore';
import ProgressHeader from './ProgressHeader';
import QuizQuestion from './QuizQuestion';
import QuizNavigation from './QuizNavigation';
import QuizResult from './QuizResult';

export default function Quiz({ onRestart }) {
  const [questions] = useState(() => shuffle(QUESTIONS));

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});  
  const [finished, setFinished] = useState(false);

  const current = questions[index];
  const selected = answers[current.id];
  const answeredCount = Object.keys(answers).length;
  const score = calcScore(questions, answers);
  const isLast = index === questions.length - 1;
  const canSubmitAll = answeredCount === questions.length;

  const handleSelect = (optionIndex) => {
    setAnswers((prev) => ({ ...prev, [current.id]: optionIndex }));
  };

  if (finished) {
    return (
      <QuizResult
        questions={questions}
        answers={answers}
        score={score}
        onRestart={onRestart}
      />
    );
  }

  return (
    <div>
      <ProgressHeader
        index={index}
        total={questions.length}
        answeredCount={answeredCount}
      />

      <QuizQuestion
        question={current}
        selected={selected}
        onSelect={handleSelect}
      />

      <QuizNavigation
        index={index}
        isLast={isLast}
        canNext={selected !== undefined}
        canSubmit={canSubmitAll}
        onPrev={() => setIndex((i) => i - 1)}
        onNext={() => setIndex((i) => i + 1)}
        onSubmit={() => setFinished(true)}
      />
    </div>
  );
}