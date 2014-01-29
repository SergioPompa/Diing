$(document).ready(function(){

function randomgen()
    {
        var rannumber='';
        for(ranNum=1; ranNum<=6; ranNum++){
            rannumber+=Math.floor(Math.random()*10).toString();
        }
        $('#secret').text(rannumber);
    }
$(document).ready(function()
    {
        $("form div:not(.submit)").on("tap mouseenter",function() { var mensaje=$(this).data("helper"); if (mensaje) $(this).find("label").append("<em class='helper'>"+mensaje+"</em>").show(); });
        $("form div").on("mouseleave",function() { $(this).find(".helper").remove(); });
        
        if ($("#secret")) randomgen();
        
        $(".refresh").bind("click",function(e){ e.preventDefault();randomgen(); })
        
        var container = $('div#validate');
        $("form.datos").validate({ 
            errorContainer: container,
            errorLabelContainer: $("ul", container),
            wrapper: 'li'
        });
        
        $.validator.addMethod("antispam", function(antispam) 
        {
            if ( antispam==$("#secret").text() ) return true;
        });
        
});

});