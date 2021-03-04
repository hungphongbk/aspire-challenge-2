<template>
  <q-list :class="$style.List">
    <q-item>
      <q-item-section avatar side>
        <freeze-logo></freeze-logo>
      </q-item-section>
      <q-item-section>
        <div :class="$style.Title">Freeze card</div>
        <div :class="$style.Content">Your debit card is currently active</div>
      </q-item-section>
      <q-item-section side>
        <q-toggle :value="false"></q-toggle>
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section avatar>
        <limit-icon></limit-icon>
      </q-item-section>
      <q-item-section>
        <div :class="$style.Title">Spending limit</div>
        <div :class="$style.Content">Set a weekly spending amount</div>
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section avatar>
        <new-card-icon></new-card-icon>
      </q-item-section>
      <q-item-section>
        <div :class="$style.Title">Get a new card</div>
        <div :class="$style.Content">This deactivates your current debit card</div>
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section avatar>
        <deactivated-icon></deactivated-icon>
      </q-item-section>
      <q-item-section>
        <div :class="$style.Title">Deactivated cards</div>
        <div :class="$style.Content">Your previously deactivated cards</div>
      </q-item-section>
    </q-item>
  </q-list>
</template>
<script>
import FreezeLogo from "@/assets/FreezeLogo";
import LimitIcon from "@/assets/LimitIcon";
import NewCardIcon from "@/assets/NewCardIcon";
import DeactivatedIcon from "@/assets/DeactivatedIcon";

export default {
  name: "RightList",
  components: {
    FreezeLogo,
    LimitIcon,
    NewCardIcon,
    DeactivatedIcon
  }
}
</script>
<style lang="scss" module>
@import "../styles/mixins";

.Title {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #25345F;
  @include for-desktop-up {
    font-size: 16px;
    color: #222222;
  }
}

.Content {
  font-size: 13px;
  color: #222222;
  opacity: 0.4;
  @include for-desktop-up {
    font-size: 14px;
  }
}

.List {
  > div {
    padding: 15px 0;
  }

  @include for-desktop-up {
    > div {
      padding-top: 30px;
      padding-bottom: 30px;
    }
  }
}
</style>
