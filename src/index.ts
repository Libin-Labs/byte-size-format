export interface ByteSizeOptions {
  readonly base?: 1000 | 1024;
  readonly decimals?: number;
}
export function formatByteSize(bytes: number, options: ByteSizeOptions = {}): string {
  if (!Number.isFinite(bytes) || bytes < 0)
    throw new RangeError('Bytes must be finite and nonnegative');
  const base = options.base ?? 1024,
    decimals = options.decimals ?? 1;
  if (
    (base !== 1000 && base !== 1024) ||
    !Number.isInteger(decimals) ||
    decimals < 0 ||
    decimals > 6
  )
    throw new RangeError('Invalid formatting options');
  const units =
    base === 1000 ? ['B', 'kB', 'MB', 'GB', 'TB', 'PB'] : ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB'];
  let value = bytes,
    index = 0;
  while (value >= base && index < units.length - 1) {
    value /= base;
    index++;
  }
  return value.toFixed(decimals) + ' ' + units[index];
}
