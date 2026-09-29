import { useState } from 'react';
import { CITIES } from './constants';
import { initialStudents } from './initialStudents';
import { sortStudents } from './sortStudents';
import { calcStats } from './calcStats';
import AddStudentForm from './AddStudentForm';
import StudentTable from './StudentTable';
import SummaryBar from './SummaryBar';

export default function StudentManager() {
  const [students, setStudents] = useState(initialStudents);
  const [newName, setNewName] = useState('');
  const [sortBy, setSortBy] = useState('none');

  const addStudent = (e) => {
    e.preventDefault();
    const name = newName.trim();
    if (name.length < 3) return;
    setStudents((prev) => [
      ...prev,
      { id: Date.now(), name, score: 0, contact: { city: CITIES[0] } },
    ]);
    setNewName('');
  };

  const updateScore = (id, text) => {
    const raw = Number(text);
    const score = Number.isNaN(raw) ? 0 : Math.min(10, Math.max(0, raw));
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, score } : s))
    );
  };

  const updateCity = (id, city) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, contact: { ...s.contact, city } } : s
      )
    );
  };

  const removeStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  const bonusAll = () => {
    setStudents((prev) =>
      prev.map((s) => ({ ...s, score: Math.min(10, s.score + 0.5) }))
    );
  };

  const sorted = sortStudents(students, sortBy);
  const { total, average, passed } = calcStats(students);

  return (
    <div className="p-3">
      <h3 className="mb-3">🎓 Quản lý điểm sinh viên</h3>

      <AddStudentForm
        newName={newName}
        onNameChange={setNewName}
        sortBy={sortBy}
        onSortChange={setSortBy}
        onAdd={addStudent}
        onBonusAll={bonusAll}
        canAdd={newName.trim().length >= 3}
        canBonus={students.length > 0}
      />

      <StudentTable
        students={sorted}
        onScoreChange={updateScore}
        onCityChange={updateCity}
        onRemove={removeStudent}
      />

      <SummaryBar total={total} average={average} passed={passed} />
    </div>
  );
}