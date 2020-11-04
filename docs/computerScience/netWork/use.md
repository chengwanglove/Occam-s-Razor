# 应用层协议

- HTTP 协议虽然很常用，也很复杂，重点记住 GET、POST、 PUT、DELETE 这几个方法，以及重要的首部字段；HTTP 2.0 通过头压缩、分帧、二进制编码、多路复用等技术提升性能；QUIC 协议通过基于 UDP 自定义的类似 TCP 的连接、重试、多路复用、流量控制技术，进一步提升性能

* http1.0 keep-alive 一个域名 6 个 tcp 来接 头部阻塞 带宽未充分应用

* http2.0 通过二进制桢实现多路复用 头部压缩 一个域名一个 tcp 链接 头压缩、分帧、二进制编码、多路复用

## https

- https 技术对称加密和非对称加密

![create](/Occam-s-Razor.github.io/https.jpg)
