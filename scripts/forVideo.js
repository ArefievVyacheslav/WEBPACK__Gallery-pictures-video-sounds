import { items, outputBlock } from "./gallery.js"

export const letVideo = () => {
    items.forEach(item => {
        if (item.type === 'video') {
            let template = `<div class="item">
                            <video controls src=${item.src}></video>
                            <h3 class="description">${item.header}</h3>
                        </div>`;
            outputBlock.insertAdjacentHTML('beforeend', template);
        }
    });
}

