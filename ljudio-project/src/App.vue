 <template>
 <body>
    <Player/>
    <router-view/>
 </body>
</template>

<script>
import Player from './components/Player.vue'
export default {
  components: {
    Player
  }
}
</script>

<style>
  body{
    background-image: url(https://wallpaperaccess.com/full/2142842.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    
  }
</style>