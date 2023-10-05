import { MenuItem } from "../models/menu-item.model";

export const operatorMenu: MenuItem[] = [
    {
        name: 'Previsione',
        icon: 'calendar_month',
        path: 'prediction',
        mobile: true,
        children: [
            {
                name: 'Agenda',
                icon: 'calendar_today',
                path: 'prediction/agenda'
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
        mobile: true,
        children: [
            {
                name: 'Inteventi',
                icon: 'assignment',
                path: 'activity/interventions'
            },
        ]
    },
    {
        name: 'Analisi',
        icon: 'monitor_heart',
        path: 'analysis',
        mobile: true,
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
        ]
    }
];