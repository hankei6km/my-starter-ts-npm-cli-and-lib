import { PassThrough } from 'stream';
import cli from './cli';

describe('cli()', () => {
  it('should return stdout with exitcode=0', async () => {
    const stdout = new PassThrough();
    const stderr = new PassThrough();
    const outData = jest.fn();
    stdout.on('data', outData);
    const errData = jest.fn();
    stderr.on('data', errData);
    expect(
      await cli({
        filename: 'test/assets/test.txt',
        stdout,
        stderr
      })
    ).toEqual(0);
    expect(outData.mock.calls.length).toEqual(1);
    expect(outData.mock.calls[0][0].toString('utf8')).toEqual(
      'test/assets/test.txt: 15 chars\n'
    );
    expect(errData.mock.calls.length).toEqual(0);
  });
  it('should return stderr with exitcode=1', async () => {
    const stdout = new PassThrough();
    const stderr = new PassThrough();
    const outData = jest.fn();
    stdout.on('data', outData);
    const errData = jest.fn();
    stderr.on('data', errData);
    expect(
      await cli({
        filename: 'test/assets/fail.txt',
        stdout,
        stderr
      })
    ).toEqual(1);
    expect(outData.mock.calls.length).toEqual(0);
    expect(errData.mock.calls.length).toEqual(2);
    expect(errData.mock.calls[0][0].toString('utf8')).toEqual(
      "Error: ENOENT: no such file or directory, open 'test/assets/fail.txt'"
    );
    expect(errData.mock.calls[1][0].toString('utf8')).toEqual('\n');
  });
});
