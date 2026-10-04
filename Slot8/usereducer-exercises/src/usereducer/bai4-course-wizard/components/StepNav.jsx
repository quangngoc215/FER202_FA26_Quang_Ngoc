import Nav from 'react-bootstrap/Nav';
import { STEPS, WIZARD_ACTIONS } from '../wizardReducer';

const StepNav = ({ step, maxVisited, dispatch }) => (
  <Nav variant="pills">
    {STEPS.map((label, i) => (
      <Nav.Item key={label}>
        <Nav.Link
          active={i === step}
          disabled={i > maxVisited}
          onClick={() => dispatch({ type: WIZARD_ACTIONS.GO_TO, payload: i })}
        >
          {`${i + 1}. ${label}`}
        </Nav.Link>
      </Nav.Item>
    ))}
  </Nav>
);

export default StepNav;