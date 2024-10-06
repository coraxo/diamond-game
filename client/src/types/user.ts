import { AuthVarsData } from './'

export interface RegistrationFormData {
  username: string
  password: string
}

export interface LoginFormProps {
  authVars: AuthVarsData;
  setAuthVars: React.Dispatch<React.SetStateAction<AuthVarsData>>
  userData: UserData,
  setUserData: React.Dispatch<React.SetStateAction<UserData>>
}

export interface LoginFormData {
  username: string
  password: string
}

export interface UserData {
  username: string | null
}
