const ApiError = require("../error/ApiError")
const bcrypt = require('bcrypt')
const {User,Basket} = require('../models/models')

class UserController{
    async registration(req,res,next){
        const {email,password,role} = req.body
        if(!email || !password){
            return next(ApiError.badRequest("Неккоректный email или пароль"))
        }
    }
    async login(req,res){
        
    }
    async check(req,res){
        const {id}=req.query
        if(!id){
            return next(ApiError.badRequest('Не задан ID'))
        }
        
    }
}

module.exports = new UserController()