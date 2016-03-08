#client of [lhttp](https://github.com/fanux/lhttp) - a powerful go websocket framework

###usage
```javascript
lhttp_client = new Lhttp("ws://localhost:8081/chat");

lhttp_client.on_open = function(c Context){
}

lhttp_client.on_message = function(c Context){
    c.send("hello, there!");
}

lhttp_client.on_close = function(c Context){
}
```
###`Context` API overview
####TODO
