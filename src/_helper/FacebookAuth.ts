import { Dispatch } from 'redux';
// import { gql } from '../queries/gql';
// import { LOGIN_SOCIAL, USER } from '../queries/user';

/**
 *
 */
export const FacebookAuth = async (facebookData: any, dispatch: Dispatch<any>, history: any) => {
  //
  // let history = useHistory();
  //
  console.log('facebook data', facebookData);
  //
  // const { data } = await gql(LOGIN_SOCIAL, {
  //   type: 'fecebook',
  //   email: facebookData.email ? facebookData.email : '',
  //   user_id: facebookData.id, // eslint-disable-line @typescript-eslint/camelcase
  //   name: facebookData.name,
  //   avatar: facebookData.picture.data.url,
  //   access_token: facebookData.accessToken, // eslint-disable-line @typescript-eslint/camelcase
  // });

  // if (data.LoginSocial.success) {
  //   dispatch({
  //     type: 'SET_USER',
  //     payload: {
  //       email: facebookData.email ? facebookData.email : '',
  //       name: facebookData.name,
  //       avatar: facebookData.picture.data.url,
  //     },
  //   });

  //   localStorage.setItem('token', data.LoginSocial.token);

  //   //
  //   const user = await gql(USER);

  //   if (user.data.User.id) {
  //     dispatch({
  //       type: 'SET_USER',
  //       payload: {
  //         id: user.data.User.id,
  //         name: user.data.User.name,
  //         lastName: user.data.User.last_name,
  //         email: user.data.User.email,
  //         avatar: user.data.User.avatar,
  //         planId: user.data.User.plan_id,
  //       },
  //     });
  //   }

  //   history.push('/dashboard');
  // } else {
  //   history.push('/register');
  // }
};
