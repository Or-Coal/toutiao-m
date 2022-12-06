const express = require('express')
const app = express()
app.use(express.static(`${__dirname}/public`))

const http = require('http').Server(app)
http.listen(4005)
const io = require('socket.io')(http)

// io.on('connection') -- 固定的, 用于 监测有没有人用socket服务链接我, 触发后面的函数
io.on('connection', function (socket) { // socket连接者对象
  // console.log('a user connected');
  socket.on('cTos', data => { // 谁来链接我, 我就给谁绑定一个事件叫cTos(随便), data接收的就是前端触发这个事件传递过来的聊天消息
    // io.sockets(拿到当前连接池里所有的socket对象-链接到我的所有人), emit()触发事件(前端事件叫sToC) ---- 广播
    io.sockets.emit('sToC', data) // 把当前收到的聊天消息, 发送给所有连接着(前端)
  })
})
