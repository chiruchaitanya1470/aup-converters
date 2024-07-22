javascript:
var anchorLinks=0;
var anchorLinksSet = new Set();
var releatedTopics=document.getElementsByClassName("surface-tags content");
for(var i=0;i<releatedTopics.length;i++){
    var attribute=releatedTopics[i].getElementsByTagName('a');
    for(var j=0;j<attribute.length;j++){
        var hrefLink=attribute[j].href;
        var crosslinkkingvalue=crosslinkking(hrefLink);
        anchorLinksSet.add(hrefLink);
        var newElement=document.createElement('div');
        newElement.className="hyperlinkfield";
        var newInput=document.createElement('input');
        newInput.type="text";
        newInput.style.backgroundColor='blue';

        newInput.value=crosslinkkingvalue;
        newElement.appendChild(newInput);
        releatedTopics[i].appendChild(newElement);
        styles(anchorLinks);
        adjustInputWidth(newInput);
        anchorLinks=anchorLinks+1;
    }
    console.log("chiru" ); 
}
anchorLinksSet.forEach(function(links){
    console.log(links);
});

function styles(positionDigit){
    var number=positionDigit*40;
    newElement.style.position= 'absolute';
    newElement.style.top= number+40+'px';
    newElement.style.left='140px';
    newElement.style.fontSize='25px';
    newElement.style.border= '8px solid';
    newElement.style.borderRadius= '8px';
    newElement.style.borderColor= 'aqua';
    console.log("done with work");

}
function adjustInputWidth(input) {
    input.style.width = input.value.length + 'ch'; 
}




