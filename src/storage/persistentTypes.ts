export enum PersistentActionTypes {
  SET_LIGHT_MODE_PREFERENCE = 'persistent/SET_LIGHT_MODE_PREFERENCE',
  SET_DARK_MODE_PREFERENCE = 'persistent/SET_DARK_MODE_PREFERENCE',
}

export interface PersistentAction {
  type: PersistentActionTypes;
  payload?: any;
}

export interface PersistentState {
  readonly darkMode: boolean;
}
