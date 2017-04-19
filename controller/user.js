
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
// Load required packages
var User = require('../models/user');

// Create endpoint /api/users for POST
exports.postUsers = function (req, res) {
    var user = new User({
        username: req.body.username,
        password: req.body.password
    });

    user.save(function (err) {
        if (err)
            res.send(err);

        res.json({ message: 'New beer drinker added to the locker room!' });
    });
};

// Create endpoint /api/users for GET
exports.getUsers = function (req, res) {
    User.find(function (err, users) {
        if (err)
            res.send(err);

        res.json(users);
    });
};