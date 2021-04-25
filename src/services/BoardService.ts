import Singleton from "../decorators/Singleton";
import ObjectUtil from "../utils/ObjectUtil";

@Singleton
class BoardService {
    private readonly stateFunction: any;

    public constructor(stateFunction: any) {
        this.stateFunction = stateFunction()
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