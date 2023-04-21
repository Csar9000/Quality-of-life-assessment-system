const passport = require('passport')
const dbConfig = require('../config/db.config')
const sequelize = require('sequelize')
const User = require('../models/User')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt


const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: dbConfig.jwt
}

module.exports = passport=>{
    passport.use(
        new JwtStrategy(options, async (payload, done) => {
            try{
                const user = await User.findByPk(payload.codeUser)
                if (user) {
                    done(null, user)
                }else{
                    done(null, false)
          }
            }catch(e){
                console.log(e)
            }


        })
    )
}