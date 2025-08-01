const JWT = require('jsonwebtoken');
const crypto = require('crypto');

const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 4096,
});
//const keySecret = 'ThiIsVeryStrongSecretKey';
const privatePem = privateKey.export({
    type: 'pkcs1', // or 'pkcs8'
    format: 'pem'
});

const publicPem = publicKey.export({
    type: 'pkcs1', // or 'spki'
    format: 'pem'
});

console.log("Private Key:\n", privatePem);
console.log("Public Key:\n", publicPem);

const token= JWT.sign({userId:123, roles:['admin']},privatePem, {algorithm:'RS256', expiresIn: '1h'});
console.log('token: ',token);
JWT.verify(token,publicPem, { algorithms: ['RS256'] },(err, decoded) => {
    if (err) console.log('Error verify token',err);
    console.log('decoded:'+ JSON.stringify(decoded));
})