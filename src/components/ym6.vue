<template>
  <div class="ym6" @touchend="huadong">
    <div class="ym6-1" v-show="s == ''">
      <h3>请选择其中一个方面</h3>
      <div class="nav">
        <div class="tab" v-for="(v,x) in ars" :key="(v,x)" @click="act(v,x)">{{v}}</div>
      </div>
    </div>
    <div class="ym6-2" v-show="s == '交通'">
      <h1>交通方面</h1>
      <audio src="../../static/jt.mp3" controls class="animated zoomIn" v-show="a1" ref="audio" @play="playing()"></audio>
      <img src="../../static/img/y6/jt.jpg" alt class="animated zoomIn" v-show="a2" />
      <p class="animated zoomIn" v-show="a3">如今西藏的交通网络已经越来越四通八达，立体化交通运输网已基本形成，也为西藏的经济发展注入了新的活力</p>
      <div class="dj" @click="dj()" v-show="a4">点击继续</div>
      <div class="dj" v-show="a5">请滑动屏幕</div>
    </div>
    <div class="ym6-2" v-show="s == '教育'">
      <h1>教育方面</h1>
      <audio src="../../static/jy.mp3" controls class="animated zoomIn" v-show="a1" ref="audio2" @play="playing()"></audio>
      <img src="../../static/img/y6/jy.jpg" alt class="animated zoomIn" v-show="a2" />
      <p
        class="animated zoomIn"
        v-show="a3"
      >如今西藏的教育体制越来越完善，解决了以往读书难的问题，随着援藏教师队伍的扩大，为西藏师资力量注入新的生机提升了西藏整体的教育水平，培养了一批批优秀的人才。</p>
      <div class="dj" @click="dj()" v-show="a4">点击继续</div>
      <div class="dj" v-show="a5">请滑动屏幕</div>
    </div>
    <div class="ym6-2" v-show="s == '居住'">
      <h1>居住方面</h1>
      <audio src="../../static/jzhj.mp3" controls class="animated zoomIn" v-show="a1" ref="audio3" @play="playing()"></audio>
      <img src="../../static/img/y6/jzhj.jpg" alt class="animated zoomIn" v-show="a2" />
      <p
        v-show="a3"
        class="animated zoomIn"
      >如今的西藏人民的居住环境已有了翻天覆地的变化，从土房变青砖绿瓦，从忍冻挨饿到吃穿不愁，西藏人民的生活幸福指数也逐步提高。</p>
      <div class="dj" @click="dj()" v-show="a4">点击继续</div>
      <div class="dj" v-show="a5">请滑动屏幕</div>
    </div>
    <div class="ym6-2" v-show="s == '治安'">
      <h1>治安方面</h1>
      <audio src="../../static/za.mp3" controls class="animated zoomIn" v-show="a1" ref="audio4" @play="playing()"></audio>
      <img src="../../static/img/y6/za.jpg" alt class="animated zoomIn" v-show="a2" />
      <p
        v-show="a3"
        class="animated zoomIn"
      >近年来，西藏的治安管理大大提升了西藏人民的安全感，建立大量警务站，切实为人民解决问题，警民关系也进一步改善，真正做到了警民一家亲。</p>
      <div class="dj" @click="dj()" v-show="a4">点击继续</div>
      <div class="dj" v-show="a5">请滑动屏幕</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: ["治安", "交通", "教育", "居住"],
      ars:[],
      s: "",
      n: "",
      a: 0,
      a1: false,
      a2: false,
      a3: false,
      a4: false,
      a5: false
    };
  },
  methods: {
    playing(){
      this.$emit('puse')
    },
    act(v, x) {
      this.s = v;
      this.n = x;
      this.t();
    },
    t() {
      var b = setInterval(() => {
        this.a += 1;
        if (this.a == 1) {
          this.a1 = true;
        }
        if (this.a == 2) {
          this.a2 = true;
        }
        if (this.a == 3) {
          this.a3 = true;
        }
        if (this.a >= 3) {
          clearInterval(b);
          this.a4 = true;
        }
      }, 1000);
    },
    dj() {
        this.$emit('ply')
        this.$refs.audio.pause()
        this.$refs.audio2.pause()
        this.$refs.audio3.pause()
        this.$refs.audio4.pause()
        if(this.n+1 < this.ars.length){
            this.s = this.ars[this.n + 1];
        }else{
            this.s = this.ars[this.n - 1];
        }
        this.a1 = false;
        this.a2 = false;
        this.a3 = false;
        this.a4 = false;
        setTimeout(() => {
            this.a1 = true;
        }, 1000);
        setTimeout(() => {
            this.a2 = true;
        }, 2000);
        setTimeout(() => {
            this.a3 = true;
            this.a5 = true;
        }, 3000);

        this.nav.splice(this.nav.findIndex(item => item === this.ars[this.n]), 1);
    },
    huadong() {
      if (this.a5) {
        this.$emit('ply')
        this.nav.splice(this.nav.findIndex(item => item === this.ars[this.n+1]), 1);
        if (this.nav.length > 0) {
          this.$router.push({
            name: "ym5",
            query: {
              arr: this.nav
            }
          });
        }else{
            this.$router.push({
            name: "ym7",
          });
        }
      }
    }
  },
  mounted() {
    let b = Math.floor(Math.random()*3);
    if (this.$route.query.ar.length>0) {
      this.nav = this.$route.query.ar
      this.ars = this.$route.query.ar;
    }else{
        this.ars.push(this.nav[b],this.nav[b+1])
    }
  }
};
</script>

<style scoped>
.ym6 > div {
  font-family: KaiTi;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background-size: cover;
  padding-top: 10%;
}
.ym6-1 {
  background: url("../../static/img/y6/1.png") no-repeat;
}
.ym6-1 h3 {
  font-size: 0.56rem;
  text-align: center;

}
.nav {
  text-align: center;
  padding-top: 1rem;
}
.tab {
  font-size: 0.48rem;
  line-height: 1.6rem;
  border-bottom: 1px solid #ccc;
    font-weight: bold;
}
.ym6-2 {
  background: url("../../static/img/y6/1.png") no-repeat;
  text-align: center;
}
.ym6-2 h1 {
  font-size: 0.6rem;
  margin: 0.6rem 0 1rem;
}
.ym6-2 img {
  margin-top: 0.4rem;
  width: 64%;
  border: 2px solid #fff;
}
.ym6-2 p {
  font-size: 0.36rem;
  text-align: left;
  padding: 0 1rem;
  text-indent: 2em;
  line-height: 0.6rem;
}
.dj {
  font-size: 0.36rem;
  color: #333;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
}
</style>