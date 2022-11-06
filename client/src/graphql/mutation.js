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

export const UpdateBook = gql`
    mutation MyMutation($id: Int!, $title: String!, $author: String!, $url: String!, $description: String!) {
        update_book(where: {id: {_eq: $id}}, 
            _set: {
                title: $title 
                author: $author
                url: $url
                description: $description
            }) {
            affected_rows
        }
    }
`