<template>
    <body>
        <Header/>
        <div class="form">
            <ul class="singleArtistUL">
                <li v-for="(singleArtist, index) in singleArtists" :key="index">
                    <h2><i class="fas fa-user"></i> {{singleArtist.name}}</h2>
                    <img :src="singleArtist.thumbnails[1].url">
                </li>
            </ul>
        </div>
        <Footer/>
    </body>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {

        components: {
            Header,
            Footer
        },
        data(){
            return{
                singleSongs: [],
                singleArtists: [],
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sapien odio, sodales sed volutpat sodales, aliquet vel risus. Sed tempus tempus metus. Integer feugiat aliquam nisl, et ultrices diam ornare sed. Nullam quis magna vitae ex euismod laoreet non id lacus. Fusce eget arcu sed felis congue molestie. Vivamus et ante lectus. "
            }
        },
        methods: {
            play(id, index){
        // calling global variable
        window.player.loadVideoById(id)
        this.currentPlaylistIndex = index
        window.player.playVideo()
        },
        pause(){
        window.player.pauseVideo()
        
        }

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

        axios
            .get(`https://yt-music-api.herokuapp.com/api/yt/artists/:${this.$route.params.id}`, {
                params: {
                    search: this.$route.params.id
                }
                
            })
            .then(res => {
              console.log(res.data.content)
              this.singleArtists = res.data.content;
            })
            .catch(err => {
                console.log(err)
            })
    }         
}
</script>

<style scoped>
.form{
  background-color: rgb(187, 166, 138, 0.5);
  /* min-height:40vh; */
  min-width:30%;
  margin: auto;
  margin-top: 15vh;
  padding-bottom: 2vw;
  padding-top: 2vw;
  padding-right: 40px;
  padding-left: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.singleArtistUL{
    padding: 0;
}

.singleArtistUL>li{
    list-style: none;
    display: flex;
    flex-direction: row;
    padding:5vw;
}

.singleArtistUL>li>h2{
    margin-right: 2vw;
    margin-top: 3vw;
    font-family: 'Courier New', Courier, monospace;
}

button{
  display:flex;
  margin: 0 auto;
  width: 60%;
  background-color: rgb(158, 146, 130);
  color:white;
  border: 1px solid black;
  border-radius: 5px ;
  font-family: 'Courier New', Courier, monospace;
}

.buttons{
    width:50%;
    padding:1vw;
    display: flex;
    justify-content: center;
    align-items: center;
    
}

.buttons>button>i{
    display:block;
}
button:hover{
  background-color: rgb(70, 76, 77);
}

img{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>