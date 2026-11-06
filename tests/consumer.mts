import * as api from '@lp-labs/byte-size-format';
import { formatByteSize } from '@lp-labs/byte-size-format';
console.log(formatByteSize(1536, { base: 1024, decimals: 1 }));
// @ts-expect-error invalid argument must be rejected by declarations
api.formatByteSize('large');
