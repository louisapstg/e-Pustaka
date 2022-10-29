import React from 'react'

const Intro = () => {
  return (
    <div>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-5 my-auto p-3">
            <h3 className='text-black fw-bold'>
              Perpustakaan
            </h3>
            <p className='p-3 ps-0 text-justify'> <span className='text-transparent'>Dalam</span>Dalam arti tradisional, perpustakaan ataupun rumah buku, adalah sebuah koleksi buku dan majalah. Walaupun dapat diartikan sebagai koleksi pribadi perseorangan, namun perpustakaan lebih umum dikenal sebagai sebuah koleksi besar yang dibiayai dan dioperasikan oleh sebuah kota atau institusi, serta dimanfaatkan oleh masyarakat yang rata-rata tidak mampu membeli sekian banyak buku dengan biaya sendiri.</p>
          </div>
          <div className="col-5 text-center my-auto">
            <img src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/12/20/439995491.jpg" alt="Perpus" className='w-100 rounded-9' />
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
  )
}

export default Intro