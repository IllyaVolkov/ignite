module = angular.module('KET', ['smoothScroll', 'counter', 'ngRoute']);

module.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../templates/news.html',
        })
        .when('/:id', {
            templateUrl: '../templates/readMore.html',
            controller: 'idCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })
})

module.controller('headerCtrl', function ($scope, $window) {
    String.prototype.splice = [].splice;
    $window.addEventListener('load', function () {
        angular.element(document.getElementsByClassName('scrollBlock')[0]).addClass('selected');
    });
    $scope.menu = [
        { name: 'home', dest: 'home'},
        { name: 'services', dest: 'services' },
        { name: 'portfolio', dest: 'portfolio' },
        { name: 'about', dest: 'about' },
        { name: 'news', dest: 'news' },
        { name: 'contact', dest: 'contact' }
    ];
    $scope.select = function ($event) {
        var selectBlocks = document.getElementsByClassName('scrollBlock');
        for (var i = 0; i < selectBlocks.length; i++) {
            angular.element(selectBlocks[i]).removeClass('selected');
        }
        angular.element($event.currentTarget || $event.srcElement).addClass('selected');
    }
});

module.controller('serviceCtrl', function ($scope) {
    $scope.text = 'web';
    $scope.select = function ($event, text, align) {
        var separators = document.getElementById('services').getElementsByClassName('select');
        for (var i = 0; i < separators.length; i++) {
            var elem = angular.element(separators[i]);
            elem.removeClass('selectLeft');
            elem.removeClass('selectCenter');
            elem.removeClass('selectRight');
            elem.addClass('unselect');
        }
        $scope.text = text;
        var separator = angular.element($event.currentTarget || $event.srcElement).next().next();
        separator.removeClass('unselect');
        switch (align) {
            case 'left': separator.addClass('selectLeft'); break;
            case 'middle': separator.addClass('selectCenter'); break;
            case 'right': separator.addClass('selectRight'); break;
        }
    }
});

module.controller('contactCtrl', function ($scope) {
    $scope.nameRegexp = /^[a-zA-Z]+$/;
    $scope.mailRegexp = /^[\w.@]+$/;
    $scope.messageRegexp = /^.{20,}$/;
});

module.controller('portfolioCtrl', function ($scope) {
    $scope.images = [
        { name: 'sample image', category: 'graphic design', src: '../img/portfolio/img1.jpg' },
        { name: 'sample image', category: 'web', src: '../img/portfolio/img2.jpg' },
        { name: 'sample image', category: 'photography', src: '../img/portfolio/img3.jpg' },
        { name: 'sample image', category: 'graphic design', src: '../img/portfolio/img4.jpg' },
        { name: 'sample image', category: 'web', src: '../img/portfolio/img5.jpg' },
        { name: 'sample image', category: 'photography', src: '../img/portfolio/img6.jpg' },
        { name: 'sample image', category: 'graphic design', src: '../img/portfolio/img7.jpg' },
        { name: 'sample image', category: 'web', src: '../img/portfolio/img8.jpg' },
        { name: 'sample image', category: 'photography', src: '../img/portfolio/img9.jpg' },
        { name: 'sample image', category: 'graphic design', src: '../img/portfolio/img10.jpg' },
        { name: 'sample image', category: 'web', src: '../img/portfolio/img11.jpg' },
        { name: 'sample image', category: 'photography', src: '../img/portfolio/img12.jpg' },
    ];
    $scope.category = 'all';
    var all = function(item) {
        return item;
    }

    var web = function (item) {
        if (item.category === 'web') return item;
    }

    var photography = function (item) {
        if (item.category === 'photography') return item;
    }

    var design = function (item) {
        if (item.category === 'graphic design') return item;
    }

    $scope.imageFilter = all;

    $scope.select = function (filterName, $event) {
        switch (filterName) {
            case 'all': $scope.imageFilter = all; break;
            case 'web': $scope.imageFilter = web; break;
            case 'photography': $scope.imageFilter = photography; break;
            case 'design': $scope.imageFilter = design; break;
        }
        var selectBlocks = document.getElementById('portfolio').getElementsByTagName('button');
        for (var i = 0; i < selectBlocks.length; i++) {
            angular.element(selectBlocks[i]).removeClass('selected');
        }
        angular.element($event.currentTarget || $event.srcElement).addClass('selected');
    }
});

module.controller('statsCtrl', function ($scope) {
    $scope.stats = [
        { name: 'completed projects', image: 'img/stats/stat1.png', number: 3054, current: 0 },
        { name: 'clicks pressed', image: 'img/stats/stat2.png', number: 7234873, current: 0 },
        { name: 'mails sent & recived', image: 'img/stats/stat3.png', number: 4670, current: 0 },
        { name: 'jokes told', image: 'img/stats/stat4.png', number: 939, current: 0 }
    ];
});

