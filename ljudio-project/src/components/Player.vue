<template>
  <div>
    <div class="form">
      <div class="form2">
          <input type="text" placeholder="Search artist" v-model="keyword">
          <button @click.prevent="checkName">Search</button>
      </div>
        <ul>
            <li v-for="song in songs" :key="song.name">
                <p> <span>Album:</span> {{song.album.name}} 
                <span>Artist:</span> {{song.artist.name}} 
                <span>Song:</span> {{song.name}}
                </p>
                <p> <span>Video ID:</span>{{ song.videoId }}</p>
            </li>
        </ul>
        <!-- <div>
          <button @click="play('71xik3vIsFE')">The Black Page #1 on piano</button>
          <button @click="play('CtkZxnkbjtI')">The Black Page #2 live band</button>
          <button @click="pause()">Pause</button>
        </div> -->
      
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  components:{
    axios,
  },
  data(){
        return{
            keyword: "",
            songs: [],
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
                this.songs.filter(item => {
                  return this.keyword
                  .toLowerCase()
                  .split(" ")
                  .every(v => item.name.toLowerCase().includes(v))
                })
            })
        }
  },
  mounted(){
            // axios
            // .get("https://yt-music-api.herokuapp.com/api/yt/songs/search+string", {
            //     params: {
            //         search: this.keyword
            //     }
            // })
            // .then(res => {
            //     console.log(res.data.content)
            //     this.songs = res.data.content;
                
            // })
            // .catch(err => {
            //     console.log(err)
            // })
  }
}
</script>

<style scoped>

.form{
  background-color: rgb(187, 166, 138, 0.7);
  min-height:40vh;
  width:50%;
  margin: auto;
  margin-top: 15vh;
  padding-bottom: 2vw;
  padding-top: 2vw;

}

li{
  list-style: none;
  padding-right: 40px;
  border: 1px solid black;
}


input{
  display:block;
  margin: 0 auto;
  width: 60%;
}

button{
  display:block;
  margin: 0 auto;
  width: 40%;
  background-color: burlywood;
}

p>span{
  font-weight: bold;
}


</style>