import { ValidationSchemaItem } from "..";
import { FieldItem } from "..";
import { Listener } from "..";
export interface BlueprintListener {
    title: string;
    content: string;
    initialValues: Partial<Listener>;
    validationSchema?: ValidationSchemaItem[];
    fields?: FieldItem[];
}
