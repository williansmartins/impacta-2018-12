angular.module('principal')
.controller('NavegadorController', 
    function ($scope, $uibModal, $log, $document, $location, $window, $filter, LoginService, $localStorage, LogService, SessionService, ComponentModal, $rootScope) {

        $scope.storage = $localStorage;
        $scope.flagMostrarMenu = false;
        $scope.flagMostrarRodape = true;
        $scope.tela = 6;

        $scope.logout = function(){
        	var objetoGlogal = {
            	"localstorage" : null,
            	"flagMostrarMenu" : false,
                "flagMostrarRodape" : true
            }

            $rootScope.$broadcast('topic', objetoGlogal);
            $location.path("/");
        }

        $scope.$on('topic', function (event, objetoGlogal) { 
            $scope.storage = objetoGlogal.localstorage;
        	$scope.flagMostrarMenu = objetoGlogal.flagMostrarMenu;
            $scope.flagMostrarRodape = objetoGlogal.flagMostrarRodape;
        });

        //este apresentarMensagem eh global
        apresentarMensagem = function(mensagem, callback){
            LogService.info("apresentando mensagem via HEADER controller");
            SessionService.setData("apresentandoErro", "sim");
            var modal = $uibModal;
            var config = new Object();
            config.title = "Aviso";
            config.data = mensagem;
            config.windowClass = "modal-mensagem";
            config.templateUrl = 'modal-mensagem.html';

            var modalInstance = ComponentModal.getModalWindow(modal, config);
            modalInstance.result
            .then(function (response) {
                SessionService.setData("apresentandoErro", "nao");
                if(callback){
                    eval(callback);
                }
            }, function (response) {
                SessionService.setData("apresentandoErro", "nao");
            });
        };

        $scope.voltarParaHome = function(){
            $location.path("/login");
        }

        $scope.popularObjetosIniciais = function(){
            var objetoGlogal = {
                "localstorage" : null,
                "flagMostrarMenu" : true,
                "flagMostrarRodape" : false
            }
            $rootScope.$broadcast('topic', objetoGlogal);
        }

        init = function() {
            console.info("NavegadorController");
            $scope.popularObjetosIniciais();
        };
        
    	init();
});