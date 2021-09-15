<template>
    <div>
        <div>
            <h1>获取鼠标位置</h1>
            <button>X:{{x}},Y:{{y}}</button>
        </div>
        <div>
            <h1>异步请求控制元素显示隐藏</h1>
            <!-- <button @click="loadImage">发送ajax</button> -->
            <div v-if="loading">isloading</div>
            <div v-if="loaded">
                <img :src="result.message"/>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent,toRefs,watch} from 'vue'
 //@ts-ignore
import getMousePosition from '../../hooks/useMousePosition.ts';
import useUrlLoader from '../../hooks/useUrlLoader';
interface DogResult{
    message:string;
    status:string;
}
interface CatResult{
    id:string;
    url:string;
    width:string;
    height:string
}
export default defineComponent({
    name:'compositoin',
    props:{
        msg:{
            required:true,
            type:String
        }
    },
    setup(props,context) {
        console.log("x,y",props.msg,context)
        //用reactive给一个对象添加了响应式，用对象解构的方式解构出来的属性失去响应式原因：
        //对象解构是把原来对象所有的键和他们的值拷贝到了一个新对象上。让一个普通的对象拥有响应式可以通过toRef或者toRefs添加
        const {x,y} = toRefs(getMousePosition())
        const {loading,loaded,result} = useUrlLoader<DogResult>('https://dog.ceo/api/breeds/image/random');
        //  const {loading,loaded,result} = useUrlLoader<CatResult>('https://api.thecatapi.com/v1/images/search?limit=1')
        console.log("rrrrr",result) 
        watch(result,()=>{
            if(result.value){
            console.log('result.value====',result.value.message)
            }
        })
        return {
            x,
            y,
            loading,
            loaded,
            result
        }
    },
    methods:{
        // loadImage(){
            
        // }
    
         
    }
})
</script>
