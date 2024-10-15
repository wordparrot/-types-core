export type ValidationRuleType = "json" | "csv" | "fileMetadata";
export type ValidationCondition = "equals" | "notEquals" | "isDefined" | "isUndefined" | "lessThan" | "greaterThan" | "isType" | "isNotType" | "always";
export type ValidationHandler = "log" | "warn" | "error" | "remove";
export type ValidationValueSeparator = string;
export type ValidationComparisonValue = string | number | boolean | null | undefined;
export type ValidationRule = {
    ruleType: ValidationRuleType;
    condition: ValidationCondition;
    separator?: ValidationValueSeparator;
    value: ValidationComparisonValue;
    onInvalid: ValidationHandler;
};
