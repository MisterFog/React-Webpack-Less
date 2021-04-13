import { Dispatch } from 'redux';
// import { gql } from '../queries/gql';
// import { LOGIN_SOCIAL, USER } from '../queries/user';

/**
 *
 */
export const GoogleAuth = async (googleData: any, dispatch: Dispatch<any>, history: any) => {
  //
  // let history = useHistory();
  //
  // console.log('google data', googleData);
  // const { data } = await gql(LOGIN_SOCIAL, {
  //   type: 'google',
  //   email: googleData.profileObj.email,
  //   user_id: googleData.googleId, // eslint-disable-line @typescript-eslint/camelcase
  //   name: googleData.profileObj.name,
  //   avatar: googleData.profileObj.imageUrl,
  //   access_token: googleData.accessToken, // eslint-disable-line @typescript-eslint/camelcase
  // });

  // if (data.LoginSocial.success) {
  //   dispatch({
  //     type: 'SET_USER',
  //     payload: {
  //       email: googleData.profileObj.email,
  //       name: googleData.profileObj.name,
  //       avatar: googleData.profileObj.imageUrl,
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
