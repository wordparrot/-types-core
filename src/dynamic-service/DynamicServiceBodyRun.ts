import { DynamicServiceBodyConfig } from ".";

export interface DynamicServiceBodyRun {
    main: DynamicServiceBodyConfig[]
    development?: DynamicServiceBodyConfig[]
    script: string
}