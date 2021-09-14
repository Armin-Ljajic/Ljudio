<template>
    <body>
        <Header/>
        <div class="artists">
            <section>
                <input type="text" placeholder="Search artists.." v-model="keyword">
                <button @click.prevent="checkName">Search</button>
                <p class="searchParam">Search artists to see the artist name and whom the artist features</p>
                <ul>
                    <li v-for="artist in artists" :key="artist.name">
                        <p><i class="fas fa-user"></i>{{artist.name}}</p>
                    </li>
                </ul>
            </section>
        </div>
        <Footer/>
    </body>
</template>

<script>

import Header from './Header.vue'
import Footer from './Footer.vue'
import axios from 'axios'

export default {
    components:{
        Header,
        Footer
    },

    data(){
        return{
            keyword: "",
            artists: []
        }
    },

    methods:{
    checkName(){
            axios
            .get(`https://yt-music-api.herokuapp.com/api/yt/artists/:${this.keyword}`, {
              params: {
                search: this.keyword
              }
            })
            .then(res => {
              console.log(res.data.content)
              this.artists = res.data.content;
            })
            .catch(err => {
                console.log(err)
            })
        }
    }

}
</script>

<style scoped>
.artists{
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

section{
    text-align: center;
}

li{
    list-style: none;
    border:1px solid black;
    padding:2vw;
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

p{
    font-family: 'Courier New', Courier, monospace;
}



</style>