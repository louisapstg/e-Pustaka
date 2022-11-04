import React, { useEffect } from 'react'
import LoadingSVG from './../LoadingSVG/index'
import useGetData from './../../hooks/useGetData'

const BookList = () => {

  const { data, loading, error, subscribeBook } = useGetData()

  useEffect(() => {
    subscribeBook()
  }, [])

  if (loading) {
    return <LoadingSVG />
  }

  if (error) {
    return <p>Something Went Wrong...</p>
  }

  return (
    <div className='container-fluid'>
      {/* <MDBRow className='row-cols-1 row-cols-md-3 g-4 mt-4 p-5'>
        {data?.book.map((item) => (
          <MDBCol className='w-25'>
            <img src={item.url} class="img-thumbnail w-50" alt="Book Cover" />
          </MDBCol>
        ))}
      </MDBRow> */}
      <div className='mt-4 pt-5 text-center'>
        <h1 className='fw-bold text-black'>Daftar Buku</h1>
        <p>Berikut merupakan buku-buku yang ada dan dapat dipinjam pada perpustakaan ini: </p>
      </div>

      <div className="d-flex flex-wrap mt-4 p-0 m-0 text-center">
        {data?.book.map((item) => (
          <div className='book-card light-blue my-2 p-3 rounded mx-auto'>
            <img src={item.url} class="img-thumbnail w-50 mb-3" alt="Book Cover" />
            <h6 className='fw-bold font-card'> {item.title} </h6>
          </div>
        ))}
      </div>

    </div>
  )
}

export default BookList