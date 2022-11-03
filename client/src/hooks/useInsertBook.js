import { useMutation } from "@apollo/client"
import { InsertBook } from "../graphql/mutation"
import { GetBook } from './../graphql/query'

export default function useInsertBook() {
  const [insertBook, { loading: loadingInsert }] = useMutation(InsertBook, {
    refetchQueries: [GetBook]
  })

  return {
    insertBook,
    loadingInsert
  }
}