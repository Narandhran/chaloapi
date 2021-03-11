'use strict';

const path = require('path');
const admin = require('firebase-admin');


const serviceAcountConfigPath = path.resolve('okchalo-56327-firebase-adminsdk-nv6mc-114c033163.json');
// eslint-disable-next-line import/no-dynamic-require
const serviceAccount = require(serviceAcountConfigPath);

const app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

exports.sendPushNofi = app.messaging();

const data = {
    name: 'OkChalo Notification',
};

exports.message = (title, body, tokens) => {
    return {
        data,
        notification: {
            title: title,
            body: body,
            // icon: './logo.png'
        },
        tokens: tokens
    }
};