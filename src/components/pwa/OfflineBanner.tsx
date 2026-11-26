import {WifiOff} from 'lucide-react';
import {useOnlineStatus} from '../../hooks/useOnlineStatus';
import {AR} from '../../i18n/ar';

export function OfflineBanner() {
  const isOnline = useOnlineStatus();

  if (isOnline) {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className="border-b border-border-hairline bg-accent-soft px-4 py-3 text-ink"
    >
      <div className="mx-auto flex max-w-6xl items-center gap-3 text-base font-medium">
        <WifiOff aria-hidden="true" className="h-5 w-5 shrink-0 text-accent" />
        <span>{AR.pwa.offlineNotice}</span>
      </div>
    </div>
  );
}
