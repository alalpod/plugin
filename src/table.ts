import {
    SortDirection,
    SynBadgeVariant,
    SynTableActionBarProps,
    SynTableBodyProps,
    SynTableHeaderProps
} from "@syntax-design/syntax-ui";

const tableData = [
    { id: 'test-1', firstName: 'James', lastName: 'Kirk', status: 'variant-1', date: '2023-01-27 11:43 GMT', nextDate: '2023-08-04 15:00 GMT', age: 1, badgeTooltip: 'Description of the status' },
    { id: 'test-2', firstName: 'Andrew', lastName: 'Serc', status: 'variant-2', date: '2023-01-30 10:57 GMT', nextDate: '2023-02-21 07:00 GMT', age: 2 },
    { id: 'test-3', firstName: 'Tobias', lastName: 'Kovas', status: 'variant-3', date: '2023-01-31 11:17 GMT', nextDate: '2023-02-11 09:00 GMT', age: 3 },
    { id: 'test-4', firstName: 'Bibi', lastName: 'August', status: 'variant-4', date: '2023-02-11 11:17 GMT', nextDate: '2023-03-21 21:00 GMT', age: 4 },
    { id: 'test-5', firstName: 'Arnold1', lastName: 'Bigowski1', status: 'variant-1', date: '2022-11-31 10:10 GMT', nextDate: '2023-12-11 01:10 GMT', age: 5 },
    { id: 'test-6', firstName: 'Arnold2', lastName: 'Bigowski2', status: 'variant-2', date: '2022-12-31 11:27 GMT', nextDate: '2023-01-12 11:00 GMT', age: 6 },
    { id: 'test-7', firstName: 'Arnold3', lastName: 'Bigowski3', status: 'variant-1', date: '2022-03-11 10:09 GMT', nextDate: '2023-04-13 13:00 GMT', age: 7 },
    { id: 'test-8', firstName: 'Arnold4', lastName: 'Bigowski4', status: 'variant-2', date: '2022-02-10 10:17 GMT', nextDate: '2023-03-14 10:04 GMT', age: 11 },
    { id: 'test-9', firstName: 'Arnold5', lastName: 'Bigowski5', status: 'variant-2', date: '2022-01-18 11:17 GMT', nextDate: '2022-02-15 11:00 GMT', age: 12 },
    { id: 'test-10', firstName: 'Arnold6', lastName: 'Bigowski6', status: 'variant-1', date: '2022-05-05 12:17 GMT', nextDate: '2022-06-16 21:00 GMT', age: 13 },
    { id: 'test-11', firstName: 'Arnold7', lastName: 'Bigowski7', status: 'variant-2', date: '2022-09-13 13:17 GMT', nextDate: '2022-10-17 09:00 GMT', age: 14 },
    { id: 'test-12', firstName: 'Arnold8', lastName: 'Bigowski8', status: 'variant-1', date: '2022-01-01 14:17 GMT', nextDate: '2023-03-18 21:00 GMT', age: 15 },
    { id: 'test-13', firstName: 'Arnold9', lastName: 'Bigowski9', status: 'variant-2', date: '2022-07-01 15:17 GMT', nextDate: '2023-03-19 21:00 GMT', age: 16 },
    { id: 'test-14', firstName: 'Arnold10', lastName: 'Bigowski10', status: 'variant-2', date: '2022-06-20 16:17 GMT', nextDate: '2022-08-20 01:00 GMT', age: 17 },
    { id: 'test-15', firstName: 'Arnold11', lastName: 'Bigowski11', status: 'variant-1', date: '2022-08-14 17:17 GMT', nextDate: '2022-09-21 21:30 GMT', age: 18 },
    { id: 'test-16', firstName: 'Arnold12', lastName: 'Bigowski12', status: 'variant-2', date: '2022-02-31 18:17 GMT', nextDate: '2022-03-10 18:00 GMT', age: 19 },
    { id: 'test-17', firstName: 'Arnold13', lastName: 'Bigowski13', status: 'variant-1', date: '2022-03-31 19:17 GMT', nextDate: '2022-06-23 02:00 GMT', age: 21 },
    { id: 'test-18', firstName: 'Arnold14', lastName: 'Bigowski14', status: 'variant-2', date: '2023-02-01 20:17 GMT', nextDate: '2023-03-24 21:00 GMT', age: 22 },
    { id: 'test-19', firstName: 'Arnold15', lastName: 'Bigowski15', status: 'variant-2', date: '2023-01-12 21:17 GMT', nextDate: '2023-03-25 09:00 GMT', age: 23 },
    { id: 'test-20', firstName: 'Arnold16', lastName: 'Bigowski16', status: 'variant-1', date: '2020-11-17 22:17 GMT', nextDate: '2020-12-01 04:00 GMT', age: 24 },
    { id: 'test-21', firstName: 'Arnold17', lastName: 'Bigowski17', status: 'variant-2', date: '2021-01-31 23:17 GMT', nextDate: '2021-02-02 21:19 GMT', age: 25 },
    { id: 'test-22', firstName: 'Arnold18', lastName: 'Bigowski18', status: 'variant-1', date: '2022-01-10 24:17 GMT', nextDate: '2022-03-03 11:00 GMT', age: 26 },
    { id: 'test-23', firstName: 'Arnold19', lastName: 'Bigowski19', status: 'variant-2', date: '2020-02-03 01:10 GMT', nextDate: '2020-03-19 09:00 GMT', age: 37 },
    { id: 'test-24', firstName: 'Arnold20', lastName: 'Bigowski20', status: 'variant-2', date: '2021-01-04 11:11 GMT', nextDate: '2021-02-10 09:00 GMT', age: 44 },
    { id: 'test-25', firstName: 'Arnold21', lastName: 'Bigowski21', status: 'variant-1', date: '2022-01-05 11:12 GMT', nextDate: '2022-03-06 03:00 GMT', age: 33 },
    { id: 'test-26', firstName: 'Arnold22', lastName: 'Bigowski22', status: 'variant-2', date: '2022-01-07 11:13 GMT', nextDate: '2022-01-11 09:09 GMT', age: 22 },
    { id: 'test-27', firstName: 'Arnold23', lastName: 'Bigowski23', status: 'variant-1', date: '2022-01-08 11:14 GMT', nextDate: '2022-02-20 20:09 GMT', age: 44 },
    { id: 'test-28', firstName: 'Arnold24', lastName: 'Bigowski24', status: 'variant-2', date: '2022-01-09 11:15 GMT', nextDate: '2022-01-11 20:09 GMT', age: 55 },
    { id: 'test-29', firstName: 'Arnold25', lastName: 'Bigowski25', status: 'variant-2', date: '2022-04-10 11:16 GMT', nextDate: '2022-05-07 22:19 GMT', age: 52 },
    { id: 'test-30', firstName: 'Arnold26', lastName: 'Bigowski26', status: 'variant-1', date: '2022-04-11 11:17 GMT', nextDate: '2022-05-29 13:15 GMT', age: 50 },
    { id: 'test-31', firstName: 'Arnold27', lastName: 'Bigowski27', status: 'variant-2', date: '2022-04-12 11:18 GMT', nextDate: '2022-04-13 12:19 GMT', age: 56 },
    { id: 'test-32', firstName: 'Arnold28', lastName: 'Bigowski28', status: 'variant-1', date: '2021-05-10 11:19 GMT', nextDate: '2022-06-22 19:19 GMT', age: 69 },
    { id: 'test-33', firstName: 'Arnold29', lastName: 'Bigowski29', status: 'variant-2', date: '2022-11-09 11:20 GMT', nextDate: '2022-12-07 18:10 GMT', age: 98 },
    { id: 'test-34', firstName: 'Arnold30', lastName: 'Bigowski30', status: 'variant-2', date: '2020-08-04 11:21 GMT', nextDate: '2020-09-07 16:11 GMT', age: 80 },
    { id: 'test-35', firstName: 'Arnold31', lastName: 'Bigowski31', status: 'variant-1', date: '2022-01-07 03:22 GMT', nextDate: '2022-02-07 02:14 GMT', age: 35 },
    { id: 'test-36', firstName: 'Arnold32', lastName: 'Bigowski32', status: 'variant-2', date: '2023-01-31 11:23 GMT', nextDate: '2023-02-17 13:09 GMT', age: 35 },
    { id: 'test-37', firstName: 'Arnold33', lastName: 'Bigowski33', status: 'variant-1', date: '2023-01-31 11:23 GMT', nextDate: '2023-02-07 09:09 GMT', age: 35 },
    { id: 'test-38', firstName: 'Arnold34', lastName: 'Bigowski34', status: 'variant-2', date: '2023-01-31 11:30 GMT', nextDate: '2023-02-07 09:09 GMT', age: 35 },
    { id: 'test-39', firstName: 'Arnold35', lastName: 'Bigowski35', status: 'variant-2', date: '2023-01-31 11:01 GMT', nextDate: '2023-02-07 09:09 GMT', age: 35 },
    { id: 'test-40', firstName: 'Arnold36', lastName: 'Bigowski36', status: 'variant-1', date: '2023-01-31 11:03 GMT', nextDate: '2023-02-07 09:09 GMT', age: 35 },
    { id: 'test-41', firstName: 'Arnold37', lastName: 'Bigowski37', status: 'variant-2', date: '2022-01-31 11:05 GMT', nextDate: '2022-02-07 09:09 GMT', age: 35 },
    { id: 'test-42', firstName: 'Arnold38', lastName: 'Bigowski38', status: 'variant-1', date: '2022-01-31 11:06 GMT', nextDate: '2022-02-07 09:09 GMT', age: 35 },
    { id: 'test-43', firstName: 'Arnold39', lastName: 'Bigowski39', status: 'variant-2', date: '2022-01-31 11:07 GMT', nextDate: '2022-02-07 09:09 GMT', age: 35 },
    { id: 'test-44', firstName: 'Arnold40', lastName: 'Bigowski40', status: 'variant-2', date: '2022-01-31 11:08 GMT', nextDate: '2022-02-07 09:09 GMT', age: 35 },
    { id: 'test-45', firstName: 'Arnold41', lastName: 'Bigowski41', status: 'variant-1', date: '2022-01-31 11:18 GMT', nextDate: '2022-02-07 09:09 GMT', age: 35 },
    { id: 'test-46', firstName: 'Arnold42', lastName: 'Bigowski42', status: 'variant-2', date: '2022-01-31 11:19 GMT', nextDate: '2022-02-07 09:09 GMT', age: 35 },
    { id: 'test-47', firstName: 'Arnold43', lastName: 'Bigowski43', status: 'variant-1', date: '2022-01-31 11:20 GMT', nextDate: '2022-02-07 09:09 GMT', age: 35 },
    { id: 'test-48', firstName: 'Arnold44', lastName: 'Bigowski44', status: 'variant-2', date: '2022-11-31 11:21 GMT', nextDate: '2022-12-07 09:09 GMT', age: 35 },
    { id: 'test-49', firstName: 'Arnold45', lastName: 'Bigowski45', status: 'variant-2', date: '2022-02-31 11:22 GMT', nextDate: '2022-03-07 09:09 GMT', age: 35 },
    { id: 'test-50', firstName: 'Arnold46', lastName: 'Bigowski46', status: 'variant-1', date: '2022-03-31 11:23 GMT', nextDate: '2022-04-07 18:09 GMT', age: 65 },
    { id: 'test-51', firstName: 'Arnold47', lastName: 'Bigowski47', status: 'variant-2', date: '2022-04-31 11:23 GMT', nextDate: '2022-05-16 19:17 GMT', age: 2 },
    { id: 'test-52', firstName: 'Arnold48', lastName: 'Bigowski48', status: 'variant-1', date: '2022-05-31 11:24 GMT', nextDate: '2022-06-17 16:16 GMT', age: 23 },
    { id: 'test-53', firstName: 'Arnold49', lastName: 'Bigowski49', status: 'variant-2', date: '2022-06-31 11:25 GMT', nextDate: '2022-07-07 09:09 GMT', age: 23 },
    { id: 'test-54', firstName: 'Arnold50', lastName: 'Bigowski50', status: 'variant-2', date: '2022-07-31 11:26 GMT', nextDate: '2022-08-07 09:09 GMT', age: 23 },
    { id: 'test-55', firstName: 'Arnold51', lastName: 'Bigowski51', status: 'variant-1', date: '2022-08-31 11:17 GMT', nextDate: '2022-09-07 09:09 GMT', age: 26 },
    { id: 'test-56', firstName: 'James', lastName: 'Covichuck', status: 'variant-3', date: '2022-09-31 11:18 GMT', nextDate: '2022-10-07 09:09 GMT', age: 24 },
    { id: 'test-57', firstName: 'Matthew', lastName: 'Covichuck', status: 'variant-4', date: '2022-10-31 11:29 GMT', nextDate: '2022-11-07 09:09 GMT', age: 19 },
    { id: 'test-58', firstName: 'Sarah', lastName: 'Covichuck', status: 'variant-3', date: '2023-11-31 11:31 GMT', nextDate: '2023-12-07 09:09 GMT', age: 41 },
    { id: 'test-59', firstName: 'Xavier', lastName: 'Novachuck', status: 'variant-2', date: '2023-12-31 11:32 GMT', nextDate: '2024-01-07 09:09 GMT', age: 33 },
];

