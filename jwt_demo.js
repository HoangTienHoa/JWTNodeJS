const JWT = require('jsonwebtoken');
const keySecret = 'ThiIsVeryStrongSecretKey';
const token= JWT.sign({userId:123, roles:['admin']},keySecret, {expiresIn: '1h'});
console.log('token: ',token);
JWT.verify(token,keySecret, (err, decoded) => {
    if (err) console.log('Error verify token',err);
    console.log('decoded:'+ JSON.stringify(decoded));
})