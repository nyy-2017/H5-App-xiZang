<template>
    <div class="ym3">
        <div class="ym3-1">
            <div class="dhk animated fadeIn" v-show="dhk">
                <div v-show="s == 1">
                    欢迎来到<br>
                    西藏云旅社
                </div>
                <div class="animated fadeIn" v-show="s == 2 ">
                    我们是专业针对<br>
                    西藏云旅游的团队
                </div>
                <div class="animated fadeIn" v-show="s == 3">
                    请先欣赏一下<br>
                    我们的宣传片
                </div>
            </div>
        </div>
        <div class="ym3-4" v-show="s == 4" @click="ply()">
            <video src="../assets/sp.mp4" controls ref="video"></video>
        </div>
        <div class="ym3-5" v-show="s == 5">
            <div class="dhk">
                <div  class="animated fadeIn">
                    请输入“我要<br>报名”
                    为您分配<br>藏族家庭导游
                </div>
            </div>
            <div class="sr animated fadeIn">
                <input type="text" v-model="t">
                <div class="send" @click="tiaozhuan()">发送</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            s:1,
            t:'',
            dhk:false
        }
    },
    methods:{
        tiaozhuan(){
            if(this.t == '我要报名'){
                this.$router.push({
                    name:'ym4'
                })
            }
        },
        ply(){
            this.$emit('ply')
            this.$refs.video.pause()
            this.s = 5
        }
    },
    mounted(){
        setTimeout(()=>{
          this.dhk = true
          let i = setInterval(()=>{
              this.s+=1
            if(this.s > 3 ){
                clearInterval(i)
            }
          },2000)
        },1000)
        let myVideo = this.$refs.video
        myVideo.addEventListener('play',()=>{
            this.$emit('puse')
        });
    }
}
</script>

<style scoped>
.ym3{
    font-family: KaiTi;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-image: url('../../static/img/y3/5.png');
    background-size: cover;
}
.dhk{
    width: 8rem;
    height: 4.6rem;
    background-image: url('../../static/img/y3/dhk.png');
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    right: -23%;
    top: 11%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .36rem;
    font-weight: bold;
}
.ym3-4{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    background-image: url('../../static/img/y3/5.png');
}
.ym3-4::after{
    content: '';
    position:absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255,255,255,.8);
}
.ym3-4 video{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 200;
    width: 100%;
}
.sr{
    position: absolute;
    bottom: 1.78rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
}
.sr>input{
    border: 2px solid #ccc;
    background: rgb(237, 237, 237);
    height: .7rem;
    width: 2.78rem;
    font-size: .32rem;
    outline: none;
    border-radius: .2rem;
}
.sr>.send{
    height: .7rem;
    width: 1.56rem;
    margin-left: .3rem;
    font-size: .36rem;
    background-color: red;
    border-radius: .1rem;
    text-align: center;
    line-height: .7rem;
    color: #ffffff;
    font-weight: bold;
}
</style>