function getDaysInMonth (year, mon) {
    return new Date(year, mon, 0).getDate();
}

function createCalendar(id, year, month) {
    const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    const table = document.createElement('table');
    const header = document.createElement('tr');
    header.className = 'header';
    for (const day of days) {
        header.insertAdjacentHTML('beforeend', `<th>${day}</th>`)
    }
    table.append(header);

    const date = new Date (year, month-1);
    let firstDay = date.getDay();
    firstDay = firstDay === 0 ? 6 : firstDay - 1;

    let nextDayToAdd = 1 - firstDay;

    const daysInMonth = getDaysInMonth(year, month);
    while (nextDayToAdd <= daysInMonth) {
        const week = document.createElement('tr');
        for (let i = 0; i < 7; i++) {
            const day = document.createElement('td');
            if (nextDayToAdd > 0 && nextDayToAdd <= daysInMonth) {
                day.innerHTML = nextDayToAdd;
            }
            nextDayToAdd++;
            week.append(day);
        }
        table.append(week);
    }
    return document.querySelector(`#${id}`).append(table);
}

    createCalendar("calendar", 2019, 5);

