
var fortunes = [
    "Победи свои стрази",
    "Рекам нудны истоки",
    "Не бойся неводомого",
    "ТЕбя ждет приятный сюрприз",
    "Будь проще везде, где только можно",
];

exports.getFortune = function() {
    var idx = Math.floor(Math.random() * fortunes.length);
    return fortunes[idx];
};