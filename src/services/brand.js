const brand = [
    {
      id: 'marcamacarrao1',
      productId:'macarrao',
      code: 1,
      name: 'Marca Macarrão 1',  
    },
    {
      id: 'marcamacarrao2',
      productId:'macarrao',
      code: 2,
      name: 'Marca Macarrão 2',  
    },
    {
      id: 'marcamacarrao3',
      productId:'macarrao',
      code: 3,
      name: 'Marca Macarrão 3',  
    },
    {
      id: 'marcamaca1',
      productId: 'maca',
      code: 4,
      name: 'Marca Maçã 1',  
    },
    {
      id: 'marcamaca2',
      productId: 'maca',
      code: 5,
      name: 'Marca Maçã 2',  
    },
    {
      id: 'marcamaca3',
      productId: 'maca',
      code: 6,
      name: 'Marca Maçã 3',  
    },
    {
      id: 'marcacarne1',
      productId: 'carne',
      code: 7,
      name: 'Marca Carne 1',  
    },
    {
      id: 'marcacarne2',
      productId: 'carne',
      code: 8,
      name: 'Marca Carne 2',  
    },
    {
      id: 'marcacarne3',
      productId: 'carne',
      code: 9,
      name: 'Marca Carne 3',  
    },
    {
      id: 'marcacamisa1',
      productId: 'camisa',
      code: 10,
      name: 'Marca Camisa 1',  
    },
    {
      id: 'marcacamisa2',
      productId: 'camisa',
      code: 11,
      name: 'Marca Camisa 2',  
    },
    {
      id: 'marcacamisa3',
      productId: 'camisa',
      code: 12,
      name: 'Marca Camisa 3',  
    },
    {
      id: 'marcacalca1',
      productId: 'calca',
      code: 13,
      name: 'Marca Calça 1',  
    },
    {
      id: 'marcacalca2',
      productId: 'calca',
      code: 14,
      name: 'Marca Calça 2',  
    },
    {
      id: 'marcacalca3',
      productId: 'calca',
      code: 15,
      name: 'Marca Calça 3',  
    },
    {
      id: 'marcasapato1',
      productId: 'sapato',
      code: 16,
      name: 'Marca Sapato 1',  
    },
    {
      id: 'marcasapato2',
      productId: 'sapato',
      code: 17,
      name: 'Marca Sapato 2',  
    },
    {
      id: 'marcasapato3',
      productId: 'sapato',
      code: 18,
      name: 'Marca Sapato 3',  
    },
    {
      id: 'marcasagua1',
      productId: 'agua',
      code: 19,
      name: 'Marca Agua 1',  
    },
    {
      id: 'marcaagua2',
      productId: 'agua',
      code: 20,
      name: 'Marca Agua 2',  
    },
    {
      id: 'marcaagua3',
      productId: 'agua',
      code: 21,
      name: 'Marca Agua 3',  
    },
    {
      id: 'marcasuco1',
      productId: 'suco',
      code: 22,
      name: 'Marca Suco 1',  
    },
    {
      id: 'marcasuco2',
      productId: 'suco',
      code: 23,
      name: 'Marca Agua 2',  
    },
    {
      id: 'marcasuco3',
      productId: 'suco',
      code: 24,
      name: 'Marca Agua 3',  
    },
    {
      id: 'marcaleite1',
      productId: 'leite',
      code: 25,
      name: 'Marca Leite 1',  
    },
    {
      id: 'marcaleite2',
      productId: 'leite',
      code: 26,
      name: 'Marca Leite 2',  
    },
    {
      id: 'marcaleite3',
      productId: 'leite',
      code: 27,
      name: 'Marca Leite 3',  
    },

];

export function getBrandById(id) {
    if(!id) return ''
    return brand.find((o) => o.id === id);
}

export function getBrandByFatherId (id) {
  if(!id) return [];
  return brand.filter((o) => o.productId === id)
}

export default brand