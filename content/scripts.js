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
var promptbox=document.createElement('div');
promptbox.style.backgroundColor='white';
promptbox.style.padding='20px';
promptbox.style.borderRadius='10px';
promptbox.style.boxShadow='0 2px 10px rgba(0, 0, 0, 0.1)';
promptbox.style.textAlign='center';
var visibletext=document.createElement('p');
visibletext.textContent='please select your action';
promptbox.appendChild(visibletext);

//aup url button
var aupurlconverterbutton=document.createElement('button');
aupurlconverterbutton.textContent ="AUP URL Converter";
aupurlconverterbutton.onclick=aupurlconverter;
promptbox.appendChild(aupurlconverterbutton);
//aup url converter beta
var aupurlconverterbetabutton=document.createElement('button');
aupurlconverterbetabutton.textContent="AUP URL converter beta";
aupurlconverterbetabutton.onclick=aupbetaurlconverter;
promptbox.appendChild(aupurlconverterbetabutton);


// prompt cancle
var promptcancle=document.createElement('button');
promptcancle.textContent="cancle";
promptcancle.onclick=closeprompt;
promptbox.appendChild(promptcancle);

///////
promptDivTag.appendChild(promptbox);

document.body.appendChild(promptDivTag);
///clsose promot
function closeprompt() {
    // Hide the overlay prompt
    document.getElementsByClassName("customprompt")[0].style.display='none';
    var customprompt=document.getElementsByClassName("customprompt");
    for(var i=0;i<customprompt.length;i++)
    customprompt[i].remove();
};
function aupurlconverter(){   
    console.log("aupurlconverter clicked");
    
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
    };


    function aupbetaurlconverter(){   
        console.log("aupurlconverter clicked");
        
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
    };
    
