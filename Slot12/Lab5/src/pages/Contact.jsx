import { useReducer, useState } from 'react'
import { Form, Button, Modal } from 'react-bootstrap'

const initial = {
  values: { fullName: '', email: '', phone: '', message: '' },
  errors: {}
}

function validate(v) {
  const e = {}
  if (!v.fullName.trim()) e.fullName = 'Vui lòng nhập họ tên'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Email không hợp lệ'
  if (!/^\d{10,11}$/.test(v.phone)) e.phone = 'SĐT phải có 10-11 chữ số'
  if (v.message.trim().length < 10) e.message = 'Nội dung ít nhất 10 ký tự'
  return e
}

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        values: { ...state.values, [action.field]: action.value },
        errors: { ...state.errors, [action.field]: '' }
      }
    case 'SUBMIT':
      return { ...state, errors: validate(state.values) }
    case 'RESET':
      return initial
    default:
      return state
  }
}

function Contact() {
  const [state, dispatch] = useReducer(reducer, initial)
  const [showModal, setShowModal] = useState(false)
  const { values, errors } = state

  const handleChange = (e) =>
    dispatch({ type: 'CHANGE', field: e.target.name, value: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate(values)
    dispatch({ type: 'SUBMIT' })
    if (Object.keys(errs).length === 0) setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
    dispatch({ type: 'RESET' })
  }

  return (
    <div className="mx-auto" style={{ maxWidth: 600 }}>
      <h1 className="mb-4">Contact</h1>

      <Form onSubmit={handleSubmit} noValidate>
        <Form.Group className="mb-3">
          <Form.Label>Họ tên</Form.Label>
          <Form.Control name="fullName" value={values.fullName}
            onChange={handleChange} isInvalid={!!errors.fullName} />
          <Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" value={values.email}
            onChange={handleChange} isInvalid={!!errors.email} />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control name="phone" value={values.phone}
            onChange={handleChange} isInvalid={!!errors.phone} />
          <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Nội dung</Form.Label>
          <Form.Control as="textarea" rows={4} name="message" value={values.message}
            onChange={handleChange} isInvalid={!!errors.message} />
          <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" className="w-100">Gửi</Button>
      </Form>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Completed Lab5</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><b>Họ tên:</b> {values.fullName}</p>
          <p><b>Email:</b> {values.email}</p>
          <p><b>SĐT:</b> {values.phone}</p>
          <p><b>Nội dung:</b> {values.message}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Đóng</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Contact