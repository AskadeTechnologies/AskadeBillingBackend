/**
 * Created by AdrianIonita on 10/17/2016.
 */
var mongoose    =   require("mongoose");
// create schema
var askadeClients  = {
    "clientCode": {
        type:String,
        index: {
            unique: true
        }
    },
    "clientName" : {
        type: String,
        index: {
            unique: true
        }
    },
    "ProductOwner": String,
    "location" : String,
    "startDate": Date,
    "endDate": Date
};
// create model if not exists.
module.exports = mongoose.model('AskadeClients',askadeClients);