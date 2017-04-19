//MUSCLE INFORMATION
var bodyMap = [
	{
		name: "Deltoid",
		displayName: "Deltoid",
		origin: "Acromion process and clavicle and scapula",
		insertion: "Deltoid tuberosity of humerus",
		innervation: "Axillary nerve"
	},
	{
		name: "Pectoralis-major",
		displayName: "Pectoralis major",
		origin: "Ribs 2-6, sternum, clavicle",
		insertion: "Lateral crest of intertubercular groove of humerus",
		innervation: "Pectoral nerve"
		
	},
	{
		name: "Biceps-brachii-long-head",
		displayName: "Biceps brachii (long head)",
		origin: "Supraglenoid tubercle on scapula",
		insertion: "Radial tuberosity",
		innervation: "Musculocutaneous nerve"
		
	},
	{
		name: "Biceps-brachii-short-head",
		displayName: "Biceps brachii (short head)",
		origin: "Coracoid process of scapula",
		insertion: "Radial tuberosity",
		innervation: "Musculocutaneous nerve"
		
	},
	{
		name: "Brachioradialis",
		displayName: "Brachioradialis",
		origin: "Lateral supracondylar ridge of humerus",
		insertion: "Styloid process of radius",
		innervation: "Radial nerve"
		
	},
	{
		name: "External-abdominal-obliques",
		displayName: "External abdominal obliques",
		origin: "Ribs 5-12",
		insertion: "Rectus sheath, inguinal ligament, iliac crest",
		innervation: "Lower thoracic nerve"
		
	},
	{
		name: "Rectus-abdominis",
		displayName: "Rectus abdominis",
		origin: "Superior pubis, pelvic crest",
		insertion: "Inferior ribs, xiphoid process",
		innervation: "Lower thoracic nerve"

	},
	{
		name: "Gluteus-medius",
		displayName: "Gluteus medius",
		origin: "Outer aspect of ilium",
		insertion: "Superior aspect of greater trochanter of femur",
		innervation: "Superior gluteal nerve"
		
	},
	{
		name: "Sartorius",
		displayName: "Sartorius",
		origin: "Anterior superior iliac spine",
		insertion: "Medial surface of tibial tuberosity",
		innervation: "Femoral nerve"
		
	},
	{
		name: "Rectus-femoris",
		displayName: "Rectus femoris",
		origin: "Anterior inferior iliac spine",
		insertion: "Patella",
		innervation: "Femoral nerve"
		
	},
	{
		name: "Vastus-lateralis",
		displayName: "Vastus lateralis",
		origin: "Greater trochanter of femur",
		insertion: "Patella",
		innervation: "Femoral nerve"
		
	},
	{
		name: "Vastus-medialis",
		displayName: "Vastus medialis",
		origin: "Linea aspera of femur",
		insertion: "Patella",
		innervation: "Femoral nerve"
		
	},
	{
		name: "Gastrocnemius",
		displayName: "Gastrocnemius",
		origin: "Femoral condyles",
		insertion: "Calcaneus",
		innervation: "Tibial nerve"
		
	},
	{
		name: "Tibialis-anterior",
		displayName: "Tibialis anterior",
		origin: "Tibia and interosseous membrane",
		insertion: "1st metatarsal and medial cuneiform bone",
		innervation: "Deep fibular nerve"
		
	},
	{
		name: "Fibularis-longus",
		displayName: "Fibularis longus",
		origin: "Fibula",
		insertion: "1st metatarsal and medial cuneiform bone",
		innervation: "Superficial fibular nerve"
		
	}

]