function crosslinkking(crosslinkkingurl){

    var CurrentUrl=crosslinkkingurl;
    
    var localRegions=CurrentUrl.includes("_fr")||CurrentUrl.includes("_ao")||CurrentUrl.includes("_be")||CurrentUrl.includes("_be")||CurrentUrl.includes("_bg")||CurrentUrl.includes("_br")
        ||CurrentUrl.includes("_by")||CurrentUrl.includes("_ca")||CurrentUrl.includes("_ch")||CurrentUrl.includes("_cn")||CurrentUrl.includes("_cz")
        ||CurrentUrl.includes("_ee")||CurrentUrl.includes("_es")||CurrentUrl.includes("_gr")||CurrentUrl.includes("_hr")||CurrentUrl.includes("_hu")
        ||CurrentUrl.includes("_ie")||CurrentUrl.includes("_in")||CurrentUrl.includes("_it")||CurrentUrl.includes("_jp")||CurrentUrl.includes("_kr")
        ||CurrentUrl.includes("_kz")||CurrentUrl.includes("_lt")||CurrentUrl.includes("_lu")||CurrentUrl.includes("_lv")||CurrentUrl.includes("_mz")
        ||CurrentUrl.includes("_nl")||CurrentUrl.includes("_pl")||CurrentUrl.includes("_pt")||CurrentUrl.includes("_ro")||CurrentUrl.includes("_rs")
        ||CurrentUrl.includes("_si")||CurrentUrl.includes("_sk")||CurrentUrl.includes("_tr")||CurrentUrl.includes("_tw")||CurrentUrl.includes("_ua")
        ||CurrentUrl.includes("_uk")||CurrentUrl.includes("_us")||CurrentUrl.includes("_za");
    var globalLocation=CurrentUrl.includes("en_gl");
    var nordic=CurrentUrl.includes("da_dk")||CurrentUrl.includes("en_dk")||CurrentUrl.includes("en_fi")||CurrentUrl.includes("en_no")||
        CurrentUrl.includes("en_se")||CurrentUrl.includes("fi_fi")||CurrentUrl.includes("no_no")||CurrentUrl.includes("sv_se");
    var asean=CurrentUrl.includes("en_id")||CurrentUrl.includes("en_my")||CurrentUrl.includes("en_ph")||CurrentUrl.includes("en_sg")
        ||CurrentUrl.includes("en_sg")||CurrentUrl.includes("en_vn")||CurrentUrl.includes("vi_vn");
    var aus_zal=CurrentUrl.includes("en_au")||CurrentUrl.includes("en_nz");
    var deu_aut=CurrentUrl.includes("de_at")||CurrentUrl.includes("de_de");
    var latam=CurrentUrl.includes("es_mx")||CurrentUrl.includes("es_ar")||CurrentUrl.includes("es_bo")||
        CurrentUrl.includes("es_cl")||CurrentUrl.includes("es_co")||CurrentUrl.includes("es_ec")||CurrentUrl.includes("es_pe")||
        CurrentUrl.includes("es_py")||CurrentUrl.includes("es_uy")||CurrentUrl.includes("es_ve")||CurrentUrl.includes("es_ce")||
        CurrentUrl.includes("en_ce");
    var mena=CurrentUrl.includes("en_pk")||CurrentUrl.includes("en_ae")||CurrentUrl.includes("en_bh")||CurrentUrl.includes("en_eg")
    ||CurrentUrl.includes("en_iq")||CurrentUrl.includes("en_jo")||CurrentUrl.includes("en_kw")||CurrentUrl.includes("en_lb")
    ||CurrentUrl.includes("en_ly")||CurrentUrl.includes("en_om")||CurrentUrl.includes("en_ps")||CurrentUrl.includes("en_qa")
    ||CurrentUrl.includes("en_sa")||CurrentUrl.includes("en_sy");
    var t3Regions=CurrentUrl.includes("en_al")||CurrentUrl.includes("en_am")||CurrentUrl.includes("en_az")||CurrentUrl.includes("en_ba")||
        CurrentUrl.includes("en_bb")||CurrentUrl.includes("en_bd")||CurrentUrl.includes("en_bn")||CurrentUrl.includes("en_bw")||
        CurrentUrl.includes("en_cd")||CurrentUrl.includes("en_cf")||CurrentUrl.includes("en_cg")||CurrentUrl.includes("en_ci")||
        CurrentUrl.includes("en_cm")||CurrentUrl.includes("en_cw")||CurrentUrl.includes("en_cy")||CurrentUrl.includes("en_dz")||
        CurrentUrl.includes("en_fj")||CurrentUrl.includes("en_ga")||CurrentUrl.includes("en_ge")||CurrentUrl.includes("en_gh")||
        CurrentUrl.includes("en_gi")||CurrentUrl.includes("en_gn")||CurrentUrl.includes("en_gq")||CurrentUrl.includes("en_gu")||
        CurrentUrl.includes("en_gy")||CurrentUrl.includes("en_im")||CurrentUrl.includes("en_is")||CurrentUrl.includes("en_jm")||
        CurrentUrl.includes("en_ke")||CurrentUrl.includes("en_kg")||CurrentUrl.includes("en_kh")||CurrentUrl.includes("en_la")||
        CurrentUrl.includes("en_lc")||CurrentUrl.includes("en_lk")||CurrentUrl.includes("en_ma")||CurrentUrl.includes("en_md")||
        CurrentUrl.includes("en_me")||CurrentUrl.includes("en_mg")||CurrentUrl.includes("en_mk")||CurrentUrl.includes("en_ml")||
        CurrentUrl.includes("en_mm")||CurrentUrl.includes("en_mn")||CurrentUrl.includes("en_mt")||CurrentUrl.includes("en_mu")||
        CurrentUrl.includes("en_mw")||CurrentUrl.includes("en_mv")||CurrentUrl.includes("en_na")||CurrentUrl.includes("en_ne")||
        CurrentUrl.includes("en_ng")||CurrentUrl.includes("en_nn")||CurrentUrl.includes("en_pg")||CurrentUrl.includes("en_rw")||
        CurrentUrl.includes("en_sn")||CurrentUrl.includes("en_td")||CurrentUrl.includes("en_tg")||CurrentUrl.includes("en_th")||
        CurrentUrl.includes("en_tn")||CurrentUrl.includes("en_tt")||CurrentUrl.includes("en_tz")||CurrentUrl.includes("en_ug")||
        CurrentUrl.includes("en_uz")||CurrentUrl.includes("en_zm")||CurrentUrl.includes("en_zw")||CurrentUrl.includes("fr_dz")||
        CurrentUrl.includes("fr_ma")||CurrentUrl.includes("fr_tn");
        var shellPages=CurrentUrl.includes("about-us")||CurrentUrl.includes("alliances")||CurrentUrl.includes("careers")||CurrentUrl.includes("events")||
        CurrentUrl.includes("industries")||CurrentUrl.includes("services")||CurrentUrl.includes("insights")||CurrentUrl.includes("newsroom")||
        CurrentUrl.includes("media")||CurrentUrl.includes("technical")||CurrentUrl.includes("functional")||CurrentUrl.includes("legal-and-privacy");
        var count=CurrentUrl.indexOf("ey.com");
        var livePathUrl=CurrentUrl.substring(count+13);
        var liveRegion=CurrentUrl.substring(count+7,count+12);
        var hallWayPageName= hallWayNameExtractor(livePathUrl);
        var indexpageName=hallWayPage(hallWayPageName);
        console.log(indexpageName);
        console.log("live to edit");
        if(CurrentUrl.includes("/people/")){
            var livePathUrl=CurrentUrl.substring(count+20);
            var livePathUrl=Array.from(livePathUrl)[0]+"/"+livePathUrl;
            if(globalLocation){
                var editorPageLocation="/content/dam/content-fragments/ey-unified-site/ey-com/people/global/en/"+livePathUrl;
            }else{
                var editorPageLocation="/content/dam/content-fragments/ey-unified-site/ey-com/people/local/"+liveRegion+"/"+livePathUrl;
            }
        
        }else if(globalLocation){
            var editorPageLocation="/content/ey-unified-site/ey-com/global/main/en_gl/home/"+indexpageName;
        }else {
            
                var livePageRegionLocation=findLivelocation(liveRegion);
                var editorPageLocation="/content/ey-unified-site/ey-com/local/"+livePageRegionLocation+"/home/"+indexpageName+"/"+hallWayPageName;
            
        }if(CurrentUrl.includes("/people/")){
            return editorPageLocation;

        }else{
            return editorPageLocation;
        }
    function findLivelocation(loc){
        var editLocation=loc;
        if(localRegions){
            trueLocation=Array.from(editLocation)[3]+Array.from(editLocation)[4]+"/"+editLocation;
        }else if(t3Regions){
            trueLocation="t3/"+editLocation;
        }else if(nordic){
            trueLocation="nordics/"+editLocation;
        }else if(asean){
            trueLocation="asean/"+editLocation;
        }else if(aus_zal){
            trueLocation="aus-nzl/"+editLocation;
        }else if(deu_aut){
            trueLocation="deu-aut/"+editLocation;
        }else if(latam){
            trueLocation="latam/"+editLocation;
        }else if(mena){
        trueLocation="mena/"+editLocation;
        } 
        return trueLocation;
    }


    function hallWayPage(pageName){
        var str=pageName;
        var services=str.includes("tax");
        if(services){
            return "services";

        }else{
            return "campaigns";
        }
        
    }
    function hallWayNameExtractor(url){
        var hallWAyPageCount=url.indexOf('/');
        if(hallWAyPageCount<1){
            return url;
        }else{
            url =livePathUrl.substring(0,hallWAyPageCount);
            return url;
        }
    }
}

