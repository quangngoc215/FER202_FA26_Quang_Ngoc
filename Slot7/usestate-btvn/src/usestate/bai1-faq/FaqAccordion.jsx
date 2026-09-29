import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { faqs } from './faqs';
import FaqItem from './FaqItem';
import FaqCard from './FaqCard';

export default function FaqAccordion() {
  const [singleMode, setSingleMode] = useState(false);
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  const handleModeChange = (e) => {
    setSingleMode(e.target.checked);
    setOpenId(null);
  };

  return (
    <div className="p-3">
      <h3 className="mb-3">📖 FAQ Accordion</h3>

      <div className="d-flex flex-wrap gap-3 mb-3 align-items-center">
        <Form.Check
          type="switch"
          id="single-mode-switch"
          label="Chỉ mở một câu tại một thời điểm"
          checked={singleMode}
          onChange={handleModeChange}
        />
        <Button
          variant="outline-secondary"
          size="sm"
          disabled={!singleMode || openId === null}
          onClick={() => setOpenId(null)}
        >
          Đóng tất cả
        </Button>
      </div>

      {singleMode
        ? faqs.map((faq) => (
            <FaqCard
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))
        : faqs.map((faq) => (
            <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
    </div>
  );
}