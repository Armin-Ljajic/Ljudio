<template>
    <section class="nav">
        <nav>
            <h1>LJUDIO</h1>
             <router-link to="/">Home</router-link>
             <router-link to="/playlist">Playlist</router-link>
             <router-link to="/more">More</router-link>
        </nav>
    </section>
</template>
<script>
export default {
    
}
</script>

<style scoped>
.nav{
    background-color: rgba(108, 109, 114, 0.9);
    border:1px solid black;
    height: 10vh;
    text-align: center;
}
a{
    color:White;
    text-decoration: none;
    font-size:130%;
    padding:2vw;
}

h1{
    color:White;
    font-size:150%;
}
</style>