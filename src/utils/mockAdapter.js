import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import * as data from '@/utils/mockData'

const mock = new MockAdapter(axios)

// Set up the mock response for the API call
mock.onGet('api/cessions/regestries').reply(200, data.registries)

export default mock
