import { AuthVarsData } from "./"
import { UserData } from "./"

export interface HomePageProps {
  authVars: AuthVarsData
  setAuthVars: React.Dispatch<React.SetStateAction<AuthVarsData>>
  userData: UserData,
  setUserData: React.Dispatch<React.SetStateAction<UserData>>
}