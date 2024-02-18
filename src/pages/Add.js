import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useBooks } from '../context/books.context';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  } else if (values.title.length > 40) {
    errors.title = 'Must be 40 characters or less';
  }

  if (!values.author) {
    errors.author = 'Required';
  } else if (values.author.length > 25) {
    errors.author = 'Must be 25 characters or less';
  }

  if (!values.isbn) {
    errors.isbn = 'Required';
  } else if (String(values.isbn).split("").length > 10) {
    errors.isbn = 'Must be 10 characters';
  }

  if (!values.date) {
    errors.date = 'Required';
  }

  return errors;
};

function Add() {

  const navigat = useNavigate();
  const { books, setBooks } = useBooks();

  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      isbn: '',
      date: '',
    },
    validate,
    onSubmit: values => {
      setBooks([...books, { ...values }])
      alert("Data added Successfully");
      navigat('/');
    },
  });

  return (
    <div style={{ width: "1296px", height: "100vh" }} className='d-flex justify-content-center align-items-center'>
      <Form style={{ width: "480px", height: "480px" }} onSubmit={formik.handleSubmit}>
        <h1 className='mb-4 text-success'>Create New Data</h1>
        <Form.Group className='mb-3'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            id='title'
            name='title'
            placeholder="Enter Title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? <div style={{ color: "red" }}>{formik.errors.title}</div> : null}
        </Form.Group>
        <Form.Group className='mb-3' md="9">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            id='author'
            name='author'
            placeholder="Enter Author Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.author}
          />
          {formik.touched.author && formik.errors.author ? <div style={{ color: "red" }}>{formik.errors.author}</div> : null}
        </Form.Group>
        <Form.Group className='mb-3' md="9">
          <Form.Label>ISBN Number</Form.Label>
          <Form.Control
            required
            type="text"
            id='isbn'
            name='isbn'
            placeholder="Enter ISBN Number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.isbn}
          />
          {formik.touched.isbn && formik.errors.isbn ? <div style={{ color: "red" }}>{formik.errors.isbn}</div> : null}
        </Form.Group>
        <Form.Group className='mb-3' md="9">
          <Form.Label>Publish Date</Form.Label>
          <Form.Control
            type="date"
            id='date'
            name='date'
            placeholder="Enter Publish Date"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date} />
          {formik.touched.date && formik.errors.date ? <div style={{ color: "red" }}>{formik.errors.date}</div> : null}
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  );
}

export default Add;