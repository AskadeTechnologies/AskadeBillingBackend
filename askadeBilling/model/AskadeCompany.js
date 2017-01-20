/**
 * Created by AdrianIonita on 10/17/2016.
 */
var mongoose    =   require("mongoose");
// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var askadeCompany  = {
    "companyCode" : {
        type: String
    },
    "companyName": {
        type: String,
        index:{
            unique:true
        }
    },
    "owner" : String,
    "startDate": Date,
    "endDate": Date
};
// create model if not exists.
module.exports = mongoose.model('AskadeCompany',askadeCompany);/**
 * Created by AdrianIonita on 1/19/2017.
 */
