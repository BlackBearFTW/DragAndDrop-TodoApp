import './App.css';
import Board from "./components/Board";
import List from "./components/List";
import Card from "./components/Card";
import AddList from "./components/AddList";
import {useEffect, useState} from "react";
import {v4 as uuid} from 'uuid';
// import { DragDropContext } from 'react-beautiful-dnd';

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
    const [boardData, setBoardData] = useState<IBoard>( {
            name: "Board name",
            lists: [{
                id: uuid(),
                name: "Todo list",
                cards: []
            }]
        });

    useEffect(() => {
        const data = localStorage.getItem("boardData");
        if (data) {
            setBoardData(JSON.parse(data));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("boardData", JSON.stringify(boardData));
    }, [boardData])

    const deepCopyObject = <T, >(object: T): T => {
        return JSON.parse(JSON.stringify(object))
    }

    const handleBoard = (name: string) => {
        setBoardData(state => {
            const newState = deepCopyObject<IBoard>(state);

            newState.name = name;

            return newState;
        });
    }

    const handleList = (name: string, listID: string) => {
        setBoardData(state => {
            const newState = deepCopyObject<IBoard>(state);
            const list = newState?.lists.find(x => x.id === listID);

            list!.name = name;

            return newState;
        });
    }

    const addList = () => {
        setBoardData(state => {
            const newState = deepCopyObject<IBoard>(state);

            newState!.lists = [...newState!.lists, {
                id: uuid(),
                name: "List name",
                cards: []
            }];

            return newState;
        });
    }

    const handleCard = (action: "add" | "update" | "delete" | "drag", listID: string, cardID?: string, value?: string, listID2?: string) => {
        setBoardData(state => {
            const newState = deepCopyObject<IBoard>(state);
            const list = newState?.lists.find(x => x.id === listID);

            if (action === "add") {

                list!.cards = [...list!.cards, {
                    id: (cardID) ? cardID : uuid(),
                    value: (value) ? value : "",
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
            } else if (action === "drag") {
                if (!cardID || !value || !listID2) return newState;

                if (listID === listID2) return newState;

                const list2 = newState?.lists.find(x => x.id === listID2);

                const card = list2?.cards.find(x => x.id === cardID);

                list!.cards = [...list!.cards, card!];

                list2!.cards = list2!.cards.filter(card => {
                    return card.id !== cardID;
                });

            }

            return newState;
        });
    }

    return (
        <div className="App">
            <Board name={boardData!.name} handle={handleBoard}>

                {boardData!.lists.map((list) => (
                    // Generate List
                    <List id={list.id} key={list.id} name={list.name} handleCard={handleCard} handle={handleList}>

                        {list.cards.map(card => (
                            // Generate Card
                            <Card id={card.id} key={card.id} list={list.id} text={card.value} handle={handleCard}/>
                        ))}

                    </List>
                ))}

                <AddList handle={addList} />
            </Board>
        </div>
    );
}

export default App;
