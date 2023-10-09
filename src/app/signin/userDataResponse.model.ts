export interface UserDataResponse {
  status: boolean;
  data: {
    firstName: string;
    lastName: string;
    _id: string;
  };
  token: string;
}
