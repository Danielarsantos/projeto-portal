$(document).ready(function(){$("i.glyphicon-thumbs-up, i.glyphicon-thumbs-down").click(function(){var t=$(this),i=t.data("count");i||(i=10),i++,t.data("count",i),$("#"+this.id+"-bs3").html(i)}),$(document).delegate('*[data-toggle="lightbox"]',"click",function(t){t.preventDefault(),$(this).ekkoLightbox()})});