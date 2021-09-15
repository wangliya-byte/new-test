import axios from 'axios';
import {ref} from 'vue'
function useUrlLoader<T>(url:string) {
    const loading = ref(true);
    const loaded = ref(false);
    const result = ref<T | null>(null);
    const error = ref(null);
    
    axios.get(url).then(res => {
        console.log("res===", res);
        loading.value = false;
        loaded.value = true;
        result.value = res.data
    }).catch(error => {
        loading.value = false;
        console.log("error",error)
    })
    return {
        loading,
        loaded,
        result
    }
}
export default useUrlLoader;