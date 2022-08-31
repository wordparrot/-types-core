import { AbstractPipelineNode } from "..";
export interface Webhook extends AbstractPipelineNode {
    methods: string[];
    route: string;
}
