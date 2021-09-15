<template>
    <body>
        <Header/>
        <div class="albums">
            <section>
                <input type="text" placeholder="Search albums.." v-model="keyword">
                <button @click.prevent="checkName">Search</button>
                <p class="searchParam">Search artists to see their albums and singles</p>
                <ul>
                    <li v-for="album in albums" :key="album.name">
                        <p><i class="fas fa-record-vinyl"></i>{{album.name}}</p>
                        <p><img :src="album.thumbnails[1].url"> {{album.type}}</p>
                    </li>
                </ul>
            </section>
        </div>
        <Footer/>
    </body>
</template>


<script>

import Header from './Header.vue';
import Footer from './Footer.vue';
import axios from 'axios';

export default {
    components:{
        Header,
        Footer
    },
    data(){
        return{
            keyword: "",
            albums: []
        }
    },

    methods:{

    checkName(){
            axios
            .get(`https://yt-music-api.herokuapp.com/api/yt/albums/:${this.keyword}`, {
              params: {
                search: this.keyword
              }
            })
            .then(res => {
              console.log(res.data.content)
              this.albums = res.data.content;
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
}
</script>

<style scoped>
.albums{
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
}

section{
    text-align: center;
}

li{
    list-style: none;
    border:1px solid black;
    padding:2vw;
    margin-bottom: 2vw;
}
ul{
    padding:0;
    padding-top: 2vw;
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
i{
    font-size: 100%;
}
p{
    font-family: 'Courier New', Courier, monospace;
    font-size: 150%;
}
.searchParam{
    font-size: 100%;
}

@media screen and (max-width:500px) and (min-width: 400px){
  .albums{
    min-width: 100%;
  }
  
}

@media screen and (max-width: 1000px) and (min-width: 700px) {
  .albums{
    min-width: 100%;
  }
  
}
</style>