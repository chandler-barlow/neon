import React, { useReducer, createContext } from "react";
let postsData = require("../data/posts.json");

export const GlobalContext = createContext();

export function GlobalContextProvider(props) {
  const initialState = {
    posts: postsData.posts,
  };

  let reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT_STAKE":
        let newState = { ...state };
        for (i in newState.posts) {
          if (newState.posts[i].id === action.payload.postId) {
            newState.posts[i].stake += action.payload.amount;
            break;
          }
        }
        return { ...newState };
      default:
        return { ...state };
    }
  };

  let [state, dispatch] = useReducer(reducer, initialState);
  let value = { state, dispatch };
  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
}
