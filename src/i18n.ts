import {ref} from "vue";

const translations = ref({
    'en-US': {
        datePicker: {
            header: {
                timePlaceholder: 'Start time',
            }
        },
        fileUpload: {
            uploadLabel: 'Upload',
            noFileLabel: 'No file chosen',
            selectedFilesLabel: (count: number) => `${count} files`
        },
        table: {
            actionBar: {
                searchPlaceholder: 'Search...',
            },
            pagination: {
                prefix: (from: number, to: number, totalItems: number) => `Showing ${from}-${to} of ${totalItems} results`,
            },
            elementsCount: {
                singular: 'element',
                plural: 'elements',
            },
        }
    },
    'cs-CZ': {
        datePicker: {
            header: {
                timePlaceholder: 'Start time bbbbbbbbbbb',
            }
        },
        fileUpload: {
            uploadLabel: 'Up',
            noFileLabel: 'No file chosen aaaaaaaaaa',
            selectedFilesLabel: (count: number) => `${count} files aaaaaaaaaaaa`
        },
    }
});

export type AllowedLocales = 'en-US' | 'cs-CZ';

const locale = ref<AllowedLocales>('en-US');

const switchLang = () => {
    locale.value = locale.value === 'en-US' ? 'cs-CZ' : 'en-US';
};

const timezone = ref('America/New_York');

const switchTimezone = () => {
    timezone.value = timezone.value === 'America/New_York' ? 'Australia/Sydney' : 'America/New_York';
}

export {
    locale,
    timezone,
    translations,
    switchLang,
    switchTimezone,
};
