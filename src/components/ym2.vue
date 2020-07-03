<template>
    <div class="ym2" @click="h">
        <div class="dh1">
            <img src="../../static/img/y2/1.png" alt="" @click="tiaozhuan()">
        </div>
        <div class="dh2" v-show="show1">
            <img src="../../static/img/y2/2.png" alt="">
        </div>
        <div class="dh3" v-show="show2"> 
            <img src="../../static/img/y2/3.png" alt="">
        </div>
        <div class="dh4" v-show="show3">
            <img src="../../static/img/y2/4.png" alt="">
        </div>
        <div class="ts" v-if="s<3">点击继续</div>
        <div class="ts" v-if="s>=3">请点击上方链接</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            show1:false,
            show2:false,
            show3:false,
            s:0
        }
    },
    methods:{
        h(){
            this.s+=1
            if(this.s==1){
                this.show1 = true;
            }
            if(this.s==2){
                this.show2 = true;
            }
            if(this.s==3){
                this.show3 = true;
            }
        },
        tiaozhuan(){
            if(this.s>=3){
                this.$router.push({
                    name:'ym3'
                })
            }
        }
    }
}
</script>

<style scoped>
.ym2{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: url('../../static/img/y2/5.png') no-repeat;
    background-size: cover;
    overflow: hidden;
}
.ym2>div{
    padding: .2rem;
}
.ym2>.dh1{
    padding-top: 1.2rem;
}
.dh1,.dh3{
    float: left;
}
.dh1 img,.dh3 img{
    width: 90%;
    transform: translateX(-6%);
}
.dh2,.dh4{
    overflow: hidden;
}
.dh2 img,.dh4 img{
    width: 40%;
    float:right;
}
.ts{
    font-size: .28rem;
    color: #333;
    position: absolute;
    bottom: 1.2rem;
    left: 0;
    right: 0;
    text-align: center;
    animation: ts 2s linear infinite;
}
@keyframes ts {
    from{
        opacity: .3;
    }
    to{
        opacity: 1;
    }
}
.ts{
    font-size: .28rem;
}
</style>