export function sortStudents(students, sortBy) {
  const list = [...students];
  if (sortBy === 'name') {
    list.sort((a, b) => a.name.localeCompare(b.name, 'vi'));
  } else if (sortBy === 'score') {
    list.sort((a, b) => b.score - a.score);
  }
  return list;
}