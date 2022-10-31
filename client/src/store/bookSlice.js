import { v4 as uuidv4 } from 'uuid'
import {
  createSlice
} from '@reduxjs/toolkit'

const initialValue = [
  {
    id: uuidv4(),
    url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTQ9LFglH_i7X2DcF1jR3m0UKhpnmFDu3YCjy9e2Wxca7v8lrvo',
    title: "Harry Potter and the Philosopher's Stone",
    description: "Harry Potter and the Philosopher's Stone merupakan sebuah novel fantasi pada tahun 1997 yang ditulis oleh J. K. Rowling"
  },
  {
    id: uuidv4(),
    url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSyDaN5FijaQ_3OuhFtfYLkXDkAfv07RnKNiNwUzbvOjAE2V9EQ',
    title: "Harry Potter and the Chamber of Secrets",
    description: "Harry Potter and the Chamber of Secrets merupakan novel fantasi pada tahun 1998 yang ditulis oleh J. K. Rowling dan merupakan novel kedua seri Harry Potter"
  },
  {
    id: uuidv4(),
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh1m68UISOwEUsmJVsXRqkQRxDDikdklLlJJL8P00ReMgJU65o',
    title: "Harry Potter and the Prisoner of Azkaban",
    description: "Harry Potter and the Prisoner of Azkaban merupakan novel fantasi pada tahun 1999 yang ditulis oleh J. K. Rowling dan merupakan novel ketiga seri Harry Potter"
  },
  {
    id: uuidv4(),
    url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSQ1bZhaGKFZeAQjDSG-l3u10L6cEVo0V5aq0UaPlp_JInnCuoR',
    title: "Harry Potter and the Goblet of Fire",
    description: "Harry Potter and the Goblet of Fire merupakan novel fantasi pada tahun 2000 yang ditulis oleh J. K. Rowling dan merupakan novel keempat seri Harry Potter"
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