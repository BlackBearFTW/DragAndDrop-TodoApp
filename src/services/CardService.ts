import Singleton from "../decorators/Singleton";
import ICard from "../interfaces/ICard";
import ObjectUtil from "../utils/ObjectUtil";
import {v4 as uuid} from "uuid";

@Singleton
class CardService {

    private readonly stateVariable;
    private readonly stateFunction: any;

    public constructor(variable: any, fn: any) {
        this.stateVariable = variable;
        this.stateFunction = fn;
    }

    public addCard(listID: string) {
        this.stateFunction((state: any) => {
            return [...ObjectUtil.deepCopy(state), {
                id: uuid(),
                list_id: listID,
                value: "",
                completed: false
            } as ICard];
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

    public getAllCardsByListId(listID: string) {
        return this.stateVariable.filter(({list_id}: {list_id: any}) => list_id === listID);
    }
}

export default CardService;