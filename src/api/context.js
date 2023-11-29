import { createContext } from "react"

//Global contexts to get, store and put data to Storage
export const UsersData = createContext();
export const UsersTasksData = createContext();

//Local context on dashboard to get, store, change and put data of logged in user
export const CurrentUser = createContext();
export const CurrentUserTasks = createContext();
