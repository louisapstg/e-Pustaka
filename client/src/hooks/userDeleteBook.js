import { useMutation } from "@apollo/client"
import { GetBook } from './../graphql/query'
import { DeleteBook } from './../graphql/mutation'

export default function useDeleteBook() {
  const [deleteBook, { loading: loadingDelete }] = useMutation(DeleteBook, {
    refetchQueries: [GetBook]
  })

  return {
    deleteBook,
    loadingDelete
  }
}