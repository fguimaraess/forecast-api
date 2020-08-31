import moment from 'moment';
import { TimeUtil } from '../timeutil';

describe('TimeTest', () => {
  it('should return yesterday', () => {
    const tomorrow = moment().add(1, 'days').unix();
    const response = TimeUtil.getUnixTimeForAFutureDay(1);
    expect(response).toEqual(tomorrow);
  });

  it('should return next week', () => {
    const nextWeek = moment().add(1, 'week').unix();
    const response = TimeUtil.getUnixTimeForAFutureDay(7);
    expect(response).toEqual(nextWeek);
  });
});
