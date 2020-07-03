<template>
    <div class="ym4">
        <div class="jr animated fadeIn" v-show="jr">
            <div class="dh1 animated fadeIn" v-show="s == 1">
                <div>
                    欢迎您<br>
                    我们是您的<br>
                    藏族旅游向导<br>
                </div>
            </div>
            <div class="dh2 animated fadeIn" v-show="s ==2">
                <div>
                    我叫永旦江措
                </div>
            </div>
            <div class="dh3 animated fadeIn" v-show="s==3">
                <div>
                    我叫曲珍
                </div>  
            </div>
            <div class="dh4 animated fadeIn" v-show="s==4">
                <div>
                    我叫索朗卓嘎
                </div>  
            </div>
            <div class="dh5 animated fadeIn" v-show="s==5">
                <div>
                    我叫晋美
                </div>  
            </div>
            <div class="dh6 animated fadeIn" v-show="s==6">
                <div>
                    我们四个将从不同<br>
                    方面带您云游西藏<br>
                </div>
            </div>
            <div class="dh7 animated fadeIn" v-show="s==7">
                <div>
                    我们来玩抓阄小游<br>
                    戏决定介绍顺序<br>
                </div>
            </div>
            <div class="dh8 animated fadeIn" v-show="s==8">
                <div>请点击按钮开始游戏</div>
            </div>
            <div class="btn animated fadeIn" v-show="s==8" @click="tiaozhuan()">开始游戏</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            s:0,
            jr:false,
        }
    },
    methods:{
        tiaozhuan(){
            this.$router.push({
                name:'ym5'
            })
        },
        h(){
            
        }
    },
    mounted(){
        setTimeout(()=>{
            this.jr = true
        },1000)
        setTimeout(()=>{
            let i = setInterval(()=>{
              this.s+=1
            if(this.s > 7 ){
                clearInterval(i)
            }
          },2000)
        },1500)
    }
}
</script>

<style scoped>
.ym4{
    font-family: KaiTi;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-image: url('../../static/img/y4/bg.png');
    background-size: cover;
    overflow: hidden;
}
.jr{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-image: url('../../static/img/y4/jr.png');
    background-size: cover;
}
.dh1{
    width: 4rem;
    height: 4rem;
    background-image: url('../../static/img/y4/1.png');
    background-size: cover;
    position: absolute;
    left: 50%;
    font-size: .40rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
}
.dh1 div{
    transform: translateY(-16%)
}
.dh2{
    width: 4rem;
    height: 4rem;
    background-image: url('../../static/img/y4/1.png');
    background-size: cover;
    position: absolute;
    left: 50%;
    font-size: .40rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
}
.dh3{
    width: 3.8rem;
    height: 2.25rem;
    background-image: url('../../static/img/y4/2.png');
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    left: -10%;
    top: 23%;
    font-size: .40rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
}
.dh3>div{
    transform: translateY(-18%)
}
.dh4{
    width: 3rem;
    height: 1.5rem;
    background-image: url('../../static/img/y4/3.png');
    background-size: cover;
    position: absolute;
    left: 50%;
    top: 26%;
    transform: translateX(-60%);
    font-size: .40rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
}
.dh4>div{
    transform: translateY(55%)
}
.dh5{
    width: 3.8rem;
    height: 2.25rem;
    background-image: url('../../static/img/y4/2.png');
    background-size: cover;
    position: absolute;
    right: 0;
    top: 20%;
    font-size: .40rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
}
.dh5>div{
    transform: translateY(-18%)
}
.dh6{
    width: 6rem;
    height: 3rem;
    background-image: url('../../static/img/y4/6.png');
    background-size: cover;
    position: absolute;
    left: 33%;
    top: 18%;
    font-size: .40rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
}
.dh7{
    width: 6rem;
    height: 3rem;
    background-image: url('../../static/img/y4/6.png');
    background-size: cover;
    position: absolute;
    left: 0;
    top: 18%;
    font-size: .40rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
}
.dh8{
    width: 3.8rem;
    height: 2.25rem;
    background-image: url('../../static/img/y4/c.png');
    background-size: cover;
    position: absolute;
    right: 0;
    top: 17%;
    font-size: .40rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
}
.dh8>div{
    transform: translateY(32%)
}
.btn{
    font-size: .48rem;
    background-color: red;
    width: 2.4rem;
    height: .87rem;
    line-height: .87rem;
    border-radius: 1rem;
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
}
</style>