import { BlueprintEntityRequirementMap, BlueprintEntityRequirementType } from ".";
export declare const setToNull: string[];
export declare const excludedFieldValues: string[];
export declare const excludedFieldTypes: string[];
export declare const fieldsMappedToRequirements: Record<string, BlueprintEntityRequirementType>;
export declare const ignoreIfNotObject: string[];
export declare const BlueprintExclusions: {
    entityIdNames: string[];
    excludedFieldTypes: string[];
    excludedFieldValues: string[];
    ignoreIfNotObject: string[];
    setToNull: string[];
};
export declare const setBlueprintFieldsToNull: <T = any>(entity: T) => T;
export declare const createRequirementMap: <T = any>(entity: T) => BlueprintEntityRequirementMap;
