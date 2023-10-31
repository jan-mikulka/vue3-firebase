<template>
  <q-page class="row items-center justify-evenly">
    <month-picker
      v-model="form.flowering"
      :label="t('species.model.flowering')"
    />
  </q-page>
</template>

<script setup lang="ts">
import type { Species } from 'src/types/models/species';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import MonthPicker from 'src/components/MonthPicker.vue';

const { t } = useI18n();

const form = ref<Omit<Species, 'id'>>({
  name: '',
  minHeight: 0,
  maxHeight: 0,
  flowerColor: undefined,
  flowering: [],
  leafPicking: [],
  flowerPicking: [],
  fruitPicking: [],
  seedPicking: [],
});
</script>
