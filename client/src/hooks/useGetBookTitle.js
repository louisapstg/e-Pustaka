import { useLazyQuery } from "@apollo/client"
import { GetBookTitle } from "../graphql/query"

export default function useGetBookTitle() {
  const [getTitleData,
    { data: singleTitleData,
      loading: loadingSingleTitleData,
    },] = useLazyQuery(GetBookTitle);

  return {
    getTitleData,
    singleTitleData,
    loadingSingleTitleData,
  }
}