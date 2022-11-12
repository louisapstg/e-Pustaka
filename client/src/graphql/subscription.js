import {
  gql
} from '@apollo/client'

export const SubscriptionBook = gql`
  subscription MySubscription {
    book {
      id
      title
      author
      url
      description
    }
  }
`