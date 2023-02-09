import type {State} from './state'

export const SET_DOGS = (state:State, dogs:[])=>{
    state.dogs = [...state.dogs, ...dogs]
}

export const CLEAR_DOGS = (state:State)=>{
    state.dogs = []
}

export const SET_SEARCH_DOG = (state:State, payload:string)=>{
    state.searchDog = payload
}

export const SET_LOADING_DOGS = (state:State, payload:boolean)=>{
    state.loadingDogs = payload
}

export const SET_DOG_IMAGE = (state:State, image:string)=>{
    state.dog.image = image
}

export const SET_DOG_SUBBREEDS = (state:State, subBreed:[])=>{
    state.dog.subBreed = subBreed
}

export const SET_LOADING_DOG_IMAGE = (state:State, payload:boolean)=>{
    state.dog.loadingImage = payload
}

export const SET_LOADING_DOG_SUBBREED = (state:State, payload:boolean)=>{
    state.dog.loadingSubBreed = payload
}