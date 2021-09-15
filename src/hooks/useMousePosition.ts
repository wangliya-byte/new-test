
import { reactive,onMounted,onUnmounted} from 'vue';
const getMousePosition = ()=>{
    const position = reactive({x:0,y:0});
    const getPosition = (e:MouseEvent)=>{
        position.x = e.pageX;
        position.y = e.pageY;
    }
    onMounted(()=>{
        document.addEventListener('click',getPosition)
    })
    onUnmounted(()=>{
        document.removeEventListener('click',getPosition)
    })
    return position;
}
export default getMousePosition;