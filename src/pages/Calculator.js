import React, { useState } from 'react'
import './Calculator.css'

export default function App() {
  // result
  const [equation, setEquation] = useState("0")
  // 判断是否已经输入了小数，防止连续输入小数点
  const [isDecmialAdded, setIsDecmialAdded] = useState(false)
  // 判断是否已经输入了运算符，防止连续输入运算符
  const [isOperatorAdded, setIsOperatorAdded] = useState(false)
  // 判断是否已经输入了数字，用于正负运算和百分比运算
  const [, setIsStarted] = useState(false)

  // ? 内部用到的工具集
  const utils = {
    // 判断 char 是否是运算符
    isOperator(char) {
      // 这里是乘号不是字母x，对应编码U+00D7
      return ["+", "-", "x", "÷"].includes(char)
    },
    // 判断 char 是否为小数点
    isDecmial(char) {
      return char === "."
    },
    // 判断 char 是否为数字
    isNumber(char) {
      return ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(char)
    },
    // 判断表达式是否合法
    isValid() {
      return this.isNumber(equation.charAt(equation.length - 1))
    },
    // 将乘除符号转换成计算机符号
    replaceExpression(str) {
      return str
        .replace(new RegExp("x", "g"), "*")
        .replace(new RegExp("÷", "g"), "/")
    }
  }

  // 监听键盘事件
  const keyDown = (e) => {
    console.log(e.keyCode)
    switch (e.keyCode) {
      case 48:
        append('0')
        break;
      case 49:
        append('1')
        break;
      case 50:
        append('2')
        break;
      case 51:
        append('3')
        break;
      case 52:
        append('4')
        break;
      case 53:
        append('5')
        break;
      case 54:
        append('6')
        break;
      case 55:
        append('7')
        break;
      case 56:
        append('8')
        break;
      case 57:
        append('9')
        break;
      case 81:
        append('+')
        break;
      case 87:
        append('-')
        break;
      case 69:
        append('x')
        break;
      case 82:
        append('÷')
        break;
      case 8:
        clear()
        break;
      case 32:
      case 13:
        calculate(undefined)
        break;
      default:
        break;
    }
  }
  // ? 点击运算符号
  const append = char => {
    // 一开始只允许输入数字或者小数点
    if (equation === "0") {
      if (utils.isOperator(char)) return
      if (utils.isDecmial(char)) {
        setEquation(equation + char)
        // 防止连续输入小数点
        setIsDecmialAdded(true)
      }
      if (utils.isNumber(char)) {
        setEquation(char)
      }
      // 开启输入
      setIsStarted(true)
      return
    }

    // 当输入数字的时候直接向后添加
    if (utils.isNumber(char)) {
      if (isOperatorAdded) {
        setIsDecmialAdded(false)
      }
      setIsOperatorAdded(false)
      setEquation(equation + char)
    }

    // 当输入为小数点的时候，只允许连续输入一次，之后只能输入数字
    if (utils.isDecmial(char) && !isDecmialAdded) {
      setIsDecmialAdded(true)
      setIsOperatorAdded(true)
      setEquation(equation + char)
    }

    // 当输入为运算符的时候，只允许连续输入一次，之后只能输入数字
    if (utils.isOperator(char) && !isOperatorAdded) {
      setIsDecmialAdded(true)
      setIsOperatorAdded(true)
      setEquation(equation + char)
    }
  }
  // ? 点击等号
  const calculate = _equation => {
    if (utils.isValid()) {
      const resultStr = _equation
        ? utils.replaceExpression(_equation)
        : utils.replaceExpression(equation)
      // eslint-disable-next-line
      const result = parseFloat(eval(resultStr).toFixed(9)).toString()
      if (result === "Infinity") {
        clear()
        return
      }
      setEquation(result)
    }
  }

  // ? 点击 end
  const clear = () => {
    setEquation("0")
    setIsDecmialAdded(false)
    setIsOperatorAdded(false)
    setIsStarted(false)
  }

  return (
    <div className='calculator' tabIndex={0} onKeyDown={keyDown}>
      <div className='result' style={{ gridArea: 'result' }}>{equation}</div>
      <button
        style={{ gridArea: 'plus' }}
        onClick={() => append('+')}
      >
        ➕
      </button>
      <button
        style={{ gridArea: 'subtract' }}
        onClick={() => append('-')}
      >
        ➖
      </button>
      <button
        style={{ gridArea: 'multiply' }}
        onClick={() => append('x')}
      >
        ✖️
      </button>
      <button
        style={{ gridArea: 'divide' }}
        onClick={() => append('÷')}
      >
        ➗
      </button>
      <button
        style={{ gridArea: 'number-7' }}
        onClick={() => append('7')}
      >
        7
      </button>
      <button
        style={{ gridArea: 'number-8' }}
        onClick={() => append('8')}
      >
        8
      </button>
      <button
        style={{ gridArea: 'number-9' }}
        onClick={() => append('9')}
      >
        9
      </button>
      <button
        style={{ gridArea: 'docker' }}
        onClick={() => window.location.href = "https://hub.docker.com/"}
      >
        Docker
      </button>
      <button
        style={{ gridArea: 'number-4' }}
        onClick={() => append('4')}
      >
        4
      </button>
      <button
        style={{ gridArea: 'number-5' }}
        onClick={() => append('5')}
      >
        5
      </button>
      <button
        style={{ gridArea: 'number-6' }}
        onClick={() => append('6')}
      >
        6
      </button>
      <button
        style={{ gridArea: 'github' }}
        onClick={() => window.location.href = "https://github.com/"}
      >
        GitHub
      </button>
      <button
        style={{ gridArea: 'number-1' }}
        onClick={() => append('1')}
      >
        1
      </button>
      <button
        style={{ gridArea: 'number-2' }}
        onClick={() => append('2')}
      >
        2
      </button>
      <button
        style={{ gridArea: 'number-3' }}
        onClick={() => append('3')}
      >
        3
      </button>
      <button
        style={{ gridArea: 'ac' }}
        onClick={clear}
      >
        🔚
      </button>
      <button
        style={{ gridArea: 'number-0' }}
        onClick={() => append('0')}
      >
        0
      </button>
      <button
        style={{ gridArea: 'dot' }}
        onClick={() => append('.')}
      >
        .
      </button>
      <button
        style={{ gridArea: 'equal' }}
        onClick={() => calculate(undefined)}
      >
        🟰
      </button>
    </div>
  )
}
