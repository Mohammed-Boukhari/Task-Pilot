import { createContext, useReducer } from "react";
// @ts-ignore
// TODO: Consider renaming 'ThemeContexttt' to 'ThemeContext' for better readability and to avoid typos.
const ThemeContexttt = createContext();

const initialData = {
  theme:
    // TODO: Simplify this condition using the nullish coalescing operator (??) for better readability.
    localStorage.getItem("mtTheme") === null
      ? "Light"
      : localStorage.getItem("mtTheme") === "Light"
      ? "Light"
      : "Dark",
};

const reducer = (firstState, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...firstState, theme: action.newValue };
    default:
      // TODO: Add a console warning or error message to handle unknown action types.
      return firstState;
  }
};

export function ThemeProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);
  const toggleTheme = (newName) => {
    // TODO: Validate 'newName' to ensure it matches expected theme values ('Light' or 'Dark') before updating.
    localStorage.setItem("mtTheme", newName);
    // @ts-ignore
    dispatch({ type: "CHANGE_THEME", newValue: newName });
  };

  return (
    <ThemeContexttt.Provider value={{ ...firstState, toggleTheme }}>
      {children}
    </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;
