import styles from "./Input.module.scss";
import { useState } from "react";

type PropsTypes = {
  name: string;
  type: string;
  placeholder: string;
  onInput: Function;
};

export default function Input({ name, placeholder, type, onInput }: PropsTypes) {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <input
        className={styles.input}
        name={name}
        placeholder={placeholder}
        value={inputValue}
        type={type}
        onInput={(e) => {
          if (e) {
            //set the 'target' type as HTMLButtonElement, which has 'value'
            const target = e.target as HTMLButtonElement;

            setInputValue(target.value);
            onInput(e);
          }
        }}
      />
    </>
  );
}
