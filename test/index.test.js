import { ConsoleWriter } from '../src';

let spyLog;
beforeEach(() => {
    spyLog = jest.spyOn(console, 'log');
    spyLog.mockImplementation(x => x);
});

afterEach(() => {
    spyLog.mockReset();
    spyLog.mockRestore();
});

test('writeln', () => {
    const cw = new ConsoleWriter();
    cw.writeln('Hello, world!');
    expect(console.log).toBeCalled();
    expect(spyLog.mock.calls[0][0]).toEqual('Hello, world!');
});

test('writeln with no param', () => {
    const cw = new ConsoleWriter();
    cw.writeln();
    expect(console.log).toBeCalled();
    expect(spyLog.mock.calls[0][0]).toEqual('');
});

test('write and flush', () => {
    const cw = new ConsoleWriter();
    cw.write('Hello, world!');
    cw.flush();
    expect(console.log).toBeCalled();
    expect(spyLog.mock.calls[0][0]).toEqual('Hello, world!');
});

test('write and writeln', () => {
    const cw = new ConsoleWriter();
    cw.write('Hello, world!');
    cw.flush();
    expect(console.log).toBeCalled();
    expect(spyLog.mock.calls[0][0]).toEqual('Hello, world!');
});

test('flush only', () => {
    const cw = new ConsoleWriter();
    cw.flush();
    expect(console.log).not.toBeCalled();
});

test('writeln and flush', () => {
    const cw = new ConsoleWriter();
    cw.writeln('Hello, world!');
    cw.flush();
    expect(console.log).toBeCalled();
    expect(spyLog.mock.calls[0][0]).toEqual('Hello, world!');
});

test('write and writeln', () => {
    const cw = new ConsoleWriter();
    cw.write('Hello');
    cw.write(', ');
    cw.writeln('world!');
    expect(console.log).toBeCalled();
    expect(spyLog.mock.calls[0][0]).toEqual('Hello, world!');
});

test('write and writeln twice', () => {
    const cw = new ConsoleWriter();
    cw.write('Hello');
    cw.write(', ');
    cw.writeln('world!');
    cw.write('foo');
    cw.writeln('bar');
    expect(console.log).toBeCalled();
    expect(spyLog.mock.calls[0][0]).toEqual('Hello, world!');
    expect(spyLog.mock.calls[1][0]).toEqual('foobar');
});

test('write empty', () => {
    const cw = new ConsoleWriter();
    cw.write();
    cw.flush();
    expect(console.log).not.toBeCalled();
});
