import { items, outputBlock } from "./gallery.js"

export const letImg = () => {
    items.forEach(item => {
        if (item.type === 'img') {
            let template = `<div class="item">
                                <img src=${item.src} alt="certificate">
                                <h3 class="description">${item.header}</h3>
                            </div>`;
            outputBlock.insertAdjacentHTML('beforeend', template);
        }
    });
}