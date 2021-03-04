<template>
  <component :is="Layout">
    hihi
  </component>
</template>

<script>
import DesktopLayout from "@/layout/DesktopLayout";
import MobileLayout from "@/layout/MobileLayout";

export default {
  name: 'LayoutDefault',
  computed:{
    Layout(){
      return this.$device.mobile?MobileLayout:DesktopLayout
    }
  },
}
</script>

<style>
</style>
