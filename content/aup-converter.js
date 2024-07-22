var CurrentUrl=window.location.href;
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
if(CurrentUrl.includes("editor.html")){
    var regionlocation=CurrentUrl.substring((CurrentUrl.indexOf("/home")-5),CurrentUrl.indexOf("/home"));
    var domainUrl="https://www.ey.com/";
    var lastIndexOfHtml=CurrentUrl.lastIndexOf(".html");
    if(CurrentUrl.includes("/people/")){
        if(CurrentUrl.includes("global")){
            regionlocation="en_gl/people/";
            if(CurrentUrl.includes("?appId=aemshell")){
                var lastIndexOfHtml=CurrentUrl.lastIndexOf("?appId=aemshell");
                var pathUrl=CurrentUrl.substring(140,lastIndexOfHtml);
            }else{
                var pathUrl=CurrentUrl.substring(140);
            }
            var pathUrl=CurrentUrl.substring(140,lastIndexOfHtml);
        }else{
            regionlocation=CurrentUrl.substring(134,139)+"/people/";
            if(CurrentUrl.includes("?appId=aemshell")){
                var lastIndexOfHtml=CurrentUrl.lastIndexOf("?appId=aemshell");
                var pathUrl=CurrentUrl.substring(142,lastIndexOfHtml);
            }else{
                var pathUrl=CurrentUrl.substring(142);
            }
            
        }
    }else if(CurrentUrl.includes("campaigns")){
            pathUrl=CurrentUrl.substring((CurrentUrl.indexOf("/home")+15),lastIndexOfHtml);
        }
        else{
            pathUrl=CurrentUrl.substring((CurrentUrl.indexOf("/home")+5),lastIndexOfHtml);
        }
        var aupLiveUrl=domainUrl+regionlocation+pathUrl;
        console.log("edit to live");
        window.open(aupLiveUrl,'_blank');
}else{
    var count=CurrentUrl.indexOf("ey.com");
    var livePathUrl=CurrentUrl.substring(count+13);
    var liveRegion=CurrentUrl.substring(count+7,count+12);
    console.log("live to edit");
    if(CurrentUrl.includes("/people/")){
        var livePathUrl=CurrentUrl.substring(count+20);
        var livePathUrl=Array.from(livePathUrl)[0]+"/"+livePathUrl;
        if(globalLocation){
            var editorPageLocation="https://author-p33415-e156808.adobeaemcloud.com/ui#/aem/editor.html/content/dam/content-fragments/ey-unified-site/ey-com/people/global/en/";
        }else{
            var editorPageLocation="https://author-p33415-e156808.adobeaemcloud.com/ui#/aem/editor.html/content/dam/content-fragments/ey-unified-site/ey-com/people/local/"+liveRegion+"/";
        }
      
    }else if(globalLocation){
        if(shellPages){
            var editorPageLocation="https://author-p33415-e156808.adobeaemcloud.com/ui#/aem/editor.html/content/ey-unified-site/ey-com/global/main/en_gl/home/";
        }else{
            var editorPageLocation="https://author-p33415-e156808.adobeaemcloud.com/ui#/aem/editor.html/content/ey-unified-site/ey-com/global/main/en_gl/home/campaigns/";
        }     
    }else {
        if(shellPages){
            var livePageRegionLocation=findLivelocation(liveRegion);
            var editorPageLocation="https://author-p33415-e156808.adobeaemcloud.com/ui#/aem/editor.html/content/ey-unified-site/ey-com/local/"+livePageRegionLocation+"/home/";
        }else{
            var livePageRegionLocation=findLivelocation(liveRegion);
            var editorPageLocation="https://author-p33415-e156808.adobeaemcloud.com/ui#/aem/editor.html/content/ey-unified-site/ey-com/local/"+livePageRegionLocation+"/home/campaigns/";
        }       
    }if(CurrentUrl.includes("/people/")){
        window.open(editorPageLocation+livePathUrl,'_blank'); 

    }else{
        window.open(editorPageLocation+livePathUrl+".html",'_blank'); 
    }
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
