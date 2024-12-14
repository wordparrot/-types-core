import { PipelineBatchProcessState } from "..";
export interface PipelineRedis {
    meta: {
        title: string;
        content: string;
        siteId: string;
        pipelineId: string;
        pipelineJobId: string;
        pipelineJobSequenceId: string;
        upstreamPipelineJobId: string;
        linkedRedisKey?: string;
    };
    progressVisualMap?: Record<string, string>;
    batchProcessStartingNodeMap?: Record<string, boolean>;
    parentNodeMap: Record<string, string[]>;
    nodeTitles: Record<string, string>;
    config: {
        runOnce?: boolean;
        recordReports: boolean;
    };
    state: {
        timeToRun: number;
        currentIndex: number;
        pipelineStatus: string;
        dataStatus: string;
        currentLevel: string[];
        previousLevel: string[];
        parentBlocklist: string[];
        nodesByLevel: string[][];
        pipelinesByLevel?: string[];
        hasDownstreamPipelines: boolean;
        upstreamErrors: string[];
        upstreamDisabled: string[];
        upstreamConditionFailed: string[];
    };
    events: {
        eventFromPromptId?: string;
        eventFromPromptInstanceId?: string;
        eventFromPromptRecipientId?: string;
        eventFromListenerId?: string;
        eventFromWebhookId?: string;
        eventFromHttpOrigin?: string;
        eventFromHttpRequest?: string;
        eventFromPipelineId?: string;
        eventFromPipelineNodeId?: string;
    };
    batchProcessState?: PipelineBatchProcessState;
}
