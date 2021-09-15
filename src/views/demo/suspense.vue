<template>
    <div>
        <div @click="clickShow">点击异步加载</div>   
        <Suspense v-if="loadAsync">
            <template #defalut>
                <AsyncComponent/>
            </template>
            <template #fallback>
                <div>图片加载中......</div>
            </template>
        </Suspense>
    </div>
</template>
<script>
import { defineComponent,ref,defineAsyncComponent} from 'vue'
// import AsyncShow from '../../components/AsyncShow.vue'
export default defineComponent({
    setup() {
        const title = ref('suspense异步加载');
        const loadAsync = ref(false);
        const clickShow = ()=>{
            loadAsync.value = true;
            console.log('loadAsync',loadAsync.value)
        }
        return {
            title,
            clickShow,
            loadAsync,
         
            // loadAsync
        }
    },
    // methods:{
    //     clickShow(){

    //     }
    // },
    components:{
           AsyncComponent: defineAsyncComponent(() => {
            return import("../../components/AsyncShow.vue");
            })
        // AsyncShow
    }
})
</script>
