import React, { useEffect, useState } from 'react'
import LoadingSVG from './../LoadingSVG/index'
import useGetData from './../../hooks/useGetData'
import useGetBookTitle from './../../hooks/useGetBookTitle'
import { useQuery } from '@apollo/client';
import { GetBook } from './../../graphql/query';

const BookList = () => {

   const { subscribeBook } = useGetData()
   const [title, setTitle] = useState('')
   const [book, setBook] = useState([])
   const { getTitleData, singleTitleData, loadingSingleTitleData, } = useGetBookTitle()
   const { data: allData, loading: loadingAllData, error: errorAllData } = useQuery(GetBook)

   useEffect(() => {
      subscribeBook()
   }, [])

   useEffect(() => {
      if (allData) {
         setBook(allData.book)
      }
   }, [allData])

   useEffect(() => {
      if (singleTitleData) {
         setBook(singleTitleData.book)
      }
   }, [singleTitleData])

   const handlerTitle = () => {
      getTitleData({
         variables: {
            title: title
         }
      })
      setTitle(singleTitleData?.book)
   }

   const onChangeName = (e) => {
      if (e.target) {
         setTitle(e.target.value)
      }
   }

   return (
      <div className='container-fluid'>
         <div className='mt-4 pt-5 text-center'>
            <h1 className='fw-bold text-black'>Daftar Buku</h1>
            <p>Berikut merupakan buku-buku yang ada dan dapat dipinjam pada perpustakaan ini: </p>
         </div>

         <form class="d-flex justify-content-end" role="search">
            <input
               class="form-control me-2 w-25"
               type="search"
               placeholder="Cari Buku"
               aria-label="Search"
               value={title}
               onChange={onChangeName}
            />
            <button
               class="btn btn-outline-success"
               type="submit"
               onClick={handlerTitle}
            >
               Cari
            </button>
         </form>
         {
            errorAllData && <p>Something went wrong...</p>
         }
         {
            (loadingAllData || loadingSingleTitleData) && (
               <div className='m-5 p-5 mx-auto'>
                  <LoadingSVG />
               </div>
            )
         }
         {
            !errorAllData && (
               <div className='container'>
                  <div className="d-flex flex-wrap mt-4 p-0 m-0">
                     {allData?.book.map((item) => (
                        <div class="card my-3 light-blue mx-3" style={{ width: "18rem" }}>
                           <img src={item.url} class="card-img-top" alt="..." />
                           <div class="card-body mx-auto">
                              <h5 class="card-title fw-bold text-black">{item.title}</h5>
                              <p class="card-text text-justify truncate">{item.description}</p>
                           </div>
                        </div>

                     ))}
                  </div>
               </div>
            )
         }


      </div>
   )
}

export default BookList