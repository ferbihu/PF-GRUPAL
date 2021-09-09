const clientId = process.env.AUTH0_CLIENT_ID;
const clientSecret = process.env.AUTH0_CLIENT_SECRET;
const usersDatabaseName = process.env.AUTH0_USER_DATA_BASE_NAME;
const domain = process.env.AUTH0_DOMAIN;
const audience = process.env.AUTH0_AUDIENCE;
const axios = require('axios');


//creamos un usuario en auth0
exports.createAuth0User = async ({ userData: { data, metadata }, accessToken }) => {
    try {
      const url = `${domain}/api/v2/users`;
      const config = {
        headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' }
      };
      const payload = {
        ...data,
        connection: usersDatabaseName,
        user_metadata: metadata || {},
        email_verified: true,
        verify_email: false
      };

      const resp = await axios.post(url, payload, config);
      
      return resp.data;
    } catch (error) {
      console.log(error.response.status)
      if(error.response.status === 409) return {error: true,msj:"Usuario existente en la base"}
      throw error;
    }
};
//obtenemos el token para poder crear un usuario
exports.getAccessToken = () => {
    const url = `${domain}/oauth/token`;
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('client_id', clientId);
    params.append('client_secret', clientSecret);
    params.append('audience', audience);
    const config = {
      headers: { 'content-type': 'application/x-www-form-urlencoded' }
    };
    return axios.post(url, params, config);
};

//autenticamos el usuario con auth0
exports.login = async (email,password) => {
    try {
      const url = `${domain}/oauth/token`;
      const config = {
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
      };
      const params = new URLSearchParams();
      params.append('grant_type', 'http://auth0.com/oauth/grant-type/password-realm');
      params.append('username', email.toLowerCase());
      params.append('password', password);
      params.append('client_id', clientId);
      params.append('client_secret', clientSecret);
      params.append('realm', usersDatabaseName);
      params.append('scope', 'offline_access');
      
      const resp = await axios.post(url, params, config);
      return resp.data;
    } catch (error) {
      console.log('auth0 error: ', error.message);
      throw error
    }
};


