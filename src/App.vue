<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/watch">wacth</router-link> |
      <router-link to="/composition">composition</router-link>|
      <router-link to="/teleport">teleport</router-link>|
      <router-link to="/suspense">suspense</router-link>|
      <router-link to="/about">About</router-link>|
    </div>
    <router-view/>
    <div>
       <Suspense>
            <template #defalut>
              <div>
             <async-show></async-show>
              </div>
            </template>
            <template #fallback>
                <div>图片加载中......</div>
            </template>
        </Suspense>
    </div>
    
  </div>
</template>
<script>
import { ref ,toRef,computed, reactive,onMounted,watch} from 'vue'
import AsyncShow from './components/AsyncShow.vue'
export default {
  name: 'App',
  // setup(){
    // const isOpen = ref(false);
    // const closeModal = ()=>{
    //     isOpen.value = false;
    // }
    // const clickShow = ()=>{
    //     isOpen.value = true;
    //     console.log("isOpen==",isOpen.value)
    // }
    // return {
    //     isOpen,
    //     closeModal,
    //     clickShow
    // }
  // },
  onMounted(){
    console.log("onMounted===");
  },
  components:{
     AsyncShow,
    // Modal
  }

}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
