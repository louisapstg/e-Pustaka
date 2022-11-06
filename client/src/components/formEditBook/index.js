import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GetBookId } from '../../graphql/query'
import useUpdateBook from './../../hooks/useUpdateBook'
import './style.css'
import LoadingSVG from '../LoadingSVG'

const FormEditBook = (props) => {

  const { data, error, loading } = useQuery(GetBookId, {
    variables: {
      id: props.id
    }
  })
  const { updateBook } = useUpdateBook()
  const [state, setState] = useState({
    title: "",
    author: "",
    url: "",
    description: ""
  })

  useEffect(() => {
    async function check() {
      setState({
        title: data?.book[0].title,
        author: data?.book[0].author,
        url: data?.book[0].url,
        description: data?.book[0].description,
      })
    }

    check()
  }, [data])

  if (loading) {
    return <LoadingSVG />
  }

  if (error) {
    return <p>Something Went Wrong...</p>
  }

  const handleSubmit = (e) => {
    if (
      state.title === "" ||
      state.author === "" ||
      state.url === "" ||
      state.description === ""
    ) {
      return
    } else {
      updateBook({
        variables: {
          id: props.id,
          title: state.title,
          author: state.author,
          url: state.url,
          description: state.description,
        },
      })
      props.handleClose()
    }
  }

  const onChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
    console.log(state.title, "title")
  }


  return (
    <div>
      <div className="popup-box" style={{ color: "black" }}>
        <div className="box">
          <span className="close-icon" onClick={props.handleClose}>
            x
          </span>
          <h1>Update Book</h1>
          <form onSubmit={handleSubmit}>
            <p>Book</p>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Judul..."
                onChange={onChange}
                value={state.title}
                aria-label="title"
                name="title"
                aria-describedby="basic-addon1"
                required
              />
            </div>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Penulis..."
                onChange={onChange}
                value={state.author}
                aria-label="author"
                name="author"
                aria-describedby="basic-addon1"
                required
              />
            </div>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Link Gambar..."
                onChange={onChange}
                value={state.url}
                aria-label="url"
                name="url"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Keterangan..."
                onChange={onChange}
                value={state.description}
                aria-label="description"
                name="description"
                aria-describedby="basic-addon1"
                required
              />
            </div>
            <button type="submit" className="btn btn-outline-primary mt-3">
              Update Book
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormEditBook