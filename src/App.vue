<template>
  <div id="app">
    <router-view @puse='puse()' @ply='ply()'></router-view>
    <img src="../static/img/title.png" class="logo">
    <div class="mus" @click="p()" :class="a == false ? 'pause' : 'play'"></div>
    <audio src="../static/bjmusic.mp3" autoplay loop preload="auto" ref="audio"></audio>
  </div>
</template>
<script>
export default {
  name: "App",
  data(){
    return{
      a:true,
    }
  },
  methods:{
    p(){
      if(this.a == false){
        this.$refs.audio.play()
        this.a = true
      }else{
        this.$refs.audio.pause()
        this.a = false
      }
    },
    puse(){
      this.$refs.audio.pause()
      this.a = false
    },
    ply(){
      this.$refs.audio.play()
      this.a = true
    },
  }
};
</script>
<style>
@media only screen and (max-width: 374px) {
  html {
    font-size: 42.6667px;
  }
}

@media only screen and (min-width: 375px) and (max-width: 413px) {
  html {
    font-size: 50px;
  }
}

@media only screen and (min-width: 414px) and (max-width: 767px) {
  html {
    font-size: 55.2px;
  }
}

@media only screen and (min-width: 768px) {
  html {
    font-size: 100px;
  }
}
html,body{
  margin: 0;
  padding: 0;
  height: 100%;
}
#app{
  max-width: 640px;
  height: 100%;
  position: relative;
  text-align: center;
  margin: 0 auto;
}
.logo{
  position: fixed;
  bottom: -0.8rem;
  right: -0.5rem;
  z-index: 100;
  font-size: .24rem;
  width: 2.5rem;
  height: 2rem;
}
.mus{
  position: fixed;
  top: .1rem;
  right: .1rem;
  width: .6rem;
  height: .6rem;
  z-index: 100;
  background-size: cover;
}
.play{
  background-image: url('../static/img/play.png');
}
.pause{
  background-image: url('../static/img/pause.png');
}
</style>
