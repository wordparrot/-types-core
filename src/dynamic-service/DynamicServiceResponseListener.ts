import { DynamicServiceResponseOutput } from ".";

export interface DynamicServiceResponseOutputListener extends DynamicServiceResponseOutput {
    passEvent: boolean
}