module.controller('idCtrl', function ($scope, $routeParams) {
    $scope.id = $routeParams.id;
});

module.controller('newsCtrl', function ($scope, $http) {
    $http({
        method: 'GET',
        url: '../data/data.json'
    }).then(function (response) {
        $scope.news = response.data;
    }, function (response) { })

    $scope.getDate = function (string) {
        return new Date(string);
    }
});

module.controller('aboutCtrl', function ($scope) {
    $scope.team = [
        {
            image: 'img/about/Albert_Einstein.jpg', name: 'Albert Einstein', position: 'HR Specialist', text: 'Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu.',
            links: [
                { name: 'facebook', off: '../img/about/facebook.png', on: '../img/about/facebook_white.png', onColor: '#36609e', offColor: '#f7f7f7', href: 'http://facebook.com' },
                { name: 'twitter', off: '../img/about/twitter.png', on: '../img/about/twitter_white.png', onColor: '#2ca9e1', offColor: '#f7f7f7', href: 'http://twitter.com' },
                { name: 'google', off: '../img/about/google.png', on: '../img/about/google_white.png', onColor: '#db5442', offColor: '#f7f7f7', href: 'http://google.com' },
                { name: 'dribble', off: '../img/about/dribble.png', on: '../img/about/dribble_white.png', onColor: '#ee558e', offColor: '#f7f7f7', href: 'http://dribble.com' }
            ]
        },
        { 
            image: 'img/about/Pablo_Picasso.jpg', name: 'Pablo Picasso', position: 'Graphic Designer', text: 'Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu.',
            links: [
                { name: 'facebook', off: '../img/about/facebook.png', on: '../img/about/facebook_white.png', onColor: '#36609e', offColor: '#f7f7f7', href: 'http://facebook.com' },
                { name: 'twitter', off: '../img/about/twitter.png', on: '../img/about/twitter_white.png', onColor: '#2ca9e1', offColor: '#f7f7f7', href: 'http://twitter.com' },
                { name: 'google', off: '../img/about/google.png', on: '../img/about/google_white.png', onColor: '#db5442', offColor: '#f7f7f7', href: 'http://google.com' },
                { name: 'dribble', off: '../img/about/dribble.png', on: '../img/about/dribble_white.png', onColor: '#ee558e', offColor: '#f7f7f7', href: 'http://dribble.com' }
            ] 
        },
        { 
            image: 'img/about/Elon_Musk.jpg', name: 'Elon Musk', position: 'CEO', text: 'Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu.' ,
            links: [
                { name: 'facebook', off: '../img/about/facebook.png', on: '../img/about/facebook_white.png', onColor: '#36609e', offColor: '#f7f7f7', href: 'http://facebook.com' },
                { name: 'twitter', off: '../img/about/twitter.png', on: '../img/about/twitter_white.png', onColor: '#2ca9e1', offColor: '#f7f7f7', href: 'http://twitter.com' },
                { name: 'google', off: '../img/about/google.png', on: '../img/about/google_white.png', onColor: '#db5442', offColor: '#f7f7f7', href: 'http://google.com' },
                { name: 'dribble', off: '../img/about/dribble.png', on: '../img/about/dribble_white.png', onColor: '#ee558e', offColor: '#f7f7f7', href: 'http://dribble.com' }
            ]
        },
        { 
            image: 'img/about/Max.jpg', name: 'Max Cornelisse', position: 'Security Specialist', text: 'Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu.' ,
            links: [
                { name: 'facebook', off: '../img/about/facebook.png', on: '../img/about/facebook_white.png', onColor: '#36609e', offColor: '#f7f7f7', href: 'http://facebook.com' },
                { name: 'twitter', off: '../img/about/twitter.png', on: '../img/about/twitter_white.png', onColor: '#2ca9e1', offColor: '#f7f7f7', href: 'http://twitter.com' },
                { name: 'google', off: '../img/about/google.png', on: '../img/about/google_white.png', onColor: '#db5442', offColor: '#f7f7f7', href: 'http://google.com' },
                { name: 'dribble', off: '../img/about/dribble.png', on: '../img/about/dribble_white.png', onColor: '#ee558e', offColor: '#f7f7f7', href: 'http://dribble.com' }
            ]
        }
    ];
});

module.filter('numberCustom', function () {
    return function (number) {
        if (typeof number == 'undefined') return null;
        number = number.toString();
        number = number.split(',');
        return number.join(' ');
    }
});

module.directive("scroll", function ($window) {
    return function (scope, element, attributes) {
        function action() {
            if (this.pageYOffset + $window.innerHeight > element.offset().top) {
                for (var i = 0; i < scope.stats.length; i++) {
                    scope.stats[i].current = scope.stats[i].number;
                }
                scope.$apply();
                angular.element($window).off("scroll", action);
            }
        }
        angular.element($window).on("scroll", action);
    };
});

module.directive("about", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: '../templates/about.html'
    }
});