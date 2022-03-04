import { Axios } from 'axios'

export type SandboxLib = Partial<{
    axios: Axios
}>