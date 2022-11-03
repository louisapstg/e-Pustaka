import {
    gql,
} from '@apollo/client'

export const DeleteBook = gql`
    mutation MyMutation($id: Int!) {
        delete_book_by_pk(id: $id) {
            id
            title
            author
            url
            description
        }
    }
`

export const InsertBook = gql`
    mutation MyMutation($object: book_insert_input!) {
        insert_book_one(object: $object) {
            id
        }
    }  
`