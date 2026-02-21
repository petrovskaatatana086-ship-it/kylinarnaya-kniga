const myRecipes = [
    {
        id: 1,
        title: 'Хрустящий картофель с чесноком',
        category: 'Гарниры',
        time: 50,
        kcal: 280,
        image: 'https://images.unsplash.com/photo-1518013031636-a184b0c6d1ee?w=500',
        ingredients: [
            { name: 'Картофель', amount: 800, unit: 'г' },
            { name: 'Масло оливковое', amount: 3, unit: 'ст.л.' },
            { name: 'Чеснок', amount: 3, unit: 'зуб.' },
            { name: 'Специи', amount: 1, unit: 'уп.' }
        ],
        steps: ['Нарезать дольками.', 'Смешать с маслом и специями.', 'Запекать 40 мин при 200°C.']
    },
    {
        id: 4,
        title: 'Маковые рулеты с творогом (4 рулета)',
        category: 'Выпечка',
        time: 150,
        kcal: 420,
        image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=500',
        video: 'https://t.me/nasti_kitchen/409', 
        ingredients: [
            { name: 'Мука', amount: 700, unit: 'г' },
            { name: 'Молоко', amount: 350, unit: 'мл' },
            { name: 'Дрожжи сухие', amount: 11, unit: 'г' },
            { name: 'Сахар', amount: 130, unit: 'г' },
            { name: 'Яйца', amount: 2, unit: 'шт' },
            { name: 'Сливочное масло', amount: 150, unit: 'г' },
            { name: 'Мак', amount: 220, unit: 'г' },
            { name: 'Сгущенное молоко', amount: 370, unit: 'г' },
            { name: 'Творог', amount: 380, unit: 'г' },
            { name: 'Желтки', amount: 2, unit: 'шт' }
        ],
        steps: [
            '1. Тесто: смешать молоко, дрожжи, сахар, яйца и муку, затем масло. Оставить на 2 часа.',
            '2. Начинки: уварить мак со сгущенкой; смешать творог с желтками и сахаром.',
            '3. Сборка: раскатать, выложить начинки, сплести косички и выпекать 35 мин при 180°C.'
        ]
    }
];
