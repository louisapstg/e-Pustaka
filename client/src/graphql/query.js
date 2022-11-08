import {
  gql
} from '@apollo/client'

export const GetBook = gql`
  query GetBook {
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
  query GetBookById($id: Int) {
    book (where: { id: { _eq: $id }}) {
      title
      author
      url
      description
    }
  }
`

export const GetBookTitle = gql`
  query GetBookByTitle($title: String!) {
    book(where: {title: {_eq: $title}}){
      title
      author
      url
      description
    }
  }
 `

export const GET_LOGIN_USER = gql`
  query Login($email: String, $password: String) {
    user(
      where: { email: { _eq: $email }, password: { _eq: $password } }
    ) {
      id
      password
      token
      email
    }
  }
`

export const GET_REGISTER_USER = gql`
  query GetRegister($email: String) {
    user(where: { email: { _eq: $email } }) {
      id
      password
      token
      email
    }
  }
`

export const POST_REGISTER_USER = gql`
  mutation PostRegister($password: String, $token: String, $email: String) {
    insert_user(
      objects: { password: $password, token: $token, email: $email }
    ) {
      returning {
        id
        password
        token
        email
      }
    }
  }
`