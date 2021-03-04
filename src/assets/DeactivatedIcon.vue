<template>
  <svg :class="$style.Icon" height="36" viewBox="0 0 36 36" width="36" xmlns="http://www.w3.org/2000/svg">
    <circle class="a" cx="18" cy="18" r="18"/>
    <path class="b"
          d="M9.027,0a9.027,9.027,0,1,0,9.027,9.027A9.038,9.038,0,0,0,9.027,0ZM2.257,9.027A6.726,6.726,0,0,1,3.515,5.11l9.429,9.429A6.76,6.76,0,0,1,2.257,9.027ZM14.54,12.944,5.11,3.515a6.76,6.76,0,0,1,9.429,9.429Z"
          transform="translate(8.574 9.027)"/>
    <rect class="c" height="2.257" transform="translate(13.668 12.526) rotate(45)" width="13.315"/>
  </svg>
</template>
<script lang="ts">
export default {
  name: "DeactivatedIcon"
}
</script>
<style lang="scss" module>
.Icon {
  :global {
    .a {
      fill: #325baf;
    }

    .b {
      fill: #9ac0fa;
    }

    .c {
      fill: #f1f3f4;
    }
  }
}
</style>
