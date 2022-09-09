import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from './store/shopping-list.actions';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor(private store: Store<{shoppingList: { ingredients: Ingredient[] } }>) {}

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

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.store.dispatch(new ShoppingListActions.UpdateIngredient({
      index,
      ingredient: newIngredient,
    }));
  }

  deleteIngredient(index: number) {
    this.store.dispatch(new ShoppingListActions.DeleteIngredients(index) );
  }
}
