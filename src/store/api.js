// Мок данных (вместо реального API)
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Футболка белая', size: 'S', price: 50, image: '/img/tshirt.jpg' },
        { id: 2, name: 'Юбка чёрная', size: 'M', price: 80, image: '/img/skirt.jpg' },
        { id: 3, name: 'Платье вечернее', size: 'L', price: 150, image: '/img/dress.jpg' },
        { id: 4, name: 'Джинсы синие', size: 'XS', price: 90, image: '/img/jeans.jpg' },
        { id: 5, name: 'Свитер оверсайз', size: 'M', price: 70, image: '/img/sweater.jpg' },
      ]);
    }, 300);
  });
};
