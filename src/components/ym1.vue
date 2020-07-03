<template>
    <div class="ym1">
        <div class="ym1">
            <div class="time">{{hour}}:{{min}}</div>
            <div class="news animated zoomIn" @click="tiaozhuan()" v-if="show == true">
                <img src="../../static/img/news.png" alt="">
            </div>
        </div>
        <audio src="../../static/dd.mp3" preload="auto" ref="audio"></audio>
    </div>
</template>
<script>
export default {
    data(){
        return{
            hour:'',
            min:'',
            show:'',
        }
    },
    methods:{
        getTime(){
            let date = new Date()
            if(date.getHours() < 10){
                this.hour = '0'+date.getHours()
            }else{
                this.hour = date.getHours()
            }
            if(date.getMinutes() < 10){
                this.min = '0'+date.getMinutes()
            }else{
                this.min = date.getMinutes()
            }
        },
        tiaozhuan(){
            this.$router.push({
                name:'ym2'
            })
        }
    },
    mounted(){
        this.getTime()
        setInterval(()=>{
            this.getTime()
        },1000)
        setTimeout(()=>{
            this.show = true
            this.$refs.audio.play()
        },1000)
    }
}
</script>

<style scoped>
.ym1{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: url('../../static/img/bg.jpg') no-repeat;
    background-size: cover;
    overflow: hidden;
    margin: 0 auto;
}
.time{
    color: #fff;
    font-size: 1.2rem;
    text-align: center;
    margin: 1.8rem 0 1rem;
}
.news{
    text-align: center;  
    overflow: hidden;
}
.news img{
    width: 94%;
    height: auto;
}
</style>