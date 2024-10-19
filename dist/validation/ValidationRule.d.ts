export type ValidationRuleType = "json" | "csv" | "fileMetadata";
export type ValidationCondition = "equals" | "notEquals" | "isTruthy" | "isFalsey" | "lessThan" | "lessThanOrEquals" | "greaterThan" | "greaterThanOrEquals" | "isType" | "isNotType" | "always";
export type ValidationHandler = "log" | "warn" | "error" | "remove";
export type ValidationValueSeparator = string;
export type ValidationComparisonValue = string | number | boolean | null | undefined;
export type ValidationRule = {
    ruleType: ValidationRuleType;
    idProperty?: string;
    property: string;
    condition: ValidationCondition;
    separator?: ValidationValueSeparator;
    allowEmpty?: boolean;
    value: ValidationComparisonValue;
    onInvalid: ValidationHandler;
};
