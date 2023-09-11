import './assets/main.css'
import '@syntax-design/syntax-css-toolkit/dist/reset.css';
import '@syntax-design/syntax-tokens/dist/themes/all.css';
import '@syntax-design/syntax-ui/dist/style.css';
import {SynPlugin, SynPluginOptions} from "@syntax-design/syntax-ui";
import {AllowedLocales, locale, timezone, translations} from './i18n';

import {createApp, reactive, watch} from 'vue'
import App from './App.vue'

const app = createApp(App);

const options: SynPluginOptions = reactive({
    translations: translations.value[locale.value as AllowedLocales],
    locale: locale.value,
    timezone: timezone.value,
});

watch(locale, (newLocale: AllowedLocales) => {
    options.locale = newLocale;
    options.translations = translations.value[newLocale];
})

watch(timezone, (newTz: string) => {
    options.timezone = newTz;
})

app.use(SynPlugin, options);

app.mount('#app');
