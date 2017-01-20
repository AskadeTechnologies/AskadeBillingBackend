/**
 * Created by AdrianIonita on 10/17/2016.
 */
var mongoose    =   require("mongoose");
// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var askadeClientContracts  = {
    "clientCode" : {
        type: String,
    },
    "contractNumber" : String,
    "startDate": Date,
    "endDate": Date,
    "docId": Number
};
// create model if not exists.
module.exports = mongoose.model('AskadeClientContracts',askadeClientContracts);