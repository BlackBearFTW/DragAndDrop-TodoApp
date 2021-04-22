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
    const [boardData, setBoardData] = useState<IBoard | null>({
            name: "Board name",
            lists: [{
                id: uuid(),
                name: "Todo list",
                cards: []
            }]
        });


    const updateCard = (cardID: string, listID: string, value: string) => {
        let state = boardData;
        const list = state?.lists.find(x => x.id === listID);
        const card = list?.cards.find(x => x.id === cardID);
        card!.value = value;

        setBoardData(state);
    }

    const addCard = (listID: string) => {
        let state = boardData;
        const list = state?.lists.find(x => x.id === listID);

        list!.cards = [...list!.cards, {
            id: uuid(),
            value: "",
            completed: false
        }]

        setBoardData(state);

        console.log(boardData);
    }


    return (
        <div className="App">
            <Board name={boardData!.name}>

                {boardData!.lists.map((list) => (
                    // Generate List
                    <List id={list.id} key={list.id} name={list.name} addCard={addCard}>

                        {list.cards.map(card => (
                            // Generate Card
                            <Card id={card.id} key={card.id} list={list.id} text={card.value} onUpdate={updateCard}/>
                        ))}

                    </List>
                ))}

            </Board>
        </div>
    );
}

export default App;
