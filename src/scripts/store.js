import { createStore } from 'redux'
import counter from './reducer'

// create a store 
const store = createStore(counter)

export default store