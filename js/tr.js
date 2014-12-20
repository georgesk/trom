// Translations for Cheese and wine

var tr = {
    fr: {
	"TROM-bino": "Trombinoscope",
	"Snap": "Photo",
    },
};


function localize(){
    var lang="fr";
    var translatables=$(".tr");
    translatables.each(function(){
	var t = $(this);
	if (t.prop("tagName")=="INPUT"){
	    var src = t.val();
	    t.val(tr[lang][src]);
	}else {
	    var src = t.text();
	    t.text(tr[lang][src]);
	}
    });
}
