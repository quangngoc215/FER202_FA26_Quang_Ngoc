export const COLORS = ['#fff3a3', '#c8f7c5', '#cfe8ff', '#ffd6e0'];

export const NOTE_ACTIONS = {
  ADD_NOTE: 'notes/add',
  CHANGE_COLOR: 'notes/changeColor',
  TOGGLE_PIN: 'notes/togglePin',
  DELETE: 'notes/delete',
  CLEAR_ALL: 'notes/clearAll',
};

export const initialNotes = {
  nextId: 3,
  items: [
    { id: 1, text: 'Reducer phải là hàm thuần', color: COLORS[0], pinned: true },
    { id: 2, text: 'Không sửa trực tiếp state', color: COLORS[2], pinned: false },
  ],
};

export const addNote = (text, color) => ({
  type: NOTE_ACTIONS.ADD_NOTE, payload: { text, color },
});
export const changeNoteColor = (id, color) => ({
  type: NOTE_ACTIONS.CHANGE_COLOR, payload: { id, color },
});
export const togglePinNote = (id) => ({
  type: NOTE_ACTIONS.TOGGLE_PIN, payload: id,
});
export const deleteNote = (id) => ({ type: NOTE_ACTIONS.DELETE, payload: id });
export const clearAllNotes = () => ({ type: NOTE_ACTIONS.CLEAR_ALL });

export const notesReducer = (state, action) => {
  switch (action.type) {
    case NOTE_ACTIONS.ADD_NOTE: {
      const text = action.payload.text.trim();
      if (!text) return state;
      const note = { id: state.nextId, text, color: action.payload.color, pinned: false };
      return { nextId: state.nextId + 1, items: [note, ...state.items] };
    }
    case NOTE_ACTIONS.CHANGE_COLOR:
      return {
        ...state,
        items: state.items.map((n) =>
          n.id === action.payload.id ? { ...n, color: action.payload.color } : n,
        ),
      };
    case NOTE_ACTIONS.TOGGLE_PIN:
      return {
        ...state,
        items: state.items.map((n) =>
          n.id === action.payload ? { ...n, pinned: !n.pinned } : n,
        ),
      };
    case NOTE_ACTIONS.DELETE:
      return { ...state, items: state.items.filter((n) => n.id !== action.payload) };
    case NOTE_ACTIONS.CLEAR_ALL:
      return state.items.length === 0 ? state : { ...state, items: [] };
    default:
      throw new Error(`Action không hợp lệ: ${action.type}`);
  }
};