import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { COLORS, changeNoteColor, togglePinNote, deleteNote } from '../notesReducer';

const NoteCard = ({ note, dispatch }) => {
  const { id, text, color, pinned } = note;

  return (
    <Card style={{ background: color }} className="h-100 border-0 shadow-sm">
      <Card.Body className="d-flex flex-column">
        <Card.Text className="flex-grow-1">
          {pinned && '📌 '}{text}
        </Card.Text>

        <div className="d-flex gap-1 align-items-center">
          {COLORS.map((c) => (
            <button
              key={c}
              type="button"
              aria-label={`Đổi màu ${c}`}
              onClick={() => dispatch(changeNoteColor(id, c))}
              style={{
                width: 18,
                height: 18,
                borderRadius: '50%',
                background: c,
                border: c === color ? '2px solid #333' : '1px solid #999',
              }}
            />
          ))}

          <Button
            size="sm"
            variant="link"
            className="ms-auto p-0"
            onClick={() => dispatch(togglePinNote(id))}
          >
            {pinned ? 'Bỏ ghim' : 'Ghim'}
          </Button>

          <Button
            size="sm"
            variant="link"
            className="text-danger p-0 ms-2"
            onClick={() => dispatch(deleteNote(id))}
          >
            Xóa
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default NoteCard;