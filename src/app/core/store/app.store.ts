import { computed } from '@angular/core';
import { ProductCard } from '@global/interfaces/product-card.interface';
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
  hideLimiterOffer: boolean;
  quantityOfProducts: number;
  products: ProductCard[];
}

// initial state for app
const initialState: AppState = {
  userIsLogged: false,
  hideLimiterOffer: false,
  quantityOfProducts: 0,
  products: [],
};

// app store
export const AppStore = signalStore(
  { providedIn: 'root' }, // provide in root application
  withState(initialState), // initial state
  // computed signals
  withComputed((state) => ({
    isLogged: computed(() => state.userIsLogged()),
    hideLimiterOffer: computed(() => state.hideLimiterOffer()),
    quantityOfProducts: computed(() => state.quantityOfProducts()),
    products: computed(() => state.products()),
  })),
  withMethods((store) => ({
    isUserLogged(): void {
      patchState(store, () => ({ userIsLogged: true }));
    },
    hiddenLimitedOffer(): void {
      patchState(store, () => ({ userIsLogged: true }));
    },
    quantityOfProducts(): void {
      patchState(store, () => ({ userIsLogged: false }));
    },
  }))
);
