import { Ingredient } from '../shared/ingredient.model';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from './store/shopping-list.actions';
import * as fromShoppingList from './store/shopping-list.reducer';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor(private store: Store<fromShoppingList.AppState>) {}

  startEditing(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

  stopEditing() {
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }

  getShoppingListState(): Observable<fromShoppingList.State> {
    return this.store.select('shoppingList');
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.store.dispatch(new ShoppingListActions.AddIngredient(ingredient));
  }

  addIngredients(ingredients: Ingredient[]) {
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  }

  updateIngredient(newIngredient: Ingredient) {
    this.store.dispatch(new ShoppingListActions.UpdateIngredient({
      ingredient: newIngredient,
    }));
  }

  deleteIngredient(ingredient: Ingredient) {
    this.store.dispatch(new ShoppingListActions.DeleteIngredient(ingredient) );
  }
}
