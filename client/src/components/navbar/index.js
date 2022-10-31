import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
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
                    <Link className="nav-link text-white" aria-current="page" to='/'>
                      <FontAwesomeIcon icon={faHouse} className='me-1' style={{ width: '17px', marginBottom: '1px' }} />
                      Utama
                    </Link>
                  </li>
                  <li className="nav-item me-2 active">
                    <Link className="nav-link text-white" to='/book-list'>
                      <FontAwesomeIcon icon={faListUl} className='me-1' />
                      Daftar Buku
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <FontAwesomeIcon icon={faEllipsis} className='me-1' />
                      Atur Buku
                    </Link>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to='/add-book'>
                        <FontAwesomeIcon icon={faPlus} className='me-2' />
                        Tambah Buku
                      </Link></li>
                      <li><Link className="dropdown-item" to='/edit-book'>
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
                <Link to='/login'>
                  <button className="btn btn-login fw-bold shadow-none">
                    <FontAwesomeIcon icon={faRightToBracket} className='me-2' />
                    Masuk
                  </button>
                </Link>
                <button className="btn btn-sign fw-bold">
                  <FontAwesomeIcon icon={faUserPlus} className='me-1' />
                  Daftar
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