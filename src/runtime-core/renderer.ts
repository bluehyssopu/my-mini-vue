import { createComponentInstence, setupComponent } from "./component";

export function render(vnode, container) {
  // patch
  patch(vnode, container);
}

function patch(vnode, container) {
  // 判斷vnode 是不是一个element
  // 是 element 那么就应该处理 element
  // 思考： 如何区分是 element 还是 component类型呢？
  // processElement()
  
  processComponent(vnode, container);
}

function processComponent(vnode: any, container: any) {
  mountComponent(vnode, container);
}

function mountComponent(vnode: any, container) {
  const instance = createComponentInstence(vnode);

  setupComponent(instance);
  setupRenderEffect(instance, container);
}

function setupRenderEffect(instance: any, container) {
  const subTree = instance.render();

  // vnode -> patch
  // vnode -> element -> mountElement

  patch(subTree, container);
}
