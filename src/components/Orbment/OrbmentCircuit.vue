<template>
  <div class="circuit-line">
    <div class="circuit-unit" v-for="(item, index) in data" :key="index">
      <div class="circuit-slot" :class="'circuit-' + item.color"></div>
      <div class="circuit-info mt-3 text-sm px-1 py-1 shadow-md bg-gray-900 border border-gray-800 rounded-lg">
        {{ item.alias }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef } from "vue";

export default defineComponent({
  props: ["link"],
  setup(props) {
    const data = toRef(props, "link");
    return {
      data,
    };
  },
});
</script>

<style lang="scss" scoped>

.circuit-brown { background: $orbment-brown; border-color: #d1812a; }
.circuit-aqua { background: $orbment-aqua; border-color: #bbfeff; }
.circuit-red { background: $orbment-red; border-color: #ffbbbb; }
.circuit-green { background: $orbment-green; border-color: #cfffbb; }
.circuit-dark { background: $orbment-dark; border-color: #525252; }
.circuit-light { background: $orbment-light; border-color: #ffc125; }
.circuit-silver { background: $orbment-silver; border-color: #d2d2d2; }
.circuit-line {
  width: 100%;
  height: 5rem;
  margin-top: -2rem;
  padding-left: 20rem;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.circuit-unit {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-right: 5rem;
  width: 7rem;
  .circuit-slot {
    width: 3rem;
    height: 3rem;
    transform: rotate(45deg);
    margin-top: 34px;
    border-width: 4px;
    border-style: ridge;
    box-shadow: #939393 3px -3px 20px 4px;
    &::before {
      content: "";
      position: absolute;
      top: 1%;
      left: 5%;
      width: 90%;
      height: 90%;
      border-radius: 50%;
      background: radial-gradient(
        circle at 50% 0px,
        #ffffff,
        rgba(255, 255, 255, 0) 58%
      );
      filter: blur(5px);
      z-index: 2;
    }
  }
}
</style>
