export interface Result{
    idFactor: number
    idAnswer: number
    idTesting: number
    codeUser: number
}

export interface User{
    codeUser: number
    password: string
}

export interface Root {
  questions: Array<Question>
}

export interface Question {
  idQuestion: number
  typeQuestion: number
  textQuestion: string
  answers: Answer[]
}

export interface Answer {
  idAnswer: number
  textAnswer: string
  idQuestion: number
  factor: Factor[]
}

export interface Factor {
  idFactor: number
}


export interface FactorOrigin{
  idFactor: number
  mainFactor: string
  nameFactor: string

}

  