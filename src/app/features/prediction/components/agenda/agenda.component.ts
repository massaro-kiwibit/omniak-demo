import { Component } from '@angular/core';

@Component({
    selector: 'app-agenda',
    templateUrl: './agenda.component.html',
    styleUrls: ['./agenda.component.scss'],
    standalone: false
})
export class AgendaComponent {

    currentYear = new Date().getFullYear();
    currentMonth = new Date().getMonth();

    weeks: Date[][] = [];

    constructor() {
        this.getWeeksOfMonth(this.currentYear, this.currentMonth, 1);
    }

    onMonthChange(month: string) {
        this.currentMonth = Number(month);
        this.getWeeksOfMonth(this.currentYear, this.currentMonth, 1);
    }

    onYearChange(year: string) {
        this.currentYear = Number(year);
        this.getWeeksOfMonth(this.currentYear, this.currentMonth, 1);
    }

    getWeeksOfMonth(year: number, month: number, startOfWeek: number = 0) {
        const weeks: Date[][] = [];
        const firstOfMonth = new Date(year, month, 1);
        const lastOfMonth = new Date(year, month + 1, 0); // Last day of month

        // Find the first day to display (may be in previous month)
        const startShift = (firstOfMonth.getDay() - startOfWeek + 7) % 7;
        let current = new Date(firstOfMonth);
        current.setDate(firstOfMonth.getDate() - startShift);

        // Find the last day to display (may be in next month)
        const endShift = (startOfWeek + 6 - lastOfMonth.getDay() + 7) % 7;
        const endDate = new Date(lastOfMonth);
        endDate.setDate(lastOfMonth.getDate() + endShift);

        let week: Date[] = [];

        while (current <= endDate) {
            week.push(new Date(current));
            if (week.length === 7) {
                weeks.push(week);
                week = [];
            }
            current.setDate(current.getDate() + 1);
        }

        this.weeks = weeks;
    }

    getNumberFromDay(day: Date) {
        return day.getDate();
    }

    getDateInfo(date: Date): DateInfo {
        return {
            date: date.getDate(),
            isOutOfMonth: date.getMonth() !== this.currentMonth,
        };
    }

}

interface DateInfo {
    date: number;
    isOutOfMonth: boolean;
}