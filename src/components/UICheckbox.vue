<template>
  <label class="wrapper flex items-center">
    {{ label }}
    <input class="checkbox" type="checkbox" :checked="model" v-model="model" />
    <span class="checkmark"></span>
  </label>
</template>

<script setup>
import { useModel } from 'vue'

const model = defineModel()

const props = defineProps({
  label: { type: String, required: true }
})
</script>

<style lang="scss" scoped>
/* Customize the label (the wrapper) */
.wrapper {
  display: block;
  position: relative;
  padding-left: 33px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 14px;
  font-weight: 400;
}
/* Hide the browser's default checkbox */
.wrapper input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 21px;
  width: 21px;
  border-radius: 2px;
  background-color: #fff;
  border: 1px solid #ccc;
}
/* On mouse-over, add a grey background color */
.wrapper:hover input ~ .checkmark {
  background-color: #fff;
}
/* When the checkbox is checked, add a blue background */
.wrapper input:checked ~ .checkmark {
  background-color: #fff;
}
/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}
/* Show the checkmark when checked */
.wrapper input:checked ~ .checkmark:after {
  display: block;
}
/* Style the checkmark/indicator */
.wrapper .checkmark:after {
  left: 6px;
  top: 2px;
  width: 8px;
  height: 11px;
  border: solid var(--color-green);
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
