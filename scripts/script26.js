let proverbs = new Array('Я с усилием всматриваюсь в пространство. Стало будто немного светлее, и я разглядела другие растения.', 'Стало еще светлее, и на некоторых из них распускаются цветы.', 'Я наклоняюсь посмотреть на крупный пион, как вдруг…');

audioContent('orangery', true);
hiding(console.log, '#block1', 100);
showing(console.log, '#pion', 100);
document.addEventListener('DOMContentLoaded', slider('#button-next'));