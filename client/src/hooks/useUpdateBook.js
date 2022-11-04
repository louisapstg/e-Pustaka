import { useMutation } from "@apollo/client";
import { GetBook } from '../graphql/query'
import { UpdateBook } from '../graphql/mutation'

export default function useUpdateBook() {
  const [updateBook, { loading: loadingUpdate }] = useMutation(UpdateBook, {
    refetchQueries: [GetBook]
  });
  return {
    updateBook,
    loadingUpdate
  }
}