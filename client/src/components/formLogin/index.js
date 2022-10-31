import React from 'react'
import {
  MDBContainer,
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBCheckbox,
  MDBCol
} from 'mdb-react-ui-kit'

const FormLogin = () => {
  return (

    <MDBContainer className='mb-5' style={{ marginTop: '85px' }}>
      <MDBRow className='p-5'>
        <MDBCol>

        </MDBCol>
        <MDBCol className='p-4 light-blue rounded-9 shadow-6'>
          <div className='mb-4 text-center'>
            <h4>
              Masuk
            </h4>
          </div>
          <div className='mb-3'>
            <MDBInput label='Email' id='typeEmail' type='email' />
          </div>
          <div className='mb-3'>
            <MDBInput label='Kata Sandi' id='typePassword' type='password' />
          </div>
          <div className='mb-3'>
            <MDBCheckbox className='me-0' name='inlineCheck' id='inlineCheckbox1' value='option1' inline />
            <label htmlFor="inlineCheckbox1" className='text-muted' style={{ fontSize: '14px' }}>
              Remember Me
            </label>
          </div>
          <div className='mb-3 text-center'>
            <MDBBtn className='w-100 mb-1 fw-bold' color='dark' rounded>
              Masuk
            </MDBBtn>
            <p className='text-muted mb-1' style={{ fontSize: '14px' }}>atau</p>
            <MDBBtn className='w-100 fw-bold' color='dark' rounded outline>
              Daftar
            </MDBBtn>
          </div>
        </MDBCol>
        <MDBCol>

        </MDBCol>

      </MDBRow>
    </MDBContainer>
  )
}

export default FormLogin