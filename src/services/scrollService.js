let lastEl = null;

export function scrollToElement(el = lastEl) {
    el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    lastEl = el;
}