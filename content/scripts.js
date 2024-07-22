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
visibletext.textContent='please select your action....................';
promptbox.appendChild(visibletext);
var crosslinkingButton=document.createElement('button');
crosslinkingButton.textContent ="AUP URL Converter";
crosslinkingButton.onclick=aupurlconverter;
//adding biutton
promptbox.appendChild(crosslinkingButton);
var promptcancle=document.createElement('button');
promptcancle.textContent="cancle";
promptcancle.onclick=closeprompt;
//adding cancle button
promptbox.appendChild(promptcancle);

///////
promptDivTag.appendChild(promptbox);

document.body.appendChild(promptDivTag);
///clsose promot
function closeprompt() {
    // Hide the overlay prompt
    document.getElementsByClassName("customprompt")[0].style.display='none';
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
