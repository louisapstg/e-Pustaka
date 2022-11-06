import React, { useEffect, useState } from 'react'
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn
} from 'mdb-react-ui-kit'
import useGetData from './../../hooks/useGetData'
import LoadingSVG from './../LoadingSVG'
import useDeleteBook from './../../hooks/userDeleteBook';
import useUpdateBook from './../../hooks/useUpdateBook';


const FormEditBook = () => {

  const { data, loading, error, subscribeBook } = useGetData()
  const { deleteBook, loadingDelete } = useDeleteBook()
  const { updateBook, loadingUpdate } = useUpdateBook()
  const [status, setStatus] = useState(false)
  const [state, setState] = useState({
    title: "",
    author: "",
    url: "",
    description: ""
  })

  useEffect(() => {
    subscribeBook()
  }, [])

  if (loading || loadingDelete || loadingUpdate) {
    return (
      <div className='m-5 p-5'>
        <LoadingSVG />
      </div>
    )
  }

  if (error) {
    return <p>Something Went Wrong...</p>
  }

  const onDelete = (idx) => {
    deleteBook({
      variables: {
        id: idx
      }
    })
  }

  const onClick = () => {
    return setStatus(!status)
  }

  const onChange = (e) => {
    setState(e.target.value)
  }

  return (
    <div className="container-fluid mt-5 pt-5 mb-8">
      <MDBTable align='middle'>
        <MDBTableHead>
          <tr className='text-center'>
            <th scope='col' className='bg-danger'>Book</th>
            <th scope='col' className='bg-warning'>Author</th>
            <th scope='col' className='bg-danger th-w'>Description</th>
            <th scope='col' className='bg-warning th-w2'>Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {data?.book.map((item) => (
            <tr>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src={item.url}
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded'
                  />
                  <div className='ms-3'>
                    <p className='fw-bold mb-1'>{item.title}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className='fw-normal mb-1'>{item.author}</p>
              </td>
              <td>{item.description}</td>
              <td className='text-center'>
                <MDBBtn className='me-4' color='warning' rounded size='sm'>
                  Edit
                </MDBBtn>
                <MDBBtn color='danger' rounded size='sm' onClick={() => onDelete(item.id)}>
                  Delete
                </MDBBtn>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  )
}

export default FormEditBook