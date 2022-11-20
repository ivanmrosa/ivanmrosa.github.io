var controllerClass = function(){
  self = this;
}

var viewModel = function(controller){
   self = this;   
   self.language  = ko.observable("pt-br")
}

ko.applyBindings(new viewModel(new controllerClass()))
