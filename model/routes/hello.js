let hello = [
  {
    // Match a request for the key "hello"
    route: "hello",
    // Respond with a PathValue with the value of "Hello Falcor!"
    get: function() {
      return {path:["hello"], value: "Hello Falcor!"};
    }
  }
];

export default hello;