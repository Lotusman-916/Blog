<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import Swiper from 'swiper'

  const swiper = ref<Element | any>()

  onMounted(() => {
    new Swiper(swiper.value, {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 2,
        slideShadows: true
      },
      loop: true
    })
  })
</script>
<template>
  <section>
    <div class="swiper" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="testimonialBox">
            <img src="../assets/swiper-card/right-quote.png" alt="quote" class="quote" />
            <div class="content">
              <p>I am lotus, a frontend developer.</p>
              <div class="details">
                <div class="imgBx">
                  <img src="../assets/swiper-card/user1.png" alt="" />
                </div>
                <h3>call me lotus <br /><span>frontend developer</span></h3>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="testimonialBox">
            <img src="../assets/swiper-card/right-quote.png" alt="quote" class="quote" />
            <div class="content">
              <p>I am lotus, a frontend developer.</p>
              <div class="details">
                <div class="imgBx">
                  <img src="../assets/swiper-card/user2.png" alt="" />
                </div>
                <h3>call me lotus <br /><span>frontend developer</span></h3>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="testimonialBox">
            <img src="../assets/swiper-card/right-quote.png" alt="quote" class="quote" />
            <div class="content">
              <p>I am lotus, a frontend developer.</p>
              <div class="details">
                <div class="imgBx">
                  <img src="../assets/swiper-card/user3.png" alt="" />
                </div>
                <h3>call me lotus <br /><span>frontend developer</span></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="less">
  @import url('swiper/css/bundle');
  section {
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #2b2d2f;
    overflow: hidden;

    .swiper {
      width: 100%;
      padding-top: 50px;
      padding-bottom: 50px;

      &-slide {
        background-position: center;
        background-size: cover;
        width: 240px;
        box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
        filter: blur(4px);
        background: #c1c3c4;
        border-radius: 10px;
        &-active {
          filter: blur(0px);
          background: #fff;
        }
        .testimonialBox {
          position: relative;
          width: 100%;
          padding: 40px;
          padding-top: 90px;
          color: #999;
          .quote {
            height: 40px;
            width: 40px;
            position: absolute;
            top: 20px;
            right: 30px;
            opacity: 0.2;
          }
          .details {
            display: flex;
            align-items: center;
            margin-top: 20px;
            .imgBx {
              position: relative;
              width: 60px;
              height: 60px;
              border-radius: 50%;
              overflow: hidden;
              margin-left: 10px;
              img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
            h3 {
              font-size: 16px;
              font-weight: 400;
              letter-spacing: 1px;
              color: #2b2d2f;
              line-height: 1.1em;
              span {
                font-size: 12px;
                color: rgb(82, 79, 79);
              }
            }
          }
        }
      }

      &-wrapper {
        display: flex;
      }
    }
  }

  .swiper-container-3d .swiper-slide-shadow-left,
  .swiper-container-3d .swiper-slide-shadow-right {
    background-image: none;
  }
</style>
