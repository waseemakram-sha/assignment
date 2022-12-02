const path = require('path')

// const login = (req, res) => {
//     res.sendFile(path.join(process.cwd(),'public','login.html'))
// }

// const dashboard = (req, res) => {
//     res.sendFile(path.join(process.cwd(),'public','dashboard.html'))
// }

const {userInformation,carInformation} = require('../database/database')

const login = (req,res) => {
    res.render('login.ejs')
}
const dashboard = (req,res) => {
    res.render('dashboard.ejs')
}

const g2test = (req,res) => {
    res.render('g2_test.ejs')
}

const gtest = (req,res) => {
    res.render('g_test.ejs')
}



const saveUser = async(req,res) => {
    const {firstName,lastName,age,dob,carMake,carModel,carYear,licenceNumber} = req.body

    let userInfo = userInformation.findOne({firstName}) 

    userInfo = new userInformation({
        firstName : firstName,
        lastName : lastName,
        age : age ,
        dateOfBirth : dob,
        licenceNumber : licenceNumber,
        carInformation : {
            carMake : carMake,
            carModel : carModel,
            carYear : carYear,
            licenceNumber : licenceNumber
        }
             
    })

    await userInfo.save()

    res.render('dashboard.ejs')

}

const getUser = async(req,res) => {
    const {licenceNumber} = req.body
    let userInfo = userInformation.findOne({licenceNumber : licenceNumber} , (error, foundUser) => {
        if(foundUser === null ){
            console.log("User Not Found")
        } else if(foundUser){
            console.log("User Found")
            res.render('g_test.ejs' ,{
                user : foundUser
            });

        }
    });

    
}

module.exports = {login, dashboard, g2test, gtest, saveUser, getUser}