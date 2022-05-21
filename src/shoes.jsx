export let sneakers = [
    {
      id: "1",
      colorway: "Pine Green",
      imageUrl:
        "https://images.mcan.sh/b_auto,c_pad,f_auto,h_400,q_auto,w_400/v1/shoes/bkkj0lqzlwlwdwtofqxs",
      model: "Blazer Low 77 Vintage",
      brand: "Nike",
      price: 70,
    },
    {
      id: "2",
      colorway: "Reverse Infrared",
      imageUrl:
        "https://images.mcan.sh/b_auto,c_pad,f_auto,h_400,q_auto,w_400/v1/shoes/RPlzC_CBHjiMM4dr90gdU",
      model: "Air Max 90",
      brand: "Nike",
      price: 110,
    },
    {
      id: "3",
      colorway: "White/Black/Desert",
      imageUrl:
        "https://images.mcan.sh/b_auto,c_pad,f_auto,h_400,q_auto,w_400/v1/shoes/0bf9336b-03c9-4cbd-b482-f4e80b770582",
      model: "Court Legacy",
      brand: "Nike",
      price: 50,
    },
    {
      id: "5",
      colorway: "Beluga 2.0",
      imageUrl:
        "https://images.mcan.sh/b_auto,c_pad,f_auto,h_400,q_auto,w_400/v1/shoes/irxakb1ij0uzmcvn9szo",
      model: "Yeezy 350 v2",
      brand: "Adidas",
      price: 220,
    },
    {
      id: "6",
      colorway: "Pumpkin Spice",
      imageUrl:
        "https://images.mcan.sh/b_auto,c_pad,f_auto,h_400,q_auto,w_400/v1/shoes/g9tjjjdn476nhou1c1dj",
      model: "Grid SD",
      brand: "Saucony",
      price: 40,
    },
    {
      id: "7",
      colorway: "Golden Coast",
      imageUrl:
        "https://images.mcan.sh/b_auto,c_pad,f_auto,h_400,q_auto,w_400/v1/shoes/erg1lxa8x29h1wtbog9a",
      model: "Checkerboard Slip-On",
      brand: "Vans",
      price: 60,
    },
    {
      id: "8",
      colorway: "Have a Nike Day",
      imageUrl:
        "https://images.mcan.sh/b_auto,c_pad,f_auto,h_400,q_auto,w_400/v1/shoes/u4z27k4wyzr7bxatlfgj",
      model: "Air Max 1",
      brand: "Nike",
      price: 150,
    },
  ];

  export let brands = [...new Set(sneakers.map((sneaker) => sneaker.brand))];
  export let prices = [...new Set(sneakers.map((sneaker) => sneaker.price))];

  export function filterByBrand(brand) {
    if(!brand) {
      return sneakers
    }
    else {  
    return sneakers.filter(
      (sneaker) => sneaker.brand.toLowerCase() === brand.toLowerCase()
    );
    }
  }

  export function filterByPrice(from, to) {
    return sneakers.filter(
      (sneaker) => {
        return (sneaker.price >= from && sneaker.price <= to)
      }
    );
  }

  export function getSneakerById(id) {
    return sneakers.find(sneaker => sneaker.id === id);
  }