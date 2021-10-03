import { items, outputBlock } from "./gallery.js"

export const letAudio = () => {
    items.forEach(item => {
        if (item.type === 'audio') {
            let template = `<div class="item">
                                <div class="centering">
                                    <audio controls src=${item.src}></audio>
                                </div>
                                <h3 class="description">${item.header}</h3>
                            </div>`;
            outputBlock.insertAdjacentHTML('beforeend', template);
        }
    });
}