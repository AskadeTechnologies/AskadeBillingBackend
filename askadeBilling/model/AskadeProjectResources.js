/**
 * Created by AdrianIonita on 10/17/2016.
 */
var mongoose    =   require("mongoose");
// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var askadeProjectResources  = {
    "projectCode": {
        type: String,
        index:{
            unique: true
        }
    },
    "projectResources":[{
        "resourceCode":{
            type:String,
            index:{
                unique:true
            }
        },
        "startDate":Date,
        "endDate":Date
    }]
};
// create model if not exists.
module.exports = mongoose.model('AskadeProjectResources',askadeProjectResources);