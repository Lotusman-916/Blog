<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <div class="btn">
      <div class="icon">
        <i>111</i>
      </div>
      <span>facebook</span>
    </div>
    <div class="btn">
      <div class="icon">
        <i>222</i>
      </div>
      <span>twitter</span>
    </div>
    <div class="btn">
      <div class="icon">
        <i>333</i>
      </div>
      <span>instagram</span>
    </div>
    <div class="btn">
      <div class="icon">
        <i>444</i>
      </div>
      <span>youtube</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    place-items: center;
    background: linear-gradient(315deg, #fff 0%, #d7e1ec 94%);
    .btn {
      display: inline-block;
      justify-content: space-around;
      align-items: center;
      height: 60px;
      width: 60px;
      border-radius: 50px;
      margin: 0 5px;
      overflow: hidden;
      background: #fff;
      cursor: pointer;
      box-shadow: 0 10 10 rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease-out;
      &:hover {
        width: 200px;
        .icon > i {
          color: #fff;
        }
      }
      span {
        font-size: 20px;
        font-weight: 500;
        line-height: 60px;
        margin-left: 10px;
        transition: all 0.3s ease-out;
      }
      .icon {
        display: inline-block;
        height: 60px;
        width: 60px;
        text-align: center;
        border-radius: 50px;
        box-sizing: border-box;
        line-height: 60px;
        transition: all 0.3s ease-out;
        i {
          font-size: 24px;
          line-height: 60px;
          transition: all 0.3s ease-out;
        }
      }
    }
  }
</style>
