export let sneakers: {
  id: string;
  colorway: string;
  imageUrl: string;
  model: string;
  brand: string;
  price: number;
}[] = [
  {
    id: "shoe-1",
    colorway: "Pine Green",
    imageUrl:
      "https://images.mcan.sh/b_auto,c_pad,f_auto,h_400,q_auto,w_400/v1/shoes/bkkj0lqzlwlwdwtofqxs",
    model: "Blazer Low 77 Vintage",
    brand: "Nike",
    price: 70,
  },
  {
    id: "shoe-2",
    colorway: "Reverse Infrared",
    imageUrl:
      "https://images.mcan.sh/b_auto,c_pad,f_auto,h_400,q_auto,w_400/v1/shoes/RPlzC_CBHjiMM4dr90gdU",
    model: "Air Max 90",
    brand: "Nike",
    price: 110,
  },
  {
    id: "shoe-3",
    colorway: "White/Black/Desert",
    imageUrl:
      "https://images.mcan.sh/b_auto,c_pad,f_auto,h_400,q_auto,w_400/v1/shoes/0bf9336b-03c9-4cbd-b482-f4e80b770582",
    model: "Court Legacy",
    brand: "Nike",
    price: 50,
  },
  {
    id: "shoe-4",
    colorway: "Beluga 2.0",
    imageUrl:
      "https://images.mcan.sh/b_auto,c_pad,f_auto,h_400,q_auto,w_400/v1/shoes/irxakb1ij0uzmcvn9szo",
    model: "Yeezy 350 v2",
    brand: "Adidas",
    price: 220,
  },
  {
    id: "shoe-5",
    colorway: "Pumpkin Spice",
    imageUrl:
      "https://images.mcan.sh/b_auto,c_pad,f_auto,h_400,q_auto,w_400/v1/shoes/g9tjjjdn476nhou1c1dj",
    model: "Grid SD",
    brand: "Saucony",
    price: 40,
  },
  {
    id: "shoe-6",
    colorway: "Golden Coast",
    imageUrl:
      "https://images.mcan.sh/b_auto,c_pad,f_auto,h_400,q_auto,w_400/v1/shoes/erg1lxa8x29h1wtbog9a",
    model: "Checkerboard Slip-On",
    brand: "Vans",
    price: 60,
  },
  {
    id: "shoe-7",
    colorway: "Have a Nike Day",
    imageUrl:
      "https://images.mcan.sh/b_auto,c_pad,f_auto,h_400,q_auto,w_400/v1/shoes/u4z27k4wyzr7bxatlfgj",
    model: "Air Max 1",
    brand: "Nike",
    price: 150,
  },
];

export const brands = [...new Set(sneakers.map((sneaker) => sneaker.brand))];
export const colors = [...new Set(sneakers.map((sneaker) => sneaker.colorway))];

export function filterByBrands(brands: string, el: any) {
  if (brands.length <= 0) {
    return true;
  } else if (brands.includes(el.brand)) {
    return true;
  } else return false;
}

export function filterByColors(colors: string, el: any) {
  if (colors.length <= 0) {
    return true;
  } else if (colors.includes(el.colorway)) {
    return true;
  } else return false;
}

export function filterByPrices(from: number, to: number, el: any) {
  if (!from) {
    from = 0;
  }
  if (!to) {
    to = Infinity;
  }
  return el.price >= from && el.price <= to;
}

export function getSneakerById(id: string) {
  return sneakers.find((sneaker) => sneaker.id === id);
}
