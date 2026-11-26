export const AR = {
  app: {
    name: 'بيتنا',
    tagline: '١٠ دقايق مركّزة تخلّي البيت قريب من بعضه',
    skipToContent: 'الانتقال إلى المحتوى',
  },
  nav: {
    wall: 'الحائط',
    challenge: 'التحدي',
    meeting: 'اللقاء',
    contests: 'المسابقات',
    elderToggleEnable: 'تفعيل خط الجد (٢٠px)',
    elderToggleDisable: 'العودة للخط العادي',
  },
  roles: {
    guardian: 'ولي أمر',
    child: 'ابن / ابنة',
    elder: 'الجد / الجدة',
  },
  pwa: {
    installButton: 'تثبيت التطبيق',
    installIOSButton: 'تثبيت على آيفون',
    iosGuideTitle: 'تثبيت «بيتنا» على شاشة الآيفون',
    iosStepOne: '١. اضغط على زر المشاركة (المربع بسهم لأعلى) أسفل الشاشة.',
    iosStepTwo: '٢. اختر «إضافة إلى الصفحة الرئيسية» ثم «إضافة».',
    iosClose: 'فهمت',
    offlineNotice: 'لا يوجد اتصال بالإنترنت الآن — يتم عرض النسخة المحفوظة.',
    onlineNotice: 'عاد الاتصال بالإنترنت.',
  },
  states: {
    loadingTitle: 'لحظة واحدة…',
    loadingDescription: 'نجهّز مساحة بيتكم الآمنة.',
    errorTitle: 'حدث تعثّر بسيط',
    errorDescription: 'لم نتمكن من الاتصال حاليًا. جرّب مرة أخرى بهدوء.',
    retryButton: 'حاول مرة أخرى',
    emptyTitle: 'البيت جاهز لاستقبالكم',
    emptyDescription:
      'مساحة خاصة ببيت واحد فقط. في الخطوة القادمة نبدأ بإنشاء البيت ودعوة الأسرة.',
    configNeededTitle: 'بانتظار ربط قاعدة البيانات',
    configNeededDescription:
      'يرجى ضبط متغيرات البيئة VITE_SUPABASE_URL و VITE_SUPABASE_ANON_KEY لبدء الاتصال بـ Supabase.',
  },
  sections: {
    wall: {
      title: 'حائط البيت',
      subtitle: 'لحظاتكم اليومية في مكان خاص ومغلق للأسرة فقط.',
      emptyTitle: 'لا توجد مشاركات بعد',
      emptyDescription: 'أول صورة أو رسالة صوتية من البيت ستظهر هنا.',
    },
    challenge: {
      title: 'تحدي اليوم',
      subtitle: 'نشاط خفيف في أقل من دقيقة يجمعكم على ضحكة أو حكاية.',
      emptyTitle: 'تحديات البيت تُجهَّز هنا',
      emptyDescription: 'بعد إعداد البيت، سيصل تحدي اليوم لكل فرد حسب دوره.',
    },
    meeting: {
      title: 'اللقاء الأسبوعي',
      subtitle: 'كروت حوار متزامنة تفتح كلامًا دافئًا بين الأب والأولاد.',
      emptyTitle: 'لا يوجد لقاء مجدول حاليًا',
      emptyDescription: 'يمكن لولي الأمر جدولة ٣ لقاءات أسبوعيًا بتوقيت الأسرة.',
    },
    contests: {
      title: 'المسابقات والشارات',
      subtitle: 'تشجيع جماعي لطيف ومكافآت يختارها الأهل، بدون مقارنة أو ترتيب.',
      emptyTitle: 'لا توجد مسابقات نشطة حاليًا',
      emptyDescription: 'الأهل يختارون المسابقة والمكافأة الجماعية للبيت.',
    },
  },
  foundationStatus: {
    title: 'الأساس جاهز',
    supabaseConnected: 'الاتصال بـ Supabase مهيّأ وجاهز للتحقق',
    supabaseMissing: 'متغيرات Supabase غير مضافة بعد في البيئة',
    rtlLabel: 'واجهة عربية من اليمين لليسار',
    pwaLabel: 'تطبيق ويب قابل للتثبيت والعمل دون إنترنت',
  },
} as const;

export type ArabicTranslations = typeof AR;
