import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import * as data from '@/utils/mockData'

const mock = new MockAdapter(axios)

const anyId = (string) => new RegExp(`^${string}/[0-9]`)
const fileRegex = /\/cessions\/registries\/\d+\/export$/
const deleteRegex = /\/cessions\/registries\/\d+$/

// Set up the mock response for the API call
mock.onGet('api/cessions/regestries').reply(200, data.registries)
mock.onGet(new RegExp(fileRegex)).reply(200, data.file)
mock.onDelete(new RegExp(deleteRegex)).reply(200, data.file)

export default mock
