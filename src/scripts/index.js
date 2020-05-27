// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';


// Import any additional modules you want to include below \/
import { createStore } from 'redux'
import { counter } from './redux/reducer'
import { ADD_ONE } from './redux/types'


// \/ All of your javascript should go here \/



// CREATE A STORE
const store = createStore(counter)
console.log(store.getState());

// LISTEN FOR UPDATE
store.subscribe(() => {
    console.log('change happened', store.getState())
})

store.dispatch({
    type: ADD_ONE
})

console.log(store.getState())

