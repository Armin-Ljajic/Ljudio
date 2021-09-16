<template>
    <div>
        <ul>
            <li v-for="(singleSong, index) in singleSongs" :key="index">
                <p>{{singleSong.artist.name}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {

    data(){
        return{
            singleSongs: []
        }
    },
    computed: {
        
    },

    mounted(){  
        axios
            .get(`https://yt-music-api.herokuapp.com/api/yt/songs/:${this.$route.params.id}`, {
                params: {
                    search: this.$route.params.id
                }
                
            })
            .then(res => {
              console.log(res.data.content)
              this.singleSongs = res.data.content;
            })
            .catch(err => {
                console.log(err)
            })
        
    }         
}
</script>