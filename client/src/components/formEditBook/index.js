import React, { useEffect } from 'react'
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBBtn
} from 'mdb-react-ui-kit'
import useGetData from './../../hooks/useGetData'
import LoadingSVG from './../LoadingSVG'


const FormEditBook = () => {

  const { data, loading, error, subscribeBook } = useGetData()

  useEffect(() => {
    subscribeBook()
  }, [])

  if (loading) {
    return (
      <div className='m-5 p-5'>
        <LoadingSVG />
      </div>
    )
  }

  if (error) {
    return <p>Something Went Wrong...</p>
  }

  return (
    <div className="container">
      <MDBRow className='row-cols-1 row-cols-md-3 g-4 mt-4 p-5'>
        {data?.book.map((item) => (
          <MDBCol className='w-25'>
            <MDBCard>
              <MDBCardBody className='light-blue'>
                <MDBCardTitle className='fw-bold text-center'>{item.title}</MDBCardTitle>
                <MDBBtn className='float-start' color='warning' rounded>
                  Edit
                </MDBBtn>
                <MDBBtn
                  className='float-end'
                  color='danger'
                  rounded
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