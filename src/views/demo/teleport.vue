<template>
     <div>
        <button @click="clickShow">显示模态框</button>
        <Modal :isOpen="isOpen" @close-modal="closeModal"></Modal>
    </div>
</template>
<script>
import {ref, defineComponent } from 'vue'
import Modal from '../../components/modal.vue'
export default defineComponent({
    setup() {
        const isOpen = ref(false);
        const closeModal = ()=>{
            isOpen.value = false;
            console.log("closeModal===",isOpen.value)
         
        }
        const clickShow = ()=>{
            isOpen.value = true;
            console.log("isOpen==",isOpen.value)
        }
        return {
            isOpen,
            closeModal,
            clickShow
        }
    },
    components:{
        Modal
    }
})
</script>
