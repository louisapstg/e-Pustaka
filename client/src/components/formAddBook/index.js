import React, { useState } from 'react'
import {
  MDBInput,
  MDBTextArea,
  MDBBtn
} from 'mdb-react-ui-kit'
import { v4 as uuidv4 } from "uuid"
import { tambahBuku } from '../../store/bookSlice'
import { useDispatch } from 'react-redux';

const FormAddBook = () => {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')
  const [sinopsis, setSinopsis] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title || !author || !description || !url || !sinopsis) return;
    let id = uuidv4()
    let temp = {
      id,
      title,
      author,
      description,
      url,
      sinopsis
    }
    dispatch(tambahBuku(temp))
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
              name={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <MDBInput
              label='Penulis'
              id='typeText'
              type='text'
              name={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <MDBInput
              label='Deskripsi'
              id='typeText'
              type='text'
              name={description}
              onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className='mb-3'>
            <MDBInput
              label='URL Sampul'
              id='typeURL'
              type='url'
              name={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <MDBTextArea
              label='Sinopsis'
              id='textAreaExample'
              rows={4}
              name={sinopsis}
              onChange={(e) => setSinopsis(e.target.value)}
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