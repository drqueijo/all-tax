const product = [
    {
        id: 'macarrao',
        categoryId: 'comida',
        code: 1,
        name: 'Macarrão'
    },
    {
        id: 'maca',
        categoryId: 'comida',
        code: 2,
        name: 'Maçã'
    },
    {
        id: 'carne',
        categoryId: 'comida',
        code: 3,
        name: 'Carne'
    },
    {
        id: 'camisa',
        categoryId: 'roupa',
        code: 4,
        name: 'Camisa'  
    },
    {
        id: 'calca',
        categoryId: 'roupa',
        code: 5,
        name: 'Calça'  
    },
    {
        id: 'sapato',
        categoryId: 'roupa',
        code: 6,
        name: 'Sapato'  
    },
    {
        id: 'agua',
        categoryId: 'bebida',
        code: 7,
        name: 'Agua'  
    },
    {
        id: 'suco',
        categoryId: 'bebida',
        code: 8,
        name: 'Suco'  
    },
    {
        id: 'leite',
        categoryId: 'bebida',
        code: 9,
        name: 'Leite'  
    },
]

export function getProductByCode(code) {
    return product.find((o) => o.code === code);
}

export default product;