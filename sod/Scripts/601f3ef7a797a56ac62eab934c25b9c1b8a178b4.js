 Sherlock = {
 	start:function(){
 		
 		this.scrambledContainer = glow.dom.get('.sl-cypher-encoded');
 		if(this.scrambledContainer.length==0) return;
 		
 		glow.dom.get('.sl-cypher-solution').addClass('sl-js'); 		
 		
 		this.addSolutionTrigger();
 		
 		
 	},
 	addSolutionTrigger:function(){
 		var h = '<a id="sl-cypher-trigger" href="#">Show Solution</a>';
 		glow.dom.get('.sl-cypher-solution').before(h);
		
		var t = this;
		var listener = glow.events.addListener('#sl-cypher-trigger',  'click', function () {
			glow.dom.get(this).remove();
			t.descramble();	
		});
		
 	},
 	descramble:function(){

 		
 		this.scrambledString = this.scrambledContainer.text();
 		 		
 		this.solutionString = glow.dom.get('.sl-cypher-solution-text').text();
 		
 		glow.dom.get('.sl-cypher-solution').css('display','block');
 		
 		
 		this.step = 1;
 		this.maxStep = this.solutionString.length+1;
 		
 		var t = this;
 		clearInterval(this.interalId);
 		this.interalId = setInterval ( function(){ t.descrambleStep(); }, 80 );


 	},
 	descrambleStep:function(){
 		var solvedString = this.solutionString.substring(0,this.step);
 		var unsolvedString = this.scrambledString.substring(this.step);
 		this.scrambledContainer.text(solvedString + unsolvedString);
 		
 		this.step++;
 		
 		if(this.step>=this.maxStep) clearInterval(this.interalId);
 	}
 }
  
/*
     FILE ARCHIVED ON 23:52:29 Sep 17, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:22:12 Jul 03, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 109.595 (3)
  esindex: 0.025
  captures_list: 143.554
  CDXLines.iter: 16.348 (3)
  PetaboxLoader3.datanode: 214.148 (5)
  exclusion.robots: 0.348
  exclusion.robots.policy: 0.329
  RedisCDXSource: 1.531
  PetaboxLoader3.resolve: 143.173 (2)
  load_resource: 381.155
*/