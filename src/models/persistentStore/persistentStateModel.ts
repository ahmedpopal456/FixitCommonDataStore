export interface PersistentStateModel {
  readonly user: {
    isAuthenticated: boolean,
    authToken: string | undefined,
  }
}
