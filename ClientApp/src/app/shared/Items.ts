import { Item } from './Item';

export const Items: Item [] = [
    {
        id: '0',
        name: 'Blade 15',
        type: 'Laptop',
        manufacturer: 'Blade',
        date_manufactured: '12/4/20',
        price: 1499.99,
        categories: [
            'Gaming',
            'PC',
            'Work',
            'School'
        ],
        reviews: [
            {
             id: '1',
             author: "Meso Paste",
             comment: 'Sweet, Love the RGB lighting',
             rating: '4'
            },
            {
            id: '1',
            author: "Rice Ball",
            comment: 'Small, light and gameplay excellent',
            rating: '5'
            }
        ],
        image: '/assets/images/blade.png',
        images: [
            '/assets/images/blade.png',
            '/assets/images/blade.png',
            '/assets/images/blade.png'
        ]
    }
];

