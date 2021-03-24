$(document).ready(function () {
  function Stream() {
    var scroll = 10;
    function addSentences() {
      // Create and return random 'anxious' sentence
      function anxious() {
        const obj = JSON.parse(data);
        const firstLen = obj.sentences["first-half"].length;
        const secondLen = obj.sentences["end-half"].length;
        var first = obj.sentences["first-half"][Math.floor(Math.random()*firstLen)];
        var second = obj.sentences["end-half"][Math.floor(Math.random()*secondLen)];
        var sentence = first +" "+ second;
        return sentence;
      }
      // Create and return random 'philosophical' sentence
      function phil() {
        const obj = JSON.parse(data);
        const firstLen = obj.sentences["first-phil"].length;
        const secondLen = obj.sentences["end-phil"].length;
        var first = obj.sentences["first-phil"][Math.floor(Math.random()*firstLen)];
        var second = obj.sentences["end-phil"][Math.floor(Math.random()*secondLen)];
        var sentence = first +" "+ second;

        if (sentence.startsWith("What is")|| sentence.startswith("Is")) {
          sentence += "?";
        }
        return sentence;
      }
      // Create and return random 'present' sentence
      function present() {
        const obj = JSON.parse(data);
        const firstLen = obj.sentences["first-present"].length;
        const secondLen = obj.sentences["end-present"].length;
        var first = obj.sentences["first-present"][Math.floor(Math.random()*firstLen)];
        var second = obj.sentences["end-present"][Math.floor(Math.random()*secondLen)];
        var sentence = first +" "+ second;
        return sentence;
      }
      // Return complete sentence
      function meta() {
        const obj = JSON.parse(data);
        const length = obj.sentences["complete"].length;
        var sentence = obj.sentences["complete"][Math.floor(Math.random()*length)];
        return sentence;
      }
      // Randomly select sentence type, append sentence to html
      sentence_type = [meta, anxious, phil, present];
      sentence = sentence_type[Math.floor(sentence_type.length * Math.random())]();
      $("<p>"+ sentence +"</p>").appendTo(".infinite").hide().fadeIn(5000);
      $(".scroll").html("<span class='scroll'>" + scroll + "</span>");
      scroll += 1;
    }

    $(window).scroll(function(){
      $('.start').hide();
      // Gradually reduce opacity of text as user scrolls until 100 sentences generated
      if (scroll < 100) {
        var opacity = (-0.0097 * scroll) + 1;
      }
      else {
        var opacity = .03;
      }
      $('.infinite').css('opacity', opacity);

      // Add sentences as user scrolls
      if ($(window).scrollTop() + $(window).height() > $(document).height()-50){
			     addSentences();
		  }
    });
  }
  var stream = new Stream();
});
