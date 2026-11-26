import {useCallback, useEffect, useState} from 'react';
import {
  CalendarHeart,
  Database,
  Home,
  Sparkles,
  Trophy,
  Type,
} from 'lucide-react';
import {AppShell} from './components/layout/AppShell';
import {EmptyState, ErrorState, LoadingState} from './components/ui/StateViews';
import {AR} from './i18n/ar';
import {readEnvConfig} from './lib/env';
import {getSupabaseClient} from './lib/supabase';
import type {AppSection} from './types/domain';

type BootstrapState =
  | {kind: 'loading'}
  | {kind: 'unconfigured'}
  | {kind: 'error'; message: string}
  | {kind: 'ready'};

const SECTION_ICONS: Record<AppSection, typeof Home> = {
  wall: Home,
  challenge: Sparkles,
  meeting: CalendarHeart,
  contests: Trophy,
};

export default function App() {
  const [activeSection, setActiveSection] = useState<AppSection>('wall');
  const [elderMode, setElderMode] = useState(false);
  const [bootstrap, setBootstrap] = useState<BootstrapState>({kind: 'loading'});

  const checkConnection = useCallback(async () => {
    setBootstrap({kind: 'loading'});

    const env = readEnvConfig();
    if (!env.configured) {
      setBootstrap({kind: 'unconfigured'});
      return;
    }

    const client = getSupabaseClient();
    if (!client) {
      setBootstrap({kind: 'unconfigured'});
      return;
    }

    try {
      const {error} = await client.auth.getSession();
      if (error) {
        setBootstrap({kind: 'error', message: error.message});
        return;
      }
      setBootstrap({kind: 'ready'});
    } catch (err) {
      const message =
        err instanceof Error ? err.message : AR.states.errorDescription;
      setBootstrap({kind: 'error', message});
    }
  }, []);

  useEffect(() => {
    void checkConnection();
  }, [checkConnection]);

  const currentSectionCopy = AR.sections[activeSection];
  const SectionIcon = SECTION_ICONS[activeSection];

  return (
    <AppShell
      activeSection={activeSection}
      onSelectSection={setActiveSection}
      elderMode={elderMode}
    >
      <div className="space-y-8">
        <div className="flex flex-col gap-4 border-b border-border-hairline pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-ink sm:text-3xl">
              {currentSectionCopy.title}
            </h1>
            <p className="mt-2 max-w-2xl text-base text-ink-muted">
              {currentSectionCopy.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setElderMode((prev) => !prev)}
            aria-pressed={elderMode}
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start whitespace-nowrap rounded-xl border border-border-hairline bg-surface px-4 py-2 text-base font-medium text-ink transition-colors hover:bg-surface-muted sm:self-auto"
          >
            <Type aria-hidden="true" className="h-5 w-5 text-primary" />
            <span>
              {elderMode
                ? AR.nav.elderToggleDisable
                : AR.nav.elderToggleEnable}
            </span>
          </button>
        </div>

        {bootstrap.kind === 'loading' ? (
          <LoadingState />
        ) : bootstrap.kind === 'error' ? (
          <ErrorState
            description={bootstrap.message || AR.states.errorDescription}
            onRetry={() => {
              void checkConnection();
            }}
          />
        ) : bootstrap.kind === 'unconfigured' ? (
          <EmptyState
            title={AR.states.configNeededTitle}
            description={AR.states.configNeededDescription}
            icon={<Database className="h-7 w-7" />}
          />
        ) : (
          <EmptyState
            title={currentSectionCopy.emptyTitle}
            description={currentSectionCopy.emptyDescription}
            icon={<SectionIcon className="h-7 w-7" />}
          />
        )}
      </div>
    </AppShell>
  );
}
