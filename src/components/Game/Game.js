import {useEffect, useState} from "react";
import "./Game.css"
import Board from "../Board/Board";
import {Button, Empty, notification, Row, Switch} from "antd";
import { SearchOutlined } from '@ant-design/icons'

const  calculateWinner=(squares) =>{
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a],lines[i]];
    }
  }
  return null;
}


const openNotification = (message) => {
  notification.open({
    message: 'Notification Title',
    description:
      message,
  });
};


const Game=()=>{
  const [winnerValue,setWinnerValue]=useState([]);
  const [state,setState]=useState({
    history:[
      {
        squares: Array(9).fill(null)
      }
    ],
    stepNumber: 0,
    xIsNext: true
  });

  const [prev,setPrevPosition]=useState({
    history: [
      {
        row:null,
        col:null
      }
    ]
  });
  const [isBack,setIsBack]=useState(false);

  const [position,setPosition]=useState({
    history: [
      {
        row:null,
        col:null
      }
    ]
  })


  const handleClick=(i)=>{
    const history=state.history.slice(0,state.stepNumber+1);
    const current= history[history.length-1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = state.xIsNext ? "X" : "O";
   setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !state.xIsNext
    });

  }

  const jumpTo = (step) =>{
    setWinnerValue([]);
    let tempPosition=position.history.slice(0,step);
    setPosition({history: tempPosition});
    setState({
      history: history,
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
    console.log(prev)
  }
  const history = state.history;
  const current = history[state.stepNumber];
  const winner = calculateWinner(current.squares);

//(${position.history[move].row},${position.history[move].col})

  const moves = history.map((step, move) => {
    const desc = move ?
      `Go to move # ${move}, position: `:
      'Go to game start';
    return (
      <li key={move}>
        <Button onClick={() => jumpTo(move)}>{desc}</Button>
      </li>
    );
  });





  const [status,setStatus]=useState("");
  useEffect(()=>{
    let flag=false;
    current.squares?.forEach(index=>{
      if(index===null){
        flag=true;
      }
    })
    if (winner) {
      setWinnerValue([...winner[1]]);
      setStatus ( "Winner: " + winner[0]);
      openNotification(`The winner is ${winner[0]}`)
    } else if(flag===true){
      setStatus ("Next player: " + (state.xIsNext ? "X" : "O"));
    }
    else if(flag===false)
    {
      openNotification("'The result being a draw'")
    }
  },[state])


  const onClickPosition=(Position)=>{

    if(position.history===undefined){
      setPosition({history: Position});
      return;
    }
    let flag=false;
    position.history.forEach(index=>{
      if(index.row==Position.row&&index.col==Position.col){
        flag=true;
      }
    })
    if(flag===false){
      const historyTemp=position.history.concat([Position])
      setPosition({history: historyTemp});
    }
  }
  const [sort,setSort]=useState(true)

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={i => handleClick(i)}
          onClickPosition={onClickPosition}
          winner={winnerValue}
        />
      </div>
      <div className="game-info">
        <div>
          {status} &nbsp;
          <Switch checkedChildren="Ascending" unCheckedChildren="Descending" defaultChecked onClick={()=>setSort(!sort)} />
        </div>
        <br/>
        <ol>{sort?moves:new Array(Array.from(moves).reverse())}</ol>
      </div>
    </div>
  );
}

export default Game