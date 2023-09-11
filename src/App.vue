<script setup lang="ts">
import {
  SynButton,
  SynButtonVariant,
  SynFileUpload,
  SynTable,
  SynDatePicker,
  SynChipLanguage,
} from "@syntax-design/syntax-ui";
import {switchLang, switchTimezone} from "@/i18n";
import {inject, ref} from "vue";
import {actionBarProps, tableBodyProps, tableHeaderProps} from "@/table";

const files = ref([]);
const onUpdate = ((val: unknown[]) => {
  files.value = val;
})

const date = ref(null);
const locale = inject('synLocale');
const timezone = inject('synTimezone');

</script>

<template>
  <SynButton v-if="true" @click="switchLang" :variant="SynButtonVariant.primary">Switch lang</SynButton>
  <SynButton v-if="true" @click="switchTimezone" :variant="SynButtonVariant.primary">Switch timezone</SynButton>
  <div>Locale: {{ locale }}</div>
  <div>Timezone: {{ timezone }}</div>
  <div>Selected date: {{ date }}</div>
<!--  <div>translations: {{ translations }}</div>-->
  <SynFileUpload v-if="true" @update:model-value="onUpdate" :model-value="files" multiple :translations="{ uploadLabel: 'Test' }" />
  <SynDatePicker inline v-if="true" v-model="date" timePicker />
  <SynTable v-if="false" :action-bar-props="actionBarProps" :table-body-props="tableBodyProps" :table-header-props="tableHeaderProps" full-width local-data-manipulation />
</template>
