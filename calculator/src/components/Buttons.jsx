import { useEffect, useState } from 'react'
import Display from './Display'

function Buttons() {
    const[text,setText] = useState("")
    const[num1,setNum1] = useState("")
    const[num2,setNum2] = useState("")
    const[output,setOutput] = useState("")
    const[opertaion,setOperation] = useState("")
    const[toggle,setToggle] = useState(true)

    const showId = (num) => {
        setText(prevText => prevText + num)
        if (toggle){
            setNum1(prevNum => prevNum + num)
        }else{
            setNum2(prevNum => prevNum + num)
        }
    }

    const toggleState = (symbol) => {
        setToggle(prevState => !prevState)
        setOperation(symbol)
        setText(prevText => prevText + symbol)
    }

    const clearNum = () =>{
        setText("")
        setNum1("")
        setNum2("")
        setOutput("")
        setOperation("")
        setToggle(true)
    }

    const calculate = () => {
        let ans
        switch(opertaion){
            case "+":
                ans = (Number(num1) + Number(num2))
                break
            case "-":
                ans = (Number(num1) - Number(num2))
                break
            case "*":
                ans = (Number(num1) * Number(num2))
                break
            case "/":
                ans = (Number(num1) + Number(num2))
                break
        }
        setToggle(prevState => !prevState)
        setOutput(ans)
        setNum1(ans)
        setNum2("")
        setText(ans)
    }

  return (
    <div id='container'>
        <Display text={text} />
        <div id="buttons">
            <div id="AC" className="button" onClick={() => clearNum()}>AC</div>
            <div id="DEL" className="button" onClick={() => setText(prevNum => prevNum.slice(0,prevNum.length-1))}>DEL</div>
            <div id="+" className='button' onClick={(e) => toggleState(e.target.id)}>+</div>
            <div id="1" className='button' onClick={(e) => showId(e.target.id)}>1</div>
            <div id="2" className='button' onClick={(e) => showId(e.target.id)}>2</div>
            <div id="3" className='button' onClick={(e) => showId(e.target.id)}>3</div>
            <div id="-" className='button' onClick={(e) => toggleState(e.target.id)}>-</div>
            <div id="4" className='button' onClick={(e) => showId(e.target.id)}>4</div>
            <div id="5" className='button' onClick={(e) => showId(e.target.id)}>5</div>
            <div id="6" className='button' onClick={(e) => showId(e.target.id)}>6</div>
            <div id="*" className='button' onClick={(e) => toggleState(e.target.id)}>*</div>
            <div id="7" className='button' onClick={(e) => showId(e.target.id)}>7</div>
            <div id="8" className='button' onClick={(e) => showId(e.target.id)}>8</div>
            <div id="9" className='button' onClick={(e) => showId(e.target.id)}>9</div>
            <div id="/" className='button' onClick={(e) => toggleState(e.target.id)}>/</div>
            <div id="." className='button' onClick={(e) => showId(e.target.id)}>.</div>
            <div id="0" className='button' onClick={(e) => showId(e.target.id)}>0</div>
            <div id="=" className='button equal' onClick={() => calculate()}>=</div>
        </div>
    </div>
  )
}

export default Buttons