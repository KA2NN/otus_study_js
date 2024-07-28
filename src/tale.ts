
const kolobok = (char_name: string): string => {
    switch (char_name) {
        case 'дедушка':
            return 'Я от дедушки ушёл';
        case 'заяц':
            return 'Я от зайца ушёл';
        case 'лиса':
            return 'Меня съели';
        default:
            return 'Нет такого персонажа';
    }
}

console.log(kolobok('дедушка'))




