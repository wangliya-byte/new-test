<template>
  <div class="about">
        <h1>{{double}}</h1>
    <h1>{{reactive1}}</h1>
    <button @click="add()">增加</button>
  </div>
</template>
<script>
import { ref ,toRef,computed, reactive,onMounted,watch} from 'vue'
export default {
  name: 'App',
  setup(){
    const count = ref(0);
    const reactive1 = reactive([1,24,2])
    const double = computed(() => {
        return count.value*2;
      })
    const add = () => {
      console.log('reactive1',reactive1);
      for(let i of reactive1){
         i=i+1;
      }
      console.log("reactiv12",reactive1)
    }
    // const changeTitle = ()=>{
       
    // }
    // document.title ='hello tree'
    return {
      count,
      reactive1,
      add,
      double,
      // changeTitle
    }
  },
  onMounted(){
    console.log("onMounted===");
  },

}
</script>
