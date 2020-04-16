// import { add_Tutorial } from './tutorial.action';
import { Tutorial } from "./../models/tutorial.model";
import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";

export const add_Tutorial = "[Tutorial] Add";
export const remove_tutorial = "[Tutorial] Remove";

export class AddTutorial implements Action {
  readonly type = add_Tutorial;
  constructor(public playload: Tutorial) {}
}
export class RemoveTutorial implements Action {
  readonly type = remove_tutorial;
  constructor(public playload: number) {}
}
export type Actions = AddTutorial | RemoveTutorial;
