import './App.css';
import Board from "./components/Board";
import List from "./components/List";
import Card from "./components/Card";
import {useEffect, useState} from "react";

interface ICard {
    value: string;
    completed: boolean;
}

interface IList {
    name: string,
    order: number;
    cards: ICard[]
}

interface IBoard {
    name: string,
    lists: IList[]
}


function App() {
    const [boardData, setBoardData] = useState<IBoard | null>(null);

    useEffect(() => {
        const data: IBoard = {
            name: "Board name",
            lists: [{
                name: "Todo",
                order: 0,
                cards: []
            }]
        };

        setBoardData(data);
    }, [])


    const updateCard = (identifier: any, value: string) => {

    }


    return (
        <div className="App">
            <Board name={boardData!.name}>

                {boardData!.lists.map((list) => (
                    // Generate List
                    <List name={list.name}>

                        {list.cards.map(card => (
                            // Generate Card
                            <Card text={card.value} onUpdate={updateCard}/>
                        ))}

                    </List>
                ))}

            </Board>
        </div>
    );
}

export default App;
