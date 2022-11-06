import { useLazyQuery } from "@apollo/client"
import { GetBookId } from "../graphql/query"

export default function useGetBookId() {
  const [getIdData,
    { data: singleIdData,
      loading: loadingSingleIdData,
    },] = useLazyQuery(GetBookId);

  return {
    getIdData,
    singleIdData,
    loadingSingleIdData,
  }
}