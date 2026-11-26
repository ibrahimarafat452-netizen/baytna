import type {ReactNode} from 'react';
import {CalendarHeart, Home, Sparkles, Trophy} from 'lucide-react';
import {AR} from '../../i18n/ar';
import type {AppSection} from '../../types/domain';
import {OfflineBanner} from '../pwa/OfflineBanner';
import {PWAInstallButton} from '../pwa/PWAInstallButton';

interface AppShellProps {
  activeSection: AppSection;
  onSelectSection: (section: AppSection) => void;
  elderMode: boolean;
  children: ReactNode;
}

const NAV_ITEMS: ReadonlyArray<{
  id: AppSection;
  label: string;
  Icon: typeof Home;
}> = [
  {id: 'wall', label: AR.nav.wall, Icon: Home},
  {id: 'challenge', label: AR.nav.challenge, Icon: Sparkles},
  {id: 'meeting', label: AR.nav.meeting, Icon: CalendarHeart},
  {id: 'contests', label: AR.nav.contests, Icon: Trophy},
];

export function AppShell({
  activeSection,
  onSelectSection,
  elderMode,
  children,
}: AppShellProps) {
  return (
    <div
      className={`min-h-dvh bg-canvas text-ink ${elderMode ? 'elder-ui' : ''}`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-primary focus:px-4 focus:py-3 focus:text-base focus:font-semibold focus:text-white"
      >
        {AR.app.skipToContent}
      </a>

      <OfflineBanner />

      <header className="border-b border-border-hairline bg-surface">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6">
          <a
            href="/"
            className="shrink-0 whitespace-nowrap font-display text-2xl font-bold text-primary"
          >
            {AR.app.name}
          </a>

          <nav
            aria-label={AR.app.name}
            className="hidden items-center gap-6 md:flex"
          >
            {NAV_ITEMS.map(({id, label}) => {
              const isActive = activeSection === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => onSelectSection(id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`inline-flex min-h-12 shrink-0 items-center whitespace-nowrap border-b-2 px-2 text-base font-medium transition-colors ${
                    isActive
                      ? 'border-primary font-bold text-primary'
                      : 'border-transparent text-ink-muted hover:text-ink'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center">
            <PWAInstallButton />
          </div>
        </div>
      </header>

      <main
        id="main-content"
        className="mx-auto max-w-6xl px-4 pb-24 pt-6 sm:px-6 md:pb-12 md:pt-8"
      >
        {children}
      </main>

      <nav
        aria-label={AR.app.name}
        className="fixed inset-x-0 bottom-0 z-40 border-t border-border-hairline bg-surface/95 backdrop-blur-md pb-safe md:hidden"
      >
        <div className="grid h-16 grid-cols-4 items-center">
          {NAV_ITEMS.map(({id, label, Icon}) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => onSelectSection(id)}
                aria-current={isActive ? 'page' : undefined}
                className={`flex min-h-12 flex-col items-center justify-center gap-1 px-1 transition-colors ${
                  isActive ? 'font-bold text-primary' : 'text-ink-muted'
                }`}
              >
                <Icon
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0"
                  strokeWidth={isActive ? 2.4 : 1.8}
                />
                <span className="whitespace-nowrap text-base leading-none">
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
