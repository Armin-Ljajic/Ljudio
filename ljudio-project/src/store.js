import { createStore } from "vuex" 

const store = createStore({
   state:{
        
   },
   mutations:{
       
   },
   actions:{
       async fetchList({commit}){
           let result = await fetch('https://yt-music-api.herokuapp.com/api/yt/songs/search+string')
           let data = await result.json();
            commit('loadList', data.title)
            console.log(data.title)
        }
   }
})

export default store