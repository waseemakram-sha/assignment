const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://waseemakram:SmiSamSia91@democluster.td9usk7.mongodb.net/full_stack?retryWrites=true&w=majority", {
    useUnifiedTopology: true ,
    useNewUrlParser: true
},(error)=>{
    if(error){
        console.log("Error in connecting to DB");
    } else{
        console.log("Connected to DB");
    }
});

const carInformationSchema = mongoose.Schema({
    carMake : String,
    carModel : String,
    carYear : Number,
    licenceNumber: String
});

const carInformation = mongoose.model("carInformation", carInformationSchema);


const userInformationSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    dateOfBirth : Date,
    age : Number,
    licenceNumber : String,
    carInformation : carInformationSchema
});


const userInformation = mongoose.model("userInformation", userInformationSchema);

module.exports = {mongoose,userInformation,carInformation};


