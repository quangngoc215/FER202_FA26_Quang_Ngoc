import Button from 'react-bootstrap/Button';

const AppButton = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);

export default AppButton;