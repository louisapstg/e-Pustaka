import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
import Swal from "sweetalert2"
import { GET_REGISTER_USER, POST_REGISTER_USER } from "../../graphql/query";
import { useLazyQuery, useMutation } from "@apollo/client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FormRegister = () => {

  const [verifikasi, { data, loading, error }] =
    useLazyQuery(GET_REGISTER_USER);
  const [insertUser] = useMutation(POST_REGISTER_USER);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cofPassword, setCofPassword] = useState();
  const navigate = useNavigate()

  useEffect(() => {
    async function cek() {
      console.log(email, " ", password);
      console.log(data?.user);
      if (password != cofPassword) {
        alert("Password yang dimasukkan tidak sesuai dengan yang sebelumnya");
      } else {
        if (!data?.user[0]) {
          // Random Token
          const rand = () => Math.random(0).toString(36).substr(2);
          const tokenR = (length) =>
            (rand() + rand() + rand() + rand()).substr(0, length);
          // Masukkan Username, password, dan generate Token ke dalam APIHasura
          insertUser({
            variables: {
              email: email,
              password: password,
              token: tokenR(20),
            },
          });
          Swal.fire(
            "Berhasil Membuat Akun Baru!",
            "Akunmu berhasil dibuat, Silahkan Masuk!",
            "success"
          );
          navigate("/login");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email sudah terdaftar, tolong masukkan email yang lain",
          });
        }
      }
    }
    if (data) {
      cek();
    }
  }, [data]);

  if (error) {
    console.log(error);
  }
  const handleSubmit = async (e) => {
    console.log("success");
    e.preventDefault();
    verifikasi({
      variables: {
        email: email,
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
                required
              />
            </div>
            <div className='mb-3'>
              <MDBInput
                label='Masukkan Ulang Kata Sandi'
                id='typePassword'
                type='password'
                onChange={e => setCofPassword(e.target.value)}
                required
              />
            </div>
            <div className='mb-3 text-center'>
              <MDBBtn className='w-100 mb-1 fw-bold' color='dark' rounded outline>
                Daftar
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

export default FormRegister