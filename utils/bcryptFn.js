const bcrypt = require('bcrypt');

//hash password
bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        //store hash i your password DB
    });
});

async function hashPassword(password){
    const hashedPassword = await bcrypt.hash(password,10)
    return hashedPassword;
}

//compare password
async function comparePassword(password, hashPassword){
    const comparedPassword = await bcrypt.compare(password,10)
    return comparedPassword;
}

module.exports = {
    hashPassword,
    comparePassword
}