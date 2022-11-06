// style
import './style/App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"

// router
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

// pages
import {
  Home,
  List,
  AddBook,
  EditPage,
  Login,
  Register
} from './pages'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/book-list' element={<List />} />
          <Route path='/add-book' element={<AddBook />} />
          <Route path='/edit-book' element={<EditPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
