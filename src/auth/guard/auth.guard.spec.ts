import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  it('should be defined', () => {
    expect(
      new AuthGuard(
        { verifyAsync: () => {} } as any,
        { getAllAndOverride: () => {} } as any,
        { get: () => {} } as any,
      ),
    ).toBeDefined();
  });
});
