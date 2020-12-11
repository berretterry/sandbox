var exampleSocket = new WebSocket("wss://localhost:3001");

exampleSocket.onopen = function (event) {
  debugger;
  exampleSocket.send("Here's some text that the server is urgently awaiting!");
};

exampleSocket.onmessage = function (event) {
  debugger;
  console.log(event.data);
}