import { useQuery } from "@apollo/client"
import { GetBook } from './../graphql/query';
import { SubscriptionBook } from './../graphql/subscription';

export default function useGetData() {
  const { data, loading, error, subscribeToMore } = useQuery(GetBook);
  const subscribeBook = () => {
    subscribeToMore({
      document: SubscriptionBook,
      updateQuery: (prev, { subscriptionData: { data } }) => {
        console.log(data)
        return data
      }
    })
  }
  return {
    data,
    loading,
    error,
    subscribeBook,
  }
}