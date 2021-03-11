const Token = require("../models/token.model.js");

exports.subscribe = (req, res) => {
    let { user_id, token } = req.body;
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    Token.findByUserId(user_id, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while fetching browser token!."
            });
        else {
            if (data.length > 0) {
                console.log('data: ' + JSON.stringify(data));
                Token.updateByUserId(req.body, (err, data1) => {
                    if (err)
                        res.status(500).send({
                            message:
                                err.message || "Some error occurred while updating browser token!."
                        });
                    else {
                        console.log('update success');
                        res.send(data1);
                    }
                });
            } else {
                Token.createTkn(req.body, (err, data1) => {
                    if (err)
                        res.status(500).send({
                            message:
                                err.message || "Some error occurred while creating browser token!."
                        });
                    else {
                        console.log('create success');
                        res.send(data1);
                    }
                });
            }
        };
    })
}