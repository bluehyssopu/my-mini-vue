import { h } from "../../lib/my-mini-vue.esm.js";

export const App = {
  // 假设必须要写 render
  render() {
    // ui
    return h(
      "div",
      {
        id: "root",
        class: ["red", "hard"],
      },
      // "hi, " + this.msg
      // string
      // Array
      [h("p", { class: "red" }, "hi"), h("p", { class: "blue" }, "mini-vue")]
    );
  },

  setup() {
    return {
      msg: "my-mini-vue",
    };
  },
};
