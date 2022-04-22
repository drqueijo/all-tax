const categories = [
    {
      id: 'comida',
      code: 1,
      name: 'Comida',  
    },
    {
        id: 'roupa',
        code: 2,
        name: 'Roupa'
    },
    {
        id: 'bebida',
        code: 3,
        name: 'Bebida'
    }
];

export function getCategoryByCode(code) {
    return categories.find((o) => o.code === code);
}

export default categories