import ICard from "./ICard";

export default interface IList {
    id: string;
    name: string;
    cards: ICard[];
}