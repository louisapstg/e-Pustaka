import React from 'react'
import { Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBCol
} from 'mdb-react-ui-kit'
import {
  faRightToBracket,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FormRegister = () => {
  return (
    <MDBContainer className='mb-5' style={{ marginTop: '85px' }}>
      <MDBRow className='p-5'>
        <MDBCol>
        </MDBCol>
        <MDBCol className='p-4 light-blue rounded-9 shadow-6'>
          <div className='mb-4 text-center'>
            <Link to='/login'>
              <button className="btn fw-bold shadow-none text-black">
                <FontAwesomeIcon icon={faRightToBracket} className='me-2' />
                Masuk
              </button>
            </Link>
            <Link to='/register'>
              <button className="btn btn-sign blue fw-bold">
                <FontAwesomeIcon icon={faUserPlus} className='me-1' />
                Daftar
              </button>
            </Link>
          </div>
          <div className='mb-3'>
            <MDBInput label='Email' id='typeEmail' type='email' />
          </div>
          <div className='mb-3'>
            <MDBInput label='Kata Sandi' id='typePassword' type='password' />
          </div>
          <div className='mb-3'>
            <MDBInput label='Konfirmasi Kata Sandi' id='typePassword' type='password' />
          </div>
          <div className='mb-3 text-center'>
            <MDBBtn className='w-100 mb-1 fw-bold' color='dark' rounded outline>
              Daftar
            </MDBBtn>
            <p className='text-muted mb-1' style={{ fontSize: '14px' }}>atau</p>
            <MDBBtn className='w-100 mb-1 fw-bold' color='dark' rounded>
              Masuk
            </MDBBtn>
          </div>
        </MDBCol>
        <MDBCol>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default FormRegister