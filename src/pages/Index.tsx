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
        approved: "Бекітілген: 1992 жылғы 4 маусым"
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
        approved: "Бекітілген: 1992 жылғы 4 маусым",
        proportions: "Пропорциялар: 1:2"
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
        copyright: "© 2024 Қазақстан Республикасы"
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
          { year: "2006", text: "Принят новый Государственный Гимн на основе песни «Менің Қазақстаным»" }
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
        proportions: "Пропорции: 1:2"
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
        copyright: "© 2024 Республика Казахстан"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-amber-50/20">
      {/* Modern Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-slate-200/60 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-sky-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Icon name="Shield" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">{t.title}</h1>
                <p className="text-sm text-slate-600">{t.subtitle}</p>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button
                size="sm"
                variant={language === 'kz' ? 'default' : 'ghost'}
                onClick={() => setLanguage('kz')}
                className={language === 'kz' 
                  ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md hover:shadow-lg' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}
              >
                ҚАЗ
              </Button>
              <Button
                size="sm"
                variant={language === 'ru' ? 'default' : 'ghost'}
                onClick={() => setLanguage('ru')}
                className={language === 'ru' 
                  ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md hover:shadow-lg' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}
              >
                РУС
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Icon name="Star" size={16} />
              <span>{language === 'kz' ? 'Мемлекеттік рәміздер' : 'Официальные символы'}</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              {t.title}
            </h2>
            <p className="text-xl text-blue-50 max-w-2xl mx-auto text-balance">
              {t.overview.intro}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 -mt-16 pb-24 relative z-10">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5 gap-2 bg-white/80 backdrop-blur-sm p-2 shadow-lg rounded-2xl">
            {(['overview', 'emblem', 'flag', 'hymn', 'gallery'] as const).map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-600 data-[state=active]:to-sky-500 data-[state=active]:text-white data-[state=active]:shadow-md flex flex-col gap-1 py-3"
              >
                <Icon 
                  name={tab === 'overview' ? 'Home' : tab === 'emblem' ? 'Shield' : tab === 'flag' ? 'Flag' : tab === 'hymn' ? 'Music' : 'Images'} 
                  size={20} 
                />
                <span className="text-xs">{t.tabs[tab]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8 animate-fade-in">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: 'Shield', title: t.tabs.emblem, desc: t.overview.emblemCard, gradient: 'from-blue-500 to-cyan-400' },
                { icon: 'Flag', title: t.tabs.flag, desc: t.overview.flagCard, gradient: 'from-sky-500 to-blue-400' },
                { icon: 'Music', title: t.tabs.hymn, desc: t.overview.hymnCard, gradient: 'from-cyan-500 to-teal-400' }
              ].map((item, idx) => (
                <Card key={idx} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${item.gradient}`}></div>
                  <CardHeader className="text-center pt-8">
                    <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon name={item.icon as any} size={32} className="text-white" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-slate-600 leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-400 rounded-xl flex items-center justify-center">
                    <Icon name="Calendar" size={20} className="text-white" />
                  </div>
                  {t.overview.historyTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {t.overview.history.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                    <Badge className="bg-gradient-to-r from-amber-500 to-orange-400 text-white text-base px-4 py-1.5 hover:shadow-md">
                      {item.year}
                    </Badge>
                    <p className="text-slate-700 flex-1">{item.text}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Emblem Tab */}
          <TabsContent value="emblem" className="animate-fade-in">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
              <CardHeader className="bg-gradient-to-br from-slate-50 to-blue-50/30">
                <CardTitle className="text-3xl flex items-center gap-3">
                  <Icon name="Shield" size={32} className="text-blue-600" />
                  {t.emblem.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-8 space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-center justify-center bg-gradient-to-br from-sky-100 to-blue-100 rounded-3xl p-12 min-h-[400px]">
                    <div className="w-64 h-64 bg-gradient-to-br from-blue-600 to-sky-500 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/30">
                      <Icon name="Shield" size={140} className="text-white" />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{t.emblem.descTitle}</h3>
                      <p className="text-slate-600 leading-relaxed">{t.emblem.desc}</p>
                    </div>

                    <div className="space-y-3">
                      {t.emblem.symbols.map((symbol, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-blue-50/50 rounded-xl hover:bg-blue-100/50 transition-colors">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                          <div className="flex-1">
                            <strong className="text-slate-900">{symbol.title}</strong>
                            <span className="text-slate-600"> — {symbol.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 bg-slate-100 rounded-xl space-y-2 text-sm text-slate-700">
                      <p>{t.emblem.authors}</p>
                      <p>{t.emblem.approved}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Flag Tab */}
          <TabsContent value="flag" className="animate-fade-in">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-sky-500 to-cyan-400"></div>
              <CardHeader className="bg-gradient-to-br from-slate-50 to-sky-50/30">
                <CardTitle className="text-3xl flex items-center gap-3">
                  <Icon name="Flag" size={32} className="text-sky-600" />
                  {t.flag.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-8 space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{t.flag.descTitle}</h3>
                      <p className="text-slate-600 leading-relaxed">{t.flag.desc}</p>
                    </div>

                    <div className="space-y-3">
                      {t.flag.symbols.map((symbol, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-sky-50/50 rounded-xl hover:bg-sky-100/50 transition-colors">
                          <div className="w-2 h-2 bg-sky-600 rounded-full mt-2"></div>
                          <div className="flex-1">
                            <strong className="text-slate-900">{symbol.title}</strong>
                            <span className="text-slate-600"> — {symbol.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 bg-slate-100 rounded-xl space-y-2 text-sm text-slate-700">
                      <p>{t.flag.author}</p>
                      <p>{t.flag.approved}</p>
                      <p>{t.flag.proportions}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-sky-400 to-blue-500 rounded-3xl p-12 min-h-[350px] flex items-center justify-center relative overflow-hidden shadow-2xl">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
                      <div className="relative">
                        <div className="w-36 h-36 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl mb-6">
                          <Icon name="Sun" size={80} className="text-white" />
                        </div>
                        <Icon name="Bird" size={70} className="text-amber-400 drop-shadow-2xl mx-auto" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { color: 'bg-sky-400', name: language === 'kz' ? 'Аспан көгі' : 'Небесно-голубой', hex: '#87CEEB' },
                        { color: 'bg-amber-400', name: language === 'kz' ? 'Алтын' : 'Золотой', hex: '#FDB813' }
                      ].map((c, idx) => (
                        <div key={idx} className="p-4 bg-white rounded-xl shadow-md">
                          <div className={`w-full h-16 ${c.color} rounded-lg mb-3 shadow-inner`}></div>
                          <p className="font-semibold text-sm text-slate-900">{c.name}</p>
                          <p className="text-xs text-slate-500 font-mono">{c.hex}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Hymn Tab */}
          <TabsContent value="hymn" className="animate-fade-in">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-400"></div>
              <CardHeader className="bg-gradient-to-br from-slate-50 to-purple-50/30">
                <CardTitle className="text-3xl flex items-center gap-3">
                  <Icon name="Music" size={32} className="text-purple-600" />
                  {t.hymn.title}
                </CardTitle>
                <CardDescription className="text-lg text-slate-600">{t.hymn.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="pt-8 space-y-8">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8 rounded-3xl shadow-2xl">
                  <div className="flex items-center gap-6">
                    <Button
                      size="lg"
                      onClick={togglePlay}
                      className="bg-white text-blue-600 hover:bg-blue-50 w-20 h-20 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                    >
                      <Icon name={isPlaying ? "Pause" : "Play"} size={36} />
                    </Button>
                    <div className="flex-1">
                      <p className="font-bold text-xl mb-1">{t.hymn.title}</p>
                      <p className="text-blue-100 text-sm">
                        {isPlaying ? `${t.hymn.verse} ${currentVerse + 1} ${t.hymn.of} ${hymn.verses.length}` : t.hymn.playBtn}
                      </p>
                      {isPlaying && (
                        <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden mt-4">
                          <div 
                            className="h-full bg-white rounded-full transition-all duration-500" 
                            style={{ width: `${((currentVerse + 1) / hymn.verses.length) * 100}%` }}
                          ></div>
                        </div>
                      )}
                    </div>
                    <Icon name="Volume2" size={28} className="text-white/80" />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {hymn.verses.map((verse, index) => (
                    <Card 
                      key={index}
                      className={`transition-all duration-500 border-2 ${
                        isPlaying && currentVerse === index 
                          ? 'border-purple-500 shadow-2xl shadow-purple-500/20 scale-105' 
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <CardHeader className="pb-4">
                        <CardTitle className="text-lg flex items-center justify-between">
                          <span className="text-slate-900">
                            {index === 2 ? t.hymn.chorus : `${t.hymn.verse} ${index + 1}`}
                          </span>
                          {isPlaying && currentVerse === index && (
                            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                              <Icon name="Music" className="text-white" size={18} />
                            </div>
                          )}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <Badge className="mb-3 bg-gradient-to-r from-blue-600 to-sky-500">Қазақша</Badge>
                          <p className="text-sm leading-relaxed whitespace-pre-line font-medium text-slate-900">
                            {verse.kz}
                          </p>
                        </div>
                        <Separator />
                        <div>
                          <Badge className="mb-3 bg-gradient-to-r from-amber-500 to-orange-400">Русский</Badge>
                          <p className="text-sm leading-relaxed whitespace-pre-line text-slate-600">
                            {verse.ru}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl">
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <Icon name="User" size={20} className="text-blue-600" />
                      {t.hymn.authorsTitle}
                    </h4>
                    <p className="text-slate-700"><strong>{t.hymn.words}</strong> {language === 'kz' ? 'Жұмекен Нәжімеденов, Нұрсұлтан Назарбаев' : 'Жумекен Нажимеденов, Нурсултан Назарбаев'}</p>
                    <p className="text-slate-700 mt-2"><strong>{t.hymn.music}</strong> {language === 'kz' ? 'Шәмші Қалдаяқов' : 'Шамши Калдаяков'}</p>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <Icon name="Calendar" size={20} className="text-purple-600" />
                      {t.hymn.historyTitle}
                    </h4>
                    <p className="text-slate-700">{t.hymn.historyText}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gallery Tab */}
          <TabsContent value="gallery" className="animate-fade-in">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {t.gallery.items.map((item, index) => {
                const icons = ['Shield', 'Flag', 'Award', 'History', 'Crown', 'Building'];
                const gradients = [
                  'from-blue-500 to-cyan-400',
                  'from-sky-500 to-blue-400',
                  'from-purple-500 to-pink-400',
                  'from-amber-500 to-orange-400',
                  'from-rose-500 to-pink-400',
                  'from-teal-500 to-emerald-400'
                ];
                return (
                  <Card 
                    key={index} 
                    className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden cursor-pointer"
                  >
                    <div className={`h-2 bg-gradient-to-r ${gradients[index]}`}></div>
                    <CardContent className="p-6">
                      <div className={`w-full h-52 bg-gradient-to-br ${gradients[index]} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                        <Icon name={icons[index] as any} size={80} className="text-white drop-shadow-lg" />
                      </div>
                      <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-sky-500 rounded-xl flex items-center justify-center">
                    <Icon name="Info" size={20} className="text-white" />
                  </div>
                  {t.gallery.rulesTitle}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {t.gallery.rules.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name="Check" className="text-white" size={16} />
                      </div>
                      <span className="text-slate-700">{rule}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Modern Footer */}
      <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-sky-400 rounded-lg flex items-center justify-center">
                  <Icon name="Phone" size={16} />
                </div>
                <h3 className="text-lg font-bold">{t.footer.contacts}</h3>
              </div>
              <p className="text-sm text-slate-400">{t.footer.contactsText}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-400 rounded-lg flex items-center justify-center">
                  <Icon name="Mail" size={16} />
                </div>
                <h3 className="text-lg font-bold">{t.footer.communication}</h3>
              </div>
              <p className="text-sm text-slate-400">info@gov.kz</p>
              <p className="text-sm text-slate-400 mt-2">+7 (7172) 74-22-22</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-400 rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" size={16} />
                </div>
                <h3 className="text-lg font-bold">{t.footer.address}</h3>
              </div>
              <p className="text-sm text-slate-400">{t.footer.addressText}</p>
            </div>
          </div>
          <Separator className="bg-slate-700/50 mb-6" />
          <div className="text-center text-sm text-slate-500">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
