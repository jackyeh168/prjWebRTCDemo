'use strict';
const serverConfig = {
    redis: {
        host: 'redis',
        port: '6379',
    },
    mongo:  {
        host: 'mongo',
        port: '27017',
        username: 'webrtc_user',
        password: 'standalonewebrtcuser',
    }
};
module.exports.redis = serverConfig.redis;
module.exports.mongo = `mongodb:\/\/${serverConfig.mongo.username}:${serverConfig.mongo.password}@${serverConfig.mongo.host}:${serverConfig.mongo.port}/webrtc`;;


