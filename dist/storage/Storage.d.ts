import { Credential } from "..";
export interface Storage {
    id: string;
    credentials: Credential[];
}
