import { Genre } from "./genre.model";

export interface Movie {
    _id: string,
    title: string,
    genres: [Genre],
    numberInStock: number,
    dailyRentalRate: number
}