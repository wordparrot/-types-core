import { Axios } from 'axios'
import { FileUtility } from '../file-utility'

export type SandboxLib = Partial<{
    axios: Axios
    _: any
    FileUtility: FileUtility
}>