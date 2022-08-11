import { h } from "../../lib/my-mini-vue.esm.js";

window.self = null;
export const App = {
  // 假设必须要写 render
  render() {
    window.self = this;
    // ui
    return h(
      "div",
      {
        id: "root",
        class: ["red", "hard"],
      },
      // setupState
      // this.$el -> get root element
      "hi, " + this.msg
      // string
      // Array
      // [h("p", { class: "red" }, "hi"), h("p", { class: "blue" }, "mini-vue")]
    );
  },

  setup() {
    return {
      msg: "my-mini-vue.This is a test.Hello World!",
    };
  },
};
