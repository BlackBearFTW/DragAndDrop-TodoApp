import Singleton from "../decorators/Singleton";
import ObjectUtil from "../utils/ObjectUtil";

@Singleton
class BoardService {
    private readonly stateFunction:  Function;

    public constructor(fn: Function) {
        this.stateFunction = fn;
    }

    public changeName(name: string) {
        this.stateFunction((state: any) => {
            const newState = ObjectUtil.deepCopy(state);
            newState.name = name;
            return newState;
        });
    }

    public changeColor(value: string) {
        this.stateFunction((state: any) => {
            const newState = ObjectUtil.deepCopy(state);
            newState.bg_color = value;
            return newState;
        })
    }
}

export default BoardService;