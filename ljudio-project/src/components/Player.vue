<template>
  <div>
    <div class="form">
      <div class="form2">
          <input type="text" placeholder="Search.." v-model="keyword">
          <button @click.prevent="checkName"><i class="fas fa-search"></i></button>
          <p>Search songs and artists</p>
      </div>
        <ul>
            <li v-for="(song, index) in songs" :key="index">
                <div> 
                  <p><span><i class="fas fa-record-vinyl"></i>Album:</span> {{song.album.name}}</p> 
                  <p><span><i class="fas fa-user"></i>Artist:</span> {{song.artist.name}}</p> 
                  <img :src="song.thumbnails[1].url"> 
                  <p><span><i class="fab fa-itunes-note"></i>Song:</span> {{song.name}}</p>
                  <p><span><i class="fas fa-link"></i>Link:</span>  https://www.youtube.com/watch?v={{song.videoId}}</p> 
                </div>
                <div class="buttons">
                  <button @click="play(song.videoId)"><i class="fas fa-play"></i></button>
                  <button @click="pause"><i class="fas fa-pause"></i></button>
                  <button @click="next">Next</button>
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
import {debounce} from 'lodash';

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
      let total = window.player.getCurrentTime();
      console.log(total);
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
              // for(const val of this.songs){
              //   this.playlist = val.videoId;
              //   console.log(this.playlist);
              // }
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
  },

  watch:{
    keyword(){
      if (!this.keyword) return;
      this.debounceName();
    }

    
  },
  created(){
    this.debounceName = debounce(this.checkName, 500)
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
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}

.form2{
  text-align: center;
}

li{
  list-style: none;
  border: 1px solid black;
  padding:2vw;
  margin-bottom: 2vw;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
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
  font-family: 'Courier New', Courier, monospace;
}

button{
  display:block;
  margin: 0 auto;
  width: 60%;
  background-color: rgb(158, 146, 130);
  color:white;
  border: 1px solid black;
  border-radius: 5px ;
  font-family: 'Courier New', Courier, monospace;
  
}
button:hover{
  background-color: rgb(70, 76, 77);
}

div>span{
  font-weight: bold;
  
}

div>p{
  font-family: 'Courier New', Courier, monospace;
}
div>p>span{
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  font-size: 120%;
}

.buttons{
  display:flex;
  flex-direction: column;
  margin-bottom: 1vw;
  margin-left: 6vw;
}


img{
  float:right;
  display:block;
  position: relative;
  top: -4vw;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

@media screen and (max-width:500px) and (min-width: 400px){
  .form{
    min-width: 100%;
  }

  button{
    border-radius: 50%;
    margin-bottom: 2vw;
  }
}

@media screen and (max-width: 1000px) and (min-width: 700px) {
  .form{
    min-width: 100%;
  }

  .buttons{
    margin-left: 10vw;
  }
}
</style>