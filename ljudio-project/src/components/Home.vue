<template>
    <div>
        <Header/>
        <h1>Hello</h1>
        <h2>Hello</h2>
        <!-- <Footer/> -->
        <button @click="loadList">Click me</button>
    </div>
</template>
<script>
import Footer from './Footer.vue'
import Header from './Header.vue'

export default {
    components: {
        Header,
        Footer,
    },
    methods:{
        loadList(){
            this.$store.dispatch('fetchList');
        }
    }
}


</script>

<style scoped>

    
</style>