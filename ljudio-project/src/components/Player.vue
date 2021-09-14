<template>
  <div>
    <div class="form">
      <div class="form2">
          <input type="text" placeholder="Search.." v-model="keyword">
          <button @click.prevent="checkName">Search</button>
      </div>
        <ul>
            <li v-for="song in songs" :key="song.name">
                <div> 
                  <p><span><i class="fas fa-record-vinyl"></i>Album:</span> {{song.album.name}}</p> <br/>
                  <p><span><i class="fas fa-user"></i>Artist:</span> {{song.artist.name}}</p>  <br/>
                  <p><span><i class="fab fa-itunes-note"></i>Song:</span> {{song.name}}</p>
                  <p><span><i class="fas fa-link"></i>Link:</span> https://www.youtube.com/watch?v={{song.videoId}}</p> 
                </div>
                <div class="buttons">
                  <button @click="play(song.videoId)"><i class="fas fa-play"></i></button>
                  <button @click="pause"><i class="fas fa-pause"></i></button>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import jquery from 'jquery';
window.$ = jquery;

export default {
  components:{
    axios,
  },
  data(){
        return{
            keyword: "",
            songs: [],
            playlist: [],
        }
    },
    
  methods:{
    play(id){
      // calling global variable
      window.player.loadVideoById(id)
      window.player.playVideo()
    },
    pause(){
      window.player.pauseVideo()
    },
    next(){
      //window.player.loadPlaylist(playlist)
      window.player.nextVideo();
      
    },
    
    checkName(){
            axios
            .get(`https://yt-music-api.herokuapp.com/api/yt/songs/:${this.keyword}`, {
              params: {
                search: this.keyword
              }
            })
            .then(res => {
              console.log(res.data.content)
              this.songs = res.data.content;
              for(const val of this.songs){
                this.playlist = val.videoId;
                console.log(this.playlist);
              }
                // this.songs.filter(item => {
                //   return this.keyword
                //   .toLowerCase()
                //   .split(" ")
                //   .every(v => item.name.toLowerCase().includes(v))
                // })
            })
            .catch(err => {
                console.log(err)
            })
        }
  },
  mounted(){
           axios
           .get(`https://yt-music-api.herokuapp.com/api/yt/artists/search+string`)
           .then(res => {
             console.log(res.data)
           })
  }
}
</script>

<style scoped>

.form{
  background-color: rgb(187, 166, 138, 0.5);
  min-height:40vh;
  width:50%;
  margin: auto;
  margin-top: 15vh;
  padding-bottom: 2vw;
  padding-top: 2vw;
  padding-right: 40px;
  padding-left: 40px;

}

li{
  list-style: none;
  border: 1px solid black;
  
}

li.menu-item:not(:last-child){ 
   margin-bottom: 0 0 10px 0;  
}

ul{
  padding:0;
  padding-top: 10px;
}
input{
  display:block;
  margin: 0 auto;
  width: 60%;
  text-align: center;
}

button{
  display:block;
  margin: 0 auto;
  width: 60%;
  background-color: rgb(158, 146, 130);
  color:white;
  border: 1px solid black;
  border-radius: 5px ;
  
}
button:hover{
  background-color: rgb(70, 76, 77);
}

div>span{
  font-weight: bold;
}
div>p>span{
  font-weight: bold;
}

.buttons{
  display:flex;
  flex-direction: column;
  margin-bottom: 1vw;;
}

</style>