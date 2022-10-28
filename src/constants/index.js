import product1 from '../assets/product1.svg'
import product2 from '../assets/product2.svg'

import product3 from '../assets/product3.svg'

export const CATALOG = [
    {
        "id": 0,
        "picture": product1,
        "title": "cat energy",
        "type": 'pro',
        "weight": "500 г",
        "flavor": "Курица",
        "price": "700 р"
    },
    {
        "id": 1,
        "picture": product2,
        "title": "dog energy",
        "type": 'pro',
        "weight": "859 г",
        "flavor": "Курица",
        "price": "100 р"
    },
    {
        "id": 2,
        "picture": product3,
        "title": "cat energy",
        "type": 'pro',
        "weight": "500 г",
        "flavor": "Курица",
        "price": "500 р"
    },
    {
        "id": 3,
        "picture": product1,
        "title": "cat energy",
        "type": 'pro',
        "weight": "951 г",
        "flavor": "рыба",
        "price": "800 р"
    },
    {
        "id": 4,
        "picture": product1,
        "title": "cat energy",
        "type": 'slim',
        "weight": "147 г",
        "flavor": "рыба",
        "price": "555 р"
    },
    {
        "id": 5,
        "picture": product1,
        "title": "cat energy",
        "type": 'slim',
        "weight": "654 г",
        "flavor": "гречка",
        "price": "444 р"
    },
    {
        "id": 6,
        "picture": product1,
        "title": "cat energy",
        "type": 'slim',
        "weight": "132 г",
        "flavor": "гречка",
        "price": "456 р"
    }
]

export const ADDS = [
    {
        "id": 0,
        "name": "Сахорозаменитель",
        "count": "1 упаковка (100г)",
        "price": "200 р"
    },
    {
        "id": 1,
        "name": "Питьевая вода",
        "count": "5 литров",
        "price": "50 Р"
    },
    {
        "id": 2,
        "name": "молоко",
        "count": "1 литр",
        "price": "100 Р"
    },
    {
        "id": 3,
        "name": "витамины",
        "count": "1 упаковка (30 г)",
        "price": "300 Р"
    },
    {
        "id": 4,
        "name": "витамины",
        "count": "1 упаковка (30 г)",
        "price": "300 Р"
    },
    {
        "id": 5,
        "name": "витамины",
        "count": "1 упаковка (30 г)",
        "price": "300 Р"
    },
    {
        "id": 6,
        "name": "витамины",
        "count": "1 упаковка (30 г)",
        "price": "300 Р"
    }
]

export const MENU = [
    {
        label: 'Главная',
        to: '/',
        end: true
    },
    {
        label: 'Каталог продкции',
        to: 'catalog',
    },
    {
        label: 'Подбор программы',
        to: 'form',
    }
]