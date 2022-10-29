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
  Home
} from './pages'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
