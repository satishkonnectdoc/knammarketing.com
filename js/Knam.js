var Knam = angular.module("KnamModule", []);

Knam.config(function ($httpProvider) {
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
});

Knam.controller('WebEnquiry', ['$scope', '$http', function ($scope, $http) {

    $scope.webEnquiry = { Name: '', Email: '', Phone: '', ContactAddress: '', Query: '', Status: true };

    $scope.SaveWebEnquiry = function () {
        
        var Sarr = ["Name", "Email", "Phone", "ContactAddress"];
        var Msgarr = ["Please Enter Name.", "Please Enter Email Id.", "Please Enter Phone.", "Please Enter Address."];

        var err = 0;
        for (var i = 0, curr; curr = Sarr[i]; i++) {
            if ($scope.webEnquiry[curr] == null || $scope.webEnquiry[curr] == undefined || $scope.webEnquiry[curr] == '') {
                $scope["SA" + curr] = true;
                $scope["SAM" + curr] = Msgarr[i];
                err++;
            }
        }
        if (err > 0) {
            return false;
        }
        else {
            var model = {
                webEnquiry: $scope.webEnquiry
            }
            //var order = $http.post('http://localhost:52283/' + "api/WebEnquiryService/SaveEnquiry", model);
            var order = $http.post('http://localhost:52283/' + "api/WebEnquiryService/SaveEnquiry", $scope.webEnquiry, { headers: { 'Content-Type': 'application/json' } });
            order.then(function (data) {
                if (data.data != null && data.data != undefined) {
                    //alert('Indent no. - ' + $scope.webEnquiry.IndentNo + ' updated successfully.');
                    //window.location.href = 'orderList';
                    if (data.data == 'Success') {
                        alert('Thank you for submitting your contact details, we will contct you soon.');
                        $scope.webEnquiry.Name = '';
                        $scope.webEnquiry.Email = '';
                        $scope.webEnquiry.Phone = '';
                        $scope.webEnquiry.ContactAddress = '';
                        $scope.webEnquiry.Query = '';
                        $scope.webEnquiry.Status = true;
                    }
                    else {
                        alert('An error occurred, Please try after some time.');
                    }
                }
                else
                {
                    alert('An error occurred, Please try after some time.');
                }
            });
        }
    }

    $scope.ClearText = function (id) {
        $scope["SA" + id] = false;
        $scope["SAM" + id] = '';
    }
}]);
