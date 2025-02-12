If you update innerHTML, whatever was there before is totally deleted. This also applies when using the `+=` operator. (case in point, my productivity extension).
SolutIon:      `element.insertAdjacentHTML("beforeend",  whatever_new_html);`
