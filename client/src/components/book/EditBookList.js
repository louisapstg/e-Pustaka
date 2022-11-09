import React, { useState } from 'react'
import {
     MDBTable,
     MDBTableHead,
     MDBTableBody
} from 'mdb-react-ui-kit'
import EditBook from './EditBook'
import LoadingSVG from './../LoadingSVG'
import useSubscribeBook from './../../hooks/useSubscribeBook'
import useGetBookTitle from '../../hooks/useGetBookTitle'

const EditBookList = () => {

     const [title, setTitle] = useState('')
     const { data, loading, error } = useSubscribeBook()
     const { getTitleData, singleTitleData, loadingSingleTitleData, } = useGetBookTitle()
     // const { data: allData, loading: loadingAllData, error: errorAllData } = useQuery(GetBook)

     if (loading || loadingSingleTitleData) {
          return (
               <div className='m-5 p-5'>
                    <LoadingSVG />
               </div>
          )
     }

     if (error) {
          return <p>Something Went Wrong...</p>
     }

     // const handlerTitle = () => {
     //      getTitleData({
     //           variables: {
     //                title: title
     //           }
     //      })
     //      setTitle(singleTitleData?.book)
     // }

     // const onChangeName = (e) => {
     //      if (e.target) {
     //           setTitle(e.target.value)
     //      }
     // }

     return (
          <div className="container-fluid mt-5 pt-5 mb-8">
               {/* <form class="d-flex justify-content-end mb-3" role="search">
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
               </form> */}
               <MDBTable align='middle'>
                    <MDBTableHead>
                         <tr className='text-center light-blue'>
                              <th scope='col' className='fw-bold fs-6'>Title</th>
                              <th scope='col' className='fw-bold fs-6'>Author</th>
                              <th scope='col' className='th-w fw-bold fs-6'>Description</th>
                              <th scope='col' className='th-w2 fw-bold fs-6'>Actions</th>
                         </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                         {data?.book.map((item) => (
                              <EditBook
                                   id={item.id}
                                   title={item.title}
                                   author={item.author}
                                   url={item.url}
                                   description={item.description}
                              />
                         ))}
                    </MDBTableBody>
               </MDBTable>
          </div >
     )
}

export default EditBookList