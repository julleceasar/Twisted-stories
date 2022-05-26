export interface GameStep {
  id: number,
  options?: Options,
  textContent: TextContent,
  answers: Answer[]
}

export interface TextContent {
  text: string,
  question: string 
}

export interface Answer {
  text: string,
  nextStep: number
}

export interface Options {
  img?: string,
  input?: boolean
}