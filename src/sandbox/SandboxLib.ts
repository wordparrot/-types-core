import { Axios } from 'axios'
import { FileUtility } from '..'

export type SandboxLib = Partial<{
    axios: Axios
    _: any
    FileUtility: FileUtility
}>