let lastEl = null;
export function scrollToElement(el = lastEl) {
    // el.scrollIntoView({ behavior: "auto", block: "start", inline: "nearest" });
    el.scrollIntoView()
    lastEl = el;
}