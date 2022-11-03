import {
  ApolloClient,
  InMemoryCache,
  split,
  HttpLink
} from '@apollo/client'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from '@apollo/client/utilities'

// Create an http link:
const httpLink = new HttpLink({
  uri: 'https://e-pustaka.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret': '5L8w3gCDYvcOhWUoaYtObpOrOYg8DenemZzKq9V2Ob7HyZ1nX3SSUSu495rHrw10'
  }
})

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: 'wss:///e-pustaka.hasura.app/v1/graphql',
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        'x-hasura-admin-secret': '5L8w3gCDYvcOhWUoaYtObpOrOYg8DenemZzKq9V2Ob7HyZ1nX3SSUSu495rHrw10'
      }
    }
  }
})

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const Client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
})

export default Client