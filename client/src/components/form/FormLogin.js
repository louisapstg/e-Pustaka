import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  MDBContainer,
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBCheckbox,
  MDBCol
} from 'mdb-react-ui-kit'
import {
  faRightToBracket,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLazyQuery } from '@apollo/client'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { addTokenUser } from '../../store/auth'
import { GET_LOGIN_USER } from '../../graphql/query'

const FormLogin = () => {
  const [verifikasi, { data, loading, error }] = useLazyQuery(GET_LOGIN_USER)
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    async function cek() {
      if (data?.user[0]) {
        // Jika Benar, Mengambil Token yang dimiliki user dan menyimpannya di local storage
        console.log("success");
        { data?.user.map((item) => dispatch(addTokenUser(item))); }
        Swal.fire("Berhasil Masuk!", "Selamat Datang di ePustaka!", "success");
        navigate("/");
      } else {
        console.log("notfound");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email atau Kata Sandi Salah!",
        });
      }
    }
    if (data) {
      cek();
    }
  }, [data]);

  if (error) {
    console.log(error);
    return null;
  }
  if (loading) {

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("success");
    verifikasi({
      variables: {
        email: email,
        password: password,
      },
    });
  };

  return (

    <MDBContainer className='mb-5' style={{ marginTop: '85px' }}>
      <MDBRow className='p-5'>
        <MDBCol>

        </MDBCol>
        <MDBCol className='p-4 light-blue rounded-9 shadow-6'>
          <div className='mb-4 text-center'>
            <Link to='/login'>
              <button className="btn btn-sign blue fw-bold">
                <FontAwesomeIcon icon={faUserPlus} className='me-1' />
                Masuk
              </button>
            </Link>
            <Link to='/register'>
              <button className="btn fw-bold shadow-none text-black">
                <FontAwesomeIcon icon={faRightToBracket} className='me-2' />
                Daftar
              </button>
            </Link>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <MDBInput
                label='Email'
                id='typeEmail'
                type='email'
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='mb-3'>
              <MDBInput
                label='Kata Sandi'
                id='typePassword'
                type='password'
                onChange={e => setPassword(e.target.value)}
              />
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
            </div>
          </form>
        </MDBCol>
        <MDBCol>

        </MDBCol>

      </MDBRow>
    </MDBContainer>
  )
}

export default FormLogin