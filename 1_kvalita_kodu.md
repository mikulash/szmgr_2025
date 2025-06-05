# Kvalita kódu

1. [Kvalita ve vývoji softwarových systémů, atributy kvality a softwarové metriky](#kvalita-ve-vývoji-softwarových-systémů-atributy-kvality-a-softwarové-metriky)
2. [Taktiky pro zajištění kvality na úrovni jednotlivých atributů kvality](#taktiky-pro-zajištění-kvality-na-úrovni-jednotlivých-atributů-kvality)
3. [Principy Clean Code a SOLID, refaktoring kódu](#principy-clean-code-a-solid-refaktoring-kódu)
4. [Testování kódu, jednotkové testy, integrační testy, uživatelské a akceptační testy](#testování-kódu-jednotkové-testy-integrační-testy-uživatelské-a-akceptační-testy)
5. [Ladění a testování výkonu](#ladění-a-testování-výkonu)
6. [Proces řízení kvality ve vývoji softwarových systémů](#proces-řízení-kvality-ve-vývoji-softwarových-systémů)

## Kvalita ve vývoji softwarových systémů

- Důležitý aspekt při vývoji sw systémů
- Kvalita je často definována jako **schopnost produktu dostát požadavkům** => je důležité si určit, co jsou požadavky
    - **Zákaznické požadavky** a.k.a. externí kvalita (použitelnost, přesnost/správnost, spolehlivost, bezpečnost,
      výkon...)
    - Abychom dostáli těmto ^, je třeba, aby šel vývoj snadno, aby se produkt dal jednoduše dlouhodobě udržovat (byl
      snadný modifikovat/rozšířit), a aby nebyl zbytečně drahý (skrz náklady na provoz i cenu úprav). Toho docílíme
      dodržováním **interní kvality produktu** (modularita, jednoduchost jednotek, testovatelnost, přizpůsobitelnost
      změnám, čitelnost kódu, znovupoužitelnost, škálovatelnost, přenositelnost, udržitelnost, dodržování standardů...)
- Špatná externí kvalita je často symptomem špatné interní kvality produktu (opravy chyb trvají dlouho, systém je
  pomalý... ale nemusí to být vždy pravda, třeba jen máme slabší UI)

## Atributy kvality

Za nejdůležitější atributy kvality kódu se považují:

- **Udržitelnost (maintainability)** = snadnost úprav bez technického dluhu
- **Výkonnost** = reakční doba systému (a efektivita využití zdrojů)
- **Spolehlivost** = pravděpodobnost bezchybného fungování po určitou dobu
- **Testovatelnost** = jak snadno (a co všechno) lze systém testovat
- **Škálovatelnost** = schopnost systému zpracovat větší množství dat/uživatelů...
- **Bezpečnost** = jak je systém odolný vůči útokům
- **Použitelnost** = snadnost používání systému a jednoduchost učení se práce s ním, správná funkcionalita (obvykle samostatný bod)


## Softwarové metriky

Měřitelné aspekty sw systému (počet řádků kódu, pokrytí testy, cyklomatická složitost…), které nám dávají informace o celkovém obrazu, ale může být netriviální je vhodně interpretovat.

Např. 100 % pokrytí testy nemusí znamenat, že v systému nejsou chyby. Velký počet malých tříd zní dobře, ale třídy mohou být naprosto nelogicky strukturované a vzájemně silně závislé…

Mohou být přímé (to, co přímo změříme, např. počet defektů) nebo odvozené (vypočítané z přímých, např. hustota defektů; počet defektů na velikost produktu).

Kromě toho je užitečné rozlišit metriky na **objektivní** a **subjektivní**:
- **Objektivní metrika**: lze ji změřit přímo číselně nezávisle na vnímání (např. LOC – počet řádků kódu, počet tříd, počet funkcí, počet souborů).
- **Subjektivní metrika**: závisí na vnímání či dojmu (např. čas, který vývojář či uživatel potřebuje k porozumění nové funkcionalitě, nebo „obtížnost” pochopení datového modelu).

Často nás zajímají spíš poměry/odvozené metriky, např. poměr komentářů k celkovému počtu řádků, průměrná velikost metody, odchylky jednotlivých metrik v rámci projektu nebo mezi různými releasy.  
Metriky je ale nebezpečné používat k hodnocení výkonu vývojáře.

- **Lines of Code (LOC)**
- **(Non)Commented lines of code (CLOC)** – řádky obsahující komentář vs. bez komentáře
- **Počet tříd**
- **Počet funkcí/metod**
- **Počet packages**
- **Počet souborů**
- **Provázanost tříd** – kolik jiných tříd třída A volá (tight coupling)
- **Hloubka dědičnosti** – počet vrstev v hierarchii pod dědičností
- **Počet metod na třídu vážený složitostí** (váhovaná komplexita třídy; součet cyklomatických složitostí metod třídy)
- **Reakce na dotaz (Response for a Class)** – počet metod (vlastních či cizích tříd), které třída zavolá při zpracování jednoho requestu
- **Nedostatek soudržnosti (Lack of Cohesion)** – míra, jak metody třídy souvisí s jejími instančními proměnnými; nízká soudržnost znamená, že metody dělají často nesouvisející operace
- **Index udržitelnosti (Maintainability Index)** – vzorec kombinující LOC, cyklomatickou složitost (CC) a konstanta; používá se pro odhad, jak snadné bude kód udržovat
- **Cyklomatická složitost (CC)** – počet nezávislých cest ve zkoumané jednotce (funkce/metodě), které se mohou v běhu programu projevit. $CC = E - N + 2P$ kde E = počet hran (větví), N = počet vrcholů (nevětvených bloků) a P = počet vzájemně nepropojených grafů (obvykle P = 1 pro jednu funkci). Nejnižší hodnota CC je 1 (bez větvení).
- **SQALE (Software Quality Assessment Based on Lifecycle Expectations)** – metoda hodnocení technického dluhu na základě charakteristik projektu:
1. **Level 1**: základní charakteristiky (znovupoužitelnost, udržitelnost, bezpečnost, efektivita, spolehlivost…)</br>
2. **Level 2**: rozvětvení každé úrovně z Level 1 (např. udržitelnost → čitelnost kódu, pochopitelnost, konzistence názvů, standardy)</br>
3. **Level 3**: navázání konkrétních požadavků na úrovni kódu (např. „žádné metody delší než 30 řádků”, „žádný vícenásobný dědický cyklus”, „test coverage ≥ 80 %” atp.)  
   – Výstupem je komplexní index technického dluhu, který se skládá z jednotlivých sub-indexů (např. STI – Testability, SRI – Reliability atd.).

Často nás tedy zajímají odvozené metriky (př.: hustota defektů = počet defektů / velikost produktu; procento komentářů z celkového počtu řádků; průměrná velikost třídy či metody; standardní odchylka v rámci projektu/mezi releasy).

> **Poznámka:** Nezapomeňte, že výše uvedené metriky jsou pouze číselným odrazem kvality. Například 100 % code coverage neznamená, že testy testují všechny relevantní scénáře ⇒ metrika za 100 % nemusí odrážet skutečné riziko.

## Taktiky pro zajištění kvality (pro jednotlivé atributy)

- **Udržitelnost (maintainability)** 
  - refaktoring na koherentní jednotky, aby bylo místo nutné změny minimální a snadno lokalizovatelné,
  - separace dat od logiky (aby bylo možné jednotku nahradit jinou),
  - decoupling (závislosti na rozhraních, namísto na implementacích)
- **Výkonnost**
    - kešování
    - paralelismus
    - asynchronní komunikace/zpracování
    - detekce a mitigace bottlenecků
    - používat profiler
- **Spolehlivost**
    - detekce a náprava zdrojů nespolehlivosti
    - kontrolní mechanismy pro zajištění spolehlivosti
    - vhodné ošetření chyb
    - automatický reporting neočekávaných chyb
    - timeout po requestu
    - monitorování, logování, sběr událostí
    - pravidelné snapshoty a rollback v případě pádu, např. při selhání odeslání formuláře přesměrovat na předvyplněný formulář (předcházet frustraci usera)
    - transakce
    - kontrola vstupů na každé úrovni
    - odstranění single point of failure
- **Testovatelnost**
    - separace dat a logiky
    - odstranění globálního stavu
    - clean kod, KISS, dependency separation
- **Škálovatelnost**
    - refaktoring na jednodušší, samostatně nasaditelné jednotky
    - extrakce dat pro umožnění paralelizace jednotek
    - extrakce a samostatné nasazení subsystému
    - distribuce a/nebo replikace dat (db bývá bottleneck, ostatní věci lze snadněji paralelizovat)
- **Bezpečnost**
    - detekce a oprava chyb
    - použití šifrované komunikace
- **Použitelnost**
    - zlepšení UX
    - použití taktik pro zlepšení výkonnosti/škálovatelnosti (když je to pomalé)

## Clean Code

Čitelný, snadno pochopitelný. Kód bývá mnohem více čten než psán, proto je důležité, aby byl srozumitelný, čas vývojářů
je drahý. Klíčové je:

- **Jasné pojmenovávání** reflektující doménu problému, dostatečně výstižné (a ne příliš dlouhé či generické, viz Java).
  V ideálním případě by mělo být sebevysvětlující a komentáře by neměly být potřeba, ALE i tak jsou komentáře fajn pro
  vysvětlení myšlenky, nebo shrnutí, co má daná funkce dělat
    - důležitá je konzistence napříč codebase (ideálně stavěná na standardech daného jazyka)
    - pokud vrací bool, pojmenuj to `has*()` nebo `is*()`
    - struktury jsou podstatná jména, metody začínají slovesem (nebo se jedná o getter v rustu)
    - veřejné API (public) jednotky by mělo být jasné a jednoduché, interně (private) se mohou používat delší názvy
      metod, když je díky tomu jasnější, k čemu slouží
- **Rozumná velikost jednotek** - ideálně krátké funkce, jednoduché třídy... single responsibility principle. Obsah
  jednotky by měl reflektovat její název
- **Užívání standardů** jazyka/technologie

Dále se řídí principy:

### Don't repeat yourself (DRY) princip

Každá informace by měla být v systému jednoznačně definována na jediném místě:

- Např. dokumentaci generujeme ze zdrojáku, abychom neměli více sources of truth
- Např. definujeme schéma (prisma), ze kterého vygenerujeme jak SQL tabulky, tak struktury pro náš jazyk
- Např. vytáhneme sdílenou funkcionalitu do vlastní funkce
- ... platí na vše, co může být v systému duplikováno (ale i v procesech, třeba opakované manuální spouštění testů =>
  automatizovat)

### Keep it simple stupid (KISS) princip

- Jednoduchost před výkonem
- Nejlépe fungují systémy, které jsou co nejjednodušší
- Není důvod používat složité techniky na jednoduché problémy

### You Ain't Gonna Need It (YAGNI)

- Nezabýváme se tvorbou něčeho, co nebudeme potřebovat (např. neděláme přílišné abstrakce pro podporu možné budoucí
  funkcionality, pokud to není nutné)
- Je lepší věc udělat jednoduše a pak ji snadno upravit, než ji udělat univerzálně, abychom pak zjistili, že nás
  nenapadl nějaký edge case a musíme to stejně celé přepsat. Vývoj postupuje po malých krůčcích.

## SOLID

- **Single responsibility**
    - každá třída by měla mít pouze jednu zodpovědnost, a.k.a. pro každou třídu by měl být pouze jeden důvod, proč by se
      měla změnit (např. FileReader by se měl starat pouze o čtení ze souboru, ne o zpracovávání čtených dat. Pouze
      změna způsobu čtení ze souboru může zapříčinit, že musíme měnit FileReader)
      => nižší provázanost (závislosti) tříd, vyšší koheze (zaměřenost na jednu věc), flexibilnější kód...

- **Open/closed principle**
    - Otevřeno pro rozšíření, uzavřeno pro modifikaci, preferujeme přidávání nové funkcionality před změnou zdrojového
      kódu/binárky toho, co už máme
      => menší šance, že něco rozbijeme, na nových třídách nic nezávisí
    - používá se implementace rozhraní/abstraktní třídy
    - dodržování OCP způsobuje vyšší komplexitu (a třeba v rustu trochu ubírá výkon díky nutnosti dynamic dispatch),
      takže je potřeba ho používat obezřetně a jen tam, kde se často mění/přidává funkcionalita

- **Liskov substitution principle**
    - instance tříd by měly být nahraditelné jejich podtřídami, aniž by došlo k narušení chování systému - všechny podtřídy by měly dodržovat kontrakty nadtříd a neměly by odstraňovat chování nadtříd
    - problém je, když musíme explicitně ověřovat, o jaký podtyp se jedná - toto by měl řešit polymorfismus
    - pokud dvě třídy sdílí mnoho funkcionality, ale nejsou nahraditelné, je vhodné je upravit na podtřídy nové třídy obsahující sdílené chování
    - nedodržení lsp -> narušení polymorfysmu
    - follow robustness principle for typesafe variance:
      - be conservative in what you do, be liberal in what you accept from others
      - contravariantni parametry metod u podtrit: musi prijmat typ, ktere bere nadtrida nebo obecnější
      - covariantni navratove typy metod u podtrit: musi vracet typ, ktery vraci nadtrida nebo konkrétnější
      - nevyhazovat zadne nove vyjimky v podtridach, ktere nejsou v nadtride
    - [super video k LSP](https://www.youtube.com/watch?v=7hXi0N1oWFU)

- **Interface segregation principle**
    - klienti kódu by neměli být závislí na metodách, které nepoužívají, a.k.a. dělej malá a jednoduchá rozhraní namísto
      velkých
    - např. chci v rustu převést strukturu na string. Jediné co proto musím udělat je zajistit implementaci Display
      traitu (a ničeho jiného).

- **Dependency inversion**
    - moduly by měly záviset na abstrakcích (rozhraní), ne na konkrétních implementacích
    - snižuje se tím provázanost modulů, je možné poskytnout vlastní implementaci či mockovat
    - konstruktor by měl přijímat vše, na čem struktura závisí, ne si vytvářet zdroje sám (např. repo si nemá tvořit
      připojení do databáze, ale má být předáno v konstruktoru) = dependency injection konstruktorem

## Refaktoring

Úprava modulu takovým způsobem, aby se nezměnilo jeho externí chování, ale pouze došlo ke zlepšení jeho interní
struktury/modifikovatelnosti...

- Před refaktoringem je důležité mít chování solidně pokryto testy, abychom nezpůsobili nechtěnou změnu
- Během refaktoringu neděláme nic jiného (žádná nová funkcionalita)
- Techniky (některé editory je podporují, což usnadňuje práci a je pravděpodobně spolehlivější):
    - **Extrakce funkce** - kus kódu funguje jako jednotka/potřeboval by komentář => vytáhni ho do funkce, dej tomu
      přiléhající jméno, bude možné to použít na více místech
    - **Inline funkce** - opak výše, vhodné pro triviální situace jako `isMoreThanFiveEven(x)`
    - **Nahrazení funkce metodou struktury** - fajn, když funkce používá ranec proměnných => stanou se fieldy struktury
    - **Move method/field** - z jedné do jiné struktury, pokud to dává smysl (třeba doménově)
    - **Extrakce/inline třídy** - z třídy obsahující množinu polí, která jsou related, vytáhneme nový objekt, který bude
      původní třída obsahovat/nebo naopak pro inline
    - **Early return** - obecně chceme, aby funkce popisovala správný/bezchybný tok programu. Pokud při zpracování
      funkce objevíme chybu ve vstupních datech, hodíme tam return. V takových případech nepoužíváme `if-else`, ale
      `if return`
    - **Rename** cokoliv
    - **Seskupení mnoha parametrů do struktury**

Kód, který se dobře čte a udržuje nemusí být ten nejrychlejší/nejefektivnější (abstrakce mohou něco stát). Obvykle nám
mírné snížení výkonu za vyšší čitelnost nevadí, ale nemusí to být vždy pravda.

## Testování

= proces evaluace, zda systém splňuje specifikované požadavky... což se snadněji řekne, než dělá

- V praxi je testování z pravidla nekompletní. Testováním odhalujeme chyby, ale nedokazujeme bezchybnost.
- Každý test by měl testovat pouze jednu věc/vlastnost/feature, ideální je spousta malých testů, díky čemuž můžeme
  snadno identifikovat zdroj problému.
- Ideálně by měl testování provádět někdo jiný, než autor testovaného kódu

- **Whitebox (strukturální)** - vidíme zdrojový kód a můžeme vstupy testů cílit na spouštění kritických míst (off-by-one
  error, zero division...)
    - např. unit, integration, performance tests
- **Blackbox (funkcionální)** - nevidíme co se děje uvnitř systému, pouze sledujeme vstupy a výstupy
    - např. acceptance tests, system tests

- Pokud narazíme na chybu, pro kterou nebyl test, je důležitá nejen oprava, ale i přidání (ideálně automatizovaného)
  testu, aby se chyba už nemohla opakovat
- **Regresní testování** - sledujeme, zda změny v systému nepřinesly pády (automatizovaných) testů
- **Smoke testy** - sledujeme, zda vybrané kritické funkce fungují v novém prostředí. Pokud ne, nemá vůbec cenu
  nasazovat a testovat další věci
- **Sanity testy** - jako smoke, ale spouští se pro ověření nápravy chyb/přidání funkcionality
- **A/B testování** - používáme dvě varianty a sledujeme, která je úspěšnější (obvykle při testování UI)
- :haha: v praxi někteří experti praktikují melounové testování pro zvýšení test coverage, zvenku zelené, uvnitř
  červené :haha:

- Kvalita testů lze ověřit mutačním testováním. Do aplikace zavedeme defekty (mutací zdrojového kódu, lze automatizovat
  třeba negací operátoru, off-by-one, vynechání volání...) a sledujeme, kolik jich bylo odhaleno testy => pokud něco
  prošlo, může jít o kandidáta na další testy
- Některé situace jsou pro náš produkt rizikovější (lze odhadnout při analýze), než ostatní - na ty bychom se měli
  zaměřit při testování
- Vstupy testů vhodně rozdělujeme na kategorie (např. <0, 0, >0), z každé vybereme pár reprezentantů (abychom nemuseli
  testovat úplně každou hodnotu)
- Typy pokrytí testy jsme popsali v [pokrytí testy](#pokrytí-testy)

Testování si můžeme usnadnit tím, že v systému modelujeme nevalidní stavy jako nereprezentovatelné (rust enum <3,
builder pattern, stavový automat...)

### Pokrytí testy

Můžeme sledovat různá kritéria, pokrytí znamená, že danou cestou kódu prošel aspoň jeden test, metrika je obvykle v
procentech:

- **Line/statement coverage** - pokryté řádky/výrazy
- **Function coverage** - pokryté funkce/metody, jde o to, zda byla aspoň jednou zavolána
- **Branch coverage** - pokryté logické větve programu
- **Condition coverage** - každá boolean podmínka byla vyhodnocena jako true i false

Mnohdy není 100% pokrytí možné (pokud třeba někde něco redundantně testujeme, better be safe than sorry) a zároveň 100%
pokrytí neznamená bezchybnost.

Některé části kódu je mnohem těžší pokrýt, než jiné.

Může pomoct hledat části kódu, které jsou neotestované, ale o kvalitě testů se toho moc nedozvíme.

### Jednotkové (unit) testy

Validace, že se izolovaná jednotka kódu (funkce/třída) chová tak, jak bychom očekávali:

- White box
- Testy jsou automatizované, rychlé, jednoduché, čitelné, deterministické, každý testuje jednu jedinou věc
- Izolujeme jednotku od zbytku systému pomocí *test doubles*, nafejkovaných závislostí:
    - **dummy objekt** - nikdy se nepoužije, ale je potřeba třeba jako parametr
    - **fake objekt** - jen pro účely testů, jednoduchý, ale v praxi nepoužitelný (např. in-memory db)
    - **stub** - vrací vždy stejnou věc
    - **spy** - je schopen si zapamatovat, jak a s čím byl volán (např. volala se metoda odeslání mailu s tímto obsahem)
    - **mock** - předprogramovaný objekt (když tě někdo zavolá s parametrem A, uděláš toto, jinak něco jiného)
- **AAA** - arrange (příprava), act (provedení testovaného chování), assert (ověření) - tři fáze každého testu, act by
  měl být co nejkratší
- Např. cargo test, jest, junit
- Pokročilejší techniky zahrnující analýzu zdrojového kódu a následné vygenerování vstupních hodnot (symbolic
  execution), případně formální verifikace využívající matematických důkazů, model checking...

### Integrační testy

- Sledují, zda spolu jednotky interagují tak, jak bychom očekávali
- Pomalejší, větší a složitější, než unit testy
- Black/white box
- Pro testování UI použijeme *Playwright* (dřív se používalo *Selenium*)

### Systémové testy

- Ověření, že systém splňuje specifikované požadavky
- Testují použitelnost, kapacitu, výkon, splnění funkcionality, bezpečnost...
- Benchmarking, penetrační testování, uživatelské testy...
- Lze automatizovat pomocí programem ovládaným prohlížečem (Playwright, dříve Selenium, Puppeteer)
- Black box

### Akceptační testy

- Ověření, že systém splňuje business požadavky a je připraven k vydání
- Může být ve formě odškrtávání políček s požadavky na systém, které zákazník předem určil
- Prováděny se zákazníkem
- Black box

### Test-driven development (TDD)

Skládá se z tří fází, red, green, blue, které iterativně aplikujeme. V každé části se snažíme docílit pouze jedné věci (
a ničeho jiného, holt počkáme do další fáze):

- **Red/test** - vytvoříme failující test pro co nejmenší část funkcionality, kterou chceme implementovat
- **Green/write** - implementujeme funkcionalitu co nejjednodušeji tak, aby test prošel (a zároveň nerozbil jiný test)
- **Blue/refactor** - upravíme implementaci tak, aby odpovídala standardům, aby byl kód hezký...

### Behaviour-driven development (BDD)

- Se zákazníkem sepíšeme chování systému jako jednotlivé scénáře
- Scénáře slouží vývojářům i testerům jako jednotky
- Např. gherkin, cucumber - konstrukty given, when a then (jako AAA) se používají pro definici scénářů v english-like
  jazyce srozumitelném zákazníkovi, tyto scénáře se pak objevují i v testech

## Ladění a testování výkonu

Cílem je identifikace a řešení případných problémů týkajících se rychlosti, odezvy a propustnosti systému, nalezení
hranic:

- **Load testing**
    - zátěžové testy, sledujeme jak systém zvládá dlouhodobější zátěž
- **Stress testing**
    - sledujeme, jak se systém vypořádává s krátkodobými výkyvy v zátěži (když najednou přijde spousta požadavků)

Běžící systém je také vhodné dlouhodobě monitorovat, abychom odhalili další slabá místa.

Výkon lze obecně zvýšit za cenu dalších atributů (například maintainability), proto je nutné volit správný kompromis pro
náš případ.

Např. Gatling, Siege, LoadRunner

## Proces řízení kvality ve vývoji softwarových systémů

Skládá se z:

- **Definice požadavků na sw kvalitu a plánování** - specifikace funkčních i nefunkčních požadavků, stanovení
  hodnotících kritérií, rizik, určení metrik, podrobný popis a rozvržení aktivit k zajištění kvality
- **Zajištění (assurance) sw kvality** - definice a kontrola procesů, které povedou k zajištění sw kvality a prevenci
  defektů (mimo jiné nastavení CI/CD)
- **Kontrola sw kvality** - kontrola, zda produkt/jeho části splňují požadavky (včetně požadavků na kvalitu) a jejich
  vývoj se řídí definovanými procesy, monitoring zda se držíme procesů a vytyčených cílů
- **Zlepšení kvality** - snaha zlepšit procesy, abychom docílili zlepšení kvality

## Notes

**Capability Maturity Model** - definuje úrovně vyspělosti organizace v kontextu zajištění kvality:

- **Level 1 Výchozí** - chaos, nepředvídatelná cena, plán
- **Level 2 Opakovatelný** - intuitivní, cena a kvalita jsou proměnlivé, plán je pod vědomou kontrolou, neformální
  metody & procedury
- **Level 3 Definovaný** - orientace na kvalitu, spolehlivé ceny a plány, stále nepředvídatelný výkon systému kvality
- **Level 4 Řízený** - měření, promyšlená a statisticky řízená kvalita produktu
- **Level 5 Optimalizující** - automatizace a zlepšení výrobního procesu, prevence chyb, inovace technologie

### Prevence problémů kvality

- Následování best practices a konvencí, obecných (SOLID, clean code) i pro danou technologii/jazyk (eslint, cargo fmt)
- Využití principů návrhových vzorů
- Techniky jako TDD, párové programování, code reviews
- Použití procesních standardů (ITIL), agilních technik (scrum, kanban)
- Automatizované testování, CI
- Komunikace, jednotný jazyk
- Fail-fast přístup - snažíme se detekovat problém ve vstupech, namísto abychom klidně akceptovali cokoliv a pak se
  divili při neočekávaném chování
- Design by contract - naše metody (zvlášť při tvorbě) mohou vyžadovat splnění určitého kontraktu (lze vynutit asserty),
  aby mohly poskytnout garance o výstupech. Je možné použít podmíněnou kompilaci a mít kontrakty třeba jen ve vývojovém
  prostředí (tím se ale můžeme připravit o přesné určení místa problému na produkci)

Nefunkční problémy kvality se řeší architekturou. Pro prevenci těchto problémů je možné vytvořit model systému a na něm
si simulačně ověřovat požadavky (např. schopnost obsloužit určitý počet požadavků za určitý čas) a případně odvodit
nároky na jednotlivé komponenty (třeba maximální dobu zpracování požadavku v daném komponentu).

Pro ověření kvality je také možné použít formální verifikaci (používá se třeba pro dokazování správnosti algoritmů).

### Detekce problémů kvality

- **Code reviews** (vzájemné mezi vývojáři), **inspections** (formální, je fajn použít formulář; ukazuje to přípravu, na
  nic se nezapomene a zároveň se odfiltrují zbytečnosti, nelpíme na stylu, řešíme správnost, dodržování standardů...)
- **(Automatizované) testování** (rust\cargo test)
- **Statická analýza** (rust\cargo clippy, borrow checker, sonarqube) - nespouštíme kód

### Špatný kód

- Pomíchané úrovně abstrakce
- Nízká koheze (megatřídy, dlouhé funkce...)
- Kruhové závislosti (je pak závislost na implementaci, blbě se sleduje flow a vztahy, blbě se to testuje, udržuje a
  škáluje)
- Duplikace kódu
- Spousta parametrů
- Blbé názvy
- Dělání věcí příliš "chytře", když to není nutné
- Nedodržování standardů/vhodných konstruktů jazyka
- Magické konstanty

#### Code smells a řešení

!Jednotlivé taktiky mohou být vzájemně v rozporu, je potřeba si určit, čeho chceme docílit! (např. udržitelnost vs
výkon)

- **Udržitelnost**
    - příliš brzké optimalizace => nejdřív profiluj, pak případně optimalizuj
    - přílišná flexibilita => snaž se o jednoduchost, pak případně rozšiřuj
    - snaha o moc chytré řešení => stavební základy by měly být co nejjednodušší
    - nepoužívání standardů, principů návrhových vzorů
    - nízká modularizace
- **Výkonnost**
    - redundantní práce => kešování, memoizace, bottom-up approach dynamického programování
    - sekvenční zpracování/hledání => binární hledání, chytřejší algoritmy, práce se seřazenými kolekcemi, paralelizace
      go brrrrrr
    - dlouhé kritické sekce (ve vícevláknových programech) => minimalizujeme kritickou sekci, může být lepší použít více
      zámků
    - aktivní čekání => async zpracování, necháme se notifikovat až operace skončí...
- **Spolehlivost**
    - nevalidujeme vstupní data, slepá důvěra
    - špatný error/exception handling
    - nepředpokládáme, že by funkce mohl někdo zavolat v jiném pořadí
    - přílišný hypetrain, používáme technologie, kterým úplně nerozumíme
    - absence logování => loguj, je fajn vědět, co se v systému dělo před pádem
    - snadný pád celého systému kvůli jedné části => nasaď více služeb, implementuj restart/recover, automatické
      přepnutí se na jinou, funkční službu
- **Testovatelnost**
    - globální stav, proměnné
    - schovávání závislostí; je lepší provést dependency injection, než sázet na předchozí volání `init()` funkce
      pracující s globálním stavem
    - komunikace mezi jednotkami, které by neměly komunikovat => SOLID
    - nutnost hacky solutions, abychom vůbec mohli testovat => SOLID
    - nedeterminismus (závislost na čase, náhodnosti, globálním stavu, databázi... např. bacha na iteraci přes rust
      std::collections::HashMap, elementy jsou náhodně seřazené)
    - neoddělujeme inicializační a aplikační logiku
- **Škálovatelnost**
    - monolitická aplikace, distribuce může zvýšit výkon/kapacitu, ale bacha na nutný režijní overhead, těžší testování,
      nasazování, bezpečnost...

### Sledování problémů kvality

- Issue tracking
- Správa technického dluhu (tracking, vyhrazení času na jeho nápravu)
