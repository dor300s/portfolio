export function scrollToElement(el) {
    el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}