function BuscaEndereco(e){function o(e){e.erro?console.error("OPS !"):($("#exibiEndereco").show(),$("#logradouro").val(e.logradouro),$("#bairro").val(e.bairro),$("#localidade").val(e.localidade))}this.cep=e,_URL="http://viacep.com.br/ws/",_TYPE="/json/",this.getURL=function(){return _URL+this.cep+_TYPE},this.requestEndereco=function(e,o){this.request=$.ajax({url:this.getURL(),method:e,dataType:o})},this.endereco=function(){this.request.done(function(e){o(e)})},this.busca=function(){this.requestEndereco("GET","json"),this.endereco()}}