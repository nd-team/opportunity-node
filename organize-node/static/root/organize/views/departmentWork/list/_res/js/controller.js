var app = angular.module('departmentWorkListM', ['toastr']);
app.controller('departmentWorkListCtrl',function($scope,departmentWorkSer,toastr,$stateParams,$state,$location){
         //列表
    departmentWorkSer.InfoAreaList().then(function (response) {
            if(response.data.code == 0){
                $scope.InfoAreaLists = response.data.data;
            }else {
                toastr.error(response.data.msg, '温馨提示');
            }
        })
});

