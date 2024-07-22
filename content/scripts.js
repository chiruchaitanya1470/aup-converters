//creating custom prompt
var promptDivTag=document.createElement('div');
promptDivTag.className="customprompt";
promptDivTag.style.display='flex';
promptDivTag.style.position='fixed';
promptDivTag.style.top='0';
promptDivTag.style.left='0';
promptDivTag.style.height='100%';
promptDivTag.style.backgroundColor='rgba(0, 0, 0, 0.5)';
promptDivTag.style.width='100%';
promptDivTag.style.justifyContent='center';
promptDivTag.style.alignItems='center';
var promptheading=document.createElement('div');
promptheading.style.backgroundColor='white';
var promptheading1=document.createElement('div');
promptheading.style.backgroundColor='white';

//promopt box
var promptbox=document.createElement('div');
promptbox.className="promptbox";
promptbox.style.backgroundColor='white';
promptbox.style.padding='20px';
promptbox.style.borderRadius='10px';
promptbox.style.boxShadow='0 2px 10px rgba(0, 0, 0, 0.1)';
promptbox.style.textAlign='center';
promptbox.style.display='grid';
promptbox.style.gridTemplateColumns= 'repeat(3, 1fr)';
promptbox.style.gap='10px';
var visibletext=document.createElement('h3');
visibletext.textContent='please select your action';
promptbox.appendChild(promptheading);
promptbox.appendChild(visibletext);
promptbox.appendChild(promptheading1);

//aup url button
var aupurlconverterbutton=document.createElement('button');
aupurlconverterbutton.textContent ="AUP URL Converter";
aupurlconverterbutton.style.margin='5px';
aupurlconverterbutton.style.padding='10px 20px';
aupurlconverterbutton.style.border='none';
aupurlconverterbutton.style.borderRadius='5px';
aupurlconverterbutton.style.backgroundColor='#007BFF';
aupurlconverterbutton.style.color='white';
aupurlconverterbutton.style.cursor='pointer';
aupurlconverterbutton.onclick=aupurlconverter;
promptbox.appendChild(aupurlconverterbutton);
//aup url converter beta
var aupurlconverterbetabutton=document.createElement('button');
aupurlconverterbetabutton.textContent="AUP URL converter beta";
aupurlconverterbetabutton.style.margin='5px';
aupurlconverterbetabutton.style.padding='10px 20px';
aupurlconverterbetabutton.style.border='none';
aupurlconverterbetabutton.style.borderRadius='5px';
aupurlconverterbetabutton.style.backgroundColor='#007BFF';
aupurlconverterbetabutton.style.color='white';
aupurlconverterbetabutton.style.cursor='pointer';
aupurlconverterbetabutton.onclick=aupbetaurlconverter;
promptbox.appendChild(aupurlconverterbetabutton);
//aem action hub
var aemactionhub=document.createElement('button');
aemactionhub.textContent="AEM Action hub ";
aemactionhub.style.margin='5px';
aemactionhub.style.padding='10px 20px';
aemactionhub.style.border='none';
aemactionhub.style.borderRadius='5px';
aemactionhub.style.backgroundColor='#007BFF';
aemactionhub.style.color='white';
aemactionhub.style.cursor='pointer';
aemactionhub.onclick=actionhub;
promptbox.appendChild(aemactionhub);

//crpsslinking button
var crosslinkingpopups=document.createElement('button');
crosslinkingpopups.textContent=" corsslinking";
crosslinkingpopups.style.margin='5px';
crosslinkingpopups.style.padding='10px 20px';
crosslinkingpopups.style.border='none';
crosslinkingpopups.style.borderRadius='5px';
crosslinkingpopups.style.backgroundColor='#007BFF';
crosslinkingpopups.style.color='white';
crosslinkingpopups.style.cursor='pointer';
crosslinkingpopups.onclick=crosslinkkingpop;
promptbox.appendChild(crosslinkingpopups);
// prompt cancle
var promptcancle=document.createElement('button');
promptcancle.textContent="cancle";
promptcancle.style.margin='5px';
promptcancle.style.padding='10px 20px';
promptcancle.style.border='none';
promptcancle.style.borderRadius='5px';
promptcancle.style.backgroundColor='#007BFF';
promptcancle.style.color='white';
promptcancle.style.cursor='pointer';
promptcancle.onclick=closeprompt;
promptbox.appendChild(promptcancle);
//prompt box apprending
promptDivTag.appendChild(promptbox);
//appending custom prompt
document.body.appendChild(promptDivTag);


///clsose promot
function closeprompt() {
    // Hide the overlay prompt
    document.getElementsByClassName("customprompt")[0].style.display='none';

    //remove the customprompt
    var customprompt=document.getElementsByClassName("customprompt");
    for(var i=0;i<customprompt.length;i++)
    customprompt[i].remove();
};
function aupurlconverter(){   
    console.log("aup url converter");
    
    var scriptUrl = 'https://chiruchaitanya-converters.deno.dev/content/aup-converter.js'; 
       var script = document.createElement('script');
        script.type="text/javascript";
        script.src = scriptUrl;
        script.onload = function() {
        console.log('Script loaded successfully');
        };  
        script.onerror = function() {
        console.error('Failed to load script:', scriptUrl);
        };    
        document.body.appendChild(script);
        closeprompt();

    };


    function aupbetaurlconverter(){   
        console.log("aup beta urlconverter");
        
        var scriptUrl = 'https://chiruchaitanya-converters.deno.dev/content/aup-beta-url-converter.js'; 
           var script = document.createElement('script');
            script.type="text/javascript";
            script.src = scriptUrl;
            script.onload = function() {
            console.log('Script loaded successfully');
            };  
            script.onerror = function() {
            console.error('Failed to load script:', scriptUrl);
            };    
            document.body.appendChild(script);
            closeprompt();

    };

    function actionhub(){
        console.log("action hub");
        
        var scriptUrl = 'https://chiruchaitanya-converters.deno.dev/content/action-hub.js'; 
           var script = document.createElement('script');
            script.type="text/javascript";
            script.src = scriptUrl;
            script.onload = function() {
            console.log('Script loaded successfully');
            };  
            script.onerror = function() {
            console.error('Failed to load script:', scriptUrl);
            };    
            document.body.appendChild(script);
            closeprompt();

    }
    function crosslinkkingpop(){   
        console.log("crosslinking");
        
        var scriptUrl = 'https://chiruchaitanya-converters.deno.dev/content/crosslinking-fields.js'; 
           var script = document.createElement('script');
            script.type="text/javascript";
            script.src = scriptUrl;
            script.onload = function() {
            console.log('Script loaded successfully');
            };  
            script.onerror = function() {
            console.error('Failed to load script:', scriptUrl);
            };    
            document.body.appendChild(script);
            closeprompt();

    };

   
