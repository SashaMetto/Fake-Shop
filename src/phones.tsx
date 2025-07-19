export let phones: {
  id: string;
  color: string;
  imageUrl: string;
  model: string;
  brand: string;
  price: number;
}[] = [
  {
    id: "1",
    color: "Black",
    imageUrl:
      "https://i-smart.by/image/cache/catalog/iphone14/52841384f9c7331b3611de36cd8bd92d-450x450.jpeg",
    model: "iPhone 14",
    brand: "Apple",
    price: 500,
  },
  {
    id: "2",
    color: "Black",
    imageUrl:
      "https://mobilworld.by/upload/iblock/15e/15edeb572ba3fb5a27f7fe7f28af0129.png",
    model: "iPhone 15",
    brand: "Apple",
    price: 600,
  },
  {
    id: "3",
    color: "Black",
    imageUrl: "https://i-smart.by/image/catalog/iphone16/iphone16-b-01.png",
    model: "iPhone 16",
    brand: "Apple",
    price: 700,
  },
  {
    id: "4",
    color: "White",
    imageUrl:
      "https://www.dimprice.co.uk/image/cache/catalog/Samsung/81cYRUBhwPL._AC_SL1500_-800x800.png",
    model: "Galaxy S21",
    brand: "Samsung",
    price: 450,
  },
  {
    id: "5",
    color: "White",
    imageUrl:
      "https://vuho.com.ua/image/cache/catalog/samsung/111/S22Ultra/wht/5c798ef6f89ab010c1ebe7e6e7d473a6-1000x1000.jpg",
    model: "Galaxy S22",
    brand: "Samsung",
    price: 550,
  },
  {
    id: "6",
    color: "White",
    imageUrl:
      "https://cdn11.bigcommerce.com/s-ahgfi493tw/images/stencil/750x750/products/8352/19293/Flat_White_Pastel_Samsung_Galaxy_S23_Skin__68861.1686469689.jpg?c=2",
    model: "Galaxy S23",
    brand: "Samsung",
    price: 650,
  },
];

export let brands: string[] = [...new Set(phones.map((phone) => phone.brand))];
export let colors: string[] = [...new Set(phones.map((phone) => phone.color))];

export function filterByBrands(brands: string, el: any): boolean {
  if (brands.length <= 0 || brands.includes(el.brand)) {
    return true;
  } else return false;
}

export function filterByColors(colors: string, el: any): boolean {
  if (colors.length <= 0 || colors.includes(el.color)) {
    return true;
  } else return false;
}

export function filterByPrices(from: number, to: number, el: any): boolean {
  if (!from) {
    from = 0;
  }
  if (!to) {
    to = Infinity;
  }
  return el.price >= from && el.price <= to;
}

export function getPhonesById(id: string): any {
  return phones.find((phone) => phone.id === id);
}
