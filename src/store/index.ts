export type State = {
  count: number;
  info: string;
};
export type Store = {
  state: State;
  setState: (
    stateOrFn: Partial<State> | ((state: State) => Partial<State>)
  ) => void;
  subscribe: (listener: () => void) => () => void;
  listeners: Set<() => void>;
  getSnapshot: () => State;
};

const store: Store = {
  state: {
    count: 0,
    info: 'Hello',
  },
  setState(stateOrFn) {
    const newState =
      typeof stateOrFn === 'function' ? stateOrFn(store.state) : stateOrFn;
    store.state = {
      ...store.state,
      ...newState,
    };
    store.listeners.forEach((listener) => listener());
  },
  listeners: new Set(),
  subscribe(listener) {
    store.listeners.add(listener);
    return () => {
      store.listeners.delete(listener);
    };
  },
  getSnapshot() {
    return store.state;
  },
};

export default store;
