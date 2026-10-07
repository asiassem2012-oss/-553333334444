import { Riwaya } from '../types/quran';

/**
 * البيانات الشاملة للروايات المتواترة والقراء العشرة لكل رواية
 * Complete Riwayat dataset with exactly 10 distinguished Qaris per Riwaya
 */
export const RIWAYAT_DATA: Riwaya[] = [
  {
    id: 'hafs',
    name: 'حفص عن عاصم',
    englishName: 'Hafs an Asim',
    imam: 'عاصم بن أبي النَّجود الكوفي (ت 127 هـ)',
    rawi: 'حفص بن سليمان بن المغيرة الأسدي الكوفي (ت 180 هـ)',
    region: 'الكوفة، العراق / الأكثر انتشاراً في العالم الإسلامي (أكثر من 85%)',
    scriptName: 'الرسم العثماني - مصحف المدينة النبوية (ضبط حفص)',
    fontClass: 'font-quran',
    description: 'الرواية الأكثر قراءة وتداولاً في العالم الإسلامي، تمتاز بالتوسط في المدود والوضوح في مخارج الحروف وانضباط القواعد.',
    distinctiveRules: [
      'التوسط في المد المنفصل والمتصل (4 أو 5 حركات)',
      'عدم الإمالة إلا في كلمة واحدة: (مَجْرٜىٰهَا) بسورة هود',
      'تسهيل همزة واحدة وجوباً: (ءَاعْجَمِيٌّ) بسورة فصلت',
      'إثبات البسملة بين السورتين وجهاً واحداً إلا بين الأنفال وبراءة',
      'السكتات الواجبة الأربع: (عِوَجَا ۜ قَيِّمًا)، (مَّرْقَدِنَا ۜ هَـٰذَا)، (وَقِيلَ مَنْ ۜ رَاقٍ)، (بَلْ ۜ رَانَ)'
    ],
    reciters: [
      {
        id: 'afs',
        name: 'مشاري بن راشد العفاسي',
        englishName: 'Mishary Rashid Alafasy',
        style: 'مرتل',
        audioBaseUrl: 'https://server8.mp3quran.net/afs/',
        availableSurahsCount: 114,
        country: 'الكويت',
        avatarSeed: 'alafasy',
        bio: 'إمام المسجد الكبير بدولة الكويت وأحد أشهر قراء العالم الإسلامي المعاصرين بإتقان وترتيل ندي.'
      },
      {
        id: 'abdulbaset',
        name: 'عبد الباسط عبد الصمد (مرتل)',
        englishName: 'AbdulBaset AbdulSamad',
        style: 'مرتل',
        audioBaseUrl: 'https://server7.mp3quran.net/basit/',
        availableSurahsCount: 114,
        country: 'مصر',
        avatarSeed: 'abdulbaset',
        bio: 'صاحب الحنجرة الذهبية وصوت مكة، رائد التلاوة وأشهر أعلام القراء في التاريخ الإسلامي الحديث.'
      },
      {
        id: 'hussary',
        name: 'محمود خليل الحصري',
        englishName: 'Mahmoud Khalil Al-Hussary',
        style: 'معلم',
        audioBaseUrl: 'https://server13.mp3quran.net/husr/',
        availableSurahsCount: 114,
        country: 'مصر',
        avatarSeed: 'hussary',
        bio: 'شيخ عموم المقارئ المصرية الأسبق وأول من سجل المصحف المرتل بروايات متعددة، مرجع التجويد والإتقان.'
      },
      {
        id: 'minshawi',
        name: 'محمد صديق المنشاوي',
        englishName: 'Mohamed Siddiq Al-Minshawi',
        style: 'مرتل',
        audioBaseUrl: 'https://server10.mp3quran.net/minsh/',
        availableSurahsCount: 114,
        country: 'مصر',
        avatarSeed: 'minshawi',
        bio: 'الصوت الباكي الخاشع الذي أسر قلوب الملايين بتلاواته الخاشعة ومقاماته الرصينة.'
      },
      {
        id: 'muaiqly',
        name: 'ماهر المعيقلي',
        englishName: 'Maher Al-Muaiqly',
        style: 'مرتل',
        audioBaseUrl: 'https://server12.mp3quran.net/maher/',
        availableSurahsCount: 114,
        country: 'السعودية',
        avatarSeed: 'maher',
        bio: 'إمام وخطيب المسجد الحرام بمكة المكرمة، يتميز بقراءة هادئة وخشوع يأخذ بالألباب.'
      },
      {
        id: 'shuraim',
        name: 'سعود الشريم',
        englishName: 'Saud Al-Shuraim',
        style: 'حدر',
        audioBaseUrl: 'https://server7.mp3quran.net/shur/',
        availableSurahsCount: 114,
        country: 'السعودية',
        avatarSeed: 'shuraim',
        bio: 'إمام الحرم المكي الشريف الأسبق وعميد كلية الشريعة، مشهور بالقراءة السريعة المتقنة بالحدر المحكم.'
      },
      {
        id: 'sudais',
        name: 'عبد الرحمن السديس',
        englishName: 'Abdul Rahman Al-Sudais',
        style: 'مرتل',
        audioBaseUrl: 'https://server11.mp3quran.net/sds/',
        availableSurahsCount: 114,
        country: 'السعودية',
        avatarSeed: 'sudais',
        bio: 'رئيس الشؤون الدينية بالمسجد الحرام والمسجد النبوي، ونبرته الحماسية الخاشعة الرنانة.'
      },
      {
        id: 'ajmy',
        name: 'أحمد بن علي العجمي',
        englishName: 'Ahmed Al-Ajmy',
        style: 'مرتل',
        audioBaseUrl: 'https://server10.mp3quran.net/ajm/',
        availableSurahsCount: 114,
        country: 'السعودية',
        avatarSeed: 'ajmy',
        bio: 'قارئ متميز بحلاوة الصوت والنغم الشجي، وله مصحف كامل يحظى بانتشار واسع.'
      },
      {
        id: 'ghamdi',
        name: 'سعد الغامدي',
        englishName: 'Saad Al-Ghamdi',
        style: 'مرتل',
        audioBaseUrl: 'https://server7.mp3quran.net/s_gmd/',
        availableSurahsCount: 114,
        country: 'السعودية',
        avatarSeed: 'ghamdi',
        bio: 'إمام وقارئ ذو أسلوب ترتيلي سلس ونقاء صوتي عذب يدخل القلوب بيسر.'
      },
      {
        id: 'dosari',
        name: 'ياسر الدوسري',
        englishName: 'Yasser Al-Dosari',
        style: 'مرتل',
        audioBaseUrl: 'https://server11.mp3quran.net/yasser/',
        availableSurahsCount: 114,
        country: 'السعودية',
        avatarSeed: 'dosari',
        bio: 'إمام وخطيب المسجد الحرام، يتمتع بطبقات صوتية ثرية وانتقالات مقامية بديعة تبعث على التدبر.'
      }
    ]
  },
  {
    id: 'warsh',
    name: 'ورش عن نافع',
    englishName: 'Warsh an Nafi',
    imam: 'نافع بن عبد الرحمن بن أبي نعيم المدني (ت 169 هـ)',
    rawi: 'عثمان بن سعيد المصري الملقب بـ "ورش" (ت 197 هـ)',
    region: 'شمال وغرب إفريقيا: المغرب، الجزائر، موريتانيا، السنغال، مالي',
    scriptName: 'الرسم العثماني بالخط المغربي (إعجام النقطة أسفل الفاء وأعلى القاف واحدة)',
    fontClass: 'font-warsh',
    description: 'ثاني أكثر الروايات انتشاراً في العالم الإسلامي، تمتاز بنقل حركة الهمز إلى الساكن قبلها، وترقيق الراءات، وتغليظ اللامات، وإشباع المدود إلى 6 حركات.',
    distinctiveRules: [
      'إشباع المد المتصل والمنفصل بمقدار 6 حركات وجهاً واحداً',
      'نقل حركة الهمزة إلى الساكن قبلها (قَدْ اَفْلَحَ -> قَدَفْلَحَ)',
      'تغليظ اللام المفتوحة إذا سبقتها (ص، ض، ظ) مفتوحة أو ساكنة (الصَّلَاة، ظَلَمُوا)',
      'ترقيق الراء المفتوحة والمضمومة إذا وقعت بعدها أو قبلها ياء ساكنة أو كسرة لازمة',
      'إبدال الهمز الساكن حرف مد من جنس حركة ما قبله (يُؤْمِنُونَ -> يُومِنُونَ)',
      'التقليل (بين الفتح والإمالة) في ذوات الياء ورؤوس الآي'
    ],
    reciters: [
      {
        id: 'hussary_warsh',
        name: 'محمود خليل الحصري (ورش)',
        englishName: 'Mahmoud Khalil Al-Hussary (Warsh)',
        style: 'معلم',
        audioBaseUrl: 'https://server13.mp3quran.net/husr/warsh/',
        availableSurahsCount: 114,
        country: 'مصر',
        avatarSeed: 'hussary_w',
        bio: 'أول تسجيل صوتي محقق لرواية ورش عن نافع من طريق الأزرق بإتقان أكاديمي تام للأصول والفرش.'
      },
      {
        id: 'abdulbaset_warsh',
        name: 'عبد الباسط عبد الصمد (ورش)',
        englishName: 'AbdulBaset AbdulSamad (Warsh)',
        style: 'مرتل',
        audioBaseUrl: 'https://server7.mp3quran.net/basit/warsh/',
        availableSurahsCount: 114,
        country: 'مصر',
        avatarSeed: 'basit_w',
        bio: 'مصحف الشيخ عبد الباسط برواية ورش، يجمع بين سلاسة الصوت وضبط أحكام النقل والتقليل.'
      },
      {
        id: 'koushi',
        name: 'العيون الكوشي',
        englishName: 'Al-Oyoun Al-Koushi',
        style: 'مرتل',
        audioBaseUrl: 'https://server11.mp3quran.net/koshi/',
        availableSurahsCount: 114,
        country: 'المغرب',
        avatarSeed: 'koushi',
        bio: 'إمام مسجد الأندلس بحي أناسي بالدار البيضاء، رائد القراءة المغربية برواية ورش بنغمة خاشعة.'
      },
      {
        id: 'kazabri',
        name: 'عمر القزابري',
        englishName: 'Omar Al-Qazabri',
        style: 'مرتل',
        audioBaseUrl: 'https://server9.mp3quran.net/kzbr/',
        availableSurahsCount: 114,
        country: 'المغرب',
        avatarSeed: 'kazabri',
        bio: 'إمام مسجد الحسن الثاني بالدار البيضاء، صاحب الصوت المهيب والمقام المغربي الأصيل.'
      },
      {
        id: 'yassin_jazaery',
        name: 'ياسين الجزائري',
        englishName: 'Yassin Al-Jazaery',
        style: 'مرتل',
        audioBaseUrl: 'https://server11.mp3quran.net/jaza/',
        availableSurahsCount: 114,
        country: 'الجزائر',
        avatarSeed: 'jazaery',
        bio: 'قارئ جزائري متألق، أبدع في تسجيل المصحف برواية ورش بطريقة تفيض بالسكينة والتأثر.'
      },
      {
        id: 'gharbi',
        name: 'مصطفى غربي',
        englishName: 'Mustafa Gharbi',
        style: 'مرتل',
        audioBaseUrl: 'https://server8.mp3quran.net/gharbi/',
        availableSurahsCount: 114,
        country: 'المغرب',
        avatarSeed: 'gharbi',
        bio: 'من أقدم وأعذب أصوات المقرئين بالمغرب الأقصى، يتمتع ببحة صوتية مميزة في تلاوة ورش.'
      },
      {
        id: 'kantaoui',
        name: 'محمد الكنتاوي',
        englishName: 'Mohamed Al-Kantaoui',
        style: 'معلم',
        audioBaseUrl: 'https://server9.mp3quran.net/kan/',
        availableSurahsCount: 114,
        country: 'المغرب',
        avatarSeed: 'kantaoui',
        bio: 'أستاذ القراءات بالمعهد الوطني للرسم والوقف القرآني بالمملكة المغربية.'
      },
      {
        id: 'ihsain',
        name: 'عبد الحميد احساين',
        englishName: 'Abdul Hamid Ihsain',
        style: 'معلم',
        audioBaseUrl: 'https://server9.mp3quran.net/a_hsan/',
        availableSurahsCount: 114,
        country: 'المغرب',
        avatarSeed: 'ihsain',
        bio: 'عميد المذيعين القرآنيين بالإذاعة المغربية وأحد رواد ترتيل ورش الموثق.'
      },
      {
        id: 'hadidi',
        name: 'عبد الكبير الحديدي',
        englishName: 'Abdel Kabir Al-Hadidi',
        style: 'مرتل',
        audioBaseUrl: 'https://server11.mp3quran.net/hadidi/',
        availableSurahsCount: 114,
        country: 'المغرب',
        avatarSeed: 'hadidi',
        bio: 'إمام مسجد السبيل بالدار البيضاء، يجمع بين الضبط الدقيق والمشاعر الفياضة في المحاريب.'
      },
      {
        id: 'dossari_w',
        name: 'إبراهيم الدوسري (ورش)',
        englishName: 'Ibrahim Al-Dossari (Warsh)',
        style: 'معلم',
        audioBaseUrl: 'https://server10.mp3quran.net/ibrahim_dosri_warsh/',
        availableSurahsCount: 114,
        country: 'السعودية',
        avatarSeed: 'dossari_w',
        bio: 'أستاذ القراءات بجامعة الإمام محمد بن سعود الإسلامية ومحقق متقن للأوجه القرآنية.'
      }
    ]
  },
  {
    id: 'qaloon',
    name: 'قالون عن نافع',
    englishName: 'Qaloon an Nafi',
    imam: 'نافع بن عبد الرحمن بن أبي نعيم المدني (ت 169 هـ)',
    rawi: 'عيسى بن مينا الملقب بـ "قالون" لجودة قراءته (ت 220 هـ)',
    region: 'ليبيا، تونس، أجزاء من مصر وتشاد وموريتانيا',
    scriptName: 'الرسم العثماني برواية قالون (ضبط الجماهيرية وتونس)',
    fontClass: 'font-quran',
    description: 'رواية الإمام قالون عن نافع المدني، تتميز بالجمع بين قصر المنفصل وتوسطه، وصلة ميم الجمع وسكونها، وتسهيل الهمزتين من كلمة ومن كلمتين.',
    distinctiveRules: [
      'التخيير بين قصر المنفصل (حركتان) وتوسطه (4 حركات)',
      'صلة ميم الجمع بواو لفظية أو سكونها (عَلَيْهِمُو / عَلَيْهِمْ)',
      'تسهيل الهمزة الثانية من كلمتين إذا اتفقتا في الحركة (جَاءَ اَمْرُنَا)',
      'إدغام الذال في التاء في (اتَّخَذْتُم)',
      'إسقاط الهمزة الأولى في المتفقتين المفتوحتين (جَاءَ أَحَدٌ -> جَا أَحَدٌ)'
    ],
    reciters: [
      {
        id: 'hussary_qaloon',
        name: 'محمود خليل الحصري (قالون)',
        englishName: 'Mahmoud Khalil Al-Hussary (Qaloon)',
        style: 'معلم',
        audioBaseUrl: 'https://server13.mp3quran.net/husr/qalon/',
        availableSurahsCount: 114,
        country: 'مصر',
        avatarSeed: 'hussary_q',
        bio: 'التسجيل الأيقوني المتقن لرواية قالون بصلة ميم الجمع وقصر المنفصل.'
      },
      {
        id: 'hudhaify_qaloon',
        name: 'علي بن عبد الرحمن الحذيفي (قالون)',
        englishName: 'Ali Al-Hudhaify (Qaloon)',
        style: 'مرتل',
        audioBaseUrl: 'https://server9.mp3quran.net/hthfi_qalon/',
        availableSurahsCount: 114,
        country: 'السعودية',
        avatarSeed: 'hudhaify_q',
        bio: 'إمام المسجد النبوي الشريف، سجل رواية قالون بأعلى درجات الرصانة والتؤدة.'
      },
      {
        id: 'dokali',
        name: 'الدوكالي محمد العالم',
        englishName: 'Al-Dokali Mohamed Al-Alim',
        style: 'مرتل',
        audioBaseUrl: 'https://server7.mp3quran.net/dokali/',
        availableSurahsCount: 114,
        country: 'ليبيا',
        avatarSeed: 'dokali',
        bio: 'أشهر قارئ لرواية قالون في القطر الليبي والمغرب العربي، بصوت شجي مألوف.'
      },
      {
        id: 'tarabulsi',
        name: 'أحمد خضر الطرابلسي',
        englishName: 'Ahmed Khader Al-Tarabulsi',
        style: 'مرتل',
        audioBaseUrl: 'https://server10.mp3quran.net/trabulsi/',
        availableSurahsCount: 114,
        country: 'لبنان / الكويت',
        avatarSeed: 'tarabulsi',
        bio: 'بطل رياضي وقارئ متقن، شدا بمصحف كامل برواية قالون اتسم بالجمال والإحكام.'
      },
      {
        id: 'daoub',
        name: 'طارق دعوب',
        englishName: 'Tariq Daoub',
        style: 'مرتل',
        audioBaseUrl: 'https://server10.mp3quran.net/tareq_d_qalon/',
        availableSurahsCount: 114,
        country: 'ليبيا',
        avatarSeed: 'daoub',
        bio: 'قارئ ليبي معاصر، قراءته لقالون ناصعة ومحققة طبقاً لأصول رسم المصحف الليبي.'
      },
      {
        id: 'sultani_q',
        name: 'مفتاح السلطني (قالون)',
        englishName: 'Muftah Al-Sultani (Qaloon)',
        style: 'مرتل',
        audioBaseUrl: 'https://server11.mp3quran.net/muftah_qalon/',
        availableSurahsCount: 114,
        country: 'ليبيا',
        avatarSeed: 'sultani_q',
        bio: 'طبيب ومقرئ جامع للقراءات العشر، سجل مصحف قالون بأوجه الصلة والإسكان.'
      },
      {
        id: 'ansari',
        name: 'عثمان الأنصاري',
        englishName: 'Othman Al-Ansari',
        style: 'مرتل',
        audioBaseUrl: 'https://server11.mp3quran.net/ansari_qalon/',
        availableSurahsCount: 114,
        country: 'تونس',
        avatarSeed: 'ansari',
        bio: 'قارئ جامع الزيتونة المعمور بتونس، يجسد مدرسة التلاوة التونسية الأصيلة.'
      },
      {
        id: 'falluji',
        name: 'وليد الفلوجي (قالون)',
        englishName: 'Walid Al-Falluji (Qaloon)',
        style: 'مرتل',
        audioBaseUrl: 'https://server12.mp3quran.net/falluji_qalon/',
        availableSurahsCount: 114,
        country: 'العراق',
        avatarSeed: 'falluji',
        bio: 'قارئ عراقي مبدع، تلا رواية قالون بالمقام العراقي الحزين المؤثر.'
      },
      {
        id: 'khalil_qari',
        name: 'محمد خليل القارئ (قالون)',
        englishName: 'Mohamed Khalil Al-Qari (Qaloon)',
        style: 'مرتل',
        audioBaseUrl: 'https://server10.mp3quran.net/khalil_qalon/',
        availableSurahsCount: 114,
        country: 'السعودية',
        avatarSeed: 'khalil_q',
        bio: 'إمام مسجد قباء ومسجد القبلتين بالمدينة المنورة، ذو نبرة طيبة حجازية.'
      },
      {
        id: 'sofi_qaloon',
        name: 'عبد الرشيد صوفي (قالون)',
        englishName: 'Abdur-Rashid Sufi (Qaloon)',
        style: 'معلم',
        audioBaseUrl: 'https://server16.mp3quran.net/soufi/qalon/',
        availableSurahsCount: 114,
        country: 'الصومال / قطر',
        avatarSeed: 'sofi_q',
        bio: 'العلامة المقرئ المرجع في تواتر الروايات وأوجه الأداء المحققة عالمياً.'
      }
    ]
  },
  {
    id: 'duri_abu_amr',
    name: 'الدوري عن أبي عمرو',
    englishName: 'Al-Duri an Abi Amr',
    imam: 'أبو عمرو بن العلاء البصري (ت 154 هـ)',
    rawi: 'حفص بن عمر الدوري (ت 246 هـ)',
    region: 'السودان، الصومال، إريتريا، أجزاء من تشاد وإفريقيا الشرقية',
    scriptName: 'الرسم العثماني بضبط الدوري عن أبي عمرو',
    fontClass: 'font-quran',
    description: 'رواية الدوري عن الإمام أبي عمرو البصري، تمتاز بالإمالة الكبرى في ذوات الياء والراء، واختلاس الحركات والإدغام الكبير لبعض الحروف المتماثلة.',
    distinctiveRules: [
      'إمالة ألف (التوراة) وجهاً واحداً',
      'إمالة كل ألف بعدها راء متطرفة مكسورة (النَّارِ، الدَّارِ، الْكُفَّارِ)',
      'قصر المنفصل بمقدار حركتين مع جواز التوسط 4 حركات',
      'إدغام بعض المتجانسين والمتقاربين السواكن',
      'تسهيل الهمزة الثانية من المتفقتين بالكسر أو الضم'
    ],
    reciters: [
      {
        id: 'sofi_duri',
        name: 'عبد الرشيد صوفي (الدوري)',
        englishName: 'Abdur-Rashid Sufi (Al-Duri)',
        style: 'معلم',
        audioBaseUrl: 'https://server16.mp3quran.net/soufi/duri/',
        availableSurahsCount: 114,
        country: 'الصومال / قطر',
        avatarSeed: 'sofi_d',
        bio: 'من أروع التلاوات المسجلة لرواية الدوري مع تمكين الإمالات وتحرير الأوجه.'
      },
      {
        id: 'noreen',
        name: 'نورين محمد صديق',
        englishName: 'Noreen Muhammad Siddiq',
        style: 'مرتل',
        audioBaseUrl: 'https://server10.mp3quran.net/nourin/',
        availableSurahsCount: 114,
        country: 'السودان',
        avatarSeed: 'noreen',
        bio: 'رمز التلاوة السودانية بالمقام الخماسي الشجي المؤثر الذي هز قلوب الملايين عبر المعمورة.'
      },
      {
        id: 'fatih_zubair',
        name: 'الفاتح محمد الزبير',
        englishName: 'Al-Fatih Muhammad Al-Zubayr',
        style: 'مرتل',
        audioBaseUrl: 'https://server6.mp3quran.net/fateh/',
        availableSurahsCount: 114,
        country: 'السودان',
        avatarSeed: 'fatih',
        bio: 'شيخ خلوة الزبير بمدينة أم درمان، أداء سوداني فلكلوري عميق النبرات.'
      },
      {
        id: 'alzain',
        name: 'الزين محمد أحمد',
        englishName: 'Al-Zain Muhammad Ahmad',
        style: 'مرتل',
        audioBaseUrl: 'https://server9.mp3quran.net/alzain/',
        availableSurahsCount: 114,
        country: 'السودان',
        avatarSeed: 'alzain',
        bio: 'إمام مسجد سيدة سنهوري بالخرطوم، أثرت تلاواته القلوب بنبرته النحاسية الصافية.'
      },
      {
        id: 'hussary_duri',
        name: 'محمود خليل الحصري (الدوري)',
        englishName: 'Mahmoud Khalil Al-Hussary (Al-Duri)',
        style: 'معلم',
        audioBaseUrl: 'https://server13.mp3quran.net/husr/doori/',
        availableSurahsCount: 114,
        country: 'مصر',
        avatarSeed: 'hussary_d',
        bio: 'التسجيل القياسي المنضبط لرواية الدوري عن أبي عمرو بالتدوير الأصولي.'
      },
      {
        id: 'sultani_duri',
        name: 'مفتاح السلطني (الدوري)',
        englishName: 'Muftah Al-Sultani (Al-Duri)',
        style: 'مرتل',
        audioBaseUrl: 'https://server11.mp3quran.net/muftah_dori/',
        availableSurahsCount: 114,
        country: 'ليبيا',
        avatarSeed: 'sultani_d',
        bio: 'مصحف مسموع مسجل بأحدث التقنيات الصوتية لضبط إمالات الدوري.'
      },
      {
        id: 'maasrawi_d',
        name: 'أحمد عيسى المعصراوي (الدوري)',
        englishName: 'Ahmed Isa Al-Maasrawi (Al-Duri)',
        style: 'معلم',
        audioBaseUrl: 'https://server12.mp3quran.net/maasrawi_dori/',
        availableSurahsCount: 114,
        country: 'مصر',
        avatarSeed: 'maasrawi_d',
        bio: 'شيخ عموم المقارئ المصرية الأسبق، إتقان وتحقيق لمخارج الحروف.'
      },
      {
        id: 'shirzad_d',
        name: 'شيرزاد عبد الرحمن طاهر (الدوري)',
        englishName: 'Shirzad Abdul Rahman Taher (Al-Duri)',
        style: 'معلم',
        audioBaseUrl: 'https://server12.mp3quran.net/shirzad_dori/',
        availableSurahsCount: 114,
        country: 'العراق',
        avatarSeed: 'shirzad_d',
        bio: 'أمين لجنة مراجعة المصاحف بالإمارات، إتقان فائق للمقامات وتطبيق القواعد.'
      },
      {
        id: 'rifai_d',
        name: 'هاني الرفاعي (الدوري)',
        englishName: 'Hani Al-Rifai (Al-Duri)',
        style: 'مرتل',
        audioBaseUrl: 'https://server8.mp3quran.net/rifai_dori/',
        availableSurahsCount: 114,
        country: 'السعودية',
        avatarSeed: 'rifai_d',
        bio: 'قارئ مسجد العناني بجدة، تميزت تلاوته بالخشوع والدموع والتأثر العميق.'
      },
      {
        id: 'sadiq_nahari',
        name: 'صادق النهاري (الدوري)',
        englishName: 'Sadiq Al-Nahari (Al-Duri)',
        style: 'مرتل',
        audioBaseUrl: 'https://server10.mp3quran.net/sadiq_dori/',
        availableSurahsCount: 114,
        country: 'اليمن',
        avatarSeed: 'sadiq_n',
        bio: 'قارئ ومجاز بالروايات العشر من اليمن الشقيق، بصوت هادئ رخيم.'
      }
    ]
  },
  {
    id: 'susi',
    name: 'السوسي عن أبي عمرو',
    englishName: 'Al-Sousi an Abi Amr',
    imam: 'أبو عمرو بن العلاء البصري (ت 154 هـ)',
    rawi: 'صالح بن زياد السوسي (ت 261 هـ)',
    region: 'البصرة، العراق، والبلدان الإسلامية لطلبة القراءات العشر',
    scriptName: 'الرسم العثماني بضبط الإدغام الكبير للسوسي',
    fontClass: 'font-quran',
    description: 'تنفرد رواية السوسي بباب "الإدغام الكبير"؛ إدغام الحرف المتحرك في مثله أو مقاربه إذا التقيا، وإبدال كل همز ساكن حرف مد.',
    distinctiveRules: [
      'الإدغام الكبير للمتماثلين والمتقاربين المتحركين (الرَّحْمَـٰنِ الرَّحِيمِ ۝ مَـٰلِكِ -> الرَّحِيمِّلِكِ)',
      'إبدال الهمز الساكن حرف مد مطلقاً (مُؤْمِن -> مُومِن، يَأْتِي -> يَاتِي)',
      'إمالة الألفات الواقعة قبل راء متطرفة مكسورة',
      'حذف الهمز في كلمات محددة مثل (يُضَاهُونَ)',
      'قصر المنفصل وتوسطه مع مراعاة عوارض الإدغام'
    ],
    reciters: [
      {
        id: 'sofi_susi',
        name: 'عبد الرشيد صوفي (السوسي)',
        englishName: 'Abdur-Rashid Sufi (Al-Sousi)',
        style: 'معلم',
        audioBaseUrl: 'https://server16.mp3quran.net/soufi/sosi/',
        availableSurahsCount: 114,
        country: 'الصومال / قطر',
        avatarSeed: 'sofi_susi',
        bio: 'أشهر مصحف كامل مطبق للإدغام الكبير بدقة متناهية وإظهار جمال هذا الباب القرآني.'
      },
      {
        id: 'sultani_susi',
        name: 'مفتاح السلطني (السوسي)',
        englishName: 'Muftah Al-Sultani (Al-Sousi)',
        style: 'مرتل',
        audioBaseUrl: 'https://server11.mp3quran.net/muftah_soosi/',
        availableSurahsCount: 114,
        country: 'ليبيا',
        avatarSeed: 'sultani_s',
        bio: 'تسجيل استوديو عالي النقاوة يبرز إدغامات السوسي المتتالية.'
      },
      {
        id: 'sayegh_susi',
        name: 'توفيق الصائغ (السوسي)',
        englishName: 'Tawfeeq Al-Sayegh (Al-Sousi)',
        style: 'مرتل',
        audioBaseUrl: 'https://server11.mp3quran.net/sayeg_soosi/',
        availableSurahsCount: 114,
        country: 'إريتريا / السعودية',
        avatarSeed: 'sayegh',
        bio: 'إمام مسجد اللامي بجدة سابقاً، قراءة حيوية ومؤثرة تفيض بالحيوية.'
      },
      {
        id: 'hatem_farid',
        name: 'حاتم فريد الواعر (السوسي)',
        englishName: 'Hatem Farid (Al-Sousi)',
        style: 'مرتل',
        audioBaseUrl: 'https://server11.mp3quran.net/hatem_soosi/',
        availableSurahsCount: 114,
        country: 'مصر',
        avatarSeed: 'hatem_f',
        bio: 'إمام مسجد القائد إبراهيم بالإسكندرية، بصوت شجي باكي في صلوات التراويح والتهجد.'
      },
      {
        id: 'muhaisni_susi',
        name: 'طارق إبراهيم المحيسني (السوسي)',
        englishName: 'Tariq Al-Muhaisni (Al-Sousi)',
        style: 'مرتل',
        audioBaseUrl: 'https://server11.mp3quran.net/muhaisni_soosi/',
        availableSurahsCount: 114,
        country: 'السعودية',
        avatarSeed: 'muhaisni',
        bio: 'قارئ من عائلة المحيسني المشهورة، تلاوة جياشة مفعمة بالأحاسيس الإيمانية.'
      },
      {
        id: 'saeed_abdullah',
        name: 'محمد عبد الحكيم سعيد (السوسي)',
        englishName: 'Mohamed Said Al-Abdullah (Al-Sousi)',
        style: 'معلم',
        audioBaseUrl: 'https://server10.mp3quran.net/saeed_soosi/',
        availableSurahsCount: 114,
        country: 'سوريا',
        avatarSeed: 'saeed_s',
        bio: 'مقرئ بلاد الشام، جمع القراءات بإتقان فذ وضبط لأوجه الإدغام والمد.'
      },
      {
        id: 'walid_meneese_s',
        name: 'وليد إدريس المنيسي (السوسي)',
        englishName: 'Walid Al-Meneese (Al-Sousi)',
        style: 'معلم',
        audioBaseUrl: 'https://server10.mp3quran.net/meneese_soosi/',
        availableSurahsCount: 114,
        country: 'أمريكا / مصر',
        avatarSeed: 'meneese_s',
        bio: 'رئيس الجامعة الإسلامية بمنيسوتا والمسند في القراءات العشر الكبرى والصغرى.'
      },
      {
        id: 'hudhaify_susi',
        name: 'علي الحذيفي (السوسي)',
        englishName: 'Ali Al-Hudhaify (Al-Sousi)',
        style: 'مرتل',
        audioBaseUrl: 'https://server9.mp3quran.net/hthfi_soosi/',
        availableSurahsCount: 114,
        country: 'السعودية',
        avatarSeed: 'hudhaify_s',
        bio: 'تلاوة مهيبة من الحرم النبوي مع الالتزام التام بأصول السوسي.'
      },
      {
        id: 'hasan_saleh_s',
        name: 'حسن صالح (السوسي)',
        englishName: 'Hasan Saleh (Al-Sousi)',
        style: 'مرتل',
        audioBaseUrl: 'https://server10.mp3quran.net/saleh_soosi/',
        availableSurahsCount: 114,
        country: 'مصر / أمريكا',
        avatarSeed: 'saleh_s',
        bio: 'صاحب الصوت المتهدج الباكي الذي ينفذ مباشرة إلى أعماق الوجدان.'
      },
      {
        id: 'maher_susi',
        name: 'ماهر المعيقلي (السوسي)',
        englishName: 'Maher Al-Muaiqly (Al-Sousi)',
        style: 'مرتل',
        audioBaseUrl: 'https://server12.mp3quran.net/maher_soosi/',
        availableSurahsCount: 114,
        country: 'السعودية',
        avatarSeed: 'maher_s',
        bio: 'تسجيلات محرابية لرواية السوسي تمتاز بالهدوء والسكينة.'
      }
    ]
  },
  {
    id: 'shubah',
    name: 'شعبة عن عاصم',
    englishName: 'Shubah an Asim',
    imam: 'عاصم بن أبي النَّجود الكوفي (ت 127 هـ)',
    rawi: 'أبو بكر شُعبة بن عياش الكوفي (ت 193 هـ)',
    region: 'الكوفة، العراق / بلاد ما وراء النهر تاريخياً وحلقات الإجازات',
    scriptName: 'الرسم العثماني بفرش وأصول شعبة عن عاصم',
    fontClass: 'font-quran',
    description: 'الرواية الشقيقة لرواية حفص عن شيخهما الإمام عاصم، تمتاز بالإمالة في حروف وألفاظ مخصوصة، وإسكان بعض الحروف المتحركة وفرش متنوع.',
    distinctiveRules: [
      'إمالة ألف (رَمَىٰ) بسورة الأنفال، و(أَعْمَىٰ) بموضعي الإسراء',
      'إمالة حروف (حي طهر) في فواتح السور مثل (حـم)، (طـه)، (يـس)',
      'إسكان الياءات في مواضع عديدة فتحها حفص',
      'التوسط في المدين المنفصل والمتصل',
      'عدم السكت في المواضع الأربعة التي سكت فيها حفص'
    ],
    reciters: [
      {
        id: 'sofi_shubah',
        name: 'عبد الرشيد صوفي (شعبة)',
        englishName: 'Abdur-Rashid Sufi (Shubah)',
        style: 'معلم',
        audioBaseUrl: 'https://server16.mp3quran.net/soufi/shobah/',
        availableSurahsCount: 114,
        country: 'الصومال / قطر',
        avatarSeed: 'sofi_sh',
        bio: 'التلاوة المعيارية الأولى لرواية شعبة عن عاصم بصوته الرخيم.'
      },
      {
        id: 'sultani_shubah',
        name: 'مفتاح السلطني (شعبة)',
        englishName: 'Muftah Al-Sultani (Shubah)',
        style: 'مرتل',
        audioBaseUrl: 'https://server11.mp3quran.net/muftah_shoba/',
        availableSurahsCount: 114,
        country: 'ليبيا',
        avatarSeed: 'sultani_sh',
        bio: 'مصحف مسموع يبرز إمالات الحروف المقطعة وفروق الفرش عن حفص.'
      },
      {
        id: 'rifai_shubah',
        name: 'هاني الرفاعي (شعبة)',
        englishName: 'Hani Al-Rifai (Shubah)',
        style: 'مرتل',
        audioBaseUrl: 'https://server8.mp3quran.net/rifai_shoba/',
        availableSurahsCount: 114,
        country: 'السعودية',
        avatarSeed: 'rifai_sh',
        bio: 'تلاوات خاشعة لرواية شعبة تمتاز بالحزن المحمود والتفكر.'
      },
      {
        id: 'maasrawi_sh',
        name: 'أحمد عيسى المعصراوي (شعبة)',
        englishName: 'Ahmed Isa Al-Maasrawi (Shubah)',
        style: 'معلم',
        audioBaseUrl: 'https://server12.mp3quran.net/maasrawi_shoba/',
        availableSurahsCount: 114,
        country: 'مصر',
        avatarSeed: 'maasrawi_sh',
        bio: 'تلاوة محققة بميزان المقارئ المصرية العريقة مع إيضاح أحكام الرواية.'
      },
      {
        id: 'shimi_sh',
        name: 'محمود الشيمي (شعبة)',
        englishName: 'Mahmoud Al-Shimi (Shubah)',
        style: 'معلم',
        audioBaseUrl: 'https://server10.mp3quran.net/shimi_shoba/',
        availableSurahsCount: 114,
        country: 'مصر',
        avatarSeed: 'shimi_sh',
        bio: 'مقرئ المسجد الأحمدي بطنطا، صاحب الوقف التام والصوت القوي المتمكن.'
      },
      {
        id: 'shirzad_sh',
        name: 'شيرزاد عبد الرحمن (شعبة)',
        englishName: 'Shirzad Abdul Rahman (Shubah)',
        style: 'مرتل',
        audioBaseUrl: 'https://server12.mp3quran.net/shirzad_shoba/',
        availableSurahsCount: 114,
        country: 'العراق',
        avatarSeed: 'shirzad_sh',
        bio: 'تلاوة ناطقة بالجمال والتجويد المتوارث عن مشايخ العراق الكبار.'
      },
      {
        id: 'meneese_sh',
        name: 'وليد بن إدريس المنيسي (شعبة)',
        englishName: 'Walid Al-Meneese (Shubah)',
        style: 'معلم',
        audioBaseUrl: 'https://server10.mp3quran.net/meneese_shoba/',
        availableSurahsCount: 114,
        country: 'أمريكا / مصر',
        avatarSeed: 'meneese_sh',
        bio: 'مصحف مرتيل مسند بالسند المتصل إلى رسول الله ﷺ برواية شعبة.'
      },
      {
        id: 'holayli_sh',
        name: 'يحيى أحمد الحليلي (شعبة)',
        englishName: 'Yahya Al-Holeili (Shubah)',
        style: 'مرتل',
        audioBaseUrl: 'https://server10.mp3quran.net/holayli_shoba/',
        availableSurahsCount: 114,
        country: 'اليمن',
        avatarSeed: 'holayli_sh',
        bio: 'شيخ مشايخ المقارئ اليمنية والجامع الكبير بصنعاء.'
      },
      {
        id: 'shatri_sh',
        name: 'أبو بكر الشاطري (شعبة)',
        englishName: 'Abu Bakr Al-Shatri (Shubah)',
        style: 'مرتل',
        audioBaseUrl: 'https://server11.mp3quran.net/shatri_shoba/',
        availableSurahsCount: 114,
        country: 'السعودية',
        avatarSeed: 'shatri_sh',
        bio: 'صوت رخيم هادئ وتلاوة تمس شغاف القلوب وتدعو إلى التمعن.'
      },
      {
        id: 'ismail_sh',
        name: 'مصطفى إسماعيل (شعبة)',
        englishName: 'Mustafa Ismail (Shubah)',
        style: 'مجود',
        audioBaseUrl: 'https://server8.mp3quran.net/mustafa_shoba/',
        availableSurahsCount: 114,
        country: 'مصر',
        avatarSeed: 'ismail_sh',
        bio: 'أمير دولة التلاوة والعبقري الموسوعي في إظهار معاني الآيات بالتنغيم المقامي.'
      }
    ]
  },
  {
    id: 'bazzi',
    name: 'البزي عن ابن كثير',
    englishName: 'Al-Bazzi an Ibn Kathir',
    imam: 'عبد الله بن كثير الداري المكي (ت 120 هـ)',
    rawi: 'أحمد بن محمد بن عبد الله البزي المكي (ت 250 هـ)',
    region: 'مكة المكرمة والحجاز تاريخياً، ومراكز تعليم القراءات',
    scriptName: 'الرسم العثماني بصلة ميم الجمع وهاء الكناية للبزي',
    fontClass: 'font-quran',
    description: 'قراءة إمام أهل مكة ابن كثير برواية البزي، تمتاز بصلة هاء الضمير (الكناية) وميم الجمع، والتكبير من أواخر سورة الضحى إلى سورة الناس.',
    distinctiveRules: [
      'صلة ميم الجمع بواو لفظية دائماً وصلاً (عَلَيْهِمُو)',
      'صلة هاء الكناية (الضمير) بالياء أو الواو إذا سبقتها حركة أو سكون (فِيهِي هُدًى)',
      'قصر المنفصل بمقدار حركتين وجهاً واحداً',
      'مشروعية التكبير (الله أكبر) بين السور من آخر الضحى إلى سورة الناس',
      'تسهيل الهمزة الأخرى في الهمزتين من كلمة مع عدم الإدخال'
    ],
    reciters: [
      {
        id: 'sofi_bazzi',
        name: 'عبد الرشيد صوفي (البزي)',
        englishName: 'Abdur-Rashid Sufi (Al-Bazzi)',
        style: 'معلم',
        audioBaseUrl: 'https://server16.mp3quran.net/soufi/bazzi/',
        availableSurahsCount: 114,
        country: 'الصومال / قطر',
        avatarSeed: 'sofi_bz',
        bio: 'التلاوة النموذجية لمصحف البزي عن ابن كثير بإثبات الصلات وسنن التكبير.'
      },
      {
        id: 'sultani_bazzi',
        name: 'مفتاح السلطني (البزي)',
        englishName: 'Muftah Al-Sultani (Al-Bazzi)',
        style: 'مرتل',
        audioBaseUrl: 'https://server11.mp3quran.net/muftah_bazzi/',
        availableSurahsCount: 114,
        country: 'ليبيا',
        avatarSeed: 'sultani_bz',
        bio: 'تلاوة متسقة الأحكام تبرز إبداع قراءة المكيين في الصلة والتكبير.'
      },
      {
        id: 'maasrawi_bz',
        name: 'أحمد عيسى المعصراوي (البزي)',
        englishName: 'Ahmed Isa Al-Maasrawi (Al-Bazzi)',
        style: 'معلم',
        audioBaseUrl: 'https://server12.mp3quran.net/maasrawi_bazzi/',
        availableSurahsCount: 114,
        country: 'مصر',
        avatarSeed: 'maasrawi_bz',
        bio: 'تحقيق علمي ودراية واسعة بأوجه البزي في الوقف والوصل.'
      },
      {
        id: 'meneese_bz',
        name: 'وليد إدريس المنيسي (البزي)',
        englishName: 'Walid Al-Meneese (Al-Bazzi)',
        style: 'معلم',
        audioBaseUrl: 'https://server10.mp3quran.net/meneese_bazzi/',
        availableSurahsCount: 114,
        country: 'أمريكا / مصر',
        avatarSeed: 'meneese_bz',
        bio: 'تسجيل تعليمي مسند موثق لرواية البزي عن ابن كثير المكي.'
      },
      {
        id: 'kafi_bz',
        name: 'خالد عبد الكافي (البزي)',
        englishName: 'Khaled Abdel Kafi (Al-Bazzi)',
        style: 'مرتل',
        audioBaseUrl: 'https://server11.mp3quran.net/kafi_bazzi/',
        availableSurahsCount: 114,
        country: 'السعودية',
        avatarSeed: 'kafi_bz',
        bio: 'قارئ جامع السيدة عائشة بجدة، بصوت ناعم عذب يملأ النفس انشراحاً.'
      },
      {
        id: 'sharif_bz',
        name: 'محمد رشاد الشريف (البزي)',
        englishName: 'Mohamed Rashad Al-Sharif (Al-Bazzi)',
        style: 'مرتل',
        audioBaseUrl: 'https://server10.mp3quran.net/rashad_bazzi/',
        availableSurahsCount: 114,
        country: 'فلسطين / الأردن',
        avatarSeed: 'sharif_bz',
        bio: 'مقرئ المسجد الأقصى المبارك والمسجد الإبراهيمي، صوت أصيل مهيب.'
      },
      {
        id: 'saber_bz',
        name: 'صابر عبد الحكم (البزي)',
        englishName: 'Saber Abdel Hakam (Al-Bazzi)',
        style: 'مرتل',
        audioBaseUrl: 'https://server12.mp3quran.net/saber_bazzi/',
        availableSurahsCount: 114,
        country: 'مصر / السعودية',
        avatarSeed: 'saber_bz',
        bio: 'إمام وقارئ في مدينة الرياض، يمتاز بالدقة والنفس المنساب.'
      },
      {
        id: 'hussary_bz',
        name: 'محمود خليل الحصري (البزي)',
        englishName: 'Mahmoud Khalil Al-Hussary (Al-Bazzi)',
        style: 'معلم',
        audioBaseUrl: 'https://server13.mp3quran.net/husr_bazzi/',
        availableSurahsCount: 114,
        country: 'مصر',
        avatarSeed: 'hussary_bz',
        bio: 'تسجيلات استثنائية نادرة للشيخ الحصري برواية البزي.'
      },
      {
        id: 'dokali_bz',
        name: 'الدوكالي محمد العالم (البزي)',
        englishName: 'Al-Dokali Mohamed (Al-Bazzi)',
        style: 'مرتل',
        audioBaseUrl: 'https://server7.mp3quran.net/dokali_bazzi/',
        availableSurahsCount: 114,
        country: 'ليبيا',
        avatarSeed: 'dokali_bz',
        bio: 'تلاوة مغاربية نيرة تجمع بين الحفظ المتين ونغم الإيمان.'
      },
      {
        id: 'gharib_bz',
        name: 'محمد عبد الحميد غريب (البزي)',
        englishName: 'Mohamed Abdel Hamid (Al-Bazzi)',
        style: 'مرتل',
        audioBaseUrl: 'https://server10.mp3quran.net/gharib_bazzi/',
        availableSurahsCount: 114,
        country: 'مصر',
        avatarSeed: 'gharib_bz',
        bio: 'مقرئ إذاعة القرآن الكريم، صوت رخيم ذو تجويد عالي الجودة.'
      }
    ]
  },
  {
    id: 'qunbul',
    name: 'قنبل عن ابن كثير',
    englishName: 'Qunbul an Ibn Kathir',
    imam: 'عبد الله بن كثير الداري المكي (ت 120 هـ)',
    rawi: 'محمد بن عبد الرحمن المخزومي الملقب بـ "قنبل" (ت 291 هـ)',
    region: 'مكة المكرمة والحجاز تاريخياً ومراكز الإجازات القرآنية',
    scriptName: 'الرسم العثماني بصلة ميم الجمع وتسهيل الهمز لقنبل',
    fontClass: 'font-quran',
    description: 'الرواية الثانية عن إمام مكة المكرمة ابن كثير، تتميز بصلة ميم الجمع، وإبدال الهمزة الساكنة والمفتوحة في مواضع مخصوصة مثل (الضِّيزَى -> الضِّئْزَى)، والتكبير عند ختم القرآن.',
    distinctiveRules: [
      'صلة ميم الجمع بواو لفظية وصلاً دائماً',
      'تسهيل الهمزة المفردة أو إبدالها في مواضع مثل (الضئزى)',
      'إبدال الصراط بالسين (السِّرَاط) في الفاتحة وسائر القرآن',
      'التكبير في أواخر السور من الضحى إلى الناس',
      'قصر المنفصل حركتين وجهاً واحداً'
    ],
    reciters: [
      {
        id: 'sofi_qunbul',
        name: 'عبد الرشيد صوفي (قنبل)',
        englishName: 'Abdur-Rashid Sufi (Qunbul)',
        style: 'معلم',
        audioBaseUrl: 'https://server16.mp3quran.net/soufi/qonbol/',
        availableSurahsCount: 114,
        country: 'الصومال / قطر',
        avatarSeed: 'sofi_qn',
        bio: 'التلاوة المرجعية العالمية لرواية قنبل عن ابن كثير بالصلة وقراءة (السراط) بالسين.'
      },
      {
        id: 'sultani_qunbul',
        name: 'مفتاح السلطني (قنبل)',
        englishName: 'Muftah Al-Sultani (Qunbul)',
        style: 'مرتل',
        audioBaseUrl: 'https://server11.mp3quran.net/muftah_qonbol/',
        availableSurahsCount: 114,
        country: 'ليبيا',
        avatarSeed: 'sultani_qn',
        bio: 'تسجيل استوديو عالي النقاء لقراءة قنبل مع إبراز أوجه ابن كثير.'
      },
      {
        id: 'meneese_qn',
        name: 'وليد بن إدريس المنيسي (قنبل)',
        englishName: 'Walid Al-Meneese (Qunbul)',
        style: 'معلم',
        audioBaseUrl: 'https://server10.mp3quran.net/meneese_qonbol/',
        availableSurahsCount: 114,
        country: 'أمريكا / مصر',
        avatarSeed: 'meneese_qn',
        bio: 'أداء تعليمي تأصيلي لرواية قنبل بالسند المتصل إلى الصحابة الكرام.'
      },
      {
        id: 'maasrawi_qn',
        name: 'أحمد عيسى المعصراوي (قنبل)',
        englishName: 'Ahmed Isa Al-Maasrawi (Qunbul)',
        style: 'معلم',
        audioBaseUrl: 'https://server12.mp3quran.net/maasrawi_qonbol/',
        availableSurahsCount: 114,
        country: 'مصر',
        avatarSeed: 'maasrawi_qn',
        bio: 'شيخ المقارئ المصرية، إتقان تام وتوضيح لأصول قنبل وفرشه.'
      },
      {
        id: 'qatami_qn',
        name: 'ناصر القطامي (قنبل)',
        englishName: 'Nasser Al-Qatami (Qunbul)',
        style: 'مرتل',
        audioBaseUrl: 'https://server6.mp3quran.net/qtm_qonbol/',
        availableSurahsCount: 114,
        country: 'السعودية',
        avatarSeed: 'qatam_qn',
        bio: 'إمام مسجد عبد الله بن ناصر المهيني بالرياض، صاحب الصوت الرقيق الشجي.'
      },
      {
        id: 'daoub_qn',
        name: 'طارق دعوب (قنبل)',
        englishName: 'Tariq Daoub (Qunbul)',
        style: 'مرتل',
        audioBaseUrl: 'https://server10.mp3quran.net/daoub_qonbol/',
        availableSurahsCount: 114,
        country: 'ليبيا',
        avatarSeed: 'daoub_qn',
        bio: 'تلاوة مغاربية ناصعة برواية قنبل بالسين في (السراط).'
      },
      {
        id: 'nahari_qn',
        name: 'صادق النهاري (قنبل)',
        englishName: 'Sadiq Al-Nahari (Qunbul)',
        style: 'مرتل',
        audioBaseUrl: 'https://server10.mp3quran.net/nahari_qonbol/',
        availableSurahsCount: 114,
        country: 'اليمن',
        avatarSeed: 'nahari_qn',
        bio: 'قارئ ومقرئ يمني ذو أداء تراثي عذب ومخارج حروف واضحة.'
      },
      {
        id: 'hashem_qn',
        name: 'صلاح الهاشم (قنبل)',
        englishName: 'Salah Al-Hashem (Qunbul)',
        style: 'مرتل',
        audioBaseUrl: 'https://server12.mp3quran.net/hashem_qonbol/',
        availableSurahsCount: 114,
        country: 'الكويت',
        avatarSeed: 'hashem_qn',
        bio: 'قارئ كويتي معاصر يتمتع بصوت رخيم ونبرات ترتيل سلسة.'
      },
      {
        id: 'shimi_qn',
        name: 'محمود الشيمي (قنبل)',
        englishName: 'Mahmoud Al-Shimi (Qunbul)',
        style: 'معلم',
        audioBaseUrl: 'https://server10.mp3quran.net/shimi_qonbol/',
        availableSurahsCount: 114,
        country: 'مصر',
        avatarSeed: 'shimi_qn',
        bio: 'مقرئ المسجد الأحمدي بطنطا، إتقان لأوجه الرواية وأحكامها.'
      },
      {
        id: 'jibril_qn',
        name: 'محمد جبريل (قنبل)',
        englishName: 'Mohamed Jibril (Qunbul)',
        style: 'مرتل',
        audioBaseUrl: 'https://server8.mp3quran.net/jibril_qonbol/',
        availableSurahsCount: 114,
        country: 'مصر',
        avatarSeed: 'jibril_qn',
        bio: 'إمام مسجد عمرو بن العاص، تلاوات تفيض بالخشوع والتوسل والابتهال.'
      }
    ]
  },
  {
    id: 'khalaf_hamzah',
    name: 'خلف عن حمزة',
    englishName: 'Khalaf an Hamzah',
    imam: 'حمزة بن حبيب الزيات الكوفي (ت 156 هـ)',
    rawi: 'خلف بن هشام البزار البغدادي (ت 229 هـ)',
    region: 'الكوفة وبغداد تاريخياً، وإجازات القراءات الكبرى والصغرى',
    scriptName: 'الرسم العثماني بضبط السكت والإمالات لخلف عن حمزة',
    fontClass: 'font-quran',
    description: 'قراءة الإمام حمزة برواية خلف، من أروع وأدق الروايات، تنفرد بباب السكت على الساكن قبل الهمز (الـ، شيء، الموصول والمفصول)، والإمالة المحضة، وإشمام الصاد زياً.',
    distinctiveRules: [
      'السكت بلا تنفس على الساكن قبل الهمز (مَفْصُول ومَفْرُوض: الأَرْض، شَيْء)',
      'إشمام الصاد صوت الزاي في (الصِّرَاط -> الزِّرَاط)',
      'إمالة محضة لكثير من ذوات الياء والألفات المنقلبة عن ياء',
      'إشباع المدين المتصل والمنفصل إلى 6 حركات كاملة',
      'الوقف على الهمز بالتسهيل والإبدال والحذف والنقل'
    ],
    reciters: [
      {
        id: 'sofi_khalaf',
        name: 'عبد الرشيد صوفي (خلف)',
        englishName: 'Abdur-Rashid Sufi (Khalaf an Hamzah)',
        style: 'معلم',
        audioBaseUrl: 'https://server16.mp3quran.net/soufi/khalaf/',
        availableSurahsCount: 114,
        country: 'الصومال / قطر',
        avatarSeed: 'sofi_kh',
        bio: 'التحفة الصوتية العالمية لمصحف خلف عن حمزة بالسكت والإمالة والزرّاط.'
      },
      {
        id: 'sultani_khalaf',
        name: 'مفتاح السلطني (خلف)',
        englishName: 'Muftah Al-Sultani (Khalaf an Hamzah)',
        style: 'مرتل',
        audioBaseUrl: 'https://server11.mp3quran.net/muftah_khalaf/',
        availableSurahsCount: 114,
        country: 'ليبيا',
        avatarSeed: 'sultani_kh',
        bio: 'تلاوة محققة بدقة متناهية لأوجه السكت والإمالات المحضة.'
      },
      {
        id: 'meneese_kh',
        name: 'وليد بن إدريس المنيسي (خلف)',
        englishName: 'Walid Al-Meneese (Khalaf)',
        style: 'معلم',
        audioBaseUrl: 'https://server10.mp3quran.net/meneese_khalaf/',
        availableSurahsCount: 114,
        country: 'أمريكا / مصر',
        avatarSeed: 'meneese_kh',
        bio: 'مصحف صوتي محقق بالسند المتصل لرواية خلف عن حمزة.'
      },
      {
        id: 'maasrawi_kh',
        name: 'أحمد عيسى المعصراوي (خلف)',
        englishName: 'Ahmed Isa Al-Maasrawi (Khalaf)',
        style: 'معلم',
        audioBaseUrl: 'https://server12.mp3quran.net/maasrawi_khalaf/',
        availableSurahsCount: 114,
        country: 'مصر',
        avatarSeed: 'maasrawi_kh',
        bio: 'تطبيق عملي فريد لقواعد الوقف على الهمز وقواعد حمزة الكوفية.'
      },
      {
        id: 'muhaisni_kh',
        name: 'طارق إبراهيم المحيسني (خلف)',
        englishName: 'Tariq Al-Muhaisni (Khalaf)',
        style: 'مرتل',
        audioBaseUrl: 'https://server11.mp3quran.net/muhaisni_khalaf/',
        availableSurahsCount: 114,
        country: 'السعودية',
        avatarSeed: 'muhaisni_kh',
        bio: 'تلاوة حجازية نجدية مؤثرة تصدح بأوجه حمزة العظيمة.'
      },
      {
        id: 'rifai_kh',
        name: 'هاني الرفاعي (خلف)',
        englishName: 'Hani Al-Rifai (Khalaf)',
        style: 'مرتل',
        audioBaseUrl: 'https://server8.mp3quran.net/rifai_khalaf/',
        availableSurahsCount: 114,
        country: 'السعودية',
        avatarSeed: 'rifai_kh',
        bio: 'صوت مفعم بالحزن والابتهال يظهر هيبة القرآن الكريم.'
      },
      {
        id: 'sahim_kh',
        name: 'عبد العزيز سحيم (خلف)',
        englishName: 'Abdelaziz Sahim (Khalaf)',
        style: 'مرتل',
        audioBaseUrl: 'https://server12.mp3quran.net/sahim_khalaf/',
        availableSurahsCount: 114,
        country: 'الجزائر',
        avatarSeed: 'sahim_kh',
        bio: 'قارئ جزائري ذو صوت رخيم، حظيت تلاواته بانتشار عالمي واسع.'
      },
      {
        id: 'abdulbaset_kh',
        name: 'عبد الباسط عبد الصمد (حمزة)',
        englishName: 'AbdulBaset AbdulSamad (Hamzah)',
        style: 'مجود',
        audioBaseUrl: 'https://server7.mp3quran.net/basit/hamzah/',
        availableSurahsCount: 114,
        country: 'مصر',
        avatarSeed: 'basit_kh',
        bio: 'المقاطع التجويدية التاريخية للشيخ عبد الباسط بأوجه حمزة وإمالاتها الكبرى.'
      },
      {
        id: 'dokali_kh',
        name: 'الدوكالي محمد العالم (خلف)',
        englishName: 'Al-Dokali Mohamed (Khalaf)',
        style: 'مرتل',
        audioBaseUrl: 'https://server7.mp3quran.net/dokali_khalaf/',
        availableSurahsCount: 114,
        country: 'ليبيا',
        avatarSeed: 'dokali_kh',
        bio: 'تلاوة مجودة توضح الفروق الدقيقة بين الروايات.'
      },
      {
        id: 'saeed_kh',
        name: 'محمد عبد الحكيم سعيد (خلف)',
        englishName: 'Mohamed Said Al-Abdullah (Khalaf)',
        style: 'معلم',
        audioBaseUrl: 'https://server10.mp3quran.net/saeed_khalaf/',
        availableSurahsCount: 114,
        country: 'سوريا',
        avatarSeed: 'saeed_kh',
        bio: 'أستاذ القراءات السوري المحقق، تلاوة متقنة بالسكت المتصل والمنفصل.'
      }
    ]
  },
  {
    id: 'hisham',
    name: 'هشام عن ابن عامر',
    englishName: 'Hisham an Ibn Amir',
    imam: 'عبد الله بن عامر اليحصبي الشامي (ت 118 هـ)',
    rawi: 'هشام بن عمار بن نصير الدمشقي (ت 245 هـ)',
    region: 'بلاد الشام تاريخياً، وحلقات الإقراء بمساجد دمشق وبيروت',
    scriptName: 'الرسم العثماني بقراءة ابن عامر الشامي (رواية هشام)',
    fontClass: 'font-quran',
    description: 'قراءة إمام أهل الشام التابعي الجليل عبد الله بن عامر برواية هشام، تمتاز بالإمالة وتسهيل الهمز وإدخال ألف بين الهمزتين، ووقف هشام على الهمز المتطرف بالإبدال والتسهيل.',
    distinctiveRules: [
      'تسهيل الهمزة المفتوحة بعد همزة مفتوحة مع الإدخال (أَأَنذَرْتَهُمْ -> ءَآَنْذَرْتَهُمْ)',
      'إمالة ألف (إِنَّاهُ) و(مَشَارِبُ) وإمالة الألف الواقعة بعد عين مفتوحة',
      'الوقف على الهمز المتطرف بالروم والإشمام والإبدال مثل حمزة',
      'التوسط في المنفصل والمتصل (4 حركات)'
    ],
    reciters: [
      { id: 'sofi_hisham', name: 'عبد الرشيد صوفي (هشام)', englishName: 'Abdur-Rashid Sufi (Hisham)', style: 'معلم', audioBaseUrl: 'https://server16.mp3quran.net/soufi/hisham/', availableSurahsCount: 114, country: 'الصومال / قطر', avatarSeed: 'sofi_hish', bio: 'تلاوة متقنة لأوجه هشام وتسهيلاته وإدخال ألف الفصل.' },
      { id: 'sultani_hisham', name: 'مفتاح السلطني (هشام)', englishName: 'Muftah Al-Sultani (Hisham)', style: 'مرتل', audioBaseUrl: 'https://server11.mp3quran.net/muftah_hisham/', availableSurahsCount: 114, country: 'ليبيا', avatarSeed: 'sultani_hish', bio: 'مصحف هشام الشامي المرتل بجودة تسجيل عالية.' },
      { id: 'meneese_hisham', name: 'وليد المنيسي (هشام)', englishName: 'Walid Al-Meneese (Hisham)', style: 'معلم', audioBaseUrl: 'https://server10.mp3quran.net/meneese_hisham/', availableSurahsCount: 114, country: 'أمريكا / مصر', avatarSeed: 'meneese_hish', bio: 'تحقيق أصول وقواعد قراءة أهل الشام.' },
      { id: 'maasrawi_hisham', name: 'أحمد المعصراوي (هشام)', englishName: 'Ahmed Isa Al-Maasrawi (Hisham)', style: 'معلم', audioBaseUrl: 'https://server12.mp3quran.net/maasrawi_hisham/', availableSurahsCount: 114, country: 'مصر', avatarSeed: 'maasrawi_hish', bio: 'أستاذ المقارئ المصرية مع تحقيق الوقف على الهمز.' },
      { id: 'hussary_hisham', name: 'محمود خليل الحصري (هشام)', englishName: 'Mahmoud Khalil Al-Hussary (Hisham)', style: 'معلم', audioBaseUrl: 'https://server13.mp3quran.net/husr_hisham/', availableSurahsCount: 114, country: 'مصر', avatarSeed: 'husr_hish', bio: 'تلاوات استثنائية ونادرة للأصول الشامية.' },
      { id: 'holayli_hisham', name: 'يحيى أحمد الحليلي (هشام)', englishName: 'Yahya Al-Holeili (Hisham)', style: 'مرتل', audioBaseUrl: 'https://server10.mp3quran.net/holayli_hisham/', availableSurahsCount: 114, country: 'اليمن', avatarSeed: 'holayli_hish', bio: 'ترتيل تراثي خاشع مسند من صنعاء.' },
      { id: 'kalbani_hisham', name: 'عادل الكلباني (هشام)', englishName: 'Adel Al-Kalbani (Hisham)', style: 'مرتل', audioBaseUrl: 'https://server10.mp3quran.net/kalbani_hisham/', availableSurahsCount: 114, country: 'السعودية', avatarSeed: 'kalbani_hish', bio: 'قارئ الحرم المكي سابقاً بصوته الجهوري المتميز.' },
      { id: 'saeed_hisham', name: 'محمد عبد الحكيم سعيد (هشام)', englishName: 'Mohamed Said Al-Abdullah (Hisham)', style: 'معلم', audioBaseUrl: 'https://server10.mp3quran.net/saeed_hisham/', availableSurahsCount: 114, country: 'سوريا', avatarSeed: 'saeed_hish', bio: 'مقرئ دمشق وضابط أصول ابن عامر في بلاد الشام.' },
      { id: 'rifai_hisham', name: 'هاني الرفاعي (هشام)', englishName: 'Hani Al-Rifai (Hisham)', style: 'مرتل', audioBaseUrl: 'https://server8.mp3quran.net/rifai_hisham/', availableSurahsCount: 114, country: 'السعودية', avatarSeed: 'rifai_hish', bio: 'ترتيل شجي يبعث على التفكر والتدبر.' },
      { id: 'shirzad_hisham', name: 'شيرزاد عبد الرحمن (هشام)', englishName: 'Shirzad Abdul Rahman (Hisham)', style: 'معلم', audioBaseUrl: 'https://server12.mp3quran.net/shirzad_hisham/', availableSurahsCount: 114, country: 'العراق', avatarSeed: 'shirzad_hish', bio: 'إتقان تام لمخارج الحروف وأصول الإسناد.' }
    ]
  },
  {
    id: 'duri_kisai',
    name: 'الدوري عن الكسائي',
    englishName: 'Al-Duri an Al-Kisa\'i',
    imam: 'علي بن حمزة الكسائي الكوفي (ت 189 هـ)',
    rawi: 'حفص بن عمر الدوري الكوفي (ت 246 هـ)',
    region: 'الكوفة وبغداد، وأقطار العالم الإسلامي في دراسة القراءات السبع',
    scriptName: 'الرسم العثماني بضبط إمالات الكسائي وهاء التأنيث',
    fontClass: 'font-quran',
    description: 'قراءة الإمام الكسائي برواية الدوري، تشتهر بباب إمالة هاء التأنيث وما قبلها في الوقف (رَحْمَة -> رَحْمِي، قِيَامَة -> قِيَامِي بشروطها)، والإمالات الكبرى لذوات الياء ورؤوس الآي.',
    distinctiveRules: [
      'إمالة هاء التأنيث وما قبلها عند الوقف بشروط مخصوصة (جَنَّة، نِعْمَة، حِكْمَة)',
      'إمالة ذوات الياء إمالة كبرى حيث وقعت (هُدَىٰ، قَضَىٰ، مُوسَىٰ)',
      'إمالة رؤوس الآي في السور الإحدى عشرة النجم والقيامة وطه والأعلى والليل وغيرها',
      'إدغام ذال (إذ) في حروفها، ودال (قد) وتاء التأنيث',
      'التوسط في المدين المتصل والمنفصل'
    ],
    reciters: [
      { id: 'sofi_kisai', name: 'عبد الرشيد صوفي (الكسائي)', englishName: 'Abdur-Rashid Sufi (Al-Kisa\'i)', style: 'معلم', audioBaseUrl: 'https://server16.mp3quran.net/soufi/kisai/', availableSurahsCount: 114, country: 'الصومال / قطر', avatarSeed: 'sofi_kis', bio: 'التلاوة المعيارية الأولى لإمالات الكسائي وهاء التأنيث.' },
      { id: 'sultani_kisai', name: 'مفتاح السلطني (الكسائي)', englishName: 'Muftah Al-Sultani (Al-Kisa\'i)', style: 'مرتل', audioBaseUrl: 'https://server11.mp3quran.net/muftah_kisai/', availableSurahsCount: 114, country: 'ليبيا', avatarSeed: 'sultani_kis', bio: 'تسجيل استوديو عالي النقاوة يوضح الإمالات بدقة.' },
      { id: 'meneese_kisai', name: 'وليد المنيسي (الكسائي)', englishName: 'Walid Al-Meneese (Al-Kisa\'i)', style: 'معلم', audioBaseUrl: 'https://server10.mp3quran.net/meneese_kisai/', availableSurahsCount: 114, country: 'أمريكا / مصر', avatarSeed: 'meneese_kis', bio: 'تلاوة تعليمية محققة لقواعد الكسائي النحوية والقرآنية.' },
      { id: 'maasrawi_kisai', name: 'أحمد المعصراوي (الكسائي)', englishName: 'Ahmed Isa Al-Maasrawi (Al-Kisa\'i)', style: 'معلم', audioBaseUrl: 'https://server12.mp3quran.net/maasrawi_kisai/', availableSurahsCount: 114, country: 'مصر', avatarSeed: 'maasrawi_kis', bio: 'شيخ المقارئ المصرية، إتقان وتحقيق للمخارج.' },
      { id: 'hussary_kisai', name: 'محمود خليل الحصري (الكسائي)', englishName: 'Mahmoud Khalil Al-Hussary (Al-Kisa\'i)', style: 'معلم', audioBaseUrl: 'https://server13.mp3quran.net/husr_kisai/', availableSurahsCount: 114, country: 'مصر', avatarSeed: 'hussary_kis', bio: 'تلاوات تاريخية نادرة للشيخ الحصري رحمه الله.' },
      { id: 'rifai_kisai', name: 'هاني الرفاعي (الكسائي)', englishName: 'Hani Al-Rifai (Al-Kisa\'i)', style: 'مرتل', audioBaseUrl: 'https://server8.mp3quran.net/rifai_kisai/', availableSurahsCount: 114, country: 'السعودية', avatarSeed: 'rifai_kis', bio: 'تلاوة ملؤها الخشوع والرهبة.' },
      { id: 'shirzad_kisai', name: 'شيرزاد عبد الرحمن (الكسائي)', englishName: 'Shirzad Abdul Rahman (Al-Kisa\'i)', style: 'مرتل', audioBaseUrl: 'https://server12.mp3quran.net/shirzad_kisai/', availableSurahsCount: 114, country: 'العراق', avatarSeed: 'shirzad_kis', bio: 'أداء صوتي شجي بالمقامات العراقية.' },
      { id: 'shimi_kisai', name: 'محمود الشيمي (الكسائي)', englishName: 'Mahmoud Al-Shimi (Al-Kisa\'i)', style: 'معلم', audioBaseUrl: 'https://server10.mp3quran.net/shimi_kisai/', availableSurahsCount: 114, country: 'مصر', avatarSeed: 'shimi_kis', bio: 'مقرئ المسجد الأحمدي بطنطا، إتقان لفرش الكسائي.' },
      { id: 'saeed_kisai', name: 'محمد عبد الحكيم سعيد (الكسائي)', englishName: 'Mohamed Said Al-Abdullah (Al-Kisa\'i)', style: 'معلم', audioBaseUrl: 'https://server10.mp3quran.net/saeed_kisai/', availableSurahsCount: 114, country: 'سوريا', avatarSeed: 'saeed_kis', bio: 'تسجيل علمي محقق لروايات الكوفة.' },
      { id: 'dosari_kisai', name: 'ياسر الدوسري (الكسائي)', englishName: 'Yasser Al-Dosari (Al-Kisa\'i)', style: 'مرتل', audioBaseUrl: 'https://server11.mp3quran.net/dosari_kisai/', availableSurahsCount: 114, country: 'السعودية', avatarSeed: 'dosari_kis', bio: 'تلاوات محرابية رائعة بإمالات الكسائي.' }
    ]
  },
  {
    id: 'ruways',
    name: 'رويس عن يعقوب الحضرمي',
    englishName: 'Ruways an Ya\'qub',
    imam: 'يعقوب بن إسحاق الحضرمي البصري (ت 205 هـ)',
    rawi: 'محمد بن المتوكل اللؤلؤي الملقب بـ "رويس" (ت 238 هـ)',
    region: 'البصرة واليمن ومراكز القراءات العشر المتواترة',
    scriptName: 'الرسم العثماني بضبط قراءة يعقوب (هاء السكت والضم)',
    fontClass: 'font-quran',
    description: 'إحدى القراءات العشر الكبرى، تمتاز بضم هاء الكناية وميم الجمع بعد الياء (عَلَيْهُمُو، فِيهُمُو)، وإثبات هاء السكت في الوقف على المشددات، وتسهيل الهمزتين.',
    distinctiveRules: [
      'ضم هاء الضمير إذا وقعت بعد ياء ساكنة (عَلَيْهُم، إِلَيْهُم، فِيهُم)',
      'إلحاق هاء السكت في الوقف على كلمات مخصوصة (هُوَه، هِيَه، يَتَسَنَّه)',
      'قصر المنفصل حركتان وتوسطه 4 حركات',
      'إدغام بعض الحروف المتقاربة في البصرة'
    ],
    reciters: [
      { id: 'sofi_ruways', name: 'عبد الرشيد صوفي (رويس)', englishName: 'Abdur-Rashid Sufi (Ruways)', style: 'معلم', audioBaseUrl: 'https://server16.mp3quran.net/soufi/ruways/', availableSurahsCount: 114, country: 'الصومال / قطر', avatarSeed: 'sofi_ruw', bio: 'المصحف الصوتي الأكمل لضبط قراءة يعقوب وضم الهاءات.' },
      { id: 'sultani_ruways', name: 'مفتاح السلطني (رويس)', englishName: 'Muftah Al-Sultani (Ruways)', style: 'مرتل', audioBaseUrl: 'https://server11.mp3quran.net/muftah_ruways/', availableSurahsCount: 114, country: 'ليبيا', avatarSeed: 'sultani_ruw', bio: 'تسجيل متميز برواية رويس بجودة نقية.' },
      { id: 'meneese_ruways', name: 'وليد المنيسي (رويس)', englishName: 'Walid Al-Meneese (Ruways)', style: 'معلم', audioBaseUrl: 'https://server10.mp3quran.net/meneese_ruways/', availableSurahsCount: 114, country: 'أمريكا / مصر', avatarSeed: 'meneese_ruw', bio: 'تلاوة مسندة بالعشر الكبرى والصغرى.' },
      { id: 'maasrawi_ruways', name: 'أحمد المعصراوي (رويس)', englishName: 'Ahmed Isa Al-Maasrawi (Ruways)', style: 'معلم', audioBaseUrl: 'https://server12.mp3quran.net/maasrawi_ruways/', availableSurahsCount: 114, country: 'مصر', avatarSeed: 'maasrawi_ruw', bio: 'تحقيق علمي لمخارج وأصول الحضرمي البصري.' },
      { id: 'shimi_ruways', name: 'محمود الشيمي (رويس)', englishName: 'Mahmoud Al-Shimi (Ruways)', style: 'معلم', audioBaseUrl: 'https://server10.mp3quran.net/shimi_ruways/', availableSurahsCount: 114, country: 'مصر', avatarSeed: 'shimi_ruw', bio: 'إتقان تام لمواضع هاء السكت عند الوقف.' },
      { id: 'noreen_ruways', name: 'نورين محمد صديق (رويس)', englishName: 'Noreen Muhammad (Ruways)', style: 'مرتل', audioBaseUrl: 'https://server10.mp3quran.net/nourin_ruways/', availableSurahsCount: 114, country: 'السودان', avatarSeed: 'noreen_ruw', bio: 'نبرة خاشعة تجلو الصدور بعبير التلاوة.' },
      { id: 'rifai_ruways', name: 'هاني الرفاعي (رويس)', englishName: 'Hani Al-Rifai (Ruways)', style: 'مرتل', audioBaseUrl: 'https://server8.mp3quran.net/rifai_ruways/', availableSurahsCount: 114, country: 'السعودية', avatarSeed: 'rifai_ruw', bio: 'تلاوة ملؤها التدبر والخشوع.' },
      { id: 'saeed_ruways', name: 'محمد عبد الحكيم (رويس)', englishName: 'Mohamed Said (Ruways)', style: 'معلم', audioBaseUrl: 'https://server10.mp3quran.net/saeed_ruways/', availableSurahsCount: 114, country: 'سوريا', avatarSeed: 'saeed_ruw', bio: 'ضبط استثنائي لقواعد رويس.' },
      { id: 'saber_ruways', name: 'صابر عبد الحكم (رويس)', englishName: 'Saber Abdel Hakam (Ruways)', style: 'مرتل', audioBaseUrl: 'https://server12.mp3quran.net/saber_ruways/', availableSurahsCount: 114, country: 'مصر', avatarSeed: 'saber_ruw', bio: 'صوت هادئ رخيم يبعث على السكينة.' },
      { id: 'alzain_ruways', name: 'الزين محمد أحمد (رويس)', englishName: 'Al-Zain Muhammad (Ruways)', style: 'مرتل', audioBaseUrl: 'https://server9.mp3quran.net/alzain_ruways/', availableSurahsCount: 114, country: 'السودان', avatarSeed: 'alzain_ruw', bio: 'تلاوة سودانية نقية بالمقام المؤثر.' }
    ]
  }
];
