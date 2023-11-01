<template>
  <div class="row justify-center">
    <q-page
      class="q-pa-md fit column wrap justify-start items-stretch max-width-1023-px"
    >
      <form-section :label="t('species.model.name')">
        <q-input v-model="form.name" outlined class="q-mb-md" />
      </form-section>
      <form-section :label="t('species.model.height')">
        <div class="row q-gutter-md">
          <div class="col">
            <q-input
              v-model.number="form.minHeight"
              :label="t('species.model.minHeight')"
              type="number"
              min="0"
              max="10000"
              step="5"
              outlined
            />
          </div>
          <div class="col">
            <q-input
              v-model.number="form.maxHeight"
              :label="t('species.model.maxHeight')"
              type="number"
              min="0"
              max="10000"
              step="5"
              outlined
            />
          </div>
        </div>
      </form-section>

      <form-section :label="t('species.model.flowerColor')">
        <flower-color-picker v-model="form.flowerColor" />
      </form-section>

      <form-section :label="t('species.model.flowering')">
        <months-picker v-model="form.flowering" />
      </form-section>

      <form-section :label="t('species.model.flowerPicking')">
        <months-picker v-model="form.flowerPicking" />
      </form-section>

      <form-section :label="t('species.model.leafPicking')">
        <months-picker v-model="form.leafPicking" />
      </form-section>

      <form-section :label="t('species.model.fruitPicking')">
        <months-picker v-model="form.fruitPicking" />
      </form-section>

      <form-section :label="t('species.model.seedPicking')">
        <months-picker v-model="form.seedPicking" />
      </form-section>
      <div class="row justify-center">
        <q-btn
          size="lg"
          color="primary"
          :label="t('species.speciesCreate.submitButtonLabel')"
          class="q-mt-md"
        />
      </div>
    </q-page>
  </div>
</template>

<script setup lang="ts">
import type { Species } from 'src/types/models/species';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { QInput } from 'quasar';
import MonthsPicker from 'src/components/MonthsPicker.vue';
import FlowerColorPicker from './FlowerColorPicker.vue';
import FormSection from 'src/components/FormSection.vue';

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

<style scoped>
.max-width-1023-px {
  max-width: 1023px;
}
</style>
