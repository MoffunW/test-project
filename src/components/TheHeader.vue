<template>
  <header class="header">
    <div class="header__logo"><img src="@/assets/logo.png" alt="" /></div>
    <HeaderUser />
  </header>
</template>

<script setup>
import HeaderUser from '@/components/HeaderUser.vue'
</script>

<style lang="scss" scoped>
$headerHeight: 67px;
$paddingInline: 32px;
$logoSize: 66px;

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: $headerHeight;
  padding: 0 $paddingInline;
  background: #fff;
  box-shadow: 0px 1px 10px 0px #a6a8a933;
  &__logo {
    height: $logoSize;
    width: $logoSize;
    img {
      max-width: 100%;
      object-fit: cover;
    }
  }
}
</style>
