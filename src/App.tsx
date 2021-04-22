import './App.css';
import Board from "./components/Board";
import List from "./components/List";
import Card from "./components/Card";
import {useState} from "react";
import {v4 as uuid} from 'uuid';

interface IBoard {
    name: string;
    lists: IList[];
}

interface IList {
    id: string;
    name: string;
    cards: ICard[];
}

interface ICard {
    id: string;
    value: string;
    completed: boolean;
}


function App() {
    const [boardData, setBoardData] = useState<IBoard>({
            name: "Board name",
            lists: [{
                id: uuid(),
                name: "Todo list",
                cards: []
            }]
        });

    const deepCopyObject = <T, >(object: T): T => {
        return JSON.parse(JSON.stringify(object))
    }


    const handleCard = (action: "add" | "update" | "delete", listID: string, cardID?: string, value?: string) => {
        setBoardData(state => {
            const newState = deepCopyObject<IBoard>(state);
            const list = newState?.lists.find(x => x.id === listID);

            if (action === "add") {

                list!.cards = [...list!.cards, {
                    id: uuid(),
                    value: "",
                    completed: false
                }];
            }
            else if (action === "update") {
                if (!cardID || !value) return newState;

                const card = list?.cards.find(x => x.id === cardID);
                card!.value = value!;
            }
            else if (action === "delete") {
                if (!cardID) return newState;

                list!.cards = list!.cards.filter(card => {
                    return card.id !== cardID;
                });
            }

            return newState;
        });
    }




    return (
        <div className="App">
            <Board name={boardData!.name}>

                {boardData!.lists.map((list) => (
                    // Generate List
                    <List id={list.id} key={list.id} name={list.name} addCard={handleCard}>

                        {list.cards.map(card => (
                            // Generate Card
                            <Card id={card.id} key={card.id} list={list.id} text={card.value} handle={handleCard}/>
                        ))}

                    </List>
                ))}

            </Board>
        </div>
    );
}

export default App;
