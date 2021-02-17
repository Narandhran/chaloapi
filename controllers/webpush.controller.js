// Author & Email: narandhran@gmail.com
// Purpose: Push notification for web.
// Date: 22 Dec 2020

const webpush = require('web-push');
const { vapidKeys } = require('../config/webpush.config');
const WebPush = require("../models/webpush.model.js");

webpush.setVapidDetails('mailto:narandhran@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

exports.subscribe = (req, res) => {
    let subscription = req.body;
    console.log(JSON.stringify(req.body))
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    WebPush.findById(subscription.customer_id, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while finding previous subscription."
            });
        else if (data.length > 0) {
            WebPush.updateById(subscription, (err, data) => {
                if (err)
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while updating subscription."
                    });
                else { res.send(data); }
            });
        }
        else {
            // Create a new subscription
            const newSubscription = new WebPush({
                endpoint: req.body.endpoint,
                expirationTime: req.body.expirationTime,
                p256dh: req.body.keys.p256dh,
                auth: req.body.keys.auth,
                customer_id: req.body.customer_id
            });

            // Save subscription in the database
            WebPush.create(newSubscription, (err, data) => {
                if (err)
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while saving subscription."
                    });
                else res.send(data);
            });
        }
    });

    const payload = JSON.stringify({ title: `Hello!` });
    webpush.sendNotification(subscription, payload);
};