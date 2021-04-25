import Singleton from "../decorators/Singleton";

@Singleton
class CardService {


    public addCard() {
        console.log(this.state)
    }
}

export default CardService;