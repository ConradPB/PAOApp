/* eslint-disable prettier/prettier */
export type RootStackParamList = {
    Welcome: undefined;
    SignUp: undefined;
    Login: undefined;
    Home: undefined;
    TaskList: undefined;
    TaskDetails: { id: string };
    AddEditTask: { id?: string };
  };
