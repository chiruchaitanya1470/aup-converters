javascript:
var currentURL = window.location.href;
var imageArray = new Set();
var videoset=new Set();
var flourishset=new Set();
var audioset=new Set();
var liveLocations = currentURL.substring(19, 24);
var th = document.querySelector('meta[property="og:image"]');
var url = th ? th.getAttribute('content') : null;
var downloadUrl = url + "?download";
imageArray.add(downloadUrl);
var contentPages = currentURL.includes("/snippet/");
var homePages = currentURL.includes("/forms/") || currentURL.includes("/news/") || currentURL.includes("/locations/") || currentURL.includes("/podcasts/") || currentURL.includes("/webcasts/");


if (currentURL.includes("www.ey.com")) {
    if (contentPages) {
        var pathURL = currentURL.slice(24);
        imageArray.add("https://author.aemprod.ey.net/editor.html/content/ey-sites/ey-com/" + liveLocations + "/content" + pathURL + ".html");
        imageArray.add("https://author.aemprod.ey.net/mnt/overlay/wcm/core/content/sites/properties.html?item=/content/ey-sites/ey-com/" + liveLocations + "/content" + pathURL)
    } else if (homePages) {
        var pathURL = currentURL.slice(24);
        imageArray.add("https://author.aemprod.ey.net/editor.html/content/ey-sites/ey-com/" + liveLocations + "/home" + pathURL + ".html");
        imageArray.add("https://author.aemprod.ey.net/mnt/overlay/wcm/core/content/sites/properties.html?item=/content/ey-sites/ey-com/" + liveLocations + "/home" + pathURL)
    } else if (currentURL.includes("/people/")) {
        var pathPeople = currentURL.slice(32);
        var initialName = pathPeople.charAt(currentURL.lenght1);
        imageArray.add("https://author.aemprod.ey.net/editor.html/content/ey-sites/ey-com/" + liveLocations + "/home/people/" + initialName + "/" + pathPeople + ".html");
        imageArray.add("https://author.aemprod.ey.net/mnt/overlay/wcm/core/content/sites/properties.html?item=/content/ey-sites/ey-com/" + liveLocations + "/home/people/" + initialName + "/" + pathPeople)
    } else {
        var pathURL = currentURL.slice(24);
        imageArray.add("https://author.aemprod.ey.net/editor.html/content/ey-sites/ey-com/" + liveLocations + "/home/topics" + pathURL + ".html");
        imageArray.add("https://author.aemprod.ey.net/mnt/overlay/wcm/core/content/sites/properties.html?item=/content/ey-sites/ey-com/" + liveLocations + "/home/topics" + pathURL)
    }


    var imageClasses = document.getElementsByClassName('image component section default-style col-xs-12');
    for (var i = 0; i < imageClasses.length; i++) {
        var imgAttribute = imageClasses[i].getElementsByTagName('img');
        for (var j = 0; j < imgAttribute.length; j++) {
            imageArray.add(imgAttribute[j].getAttribute('src') + "?download");
        }

    }

    var heroImage = document.getElementsByClassName('hero-banner');
    for (var i = 0; i < heroImage.length; i++) {
        var imageAttriibute = heroImage[i].getElementsByTagName('img');
        for (var l = 0; l < imageAttriibute.length; l++) {
            var imageSrc = imageAttriibute[l].getAttribute('src');
            var value = imageSrc.indexOf('.rendition');
            var renditionRemovedUrl = imageSrc.substring(0, value);
            imageArray.add(renditionRemovedUrl + "?download");
        }

    }
    var chapterBrakerImages = document.getElementsByClassName('chapterBreaker component');
    for (var i = 0; i < chapterBrakerImages.length; i++) {
        var chapterBrakerImageAttribute = chapterBrakerImages[i].getElementsByTagName('img');
        for (var l = 0; l < chapterBrakerImageAttribute.length; l++) {
            var imageSrc = chapterBrakerImageAttribute[l].getAttribute('src');
            var value = imageSrc.indexOf('.rendition');
            var renditionRemovedUrl = imageSrc.substring(0, value);
            imageArray.add(renditionRemovedUrl + "?download");
        }

    }

    var chapterBrakerImages = document.getElementsByClassName('chapter-breakers__chapter-breaker');
for (var i = 0; i < chapterBrakerImages.length; i++) {
    var chapterBrakerImageAttribute = chapterBrakerImages[i].getElementsByTagName('img');
    for (var l = 0; l < chapterBrakerImageAttribute.length; l++) {
        var imageSrc = chapterBrakerImageAttribute[l].getAttribute('src');
        var value = imageSrc.indexOf('.rendition');
        var renditionRemovedUrl = imageSrc.substring(0, value);
        imageArray.add(renditionRemovedUrl + "?download");
    }

}

    var pdfs = document.getElementsByClassName('fileList-download-link');
    for (var i = 0; i < pdfs.length; i++) {
        var pdfLink = pdfs[i].getAttribute('href');
        imageArray.add(pdfLink);
    }

    var video = document.getElementsByClassName('hero-banner video-content');
    for (var i = 0; i < video.length; i++) {
    var videoIds = video[i].getElementsByTagName('video');
    var id=videoIds[0].getAttribute('data-video-id');
    if(id!=null){
    videoset.add(id);
    var videouri="https://players.brightcove.net/1066292269001/default_default/index.html?videoId="+id;
    imageArray.add(videouri);

    }
    
}
    var video_component = document.getElementsByClassName('brightcoveVideo component section default-style col-xs-12');
        for (var i = 0; i < video_component.length; i++) {
    var video_componentIds = video_component[i].getElementsByTagName('video');
    var id=video_componentIds[0].getAttribute('data-video-ids');
    if(id!=null){
    videoset.add(id);
    var videouri="https://players.brightcove.net/1066292269001/default_default/index.html?videoId="+id;
    imageArray.add(videouri);
    
        }
    console.log(videoset.size);
    
}
var audiocomponent=document.getElementsByClassName('component-content variant-brightcove-audio initialized');
for(var i=0;i<audiocomponent.length;i++){
    var audioid_tag=audiocomponent[i].getElementsByTagName('video');
    var audioid=audioid_tag[0].getAttribute('data-video-id');
console.log(audioid);
audioset.add(audioid);
localStorage.setItem("audioid",audioid);

}



var flourishClass=document.getElementsByClassName('flourish-embed');
for(var i=0;i<flourishClass.length;i++){
    var florishIds=flourishClass[i].getAttribute('data-src');
    flourishset.add(florishIds);
   
    imageArray.add("https://public.flourish.studio/"+florishIds);

}
console.log("flourish ids size"+ flourishset.size);

console.log("omage array size"+imageArray.size);
    
imageArray.forEach(function(url) {
    if(url.endsWith(".svg?download")){
        imageArray.delete(url);
    }
});

  
    imageArray.delete('?download');

    if (imageArray.size == 0) {
        alert('no images there in this page')
    }
    imageArray.forEach(function(url) {
        window.open(url, '_blank');
    });
    if (!url) {
        var newTab = window.open("", "_blank");
        newTab.document.write('<html><head><title>Alert</title></head><body><script>alert("Thumbnail Image Not Available");</script></body></html>');
        newTab.document.close()
    } else {
        window.open(url, '_blank');
    }



    
    var i=0;
    videoset.forEach(function(vids){
        i++;
        console.log(vids);
        localStorage.setItem("videoids"+i,vids);
    
    });
    var i=0;
    flourishset.forEach(function(fids){
        i++;
        console.log(fids);
        localStorage.setItem("flourishids"+i,fids);


    });
    var videosetLoop="for(var i=1;i<="+videoset.size+";i++){";
    var flourishsetloop="for(var i=1;i<="+flourishset.size+";i++){";
    var audiosetloop="for(var i=1;i<="+audioset.size+";i++){";

    let newtab = window.open('', '_blank');
    newtab.document.write('<html><head><title>Brightcove and FLourish IDs</title></head><body>');
    newtab.document.write('<script>');
    newtab.document.write('document.write("<h1>BrightCove IDs");');
    newtab.document.write(videosetLoop);
    newtab.document.write('document.write("<p>");');
    newtab.document.write('document.write("<h4>");');
    newtab.document.write('document.write("Video ID "+i+":-");');
    newtab.document.write('document.write(localStorage.getItem("videoids"+i));');
    newtab.document.write('document.write("<p>");');
    newtab.document.write('}');

    
    newtab.document.write('document.write("<h1>Flourish IDs");');
    newtab.document.write(flourishsetloop);
    newtab.document.write('document.write("<p>");');
    newtab.document.write('document.write("<h4>");');
    newtab.document.write('document.write("Flourish ID "+i+":-");');
    newtab.document.write('document.write(localStorage.getItem("flourishids"+i));');
    newtab.document.write('document.write("<p>");');
    newtab.document.write('}');
    
    newtab.document.write('document.write("<h1>BrightCove Audio ID");');
    newtab.document.write('document.write(" <br> <h5> Use this ID only for audio components (e.g., podcasts)");');
    newtab.document.write(audiosetloop);
    newtab.document.write('document.write("<p>");');
    newtab.document.write('document.write("<h4>");');
    newtab.document.write('document.write("Audio ID :- ");');
    newtab.document.write('document.write(localStorage.getItem("audioid"));');
    newtab.document.write('document.write("<p>");');
    newtab.document.write('}');

    newtab.document.write('</script>');
    newtab.document.write('</body></html>');
    newtab.document.close();


 
}else{
    alert('make sure this is not www.ey.com live page');
}
