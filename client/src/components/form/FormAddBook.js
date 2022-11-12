import React, { useState } from 'react'
import {
  MDBInput,
  MDBTextArea,
  MDBBtn
} from 'mdb-react-ui-kit'
import Swal from 'sweetalert2'
import useInsertBook from '../../hooks/useInsertBook';

const FormAddBook = () => {

  const { insertBook } = useInsertBook()
  const [books, setBooks] = useState({
    title: "",
    author: "",
    url: "",
    description: ""
  })

  const tambahBuku = (newBook) => {
    const newData = {
      ...newBook
    }
    insertBook({
      variables: {
        object: {
          title: newData.title,
          author: newData.author,
          url: newData.url,
          description: newData.description
        }
      }
    })
  }

  const onChange = (e) => {
    setBooks({
      ...books,
      [e.target.name]: e.target.value
    })
  }



  const handleSubmit = (e) => {
    e.preventDefault()
    if (!books.title || !books.author || !books.description || !books.url) return;
    const dataBaru = {
      title: books.title,
      author: books.author,
      url: books.url,
      description: books.description
    }
    tambahBuku(dataBaru)
    setBooks({
      ...books,
      title: "",
      author: "",
      url: "",
      description: ""
    })
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }

  return (
    <div className='container w-50 p-5'>
      <div className='mt-5 p-5 light-blue rounded shadow-4'>
        <div className='mb-4 text-center'>
          <h2>Tambah Buku</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <MDBInput
              label='Judul'
              id='typeText'
              type='text'
              name='title'
              value={books.title}
              onChange={onChange}
            />
          </div>
          <div className='mb-3'>
            <MDBInput
              label='Penulis'
              id='typeText'
              type='text'
              name='author'
              value={books.author}
              onChange={onChange}
            />
          </div>
          <div className='mb-3'>
            <MDBInput
              label='URL Sampul'
              id='typeURL'
              type='url'
              name='url'
              value={books.url}
              onChange={onChange}
            />
          </div>
          <div className='mb-3'>
            <MDBTextArea
              label='Sinopsis'
              id='textAreaExample'
              rows={4}
              name='description'
              value={books.description}
              onChange={onChange}
            />
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <MDBBtn rounded>Submit</MDBBtn>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormAddBook