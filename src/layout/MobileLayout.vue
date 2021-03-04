<template>
  <div :class="$style.Container">
    <slot/>
  </div>
</template>
<script lang="ts">
export default {
    name: "MobileLayout"
}
</script>
<style module lang="scss">
  .Container{
    background-color: #0C365A;
    padding-left: 24px;
    padding-right:24px;
  }
</style>
