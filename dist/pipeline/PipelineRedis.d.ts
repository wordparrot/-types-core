export interface PipelineRedis {
    title: string;
    content: string;
    siteId: string;
    pipelineId: string;
    pipelineJobId: string;
    featuredGroupId: string;
    featuredThreadId: string;
    featuredThreadReleaseId: string;
    linkedPipelineJobId?: string;
    linkedRedisKey?: string;
    linkedPipelineNodeIds?: string[];
    timeToRun: number;
    currentIndex: number;
    pipelinesByLevel?: string[];
    nodesByLevel: string[][];
    parentNodeMap: Record<string, string[]>;
    nodeTitles: Record<string, string>;
    remaining: string[];
    pipelineStatus: string;
    upstreamPipelines: string[];
    upstreamErrors: string[];
    upstreamDisabled: string[];
    upstreamConditionFailed: string[];
    recordReports: boolean;
}
