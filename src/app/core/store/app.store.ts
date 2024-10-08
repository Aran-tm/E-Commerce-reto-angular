import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';

// global app interface
interface AppState {
  userIsLogged: boolean;
  productsCount: number;
}

// initial state for app
const initialState: AppState = {
  userIsLogged: false,
  productsCount: 0,
};

// app store
export const AppStore = signalStore(
  { providedIn: 'root' }, // provide in root application
  withState(initialState), // initial state
  withComputed((store) => ({
    isLogged: computed(() => store.userIsLogged),
    quantity: computed(() => store.productsCount),
  })),
  withMethods((store) => ({
    // sign in function
    signIn() {
      patchState(store, () => ({ userIsLogged: true }));
    },
    // add to cart function
    addToCart() {
      let quantity = store.productsCount();
      patchState(store, () => ({ productsCount: quantity + 1 }));
    },
  }))
);
