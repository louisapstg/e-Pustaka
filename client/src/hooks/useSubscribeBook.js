import { useSubscription } from "@apollo/client"
import { SubscriptionBook } from "../graphql/subscription"

export default function useSubscribeBook() {
  const { data, loading, error } = useSubscription(SubscriptionBook)

  return {
    data,
    loading,
    error
  }
}