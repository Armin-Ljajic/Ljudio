<template>
    <div>
        <Header/>
        <Player/>
        
    </div>
</template>
<script>

import Footer from './Footer.vue'
import Header from './Header.vue'
import Player from './Player.vue'
import axios from 'axios';

export default {
    components: {
        Header,
        Footer,
        Player,
        axios
        
    },
    
    methods:{
        async fetchList(){
           let result = await fetch('https://yt-music-api.herokuapp.com/api/yt/songs/search+string')
           let data = await result.json();
            console.log(data)

        },
        
    }
    
}

</script>

<style scoped>

    
</style>