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

    public addCard(listID: string, cardObj?: ICard) {
        this.stateFunction((state: any) => {
            const newState = ObjectUtil.deepCopy(state);
            const list = newState?.lists.find((x: any) => x.id === listID);

            if(!list) return newState;

            list!.cards = [...list!.cards, {
                id: (cardObj?.id) ? cardObj.id : uuid(),
                value: (cardObj?.value) ? cardObj.value : "",
                completed: false
            }];

            return newState;
        });
    }

    public updateCard(cardObj: ICard) {
        this.stateFunction((state: any) => {
            const newState = ObjectUtil.deepCopy(state);
            const list = newState?.lists.find((x: any) => x.id === listID);

            if(!list) return newState;

            const card = list?.cards.find((x: any) => x.id === cardObj.id);

            if (!card) return newState;

            card!.value = cardObj.value;

            return newState;
        });
    }

    public deleteCard(cardObj: ICard) {
        this.stateFunction((state: any) => {
            const newState = ObjectUtil.deepCopy(state);
            const list = newState?.lists.find((x: any) => x.id === cardObj.list_id);

            if(!list) return newState;

            list!.cards = list!.cards.filter((card: any) => {
                return card.id !== cardObj.id;
            });

            return newState;
        });
    }

    public getAllCardsByListId(listID: string) {
        return this.stateVariable.cards.filter(({list_id}: {list_id: any}) => list_id === listID);
    }
}

export default CardService;