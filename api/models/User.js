/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    // connection: "mysql",
    attributes: {
        username: {
            type: "string"
        },
        ninja: {
            type: "string"
        },
        pairing_start: {
            type: "date"
        },
        pairing_end: {
            type: "date"
        },
        comment: {
            type: "string"
        },
        rating: {
            type: "text"
        }
    }
};

