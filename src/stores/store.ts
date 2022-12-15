import { createContext, useContext } from 'react';
import PostStore from './postStore';
import TestStore from './testStore';

interface Store {
    postStore: PostStore,
    testStore: TestStore
}

export const store: Store = {
    postStore: new PostStore(),
    testStore: new TestStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext)
}