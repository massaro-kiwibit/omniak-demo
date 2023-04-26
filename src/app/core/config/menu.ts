import { MenuItem } from "../models/menu-item.model";

/* 

Previsione
    - Agenda
    - Piano settimanale
    - Scadenzario
Azione
    - Inteventi
    - Timbratura
    - Attiva Totem Timbratura
    - Ultima timbratura per ogni lavoratore
Analisi
    - Operatori
    - Consumabili
    - Prenotazioni
    - Calendario Timbrature
    - Log ultime timbrature
Anagrafiche
    - Aziende
    - Asset
    - ...
    - Utenti
Impostazioni
    - Dati aziendali
    - Scadenzario
    - Interventi
    - Risorse umane

*/

export const menu: MenuItem[] = [
    {
        name: 'Previsione',
        icon: 'calendar_month',
        path: 'prediction',
        children: [
            {
                name: 'Agenda',
                icon: 'calendar_today',
                path: 'prediction/agenda'
            },
            {
                name: 'Scadenziario',
                icon: 'timer',
                path: 'prediction/timetable'
            },
            {
                name: 'Piano Settimanale',
                icon: 'print',
                path: 'prediction/weekly-plan'
            }
        ]
    },
    {
        name: 'Attività',
        icon: 'electric_bolt',
        path: 'activity',
        children: [
            {
                name: 'Inteventi',
                icon: 'assignment',
                path: 'activity/interventions'
            },
            {
                name: 'Timbratura',
                icon: 'approval',
                path: 'activity/stamping'
            },
            {
                name: 'Attiva Totem Timbratura',
                icon: 'question_mark',
                path: 'activity/activate-stamping'
            },
            {
                name: 'Ultima Timbratura per ogni Lavoratore',
                icon: 'question_mark',
                path: 'activity/last-stamping'
            },
        ]
    },
    {
        name: 'Analisi',
        icon: 'monitor_heart',
        path: 'analysis',
        children: [
            {
                name: 'Operatori',
                icon: 'engineering',
                path: 'analysis/operators'
            },
            {
                name: 'Consumabili',
                icon: 'inventory',
                path: 'analysis/consumables'
            },
            {
                name: 'Prenotazioni',
                icon: 'edit_calendar',
                path: 'analysis/reservations'
            },
            {
                name: 'Calendario Timbrature',
                icon: 'question_mark',
                path: 'analysis/stamping-calendar'
            },
            {
                name: 'Log Ultime Timbrature',
                icon: 'question_mark',
                path: 'analysis/stamping-log'
            },
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
                icon: 'foundation',
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
                icon: 'inventory',
                path: 'registry/consumables'
            },
            {
                name: 'Voci Spesa',
                icon: 'euro_symbol',
                path: 'registry/expenses'
            },
            {
                name: 'Utenti',
                icon: 'group',
                path: 'settings/users'
            },
        ]
    },
    {
        name: 'Impostazioni',
        icon: 'tune',
        path: 'settings',
        children: [
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
        name: 'Previsione',
        icon: 'calendar_month',
        path: 'prediction',
    },
    {
        name: 'Attività',
        icon: 'electric_bolt',
        path: 'activity',
    },
    {
        name: 'Analisi',
        icon: 'monitor_heart',
        path: 'analysis',
    }
];