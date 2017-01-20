/**
 * Created by AdrianIonita on 1/19/2017.
 */
var mongoose    =   require("mongoose");
// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var askadeLogin  = {
    "companyCode" : {
        type: String
    },
    "email": String,
    "password": String,
    "socialMediaId": String,
    "owner" : String,
    "startDate": Date,
    "endDate": Date
};
// create model if not exists.
module.exports = mongoose.model('AskadeLogin',askadeLogin);
