var httpProxy = require('http-proxy');

    httpProxy.createProxyServer({
    target: {
        host:'localhost',
        port:56587
    },
    headers:{
        host: 'localhost'
    }
    
}).listen(8000);
