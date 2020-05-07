
export default class ConsoleWriter {
    constructor() {
        this.buf = '';
    }

    write(s) {
        if (s === undefined) return;
        this.buf += s;
    }

    writeln(s) {
        console.log((s === undefined) ? this.buf : (this.buf + s));
        this.buf = '';
    }

    flush() {
        if (this.buf !== '') {
            console.log(this.buf);
        }
    }
}
