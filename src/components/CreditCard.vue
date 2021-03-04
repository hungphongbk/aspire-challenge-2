<template>
  <div :class="$style.Container">
    <div :class="$style.Eye">
      <removed-eye-icon></removed-eye-icon>
    </div>
    <div class="row justify-end">
      <aspire-logo-white></aspire-logo-white>
    </div>
    <div :class="$style.Name">Mark Henry</div>
  </div>
</template>
<script>
import RemovedEyeIcon from "@/assets/RemovedEyeIcon";
import AspireLogoWhite from "@/assets/AspireLogoWhite";

export default {
  name: "CreditCard",
  components: {
    RemovedEyeIcon,
    AspireLogoWhite
  }
}
</script>
<style module lang="scss">
.Container {
  background-color: #01D167;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 6px #00000014;
  position: relative;
  color:white;
}

.Eye {
  composes: row justify-center items-center from global;
  position: absolute;
  top: -2px;
  left: -2px;
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 2px 6px #072a441f;
  cursor: pointer;
}
.Name{
  font-size:22px;
  font-weight:600;
  margin-top:24px;
  margin-bottom:24px;
}
</style>
