// // Создаём массив, содержащий название и цену
// const goods = [
// 	{ title: 'Shirt', price: 150 },
// 	{ title: 'Socks', price: 50 },
// 	{ title: 'Jacket', price: 350 },
// 	{ title: 'Shoes', price: 250 },
// ];

// // Подключаемся к классу на странице HTML
// const goodsListEl = document.querySelector('.goods-list');


// // Создаём разметку с помощью стрелочной функции
// const renderGoodsItem = ({ title, price }) => {
// 	return `<div class="goods-item"><div class="image"></div><h3>${title}</h3><p>${price}</p></div>`;
// };


// // стрелочная функция
// /**
//  * 
//  * @param {list} параметр связывающий с массивом 
//  */
// const renderGoodsList = (list = goods) => {
// 	let goodsList = list.map(
// 		item => renderGoodsItem(item)
// 	).join('');

// 	goodsListEl.insertAdjacentHTML('beforeend', goodsList);
// }

// // вызов функции
// renderGoodsList();

class GoodsItem {
	constructor(title, price) {
		this.title = title;
		this.price = price;
	}
	render() {
		return `<div class="goods-item"><div class="image"></div><h3>${this.title}</h3><p>${this.price}</p><button class='cart-button padding'>Добавить</button></div>`;
	}
}


class GoodsList {
	constructor() {
		this.goods = [];
	}
	fetchGoods() {
		this.goods = [
		{ title: 'Shirt', price: 150 },
		{ title: 'Socks', price: 50 },
		{ title: 'Jacket', price: 350 },
		{ title: 'Shoes', price: 250 },
		];
	}
	render() {
		let listHtml = '';
		this.goods.forEach(good => {
			const goodItem = new GoodsItem(good.title, good.price);
			listHtml += goodItem.render();
		});
		document.querySelector('.goods-list').innerHTML = listHtml;
	}

	// метод вывода итоговой стоимости
	calcTotalSum() {
		let totalPrice = 0;
		this.goods.forEach((good) => {
			if(good.price !== undefined) {
				totalPrice += good.price;
				//посмотри в консоль
				console.log(good.price);
			}
		});
		let totalSumBox = "Все товары на сумму: $" + totalPrice;
		document.querySelector('.goods-total').innerHTML = totalSumBox;
	}

}




const list = new GoodsList();
list.fetchGoods();
list.render();
list.calcTotalSum();