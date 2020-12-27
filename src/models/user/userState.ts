export interface UserState {
  readonly id: number;
  readonly displayName: string;
  readonly logedIn: boolean;
  readonly errors?: string;
}
