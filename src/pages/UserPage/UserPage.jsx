import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../components/Router/Router";
import { AsyncThunks } from "../../store/actions";
import { userActions } from "../../store/reducers/slices/userSlice";
import { getIsLoading, getUser, getUserError } from "../../store/selectors";

const UserPage = () => {
  const user = useSelector(getUser);
  const error = useSelector(getUserError);
  const loading = useSelector(getIsLoading);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(error);
  const fetchMyProfile = async () => {
    await dispatch(AsyncThunks.getMyProfile());
  };

  const logout = () => {
    dispatch(userActions.logout());
    navigate(ROUTES.LOGIN);
  };

  useEffect(() => {
    fetchMyProfile();
  }, []);

  if (loading) return <p>loading...</p>;
  return (
    <div>
      {error && <p>{error}</p>}
      <h1>{user.username}</h1>
      <h2>{user.phoneNumber}</h2>

      <button onClick={logout}>log out</button>
    </div>
  );
};

export default UserPage;
