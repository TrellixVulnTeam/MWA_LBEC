angular.module("meanGames").factory("AuthInterceptor", AuthInterceptor);
function AuthInterceptor($location, $q, $window, AuthFactory) {
    return { request: request, response: response, responseError: responseError }
    function request(config) {
        config.headers = config.headers || {};
        if ($window.sessionStorage.token) {
            config.headers.Authorization = "Bearer " + $window.sessionStorage.token;
        }
        return config;
    }
    function response(response) {
        if (response.status === 200 && $window.sessionStorage.token && !$window.sessionStorage.isLoggedIn) { $window.sessionStorage.isLoggedIn = true; }
        if (response.status === 401) { $window.sessionStorage.isLoggedIn = false; }
        return response || $q.when(response);
    }
    function responseError(rejection) {
        if (rejection.status === 401 || rejection.status === 403) {
            delete $window.sessionStorage.token;
            $window.sessionStorage.isLoggedIn = false;
            $location.path("/");
        }
        return $q.reject(rejection);
    }
}