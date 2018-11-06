import { useState, useEffect } from "react";
import * as API from "../api";
export const useUserInfo = userId => {
  const [user, setUser] = useState(false);
  useEffect(() => {
    const response = API.userInfo(userId);
    setUser(response);
  });
  return user;
};
