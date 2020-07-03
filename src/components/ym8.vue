<template>
    <div class="ym8">
        <div class="ym8-1">
            <div class="dhk animated fadeIn" v-show="dhk" >
                <div v-show="s == 1" class=" animated fadeIn">你本次的西藏云旅游<br>就到此结束了</div>
                <div v-show="s == 2" class="jj animated fadeIn">感谢您的参与</div>
                <div v-show="s == 3" class=" animated fadeIn">希望您能对我们<br>本次的服务进行评价</div>
            </div> 
        </div>
        <div class="ym8-3" v-show="s == 3">
            <div class="pj animated fadeIn">
                <ul>
                    <li v-for="v in 5" :key="v" @click="pj(v)" :class="a >= v ?'on':'off'"></li>
                </ul>
                <textarea name="" id="" cols="30" rows="10" placeholder="我还有话要说..."></textarea>
                <div class="btn" @click="tiaozhuan()">提交</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            s:1,
            a:0,
            s1:true,
            s2:false,
            s3:false,
            dhk:false
        }
    },
    methods:{
        pj(v){
            this.a = v
        },
        tiaozhuan(){
            this.$router.push({
                name:'ym9'
            })
        }
    },
    mounted(){
        setTimeout(()=>{
            this.dhk = true
            var i = setInterval(()=>{
                this.s += 1 ;
                if(this.s > 2){
                    clearInterval(i)
                }
            },2000)
        },1000)
    }
}
</script>

<style scoped>
.ym8{
    font-family: KaiTi;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background-size: cover;
  background-image: url("../../static/img/y10/man.png"),url("../../static/img/y10/bg.png");
  background-repeat: no-repeat;
}
.ym8-1{
      position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.dhk{
    width: 4rem;
    height: 4rem;
    background-image: url('../../static/img/y10/dhk.png');
    background-size: cover;
    font-size: .36rem;
    font-weight: bold;
    position: absolute;
    right: 0;
    top: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.dhk>div{
    transform: translateY(-30%)
}
.pj{
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 3.2rem;
    background-color: rgba(255,255,255,.8);
    text-align: center;
    padding: .3rem;
    border-radius: .2rem;
    z-index: 100;
}
ul{
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 0 .6rem;
}
ul li{
    width: .6rem;
    height: .6rem;
    background-size: cover;
}
.on{
    background-image: url('../../static/img/y10/on.png');
}
.off{
    background-image: url('../../static/img/y10/off.png');
}
textarea{
    margin-top: .3rem;
    outline: none;
    border: .08rem solid #333;
    height: 1.5rem;
    border-radius: .2rem;
    padding: .2rem;
    box-sizing: border-box;
}
.btn{
    font-size: .36rem;
    border: .04rem solid #333;
    width: 1rem;
    margin: 0 auto;
     border-radius: .12rem;
}
</style>