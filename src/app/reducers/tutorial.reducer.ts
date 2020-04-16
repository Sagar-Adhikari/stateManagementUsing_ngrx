import { Action } from "@ngrx/store";
import { Tutorial } from "./../models/tutorial.model";
import * as TutorialActions from "./../actions/tutorial.action";

const initialState: Tutorial = {
  name: " innitial Tutorial",
  url: "http://google.com",
};
export function reducer(
  state: Tutorial[] = [initialState],
  action: TutorialActions.Actions
) {
  switch (action.type) {
    case TutorialActions.add_Tutorial:
      return [...state, action.playload];

    case TutorialActions.remove_tutorial:
      state.splice(action.playload, 1);
      return state;
    default:
      return state;
  }
}
