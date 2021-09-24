const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const domain = process.env.AUTH0_DOMAIN;
const clientId = process.env.AUTH0_CLIENT_ID;

const generateJWT = (id, name )=>{
return new Promise((resolve, reject) =>{
    const payload ={id, name} ;
    jwt.sign(payload,process.env.SECRET_JWT_SEED,{
        expiresIn:'2h'
    },(err, token)=>{
        if(err){
            console.log(err);
            reject('No se genero token')
        }
        resolve(token);
    })
})
}




const config = {
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${domain}/.well-known/jwks.json`
  }),

  audience: clientId,
  issuer: `${domain}/`,
  algorithms: ['RS256']
};
exports.checkJwt = jwt(config);

exports ={
    generateJWT
}