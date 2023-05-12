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
  weight: number
  nameFactor: string
}


export interface FactorOrigin{
  idFactor: number
  nameFactor: string
}

export interface AnswerToSave{
  textAnswer: string
  factor: FactorToSave[]
}

export interface FactorToSave{
  idFactor: number
  weight: number
}

export interface Testinglist {
  idTest: number;
  departmentNum: string;
  testName: string;
  dateNotificationDate: string;
  datePassingTest: string;
  testCreatingDate: string;
}

export interface QuestionInTest {
  idQuestion: number;
  textQuestion: string;
  typeQuestion: number;
  count: number;
  string_agg: string;
}


export interface QuestionData {
  idQuestion: number;
  textQuestion: string;
  typeQuestion: number;
  idAnswer: number;
  idFactor: number;
  weight: number;
  textAnswer: string;
  nameFactor: string;
}

  