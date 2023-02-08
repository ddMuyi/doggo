import state from './state'

import * as mutations from './mutations'
import * as actions from './actions'

import { createStore } from 'vuex'


// export interface State{
//     dogs:{key:string}[],
//     dog:{}
// }

const store = createStore({
    state,
    mutations,
    actions
})

  export default store