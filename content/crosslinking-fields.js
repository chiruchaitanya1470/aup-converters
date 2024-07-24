javascript:
var anchorlinksposition=0;
var newElement;
var newInput;
var anchorLinksSet = new Set();

var authorProfiles=document.getElementsByClassName("surfaceProfile-author-description");
for(var i=0;i<authorProfiles.length;i++){
    var attribute=authorProfiles[i].getElementsByClassName('surfaceProfile-author-link');
    for(var j=0;j<attribute.length;j++){
        var hrefLink=attribute[j].href;
        var crosslinkkingvalue=crosslinkking(hrefLink);
        anchorLinksSet.add(hrefLink);
        var divElement= newElementCreator(crosslinkkingvalue);
        authorProfiles[i].appendChild(divElement);
        anchorlinksposition=anchorlinksposition+1;
    }
   
}


var contributorsProfiles=document.getElementsByClassName("surfaceProfile-contributors-section");
for(var i=0;i<contributorsProfiles.length;i++){
    var attribute=contributorsProfiles[i].getElementsByClassName('surfaceProfile-contributor');
    for(var j=0;j<attribute.length;j++){
        var hrefLink=attribute[j].querySelectorAll('h4>a')[j].href;
        var crosslinkkingvalue=crosslinkking(hrefLink);
        anchorLinksSet.add(hrefLink);
        var divElement= newElementCreator(crosslinkkingvalue);
        contributorsProfiles[i].appendChild(divElement);
        anchorlinksposition=anchorlinksposition+1;
    }
   
}
var anchorlinksposition=0;

var nestedtile=document.getElementsByClassName("nestedTile-parsys");
for(var i=0;i<nestedtile.length;i++){
    var attribute=nestedtile[i].getElementsByClassName('linkAreaLink component section');
    for(var j=0;j<attribute.length;j++){
        var hrefLink=attribute[j].querySelectorAll('div>h5>a')[j].href;
        var crosslinkkingvalue=crosslinkking(hrefLink);
        anchorLinksSet.add(hrefLink);
        var divElement= newElementCreator(crosslinkkingvalue);
        divElement.style.left='-700px';
        nestedtile[i].appendChild(divElement);
        anchorlinksposition=anchorlinksposition+1;
    }
}
var anchorlinksposition=0;




var releatedTopics=document.getElementsByClassName("surface-tags content");
for(var i=0;i<releatedTopics.length;i++){
    var attribute=releatedTopics[i].getElementsByTagName('a');
    for(var j=0;j<attribute.length;j++){
        var hrefLink=attribute[j].href;
        var crosslinkkingvalue=crosslinkking(hrefLink);
        anchorLinksSet.add(hrefLink);
        var divElement= newElementCreator(crosslinkkingvalue);
        releatedTopics[i].appendChild(divElement);
        anchorlinksposition=anchorlinksposition+1;
    }

}
var anchorlinksposition=0;


function newElementCreator(liveUrl){
    newElement=document.createElement('div');
    newElement.className="hyperlinkfield";
    newInput=document.createElement('input');
    newInput.type="text";
    newInput.value=liveUrl;
    newElement.appendChild(newInput);
    styles(anchorlinksposition);
    adjustInputWidth(newInput);
    return newElement;
}


anchorLinksSet.forEach(function(links){
    console.log(links);
});

function nestedtilestyles(positionDigit){
    var number=positionDigit*40;
    newElement.style.position= 'absolute';
    newElement.style.top= number+40+'px';
    newElement.style.left='140px';
    newElement.style.fontSize='25px';
    newElement.style.border= '5px solid';
    newElement.style.borderColor= 'rgb(71, 151, 91)';
    newElement.style.zIndex='180';
    newInput.style.backgroundColor='#CFEEA8';
}

