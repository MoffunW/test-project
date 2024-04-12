<template>
  <aside class="sidebar">test</aside>
</template>

<script setup></script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  width: 240px;
  background: #fff;
  height: calc(100vh - var(--header-height));
  flex-shrink: 0;
  box-shadow: 1px 0px 10px 0px #a6a8a933;
  padding: 32px 24px;
}
</style>
