

const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        //설정된 프록시는 클라이언트 사이드에서 Node.js 서버 사이드인  'http://localhost:3001/'api' 로의 요청을 처리하여 서버 데이터를 가져올 수 있도록 해준다.
        proxy('/api', {
            target: 'http://localhost:3001/'
        })
    )
}