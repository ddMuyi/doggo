import axios from 'axios'

export const fetchDogs = async ({commit}: { commit: Function }) =>{
    try{
        commit('SET_LOADING_DOGS', true)
        let response = await axios.get("https://dog.ceo/api/breeds/image/random/50")
        let data = await response.data

        commit('SET_DOGS', data.message)

        commit('SET_LOADING_DOGS', false)
    }
    catch(err){
        console.log(err)
        commit('SET_LOADING_DOGS', false)
    }
}

export const fetchDogSubBreed = async ({commit}: { commit: Function }, payload:string) =>{
    try{
        commit("SET_LOADING_DOG_SUBBREED", true)
        let response = await axios.get(`https://dog.ceo/api/breed/${payload}/list`)
        let data = await response.data

        console.log(data.message)

        commit('SET_DOG_SUBBREEDS', data.message[payload])
        commit("SET_LOADING_DOG_SUBBREED", false)
    }
    catch(err){
        console.log(err)
        commit("SET_LOADING_DOG_SUBBREED", false)
    }
}

export const fetchDogImage = async ({commit}: { commit: Function }, payload:string) =>{
    try{
        commit("SET_LOADING_DOG_IMAGE", true)
        let response = await axios.get(`https://dog.ceo/api/breed/${payload}/images/random`)
        let data = await response.data

        commit('SET_DOG_IMAGE', data.message)
        commit("SET_LOADING_DOG_IMAGE", false)
    }
    catch(err){
        console.log(err)
        commit("SET_LOADING_DOG_IMAGE", false)
    }
}


