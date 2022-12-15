import React, { FC, useReducer } from "react";
import styles from "./Input.module.css";

interface InputProps {
  id:string;
  type:string;
  element: string;
  placeholder:string;
  rows?:number|undefined;
  initialValue?: string | boolean | undefined
}

type State = {
   value: string;
    isTouched: boolean;
    isValid: boolean;
}

type Action = {
  type:string;
  val: any;
  validators: boolean;
}

const inputReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      };
    case 'TOUCH': {
      return {
        ...state,
        isTouched: true
      }
    }
    default:
      return state;
  }
};

const Input: FC<InputProps> = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isTouched: false,
    isValid: props.initialValue || false
  })
  const changeHandler = () => {
  
}
const touchHandler = () => {

}
    const element = props.element === "input" ? (
      <input 
      id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ): (
      <textarea
      id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <div className={styles["form-control"]}>{element}</div>
  );
}

  
);

export default Input;
