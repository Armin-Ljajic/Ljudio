<template>
    <body>
        <div class="container">
            <div class="footer">
                <div class="icons">
                    <i class="fab fa-twitter-square"></i>
                    <i class="fab fa-facebook-square"></i>
                    <i class="fab fa-youtube-square"></i>
                    <i class="fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.container{
        margin: 0 0 100px;
}
.footer{
    background-color: rgba(108, 109, 114, 0.9);
    bottom: 0;
    left:0;
    width: 100%;
    min-height:100px;
    position:fixed;
}
.icons>i{
    font-size: 350%;
    margin-right: 2vw;
    position: relative;
    left:3vw;
    top:1vw;
}
</style>