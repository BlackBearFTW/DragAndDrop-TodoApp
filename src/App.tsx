import './App.css';
import Board from "./components/Board";
import List from "./components/List";
import Card from "./components/Card";
import AddList from "./components/AddList";
import {useEffect, useState} from "react";
import {v4 as uuid} from 'uuid';
import IBoard from "./interfaces/IBoard"
import CardService from "./services/CardService";
import BoardService from "./services/BoardService";
import ListService from "./services/ListService";

function App() {
    const [boardData, setBoardData] = useState<IBoard>( {
            name: "Board name",
            lists: [{
                id: uuid(),
                name: "Todo list",
                cards: []
            }]
        });

    const boardService = new BoardService(setBoardData);
    const listService = new ListService(setBoardData);
    const cardService = new CardService(setBoardData);

    useEffect(() => {
        const data = localStorage.getItem("boardData");
        if (data) {
            setBoardData(JSON.parse(data));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("boardData", JSON.stringify(boardData));
    }, [boardData])

    return (
        <div className="App">
            <Board name={boardData!.name} boardService={boardService}>

                {boardData!.lists.map((list) => (
                    // Generate List
                    <List id={list.id} key={list.id} name={list.name} cardService={cardService} listService={listService}>

                        {list.cards.map(card => (
                            // Generate Card
                            <Card id={card.id} key={card.id} list_id={list.id} text={card.value} cardService={cardService}/>
                        ))}

                    </List>
                ))}

                <AddList listService={listService} />
            </Board>
        </div>
    );
}

export default App;
