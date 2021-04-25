import Singleton from "../decorators/Singleton";

@Singleton
class StateService {
    private state: any;

    public setState(state: any) {
        this.state = state;
    }

    // Don't do this!
    public getState() {
        return this.state;
    }
}

export default StateService;