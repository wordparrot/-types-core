import {
  DynamicServiceResponseOutputListener,
  DynamicServiceResponseOutput,
  DynamicServiceResponseOutputCredentialAuthCallback,
  DynamicServiceResponseOutputCredentialGenerateAuthURI,
  DynamicServiceResponseOutputCredentialTest,
  DynamicServiceResponseOutputWebhook,
} from ".";

export interface DynamicServiceResponseData {
  name?: string;
  type?: string;
  message?: string;
  statusCode?: number;
  url?: string;
  error?: any;
  output: DynamicServiceResponseOutput;
  createdAt?: string;
}

export interface DynamicServiceResponse {
  result: boolean;
  data: DynamicServiceResponseData;
}

export interface DynamicServiceResponseDataListener
  extends Omit<DynamicServiceResponseData, "output"> {
  output: DynamicServiceResponseOutputListener;
}

export interface DynamicServiceResponseListener
  extends Omit<DynamicServiceResponse, "data"> {
  data: DynamicServiceResponseDataListener;
}

export interface DynamicServiceResponseDataCredentialAuthCallback
  extends Omit<DynamicServiceResponseData, "output"> {
  output: DynamicServiceResponseOutputCredentialAuthCallback;
}

export interface DynamicServiceResponseCredentialAuthCallback
  extends Omit<DynamicServiceResponse, "data"> {
  data: DynamicServiceResponseDataCredentialAuthCallback;
}

export interface DynamicServiceResponseDataCredentialGenerateAuthURI
  extends Omit<DynamicServiceResponseData, "output"> {
  output: DynamicServiceResponseOutputCredentialGenerateAuthURI;
}

export interface DynamicServiceResponseCredentialGenerateAuthURI
  extends Omit<DynamicServiceResponse, "data"> {
  data: DynamicServiceResponseDataCredentialGenerateAuthURI;
}

export interface DynamicServiceResponseDataCredentialTest
  extends Omit<DynamicServiceResponseData, "output"> {
  output: DynamicServiceResponseOutputCredentialTest;
}

export interface DynamicServiceResponseCredentialTest
  extends Omit<DynamicServiceResponse, "data"> {
  data: DynamicServiceResponseDataCredentialTest;
}

export interface DynamicServiceResponseDataWebhook
  extends Omit<DynamicServiceResponseData, "output"> {
  output: DynamicServiceResponseOutputWebhook;
}

export interface DynamicServiceResponseWebhook
  extends Omit<DynamicServiceResponse, "data"> {
  data: DynamicServiceResponseDataWebhook;
}
