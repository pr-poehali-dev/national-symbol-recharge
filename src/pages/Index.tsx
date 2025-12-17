import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVerse, setCurrentVerse] = useState(0);
  const [language, setLanguage] = useState<'kz' | 'ru'>('kz');

  const translations = {
    kz: {
      title: "Мемлекеттік рәміздер",
      subtitle: "Қазақстан Республикасы",
      tabs: {
        overview: "Шолу",
        emblem: "Елтаңба",
        flag: "Ту",
        hymn: "Әнұран",
        gallery: "Галерея"
      },
      overview: {
        title: "Мемлекеттік рәміздер туралы",
        intro: "Қазақстан Республикасының мемлекеттік рәміздері Мемлекеттік Елтаңбаны, Мемлекеттік Туды және Мемлекеттік Әнұранды қамтиды. Бұл рәміздер ұлттық идеяны, қазақ халқының тарихы мен мәдениетін бейнелейді.",
        emblemCard: "Халық бірлігі мен мемлекет егемендігінің белгісі",
        flagCard: "Еліміздің бостандығы мен тәуелсіздігінің көрінісі",
        hymnCard: "Патриотизм мен мақтаныштың музыкалық көрінісі",
        historyTitle: "Тарихи анықтама",
        history: [
          { year: "1992", text: "Қазақстан Республикасының Мемлекеттік Туы қабылданды" },
          { year: "1992", text: "Қазақстан Республикасының Мемлекеттік Елтаңбасы бекітілді" },
          { year: "2006", text: "«Менің Қазақстаным» патриотикалық әні негізінде жаңа Мемлекеттік Әнұран қабылданды" }
        ]
      },
      emblem: {
        title: "Мемлекеттік Елтаңба",
        descTitle: "Рәміздік сипаттама",
        desc: "Қазақстан Республикасының Мемлекеттік Елтаңбасы дөңгелек пішінді және көк фонда шаңырақ (киіз үйдің жоғарғы күмбезді бөлігі) бейнесін білдіреді, одан барлық жаққа күн сәулесі тәрізді уықтар (тіректер) жайылады.",
        symbols: [
          { title: "Шаңырақ", desc: "ортақ үй және Қазақстан халықтарының бірлігінің белгісі" },
          { title: "Тұлпарлар", desc: "мифтік қанатты аттар, өзін-өзі құрбандыққа шалу белгісі" },
          { title: "Бесбұрышты жұлдыз", desc: "бақыт пен бейбітшіліктің белгісі" },
          { title: "«Қазақстан» жазуы", desc: "қазақ ою-өрнегімен орындалған" }
        ],
        authors: "Авторлар: сәулетшілер Жандарбек Мәлібеков және Шот-Аман Уәлиханов",
        approved: "Бекітілген күні: 1992 жылғы 4 маусым"
      },
      flag: {
        title: "Мемлекеттік Ту",
        descTitle: "Ту сипаттамасы",
        desc: "Қазақстан Республикасының Мемлекеттік туы тік бұрышты көк түсті мата болып табылады, ортасында 32 сәулелі күн бейнесі, оның астында қалықтап ұшқан дала бүркіті бейнеленген.",
        symbols: [
          { title: "Көк түс", desc: "аспан, бейбітшілік пен әл-ауқаттың белгісі" },
          { title: "32 сәулелі күн", desc: "молшылық пен өркендеудің белгісі" },
          { title: "Бүркіт", desc: "бостандық, тәуелсіздік және мақсатқа ұмтылудың белгісі" },
          { title: "Ұлттық ою-өрнек", desc: "мәдени мұраны көрсетеді" }
        ],
        author: "Автор: Шәкен Ниязбеков",
        approved: "Бекітілген күні: 1992 жылғы 4 маусым",
        proportions: "Пропорциялар: 1:2",
        colorPalette: "Түс палитрасы",
        skyBlue: "Аспан көгі",
        golden: "Алтын"
      },
      hymn: {
        title: "Мемлекеттік Әнұран",
        subtitle: "«Менің Қазақстаным»",
        playBtn: "Ойнату үшін басыңыз",
        verse: "Шумақ",
        chorus: "Қайырма",
        of: "ден",
        authorsTitle: "Авторлар",
        words: "Сөзі:",
        music: "Музыкасы:",
        historyTitle: "Тарихы",
        historyText: "2006 жылғы 7 қаңтарда қабылданды. 1956 жылы жазылған «Менің Қазақстаным» атты танымал патриотикалық ән негізінде жасалды."
      },
      gallery: {
        title: "Мемлекеттік рәміздер галереясы",
        items: [
          { title: 'ҚР Елтаңбасы', desc: 'Ресми бейнесі' },
          { title: 'ҚР Туы', desc: 'Әртүрлі форматтарда' },
          { title: 'Президенттік штандарт', desc: 'Мемлекет басшысының белгісі' },
          { title: 'Тарихи нұсқалар', desc: 'Рәміздердің эволюциясы' },
          { title: 'Рәсімдік пайдалану', desc: 'Ресми іс-шаралар' },
          { title: 'Сәулетте рәміздер', desc: 'Ескерткіштік формалар' }
        ],
        rulesTitle: "Рәміздерді пайдалану ережелері",
        rules: [
          "Мемлекеттік рәміздер заңмен қорғалады және құрметпен пайдаланылуы керек",
          "Рәміздер бейнелері ресми стандарттарға сәйкес келуі тиіс",
          "Мемлекеттік рәміздер бейнелерін бұрмалау тыйым салынады",
          "Коммерциялық пайдалану арнайы ережелермен реттеледі"
        ]
      },
      footer: {
        contacts: "Байланыс",
        contactsText: "Қазақстан Республикасының мемлекеттік рәміздері туралы ресми ақпарат",
        communication: "Хабарласу",
        address: "Мекенжай",
        addressText: "Астана қ., Мәңгілік Ел даңғ., 55/1",
        copyright: "© 2024 Қазақстан Республикасы. Барлық құқықтар қорғалған."
      }
    },
    ru: {
      title: "Государственная символика",
      subtitle: "Республики Казахстан",
      tabs: {
        overview: "Обзор",
        emblem: "Герб",
        flag: "Флаг",
        hymn: "Гимн",
        gallery: "Галерея"
      },
      overview: {
        title: "О государственной символике",
        intro: "Государственная символика Республики Казахстан включает Государственный Герб, Государственный Флаг и Государственный Гимн. Эти символы воплощают национальную идею, историю и культуру казахского народа.",
        emblemCard: "Символ единства народа и суверенитета государства",
        flagCard: "Воплощение свободы и независимости страны",
        hymnCard: "Музыкальное выражение патриотизма и гордости",
        historyTitle: "Историческая справка",
        history: [
          { year: "1992", text: "Принят Государственный Флаг Республики Казахстан" },
          { year: "1992", text: "Утвержден Государственный Герб Республики Казахстан" },
          { year: "2006", text: "Принят новый Государственный Гимн на основе патриотической песни «Менің Қазақстаным»" }
        ]
      },
      emblem: {
        title: "Государственный Герб",
        descTitle: "Описание символики",
        desc: "Государственный Герб Республики Казахстан имеет форму круга и представляет собой изображение шанырака (верхняя сводчатая часть юрты) на голубом фоне, от которого во все стороны в виде солнечных лучей расходятся уыки (опоры).",
        symbols: [
          { title: "Шанырак", desc: "символ общего дома и единства народов Казахстана" },
          { title: "Тулпары", desc: "мифические крылатые кони, символ самоотверженности" },
          { title: "Пятиконечная звезда", desc: "символ счастья и мира" },
          { title: "Надпись «Қазақстан»", desc: "выполнена казахским орнаментом" }
        ],
        authors: "Авторы: архитекторы Жандарбек Малибеков и Шот-Аман Уалиханов",
        approved: "Утвержден: 4 июня 1992 года"
      },
      flag: {
        title: "Государственный Флаг",
        descTitle: "Описание флага",
        desc: "Государственный флаг Республики Казахстан представляет собой прямоугольное полотнище голубого цвета с изображением в центре солнца с 32 лучами, под которым — парящий степной орел.",
        symbols: [
          { title: "Голубой цвет", desc: "символ неба, мира и благополучия" },
          { title: "Солнце с 32 лучами", desc: "символ изобилия и процветания" },
          { title: "Беркут", desc: "символ свободы, независимости и стремления к цели" },
          { title: "Национальный орнамент", desc: "отражает культурное наследие" }
        ],
        author: "Автор: Шакен Ниязбеков",
        approved: "Утвержден: 4 июня 1992 года",
        proportions: "Пропорции: 1:2",
        colorPalette: "Цветовая палитра",
        skyBlue: "Небесно-голубой",
        golden: "Золотой"
      },
      hymn: {
        title: "Государственный Гимн",
        subtitle: "«Менің Қазақстаным» (Мой Казахстан)",
        playBtn: "Нажмите для воспроизведения",
        verse: "Куплет",
        chorus: "Припев",
        of: "из",
        authorsTitle: "Авторы",
        words: "Слова:",
        music: "Музыка:",
        historyTitle: "История",
        historyText: "Принят 7 января 2006 года. Создан на основе популярной патриотической песни «Менің Қазақстаным», написанной в 1956 году."
      },
      gallery: {
        title: "Галерея государственной символики",
        items: [
          { title: 'Герб РК', desc: 'Официальное изображение' },
          { title: 'Флаг РК', desc: 'В различных форматах' },
          { title: 'Президентский штандарт', desc: 'Символ главы государства' },
          { title: 'Исторические версии', desc: 'Эволюция символики' },
          { title: 'Церемониальное использование', desc: 'Официальные мероприятия' },
          { title: 'Символика в архитектуре', desc: 'Монументальные формы' }
        ],
        rulesTitle: "Правила использования символики",
        rules: [
          "Государственная символика охраняется законом и должна использоваться с уважением",
          "Изображения символов должны соответствовать официальным стандартам",
          "Запрещается искажение изображений государственных символов",
          "Коммерческое использование регулируется специальными положениями"
        ]
      },
      footer: {
        contacts: "Контакты",
        contactsText: "Официальная информация о государственной символике Республики Казахстан",
        communication: "Связь",
        address: "Адрес",
        addressText: "г. Астана, пр. Мәңгілік Ел, 55/1",
        copyright: "© 2024 Республика Казахстан. Все права защищены."
      }
    }
  };

  const t = translations[language];

  const hymn = {
    verses: [
      {
        kz: "Алтын күн аспаны,\nАлтын дән даласы,\nЕрліктің дастаны,\nЕліме қарашы!",
        ru: "Небо золотое солнца,\nЗолотое зерно полей,\nСказание мужества,\nПосмотри на мою страну!"
      },
      {
        kz: "Ежелден ер деген,\nДаңқымыз шықты ғой.\nНамысын бермеген,\nҚазағым мықты ғой!",
        ru: "С древних времен слава\nНаша взошла.\nЧесть не отдавший,\nМой казах силен!"
      },
      {
        kz: "Қайырмасы:\nМеніңелім, меніңелім,\nГүлің болып егілемін,\nЖырың болып төгілемін, елім!\nТуған жерім менің – Қазақстаным!",
        ru: "Припев:\nМоя страна, моя страна,\nЦветком твоим взрастаю я,\nПесней твоей лечу я, родина!\nРодная земля моя – Казахстан!"
      }
    ]
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      setCurrentVerse(0);
      const interval = setInterval(() => {
        setCurrentVerse(prev => {
          if (prev >= hymn.verses.length - 1) {
            setIsPlaying(false);
            clearInterval(interval);
            return 0;
          }
          return prev + 1;
        });
      }, 8000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#87CEEB] to-white">
      {/* Header */}
      <header className="ornament-border bg-[#1A5490] text-white py-8 shadow-lg relative">
        <div className="container mx-auto px-4">
          <div className="absolute top-4 right-4 flex gap-2">
            <Button
              size="sm"
              variant={language === 'kz' ? 'default' : 'outline'}
              onClick={() => setLanguage('kz')}
              className={language === 'kz' ? 'bg-[#FDB813] text-[#1A5490] hover:bg-[#FDB813]/90' : 'border-white text-white hover:bg-white/10'}
            >
              ҚАЗ
            </Button>
            <Button
              size="sm"
              variant={language === 'ru' ? 'default' : 'outline'}
              onClick={() => setLanguage('ru')}
              className={language === 'ru' ? 'bg-[#FDB813] text-[#1A5490] hover:bg-[#FDB813]/90' : 'border-white text-white hover:bg-white/10'}
            >
              РУС
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-[#FDB813] rounded-full flex items-center justify-center">
              <Icon name="Shield" size={32} className="text-[#1A5490]" />
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-shadow-gold">
                {t.title}
              </h1>
              <p className="text-xl md:text-2xl text-[#FDB813] mt-2">
                {t.subtitle}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 bg-white/80 p-2">
            <TabsTrigger value="overview" className="data-[state=active]:bg-[#1A5490] data-[state=active]:text-white">
              <Icon name="Home" size={18} className="mr-2" />
              {t.tabs.overview}
            </TabsTrigger>
            <TabsTrigger value="emblem" className="data-[state=active]:bg-[#1A5490] data-[state=active]:text-white">
              <Icon name="Shield" size={18} className="mr-2" />
              {t.tabs.emblem}
            </TabsTrigger>
            <TabsTrigger value="flag" className="data-[state=active]:bg-[#1A5490] data-[state=active]:text-white">
              <Icon name="Flag" size={18} className="mr-2" />
              {t.tabs.flag}
            </TabsTrigger>
            <TabsTrigger value="hymn" className="data-[state=active]:bg-[#1A5490] data-[state=active]:text-white">
              <Icon name="Music" size={18} className="mr-2" />
              {t.tabs.hymn}
            </TabsTrigger>
            <TabsTrigger value="gallery" className="data-[state=active]:bg-[#1A5490] data-[state=active]:text-white">
              <Icon name="Images" size={18} className="mr-2" />
              {t.tabs.gallery}
            </TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-6">
            <Card className="border-2 border-[#FDB813] shadow-xl kazakh-pattern">
              <CardHeader className="bg-gradient-to-r from-[#1A5490] to-[#1A5490]/80 text-white">
                <CardTitle className="text-3xl flex items-center gap-3">
                  <Icon name="Landmark" size={32} />
                  {t.overview.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <p className="text-lg leading-relaxed">
                  {t.overview.intro}
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="border-[#1A5490] hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center pb-3">
                      <div className="w-20 h-20 mx-auto bg-[#FDB813] rounded-full flex items-center justify-center mb-3">
                        <Icon name="Shield" size={40} className="text-[#1A5490]" />
                      </div>
                      <CardTitle className="text-xl">{t.tabs.emblem}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center text-muted-foreground">
                        {t.overview.emblemCard}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-[#1A5490] hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center pb-3">
                      <div className="w-20 h-20 mx-auto bg-[#FDB813] rounded-full flex items-center justify-center mb-3">
                        <Icon name="Flag" size={40} className="text-[#1A5490]" />
                      </div>
                      <CardTitle className="text-xl">{t.tabs.flag}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center text-muted-foreground">
                        {t.overview.flagCard}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-[#1A5490] hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center pb-3">
                      <div className="w-20 h-20 mx-auto bg-[#FDB813] rounded-full flex items-center justify-center mb-3">
                        <Icon name="Music" size={40} className="text-[#1A5490]" />
                      </div>
                      <CardTitle className="text-xl">{t.tabs.hymn}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center text-muted-foreground">
                        {t.overview.hymnCard}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Separator className="my-6" />

                <div className="bg-[#1A5490]/5 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-[#1A5490] mb-4 flex items-center gap-2">
                    <Icon name="Calendar" size={24} />
                    {t.overview.historyTitle}
                  </h3>
                  <div className="space-y-4">
                    {t.overview.history.map((item, idx) => (
                      <div key={idx} className="flex gap-4">
                        <Badge className="bg-[#FDB813] text-[#1A5490] text-lg px-4 py-1 hover:bg-[#FDB813]">
                          {item.year}
                        </Badge>
                        <p>{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Emblem */}
          <TabsContent value="emblem" className="space-y-6">
            <Card className="border-2 border-[#FDB813] shadow-xl">
              <CardHeader className="bg-gradient-to-r from-[#1A5490] to-[#1A5490]/80 text-white">
                <CardTitle className="text-3xl flex items-center gap-3">
                  <Icon name="Shield" size={32} />
                  {t.emblem.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-[#87CEEB] to-white p-8 rounded-lg border-4 border-[#FDB813] flex items-center justify-center min-h-[400px]">
                    <div className="text-center">
                      <div className="w-48 h-48 mx-auto bg-[#1A5490] rounded-full flex items-center justify-center mb-4 shadow-2xl">
                        <Icon name="Shield" size={120} className="text-[#FDB813]" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-[#1A5490]">{t.emblem.descTitle}</h3>
                    <p className="leading-relaxed">
                      {t.emblem.desc}
                    </p>

                    <div className="space-y-3">
                      {t.emblem.symbols.map((symbol, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-[#FDB813]/10 rounded-lg">
                          <Icon name="Circle" size={20} className="text-[#FDB813] mt-1 flex-shrink-0" />
                          <div>
                            <strong className="text-[#1A5490]">{symbol.title}</strong> — {symbol.desc}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-[#1A5490]/5 rounded-lg border-l-4 border-[#1A5490]">
                      <p className="text-sm">{t.emblem.authors}</p>
                      <p className="text-sm mt-2">{t.emblem.approved}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Flag */}
          <TabsContent value="flag" className="space-y-6">
            <Card className="border-2 border-[#FDB813] shadow-xl">
              <CardHeader className="bg-gradient-to-r from-[#1A5490] to-[#1A5490]/80 text-white">
                <CardTitle className="text-3xl flex items-center gap-3">
                  <Icon name="Flag" size={32} />
                  {t.flag.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-[#1A5490]">{t.flag.descTitle}</h3>
                    <p className="leading-relaxed">
                      {t.flag.desc}
                    </p>

                    <div className="space-y-3">
                      {t.flag.symbols.map((symbol, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-[#87CEEB]/20 rounded-lg">
                          <Icon name={idx === 0 ? "Palette" : idx === 1 ? "Sun" : idx === 2 ? "Bird" : "Sparkles"} size={20} className={idx === 0 ? "text-[#1A5490]" : "text-[#FDB813]"} />
                          <div>
                            <strong className="text-[#1A5490]">{symbol.title}</strong> — {symbol.desc}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-[#1A5490]/5 rounded-lg border-l-4 border-[#1A5490]">
                      <p className="text-sm">{t.flag.author}</p>
                      <p className="text-sm mt-2">{t.flag.approved}</p>
                      <p className="text-sm mt-2">{t.flag.proportions}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-[#87CEEB] to-[#87CEEB]/80 p-8 rounded-lg border-4 border-[#FDB813] min-h-[300px] flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 kazakh-pattern opacity-20"></div>
                      <div className="text-center z-10">
                        <div className="w-32 h-32 mx-auto bg-[#FDB813] rounded-full flex items-center justify-center mb-4 shadow-2xl">
                          <Icon name="Sun" size={80} className="text-[#1A5490]" />
                        </div>
                        <div className="mt-4">
                          <Icon name="Bird" size={60} className="text-[#FDB813] drop-shadow-lg" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border-2 border-[#87CEEB]">
                      <h4 className="font-bold text-[#1A5490] mb-3">{t.flag.colorPalette}</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-[#87CEEB] rounded border-2 border-gray-300"></div>
                          <div>
                            <p className="font-semibold">{t.flag.skyBlue}</p>
                            <p className="text-xs text-muted-foreground">#87CEEB</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-[#FDB813] rounded border-2 border-gray-300"></div>
                          <div>
                            <p className="font-semibold">{t.flag.golden}</p>
                            <p className="text-xs text-muted-foreground">#FDB813</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Hymn */}
          <TabsContent value="hymn" className="space-y-6">
            <Card className="border-2 border-[#FDB813] shadow-xl">
              <CardHeader className="bg-gradient-to-r from-[#1A5490] to-[#1A5490]/80 text-white">
                <CardTitle className="text-3xl flex items-center gap-3">
                  <Icon name="Music" size={32} />
                  {t.hymn.title}
                </CardTitle>
                <CardDescription className="text-white/90 text-lg mt-2">
                  {t.hymn.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                {/* Audio Player */}
                <div className="bg-gradient-to-r from-[#1A5490] to-[#1A5490]/90 text-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Button
                        size="lg"
                        onClick={togglePlay}
                        className="bg-[#FDB813] text-[#1A5490] hover:bg-[#FDB813]/90 w-16 h-16 rounded-full"
                      >
                        <Icon name={isPlaying ? "Pause" : "Play"} size={32} />
                      </Button>
                      <div>
                        <p className="font-bold text-lg">{t.hymn.title}</p>
                        <p className="text-sm text-white/80">
                          {isPlaying ? `${t.hymn.verse} ${currentVerse + 1} ${t.hymn.of} ${hymn.verses.length}` : t.hymn.playBtn}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Icon name="Volume2" size={24} />
                    </div>
                  </div>
                  
                  {isPlaying && (
                    <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                      <div className="h-full bg-[#FDB813] animate-pulse" style={{ width: `${((currentVerse + 1) / hymn.verses.length) * 100}%` }}></div>
                    </div>
                  )}
                </div>

                {/* Lyrics */}
                <div className="grid md:grid-cols-3 gap-4">
                  {hymn.verses.map((verse, index) => (
                    <Card 
                      key={index}
                      className={`transition-all duration-500 ${
                        isPlaying && currentVerse === index 
                          ? 'border-[#FDB813] border-4 shadow-2xl scale-105' 
                          : 'border-gray-200'
                      }`}
                    >
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg flex items-center justify-between">
                          <span>{index === 2 ? t.hymn.chorus : `${t.hymn.verse} ${index + 1}`}</span>
                          {isPlaying && currentVerse === index && (
                            <Icon name="Music" className="text-[#FDB813] animate-pulse" size={24} />
                          )}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <Badge className="mb-2 bg-[#1A5490]">Қазақша</Badge>
                          <p className="text-sm leading-relaxed whitespace-pre-line font-medium">
                            {verse.kz}
                          </p>
                        </div>
                        <Separator />
                        <div>
                          <Badge className="mb-2 bg-[#FDB813] text-[#1A5490]">Русский</Badge>
                          <p className="text-sm leading-relaxed whitespace-pre-line text-muted-foreground">
                            {verse.ru}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="p-4 bg-[#1A5490]/5 rounded-lg border-l-4 border-[#1A5490]">
                    <h4 className="font-bold text-[#1A5490] mb-2 flex items-center gap-2">
                      <Icon name="User" size={20} />
                      {t.hymn.authorsTitle}
                    </h4>
                    <p className="text-sm"><strong>{t.hymn.words}</strong> {language === 'kz' ? 'Жұмекен Нәжімеденов, Нұрсұлтан Назарбаев' : 'Жумекен Нажимеденов, Нурсултан Назарбаев'}</p>
                    <p className="text-sm mt-1"><strong>{t.hymn.music}</strong> {language === 'kz' ? 'Шәмші Қалдаяқов' : 'Шамши Калдаяков'}</p>
                  </div>

                  <div className="p-4 bg-[#1A5490]/5 rounded-lg border-l-4 border-[#1A5490]">
                    <h4 className="font-bold text-[#1A5490] mb-2 flex items-center gap-2">
                      <Icon name="Calendar" size={20} />
                      {t.hymn.historyTitle}
                    </h4>
                    <p className="text-sm">
                      {t.hymn.historyText}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gallery */}
          <TabsContent value="gallery" className="space-y-6">
            <Card className="border-2 border-[#FDB813] shadow-xl">
              <CardHeader className="bg-gradient-to-r from-[#1A5490] to-[#1A5490]/80 text-white">
                <CardTitle className="text-3xl flex items-center gap-3">
                  <Icon name="Images" size={32} />
                  {t.gallery.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {t.gallery.items.map((item, index) => {
                    const icons = ['Shield', 'Flag', 'Award', 'History', 'Crown', 'Building'];
                    return (
                      <Card key={index} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-[#87CEEB] cursor-pointer group">
                        <CardContent className="p-6">
                          <div className="w-full h-48 bg-gradient-to-br from-[#87CEEB] to-[#1A5490] rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                            <Icon name={icons[index] as any} size={80} className="text-[#FDB813] drop-shadow-lg" />
                          </div>
                          <h3 className="font-bold text-lg text-[#1A5490] mb-2">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                <Separator className="my-8" />

                <div className="bg-[#1A5490]/5 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-[#1A5490] mb-4 flex items-center gap-2">
                    <Icon name="Info" size={24} />
                    {t.gallery.rulesTitle}
                  </h3>
                  <ul className="space-y-3">
                    {t.gallery.rules.map((rule, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon name="Check" className="text-green-600 mt-1 flex-shrink-0" size={20} />
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="ornament-border bg-[#1A5490] text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Icon name="Phone" size={20} />
                {t.footer.contacts}
              </h3>
              <p className="text-sm text-white/80">
                {t.footer.contactsText}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Icon name="Mail" size={20} />
                {t.footer.communication}
              </h3>
              <p className="text-sm text-white/80">info@gov.kz</p>
              <p className="text-sm text-white/80 mt-2">+7 (7172) 74-22-22</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Icon name="MapPin" size={20} />
                {t.footer.address}
              </h3>
              <p className="text-sm text-white/80">
                {t.footer.addressText}
              </p>
            </div>
          </div>
          <Separator className="my-6 bg-white/20" />
          <div className="text-center text-sm text-white/60">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
