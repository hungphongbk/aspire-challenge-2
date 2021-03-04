<template>
  <q-layout view="hHh LpR fFf">

    <q-drawer v-model="left" :content-class="$style.DrawerPanel" show-if-above side="left">
      <aspire-logo></aspire-logo>
      <span :class="$style.SubText">Trusted way of banking for 3,000+ SMEs and startups in Singapore</span>
      <q-list>
        <q-item :class="$style.MenuItem">
          <q-item-section avatar>
            <home-icon></home-icon>
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item :active="true" :active-class="$style.Active" :class="$style.MenuItem">
          <q-item-section avatar>
            <debit-card-icon></debit-card-icon>
          </q-item-section>
          <q-item-section>Debit Card</q-item-section>
        </q-item>
        <q-item :class="$style.MenuItem">
          <q-item-section avatar>
            <payment-icon></payment-icon>
          </q-item-section>
          <q-item-section>Payment</q-item-section>
        </q-item>
        <q-item :class="$style.MenuItem">
          <q-item-section avatar>
            <credit-icon></credit-icon>
          </q-item-section>
          <q-item-section>Credit</q-item-section>
        </q-item>
        <q-item :class="$style.MenuItem">
          <q-item-section avatar>
            <user-icon></user-icon>
          </q-item-section>
          <q-item-section>Settings</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <slot/>
    </q-page-container>

  </q-layout>
</template>

<script>
import AspireLogo from "@/assets/AspireLogo";
import HomeIcon from "@/assets/HomeIcon";
import DebitCardIcon from "@/assets/DebitCardIcon";
import PaymentIcon from "@/assets/PaymentIcon";
import CreditIcon from "@/assets/CreditIcon";
import UserIcon from "@/assets/UserIcon";

export default {
  name: "DesktopLayout",
  components: {
    AspireLogo,
    HomeIcon,
    DebitCardIcon,
    PaymentIcon,
    CreditIcon,
    UserIcon
  },
  data() {
    return {
      left: false
    }
  }
}
</script>
<style lang="scss" module>
.DrawerPanel {
  background-color: #0c365a;
  color: white;
  padding-left: 48px;
  padding-top: 48px;
}

.SubText {
  font-size: 15px;
  margin-top: 20px;
  margin-bottom: 50px;
  display: block;
  opacity: 0.3;
}

.MenuItem {
  font-size: 16px;
  padding-left: 0 !important;
  padding-top: 30px !important;
  padding-bottom: 30px !important;

  :global(.q-item__section--avatar) {
    min-width: unset;
  }

  &.Active {
    color: #01D167;
  }
}
</style>
