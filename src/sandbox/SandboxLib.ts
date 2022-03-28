import { Axios } from 'axios'
import { FileUtility, FileUtilityConfig } from '..'
import { ConstructableWithConfig } from '..'

export type SandboxLib = Partial<{
    axios: Axios
    _: unknown
    FileUtility: ConstructableWithConfig<FileUtilityConfig, FileUtility>
}>