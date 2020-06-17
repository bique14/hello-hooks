import React from "react";
import UseStateExample from "../UseStateExample";
import StateExample from "../StateExample";
import CodeExample from "../CodeExample";


export default {
  title: "Code",
};

export const UseStateStorybook = () => <UseStateExample />;
export const StateStorybook = () => <StateExample />;
export const CodeExampleStorybook = () => <CodeExample code="code" />;

UseStateStorybook.story = {
  name: "UseState",
};

StateStorybook.story = {
  name: "State",
};

CodeExampleStorybook.story = {
  name: "Show code"
}