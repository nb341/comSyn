
class Review{
    id: string;
    author: string;
    comment: string;
    rating: string;
}
export class Item{
    id: string;
    name: string;
    type: string;
    manufacturer: string;
    date_manufactured: string;
    price: number;
    categories: string[];
    reviews: Review[];
    image: string;
    images: string[];
}

