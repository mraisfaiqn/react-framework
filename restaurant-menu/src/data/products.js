const PRODUCT_DATA = [
    {
        id: 1,
        name: "Cheese Burger",
        description: "A juicy beef patty topped with melted cheddar cheese, crisp lettuce, tomato, pickles, and our signature sauce, all in a toasted sesame bun.",
        price: 12.90,
        category: "burgers",
        isVegetarian: false,
        isSpicy: false,
        image: "https://images.unsplash.com/photo-1508736793122-f516e3ba5569?w=800&auto=format&fit=crop",
        onOrder: null
    },
    {
        id: 2,
        name: "Chicken Burger",
        description: "Golden crispy fried chicken fillet with creamy mayo, shredded lettuce, and pickled jalapeños, served in a soft brioche bun.",
        price: 13.90,
        category: "burgers",
        isVegetarian: false,
        isSpicy: true,
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800&auto=format&fit=crop",
        onOrder: null
    },
    {
        id: 3,
        name: "Falafel Burger",
        description: "Crispy chickpea falafel patty with tahini sauce, fresh cucumber, tomato, and a handful of rocket, wrapped in a warm sesame bun.",
        price: 12.50,
        category: "burgers",
        isVegetarian: true,
        isSpicy: false,
        image: "https://plus.unsplash.com/premium_photo-1663853051660-91bd9b822799?w=800&auto=format&fit=crop",
        onOrder: null
    },
    {
        id: 4,
        name: "Haloumi Burger",
        description: "Golden pan-fried haloumi cheese with sweet chilli mayo, fresh avocado, and crunchy slaw, served in a toasted brioche bun.",
        price: 13.50,
        category: "burgers",
        isVegetarian: true,
        isSpicy: false,
        image: "https://images.unsplash.com/photo-1723476638288-54fe7357ab20?w=800&auto=format&fit=crop",
        onOrder: null
    },
    {
        id: 5,
        name: "Double Cheese Burger",
        description: "Two smashed beef patties stacked high with double cheddar, caramelised onions, pickles, mustard, and ketchup in a classic sesame bun.",
        price: 16.90,
        category: "burgers",
        isVegetarian: false,
        isSpicy: false,
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&auto=format&fit=crop",
        onOrder: null
    },
    {
        id: 6,
        name: "French Fries",
        description: "Classic hand-cut golden fries, salted and served hot with your choice of dipping sauce.",
        price: 5.90,
        category: "sides",
        isVegetarian: true,
        isSpicy: false,
        image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=800&auto=format&fit=crop",
        onOrder: null
    },
    {
        id: 7,
        name: "Bulgogi Fries",
        description: "Crispy fries loaded with Korean bulgogi beef, drizzled with gochujang sauce, spring onions, sesame seeds, and a dollop of kimchi mayo.",
        price: 9.90,
        category: "sides",
        isVegetarian: false,
        isSpicy: true,
        image: "https://images.unsplash.com/photo-1666304752980-678d5c35c911?w=800&auto=format&fit=crop",
        onOrder: null
    },
    {
        id: 8,
        name: "Falafel Poppers",
        description: "Bite-sized crispy falafel balls seasoned with cumin and coriander, served with a creamy garlic hummus dipping sauce.",
        price: 7.90,
        category: "sides",
        isVegetarian: true,
        isSpicy: false,
        image: "https://plus.unsplash.com/premium_photo-1668618295652-4dab74ecd966?w=800&auto=format&fit=crop",
        onOrder: null
    },
    {
        id: 9,
        name: "Soft Drinks",
        description: "Choose from a selection of chilled Coca-Cola, Diet Coke, Sprite, or Fanta — the perfect companion to your meal.",
        price: 3.90,
        category: "drinks",
        isVegetarian: true,
        isSpicy: false,
        image: "https://images.unsplash.com/photo-1524802020103-aa46eaffcaa2?w=800&auto=format&fit=crop",
        onOrder: null
    },
    {
        id: 10,
        name: "Iced Lemon Tea",
        description: "Chilled black tea brewed to perfection, served over ice with a generous squeeze of fresh lemon — light, refreshing, and just the right amount of sweet.",
        price: 4.90,
        category: "drinks",
        isVegetarian: true,
        isSpicy: false,
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&auto=format&fit=crop",
        onOrder: null
    },
    {
        id: 11,
        name: "Mo's Mojito",
        description: "Our house virgin mojito — fresh lime juice, muddled mint leaves, a splash of sugar syrup, and sparkling water over crushed ice.",
        price: 5.90,
        category: "drinks",
        isVegetarian: true,
        isSpicy: false,
        image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&auto=format&fit=crop",
        onOrder: null
    },
    {
        id: 12,
        name: "Mineral Water",
        description: "Still or sparkling chilled mineral water — clean, crisp, and always a great choice.",
        price: 2.90,
        category: "drinks",
        isVegetarian: true,
        isSpicy: false,
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&auto=format&fit=crop",
        onOrder: null
    }
];

export default PRODUCT_DATA;