$(function(){

// ON CLICK
	$('path').on('click', function(){

	//SELECTION
		// this and anything with the same data name will fill
		var bilateral = $(this).data("name");
		var bilateralSelector = $(`path[data-name=${bilateral}]`);
		bilateralSelector.attr("class", "selectedMuscle");

		// click on this, remove fill from everything, add fill to this
		$("path").not(bilateralSelector).attr("class", "");

		//grabs the muscle information corresponding to the muscle clicked
		var muscleName = $(this).data("name");
		var matchedItem = bodyMap.filter(function(item){
			return item.name.toUpperCase() === muscleName.toUpperCase()
		});

		//prints to html
		var nameInfo = bodyMap.displayName;
		$('span.name').text(matchedItem[0].displayName);

		var originInfo = bodyMap.origin;
		$('span.origin').text(matchedItem[0].origin);

		var insertionInfo = bodyMap.insertion;
		$('span.insertion').text(matchedItem[0].insertion);

		var innervationInfo = bodyMap.innervation;
		$('span.innervation').text(matchedItem[0].innervation);

	//QUIZ
		//resets feedback box when another muscle is clicked
		$("#nameFeedback, #originFeedback, #insertionFeedback, #innervationFeedback").text("");

		//erases previous user answer when new muscle is clicked
		$(".quizInput").val("");

		//makes quiz form show up once muscle is selected
		$(".quizForm").css({"display": "inline"});

		//quiz form
		$("form").submit(function(event) {
			event.preventDefault();

			//all feedback statement involve correctName
			var correctName = matchedItem[0].displayName;

			//name quiz
			var userInput = $('#name__userAnswer').val();
			userInput = userInput.toLowerCase();

			correctName = correctName.toLowerCase();

			if (userInput === correctName) {
				$('span#nameFeedback').html(`You're correct! The selected muscle is <font color="#5698af">${correctName}</font>.`).css({'color': '#19c452'});
			} else {
				$('span#nameFeedback').html(`Sorry! The selected muscle is <font color="#5698af">${correctName}</font>.`).css({'color': '#f00'});
			}
	 		//name quiz ends

	 		//origin quiz
			var userInput = $('#origin__userAnswer').val();
			userInput = userInput.toLowerCase();

			var correctOrigin = matchedItem[0].origin;
			correctOrigin = correctOrigin.toLowerCase();

			if (userInput ===  correctOrigin) {
				$('span#originFeedback').html(`You're correct! The origin of ${correctName} is <font color="#5698af">${correctOrigin}</font>.`).css({'color': '#19c452'});
			} else {
				$('span#originFeedback').html(`Sorry! The correct origin of ${correctName} is <font color="#5698af">${correctOrigin}</font>.`).css({'color': '#f00'});
			}
	 		//origin quiz ends

	 		//insertion quiz
			var userInput = $('#insertion__userAnswer').val();
			userInput = userInput.toLowerCase();

			var correctInsertion = matchedItem[0].insertion;
			correctInsertion = correctInsertion.toLowerCase();

			if (userInput ===  correctInsertion) {
				$('span#insertionFeedback').html(`You're correct! The insertion of ${correctName} is <font color="#5698af">${correctInsertion}</font>.`).css({'color': '#19c452'});
			} else {
				$('span#insertionFeedback').html(`Sorry! The correct insertion of ${correctName} is <font color="#5698af">${correctInsertion}</font>.`).css({'color': '#f00'});
			}
	 		//insertion quiz ends

			//innervation quiz
			var userInput = $('#innervation__userAnswer').val();
			userInput = userInput.toLowerCase();

			var correctNerve = matchedItem[0].innervation;
			correctNerve = correctNerve.toLowerCase();

			if (userInput === correctNerve) {
				$('span#innervationFeedback').html(`You're correct! The innervation of ${correctName} is <font color="#5698af">${ correctNerve}</font>.`).css({'color': '#19c452'});
			} else {
				$('span#innervationFeedback').html(`Sorry! The correct innervation of ${correctName} is <font color="#5698af">${ correctNerve}</font>.`).css({'color': '#f00'});
			}
	 		//innervation quiz ends
		});//QUIZ ends

	}); //on click ends


// ON HOVER
	$('path').on('mouseover', function(){
	// hover this and anything with the same data name will fill

		var bilateral = $(this).data("name");

		var bilateralSelector = $(`path[data-name=${bilateral}]`);
		bilateralSelector.attr("id", "hoverMuscle");
		bilateralSelector.css( "cursor", "pointer" );

		// hover on this, remove fill from everything, add fill to this
		$("path").not(bilateralSelector).attr("id", "");

	});

	$('path').on('mouseout', function(){

		$('path').attr("id", "");

	});
// on hover ends

//FADING PAGE

	//click on link, link will style, content corresponding to link will appear, other links default, other content hides
	$("#study__link").on("click", function() {
		$("#about__content, #nameQuiz__content, #originQuiz__content, #insertionQuiz__content, #innervationQuiz__content").hide();
		$("#study__content").fadeIn();

		$("#about__link, #nameQuiz__link, #originQuiz__link, #insertionQuiz__link, #innervationQuiz__link").removeClass("selectedLink");
		$("#study__link").addClass("selectedLink");
	});

	$("#about__link").on("click", function() {
		$("#study__content, #nameQuiz__content, #originQuiz__content, #insertionQuiz__content, #innervationQuiz__content").hide();
		$("#about__content").fadeIn();

		$("#study__link, #nameQuiz__link, #originQuiz__link, #insertionQuiz__link, #innervationQuiz__link").removeClass("selectedLink");
		$("#about__link").addClass("selectedLink");
	});

	$("#nameQuiz__link").on("click", function() {
		$("#study__content, #about__content, #originQuiz__content, #insertionQuiz__content, #innervationQuiz__content").hide();
		$("#nameQuiz__content").fadeIn();

		$("#study__link, #about__link, #originQuiz__link, #insertionQuiz__link, #innervationQuiz__link").removeClass("selectedLink");
		$("#nameQuiz__link").addClass("selectedLink");
	});

	$("#originQuiz__link").on("click", function() {
		$("#study__content, #about__content, #nameQuiz__content, #insertionQuiz__content, #innervationQuiz__content").hide();
		$("#originQuiz__content").fadeIn();

		$("#study__link, #about__link, #nameQuiz__link, #insertionQuiz__link, #innervationQuiz__link").removeClass("selectedLink");
		$("#originQuiz__link").addClass("selectedLink");
	});

	$("#insertionQuiz__link").on("click", function() {
		$("#study__content, #about__content, #nameQuiz__content, #originQuiz__content, #innervationQuiz__content").hide();
		$("#insertionQuiz__content").fadeIn();

		$("#study__link, #about__link, #nameQuiz__link, #originQuiz__link, #innervationQuiz__link").removeClass("selectedLink");
		$("#insertionQuiz__link").addClass("selectedLink");
	});

	$("#innervationQuiz__link").on("click", function() {
		$("#study__content, #about__content, #nameQuiz__content, #originQuiz__content, #insertionQuiz__content").hide();
		$("#innervationQuiz__content").fadeIn();

		$("#study__link, #about__link, #nameQuiz__link, #originQuiz__link, #insertionQuiz__link").removeClass("selectedLink");
		$("#innervationQuiz__link").addClass("selectedLink");
	});
//fading page ends

	$("#nameQuiz__link, #originQuiz__link, #insertionQuiz__link, #innervationQuiz__link").on("click", function() {
		$("#nameFeedback, #originFeedback, #insertionFeedback, #innervationFeedback").text("");
	});
}); 
// document.ready ends