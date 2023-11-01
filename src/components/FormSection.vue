<script setup lang="ts">
defineProps<{
  label?: string;
}>();
</script>

<template>
  <q-card class="q-mb-md">
    <q-card-section>
      {{ label }}
    </q-card-section>

    <q-card-section class="q-pt-none"> <slot></slot> </q-card-section>
  </q-card>
</template>

<style scoped>
.card::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 0;
  height: 0;
  border: 0 solid transparent;
  border-top-color: transparent;
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-width: 9px 0 0 11px;
}
</style>
