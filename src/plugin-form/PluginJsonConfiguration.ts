export interface PluginJsonConfiguration {
    name: string
    title: string
    description: string
    author: string
    private: boolean
    hubPluginId: string
    platform: string
    website: string
    version: string
    repository: string
    license: string
    logo: string
    categories?: string[]
    subcategories?: string[]
}