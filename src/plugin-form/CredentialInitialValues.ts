export interface CredentialInitialValues<T = string>
  extends Record<string, any> {
  provider: T;
  title: string;
  content: string;
  status: string;
}
