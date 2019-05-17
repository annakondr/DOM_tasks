function createCalendar(id, year, month) {
    const element = document.getElementById(id);
    const date = new Date(year, month - 1);
    const headOfTable = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    let table = '<table><tr>'; // I recommend you to use `document.createElement` instead this construction. It's better to read and debug

    for (let i=0; i < headOfTable.length; i++) {
        table += `<th>${headOfTable[i]}</th>`
    }
    table += '</tr><tr>';
        // rename function. You have default method getDay
    function getDay(weekDay) { // получить номер дня недели, от 0(пн) до 6(вс)
        let day = weekDay.getDay();
        if (day === 0) {
            day = 7;
        }
        return day - 1;
    }

    for (let i = 0; i < getDay(date); i++) {
        table += '<td></td>';
    }

    while (date.getMonth() === month - 1) {
        table += `<td>${ date.getDate()}</td>`;
        if (getDay(date) % 7 === 6) {
            table += '</tr><tr>';
        }
        date.setDate(date.getDate() + 1);
    }

    if (getDay(date) !== 0) {
        for (var i = getDay(date); i < 7; i++) { // use let instead var
            table += '<td></td>';
        }
    }
    table += '</tr></table>';

    element.innerHTML = table;
}

createCalendar("calendar", 2012, 9);
