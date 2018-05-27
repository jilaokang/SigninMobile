<template>
  <div class="card">
    <Swiper height="500px">
      <SwiperItem class="classCard">
        <div class="classInfo">
          <p>1-2节 </p>
          <p>地点：中1201室</p>
          <p>班级：软工1501班</p>
          <p>签到情况：30/32</p>
        </div>
        <div>
          <x-table>
            <thead>
            <tr>
              <th>姓名</th>
              <th>签到情况</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>张三</td>
              <td>成功</td>
            </tr>
            <tr>
              <td>李四</td>
              <td>失败</td>
            </tr>
            <tr>
              <td>李四</td>
              <td>失败</td>
            </tr>
            <tr>
              <td>李四</td>
              <td>失败</td>
            </tr>
            <tr>
              <td>李四</td>
              <td>失败</td>
            </tr>
            <tr>
              <td>李四</td>
              <td>失败</td>
            </tr>
            <tr>
              <td>李四</td>
              <td>失败</td>
            </tr>
            <tr>
              <td>李四</td>
              <td>失败</td>
            </tr>
            <tr>
              <td>李四</td>
              <td>失败</td>
            </tr>
            <tr>
              <td>李四</td>
              <td>失败</td>
            </tr>
            <tr>
              <td>李四</td>
              <td>失败</td>
            </tr>
            <tr>
              <td>李四</td>
              <td>失败</td>
            </tr>
            <tr>
              <td>李四</td>
              <td>失败</td>
            </tr>
            <tr>
              <td>李四</td>
              <td>失败</td>
            </tr>
            </tbody>
          </x-table>
        </div>
      </SwiperItem>
      <SwiperItem class="classCard">
        <div class="classInfo">
          <p>3-4节</p>
          <p>地点：中1201室</p>
          <p>班级：软工1501班</p>
          <p>签到情况：30/32</p>
        </div>
        <div>
          <x-table>
            <thead>
            <tr>
              <th>姓名</th>
              <th>签到情况</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>张三</td>
              <td>成功</td>
            </tr>
            <tr>
              <td>李四</td>
              <td>失败</td>
            </tr>
            <tr>
              <td>李四</td>
              <td>失败</td>
            </tr>
            <tr>
              <td>李四</td>
              <td>失败</td>
            </tr>
            <tr>
              <td>李四</td>
              <td>失败</td>
            </tr>
            <tr>
              <td>李四</td>
              <td>失败</td>
            </tr>
            <tr>
              <td>李四</td>
              <td>失败</td>
            </tr>
            <tr>
              <td>李四</td>
              <td>失败</td>
            </tr>
            <tr>
              <td>李四</td>
              <td>失败</td>
            </tr>
            <tr>
              <td>李四</td>
              <td>失败</td>
            </tr>
            <tr>
              <td>李四</td>
              <td>失败</td>
            </tr>
            <tr>
              <td>李四</td>
              <td>失败</td>
            </tr>
            <tr>
              <td>李四</td>
              <td>失败</td>
            </tr>
            <tr>
              <td>李四</td>
              <td>失败</td>
            </tr>
            </tbody>
          </x-table>
        </div>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem, XTable} from 'vux'

  export default {
    components: {
      Swiper,
      SwiperItem,
      XTable
    }
  }
</script>

<style scoped>
  .classCard {
    border-radius: 5px;
    padding: 10px 20px;
    background: white;
    height: 100%;
  }
  .classInfo{
    font-size: 0.88em;
    line-height: 2;
    padding: 0 0 10px 0;
  }
  .classInfo p:nth-child(1){
    text-align: center;
    color: dodgerblue !important;
    font-size: 2em;
    font-weight: 800;
    line-height: 3;
  }
  .vux-swiper-item {
    position: relative;
    overflow: auto;
  }
</style>
