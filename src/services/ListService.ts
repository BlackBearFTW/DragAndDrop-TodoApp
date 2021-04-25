import Singleton from "../decorators/Singleton";
import IList from "../interfaces/IList";
import ObjectUtil from "../utils/ObjectUtil";
import {v4 as uuid} from "uuid";

@Singleton
class ListService {
    private readonly stateFunction: any;

    public constructor(fn: any) {
        this.stateFunction = fn;
    }

    public addList(listObj?: IList) {
        this.stateFunction((state: any) => {
            const newState = ObjectUtil.deepCopy(state);
            
            newState!.lists = [...newState!.lists, {
                id: (listObj?.id) ? listObj.id : uuid(),
                name: (listObj?.name) ? listObj.name : "List name",
                cards: (listObj?.cards) ? listObj.cards : []
            }];

            return newState;
        });
    }

    public updateList(listObj: IList) {
        this.stateFunction((state: any) => {
            const newState = ObjectUtil.deepCopy(state);
            const list = newState?.lists.find((x: any) => x.id === listObj.id);

            list.name = listObj.name;

            return newState;
        });
    }
}

export default ListService;