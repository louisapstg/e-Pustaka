import React from 'react'
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit'
import { useSelector, useDispatch } from 'react-redux'
import { hapusBuku } from '../../store/bookSlice'

const FormEditBook = () => {

  const books = useSelector((state) => state.book.books)
  const dispatch = useDispatch()

  return (
    <div className="container">
      <MDBRow className='row-cols-1 row-cols-md-3 g-4 mt-4 p-5'>
        {books.map((book) => (
          <MDBCol className='w-25'>
            <MDBCard>
              <MDBCardBody className='light-blue'>
                <MDBCardTitle className='fw-bold'>{book.title}</MDBCardTitle>
                <MDBCardText>
                  {book.description}
                </MDBCardText>
                <MDBBtn className='float-start' color='warning' rounded>
                  Edit
                </MDBBtn>
                <MDBBtn
                  className='float-end'
                  color='danger'
                  rounded
                  onClick={() => { dispatch(hapusBuku(book.id)) }}
                >
                  Delete
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </div>
  )
}

export default FormEditBook