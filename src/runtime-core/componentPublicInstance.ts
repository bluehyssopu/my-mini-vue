const publicPropertiesMap = {
  $el: (i) => i.vnode.el,
};

export const PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    // setupState
    const { setupState } = instance;
    if (key in setupState) {
      return setupState[key];
    }

    const publciGetter = publicPropertiesMap[key];
    if(publciGetter) {
      return publciGetter(instance);
    }
  },
};
