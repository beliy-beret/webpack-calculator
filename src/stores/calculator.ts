import { createApi, createStore, sample } from "effector"

export type Sign = "+" | "-" | "*" | "/"

type CalculatorData = {
  sign: Sign | ""
  number: string
  result: string
  resultsHistory: string[]
}
  
const math = (a: number, b: number, sign: Sign) => {
  const result: Record<Sign, (a: number, b: number) => number> = {
    "+": (a: number, b: number) => a + b,
    "-": (a: number, b: number) => a - b,
    "*": (a: number, b: number) => a * b,
    "/": (a: number, b: number) => a / b,
  }
  return result[sign](a, b)
}

export const $calculator = createStore<CalculatorData>({
  sign: "",
  number: "",
  result: "",
  resultsHistory: [],
}) 

export const calculatorApi = createApi($calculator, {
  commaClick: (state, value: string) => ({
    ...state,
    number: !state.number.includes(".") ? `${state.number}${value}` : state.number,
  }),
  resetClick: (state) => ({
    ...state,
    sign: "",
    number: "",
    result: "",
  }),
  signClick: (state, value: Sign) => ({
    ...state,
    sign: value,
    result: !state.result && state.number ? state.number : state.result,
    number: '',
  }),
  equalsClick: (state) => {
    if (state.result && state.number && state.sign) {
      const newResult = math(Number(state.result), Number(state.number), state.sign).toString()
        return {
          ...state,
          result: newResult,
          sign: "",
          number: "",
          resultsHistory: [...state.resultsHistory, newResult],
        }      
    }
    return state
  },
  handleClickButton: (state, value) => {
    if(value === "0" && state.number === "0") return state
    return({
        ...state,
        number: state.number + value,
    })
  }
})
