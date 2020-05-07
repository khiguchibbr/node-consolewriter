Write for console

```js
import ConsoleWriter from '@khiguchibbr/consolewriter';

const cw = new ConsoleWriter();
cw.write('Hello');
cw.writeln(', world!'); // = console.log('Hello, world!');

cw.write('foo');
cw.flush(); // = console.log('foo');
```