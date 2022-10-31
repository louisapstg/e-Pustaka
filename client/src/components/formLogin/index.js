import React from 'react'
import {
  MDBContainer,
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBCol
} from 'mdb-react-ui-kit'

const FormLogin = () => {
  return (

    <MDBContainer className='mb-14 mt-5'>
      <MDBRow className='p-5'>
        <MDBCol>

        </MDBCol>
        <MDBCol className='p-4 light-blue rounded-9 shadow-6'>
          <div className='mb-4 text-center'>
            <h4>
              Masukkan Akun
            </h4>
          </div>
          <div className='mb-3'>
            <MDBInput label='Email input' id='typeEmail' type='email' />
          </div>
          <div className='mb-3'>
            <MDBInput label='Password input' id='typePassword' type='password' />
          </div>
          <div className=' mb-3'>
            <MDBBtn className='float-end' color='primary' rounded outline>
              Masuk
            </MDBBtn>
          </div>
        </MDBCol>
        <MDBCol>

        </MDBCol>

      </MDBRow>
    </MDBContainer>

    // <div className="container mb-14">
    //   <div className='p-5 mt-5 w-50 light-blue mx-auto'>
    //     <div className='mb-3'>
    //       <MDBInput label='Email input' id='typeEmail' type='email' />
    //     </div>
    //     <div className='mb-3'>
    //       <MDBInput label='Password input' id='typePassword' type='password' />
    //     </div>
    //     <div className=' mb-3'>
    //       <MDBBtn className='' color='success'>
    //         Masuk
    //       </MDBBtn>
    //     </div>
    //   </div>
    // </div>
  )
}

export default FormLogin