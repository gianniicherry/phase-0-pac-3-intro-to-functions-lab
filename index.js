function shout(string) {
return string.toUpperCase();
  }
  function whisper(string) {
      return string.toLowerCase() ;
  }
  function logShout(string) {
      console.log("HELLO")
      return logShout.toUpperCase ;
  }
  function logWhisper(string) {
      console.log("hello")
      return logWhisper.toLowerCase ;
  }
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) 
        return "I can't hear you!" ;
    if (string === string.toUpperCase())
       return "YES INDEED!" ;
    if (string === "Let\'s have dinner together!") 
         return "I would love to!" ; 
}

  