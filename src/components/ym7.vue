<template>
    <div class="ym7">
        <div class="ym7-1" v-show="s">
            <div class="ts">拉动白色开关</div>
        </div>
        <div class="ym7-2" v-show="!s" @click="tiaozhuan()">
            <div class="ts">点击继续</div>
        </div>
        <div class="open" v-show="s" @touchmove="s=false"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            s:true
        }
    },
    methods:{
        tiaozhuan(){
            this.$router.push({
                name:'ym8'
            })
        }
    }
}
</script>

<style scoped>
    .ym7-1,.ym7-2{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    background-size: cover;
}
.ym7-1{
    background-image: url('../../static/img/y7/1.png');
}
.ym7-2{
    background-image: url('../../static/img/y7/2.png');
}
.open{
    position: absolute;
    top: 3rem;
    right: .2rem;
    height: 3.6rem;
    width: .8rem;
}
.ts{
    font-size: .36rem;
    text-align: center;
    color: #000;
}

</style>