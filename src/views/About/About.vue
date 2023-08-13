<script setup lang="ts">
  import AccordionButton from '../../components/accordion-button.vue'
  import SkillCard from '@/components/skill-card.vue'
  import SwiperCard from '@/components/swiper-card.vue'
</script>

<template>
  <div class="about">
    <!-- <accordion-button /> -->
    <!-- <skill-card> </skill-card> -->
    <SwiperCard></SwiperCard>
  </div>
</template>

<style lang="less" scoped>
  .about {
    height: 100vh;
    width: 100vw;
  }
</style>
