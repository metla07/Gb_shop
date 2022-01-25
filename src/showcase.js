const $showcase = document.querySelector('.showcase');

const renderGoodsItem = ({ title, price }) => {
  return `<div class="goods-item">
            <img src="https://placeimg.com/200/200/nature/'${price}'" alt="foto-item" width="200" height="200">    
            <h3>${title}</h3>
            <p>${price}</p>
            <a href="#" class="btn_a_item" target="">Buy</a>
          </div>`;
};

const renderGoodsList = (list) => {
  let goodsList = list.map(
          (item) =>  {
              return renderGoodsItem(item)
          }
      ).join('');

  $showcase.insertAdjacentHTML('beforeend', goodsList);
}

export default renderGoodsList