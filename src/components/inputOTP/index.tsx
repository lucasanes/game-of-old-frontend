import * as S from "./styles";

interface Type {
  [key: number]: string;
}

export function InputOTP({
  inputs,
  setInputs,
}: {
  inputs: Type;
  setInputs: React.Dispatch<React.SetStateAction<Type>>;
}) {
  function changeInputHandler(
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    const { value } = e.target;
    setInputs((prev) => ({ ...prev, [index]: value }));
    if (value.length === 1) {
      focusNextInput(index);
    }
    if (value.length > 1) {
      separateValues(index, value);
    }
  }

  function focusNextInput(index: number) {
    const nextInput = document.getElementById(`input-${index + 1}`);
    if (nextInput) {
      setInputs((prev) => ({ ...prev, [index + 1]: "" }));
      nextInput.focus();
    } else {
      document.getElementById("input-0")!.focus();
    }
  }

  function focusPrevInput(index: number) {
    const prevInput = document.getElementById(`input-${index - 1}`);
    if (prevInput) {
      prevInput.focus();
    } else {
      document.getElementById("input-5")!.focus();
    }
  }

  function separateValues(index: number, value: string) {
    const values = value.split("");
    const newValues = values.reduce((acc: Type, val: string, i: number) => {
      if (i === 0) {
        acc[index] = val;
      } else {
        acc[index + i] = val;
      }
      return acc;
    }, {});
    setInputs((prev) => ({ ...prev, ...newValues }));
    focusNextInput(index + values.length - 1);
  }

  function keyUpInputHandler(
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) {
    if (e.key === "Backspace" && !inputs[index]) {
      focusPrevInput(index);
    }
  }

  return (
    <div className="App">
      <S.Inputs>
        <S.Input
          onChange={(e) => changeInputHandler(e, 0)}
          value={inputs[0]}
          id="input-0"
          onKeyUp={(e) => keyUpInputHandler(e, 0)}
          placeholder="0"
          type="number"
        />
        <S.Input
          onChange={(e) => changeInputHandler(e, 1)}
          value={inputs[1]}
          id="input-1"
          onKeyUp={(e) => keyUpInputHandler(e, 1)}
          placeholder="0"
          type="number"
        />
        <S.Input
          onChange={(e) => changeInputHandler(e, 2)}
          value={inputs[2]}
          id="input-2"
          onKeyUp={(e) => keyUpInputHandler(e, 2)}
          placeholder="0"
          type="number"
        />
        <S.Input
          onChange={(e) => changeInputHandler(e, 3)}
          value={inputs[3]}
          id="input-3"
          onKeyUp={(e) => keyUpInputHandler(e, 3)}
          placeholder="0"
          type="number"
        />
        <S.Input
          onChange={(e) => changeInputHandler(e, 4)}
          value={inputs[4]}
          id="input-4"
          onKeyUp={(e) => keyUpInputHandler(e, 4)}
          placeholder="0"
          type="number"
        />
        <S.Input
          onChange={(e) => changeInputHandler(e, 5)}
          value={inputs[5]}
          id="input-5"
          onKeyUp={(e) => keyUpInputHandler(e, 5)}
          placeholder="0"
          type="number"
        />
      </S.Inputs>
    </div>
  );
}
