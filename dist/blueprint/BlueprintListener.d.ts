import { BlueprintEntity } from "..";
import { InitialValues } from "..";
export interface BlueprintListener<L = string> extends BlueprintEntity {
    initialValues: InitialValues<L>;
}
