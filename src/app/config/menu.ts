import { MenuItem } from "../app.component";

export const menu: MenuItem[] = [
    {
        name: 'Attività',
        icon: 'electric_bolt',
        path: 'activity',
        children: [
            {
                name: 'Agenda',
                icon: 'calendar_today',
                path: 'activity/agenda'
            },
            {
                name: 'Interventi',
                icon: 'assignment',
                path: 'activity/interventions'
            },
            {
                name: 'Piano Settimanale',
                icon: 'print',
                path: 'activity/weekly-plan'
            }
        ]
    },
    {
        name: 'Anagrafiche',
        icon: 'inbox',
        path: 'registry',
        children: [
            {
                name: 'Aziende',
                icon: 'business',
                path: 'registry/companies'
            },
            {
                name: 'Assets',
                icon: 'web_asset',
                path: 'registry/assets'
            },
            {
                name: 'Categorie',
                icon: 'sell',
                path: 'registry/categories'
            },
            {
                name: 'Lavorazioni',
                icon: 'work',
                path: 'registry/productions'
            },
            {
                name: 'Strumenti',
                icon: 'construction',
                path: 'registry/instruments'
            },
            {
                name: 'Consumabili',
                icon: 'restaurant',
                path: 'registry/consumables'
            },
            {
                name: 'Voci Spesa',
                icon: 'euro_symbol',
                path: 'registry/expenses'
            }
        ]
    },
    {
        name: 'Statistiche',
        icon: 'bar_chart',
        path: 'statistics',
        children: [
            {
                name: 'Operatori',
                icon: 'engineering',
                path: 'statistics/operators'
            },
            {
                name: 'Consumabili',
                icon: 'restaurant',
                path: 'statistics/consumables'
            },
            {
                name: 'Prenotazioni',
                icon: 'edit_calendar',
                path: 'statistics/reservations'
            },
        ]
    },
    {
        name: 'Impostazioni',
        icon: 'tune',
        path: 'settings',
        children: [
            {
                name: 'Utenti',
                icon: 'manage_accounts',
                path: 'settings/users'
            },
            {
                name: 'Dati Aziendali',
                icon: 'corporate_fare',
                path: 'settings/company-info'
            },
            {
                name: 'Generali',
                icon: 'settings',
                path: 'settings/general'
            }
        ]
    },
]

export const bottomNavMenu: MenuItem[] = [
    {
        name: 'Agenda',
        icon: 'calendar_today',
        path: 'activity/agenda'
    },
    {
        name: 'Prenotazioni',
        icon: 'edit_calendar',
        path: 'statistics/reservations'
    },
    {
        name: 'Generali',
        icon: 'settings',
        path: 'settings/general'
    }
];