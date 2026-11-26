import {useState} from 'react';
import {Download, Share2, X} from 'lucide-react';
import {usePWAInstall} from '../../hooks/usePWAInstall';
import {AR} from '../../i18n/ar';

export function PWAInstallButton() {
  const {isInstallable, isInstalled, isIOS, install} = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  if (isInstalled) {
    return null;
  }

  if (isInstallable) {
    return (
      <button
        type="button"
        onClick={() => {
          void install();
        }}
        className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-primary px-4 py-2 text-base font-semibold text-white transition-colors hover:bg-primary-hover"
      >
        <Download aria-hidden="true" className="h-5 w-5" />
        <span>{AR.pwa.installButton}</span>
      </button>
    );
  }

  if (isIOS) {
    return (
      <>
        <button
          type="button"
          onClick={() => setShowIOSGuide(true)}
          className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-border-hairline bg-surface px-4 py-2 text-base font-medium text-ink transition-colors hover:bg-surface-muted"
        >
          <Share2 aria-hidden="true" className="h-5 w-5 text-primary" />
          <span>{AR.pwa.installIOSButton}</span>
        </button>

        {showIOSGuide ? (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="ios-install-title"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          >
            <div className="w-full max-w-md rounded-2xl border border-border-hairline bg-surface p-6 text-start shadow-lg">
              <div className="flex items-start justify-between gap-4">
                <h2
                  id="ios-install-title"
                  className="text-xl font-bold text-ink"
                >
                  {AR.pwa.iosGuideTitle}
                </h2>
                <button
                  type="button"
                  onClick={() => setShowIOSGuide(false)}
                  aria-label={AR.pwa.iosClose}
                  className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-xl text-ink-muted hover:bg-surface-muted hover:text-ink"
                >
                  <X aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-4 space-y-3 text-base text-ink-muted">
                <p>{AR.pwa.iosStepOne}</p>
                <p>{AR.pwa.iosStepTwo}</p>
              </div>
              <button
                type="button"
                onClick={() => setShowIOSGuide(false)}
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                {AR.pwa.iosClose}
              </button>
            </div>
          </div>
        ) : null}
      </>
    );
  }

  return null;
}
