import Singleton from "../decorators/Singleton";
import ICard from "../interfaces/ICard";
import ObjectUtil from "../utils/ObjectUtil";
import {v4 as uuid} from "uuid";

@Singleton
class CardService {
    private readonly stateFunction: Function;

    public constructor(fn: Function) {
        this.stateFunction = fn;
    }

    public addCard(listID: string) {
        this.stateFunction((state: any) => {
            const newState = ObjectUtil.deepCopy(state);

            const card: ICard = {
                id: uuid(),
                list_id: listID,
                value: "",
                completed: false
            };

            newState.push(card);

            return newState;
        });
    }

    public updateCard(cardObj: ICard) {
        this.stateFunction((state: any) => {
            const newState = ObjectUtil.deepCopy(state);

            const index = newState.findIndex((card: ICard) => card.id === cardObj.id);
            newState[index] = cardObj;

            return newState;
        });
    }

    public deleteCard(cardObj: ICard) {
        this.stateFunction((state: any) => {
           return ObjectUtil.deepCopy(state).filter((card: any) => {
                return card.id !== cardObj.id;
            });
        });
    }

    public deleteCardByList(listID: string) {
        this.stateFunction((state: any) => {
            return ObjectUtil.deepCopy(state).filter((card: any) => {
                return card.list_id !== listID;
            });
        });
    }
}

export default CardService;