import {
  gql
} from '@apollo/client'

export const GetBook = gql`
  query MyQuery {
    book {
      id
      title
      author
      url
      description
    }
  }
 `

export const GetBookId = gql`
  query MyQuery($id: Int) {
    book (where: { id: { _eq: $id }}) {
      title
      author
      url
      description
    }
  }
`

export const GetBookTitle = gql`
  query MyQuery($title: String!) {
    book(where: {title: {_eq: $title}}){
      id
      title
      author
      url
      description
    }
  }
 `