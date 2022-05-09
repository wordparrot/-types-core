import { FileMetadata } from ".";
import { CsvMetadata } from "..";
import { RequireAtLeastOne } from "../require/RequireAtLeastOne";
interface EmailMetadataBase {
    from?: string;
    cc?: string[];
    bcc?: string[];
    recipients: string[];
    subject: string;
    body?: string;
    template?: string;
    language?: string;
    messageId?: string;
    headers?: {
        references?: string;
        inReplyTo?: string;
        messageId?: string;
    };
    locals?: Record<string, any>;
    fileMetadata?: FileMetadata[];
    json?: any[];
    csv?: CsvMetadata[];
    links?: {
        text: string;
        description?: string;
        url: string;
        queryParams: Record<string, string>;
    }[];
}
export declare type EmailMetadata = RequireAtLeastOne<EmailMetadataBase, 'body' | 'template'>;
export {};
