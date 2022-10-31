import React from 'react'
import {
  MDBInput,
  MDBTextArea,
  MDBBtn
} from 'mdb-react-ui-kit'

const FormAddBook = () => {
  return (
    <div className='container w-50 p-5'>
      <div className='mt-5 p-5 light-blue rounded shadow-4'>
        <div className='mb-4 text-center'>
          <h2>Tambah Buku</h2>
        </div>
        <div className='mb-3'>
          <MDBInput label='Judul' id='typeText' type='text' />
        </div>
        <div className='mb-3'>
          <MDBInput label='Penulis' id='typeText' type='text' />
        </div>
        <div className='mb-3'>
          <MDBInput label='Deskripsi' id='typeText' type='text' />
        </div>
        <div className='mb-3'>
          <MDBInput label='URL Sampul' id='typeURL' type='url' />
        </div>
        <div className='mb-3'>
          <MDBTextArea label='Sinopsis' id='textAreaExample' rows={4} />
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <MDBBtn rounded>Submit</MDBBtn>
        </div>
      </div>
    </div>
  )
}

export default FormAddBook