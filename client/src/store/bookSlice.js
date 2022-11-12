import { v4 as uuidv4 } from 'uuid'
import {
  createSlice
} from '@reduxjs/toolkit'

const initialValue = [
  {
    id: uuidv4(),
    url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRkWXbfQrO5oTm1I5izjeRTbQD-vKPnybT24S2kFw2eH8LyyCo5',
    title: "Harry Potter and the Philosopher's Stone",
    description: "Harry Potter and the Philosopher's Stone merupakan sebuah novel fantasi pada tahun 1997 yang ditulis oleh J. K. Rowling",
    sinopsis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cupiditate odio animi libero ea neque quia fuga est unde dignissimos, eius quod obcaecati ab quaerat repudiandae, quasi quas quibusdam sed.'
  },
  {
    id: uuidv4(),
    url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSyDaN5FijaQ_3OuhFtfYLkXDkAfv07RnKNiNwUzbvOjAE2V9EQ',
    title: "Harry Potter and the Chamber of Secrets",
    description: "Harry Potter and the Chamber of Secrets merupakan novel fantasi pada tahun 1998 yang ditulis oleh J. K. Rowling dan merupakan novel kedua seri Harry Potter",
    sinopsis: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum quas sit perferendis animi, illum cumque blanditiis a excepturi dicta, ab perspiciatis, fuga natus maiores deserunt officia necessitatibus tempora dolorem dolore.'
  },
  {
    id: uuidv4(),
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh1m68UISOwEUsmJVsXRqkQRxDDikdklLlJJL8P00ReMgJU65o',
    title: "Harry Potter and the Prisoner of Azkaban",
    description: "Harry Potter and the Prisoner of Azkaban merupakan novel fantasi pada tahun 1999 yang ditulis oleh J. K. Rowling dan merupakan novel ketiga seri Harry Potter",
    sinopsis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum similique perspiciatis pariatur nobis itaque doloremque, at neque nostrum incidunt temporibus perferendis dolore provident dignissimos, quibusdam eos sed soluta delectus ducimus!'
  },
  {
    id: uuidv4(),
    url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSQ1bZhaGKFZeAQjDSG-l3u10L6cEVo0V5aq0UaPlp_JInnCuoR',
    title: "Harry Potter and the Goblet of Fire",
    description: "Harry Potter and the Goblet of Fire merupakan novel fantasi pada tahun 2000 yang ditulis oleh J. K. Rowling dan merupakan novel keempat seri Harry Potter",
    sinopsis: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab voluptates incidunt necessitatibus quidem debitis unde praesentium, ipsum vitae. Quo molestiae dolorum, qui ratione excepturi ducimus placeat impedit unde reiciendis aperiam.'
  }
]

export const bookSlice = createSlice({
  name: 'book',
  initialState: {
    books: initialValue
  },
  reducers: {
    hapusBuku: (state, action) => {
      state.books = state.books.filter((item) => {
        return item.id !== action.payload
      })
    },
    tambahBuku: (state, action) => {
      state.books = [...state.books, action.payload]
    }
  }
})

export const { hapusBuku, tambahBuku } = bookSlice.actions
export default bookSlice.reducer