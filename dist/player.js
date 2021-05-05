function playM3u8(url){
 var player = new Clappr.Player({                 
                    source: url,
                    parentId: '#player',
                    preload: 'auto',
                    autoPlay: 'true',
                    width: '100%',
                    height: '100%',
                    fullscreenEnabled:'true',
                    hideMediaControl: 'false',
                    mediacontrol: {seekbar: "#4B64F0", buttons: "#FFFFFF"},
                    plugins: [LevelSelector, ChromecastPlugin],
                   
                });

  document.title = "Playing: " +url;
    
}

playM3u8(window.location.href.split("#")[1])
