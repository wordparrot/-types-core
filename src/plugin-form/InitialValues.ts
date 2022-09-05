export interface InitialValues<P = string, T = string, S = string>
  extends Record<string, any> {
  provider: P;
  type: T;
  title: string;
  content: string;
  status: S;
  values: Record<string, any>;
}
