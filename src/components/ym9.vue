<template>
    <div class="ym9">
      <div class="dhk animated fadeIn" v-show="s1">
        <img src="../../static/img/y11/2.png" alt="">
        <div>感谢您此次的参与</div>
      </div>
      <div class="btn">
        <div class="btn1 animated fadeIn" v-show="s2" @click="fx">分享</div>
        <div class="btn2 animated fadeIn" v-show="s3" @click="tiaozhuan()">退出</div>
      </div>

    </div>
</template>

<script>
export default {
    data(){
      return{
        s1:false,
        s2:false,
        s3:false,
      }
    },
    methods:{
      fx(){
        alert('已分享')
      },
      tiaozhuan(){  
          window.location.href="about:blank";
          window.close();
      }
    },
    mounted(){
      setTimeout(()=>{
        this.s1 = true
      },1500)
      setTimeout(()=>{
        this.s2 = true
      },3000)
      setTimeout(()=>{
        this.s3 = true
      },4500)
    }
}
</script>

<style scoped>
.ym9{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("../../static/img/y11/1.png") no-repeat;
  overflow: hidden;
  background-size: cover;
}
.dhk{
  margin: 2rem 0 0 2.6rem;
  font-size: .36rem;
  position: relative;
}
.dhk img{
  width: 70%;
}
.dhk div{
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-90%);
}
.btn{
  display: flex;
  /* justify-content: space-between; */
  flex-direction:column;
  /* width: 60%; */
  margin: 30% 0 0 65%
}
.btn>div{
  font-size: .36rem;
  color: #fff;
  background-color: red;
  border-radius: 1rem;
  width: 2rem;
  height: .84rem;
  text-align: center;
  line-height: .84rem;
  margin: 10%;
}
</style>