(function(e){var t=e(".nav"),n="#000",r=e(".day").find(".sceances"),i=e(".overlay"),s=e(".popupCreer"),o=e(".popupModifier"),u=e(".popupSupprimer"),a=e(".popupVoir"),f=e(".popupAjouter"),l=e(".elevesDuCours .eleve"),c=e(".actions"),h=e(".actionsPresence"),p=e(".actionsEleves"),d=e(".actionsPlanning"),v=e(".ligneSceances"),m=e(".popupModifierThis"),g=e(".popupSupprimerThis"),y=e(".popupCreerThis"),b=e(".popupSupprimerEleves"),w,E,S,x,T=e(".search").find("#search"),N=[],C=[],k=[],L,A,O,M=e(".config"),_,D;e(function(){I();q();R();e.each(e(".mesCours").find(".cours"),function(){var t=e(this).attr("data-type");t==="web"&&e(this).find(".titre > h3").css({color:n})});r&&e.each(r,function(){e(this).parent(".day").find(".number").css({color:"white"})});e(".menuLow").on("click",gt);e(".popupCreerCours .close").on("click","a",yt);e(".popupModifierCours .close").on("click","a",yt);e(".popupSupprimerCours .close").on("click","a",yt);e(".close").on("click","a",yt);e(".delete").on("click",bt);e('.helper a[data-link="creer"').on("click",ct);e('.helper a[data-link="modifier"').on("click",ht);e('.helper a[data-link="supprimer"').on("click",pt);e('.helper a[data-link="voir"').on("click",dt);e('.helper a[data-link="ajouter"').on("click",vt);e("#color").change(function(){console.log(e("#color").val())});i.on("click",ft);e(".helper.voirCours .groupe li").on("click","a",at);e(".helper.voirCours .presence li").on("click","a",ut);e(".sceancesMois li").on("click","a",function(t){t.preventDefault();_=t.pageX;D=t.pageY;var n=e(this).attr("data-sceance");rt(n,_,D)});c.on("click","a.modifier",Z);c.on("click","a.supprimer",Y);h.find(".present").on("click",$);h.find(".justifier").on("click",J);h.find(".absent").on("click",K);h.find(".aucune").on("click",Q);e(".elevesDuCours.presenceCours .eleve").on("click","a",ot);e('a[href^="#"]').click(function(){var t=e(this).attr("href");e("html, body").animate({scrollTop:e(t).offset().top},"slow");return!1});T.keydown(function(){setTimeout(function(){var e=T.val();U(e)},50)});e(".eleves li").on("click","a",function(t){t.preventDefault();_=t.pageX;D=t.pageY;var n=e(this).parent().attr("data-slug");rt(n,_,D)});e(".listGroupes .groupe").on("click","a",function(t){t.preventDefault();_=t.pageX;D=t.pageY;var n=e(this).attr("data-groupe");rt(n,_,D)});e(".elevesGroupe .eleve").on("click","a",function(t){t.preventDefault();_=t.pageX;D=t.pageY;var n=e(this).attr("data-groupe");it(n,_,D)});p.on("click","a.supprimer",Y);e('.helper a[data-link="supprimerEleves"').on("click",mt);P();e(".couleur .save").on("click",H);e(".day").on("click","a",function(t){t.preventDefault();_=t.pageX;D=t.pageY;var n=e(this).attr("data-date");st(n,_,D)});d.on("click","a.creer",et);e(".day .oneSceance").on("click",function(t){t.preventDefault();_=t.pageX;D=t.pageY;var n=e(this).attr("data-sceance");rt(n,_,D);d.hide()})});var P=function(){},H=function(){e.each(e(".config ul li"),function(){var t=e(this).find("label").html().toLowerCase(),n=e(this).find("input").val();B("color","presence",t,n)})},B=function(t,n,r,i){e.ajax({url:"",success:function(e){console.log("ajax")}})},j=function(t){t.preventDefault();e(this).parent().parent().parent().hide();$slug=e(this).attr("data-slug");$that=e('.list .range li[data-slug="'+$slug+'"]');F($that);$that.find(".nom a").focus()},F=function(t){e("html, body").animate({scrollTop:t.offset().top},400)},I=function(){e.each(e(".sceances li"),function(){var t=e(this).attr("data-cours");N[t]&&e(this).css({backgroundColor:N[t]})})},q=function(){e.each(e(".eleves li"),function(){var t=e(this).find(".groupe").attr("data-groupe");if(k[t]){e(this).css({backgroundColor:k[t],color:"white"});e(this).find("span > a").css({color:"white",borderBottom:"1px dotted white",borderTop:0})}})},R=function(){e.each(e(".listGroupes .groupe"),function(){var t=e(this).find(".nom").attr("data-groupe");if(k[t]){e(this).find("a").css({backgroundColor:k[t],color:"white"});e(this).find("span > a").css({color:"white",borderBottom:"1px dotted white",borderTop:0})}})},U=function(t){var t=t.toLowerCase();if(e.type(t)==="string"){X(t);e(".listAutocomplete li").on("click","a",j)}},z=function(t,n){var r=e(".search .listAutocomplete li"),i=!1;if(r.length>0){e.each(r,function(){e(this).find("a").attr("data-slug")===n&&(i=!0)});if(!i){e(".search .autoCompletionEleves").show();e(".search .listAutocomplete").append('<li><a href="voirEleve.php" data-slug="'+n+'" title="Voir la fiche de l\'élève">'+t+"</a></li>")}}else if(!i){e(".search .autoCompletionEleves").show();e(".search .listAutocomplete").append('<li><a href="voirEleve.php" data-slug="'+n+'" title="Voir la fiche de l\'élève">'+t+"</a></li>")}},W=function(t){var n=e(".search .listAutocomplete li");t!=="all"?e.each(n,function(){e(this).find("a").attr("data-slug")===t&&e(this).remove()}):n.remove()},X=function(t){if(t!==""){aData=V();for(var n=0;n<aData.length;n++)if(aData[n].indexOf(t)>=0){var r=aData[n].replace("-"," "),i=r.ucwords();z(i,aData[n])}else W(aData[n])}else{W("all");e(".autoCompletionEleves").hide()}},V=function(){var t=[],n=[],r=[],i=[],s,o,u,a;e.each(e(".range"),function(){e.each(e(".eleves .etudiant"),function(){s=e(this).find(".nom").attr("data-slug");var f=e.inArray(s,t);f<0&&t.push(s);o=e(this).find(".anneeLevel").attr("data-slug");var f=e.inArray(o,n);f<0&&n.push(o);u=e(this).find(".groupe").text();var f=e.inArray(u,r);f<0&&r.push(u);a=e(this).find(".option").text();var f=e.inArray(a,i);f<0&&i.push(a)})});return t},$=function(t){t.preventDefault();if(G(E,w,e(this).attr("data-presence"))){$that=l.find('.nom[data-slug="'+E+'"]');x=e(this).attr("data-presence");$that.css({color:C[x]})}},J=function(t){t.preventDefault();if(G(E,w,e(this).attr("data-presence"))){$that=l.find('.nom[data-slug="'+E+'"]');x=e(this).attr("data-presence");$that.css({color:C[x]})}},K=function(t){t.preventDefault();if(G(E,w,e(this).attr("data-presence"))){$that=l.find('.nom[data-slug="'+E+'"]');x=e(this).attr("data-presence");$that.css({color:C[x]})}},Q=function(t){t.preventDefault();if(G(E,w,e(this).attr("data-presence"))){$that=l.find('.nom[data-slug="'+E+'"]');x=e(this).attr("data-presence");$that.css({color:C[x]})}},G=function(e,t,n){return!0},Y=function(e){e.preventDefault();_=e.pageX;D=e.pageY;g.css({top:D+125,left:130}).fadeIn();lt(g);m.hide();y.hide()},Z=function(e){e.preventDefault();_=e.pageX;D=e.pageY;m.css({left:0}).fadeIn();lt(m);g.hide();y.hide()},et=function(e){e.preventDefault();_=e.pageX;D=e.pageY;y.css({left:0}).fadeIn();lt(y);g.hide();m.hide()},tt=function(t){t.preventDefault();_=t.pageX;D=t.pageY;e(".popupSupprimerEleves").css({left:130}).fadeIn();lt(g);m.hide()},nt=function(t){t.preventDefault();_=t.pageX;D=t.pageY;e(".popupModifierEleves").css({top:D+125,left:0}).fadeIn();lt(m);g.hide()},rt=function(e,t,n){c.attr("data-id",e);c.css({top:n+25,left:t-100}).fadeIn("fast")},it=function(e,t,n){p.attr("data-id",e);p.css({top:n+25,left:t-100}).fadeIn("fast")},st=function(e,t,n){d.attr("data-id",e);d.css({top:n+25,left:t-100}).fadeIn("fast")},ot=function(t){t.preventDefault();_=t.pageX;D=t.pageY;E=e(this).find(".nom").attr("data-slug");S=e(this).find(".groupe").attr("data-groupe");w=Number(e(".gererMaSceance").attr("data-sceance"));h.css({top:D+50,left:_}).fadeIn("fast")},ut=function(t){t.preventDefault();if(e(this).attr("data-link")==="presence"){e(this).attr("data-link","image");e(this).html("Revoir les photos");e(".presenceGroupe").fadeIn();e.each(l,function(){e(this).find("img").hide();e(this).find(".percent span").html("70%");e(this).find(".percent").show()})}else{e(this).attr("data-link","presence");e(this).html("Voir les présences");e(".presenceGroupe").fadeOut();e.each(l,function(){e(this).find(".percent").hide();e(this).find("img").show()})}},at=function(t){t.preventDefault();e(".helper.voirCours .groupe li.active").removeClass("active");e(this).parent().addClass("active");e(".helper.voirCours .presence li > a").attr("data-groupe",e(this).attr("data-groupe"));if(e(this).attr("data-link")==="tri")if(e(this).attr("data-groupe")!=="all"){var n=e(this).attr("data-groupe"),r=e(this);e.each(l,function(){e(this).find(".groupe").attr("data-groupe")!==n?e(this).fadeOut():e(this).fadeIn()})}else e.each(l,function(){e(this).fadeIn()})},ft=function(e){e.preventDefault();i.fadeOut();c.fadeOut();h.fadeOut();p.fadeOut();d.fadeOut();y.fadeOut();m.fadeOut();g.fadeOut();s.fadeOut();b.fadeOut();o.fadeOut();u.fadeOut();a.fadeOut();f.fadeOut()},lt=function(t){e("html, body").animate({scrollTop:t.offset().top},800,function(){i.css({height:e(window).height(),width:e(window).width(),display:"block"})})},ct=function(e){e.preventDefault();s.fadeIn();lt(s);o.hide();u.hide();b.hide();a.hide();f.hide()},ht=function(e){e.preventDefault();o.fadeIn();lt(o);s.hide();b.hide();u.hide();a.hide();f.hide()},pt=function(e){e.preventDefault();u.fadeIn();lt(u);o.hide();b.hide();s.hide();a.hide();f.hide()},dt=function(e){e.preventDefault();a.fadeIn();lt(a);o.hide();b.hide();u.hide();s.hide();f.hide()},vt=function(e){e.preventDefault();f.fadeIn();lt(f);o.hide();b.hide();u.hide();s.hide();a.hide()},mt=function(e){e.preventDefault();b.fadeIn();lt(f);o.hide();u.hide();s.hide();a.hide();u.hide()},gt=function(t){t.preventDefault();var n=e(this).parent(".wrapper").find(".menu");n.slideToggle().css({boxShadow:"rgba(0,0,0,0.4) 0 3px 3px 0","-webkit-boxShadow":"rgba(0,0,0,0.4) 0 3px 3px 0",backgroundColor:"#5097bd"})},yt=function(t){t.preventDefault();e(this).parent().parent().fadeOut("fast");i.fadeOut();c.fadeOut()},bt=function(t){t.preventDefault();e(this).parent().fadeOut()};String.prototype.ucwords=function(){var e=this.split(" "),t=0,n=e.length;for(;t<n;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].slice(1);return e.join(" ")};String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)}}).call(this,jQuery);