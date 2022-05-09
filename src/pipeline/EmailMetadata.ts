import { FileMetadata } from ".";

export interface EmailMetadata {
  from: string;
  cc?: string[];
  bcc?: string[];
  recipients: string[];

  subject: string;
  body?: string;
  template?: string;

  language?: string;
  messageId?: string;

  headers: {
    references?: string;
    inReplyTo?: string;
    messageId?: string;
  };

  locals?: Record<string, any>;

  attachments?: FileMetadata[];

  links?: {
    text: string;
    url: string;
    queryParams: Record<string, string>;
  }[];
}
