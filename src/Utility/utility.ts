export function getCoords(elem: Element) { // crossbrowser version
    var box = elem.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    var top  = box.top +  scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return { top: Math.round(top), left: Math.round(left) };
}

export function SmoothScrollToElement(id: string){
    if(id === "Home"){
        window.scroll({ top: 0, behavior: "smooth" });
    }
    else {
        // Jump to element with id of button name (Spaces are removed)
        if(document.querySelector('#'+ id)){
            const elmnt = document.querySelector('#'+ id) as HTMLElement;
            var topOfElement = elmnt.offsetTop - 64; // 64 is height of Header bar
            window.scroll({ top: topOfElement, behavior: "smooth" });
        }

    }
}