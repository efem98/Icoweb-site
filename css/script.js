	const faders = document.querySelectorAll('.fade-in');


		const appearOptions = {
			threshold:1
		};




		const appearOnScroll = new IntersectionObserver(funtion(
			entries,
			appearOnScroll
			){
			entries.forEach(entry => {
				if(!entry.isIntersecting) {
					return;
				} else {
					entry.target.classList.add('appear');
					appearOnScroll.unobserve(entry.target);
				}

			});
		},
			appearOptions);

	faders.forEach(fader =>{
		appearOnScroll.observe(fader);
	})	

onst sliders = document.querySlectorAll(".slide-in");
const appearOptions={
	threshold :0,
	rootMargin:"0px 0px -100px 0px"
};
const appearOnScroll = new IntersectionObserver(funtion(
			entries,
			appearOnScroll
			){
	sliders.forEach(slider =>{
		appearOnScroll.observe(slider);
	});