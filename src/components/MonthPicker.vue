<script setup lang="ts">
import { ref } from 'vue';
import { min, max, map, range } from 'lodash';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const monthNames = map(range(1, 13), (month: number) => t(`months.${month}`));

type MonthRange = {
  min: number;
  max: number;
};

const props = withDefaults(
  defineProps<{
    modelValue?: number[];
    label?: string;
  }>(),
  {
    label: '',
  }
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: number[]): void;
}>();

const internalMonthRange = ref<MonthRange>({
  min: min(props.modelValue) || 1,
  max: max(props.modelValue) || 12,
});

const getMonthName = (month: number): string => {
  return monthNames[month - 1];
};

const update = (newRange: MonthRange) => {
  const monthArray = [];
  const maxMonth = newRange.max;
  let month: number = newRange.min;
  while (month <= maxMonth) {
    monthArray.push(month);
    month++;
  }
  emit('update:modelValue', monthArray);
};
</script>

<template>
  <q-range
    v-model="internalMonthRange"
    :min="1"
    :max="12"
    :step="1"
    :marker-labels="monthNames"
    :left-label-value="getMonthName(internalMonthRange.min)"
    :right-label-value="getMonthName(internalMonthRange.max)"
    label
    snap
    label-always
    class="q-ma-md"
    @update:model-value="update"
  />
</template>
