<template>
  <div :class="$style.Container">
    <div style="width: calc(100% - 80px);">
      <div :class="$style.Title">1% cashback on debit card</div>
      <span>You get 1% cashback on your next 5 debit card payments. Hurry, the offer expires soon!</span>
    </div>
    <q-circular-progress
        :value="15*100/31"
        color="primary"
        size="60px"
        show-value
    >
      <div class="text-center"><p :class="$style.Value">15</p><span>days left</span></div>
    </q-circular-progress>
  </div>
</template>
<script>
export default {
  name: "CashBack"
}
</script>
<style module lang="scss">
.Container {
  border-radius: 12px;
  padding: 24px;
  background-color: #01D1670D;
  border: 1px solid #01D16726;
  composes: row justify-between items-center from global;
}

.Title {
  color: #01D167;
  font-size: 16px;
  font-weight: 600;
}

.Value {
  display: block;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 0;

  + span {
    font-size: 8px;
  }
}
</style>
