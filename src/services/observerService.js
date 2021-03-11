export const observer = new IntersectionObserver((enteries) => {
    if (enteries[0].isIntersecting) {
        console.log(enteries[0]);
        enteries[0].target.classList.add('in-view');
        console.log(observer)
    } else {
        enteries[0].target.classList.remove('in-view');
    };
}, { threshold: .9 })