import { fetchToDataBase } from '../HTTPS/fetchToDB';
import { listFromDataBase } from '../server/listFromDB';

describe('fetchToDataBase', () => {
  it('returns a stringified version of listFromDataBase', async () => {
    const result = await fetchToDataBase();
    expect(result).toEqual(JSON.stringify(listFromDataBase));
  });

  it('waits for 2 seconds before resolving', async () => {
    jest.useFakeTimers();
    const result = fetchToDataBase();
    jest.runAllTimers();
    await expect(result).resolves.toEqual(JSON.stringify(listFromDataBase));
    jest.useRealTimers();
  });
});
