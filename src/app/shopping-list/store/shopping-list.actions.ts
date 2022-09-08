import { Action } from 'rxjs/internal/scheduler/Action';
import { Ingredient } from '../../shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class AddIngredient extends Action<any> {
  readonly type = ADD_INGREDIENT;
  payload: Ingredient;
}
