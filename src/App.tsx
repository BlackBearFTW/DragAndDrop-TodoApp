import {useEffect, useState} from "react";
import './App.css';

/* Services */
import CardService from "./services/CardService";
import BoardService from "./services/BoardService";
import ListService from "./services/ListService";

/* Interfaces */
import IBoard from "./interfaces/IBoard"
import IList from "./interfaces/IList";
import ICard from "./interfaces/ICard";

/* Components */
import Board from "./components/Board";
import List from "./components/List";
import Card from "./components/Card";
import AddList from "./components/AddList";
import {DragDropContext, DropResult} from "react-beautiful-dnd";

/* Service variables */
let boardService: BoardService;
let listService: ListService;
let cardService: CardService;

function App() {
    const [boardState, setBoardState] = useState<IBoard>({name: "Board name"});
    const [listsState, setListsState] = useState<IList[]>([]);
    const [cardsState, setCardsState] = useState<ICard[]>([]);

    useEffect(() => {
        boardService = new BoardService(setBoardState);
        listService = new ListService(setListsState);
        cardService = new CardService(setCardsState);
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

    const onDragEnd = (result: DropResult) => {

    }

    return (
        <div className="App">
            <Board name={boardState!.name} boardService={boardService}>
            <DragDropContext onDragEnd={onDragEnd}>
                {listsState!.map((list) => (
                    // Generate List
                    <List key={list.id} data={list} cardService={cardService} listService={listService}>

                        {cardsState.flatMap((card: any, index) => card.list_id === list.id ? (
                            // Generate Card
                            <Card key={card.id} data={card}
                                  cardService={cardService} index={index}/>
                        ) : "")}

                    </List>
                ))}
            </DragDropContext>
                <AddList listService={listService}/>
            </Board>
        </div>
    );
}

export default App;
