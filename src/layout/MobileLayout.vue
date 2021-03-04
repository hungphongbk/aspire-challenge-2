<template>
  <div :class="$style.Container">
    <slot/>
  </div>
</template>
<script>

export default {
  name: "MobileLayout",
  components: {}
}
</script>
<style lang="scss" module>
.Container {
  background-color: #0C365A;
  padding-left: 24px;
  padding-right: 24px;
  position: relative;
}

.MobileTabContainer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
