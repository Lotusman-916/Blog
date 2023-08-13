<script setup lang="ts">
  import Typed from 'typed.js'
  import { onMounted, ref } from 'vue'

  const multipleText = ref<Element>()
  onMounted(() => {
    new Typed(multipleText.value!, {
      strings: ['Frontend Developer', 'TikTok User', ''],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    })
  })
</script>

<template>
  <div class="home">
    <header class="header">
      <a href="#" class="logo">Protfolio.</a>
      <nav class="navbar">
        <a href="#" class="active item" style="--i: 1">Home</a>
        <a href="#" class="item" style="--i: 2">About</a>
        <a href="#" class="item" style="--i: 3">Skills</a>
        <a href="#" class="item" style="--i: 4">Portfolio</a>
        <a href="#" class="item" style="--i: 5">Contact</a>
      </nav>
    </header>
    <section class="container">
      <div class="container-content">
        <h3>Hello,It's Me</h3>
        <h1>Call Me Phoenix</h1>
        <h3>And I'm a <span ref="multipleText"></span></h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing dlit . Accusantium,ab autem repellat
          reiciendis ipsam perspicictis.
        </p>
        <div class="social-media">
          <a href="#" style="--i: 7"><i class="bx bxl-tiktok"></i></a>
          <a href="#" style="--i: 8"><i class="bx bxl-facebook-circle"></i></a>
          <a href="#" style="--i: 9"><i class="bx bxl-google"></i></a>
          <a href="#" style="--i: 10"><i class="bx bxl-linkedin-square"></i></a>
        </div>
        <a href="#" class="btn">Download CV</a>
      </div>
      <div class="container-img">
        <img src="../../assets/IMG_0268(20220719-211745).JPG" alt="" />
      </div>
    </section>
  </div>
</template>

<style lang="less">
  .home {
    height: 100vh;
    width: 100vw;
    background-color: #1f242d;
    color: #fff;
    .header {
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      padding-top: 20px;
      background-color: transparent;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 100;
      .logo {
        font-size: 25px;
        color: #fff;
        padding-left: 10%;
        text-decoration: none;
        font-weight: 600;
        cursor: pointer;
        opacity: 0;
        animation: slideRight 1s ease forwards;
      }
      .navbar > a {
        display: inline-block;
        font-size: 18px;
        color: #fff;
        text-decoration: none;
        font-weight: 500;
        margin-right: 35px;
        &:hover,
        &:active {
          color: #b7b2a9;
        }
        opacity: 0;
        transition: 0.3s ease;
        animation: slideTop 1s ease forwards;
        /**自定义属性延迟动画 */
        animation-delay: calc(0.2s * var(--i));
      }
    }
    .container {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 60px 10% 0;
      &-content {
        max-width: 600px;
        h3 {
          font-size: 32px;
          font-weight: 700;
          &:nth-of-type(2) {
            font-size: 32px;
            opacity: 0;
            animation: slideTop 1s ease forwards;
            animation-delay: 0.7s;
          }
          opacity: 0;
          animation: slideBottom 1s ease forwards;
          animation-delay: 0.7s;
          span {
            color: #b7b2a9;
          }
        }
        h1 {
          font-size: 56px;
          font-weight: 700;
          margin: -3px 0;
          opacity: 0;
          animation: slideRight 1s ease forwards;
          animation-delay: 1s;
        }
        p {
          font-size: 16px;
          opacity: 0;
          animation: slideLeft 1s ease forwards;
          animation-delay: 1s;
        }
        .social-media > a {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          background-color: transparent;
          border: 2px solid #b72;
          border-radius: 50%;
          color: #b7b2a9;
          font-size: 20px;
          text-decoration: none;
          margin: 30px 15px 30px 0;
          transition: 0.5s ease;
          opacity: 0;
          animation: slideLeft 1s ease forwards;
          animation-delay: calc(0.2s * var(--i));
          &:hover {
            background: #b7b2a9;
            color: #1f242d;
            box-shadow: 0 0 20px #b7b2a9;
          }
        }
        .btn {
          display: inline-block;
          padding: 12px 28px;
          background: #b7b2a9;
          text-decoration: none;
          border-radius: 40px;
          box-shadow: 0 0 10px #b7b2a9;
          font-size: 16px;
          color: #1f242d;
          letter-spacing: 1px;
          font-weight: 600;
          transition: 0.5s ease;
          opacity: 0;
          animation: slideTop 1s ease forwards;
          animation-delay: 2s;
          &:hover {
            box-shadow: 0 0 10px #b7b2a9;
          }
          &:active {
            background: none;
            color: #b7b2a9;
            border: 2px solid #b7b2a9;
          }
        }
      }
      &-img > img {
        position: absolute;
        top: 16%;
        right: 4%;
        max-width: 450px;
        border-radius: 50%;
        // margin-right: -40px;
        box-shadow: 0 0 20px #b7b2a9;
        opacity: 0;
        animation:
          zoomIn 1s ease forwards,
          floatImg 4s ease-in-out infinite;
        animation-delay: 2s, 3s;
      }
    }
  }

  @keyframes slideRight {
    0% {
      transform: translateX(-100px);
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideLeft {
    0% {
      transform: translateX(100px);
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideTop {
    0% {
      transform: translateY(100px);
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideBottom {
    0% {
      transform: translateY(-100px);
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes zoomIn {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes floatImg {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-24px);
    }
    100% {
      transform: translateX(0);
    }
  }
</style>
