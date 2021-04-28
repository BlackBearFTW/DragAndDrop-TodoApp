import Singleton from "../decorators/Singleton";
import IList from "../interfaces/IList";
import ObjectUtil from "../utils/ObjectUtil";
import {v4 as uuid} from "uuid";

@Singleton
class ListService {
    private readonly stateFunction: Function;

    public constructor(fn: Function) {
        this.stateFunction = fn;
    }

    public addList() {
        this.stateFunction((state: any) => {
            return [...ObjectUtil.deepCopy(state), {
                id: uuid(),
                name: "List name"
                } as IList];
        });
    }

    public updateList(listObj: IList) {
        this.stateFunction((state: any) => {
            const newState = ObjectUtil.deepCopy(state);

            const index = newState.findIndex((list: IList) => list.id === listObj.id);
            newState[index] = listObj;

            return newState;
        });
    }

    public deleteList(listObj: IList) {
        this.stateFunction((state: any) => {
            return ObjectUtil.deepCopy(state).filter((list: any) => {
                return list.id !== listObj.id;
            });
        });
    }
}

export default ListService;