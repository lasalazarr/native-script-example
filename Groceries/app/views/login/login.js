var UserViewModel = require("../../shared/view-models/user-view-model");

var dialogsModule = require("ui/dialogs");

//var observableModule = require("data/observable");

var frameModule = require("ui/frame");

// var user = new observableModule.fromObject({
//     email: "user@domain.com",
//     password: "password"
// });

var user = new UserViewModel({
    email: "username@domain.com",
    password: "password"
});

var page;

var email;

exports.loaded = function (args) {
    console.log("hello Alberto esta cargando");

    page = args.object;
    page.bindingContext = user;

};

exports.signIn = function () {
    user.login()
        .catch(function (error) {
            console.log(error);
            dialogsModule.alert({
                message: "Unfortunately we could not find your account.",
                okButtonText: "OK"
            });
            return Promise.reject();
        })
        .then(function () {
            frameModule.topmost().navigate("views/list/list");
        });
};

exports.register = function () {
    //alert("Registering");

    var topmost = frameModule.topmost();
    topmost.navigate("views/register/register");
};


