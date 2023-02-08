export default {
    dogs:[],
    dog:{
        image:"",
        subBreed:[],
        loadingImage:false,
        loadingSubBreed:false
    }
}

export interface State{
    dogs:Array<string>,
    dog:{
        image:string,
        subBreed:Array<string>,
        loadingImage:boolean,
        loadingSubBreed:boolean
    }
}