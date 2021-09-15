<template>
    <div class="menu-container">
        <div v-for="item in menu" :key="item.id">
            <router-link :to="item.path">{{item.name}}</router-link>
        </div>
    </div>
</template>
<script>
 import { defineComponent,watch } from 'vue'

export default defineComponent({
    setup() {
        const menu = [{
            id:"0",
            name:"watch案例-改变标签页title",
            path:'./home/watch'
            },
            {
            id:"1",
            name:"composition案例-获取鼠标位置",
            path:'./home/composition'
            }];
        return {
            menu
        }
    },
})
</script>
<style scoped>
.menu-container{
    text-align:left;
}
</style>
