import data from './data/data.json';

export default function getItems() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...data.carousel]);
    }, 100);
  });
}
