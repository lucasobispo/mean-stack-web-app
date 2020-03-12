(function () {
    'use strict';

    angular
        .module('app')
        .controller('Question.IndexController', Controller);

    function Controller(QuestionService,FlashService) {
        var vm = this;
        var user_question; 
        vm.user_question = user_question; 
        vm.saveQuestion = saveQuestion;
        vm.GetAll = GetAll;
        var lista_back;
        vm.lista_back = lista_back;
        vm.DeleteQuestion = DeleteQuestion;
        GetAll();

        function saveQuestion() {
            QuestionService.Create(vm.user_question)
                .then(function () {
                    FlashService.Success('Created');
                    GetAll();
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }

        function GetAll() {
            QuestionService.GetAll()
                .then(function (list_) {
                    vm.lista_back = list_;
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }

        function DeleteQuestion(id) {
            QuestionService.Delete(id)
                .then(function () {
                    FlashService.Success('Deleted');
                    GetAll();
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }

    }
})();