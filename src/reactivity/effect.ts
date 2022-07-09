class ReactiveEffect {
  private _fn: any;

  constructor(fn, public scheduler?) {
    this._fn = fn;
  }

  run() {
    activeEffect = this;
    return this._fn();
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
    if(effect.scheduler) {
      effect.scheduler();
    } else {
      effect.run();
    }
  }
}

let activeEffect;
export function effect(fn, options:any = {}) {
  // fn
  const _effect = new ReactiveEffect(fn, options.scheduler);
  _effect.run();

  return _effect.run.bind(_effect);
}