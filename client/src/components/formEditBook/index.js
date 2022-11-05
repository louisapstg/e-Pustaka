import React from 'react'
import {
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody
} from 'mdb-react-ui-kit'

const FormEditBook = () => {
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
          <tr>
            <td>
              <div className='d-flex align-items-center'>
                <img
                  src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                  alt=''
                  style={{ width: '45px', height: '45px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>John Doe</p>
                  <p className='text-muted mb-0'>john.doe@gmail.com</p>
                </div>
              </div>
            </td>
            <td>
              <p className='fw-normal mb-1'>Software engineer</p>
            </td>
            <td>Senior</td>
            <td className='text-center'>
              <MDBBtn className='me-4' color='warning' rounded size='sm'>
                Edit
              </MDBBtn>
              <MDBBtn color='danger' rounded size='sm'>
                Delete
              </MDBBtn>
            </td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </div>
  )
}

export default FormEditBook