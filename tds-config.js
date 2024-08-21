const localmethod = require('tds-local').method
const bcrypt = require('bcrypt')

function initialize(tds,getUserByEmail){
    const authenticateuser = async (email , password , done) => {
        const user = getUserByEmail(email)
        if (user == null){
            return done(null, false ,{message : 'No user found wiht tha email'})
        }
        try{
            if (await bcrypt.compare(password,user.password)){
                return done(null,user)
            }
            else{
                return done(null,false,{message : 'passwrod incorrect'})
            }

        }
        catch(e){
            return done(e)
        }
    }
    tds.use(new localmethod({ username : 'email'}),authenticateuser)
    tds.serializeUser((user,done)=>{})
    tds.deserializeUser((id, done)=>{
    })
}
module.exports = initialize