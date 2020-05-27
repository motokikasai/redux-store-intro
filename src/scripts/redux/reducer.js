import { ADD_ONE } from './types'

// REDUCER
export function counter(state = 0, action) {
    // console.log(action)
    switch (action.type) {
        case ADD_ONE:
            return state + 1

        default:
            return state
    }
}

// export default counter  ---- WHY NOT WORKING??????