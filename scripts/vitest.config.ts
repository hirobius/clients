import { defineConfig } from "vitest/config";

// Several scripts tests (render-site.test.ts, tooling.test.ts) spawn real `tsx`
// subprocesses — new-client, render-site, and probe modules — to exercise the
// CLIs end to end. Under CI's parallel turbo load those cold `tsx` starts can
// exceed vitest's 5s default and flake with "Test timed out in 5000ms",
// unrelated to the code under test (seen on unrelated docs PRs; the full suite
// is otherwise green). A generous package-wide timeout removes that race
// without weakening any assertion.
export default defineConfig({
  test: {
    testTimeout: 30_000,
    hookTimeout: 30_000,
  },
});
