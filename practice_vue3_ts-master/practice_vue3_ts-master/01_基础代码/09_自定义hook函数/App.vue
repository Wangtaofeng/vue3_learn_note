<template>
  <h2>自定义hook函数</h2>
  <h3>x:{{x}},y:{{y}}</h3>
  <h3 v-if="loading">正在加载中</h3>
  <h3 v-else-if="errorMsg">加载失败，错误原因：{{errorMsg}}</h3>
<!--  <ul v-else>-->
<!--    <li>{{data.id}}</li>-->
<!--    <li>{{data.address}}</li>-->
<!--    <li>{{data.distance}}</li>-->
<!--  </ul>-->
  <!-- ==================加载数组中的数据===================== -->
  <ul v-else v-for="item in data">
    <li>{{item.id}}</li>
    <li>{{item.title}}</li>
    <li>{{item.price}}</li>
  </ul>
</template>

<script lang="ts">
// defineComponent函数，目的是定义一个组件 , 内部可以传入一个配置对象
import { defineComponent,ref,watch} from 'vue';
import useMousePosition from "@/hooks/useMousePosition";
import useRequest from "@/hooks/useRequest";
// 定义接口约束对象类型
interface IAddressData {
  id:number,
  address:string,
  distance:string
}
interface IProductData {
  id:Number,
  title:string,
  price:number
}


// 暴露出去一个定义好的组件
export default defineComponent({
  name: 'App',
  // 需求1：用户在页面中点击页面，把点击位置的横纵坐标收集起来并展示出来
  // 需求2：封装发送ajax请求的hook函数
  setup() {
    let {x,y} = useMousePosition()
    // const {loading,data,errorMsg} = useRequest<IAddressData>('/data/address.json')
    const {loading,data,errorMsg} = useRequest<IProductData[]>('/data/product.json')
    watch(data,()=> {
      if(data.value) {
        console.log(data.value.length)
      }
    })
    return{
      x,y,loading,data,errorMsg
    }
  },
  components: {
  }
});
</script>

<style>
</style>
