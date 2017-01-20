/**
 * Created by AdrianIonita on 10/17/2016.
 */
var mongoose    =   require("mongoose");
// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var askadeClientProjects  = {
    "clientCode" : {
        type: String
    },
    "projectCode": {
        type: String,
        index:{
            unique:true
        }
    },
    "projectName" : String,
    "projectManager": String,
    "startDate": Date,
    "endDate": Date,
    "tarifAmount": Number,
    "tarifUnit": Number,
    "tarifPeriod": String
};
// create model if not exists.
module.exports = mongoose.model('AskadeClientProjects',askadeClientProjects);