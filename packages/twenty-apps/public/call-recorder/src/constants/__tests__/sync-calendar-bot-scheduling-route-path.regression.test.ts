import { describe, expect, it } from 'vitest';

import { SYNC_CALENDAR_BOT_SCHEDULING_ROUTE_PATH } from 'src/constants/sync-calendar-bot-scheduling-route-path';

describe('SYNC_CALENDAR_BOT_SCHEDULING_ROUTE_PATH', () => {
  it('regression-sync-calendar-bot-scheduling-route-path-001: exports the exact scheduling route path', () => {
    expect(SYNC_CALENDAR_BOT_SCHEDULING_ROUTE_PATH).toBe(
      '/call-recorder/sync-calendar-bot-scheduling',
    );
  });
});
