<template>
  <q-responsive :ratio="366/220">
    <div  :class="$style.Container">
      <div :class="$style.Eye">
        <removed-eye-icon></removed-eye-icon>
      </div>
      <div class="row justify-end">
        <aspire-logo-white></aspire-logo-white>
      </div>
      <div :class="$style.Name">Mark Henry</div>
      <div class="row items-center">
        <div
            v-for="item in 4"
            :key="item"
            :class="$style.Dots">
          <span
              v-for="item in 4"
              :key="item" />
        </div>
        <span style="font-weight: 600;letter-spacing: 6px;">2020</span>
      </div>
      <div :class="$style.Cvv">
        <span>Thru: 12/20</span>
        <span style="margin-left: 32px">CVV: <span style="font-size: 24px;line-height: 0;vertical-align: middle">* * *</span></span>
      </div>
      <div :class="$style.VisaLogo"><visa-logo></visa-logo></div>
    </div>
  </q-responsive>
</template>
<script>
import RemovedEyeIcon from "@/assets/RemovedEyeIcon";
import AspireLogoWhite from "@/assets/AspireLogoWhite";
import VisaLogo from "@/assets/VisaLogo";

export default {
  name: "CreditCard",
  components: {
    RemovedEyeIcon,
    AspireLogoWhite,
    VisaLogo
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
.Dots{
  composes:row justify-between items-center from global;
  margin-right: 18px;
  >span{
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: block;
    background-color: white;
    margin-right: 6px;
  }
}
.Cvv{
  margin-top:15px;
font-size:13px;
  font-weight:600;
  letter-spacing: 1.56px;
}
.VisaLogo{
  position: absolute;
  bottom:24px;
  right:24px;
}
</style>
