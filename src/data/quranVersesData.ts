import { Ayah } from '../types/quran';

/**
 * بيانات الآيات المحققة بالرسم العثماني وفروق رسم ورش والتفاسير
 * Curated verses with Uthmani script, Warsh script variations, translations, and multi-tafsir
 */
export const SAMPLE_VERSES_BY_SURAH: Record<number, Ayah[]> = {
  // 1: Al-Fatihah
  1: [
    {
      number: 1,
      numberInSurah: 1,
      juz: 1,
      page: 1,
      text: "بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ",
      textWarsh: "بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ",
      translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
      tafsirAlMuyassar: "أبتدئ قراءتي مستعينا باسم الله، مستصحبا بركته، وهو المعبود بحق، المتصف بالرحمة الواسعة التي وسعت كل شيء.",
      tafsirAlJalalayn: "بسم الله: أي أبدأ باسم الله تعالى، الرحمن الرحيم: صفتان لله تعالى مشتقتان من الرحمة، والرحمن أبلغ من الرحيم.",
      tafsirIbnKathir: "البسملة افتتح بها كتاب الله العزيز، وهي آية من الفاتحة عند الشافعية وجماعة من القراء، ومشروعة في ابتداء كل أمر ذي بال."
    },
    {
      number: 2,
      numberInSurah: 2,
      juz: 1,
      page: 1,
      text: "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ",
      textWarsh: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      translation: "[All] praise is [due] to Allah, Lord of the worlds -",
      tafsirAlMuyassar: "الثناء الكامل والشكر الخالص لله وحده، المستحق للعبادة، خالق الخلائق ومالكهم ومدبر أمورهم ومربيهم بنعمه.",
      tafsirAlJalalayn: "الحمد لله: جملة خبرية قصد بها الثناء على الله بمضمونها من أنه تعالى مالك لجميع الحمد من الخلق، ورب العالمين: مالك جميع الخلائق من الإنس والجن والملائكة.",
      tafsirIbnKathir: "الألف واللام في الحمد لاستغراق جميع المحامد لله تعالى، والرب هو المالك السيد المتصرف."
    },
    {
      number: 3,
      numberInSurah: 3,
      juz: 1,
      page: 1,
      text: "ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ",
      textWarsh: "الرَّحْمَـٰنِ الرَّحِيمِ",
      translation: "The Entirely Merciful, the Especially Merciful,",
      tafsirAlMuyassar: "ذو الرحمة العامة الشاملة لجميع خلقه، والرحمة الخاصة بالمؤمنين.",
      tafsirAlJalalayn: "الرحمن: ذو الرحمة الشاملة لجميع الخلائق في الدنيا وللمؤمنين في الآخرة، الرحيم: بالمؤمنين خاصة.",
      tafsirIbnKathir: "اسمان جليلان مشتقان من الرحمة على وجه المبالغة، ورحمن أشد مبالغة من رحيم."
    },
    {
      number: 4,
      numberInSurah: 4,
      juz: 1,
      page: 1,
      text: "مَـٰلِكِ يَوْمِ ٱلدِّينِ",
      textWarsh: "مَلِكِ يَوْمِ الدِّينِ",
      translation: "Sovereign of the Day of Recompense.",
      tafsirAlMuyassar: "المالك المتصرف وحده بيوم الجزاء والحساب، وهو يوم القيامة حيث لا يملك أحد شيئاً إلا بإذنه.",
      tafsirAlJalalayn: "مالك: قرئ في المتواتر مالك وملِك، ويوم الدين: يوم الجزاء وهو يوم القيامة، وخص بالملك لأنه لا ملك ظاهرا فيه لأحد سواه.",
      tafsirIbnKathir: "قرأ عاصم والكسائي (مالك) بالألف، وقرأ باقي السبعة (ملِك) بغير ألف، وكلا القراءتين حق وصحيح."
    },
    {
      number: 5,
      numberInSurah: 5,
      juz: 1,
      page: 1,
      text: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
      textWarsh: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
      translation: "It is You we worship and You we ask for help.",
      tafsirAlMuyassar: "نخصك وحدك بالعبادة لا شريك لك، ونخصك وحدك بطلب المعونة في جميع أمورنا، فلا ملجأ إلا إليك.",
      tafsirAlJalalayn: "إياك نعبد: نخصك بالعبادة والتذلل، وإياك نستعين: نطلب المعونة على عبادتك وعلى سائر أمورنا، وقدم المفعول للحصر.",
      tafsirIbnKathir: "التحول من الغيبة إلى الخطاب وهو أسلوب الالتفات، والعبادة كمال المحبة والخضوع والخوف، والاستعانة التوكل عليه وتفويض الأمر إليه."
    },
    {
      number: 6,
      numberInSurah: 6,
      juz: 1,
      page: 1,
      text: "ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ",
      textWarsh: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
      translation: "Guide us to the straight path -",
      tafsirAlMuyassar: "دلنا وأرشدنا وثبتنا على الطريق المستقيم الواضح الموصل إلى رضاك وجنتك، وهو دين الإسلام الحق.",
      tafsirAlJalalayn: "اهدنا: أرشدنا ووفقنا وثبتنا، الصراط المستقيم: طريق الحق وهو الإسلام وقيل القرآن.",
      tafsirIbnKathir: "سؤال الهداية هو أعظم دعاء وأنفعه للعبد، والصراط المستقيم هو طريق الله القويم الذي جاء به النبي ﷺ."
    },
    {
      number: 7,
      numberInSurah: 7,
      juz: 1,
      page: 1,
      text: "صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ",
      textWarsh: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
      translation: "The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.",
      tafsirAlMuyassar: "طريق الذين أنعمت عليهم من النبيين والصديقين والشهداء والصالحين، غير طريق المغضوب عليهم (كاليهود ومن علم الحق ولم يعمل به) ولا طريق الضالين (كالنصارى ومن عبد الله على جهل).",
      tafsirAlJalalayn: "بدل من الصراط، المغضوب عليهم: هم اليهود لقوله تعالى فيهم: (مَن لَّعَنَهُ اللَّهُ وَغَضِبَ عَلَيْهِ)، ولا الضالين: هم النصارى لقوله: (قَدْ ضَلُّوا مِن قَبْلُ).",
      tafsirIbnKathir: "روى الترمذي وأحمد عن عدي بن حاتم قال: قال رسول الله ﷺ: «إن المغضوب عليهم هم اليهود وإن الضالين هم النصارى»."
    }
  ],
  // 112: Al-Ikhlas
  112: [
    {
      number: 6222,
      numberInSurah: 1,
      juz: 30,
      page: 604,
      text: "قُلْ هُوَ ٱللَّهُ أَحَدٌ",
      textWarsh: "قُلْ هُوَ اللَّهُ أَحَدٌ",
      translation: "Say, \"He is Allah, [who is] One,",
      tafsirAlMuyassar: "قل أيها الرسول لمن سألك عن صفة ربك: هو الله المتفرد بالألوهية والربوبية والأسماء والصفات، لا نظير له ولا مثيل.",
      tafsirAlJalalayn: "أي: المتوحد بالكمال الذي لا يشاركه فيه غيره، فلا شبيه له ولا ند.",
      tafsirIbnKathir: "هو الواحد الأحد، الذي لا نظير له ولا وزير، ولا شبيه ولا شبيه، ولا عديل."
    },
    {
      number: 6223,
      numberInSurah: 2,
      juz: 30,
      page: 604,
      text: "ٱللَّهُ ٱلصَّمَدُ",
      textWarsh: "اللَّهُ الصَّمَدُ",
      translation: "Allah, the Eternal Refuge.",
      tafsirAlMuyassar: "السيد الذي كمل في سؤدده وشرفه، والذي تقصده الخلائق وتصمد إليه في جميع حوائجها ورغائبها.",
      tafsirAlJalalayn: "المقصود في الحوائج على الدوام، الذي يصمد إليه الخلق في رغائبهم ومصائبهم.",
      tafsirIbnKathir: "قال ابن عباس: الصمد السيد الذي قد كمل في سؤدده، والشريف الذي قد كمل في شرفه، والغني الذي قد كمل في غناه."
    },
    {
      number: 6224,
      numberInSurah: 3,
      juz: 30,
      page: 604,
      text: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
      textWarsh: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
      translation: "He neither begets nor is born,",
      tafsirAlMuyassar: "ليس له ولد ولم يتخذ صاحبة، ولم يولد من شيء فليس له والد سبحانه وتعالى.",
      tafsirAlJalalayn: "لانتفاء جنسيته، فليس له كفؤ ولا شبيه ولا أولية لوجوده ولا آخرية.",
      tafsirIbnKathir: "ليس له ولد ولا والد ولا صاحبة، قال تعالى: (بَدِيعُ السَّمَاوَاتِ وَالأَرْضِ أَنَّى يَكُونُ لَهُ وَلَدٌ وَلَمْ تَكُن لَّهُ صَاحِبَةٌ)."
    },
    {
      number: 6225,
      numberInSurah: 4,
      juz: 30,
      page: 604,
      text: "وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ",
      textWarsh: "وَلَمْ يَكُن لَّهُۥ كُفُؤًا أَحَدٌ",
      translation: "Nor is there to Him any equivalent.\"",
      tafsirAlMuyassar: "ولم يكن له مماثل ولا مكافئ في أسمائه وصفاته وأفعاله، تعالى الله عما يشركون علواً كبيراً.",
      tafsirAlJalalayn: "كفؤا: مكافئا ومماثلا، وأحد: اسم كان مؤخر، أي: ليس له مثيل سبحانه.",
      tafsirIbnKathir: "أي ليس له مثيل ولا نظير في خلقه، كما قال تعالى: (لَيْسَ كَمِثْلِهِ شَيْءٌ وَهُوَ السَّمِيعُ الْبَصِيرُ)."
    }
  ],
  // 113: Al-Falaq
  113: [
    {
      number: 6226,
      numberInSurah: 1,
      juz: 30,
      page: 604,
      text: "قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ",
      textWarsh: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
      translation: "Say, \"I seek refuge in the Lord of daybreak",
      tafsirAlMuyassar: "قل أيها النبي: أعتصم وألتجئ برب الصبح الذي يفلقه من ظلمة الليل.",
      tafsirAlJalalayn: "الفلق: الصبح لأنه ينفلق عن ظلمة الليل.",
      tafsirIbnKathir: "قال جابر وابن عباس: الفلق هو الصبح، وقال كعب: بيت في جهنم إذا فتح صاح منه أهل النار."
    },
    {
      number: 6227,
      numberInSurah: 2,
      juz: 30,
      page: 604,
      text: "مِن شَرِّ مَا خَلَقَ",
      textWarsh: "مِن شَرِّ مَا خَلَقَ",
      translation: "From the evil of that which He created",
      tafsirAlMuyassar: "من شر جميع المخلوقات وشرور أنفسها وما يصدر منها.",
      tafsirAlJalalayn: "من حيوان مكلف وغير مكلف، وجماد كالسم وغير ذلك.",
      tafsirIbnKathir: "أي من شر كل ذي شر خلقه الله عز وجل."
    },
    {
      number: 6228,
      numberInSurah: 3,
      juz: 30,
      page: 604,
      text: "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ",
      textWarsh: "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ",
      translation: "And from the evil of darkness when it settles",
      tafsirAlMuyassar: "ومن شر الليل الشديد الظلمة إذا دخل وأحاط، لما ينتشر فيه من الشياطين وأهل الفساد.",
      tafsirAlJalalayn: "الليل إذا أظلم ودخل في كل شيء.",
      tafsirIbnKathir: "قال مجاهد: غاسق الليل إذا وقب غروب الشمس، وفيه تنتشر الأرواح الشريرة."
    },
    {
      number: 6229,
      numberInSurah: 4,
      juz: 30,
      page: 604,
      text: "وَمِن شَرِّ ٱلنَّفَّـٰثَـٰتِ فِى ٱلْعُقَدِ",
      textWarsh: "وَمِن شَرِّ النَّفَّـٰثَاتِ فِي الْعُقَدِ",
      translation: "And from the evil of the blowers in knots",
      tafsirAlMuyassar: "ومن شر السواحر اللاتي ينفخن بريقهن الخبيث في العقد التي يعقدنها للسحر.",
      tafsirAlJalalayn: "الساحرات ينفثن وينفخن بريق خفيف في عقد الخيوط عند السحر.",
      tafsirIbnKathir: "النفاثات في العقد: السواحر اللاتي يسحرن وينفثن في العقد طلباً للإضرار بالناس."
    },
    {
      number: 6230,
      numberInSurah: 5,
      juz: 30,
      page: 604,
      text: "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
      textWarsh: "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
      translation: "And from the evil of an envier when he envies.\"",
      tafsirAlMuyassar: "ومن شر من يتمنى زوال النعمة عن غيره، ويظهر عداوته وأذاه.",
      tafsirAlJalalayn: "إذا أظهر حسده وعمل بمقتضاه من الكيد والأذى.",
      tafsirIbnKathir: "الحاسد هو الذي يحب زوال النعمة عن المحسود وإن لم تصر إليه، فاستعاذ بالله من شر عينه ونفسه."
    }
  ],
  // 114: An-Nas
  114: [
    {
      number: 6231,
      numberInSurah: 1,
      juz: 30,
      page: 604,
      text: "قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ",
      textWarsh: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
      translation: "Say, \"I seek refuge in the Lord of mankind,",
      tafsirAlMuyassar: "قل أيها النبي: أعتصم وأتحصن برب الناس وخالقهم ومدبر أمورهم.",
      tafsirAlJalalayn: "خالقهم ومالكهم ورازقهم ومدبر أحوالهم.",
      tafsirIbnKathir: "هذه ثلاث صفات من صفات الرب عز وجل: الربوبية والملك والإلهية، وهو رب كل شيء ومليكه وإلهه."
    },
    {
      number: 6232,
      numberInSurah: 2,
      juz: 30,
      page: 604,
      text: "مَلِكِ ٱلنَّاسِ",
      textWarsh: "مَلِكِ النَّاسِ",
      translation: "The Sovereign of mankind,",
      tafsirAlMuyassar: "الملك الحق المتصرف في شؤون خلقه جميعاً، الغني عنهم.",
      tafsirAlJalalayn: "المتصرف فيهم بما يشاء لا حاكم عليهم سواه.",
      tafsirIbnKathir: "الملك المطلق لجميع الناس، الذين هم عبيده وتحت سلطانه وقدرته."
    },
    {
      number: 6233,
      numberInSurah: 3,
      juz: 30,
      page: 604,
      text: "إِلَـٰهِ ٱلنَّاسِ",
      textWarsh: "إِلَـٰهِ النَّاسِ",
      translation: "The God of mankind,",
      tafsirAlMuyassar: "معبودهم الحق الذي لا معبود سواه ولا يستحق العبادة غيره.",
      tafsirAlJalalayn: "معبودهم الحق المستحق للعبادة وحده.",
      tafsirIbnKathir: "إلههم الذي لا معبود لهم بحق سواه، فالمستعيذ يلتجئ بمن هذه صفاته."
    },
    {
      number: 6234,
      numberInSurah: 4,
      juz: 30,
      page: 604,
      text: "مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ",
      textWarsh: "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
      translation: "From the evil of the retreating whisperer -",
      tafsirAlMuyassar: "من شر الشيطان الذي يلقي الوساوس في قلوب الناس، ويخنس ويتوارى إذا ذكر العبد ربه.",
      tafsirAlJalalayn: "الشيطان يوسوس فإذا ذكر الله خنس أي انقبض وتأخر.",
      tafsirIbnKathir: "قال ابن عباس: الشيطان جاثم على قلب ابن آدم، فإذا سها وغفل وسوس، فإذا ذكر الله خنس."
    },
    {
      number: 6235,
      numberInSurah: 5,
      juz: 30,
      page: 604,
      text: "ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ",
      textWarsh: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
      translation: "Who whispers into the breasts of mankind -",
      tafsirAlMuyassar: "الذي يبث الشبهات والشهوات والوساوس في صدور بني آدم.",
      tafsirAlJalalayn: "يلقي الكلام الخفي المردي في قلوبهم عند الغفلة.",
      tafsirIbnKathir: "الوسوسة هي الدعوة إلى المعصية وتزيين الباطل والتشكيك في الحق."
    },
    {
      number: 6236,
      numberInSurah: 6,
      juz: 30,
      page: 604,
      text: "مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ",
      textWarsh: "مِنَ الْجِنَّةِ وَالنَّاسِ",
      translation: "From among the jinn and mankind.\"",
      tafsirAlMuyassar: "من شياطين الإنس والجن، فكلاهما يوسوس ويدعو إلى الشر والفساد.",
      tafsirAlJalalayn: "بيان للذي يوسوس أنه يكون من شياطين الجن ومن شياطين الإنس كما قال تعالى: شياطين الإنس والجن.",
      tafsirIbnKathir: "كما أن للجن شياطين توسوس، فللإنس شياطين من جلساء السوء يوسوسون ويزينون المنكر."
    }
  ]
};
