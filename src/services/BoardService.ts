import Singleton from "../decorators/Singleton";
import ObjectUtil from "../utils/ObjectUtil";

@Singleton
class BoardService {
    private readonly stateVariable: any;
    private readonly stateFunction: any;

    public constructor(variable: any, fn: any) {
        this.stateVariable = variable;
        this.stateFunction = fn;
    }

    public changeName(name: string) {
        this.stateFunction((state: any) => {
            const newState = ObjectUtil.deepCopy(state);

            newState.name = name;

            return newState;
        });
    }
}

export default BoardService;