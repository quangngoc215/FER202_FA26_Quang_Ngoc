export function calcScore(questions, answers) {
  return questions.filter((q) => answers[q.id] === q.answer).length;
}