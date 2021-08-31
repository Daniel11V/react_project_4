import { createStore } from "redux";

const buttons = [
    {
        id: "clear",
        name: "AC",
        color: "#ac3939"
    },
    {
        id: "divide",
        name: "/",
        color: "#666666"
    },
    {
        id: "multiply",
        name: "*",
        color: "#666666"
    },
    {
        id: "seven",
        name: "7",
        color: "#4d4d4d"
    },
    {
        id: "eight",
        name: "8",
        color: "#4d4d4d"
    },
    {
        id: "nine",
        name: "9",
        color: "#4d4d4d"
    },
    {
        id: "subtract",
        name: "-",
        color: "#666666"
    },
    {
        id: "four",
        name: "4",
        color: "#4d4d4d"
    },
    {
        id: "five",
        name: "5",
        color: "#4d4d4d"
    },
    {
        id: "six",
        name: "6",
        color: "#4d4d4d"
    },
    {
        id: "add",
        name: "+",
        color: "#666666"
    },
    {
        id: "one",
        name: "1",
        color: "#4d4d4d"
    },
    {
        id: "two",
        name: "2",
        color: "#4d4d4d"
    },
    {
        id: "three",
        name: "3",
        color: "#4d4d4d"
    },
    {
        id: "zero",
        name: "0",
        color: "#4d4d4d"
    },
    {
        id: "decimal",
        name: ".",
        color: "#4d4d4d"
    },
    {
        id: "equals",
        name: "=",
        color: "#004466"
    }
];

const initialState = {
    textUp: "",
    textDown: "0",
    afterEquals: false
}

const reducerCalculator = (state = initialState, action) => {
    let textUpF = state.textUp;
    let textDownF = state.textDown;
    let afterEqualsF = state.afterEquals;

    if (action.button === "AC") {
        textUpF = "";
        textDownF = "0";
    } else if (action.button === "=") {
        if (textUpF) {
            textDownF = eval(textUpF);
            afterEqualsF = true;
        }
    } else if (action.button === ".") {
        if (state.textDown === "0") {
            textUpF = "0.";
            textDownF = "0.";
        } else if (!state.textDown.includes(".")) {
            textUpF += action.button;
            textDownF += action.button;
        }
    } else if ((action.button === "0")) {
        if (Number(textDownF)) {
            textUpF += action.button;
            textDownF += action.button;
        }
    } else if (Number(action.button)) {
        if (afterEqualsF) {
            textUpF = action.button;
            textDownF = action.button;
        } else if (Number(textDownF)) {
            textUpF += action.button;
            textDownF += action.button;
        } else {
            textUpF += action.button;
            textDownF = action.button;
        }
    } else if (action.button === "/" || action.button === "*" || action.button === "-" || action.button === "+") {
        let lastChar = textUpF[textUpF.length - 1];
        if (afterEqualsF) {
            textUpF = textDownF + action.button;
        } else if (lastChar === "-") {
            let lastC = textUpF[textUpF.length - 1];
            while (lastC === "/" || lastC === "*" || lastC === "-" || lastC === "+") {
                textUpF = textUpF.slice(0, textUpF.length - 1);
                lastC = textUpF[textUpF.length - 1];
            }
            textUpF += action.button;
        } else if (lastChar === "/" || lastChar === "*" || lastChar === "+") {
            if (action.button === "-") {
                textUpF += action.button;
            } else {
                textUpF = textUpF.slice(0, textUpF.length - 1) + action.button;
            }
        } else {
            textUpF += action.button;
        }
        textDownF = action.button;
    }

    if (action.button !== "=") {
        afterEqualsF = false;
    }

    return {
        ...state,
        textUp: textUpF,
        textDown: textDownF,
        afterEquals: afterEqualsF
    };
}

export default createStore(reducerCalculator);
export { buttons };