import { track, trigger } from "./effect";

export function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      const res = Reflect.get(target, key);

      // TODO 依赖收集
      track(target, key);
      return res;
    },
    
    set(target, key, value) {
      const res = Reflect.set(target, key, value);

      // TODO 触发依赖
      trigger(target, key);
      return res;
    },
  });
}

export function readonly(raw) {
  return new Proxy(raw, {
    get(target, key) {
      const res = Reflect.get(target, key);
      // not set 因此没有tarck和set
      return res;
    },

    set(target, key, value) {
      return true;
    },
  });
}
