function MainController() {
    this.items = [
        {
            type: "message",
            offer: true,
            title: ""
        }
        ];
};

angular
    .module('inspinia')
    .controller('MainController', MainController)