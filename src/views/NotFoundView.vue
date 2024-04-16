<template>
  <div class="wrapper">
    <div class="not-found">
      <div class="not-found__image"><img src="@/assets/404.webp" alt="" /></div>
      <div class="not-found__text">Страница не найдена</div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - var(--header-height));
  width: 100%;
}
.not-found {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: 34px;
  &__image {
    max-width: 300px;
    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
