function describeWeather(code) {
    switch (code) {
        case 'SQ':
            return 'Шквал';
        case 'PO':
            return 'Пыльный вихрь';
        case 'FC':
            return 'Торнадо';
        case 'BR':
            return 'Дымка (видимость от 1 до 9 км)';
        case 'HZ':
            return 'Мгла (видимость менее 10 км)';
        case 'FU':
            return 'Дым (видимость менее 10 км)';
        case 'DS':
            return 'Пыльная буря (видимость менее 10 км)';
        case 'SS':
            return 'Песчаная буря (видимость менее 10 км)';
        default:
            return 'Неизвестный код погоды';
    }
}

// Пример использования:
console.log(describeWeather('FC')); // Выведет: Торнадо
console.log(describeWeather('HZ')); // Выведет: Мгла (видимость менее 10 км)
console.log(describeWeather('XX')); // Выведет: Неизвестный код погоды