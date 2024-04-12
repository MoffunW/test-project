<template>
  <div class="user">
    <div class="user__name">Фамилия Имя</div>
    <div class="user__image">
      <img
        src="https://thumbs.dreamstime.com/z/happy-person-portrait-smiling-woman-tanned-skin-curly-hair-happy-person-portrait-smiling-young-friendly-woman-197501184.jpg?ct=jpeg"
        alt=""
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
$size: 40px;
.user {
  display: flex;
  align-items: center;
  gap: 8px;
  &__name {
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
  }
  &__image {
    height: $size;
    width: $size;
    border-radius: 100%;
    background: red;
    overflow: hidden;
    img {
      max-height: 100%;
      object-fit: cover;
    }
  }
}
</style>
