/**
 * Created by AdrianIonita on 10/17/2016.
 */
var mongoose    =   require("mongoose");
// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var askadeResources  = {
    "resourceCode" : {
        type:String,
        index: {
            unique: true
        }
    },
    "resourceName": String,
    "resourceJob" : String,
    "resourceDep": String,
    "startDate": Date,
    "endDate": Date,
    "resourceSkills":[
        {
            "skillName":{
                type:String,
                index:{
                    unique: true
                }
            },
            "skillLevel": Number,
            "certified": String
        }
    ]
};
// create model if not exists.
module.exports = mongoose.model('AskadeResources',askadeResources);