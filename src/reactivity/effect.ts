class ReactiveEffect {
  private _fn: any;

  constructor(fn) {
    this._fn = fn;
  }

  run() {
    activeEffect = this;
    this._fn();
  }
}

const targetMap = new Map();
export function track(target, key) {
  // set
  // target -> key -> dep
  let depsMap = targetMap.get(target);
  // 解决初始化的问题
  if(!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }

  let dep = depsMap.get(key);
  if(!dep) {
    dep = new Set();
    depsMap.set(key, dep)
  }
  
  dep.add(activeEffect);
  // const dep = new Set();
}

export function trigger(target, key) {
  let depsMap = targetMap.get(target);
  let dep = depsMap.get(key);

  for(const effect of dep) {
    effect.run();
  }
}

let activeEffect;
export function effect(fn) {
  // fn
  const _effect = new ReactiveEffect(fn);
  _effect.run();
}