import Box from "../Box/Box";
import {Col, Form, Row} from "react-bootstrap";
import "./Board.css"
import {useEffect, useRef, useState} from "react";

const Board = ({squares,onClick,onClickPosition,winner}) => {
  return (
    <>
      <div>
        <div className="board-row">
          <Box
            winner={winner}
            value={squares[0]}
            onClick={() => onClick(0)}
            index={0}
            position={{row:0,col:0}}
            onClickPosition={onClickPosition}
          />
          <Box
            winner={winner}
            value={squares[1]}
            index={1}
            onClick={() => onClick(1)}
            position={{row:0,col:1}}
            onClickPosition={onClickPosition}
          />
          <Box
            winner={winner}
            value={squares[2]}
            index={2}
            onClick={() => onClick(2)}
            position={{row:0,col:2}}
            onClickPosition={onClickPosition}
          />
        </div>
        <div className="board-row">
          <Box
            winner={winner}
            value={squares[3]}
            index={3}
            onClick={() => onClick(3)}
            position={{row:1,col:0}}
            onClickPosition={onClickPosition}
          />
          <Box
            winner={winner}
            value={squares[4]}
            index={4}
            onClick={() => onClick(4)}
            position={{row:1,col:1}}
            onClickPosition={onClickPosition}
          />
          <Box
            winner={winner}
            value={squares[5]}
            index={5}
            onClick={() => onClick(5)}
            position={{row:1,col:2}}
            onClickPosition={onClickPosition}
          />
        </div>
        <div className="board-row">
          <Box
            winner={winner}
            value={squares[6]}
            index={6}
            onClick={() => onClick(6)}
            position={{row:2,col:0}}
            onClickPosition={onClickPosition}
          />
          <Box
            winner={winner}
            value={squares[7]}
            index={7}
            onClick={() => onClick(7)}
            position={{row:2,col:1}}
            onClickPosition={onClickPosition}
          />
          <Box
            winner={winner}
            value={squares[8]}
            index={8}
            onClick={() => onClick(8)}
            position={{row:2,col:2}}
            onClickPosition={onClickPosition}
          />
        </div>
      </div>
    </>
  )
}

export default Board