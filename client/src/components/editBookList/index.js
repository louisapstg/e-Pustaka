import React from 'react'
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody
} from 'mdb-react-ui-kit'
import EditBook from '../editBook'
import LoadingSVG from './../LoadingSVG'
import useSubscribeBook from './../../hooks/useSubscribeBook';

const EditBookList = () => {

  const { data, loading, error } = useSubscribeBook()

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
    <div className="container-fluid mt-5 pt-5 mb-8">
      <MDBTable align='middle'>
        <MDBTableHead>
          <tr className='text-center'>
            <th scope='col' className='bg-danger'>Title</th>
            <th scope='col' className='bg-warning'>Author</th>
            <th scope='col' className='bg-danger th-w'>Description</th>
            <th scope='col' className='bg-warning th-w2'>Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {data?.book.map((item) => (
            <EditBook
              id={item.id}
              title={item.title}
              author={item.author}
              url={item.url}
              description={item.description}
            />
          ))}
        </MDBTableBody>
      </MDBTable>
    </div >
  )
}

export default EditBookList