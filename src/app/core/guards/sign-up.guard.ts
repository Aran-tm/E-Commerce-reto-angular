import { CanDeactivateFn } from '@angular/router';

export const signUpGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
