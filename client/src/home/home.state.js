app.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: '/src/home/home.html',
        controller: 'HomeController'
    });
});