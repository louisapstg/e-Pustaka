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