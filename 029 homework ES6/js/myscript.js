class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv(any) {
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.textContent = any;
        div.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign}`;
        return div;
    }
}

const obj = new Options('500px', '500px', 'red', '16px', 'center');

obj.createDiv("Hello World");