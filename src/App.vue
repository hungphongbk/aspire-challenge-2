<template>
  <component :is="Layout">
    <div :class="$style.Container">
      <h2 :class="$style.Title">Debit Card</h2>
      <div :class="$style.Panel">
        <div class="row">
          <div class="col-12 col-md-6">
            <span>Available Balance</span>
            <div class="row justify-between items-center">
              <div><span :class="$style.Badge">S$</span><span>3,000</span></div>
              <div :class="$style.TopUp">
                <top-up-icon style="vertical-align: middle"></top-up-icon>
                &nbsp;Top up
              </div>
            </div>
            <credit-card style="margin-top:40px;"></credit-card>
          </div>
          <div class="col-12 col-md-6"></div>
        </div>
      </div>
    </div>
  </component>
</template>

<script>
import DesktopLayout from "@/layout/DesktopLayout";
import MobileLayout from "@/layout/MobileLayout";
import TopUpIcon from "@/assets/TopUpIcon";
import CreditCard from "@/components/CreditCard";

export default {
  name: 'LayoutDefault',
  components:{
    TopUpIcon,
    CreditCard
  },
  computed: {
    Layout() {
      return this.$device.mobile ? MobileLayout : DesktopLayout
    }
  },
}
</script>

<style lang="scss" module>
@import "styles/mixins";

.Container {
  @include for-desktop-up {
    padding-left: 60px;
    padding-top: 60px;
  }
}

h2.Title {
  display: inline-block;
  margin: 0;
  padding: 0;
  line-height: 1;


  @include for-desktop-up {
    font-size: 24px;
    font-weight: 700;
  }
}

.Panel{
  @include for-desktop-up{
    border:1px solid #FCFCFC;
    border-radius:8px;
    box-shadow:0 3px 16px #00000014;
    padding:40px;
    margin-top:40px;
  }
}

.Badge{
  border-radius:4px;
  padding:3px 12px;
  background-color:#01D167;
  color:white;
  font-size:13px;
  font-weight:700;
  &+span{
    font-size:26px;
    font-weight:bold;
    margin-left: 12px;
    vertical-align: sub;
  }
}
.TopUp{
  font-size: 14px;
  color:#23CEFD;
  font-weight: 600;
}
</style>