function styles(positionDigit){
    var number=positionDigit*40;
    newElement.style.position= 'absolute';
    newElement.style.top= number+40+'px';
    newElement.style.left='140px';
    newElement.style.fontSize='25px';
    newElement.style.border= '5px solid';
    newElement.style.borderColor= 'rgb(71, 151, 91)';
    newElement.style.zIndex='180';
    newInput.style.backgroundColor='#CFEEA8';
    

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
      
        var count=CurrentUrl.indexOf("ey.com");
        var livePathUrl=CurrentUrl.substring(count+13);
        var updatedTags=livePathUrl.includes("automotive-transportation")||livePathUrl.includes("technology-sector")
                        ||livePathUrl.includes("attractiveness")||livePathUrl.includes("family-business")
                        ||livePathUrl.includes("diversity-inclusiveness");
            if(updatedTags){
                livePathUrl=livePathUrl.replace("automotive-transportation","automotive");
                livePathUrl=livePathUrl.replace("technology-sector","tech-sector");
                livePathUrl=livePathUrl.replace("family-business","family-enterprise");
                livePathUrl=livePathUrl.replace("attractiveness","foreign-direct-investment-surveys");
                livePathUrl=livePathUrl.replace("diversity-inclusiveness","diversity-equity-inclusiveness");
            }
        var liveRegion=CurrentUrl.substring(count+7,count+12);
        var hallWayPageName= hallWayNameExtractor(livePathUrl);
        var indexpageName=hallWayPage(hallWayPageName);
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
                var editorPageLocation="/content/ey-unified-site/ey-com/local/"+livePageRegionLocation+"/home/"+indexpageName+"/"+livePathUrl;
            
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
        var aboutUs=str.includes("corporate-responsibility")||str.includes("diversity-equity-inclusiveness");
        var services=str.includes("education")||str.includes("eu-institutions")||str.includes("forensic-integrity-services")||str.includes("innovation")||str.includes("sustainability")
                    ||str.includes("long-term-value")||str.includes("corporate-culture")||str.includes("workforce")||str.includes("entrepreneurship/insight-out-entrepreneurship-innovation-series")
                    ||str.includes("technology/awards-recognition")||str.includes("growth")||str.includes("strategy-transactions")||str.includes("strategy")
                    ||str.includes("law")||str.includes("tax")||str.includes("tax-accounting")||str.includes("tax-compliance")||str.includes("tax-controversy-policy")
                    ||str.includes("tax-function-operations")||str.includes("tax-planning")||str.includes("tax-transparency-disclosure")||str.includes("private-business")
                    ||str.includes("entrepreneurship")||str.includes("family-enterprise")||str.includes("ipo")||str.includes("managed-services")||str.includes("technology")
                    ||str.includes("technology/platforms-products")||str.includes("blockchain/platforms")||str.includes("blockchain")||str.includes("assurance")||str.includes("audit")
                    ||str.includes("audit/atlas-client-edition")||str.includes("audit-quality")||str.includes("climate-change-sustainability-services")||str.includes("climate-related-reporting")
                    ||str.includes("environment-health-safety")||str.includes("financial-accounting-advisory-services")||str.includes("nonfinancial-integrated-reporting")
                    ||str.includes("private-client-audit-experience")||str.includes("sustainable-impact-hub")||str.includes("ifrs")||str.includes("consulting")||str.includes("cybersecurity")
                    ||str.includes("emerging-technologies")||str.includes("finance")||str.includes("intelligent-automation")||str.includes("performance-improvement")||str.includes("risk")
                    ||str.includes("supply-chain")||str.includes("ai")||str.includes("big-data-analytics")||str.includes("internet-of-things-iot");
        var campaigns=str.includes("athlete-programs")||str.includes("disrupting-financial-crime")||str.includes("smart-health")||str.includes("trusted-intelligence")
                    ||str.includes("challenges-opportunities-facing-consumer-companies")||str.includes("sibos")||str.includes("private-business-ambition-unlocked")
                    ||str.includes("cmo")||str.includes("chro")||str.includes("ciso")||str.includes("economics")
                    ||str.includes("uplift-social-equity-driving-inclusive-equitable-experiences")||str.includes("attractiveness")
                    ||str.includes("cro-risk")||str.includes("cio")||str.includes("nextwave-financial-services/nextwave-financial-services")
                    ||str.includes("transformation-strategies-banking-leaders/transformation-strategies-banking-leaders")||str.includes("alumni")
                    ||str.includes("foreign-direct-investment-surveys")||str.includes("cop")||str.includes("wef")||str.includes("board-matters")
                    ||str.includes("megatrends")||str.includes("megatrends/pathfinder")||str.includes("tech-university")||str.includes("coo")
                    ||str.includes("women-fast-forward")||str.includes("life-sciences-securing-value-data-driven-platforms")||str.includes("insurance-business-transformation")
                    ||str.includes("ey-nottingham-spirk-innovation-hub")||str.includes("automotive-transportation-future-retail")||str.includes("future-manufacturing")
                    ||str.includes("global-ideathon-farm-fork-competition")||str.includes("green-skills-passport-sustainability-skills-green-jobs-program")
                    ||str.includes("mwc")||str.includes("wealth-management-research/wealth-management-research")||str.includes("financial-services-enterprise-protection")
                    ||str.includes("sap-fioneer-financial-services-forum")||str.includes("cannes-lions-international-festival-creativity")||str.includes("ceo")
                    ||str.includes("gco")||str.includes("payroll-technology")||str.includes("taxation-digital-economy")||str.includes("tax-guide-europe")
                    ||str.includes("tax-leader")||str.includes("tax-technology-and-transformation-survey-2020")||str.includes("tfo-survey")
                    ||str.includes("entrepreneurial-winning-women-asia-pacific")||str.includes("entrepreneurial-winning-women-europe")
                    ||str.includes("entrepreneurial-winning-women")||str.includes("next-generation")
                    ||str.includes("private-business-board-members")||str.includes("weoy")||str.includes("connected-citizens")
                    ||str.includes("metaverse-new-ways-interacting-businesses-consumers")
                    ||str.includes("technology-business-value-human-impact")||str.includes("wavespace")||str.includes("world-retail-congress")
                    ||str.includes("future-consumer-index")||str.includes("future-consumer-now")||str.includes("report-consumer-companies-alignment-un-sdgs")
                    ||str.includes("nrf")||str.includes("ecosystems")||str.includes("tech-mba")||str.includes("ecoenergy-profile")||str.includes("smart-health")
                    ||str.includes("accelerating-decarbonization")||str.includes("cfo-agenda")||str.includes("digital-audit")||str.includes("future-of-corporate-reporting")
                    ||str.includes("global-integrity-report")||str.includes("cloud-transformation-innovation")||str.includes("transformation-realized")||str.includes("women-technology-program")
                    ||str.includes("trust-by-design")||str.includes("maturity-assessment")||str.includes("banking-capital-markets-risk-regulatory-transformation")
                    ||str.includes("banking-capital-markets-transformation-growth")||str.includes("ebf")||str.includes("ifb/ey-ifb")
                    ||str.includes("money-2020/money2020")||str.includes("intelligent-automation-financial-services/intelligent-automation-in-financial-services");
        var insights=str.includes("purpose")||str.includes("trust")||str.includes("public-policy/public-policy")||str.includes("ibor")||str.includes("payments")
                    ||str.includes("sustainability-financial-services")||str.includes("disability-inclusiveness-accessibility")||str.includes("inclusive-growth")
                    ||str.includes("emobility")||str.includes("digital-strategy")||str.includes("infrastructure")||str.includes("mergers-acquisitions")
                    ||str.includes("restructuring-turnaround")||str.includes("divestitures")||str.includes("geostrategy")||str.includes("global-tax-reform")
                    ||str.includes("global-trade")||str.includes("government-digital-innovation")||str.includes("international-development")
                    ||str.includes("digital")||str.includes("sustainable-development-goals")||str.includes("customer")||str.includes("open-banking")
                    ||str.includes("financial-services/emeia/public-policy");
        var industries=str.includes("real-estate-hospitality-construction")||str.includes("life-sciences")||str.includes("insurance")||str.includes("aerospace-defense")
        ||str.includes("automotive")||str.includes("chemicals")||str.includes("industrial-products")||str.includes("transportation")
        ||str.includes("creating-sustainable-future-automotive-sector")||str.includes("tmt")||str.includes("telecommunications")||str.includes("wealth-asset-management")
        ||str.includes("financial-services/asia-pacific")||str.includes("financial-services/alliances-ecosystems")||str.includes("financial-services")
        ||str.includes("financial-services/nextwave-financial-services-financial-well-being")||str.includes("government-public-sector")||str.includes("tech-sector")
        ||str.includes("consumer-products")||str.includes("e-commerce")||str.includes("retail")||str.includes("sustainability-consumer-products-retail")
        ||str.includes("energy-resources")||str.includes("mining-metals")||str.includes("oil-gas")||str.includes("power-utilities")||str.includes("private-equity")
        ||str.includes("health")||str.includes("banking-capital-markets")||str.includes("financial-services/emeia")||str.includes("financial-services/emeia/alliances");                    
        if(services){
            return "services";

        }else if(campaigns){
            return "campaigns";
        }
        else if(aboutUs){
            return "about-us";
        }
        else if(insights){
            return "insights";
        }
        else if(industries){
            return "industries";
        } else{
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


