import { String } from "lodash";
export interface SmtpAccount {
    id: string;
    title: string;
    content: string;
    active: boolean;
    smtpProvider: string;
    port: number;
    domain: string;
    apiKey: string;
    sender: String;
    createdAt: string;
    updatedAt: string;
}
