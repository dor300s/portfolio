export const observer = new IntersectionObserver((enteries) => {
    if (enteries[0].isIntersecting) {
        console.log(enteries[0]);
        enteries[0].target.classList.add('in-view');
    } else {
        enteries[0].target.classList.remove('in-view');
    };
}, { threshold: .2 })