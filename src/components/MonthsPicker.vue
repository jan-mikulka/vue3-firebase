<script setup lang="ts">
import { ref } from 'vue';
import { min, max } from 'lodash';
import { useI18n } from 'vue-i18n';
import type { Nullable } from 'src/types';
import { getMonthName } from 'src/composables/months';

const { t } = useI18n();

type ValidMonthRange = {
  min: number;
  max: number;
};

type MonthRange = Nullable<ValidMonthRange>;

const props = defineProps<{
  modelValue: number[];
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: number[]): void;
}>();

const internalMonthRange = ref<MonthRange>({
  min: min(props.modelValue) || null,
  max: max(props.modelValue) || null,
});

const update = (newRange: ValidMonthRange) => {
  const monthArray = [];
  const maxMonth = newRange.max;
  let month: number = newRange.min;
  while (month <= maxMonth) {
    monthArray.push(month);
    month++;
  }
  emit('update:modelValue', monthArray);
};

const clearValue = () => {
  internalMonthRange.value = {
    min: null,
    max: null,
  };
  emit('update:modelValue', []);
};
</script>

<template>
  <q-list dense class="q-ma-md q-pt-lg">
    <q-item>
      <q-item-section>
        <q-range
          v-model="internalMonthRange"
          :min="1"
          :max="12"
          :step="1"
          :left-label-value="getMonthName(internalMonthRange.min || 1)"
          :right-label-value="getMonthName(internalMonthRange.max || 12)"
          label
          snap
          label-always
          @update:model-value="update"
        />
      </q-item-section>
      <q-item-section avatar>
        <q-icon name="clear" @click="clearValue">
          <q-tooltip>{{ t('components.monthPicker.clearTooltip') }}</q-tooltip>
        </q-icon>
      </q-item-section>
    </q-item>
  </q-list>
</template>
