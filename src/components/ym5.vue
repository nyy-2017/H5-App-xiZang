<template>
    <div class="ym5">
        <div class="ym5-1" v-show="s ==1">
          <div id="hz" class="animated fadeIn"  :class="h ? 'hz-1': 'hz-2'" v-show="hs">
            <div class="yao animated fadeIn" v-show="ys">
              <div>请摇一摇</div>
            </div>
          </div>
        </div>
        <div id="ym52" v-show="s ==2" :class="h ? 'ym5-2': 'ym5-3'">
            <h1>请点击任意纸团</h1>
            <div class="shou"></div>
            <div class="zt zt1" @click="tiaozhuan()"></div>
            <div class="zt zt2" @click="tiaozhuan()"></div>
        </div>
    </div>
</template>

<script>
import Shake from 'shake.js'
export default {
    data(){
        return{
          s:1,
          h:true,
          ar:[],
          hs:false,
          ys:false
        }
    },
    created(){
      if(this.$route.query.arr){
        this.h = false
        this.ar = this.$route.query.arr
      }
    },
    mounted () {
    // 实例化一个 shake 对象
    let myShakeEvent = new Shake({
      threshold: 20, // 默认摇动阈值
      timeout: 1200 // 默认两次事件间隔时间
    })
    // 监听设备的动作
    myShakeEvent.start()
    // 添加一个事件监听
    window.addEventListener('shake', this.shakeEventDidOccur, false)
    setTimeout(()=>{
      this.hs = true
    },1000)
    setTimeout(()=>{
      this.ys = true
    },2000)
  },
  methods:{
    shakeEventDidOccur(){
      this.s = 2
    },
    tiaozhuan(){
      this.$router.push({
        name:'ym6',
        query:{
          ar:this.ar
        }
      })
    }
  }
}
</script>

<style scoped>
.ym5{
  font-family: KaiTi;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    background-size: cover;
    background: url('../../static/img/y5/bg.png') no-repeat;
}
#hz{
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-size: cover;
}
.hz-1{
  background-image: url('../../static/img/y5/for.png');
}
.hz-2{
  background-image: url('../../static/img/y5/two.png');
}
.yao{
  position: absolute;
  top: 10%;
  right: 0;
  width: 100%;
  height: 36%;
  background-image: url('../../static/img/y5/yao.png');
  background-size: cover;
  font-size: .32rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.yao>div{
  transform: rotate(8deg);
  font-weight: bold;
}
#ym52{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    background-size: cover;
    background-repeat: no-repeat;
}
#ym52 h1{
  font-size: .48rem;
  margin-top: 20%;
}
.shou{
   margin: 0 auto;
   width:2rem ;
   height: 2rem;
   background-image: url('../../static/img/y5/shou.png');
   background-size: cover;
   transform: rotate(180deg);
   margin-bottom: .3rem;
}
.ym5-2{
    background-image: url('../../static/img/y5/two.png');
}
.ym5-3{
    background-image: url('../../static/img/y5/none.png');
}
.zt{
  width: 1rem;
  height: 1rem;
  background-image: url('../../static/img/y5/zt.png');
  background-size: cover;
  margin: 0 auto;
}
.zt1{
  transform: translateX(-1rem)
}
.zt2{
  transform: translateX(1rem)
}
</style>