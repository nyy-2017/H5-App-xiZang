<template>
<div>
  <div class="bg" v-show="!isClick" @click="next">
    <div class="modal"> 
      <span class="contain" v-show="arr==1">交通方面已看完</span>
      <span class="contain" v-show="arr==2">教育方面已看完</span>
      <span class="contain" v-show="arr==3">居住方面已看完</span>
      <span class="contain" v-show="arr==4">治安方面已看完</span>
    </div>
  </div>
  <div class="ym10" v-show="isClick">
    <div class="btn">
      <div class="btn1 animated fadeIn" @click="fx"></div>
      <div class="btn2 animated fadeIn" @click="tiaozhuan()"></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      arr: "",
      isClick:false
    }
  },
  created() {
    if (this.$route.query.arr) {
      this.arr = this.$route.query.arr
    }
  },
  methods: {
    fx() {
      if (this.arr < 4) {
        this.$router.push({
          name: "ym5",
          query: {
            arr: this.arr
          }
        });
      }
      if (this.arr == 4) {
        alert("已全部观看完毕,请点击结束")
      }
    },
    next(){
      this.isClick = true
    },
    tiaozhuan() {
      this.$router.push({
        name: "ym7",
      });
    }
  }
}
</script>

<style scoped>
.bg{
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("../../static/img/y12/man.png"),url("../../static/img/y12/bg.png") no-repeat;
  background-size: cover;
}
.modal{
  background: url("../../static/img/y12/modal.png") no-repeat;
  background-size: 8rem 5rem;
  position: absolute;
  top: 0;
  left: 2rem;
  right: 0;
  bottom: 0;
}
.contain{
  font-size: 22px;
    position: absolute;
    top: 2rem;
    right: 0.3rem;
}
.ym10 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("../../static/img/y12/1.png") no-repeat;
  overflow: hidden;
  background-size: cover;
}

.btn {
  display: flex;
  justify-content: space-between;
  /* flex-direction:column; */
  /* width: 60%; */
  margin: 140% auto
}

.btn>div {
  font-size: .36rem;
  color: #fff;
  /* background-color: red; */
  border-radius: 1rem;
  width: 2rem;
  height: .84rem;
  text-align: center;
  line-height: .84rem;
  margin: 10%;
}
</style>
