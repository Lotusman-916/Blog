<script setup lang="ts"></script>

<template>
  <div class="skill-card">
    <div class="inner">
      <div class="front">
        <div class="banner">
          <img src="../assets/IMG_0268(20220719-211745).JPG" alt="banner" width="100%" />
        </div>
        <div class="profile alignment">
          <img src="../assets/logo.svg" alt="logo" class="avatar" />
          <h3 class="title">HTML</h3>
          <h3 class="subtitle">web-designer</h3>
        </div>
      </div>

      <div class="back">
        <div class="alignment">
          <p class="text">I am a web designer who learn by hobbies</p>
          <div class="address">
            call me lotus <br />
            叫我路特斯
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  :root {
    --background: #e1e1e1;
    --color-light: rgb(82, 82, 82);
    --color-dark: #888;
    --text-color-light: #888;
  }
  .skill-card {
    height: 400px;
    width: 300px;
    background-color: var(--background);
    overflow: hidden;
    font-family: sans-serif;
    perspective: 1000px;
    margin: 5% auto;
    &:hover .inner {
      transform: rotateY(180deg);
    }
    .inner {
      position: relative;
      width: 240px;
      height: 320px;
      transition: transform 0.5s ease-in-out;
      transform-style: preserve-3d;
      .front,
      .back {
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        height: 100%;
        color: var(--text-color-light);
        border-radius: 25px;
        box-shadow: 0 0 50px 2px rgba(0, 0, 0, 0.1);
        // 添加背景图片
        background-image: url();
      }
      .back {
        transform: rotateY(180deg);
        backface-visibility: hidden;
      }
      .profile {
        .avatar {
          position: absolute;
          width: 24px;
          height: 24px;
          top: 60%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 5px solid var(--background);
        }
      }

      .banner + .profile {
        height: 50%;
        // margin-top: -10px;
      }
    }
    .alignment {
      display: flex;
      flex-direction: column;
      // justify-content: center;
      align-items: center;
      .title,
      .subtitle,
      .text,
      .address {
        margin-top: 0;
        margin-bottom: 0;
        text-align: center;
      }
      .subtitle,
      .address {
        font-size: 0.8em;
        font-weight: 400;
      }

      .text {
        margin: 30% 8% 0 8%;
      }
      .address::before {
        content: '';
        display: inline-block;
        border-top: 2px solid var(--text-color-light);
        width: 100%;
        margin-bottom: 5px;
      }
    }
  }
</style>
