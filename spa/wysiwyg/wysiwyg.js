var famousPeople = [
	{
	  title: "Presidential Candidate",
	  name: "Bernie Sanders",
	  bio: "Bernard 'Bernie' Sanders is an American politician and the junior United States Senator from Vermont.",
	  image: "https://lh4.googleusercontent.com/-MoJHeOqT5Pg/AAAAAAAAAAI/AAAAAAAAUGY/QK9h6BxPcP8/s0-c-k-no-ns/photo.jpg",
	  lifespan: {
	    birth: 1941
	  }
	},
	{
	  title: "Musician",
	  name: "Michael Peter Balzary (Flea)",
	  bio: "Flea is best known as the bassist, co-founding member, and one of the composers of the rock band Red Hot Chili Peppers with whom he was inducted in 2012 into the Rock and Roll Hall of Fame.",
	  image: "http://a5.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTIwNjA4NjM0MTMxMDg4OTA4.jpg",
	  lifespan: {
	    birth: 1962
	  }
	},
	{
	  title: "Rock Climber",
	  name: "Dean Potter",
	  bio: "Dean Potter was an American free climber, alpinist, BASE jumper, BASEliner, and highliner. He was noted for hard first ascents, free solo ascents, speed ascents, and enchainments in Yosemite National Park and Patagonia.",
	  image: "http://www.trbimg.com/img-555a49b2/turbine/la-me-ln-extreme-athlete-dean-potter-dead-yosemite-2015051",
	  lifespan: {
	    birth: 1972,
	    death: 2015
	  }
	},
]

// add to DOM
$(famousPeople).each(function(i, el) {
	if (!el.lifespan.death) {
		el.lifespan.death = "present";
	}
	$('#container').append(`
		<div class="person"><person>
		<header>${el.name}: ${el.title}</header>
		<section><p>${el.bio}</p>
		<img src=${el.image}></section>
		<footer>${el.lifespan.birth} to ${el.lifespan.death}</footer>
		</person></div>`);
});

var bioToReplace;
// event listeners
$('.person').each(function(i, currPerson) {
	$(currPerson).on('click', function(event) {
		var personDiv = event.currentTarget;
		$(personDiv).addClass('border');
		$(personDiv).siblings().removeClass('border');
		$('#text-input').focus();
		bioToReplace = $(personDiv).find('p');
		console.log(bioToReplace);
	});
	$('#text-input').on("keyup", function(event) {
		if (event.which === 13) {
			$('#text-input').val('');
		}
		else {
			var newContent = $(this).val();
			$(bioToReplace).html(newContent);
		}
	});
});