const tableHeaderProps: SynTableHeaderProps = {
    columns: [
        {
            id: 'firstName',
            label: 'First name',
            isBold: true,
            isClickable: true,
            hidden: false,
        },
        {
            id: 'lastName',
            label: 'Last name',
            tooltip: 'This is a random tooltip, for testing purposes',
            hidden: false,
        },
        {
            id: 'status',
            label: 'Status',
            badgeVariants: {
                'variant-1': {
                    label: 'Not paid',
                    variant: SynBadgeVariant.red,
                },
                'variant-2': {
                    label: 'Voided',
                    variant: SynBadgeVariant.grey,
                },
                'variant-3': {
                    label: 'Posted',
                    variant: SynBadgeVariant.blue,
                },
                'variant-4': {
                    label: 'Paid',
                    variant: SynBadgeVariant.green,
                },
            },
            hidden: false,
        },
    ],
    sortOnColumns: ['firstName', 'lastName'],
    sortDto: {
        activeColumn: '',
        sortDirection: SortDirection.ASC,
    },
};

const actionBarProps: SynTableActionBarProps = {
    showElementsCount: true,
    searchOnColumns:['firstName', 'lastName'],
}

const tableBodyProps: SynTableBodyProps = {
    list: tableData,
    pagination: {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: 59,
        totalPages: 12,
    }
}

export {
    actionBarProps,
    tableBodyProps,
    tableHeaderProps,
}