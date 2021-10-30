function order(...drink) {
    let price = 0;
    let sum = 0;
    for(i = 0; i < drink.length; i++) {
    switch (drink[i]) {
        case 'эспрессо': price = 25;
            break;
        case 'капучино': price = 30;
            break;
        case 'латте': price = 40;
            break;
        case 'горячий шоколад': price = 15;
            break;
    }
    sum += price;
  }
  document.write("Ваш заказ: " + drink + "." + "Всего: " + sum + ".");
}
const myorder = order('эспрессо', 'капучино');
document.write(myorder);