<template>
    <div>
         <div>
            <h1>更新document title</h1>
            <div>标签页title:{{title}}</div>
            <button @click="updateTitle">更新titlle</button>
        </div>
    </div>
</template>
<script>
import { defineComponent,watch ,ref} from 'vue'

export default defineComponent({
    setup() {
        const title = ref(0);
        watch(title,(title,preCount)=>{
            //监听title值的变化更新document.title
            console.log('newCpunt',title,preCount)
            document.title = title;
        })
        return {
            title
        }
    },
    methods:{
         updateTitle(){//点击更新title
          this.title += 1
         }
    }
})
</script>
