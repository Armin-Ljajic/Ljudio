<template>
    <body>
        <Header/>
        <div class="albums">
            <section>
                <input type="text" placeholder="Search albums.." v-model="keyword">
                <button @click.prevent="checkName">Search</button>
                <p class="searchParam">Search albums to see both singles and albums of specified artist</p>
                <ul>
                    <li v-for="album in albums" :key="album.name">
                        <p>{{album.name}}</p>
                        <p><i class="fas fa-record-vinyl"></i>{{album.type}}</p>
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
i{
    font-size: 200%;
}
p{
    font-family: 'Courier New', Courier, monospace;
    font-size: 150%;
}
.searchParam{
    font-size: 100%;
}
</style>