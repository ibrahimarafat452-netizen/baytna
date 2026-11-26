import type {ReactNode} from 'react';
import {AlertCircle, Home, Loader2, RefreshCw} from 'lucide-react';
import {AR} from '../../i18n/ar';

interface LoadingStateProps {
  title?: string;
  description?: string;
}

export function LoadingState({
  title = AR.states.loadingTitle,
  description = AR.states.loadingDescription,
}: LoadingStateProps) {
  return (
    <section
      aria-live="polite"
      aria-busy="true"
      className="flex flex-col items-center justify-center rounded-2xl border border-border-hairline bg-surface px-6 py-12 text-center"
    >
      <Loader2
        aria-hidden="true"
        className="mb-4 h-10 w-10 animate-spin text-primary"
      />
      <h2 className="text-xl font-bold text-ink">{title}</h2>
      <p className="mt-2 max-w-md text-base text-ink-muted">{description}</p>
    </section>
  );
}

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: ReactNode;
  action?: ReactNode;
}

export function EmptyState({
  title,
  description,
  icon,
  action,
}: EmptyStateProps) {
  return (
    <section className="flex flex-col items-center justify-center rounded-2xl border border-border-hairline bg-surface px-6 py-12 text-center">
      <div
        aria-hidden="true"
        className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft text-primary"
      >
        {icon ?? <Home className="h-7 w-7" />}
      </div>
      <h2 className="text-xl font-bold text-ink">{title}</h2>
      <p className="mt-2 max-w-md text-base text-ink-muted">{description}</p>
      {action ? <div className="mt-6">{action}</div> : null}
    </section>
  );
}

interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
}

export function ErrorState({
  title = AR.states.errorTitle,
  description = AR.states.errorDescription,
  onRetry,
}: ErrorStateProps) {
  return (
    <section
      role="alert"
      className="flex flex-col items-center justify-center rounded-2xl border border-border-hairline bg-surface px-6 py-12 text-center"
    >
      <div
        aria-hidden="true"
        className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-danger-soft text-danger"
      >
        <AlertCircle className="h-7 w-7" />
      </div>
      <h2 className="text-xl font-bold text-ink">{title}</h2>
      <p className="mt-2 max-w-md text-base text-ink-muted">{description}</p>
      {onRetry ? (
        <button
          type="button"
          onClick={onRetry}
          className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-hover"
        >
          <RefreshCw aria-hidden="true" className="h-5 w-5" />
          <span>{AR.states.retryButton}</span>
        </button>
      ) : null}
    </section>
  );
}
