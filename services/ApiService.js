import { API, graphqlOperation } from 'aws-amplify';

class ApiService {
  async get(query) {
    return await API.graphql(graphqlOperation(query));
  }

  async find(query, uid) {
    return await API.graphql(graphqlOperation(query, uid));
  }

  async post(mutation, input) {
    return await API.graphql(graphqlOperation(mutation, input));
  }

  async put(mutation, input) {
    return await API.graphql(graphqlOperation(mutation, input));
  }

  async destroy(mutation, input) {
    return await API.graphql(graphqlOperation(mutation, input));
  }
}

export default new ApiService();
