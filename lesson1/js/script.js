// Создаём массив, содержащий название и цену
const goods = [
	{ title: 'Shirt', price: 150 },
	{ title: 'Socks', price: 50 },
	{ title: 'Jacket', price: 350 },
	{ title: 'Shoes', price: 250 },
];

// Подключаемся к классу на странице HTML
const goodsListEl = document.querySelector('.goods-list');


// Создаём разметку с помощью стрелочной функции
const renderGoodsItem = ({ title, price }) => {
	return `<div class="goods-item"><div class="image"></div><h3>${title}</h3><p>${price}</p></div>`;
};


// стрелочная функция
/**
 * 
 * @param {list} параметр связывающий с массивом 
 */
const renderGoodsList = (list = goods) => {
	let goodsList = list.map(
		item => renderGoodsItem(item)
	).join('');

	goodsListEl.insertAdjacentHTML('beforeend', goodsList);
}

// вызов функции
renderGoodsList();