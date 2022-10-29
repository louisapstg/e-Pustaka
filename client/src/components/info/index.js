import React from 'react'

const Info = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-4 p-3">
            <h4 className='fw-bold text-black'>
              Peran Perpustakaan
            </h4>
            <p className='text-justify'>
              <span className='text-transparent'>Dalam</span>Perpustakaan merupakan upaya untuk memelihara dan meningkatkan efisiensi dan efektivitas proses belajar-mengajar. Perpustakaan yang terorganisasi secara baik dan sistematis, secara langsung ataupun tidak langsung dapat memberikan kemudahan bagi proses belajar mengajar di sekolah tempat perpustakaan tersebut berada. Hal ini, terkait dengan kemajuan bidang pendidikan dan dengan adanya perbaikan metode belajar-mengajar yang dirasakan tidak bisa dipisahkan dari masalah penyediaan fasilitas dan sarana pendidikan.
              Perpustakaan merupakan jantungnya dunia pendidikan karena berbagai macam informasi bisa kita dapatkan di perpustakaan
            </p>
          </div>
          <div className="col-4 text-center p-3 border-start border-end">
            <h4 className='fw-bold text-black'>
              Jadwal Operasi Perpustakaan
            </h4>
            <ul className="list-group list-group-flush rounded-5">
              <li className="list-group-item">
                <span className='fw-semibold'>
                  Senin - Jumat
                </span>
                <br />
                07:00 WIB - 17:00 WIB
              </li>
              <li className="list-group-item">
                <span className='fw-semibold'>
                  Sabtu
                </span>
                <br />
                08:00 WIB - 15:00 WIB
              </li>
              <li className="list-group-item">
                <span className='fw-semibold'>
                  Minggu
                </span>
                <br />
                Tutup
              </li>
            </ul>
          </div>
          <div className="col-4 p-3">
            <h4 className='fw-bold text-black'>
              Tujuan Perpustakaan
            </h4>
            <p>
              <span className='text-transparent'>Dalam</span>Tujuan perpustakaan adalah untuk membantu masyarakat dalam segala umur dengan memberikan kesempatan dengan dorongan melalui jasa pelayanan perpustakaan agar mereka:
            </p>
            <ol class="list-group list-group-numbered">
              <li class="list-group-item">Dapat mendidik dirinya sendiri secara berkesimbungan</li>
              <li class="list-group-item">Dapat tanggap dalam kemajuan pada berbagai lapangan ilmu pengetahuan, kehidupan sosial dan politik</li>
              <li class="list-group-item">Dapat meningkatkan taraf kehidupan sehari-hari dan lapangan pekerjaannya</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info