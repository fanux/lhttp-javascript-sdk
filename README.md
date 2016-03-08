#client of [lhttp](https://github.com/fanux/lhttp) - a powerful go websocket framework

###usage
```javascript
lhttp_client = new Lhttp("ws://localhost:8081/chat");

lhttp_client.on_open = function(context){
}

lhttp_client.on_message = function(context){
    context.send("hello, there!");
}

lhttp_client.on_close = function(context){
}
```
###`Context` API overview
####TODO
