import React, { useState } from 'react'
import {
  MDBBtn
} from 'mdb-react-ui-kit'
import FormEditBook from './../formEditBook'
import useDeleteBook from './../../hooks/userDeleteBook'
import LoadingSVG from './../LoadingSVG'

const EditBook = (props) => {

  const { deleteBook, loadingDelete } = useDeleteBook()
  const { id, title, author, url, description } = props
  const [status, setStatus] = useState(false)

  if (loadingDelete) {
    return (
      <div className='m-5 p-5'>
        <LoadingSVG />
      </div>
    )
  }

  const onClick = () => {
    togglePopup()
  }

  const togglePopup = () => {
    setStatus(!status)
  }

  const onDelete = (idx) => {
    deleteBook({
      variables: {
        id: idx
      }
    })
  }


  return (
    <tr>
      <td>
        <div className='d-flex align-datas-center'>
          <div>
            <img
              src={url}
              alt=''
              style={{ width: '45px', height: '45px' }}
              className='rounded'
            />
          </div>
          <div className='ms-3'>
            <p className='fw-bold mb-1'>{title}</p>
          </div>
        </div>
      </td>
      <td>
        <p className='fw-normal mb-1'>{author}</p>
      </td>
      <td>
        <p>
          {description}
        </p>
      </td>
      <td className='text-center'>
        <MDBBtn className='me-4' color='warning' rounded size='sm' onClick={() => onClick(id)}>
          Edit
        </MDBBtn>
        <MDBBtn color='danger' rounded size='sm' onClick={() => onDelete(id)}>
          Delete
        </MDBBtn>
      </td>
      {status && <FormEditBook id={id} handleClose={togglePopup} />}
    </tr>
  )
}

export default EditBook