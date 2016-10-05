(function(window) {

    var serverInfo = {
        host: '10.242.112.242',
        port: '8888',
    };
    var webSocketServer = `ws:\/\/${serverInfo.host}:${serverInfo.port}`;
    
    window.webSocketServer = webSocketServer;

})(window)