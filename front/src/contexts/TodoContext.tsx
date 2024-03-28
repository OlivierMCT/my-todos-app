import { createContext } from "react";
import { Todo, TodoDto } from "../models/Todo";

export const TodosContext = createContext(null as any);
export const TodosDispatch = createContext(null as any)

export interface TodoState {
  todos: Todo[],
  categories: string[],
  currentCatagory?: string
}

export enum TodoActionType {
  LOAD, ADD, UPDATE, TOGGLE, REMOVE
}
export interface TodoActions {
  type: TodoActionType
  dtos?: TodoDto[]
}

export function TodosReducer(state: TodoState, action: TodoActions): TodoState { 

  if (action.type == TodoActionType.LOAD) {
    return {
      ...state,
      todos: action.dtos?.map(dto => toTodo(dto)) ?? []
    }
  }

  throw new Error('TodoActions not found');

}

function toTodo(dto: TodoDto): Todo {
  return {
    ...dto,
    dueDate : new Date(dto.dueDate)
  }
}