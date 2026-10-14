import { Accordion } from 'react-bootstrap';

const FaqPage = () => (
  <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0">
      <Accordion.Header>Mượn sách được bao nhiêu cuốn?</Accordion.Header>
      <Accordion.Body>Tối đa 3 cuốn trong 14 ngày.</Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Quá hạn thì sao?</Accordion.Header>
      <Accordion.Body>Phạt 5.000đ/ngày/cuốn, khoá tài khoản nếu quá 30 ngày.</Accordion.Body>
    </Accordion.Item>
  </Accordion>
);

export default FaqPage;