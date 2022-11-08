import React, { useState, useEffect } from 'react'
import useGetBookTitle from './../../hooks/useGetBookTitle';

const SearchBook = () => {
     const [value, setValue] = useState('')
     const [book, setBook] = useState([])
     const { getTitleData, singleTitleData, loadingSingleTitleData, } = useGetBookTitle()

     useEffect(() => {
          if (singleTitleData) {
               setBook(singleTitleData.book)
          }
     }, [singleTitleData])

     const handlerTitle = () => {
          getTitleData({
               variables: {
                    title: value
               }
          })
     }

     return (
          <div className='container-fluid'>
               <form class="d-flex justify-content-end" role="search">
                    <input
                         class="form-control me-2 w-25"
                         type="search"
                         placeholder="Cari Buku"
                         aria-label="Search"
                         value={value}
                         onChange={(e) => setValue(e.target.value)}
                    />
                    <button
                         class="btn btn-outline-success"
                         type="submit"
                         onClick={handlerTitle}
                    >
                         Cari
                    </button>
               </form>
          </div>
     )
}

export default SearchBook