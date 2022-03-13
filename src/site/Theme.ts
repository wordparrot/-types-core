import { Site } from '..'

export interface Theme {
    id: string
  
    defaultView: string
    bannerGradient: boolean
    type: 'light' | 'dark'
  
    primaryMain: string
    primaryLight: string
    primaryDark: string
    primaryContrastText: string
  
    secondaryMain: string
    secondaryLight: string
    secondaryDark: string
    secondaryContrastText: string
  
    successMain: string
    warningMain: string
    errorMain: string
    infoMain: string
  
    textPrimary: string
    textSecondary: string
    textDisabled: string
  
    backgroundDefault: string
    backgroundPaper: string
  
    divider: string
    footer: string

    site?: Site

    createdAt: string
    updatedAt: string
}