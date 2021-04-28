import { Writable } from 'stream';
import countChars from './count';

type Opts = {
  filename: string;
  stdout: Writable;
  stderr: Writable;
};
const cli = async ({ filename, stdout, stderr }: Opts): Promise<number> => {
  try {
    const count = await countChars(filename);
    stdout.write(`${filename}: ${count} chars\n`);
  } catch (err) {
    stderr.write(err.toString());
    stderr.write('\n');
    return 1;
  }
  return 0;
};

export default cli;
