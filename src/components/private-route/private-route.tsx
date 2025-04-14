import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { State } from '../../types/state';


type PrivateRouteProps = {
  children: JSX.Element;
}

const PrivateRoute = (props: PrivateRouteProps): JSX.Element => {
  const {children} = props;
  const authorizationStatus = useAppSelector((state: State) => state.authorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />
  );
};

export default PrivateRoute;
