import { Table, Card } from 'react-bootstrap';

const BOOKS = [
  { id: 1, title: 'Clean Code', author: 'Robert C. Martin', year: 2008 },
  { id: 2, title: 'You Don’t Know JS', author: 'Kyle Simpson', year: 2015 },
  { id: 3, title: 'React Up & Running', author: 'Stoyan Stefanov', year: 2016 },
];

const BooksPage = () => (
  <Card className="shadow-sm">
    <Card.Body>
      <h2 className="mb-3">Danh sách sách</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr><th>#</th><th>Tựa sách</th><th>Tác giả</th><th>Năm</th></tr>
        </thead>
        <tbody>
          {BOOKS.map((b) => (
            <tr key={b.id}>
              <td>{b.id}</td>
              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>{b.year}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card.Body>
  </Card>
);

export default BooksPage;