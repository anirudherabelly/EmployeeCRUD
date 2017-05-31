// public/js/services/EmployeeService.js
angular.module('EmployeeService', []).factory('Employee', ['$http', function($http) {

    return {
        // call to get all employees
        get : function() {
            return $http.get('/api/employees');
        },

        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new employee
        create : function(employeeData) {
            return $http.post('/api/employees', employeeData);
        },

        // call to DELETE a employee
        delete : function(id) {
            return $http.delete('/api/employees/' + id);
        },
        //call to edit an employee details
        put : function(employeeData){
            return $http.put('/api/employees/',employeeData);
        }
    }       

}]);