# 陌生的数据中心

## dns

![create](/Occam-s-Razor.github.io/dns.jpg)

- 存在问题 1. 域名缓存问题 2. 域名转发问题 3. 出口 nat 问题 4.域名更新问题

## httpdns

- 解决 httpdns HTTPNDS 其实就是，不走传统的 DNS 解析，而是自己搭建基于 HTTP 协议的 DNS 服 务器集群，分布在多个地点和多个运营商。当客户端需要 DNS 解析的时候，直接通过 HTTP 协议进行请求这个服务器集群，得到就近的地址。

![create](/Occam-s-Razor.github.io/httpdns.jpg)

## cdn
