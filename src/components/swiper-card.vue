<script setup lang="ts">
  import { onMounted } from 'vue'
  import Swiper from 'swiper'

  onMounted(() => {
    new Swiper('', {})
  })
</script>
<template>
  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slider"></div>
    </div>
  </div>
</template>

<style lang="less"></style>
