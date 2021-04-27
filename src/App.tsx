import './App.css';
import Board from "./components/Board";
import List from "./components/List";
import Card from "./components/Card";
import AddList from "./components/AddList";
import {useEffect, useState} from "react";
import IBoard from "./interfaces/IBoard"
import CardService from "./services/CardService";
import BoardService from "./services/BoardService";
import ListService from "./services/ListService";
import IList from "./interfaces/IList";
import ICard from "./interfaces/ICard";

let boardService: BoardService;
let listService: ListService;
let cardService: CardService;

function App() {
    const [boardState, setBoardState] = useState<IBoard>({name: "Board name"});
    const [listsState, setListsState] = useState<IList[]>([]);
    const [cardsState, setCardsState] = useState<ICard[]>([]);

    useEffect(() => {
        boardService = new BoardService(boardState, setBoardState);
        listService = new ListService(listsState, setListsState);
        cardService = new CardService(cardsState, setCardsState);
    }, [boardState, cardsState, listsState]);


    useEffect(() => {
        const board = localStorage.getItem("boardState");
        const lists = localStorage.getItem("listsState");
        const cards = localStorage.getItem("cardsState");
        if (board) setBoardState(JSON.parse(board));
        if (lists) setListsState(JSON.parse(lists));
        if (cards) setCardsState(JSON.parse(cards));
    }, [])

    useEffect(() => {
        localStorage.setItem("boardState", JSON.stringify(boardState));
        localStorage.setItem("listsState", JSON.stringify(listsState));
        localStorage.setItem("cardsState", JSON.stringify(cardsState));
    }, [boardState, listsState, cardsState]);

    return (
        <div className="App">
            <Board name={boardState!.name} boardService={boardService}>

                {listsState!.map((list) => (
                    // Generate List
                    <List key={list.id} data={list} cardService={cardService} listService={listService}>

                        {cardService.getAllCardsByListId(list.id).map((card: any) => (
                            // Generate Card
                            <Card key={card.id} data={card}
                                  cardService={cardService}/>
                        ))}

                    </List>
                ))}

                <AddList listService={listService}/>
            </Board>
        </div>
    );
}

export default App;
