import Singleton from "../decorators/Singleton";
import IList from "../interfaces/IList";
import ObjectUtil from "../utils/ObjectUtil";
import {v4 as uuid} from "uuid";

@Singleton
class ListService {
    private readonly stateVariable: any;
    private readonly stateFunction: any;

    public constructor(variable: any, fn: any) {
        this.stateVariable = variable;
        this.stateFunction = fn;
    }

    public addList() {
        this.stateFunction((state: any) => {
            const newState = ObjectUtil.deepCopy(state);

            newState!.lists = [...newState.lists, {
                id: uuid(),
                name: "List name"
                }]

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