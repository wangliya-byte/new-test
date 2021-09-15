<template>
    <div>
        <teleport to="#modal-target">
            <div class="modal" v-if="isOpen">
                <div>这是一个模态框</div>
                <button @click="clickCloseModal">关闭模态框</button>
            </div>
        </teleport>
    </div>
</template>
<script>
import { defineComponent,onMounted } from 'vue'
export default defineComponent({
    props:{
        isOpen:Boolean
    },
    emits:['close-modal'],
    onMounted(){
            console.log('子组件接收的props',this.isOpen)
    },
    setup(props,context) {
      
        const clickCloseModal = ()=>{
            console.log('context==',context.emit)
            context.emit('close-modal');
        }
        return {clickCloseModal};
    }
})
</script>
<style>
.modal{
    width:100%;
    height:100%;
    position: fixed;
    top: 0px;
    background-color:#333;
    opacity:0.5;
    text-align:center;
    padding-top: 200px;
}
</style>
