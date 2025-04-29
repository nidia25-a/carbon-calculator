/*let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
// Function to reset scrollY when reaching the bottom
function handleInfiniteScroll() {
    const documentHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const scrollY = window.scrollY;

    // Reset scrollY when reaching the bottom
    if (scrollY + viewportHeight >= documentHeight) {
        window.scrollTo(0, 0); // Reset scroll position to the top
    }
}


window.addEventListener('scroll', () => {
    let {scrollY} = window;


    text.style.marginTop = scrollY * 2.5 + 'px';
    leaf.style.top = scrollY * -1.5 + 'px';
    leaf.style.left = scrollY * 1.5 + 'px';
    hill5.style.left = scrollY * 1.5 + 'px'; 
    hill1.style.top = scrollY * 1 + 'px';

}); */

/*let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
// Function to reset scrollY when reaching the bottom
function handleInfiniteScroll() {
    const documentHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const scrollY = window.scrollY;

    // Reset scrollY when reaching the bottom
    if (scrollY + viewportHeight >= documentHeight) {
        window.scrollTo(0, 0); // Reset scroll position to the top
    }
}


window.addEventListener('scroll', () => {
    let { scrollY } = window;

    // Apply parallax effect to text
    text.style.transform = `translate(-50%, ${-50 + scrollY * 0.5}%)`; // Adjust the multiplier for speed

    // Apply parallax effects to other elements
    leaf.style.transform = `translate(${scrollY * 1.5}px, ${scrollY * -1.5}px)`;
    hill5.style.transform = `translateX(${scrollY * 1.5}px)`;
    hill1.style.transform = `translateY(${scrollY * 1}px)`;
}); /*

/*let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill5 = document.getElementById('hill5');

// Function to reset scrollY when reaching the bottom
function handleInfiniteScroll() {
    const documentHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const scrollY = window.scrollY;

    // Reset scrollY when reaching the bottom
    if (scrollY + viewportHeight >= documentHeight) {
        window.scrollTo(0, 0); // Reset scroll position to the top
    }
}

function applyParallax() {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    // Apply parallax effect to text
    text.style.transform = `translate(-50%, ${-50 + scrollY * 0.5}%)`;

    // Apply parallax effects to other elements
    leaf.style.transform = `translate(${scrollY * 1.5}px, ${scrollY * -1.5}px)`;
    hill5.style.transform = `translateX(${scrollY * 1.5}px)`;
    hill1.style.transform = `translateY(${scrollY * 1}px)`;

    // Reset elements when they move out of the viewport
    if (scrollY > viewportHeight) {
        leaf.style.transform = `translate(${(scrollY - viewportHeight) * 1.5}px, ${(scrollY - viewportHeight) * -1.5}px)`;
        hill5.style.transform = `translateX(${(scrollY - viewportHeight) * 1.5}px)`;
        hill1.style.transform = `translateY(${(scrollY - viewportHeight) * 1}px)`;
    }
}*/

/*let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill5 = document.getElementById('hill5');

// Function to reset scrollY when reaching the bottom
function handleInfiniteScroll() {
    const documentHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const scrollY = window.scrollY;

    // Reset scrollY when reaching the bottom
    if (scrollY + viewportHeight >= documentHeight) {
        window.scrollTo(0, 0); // Reset scroll position to the top
    }
}

// Function to apply parallax effects
function applyParallax() {
    const scrollY = window.scrollY;

    // Apply parallax effect to text
    text.style.transform = `translate(-50%, ${-50 + scrollY * 0.5}%)`;

    // Apply parallax effects to other elements
    leaf.style.transform = `translate(${scrollY * 1.5}px, ${scrollY * -1.5}px)`;
    hill5.style.transform = `translateX(${scrollY * 1.5}px)`;
    hill1.style.transform = `translateY(${scrollY * 1}px)`;
}

// Event listener for scroll
window.addEventListener('scroll', () => {
    handleInfiniteScroll(); // Handle infinite scrolling
    applyParallax(); // Apply parallax effects
});*/

let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

// Function to reset scrollY when reaching the bottom
function handleInfiniteScroll() {
    const documentHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const scrollY = window.scrollY;
    
    console.log(`ScrollY: ${scrollY}, ViewportHeight: ${viewportHeight}, DocumentHeight: ${documentHeight}`);

    // Reset scrollY when reaching the bottom
    if (scrollY + viewportHeight >= documentHeight) {
        window.scrollTo(0, 0); // Reset scroll position to the top
    }
}

// Function to apply parallax effects
function applyParallax() {
    const scrollY = window.scrollY;

    // Apply parallax effect to text
    //text.style.transform = `translateY(${scrollY * 0.5}px)`; // Adjust the multiplier for speed

    // Apply parallax effects to other elements
    leaf.style.transform = `translate(${scrollY * 1.5}px, ${scrollY * -1.5}px)`;
    hill4.style.transform = `translateX(${scrollY * -1.5}px)`;
    text.style.marginTop = scrollY * 2.7 + 'px';
    hill5.style.transform = `translateX(${scrollY * 1.5}px)`;
    hill1.style.transform = `translateY(${scrollY * 1}px)`;
}
//window.onscroll = null;
//window.removeEventListener('scroll',loadMoreContent);

// Event listener for scroll
/*window.addEventListener('scroll', () => {
    //handleInfiniteScroll(); // Handle infinite scrolling
    applyParallax(); // Apply parallax effects
}); */

//window.removeEventListener('scroll',loadMoreContent);

// Add event listeners
/*window.addEventListener('scroll', applyParallax); // Always apply parallax
window.addEventListener('scroll', loadMoreContent); // Add infinite scroll */

// To remove infinite scrolling (but keep parallax)
//window.removeEventListener('scroll', loadMoreContent);

function handleScroll() {
    applyParallax(); // Apply parallax effect
    loadMoreContent(); // Handle infinite scrolling
}

window.addEventListener('scroll', handleScroll);

// To remove infinite scrolling (but keep parallax)
function handleScrollWithoutInfinite() {
    applyParallax(); // Apply parallax effect
}

//window.removeEventListener('scroll', handleScroll);
window.addEventListener('scroll', handleScrollWithoutInfinite);