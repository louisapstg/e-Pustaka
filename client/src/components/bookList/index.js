import React from 'react'
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux'

const BookList = () => {

  const books = useSelector((state) => state.book.books)

  return (
    <div className='container'>
      <MDBRow className='row-cols-1 row-cols-md-3 g-4 mt-4 p-5'>
        {books.map((book) => (
          <MDBCol className='w-25'>
            <MDBCard>
              <MDBCardImage
                src={book.url}
                alt='...'
                position='top'
              />
              <MDBCardBody className='light-blue'>
                <MDBCardTitle className='fw-bold'>{book.title}</MDBCardTitle>
                <MDBCardText>
                  {book.description}
                </MDBCardText>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <MDBBtn rounded>Sinopsis</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </div>
  )
}

export default BookList