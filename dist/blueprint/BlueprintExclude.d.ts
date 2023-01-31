import { BlueprintEntityRequirementMap, BlueprintEntityRequirementType, BlueprintEntityRequirement } from ".";
export declare const setToUndefined: string[];
export declare const excludedFieldValues: string[];
export declare const excludedFieldTypes: string[];
export declare const fieldsMappedToRequirements: Record<string, BlueprintEntityRequirementType>;
export declare const ignoreIfNotObject: string[];
export declare const BlueprintExclusions: {
    excludedEntityIds: string[];
    excludedFieldTypes: string[];
    excludedFieldValues: string[];
    ignoreIfNotObject: string[];
    setToUndefined: string[];
};
export declare const setBlueprintFieldsToUndefined: <T = any>(entity: T) => T;
export declare const createRequirementMap: <T = any>(entity: T, addedRequirements?: BlueprintEntityRequirement[]) => BlueprintEntityRequirementMap;
