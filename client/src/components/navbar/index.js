import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteToken } from "../../store/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEllipsis,
  faHouse,
  faListUl,
  faPlus,
  faRightToBracket,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faProductHunt } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = (e) => {
    e.preventDefault();
    dispatch(deleteToken());
    navigate("/login");
  };

  const account = useSelector((state) => state.token.account);
  const email = useSelector((state) => state.token.email);
  const user = () => {
    if (account == "User") {
      return email;
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top position-fixed blue border-black">
        <div className="container-fluid justify-content-center">
          <div className="row w-100">
            <div className="col-4 border-end">
              <Link className="navbar-brand justify-content-center" to='/'>
                <FontAwesomeIcon icon={faProductHunt} className='text-white' size='lg' />
                <div className='ms-3'>
                  <span className='fw-semibold text-white'>e</span>
                  <span className='fw-bolder text-black'>
                    P
                    <span style={{ fontSize: '15px' }}>
                      USTAKA
                    </span>
                  </span>
                </div>
              </Link>
            </div>
            <div className="col-4 border-end">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto fw-semibold">
                  <li className="nav-item me-2">
                    <Link className="nav-link text-white transition" aria-current="page" to='/'>
                      <FontAwesomeIcon icon={faHouse} className='me-1' style={{ width: '17px', marginBottom: '1px' }} />
                      Utama
                    </Link>
                  </li>
                  <li className="nav-item me-2 active">
                    <Link className="nav-link text-white transition" to='/book-list'>
                      <FontAwesomeIcon icon={faListUl} className='me-1' />
                      Daftar Buku
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle text-white transition" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <FontAwesomeIcon icon={faEllipsis} className='me-1' />
                      Atur Buku
                    </Link>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item transition" to='/add-book'>
                        <FontAwesomeIcon icon={faPlus} className='me-2' />
                        Tambah Buku
                      </Link></li>
                      <li><Link className="dropdown-item transition" to='/edit-book'>
                        <FontAwesomeIcon icon={faPenToSquare} className='me-2' />
                        Ubah Buku
                      </Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-4">
              <div className="text-center">
                <a className="btn btn-login fw-bold shadow-none transition text-lowercase">
                  {user()}
                </a>
                <button className="btn btn-sign fw-bold transition" onClick={logOut}>
                  Keluar
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar