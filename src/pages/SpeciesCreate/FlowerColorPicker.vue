<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineProps<{
  modelValue?: string;
  label?: string;
}>();

const menuTrigger = ref();

const colors = ['white', 'yellow', 'pink', 'green'];

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const update = (value: string) => {
  emit('update:modelValue', value);
};
</script>

<template>
  <q-btn ref="menuTrigger" color="grey">
    <q-item-section avatar>
      <q-icon v-if="modelValue" :color="modelValue" name="local_florist" />
    </q-item-section>
    <q-item-section>
      {{
        modelValue
          ? t(`species.options.flowerColor.${modelValue}`)
          : t('species.speciesCreate.flowerColorButtonLabel')
      }}
    </q-item-section>
  </q-btn>

  <q-menu :target="menuTrigger" auto-close>
    <q-list bordered>
      <q-item
        v-for="color in colors"
        :key="color"
        clickable
        @click="() => update(color)"
      >
        <q-item-section avatar>
          <q-icon :color="color" name="local_florist" />
        </q-item-section>

        <q-item-section>{{
          t(`species.options.flowerColor.${color}`)
        }}</q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</template>

<style scoped></style>
