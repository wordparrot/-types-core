import { Pipeline } from ".";
import { Credential } from "..";
import { User } from '..';
export interface AbstractPipelineNode {
    id: string;
    title: string;
    content: string;
    status: string;
    provider: string;
    type: string;
    values: Record<string, any>;
    credential: Credential;
    credentialId: string;
    downstreamPipelines: Pipeline[];
    user: User;
    createdAt: string;
    updatedAt: string;
}
