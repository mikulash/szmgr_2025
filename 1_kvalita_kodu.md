# Kvalita kódu

> Kvalita ve vývoji softwarových systémů, atributy kvality a softwarové metriky. Taktiky pro zajištění kvality na úrovni jednotlivých atributů kvality. Principy Clean Code a SOLID, refaktoring kódu. Testování kódu, jednotkové testy, integrační testy, uživatelské a akceptační testy. Ladění a testování výkonu. Proces řízení kvality ve vývoji softwarových systémů. Příklady z praxe pro vše výše uvedené. (PV260, PA017, PA103)

1. [Kvalita ve vývoji softwarových systémů, atributy kvality a softwarové metriky (1/6)](#kvalita-ve-vývoji-softwarových-systémů-atributy-kvality-a-softwarové-metriky-16)
2. [Taktiky pro zajištění kvality na úrovni jednotlivých atributů kvality (2/6)](#taktiky-pro-zajištění-kvality-na-úrovni-jednotlivých-atributů-kvality-26)
3. [Principy Clean Code a SOLID, refaktoring kódu (3/6)](#principy-clean-code-a-solid-refaktoring-kódu-36)
4. [Testování kódu, jednotkové testy, integrační testy, uživatelské a akceptační testy (4/6)](#testování-kódu-jednotkové-testy-integrační-testy-uživatelské-a-akceptační-testy-46)
5. [Ladění a testování výkonu (5/6)](#ladění-a-testování-výkonu-56)
6. [Proces řízení kvality ve vývoji softwarových systémů (6/6)](#proces-řízení-kvality-ve-vývoji-softwarových-systémů-66)

## Kvalita ve vývoji softwarových systémů, atributy kvality a softwarové metriky (1/6)

### Kvalita ve vývoji softwarových systémů

- Důležitý aspekt při vývoji sw systémů
- Kvalita je často definována jako **schopnost produktu dostát požadavkům** => je důležité si určit, co jsou požadavky
- Kvalita se může lišit podle hlediska:
  - **Uživatelské hledisko** - použitelnost, spolehlivost, výkon, přesnost, bezpečnost
  - **Z pohledu vývojáře** - modularita, komplexita, pochopitelnost, testovatelnost
  - **Z pohledu managera (long term)** - schopnost sw se adaptovat na změny, znovupoužitelnost, udržitelnost, škálovatelnost
  - **Zákaznické požadavky** a.k.a. externí kvalita (použitelnost, přesnost/správnost, spolehlivost, bezpečnost, výkon...)
  - Abychom dostáli těmto ^, je třeba, aby šel vývoj snadno, aby se produkt dal jednoduše dlouhodobě udržovat (byl snadný modifikovat/rozšířit), a aby nebyl zbytečně drahý (skrz náklady na provoz i cenu úprav). Toho docílíme dodržováním **interní kvality produktu** (modularita, jednoduchost jednotek, testovatelnost, přizpůsobitelnost změnám, čitelnost kódu, znovupoužitelnost, škálovatelnost, přenositelnost, udržitelnost, dodržování standardů...)
- Špatná externí kvalita je často symptomem špatné interní kvality produktu (opravy chyb trvají dlouho, systém je pomalý... ale nemusí to být vždy pravda, třeba jen máme slabší UI)

### Atributy kvality

Za nejdůležitější atributy kvality kódu se považují:

- **Udržitelnost (maintainability)** = snadnost úprav bez technického dluhu
- **Výkonnost** = reakční doba systému (a efektivita využití zdrojů)
- **Spolehlivost** = pravděpodobnost bezchybného fungování po určitou dobu
- **Testovatelnost** = jak snadno (a co všechno) lze systém testovat
- **Škálovatelnost** = schopnost systému zpracovat větší množství dat/uživatelů...
- **Bezpečnost** = jak je systém odolný vůči útokům
- **Použitelnost** = snadnost používání systému a jednoduchost učení se práce s ním, správná funkcionalita (obvykle samostatný bod)

### Udržitelnost (maintainability)
- refaktoring na koherentní jednotky, aby bylo místo nutné změny minimální a snadno lokalizovatelné,
- separace dat od logiky (aby bylo možné jednotku nahradit jinou),
- decoupling (závislosti na rozhraních, namísto na implementacích)

#### Výkonnost
- kešování
- paralelismus
- asynchronní komunikace/zpracování
- detekce a mitigace bottlenecků
- používat profiler

#### Spolehlivost
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

#### Testovatelnost
- separace dat a logiky
- odstranění globálního stavu
- clean kod, KISS, dependency separation

#### Škálovatelnost
- refaktoring na jednodušší, samostatně nasaditelné jednotky
- extrakce dat pro umožnění paralelizace jednotek
- extrakce a samostatné nasazení subsystému
- distribuce a/nebo replikace dat (db bývá bottleneck, ostatní věci lze snadněji paralelizovat)

#### Bezpečnost
- detekce a oprava chyb
- použití šifrované komunikace

#### Použitelnost
- zlepšení UX
- použití taktik pro zlepšení výkonnosti/škálovatelnosti (když je to pomalé)


### Softwarové metriky

Měřitelné aspekty sw systému (počet řádků kódu, pokrytí testy, cyklomatická složitost…), které nám dávají informace o celkovém obrazu, ale může být netriviální je vhodně interpretovat.

Např. 100 % pokrytí testy nemusí znamenat, že v systému nejsou chyby. Velký počet malých tříd zní dobře, ale třídy mohou být naprosto nelogicky strukturované a vzájemně silně závislé…

Mohou být přímé (to, co přímo změříme, např. počet defektů) nebo odvozené (vypočítané z přímých, např. hustota defektů; počet defektů na velikost produktu).

Kromě toho je užitečné rozlišit metriky na **objektivní** a **subjektivní**:
- **Objektivní metrika**: lze ji změřit přímo číselně nezávisle na vnímání (např. LOC – počet řádků kódu, počet tříd, počet funkcí, počet souborů).
- **Subjektivní metrika**: závisí na vnímání či dojmu (např. čas, který vývojář či uživatel potřebuje k porozumění nové funkcionalitě, nebo „obtížnost" pochopení datového modelu).

Často nás zajímají spíš poměry/odvozené metriky, např. poměr komentářů k celkovému počtu řádků, průměrná velikost metody, odchylky jednotlivých metrik v rámci projektu nebo mezi různými releasy, hustota defektů, atd. Metriky je ale nebezpečné používat k hodnocení výkonu vývojáře.

**Konkrétní metriky:**
- **Lines of Code (LOC)** - může být hrubým odhadem úsilí, užitečné pro porovnání napříč releasy
- **(Non)Commented lines of code (CLOC)** – řádky obsahující komentář vs. bez komentáře
- **Počet tříd**
- **Počet funkcí/metod**
- **Počet packages**
- **Počet souborů**
- **Provázanost tříd** – kolik jiných tříd třída A volá (tight coupling), třídy jsou závislé, pokud metoda A používá metody třídy B
- **Hloubka dědičnosti** – počet vrstev v hierarchii pod dědičností, čím hlouběji je třída ve stromu dědičnosti, tím komplexnější nejspíše je
- **Cyklomatická složitost (CC)** – počet nezávislých cest ve zkoumané jednotce (funkce/metodě), které se mohou v běhu programu projevit. $CC = E - N + 2P$ kde E = počet hran (větví), N = počet vrcholů (nevětvených bloků) a P = počet vzájemně nepropojených grafů (obvykle P = 1 pro jednu funkci). Nejnižší hodnota CC je 1 (bez větvení). Čím větší komplexita, tím obtížnější testovatelnost.
- **Váhovaná komplexita třídy** - součet cyklomatických složitostí metod třídy
- **Reakce na dotaz** - kolik metod (cizích nebo svých tříd) bude třída A volat při zpracování requestu
- **Nedostatek soudržnosti** - jak souvisí metody třídy s jejíma instančníma proměnnýma

#### **SQALE (Software Quality Assessment Based on Lifecycle Expectations)**
– metoda hodnocení technického dluhu na základě charakteristik projektu:
1. **Level 1**: základní charakteristiky (znovupoužitelnost, udržitelnost, bezpečnost, efektivita, spolehlivost…)
2. **Level 2**: rozvětvení každé úrovně z Level 1 (např. udržitelnost → čitelnost kódu, pochopitelnost, konzistence názvů, standardy)
3. **Level 3**: navázání konkrétních požadavků na úrovni kódu (např. „žádné metody delší než 30 řádků", „žádný vícenásobný dědický cyklus", „test coverage ≥ 80 %" atp.) – Výstupem je komplexní index technického dluhu, který se skládá z jednotlivých sub-indexů (např. STI – Testability, SRI – Reliability atd.).

## Taktiky pro zajištění kvality na úrovni jednotlivých atributů kvality (2/6)

Problémy s kvalitou a jejich zpracování můžeme rozlišit na různých úrovních:

**Prevence:**
- Best practices pro programování - clean code, SOLID, návrhové vzory, párové programování, konvence
- Zajištění kvality procesy - V-model, TDD

**Detekce:**
- Testování požadavků (manual, automatic)
- Nefunkční požadavky a testy (výkon - perf testing, bezpečnost - penetrační testing)
- Inspekce kódu, code reviews
- Statická analýza (SonarQube)

**Náprava:**
- Funkční požadavky → bug fixing
- Spolehlivost → fault-tolerance - mechanismy pro odolnost proti selhání
- Výkon → paralelizace, využití zdrojů, odstranění "bottlenecků"
- Bezpečnost → odstranění jediných bodů selhání, známých závislostí s bezpečnostními nedostatky
- Udržitelnost → refaktoring, návrhové vzory

**Trackování:**
- Trackování problémů
- Verzování, release management
- Sledování technického dluhu, zastaralých komponent

**Poznámka:** Některé z uvedených taktik jsou konfliktní - nemůžeme mít všechno (např. lepší bezpečnost může ohrozit použitelnost).


## Principy Clean Code a SOLID, refaktoring kódu (3/6)

### Clean Code

Čitelný, snadno pochopitelný. Kód bývá mnohem více čten než psán, proto je důležité, aby byl srozumitelný, čas vývojářů je drahý. Klíčové je:

- **Jasné pojmenovávání** reflektující doménu problému, dostatečně výstižné (a ne příliš dlouhé či generické, viz Java). V ideálním případě by mělo být sebevysvětlující a komentáře by neměly být potřeba, ALE i tak jsou komentáře fajn. hlavně konzistence v codebase
  - **Třídy**: dodržovat SRP, pojmenovat dle účelu, vyhnout se generickým pojmenováním → vede ke kompaktním specifickým třídám
  - **Metody**:
    - pokud vrací bool, pojmenuj to `has*()` nebo `is*()`
    - používat slovesa, dodržet konvenci pro getters/setters, žádné side-effects
    - boolean parametry metod jsou bad practice (`setAdminStatus(true/false)` → `[grant/revoke]AdminRights()`)
    - nepoužívat synonyma pro rozdílné akce (add/append → jaký je rozdíl? nikdo neví)
    - krátké názvy public metod, dlouhé private
  - **Proměnné**: velký scope → dlouhé jméno, malý scope → krátké
  - struktury jsou podstatná jména, metody začínají slovesem (nebo se jedná o getter v rustu)
  - veřejné API (public) jednotky by mělo být jasné a jednoduché, interně (private) se mohou používat delší názvy metod, když je díky tomu jasnější, k čemu slouží
- **Rozumná velikost jednotek** - ideálně krátké funkce, jednoduché třídy... single responsibility principle. Obsah jednotky by měl reflektovat její název
- **Užívání standardů** jazyka/technologie
- dodržovat best practices jazyka/technologie

Dále se řídí principy:

#### Don't repeat yourself (DRY) princip

Každá informace by měla být v systému jednoznačně definována na jediném místě. Platí na vše, co může být v systému duplikováno (ale i v procesech, třeba opakované manuální spouštění testů => automatizovat)

- Např. dokumentaci generujeme ze zdrojáku, abychom neměli více sources of truth
- Např. definujeme schéma (prisma), ze kterého vygenerujeme jak SQL tabulky, tak struktury pro náš jazyk
- Např. vytáhneme sdílenou funkcionalitu do vlastní funkce

#### Keep it simple stupid (KISS) princip

- Jednoduchost před výkonem
- Nejlépe fungují systémy, které jsou co nejjednodušší
- Není důvod používat složité techniky na jednoduché problémy

#### You Ain't Gonna Need It (YAGNI)

- Nezabýváme se tvorbou něčeho, co nebudeme potřebovat (např. neděláme přílišné abstrakce pro podporu možné budoucí funkcionality, pokud to není nutné)
- Je lepší věc udělat jednoduše a pak ji snadno upravit, než ji udělat univerzálně, abychom pak zjistili, že nás nenapadl nějaký edge case a musíme to stejně celé přepsat. Vývoj postupuje po malých krůčcích.

### SOLID

#### Single responsibility
- každá třída by měla mít pouze jednu zodpovědnost, a.k.a. pro každou třídu by měl být pouze jeden důvod, proč by se měla změnit (např. FileReader by se měl starat pouze o čtení ze souboru, ne o zpracovávání čtených dat. Pouze změna způsobu čtení ze souboru může zapříčinit, že musíme měnit FileReader) => nižší provázanost (závislosti) tříd, vyšší koheze (zaměřenost na jednu věc)

#### Open/closed principle
- Otevřeno pro rozšíření, uzavřeno pro modifikaci, preferujeme přidávání nové funkcionality před změnou zdrojového kódu/binárky toho, co už máme => menší šance, že něco rozbijeme, na nových třídách nic nezávisí
- používá se implementace rozhraní/abstraktní třídy
- dodržování OCP způsobuje vyšší komplexitu, takže je potřeba ho používat obezřetně a jen tam, kde se často mění/přidává funkcionalita

#### Liskov substitution principle
- instance tříd by měly být nahraditelné jejich podtřídami, aniž by došlo k narušení chování systému - všechny podtřídy by měly dodržovat kontrakty nadtříd a neměly by odstraňovat chování nadtříd
- potomci nesmějí:
  - "odstraňovat" nebo omezovat chování jejich rodičů
  - porušovat základní invarianty třídy - neměnné vlastnosti
  - požadovat volání specifických funkcí pro zjištění, zda-li se jedná o potomka nebo rodiče
  - porušovat jakékoliv předem stanovené kontrakty jejich rodičovskou třídou
- problém je, když musíme explicitně ověřovat, o jaký podtyp se jedná (`if instanceOf - then` → maintenance nightmare) - toto by měl řešit polymorfismus
- nedodržení lsp -> narušení polymorfysmu
- držet se robustness principu pro typesafe variance:
  - _"be conservative in what you do, be liberal in what you accept from others"_
  - contravariantni parametry metod u podtrid: musi prijmat typ, ktere bere nadtrida nebo obecnější
  - covariantni navratove typy metod u podtrid: musi vracet typ, ktery vraci nadtrida nebo konkrétnější
  - nevyhazovat zadne nove vyjimky v podtridach, ktere nejsou v nadtride
  - detailnější video k ty contra/covariance a LSP [here](https://www.youtube.com/watch?v=7hXi0N1oWFU)

#### Interface segregation principle
- klienti kódu by neměli být závislí na metodách, které nepoužívají, a.k.a. dělej malá a jednoduchá rozhraní namísto velkých
- rozhraní třídy by mělo mít jen ty metody, které její klienti nejspíš budou používat v jednotných kontextech
- psát malé a soudržné rozhraní
- nedodržení → klienti používají jen zlomek třídy, při rozšíření/dědění musí implementovat spoustu "zbytečných" metod
- např. chci v rustu převést strukturu na string. Jediné co proto musím udělat je zajistit implementaci Display traitu (a ničeho jiného).

#### Dependency inversion
- moduly by měly záviset na abstrakcích (rozhraní), ne na konkrétních implementacích
- snižuje se tím provázanost modulů, je možné poskytnout vlastní implementaci či mockovat
- konstruktor by měl přijímat vše, na čem struktura závisí, ne si vytvářet zdroje sám (např. repo si nemá tvořit připojení do databáze, ale má být předáno v konstruktoru) = dependency injection konstruktorem

### Refaktoring

Úprava modulu takovým způsobem, aby se nezměnilo jeho externí chování, ale pouze došlo ke zlepšení jeho interní struktury/modifikovatelnosti...

- Před refaktoringem je důležité mít chování solidně pokryto testy, abychom nezpůsobili nechtěnou změnu
- Během refaktoringu neděláme nic jiného (žádná nová funkcionalita)
- **Kdy refaktorovat?** Když nevyvíjím → oddělit refactoring od developmentu, součást rutiny při TDD, při opravě bugu, po zavedené nové funkcionality, dlouhodobé plánované refaktorování
- **GRASP** - General Responsibility Assignment Software Principles → principy pro lepší design OOP kódu
- Techniky (některé editory je podporují, což usnadňuje práci a je pravděpodobně spolehlivější):
  - **Extrakce funkce** - kus kódu funguje jako jednotka/potřeboval by komentář => vytáhni ho do funkce, dej tomu přiléhající jméno, bude možné to použít na více místech
  - **Inline funkce** - opak výše, vhodné pro triviální situace jako `isMoreThanFiveEven(x)`
  - **Nahrazení mnoha parametrů funkce strukturou** - fajn, když funkce používá ranec proměnných => stanou se fieldy struktury
  - **Move method/field** - z jedné do jiné struktury, pokud to dává smysl (třeba doménově)
  - **Extrakce/inline třídy** - z třídy obsahující množinu polí, která jsou related, vytáhneme nový objekt, který bude původní třída obsahovat/nebo naopak pro inline
  - **Early return** - obecně chceme, aby funkce popisovala správný/bezchybný tok programu. Pokud při zpracování funkce objevíme chybu ve vstupních datech, hodíme tam return. V takových případech nepoužíváme `if-else`, ale `if return`
  - **Rename** cokoliv
  - **Seskupení mnoha parametrů do struktury**
  - **Udělat final parametry metod**
  - **Dlouhá složitá metoda** → vlastní objekt (třída)
  - **Odstranění prostředníka**
  - **Odstranit magické čísla**
  - **Zapouzdření vlastností**
  - **Guard clauses** → redukovat nesting

Kód, který se dobře čte a udržuje nemusí být ten nejrychlejší/nejefektivnější (abstrakce mohou něco stát). Obvykle nám mírné snížení výkonu za vyšší čitelnost nevadí, ale nemusí to být vždy pravda.

## Testování kódu, jednotkové testy, integrační testy, uživatelské a akceptační testy (4/6)

= proces evaluace, zda systém splňuje specifikované požadavky (IEEE: "Testing is the process of exercising or evaluating a system or system component by manual or automated means to verify that it satisfies specified requirements.")

**Terminologie:**
- **Defekt (defect)** - nedokonalost nebo porucha sw, kvůli které produkt nesplňuje požadavky  
  _Příklad: Funkce vrací špatný výsledek kvůli chybě v algoritmu._
- **Error** - lidská chyba produkující nesprávný výsledek  
  _Příklad: Vývojář omylem použije špatný operátor ve výrazu._
- **Selhání (failure)** - náhlá neschopnost produktu provádět požadovanou funkci  
  _Příklad: Aplikace spadne při pokusu uložit data._
- **Chyba (fault)** - projev erroru v software  
  _Příklad: Nesprávně inicializovaná proměnná způsobí nesprávné chování._
- **Bug** - synonymum pro defekt  
  _Příklad: Tlačítko v UI nefunguje podle očekávání._

**Principy testování:**
- **Sensitivita** - testy musí odhalit chybu/nedostatek vždy
- **Zvolit spolehlivá kritéria** - fail fast
- **Machine independent** - nezávislé na prostředí
- **Redundance** - jasně stanovit záměr
- **Omezení (restriction)** - usnadnění problému
- **Rozděl a panuj** - složité testovací problémy jdou usnadnit rozdělením prostoru vstupů
- **Viditelnost** - schopnost něco změřit, abychom něco testovali, musíme vědět, jak to má ideálně dopadnout
- **Zpětná vazba** - ladění procesu vývoje, poučit se z chyb

- V praxi je testování z pravidla nekompletní. Testováním odhalujeme chyby, ale nedokazujeme bezchybnost.
- Každý test by měl testovat pouze jednu věc/vlastnost/feature, ideální je spousta malých testů, díky čemuž můžeme snadno identifikovat zdroj problému.
- Ideálně by měl testování provádět někdo jiný, než autor testovaného kódu
- **Prioritizace testování na základě rizik** - nemůžeme otestovat všechno, prioritizace testování rizikových funkcionalit (risk = dopad + pravděpodobnost)
- Pokud narazíme na chybu, pro kterou nebyl test, je důležitá nejen oprava, ale i přidání (ideálně automatizovaného) testu, aby se chyba už nemohla opakovat

### Typy testování podle přístupu

- **Whitebox (strukturální)** - vidíme zdrojový kód a můžeme vstupy testů cílit na spouštění kritických míst (off-by-one error, zero division...)
  - např. unit, integration, performance tests
- **Blackbox (funkcionální)** - nevidíme co se děje uvnitř systému, pouze sledujeme vstupy a výstupy
  - např. acceptance tests, system tests

### Obecné typy testování

- **Regresní testování** - sledujeme, zda změny v systému nepřinesly pády (automatizovaných) testů
- **Smoke testy** - sledujeme, zda vybrané kritické funkce fungují v novém prostředí. Pokud ne, nemá vůbec cenu nasazovat a testovat další věci
- **Sanity testy** - jako smoke, ale spouští se pro ověření nápravy chyb/přidání funkcionality
- **A/B testování** - používáme dvě varianty a sledujeme, která je úspěšnější (obvykle při testování UI)
- :haha: v praxi někteří experti praktikují melounové testování pro zvýšení test coverage, zvenku zelené, uvnitř červené :haha:

- Kvalita testů lze ověřit **mutačním testováním**: do aplikace zavedeme defekty (mutací zdrojového kódu, např. negací operátoru, off-by-one, vynechání volání) a sledujeme, kolik jich bylo odhaleno testy. Pokud něco prošlo, může jít o kandidáta na další testy. Předpoklad je, že testy, které najdou mutanty, najdou i opravdové chyby. Mscore = Mkilled / (Mtotal - Meq), kde Meq jsou ekvivalentní mutanti (mutace oproti původnímu programu nezpůsobí chybu).
- Některé situace jsou pro náš produkt rizikovější (lze odhadnout při analýze), než ostatní - na ty bychom se měli zaměřit při testování
- Vstupy testů vhodně rozdělujeme na kategorie (např. <0, 0, >0), z každé vybereme pár reprezentantů (abychom nemuseli testovat úplně každou hodnotu)

Testování si můžeme usnadnit tím, že v systému modelujeme nevalidní stavy jako nereprezentovatelné (rust enum <3, builder pattern, stavový automat...)

### Pokrytí testy

Můžeme sledovat různá kritéria, pokrytí znamená, že danou cestou kódu prošel aspoň jeden test, metrika je obvykle v procentech:

- **Line/statement coverage** - pokryté řádky/výrazy
- **Function coverage** - pokryté funkce/metody, jde o to, zda byla aspoň jednou zavolána
- **Branch coverage** - pokryté logické větve programu
- **Condition coverage** - každá boolean podmínka byla vyhodnocena jako true i false

Mnohdy není 100% pokrytí možné (pokud třeba někde něco redundantně testujeme, better be safe than sorry) a zároveň 100% pokrytí neznamená bezchybnost.

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
- **AAA** - arrange (příprava), act (provedení testovaného chování), assert (ověření) - tři fáze každého testu, act by měl být co nejkratší
- Např. cargo test, jest, junit
- Pokročilejší techniky zahrnující analýzu zdrojového kódu a následné vygenerování vstupních hodnot (symbolic execution), případně formální verifikace využívající matematických důkazů, model checking...

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

Skládá se z tří fází, red, green, blue, které iterativně aplikujeme. V každé části se snažíme docílit pouze jedné věci (a ničeho jiného, holt počkáme do další fáze):

- **Red/test** - vytvoříme failující test pro co nejmenší část funkcionality, kterou chceme implementovat
- **Green/write** - implementujeme funkcionalitu co nejjednodušeji tak, aby test prošel (a zároveň nerozbil jiný test)
- **Blue/refactor** - upravíme implementaci tak, aby odpovídala standardům, aby byl kód hezký...

### Behaviour-driven development (BDD)

- Se zákazníkem sepíšeme chování systému jako jednotlivé scénáře
- Scénáře slouží vývojářům i testerům jako jednotky
- Např. gherkin, cucumber - konstrukty given, when a then (jako AAA) se používají pro definici scénářů v english-like jazyce srozumitelném zákazníkovi, tyto scénáře se pak objevují i v testech

## Ladění a testování výkonu (5/6)

Cílem je identifikace a řešení případných problémů týkajících se rychlosti, odezvy a propustnosti systému, nalezení hranic. Dynamické testování sw za cílem zjištění, jak se chová pod zátěží, jaké operace trvají nejdéle, jak by je šlo optimalizovat, co bere nejvíce výpočetního výkonu atp.

**Performance testing zahrnuje:**

### Load testing
- zátěžové testy, sledujeme jak systém zvládá dlouhodobější zátěž
- jak se bude systém chovat s předpokládaným počtem dotazů/uživatelů během určitého časového úseku
- verifikuje schopnost systému zvládat očekávanou zátěž

### Stress testing
- sledujeme, jak se systém vypořádává s krátkodobými výkyvy v zátěži (když najednou přijde spousta požadavků)
- jaký je horní limit systému, kolik toho zvládne, než začne odmítat požadavky atp, pomocí postupného zvyšování zátěže až po selhání
- hledáme potentiální ddos, security issues, korupci dat
- jak rychle se zvládne systém vrátit do normálu, identifikace bottlenecků v hw
- **Spike testing** - testování rychlého krátkého nárůstu na limitní kapacitu

### Soak/endurance testing
- narůstající počet uživatelů a požadavků v průběhu dlouhého časového úseku
- nejčastěji má za cíl odhalit memory leaks atp

### testing škálovatelnosti
- sledování narůstajícího využití resources s narůstajícím počtem požadavků
- měli bychom pozorovat +- přímou úměru

Běžící systém je také vhodné dlouhodobě monitorovat, abychom odhalili další slabá místa.

Výkon lze obecně zvýšit za cenu dalších atributů (například maintainability), proto je nutné volit správný kompromis pro náš případ.

**Nástroje:** jProfiler, jMeter, Gatling, Siege, LoadRunner, BlazeMeter

## Proces řízení kvality ve vývoji softwarových systémů (6/6)

**Software Quality Management (SQM)** je kolekce všech procesů, které zajišťují, že implementace produktů, služby a životního cyklu splňuje standardy kvality organizace a ostatních zúčastněných stran.

**Různé pohledy na kvalitu:**
- **Kvalita použití** - user experience
- **Externí kvalita** - projde to všemi testy a požadavky
- **Interní kvalita** - kvalita návrhu, udržovatelnost atp
- **Procesní kvalita** - je při vývoji správně postupováno?

**Proces řízení SQM zahrnuje:** procesy a jejich vlastníky, požadavky na procesy, metriky procesů, výstupy procesů a zpětná vazba.

Skládá se z:

### Definice požadavků na sw kvalitu a plánování (SQP)
- specifikace funkčních i nefunkčních požadavků, stanovení hodnotících kritérií, rizik, určení metrik, podrobný popis a rozvržení aktivit k zajištění kvality
- použití standardů, požadavky kvality, odhady a plánování aktivit, požadavky, scope, zdroje, risky, časový plán

### Zajištění (assurance) sw kvality (SQA)
- definice a kontrola procesů, které povedou k zajištění sw kvality a prevenci defektů (mimo jiné nastavení CI/CD)
- zajišťuje adekvátnost a průkaznost procesů, IEEE standardy

### Kontrola sw kvality (SQC)
- kontrola, zda produkt/jeho části splňují požadavky (včetně požadavků na kvalitu) a jejich vývoj se řídí definovanými procesy, monitoring zda se držíme procesů a vytyčených cílů
- procházení artefaktů procesů a kontrola, že odpovídají standardu v nejrůznějších rovinách (design, požadavky, omezení, ...), monitorování, plan-do-check-act

### Zlepšení kvality (SPI)
- snaha zlepšit procesy, abychom docílili zlepšení kvality
- zpětná vazba, zlepšení procesů a tím i dalších výstupů, zlepšit efektivitu, efektivnost, praktiky

## Notes

### Capability Maturity Model
Definuje úrovně vyspělosti organizace v kontextu zajištění kvality:

- **Level 1 Výchozí (ad hoc)** - chaos, nepředvídatelná cena, plán
- **Level 2 Opakovatelný (doing agile)** - intuitivní, cena a kvalita jsou proměnlivé, plán je pod vědomou kontrolou, neformální metody & procedury
- **Level 3 Definovaný (being agile)** - orientace na kvalitu, spolehlivé ceny a plány, stále nepředvídatelný výkon systému kvality
- **Level 4 Řízený (thinking agile)** - měření, promyšlená a statisticky řízená kvalita produktu
- **Level 5 Optimalizující (agile culture)** - automatizace a zlepšení výrobního procesu, prevence chyb, inovace technologie

**Další modely:**
- **SPICE** (Software Process Improvement and Capability Determination) - 5 kategorií, 24 procesů, 201 praktik
- **CMMI** - pokročilejší model
- **Six Sigma** - data based, eliminace defektů (definuj, měř, analyzuj, zlepši, kontroluj)

### Prevence problémů kvality

- Následování best practices a konvencí, obecných (SOLID, clean code) i pro danou technologii/jazyk (eslint, cargo fmt)
- Využití principů návrhových vzorů
- Techniky jako TDD, párové programování, code reviews
- Použití procesních standardů (ITIL), agilních technik (scrum, kanban)
- Automatizované testování, CI
- Komunikace, jednotný jazyk
- Fail-fast přístup - snažíme se detekovat problém ve vstupech, namísto abychom klidně akceptovali cokoliv a pak se divili při neočekávaném chování
- Design by contract - naše metody (zvlášť při tvorbě) mohou vyžadovat splnění určitého kontraktu (lze vynutit asserty), aby mohly poskytnout garance o výstupech. Je možné použít podmíněnou kompilaci a mít kontrakty třeba jen ve vývojovém prostředí (tím se ale můžeme připravit o přesné určení místa problému na produkci)

Nefunkční problémy kvality se řeší architekturou. Pro prevenci těchto problémů je možné vytvořit model systému a na něm si simulačně ověřovat požadavky (např. schopnost obsloužit určitý počet požadavků za určitý čas) a případně odvodit nároky na jednotlivé komponenty (třeba maximální dobu zpracování požadavku v daném komponentu).

Pro ověření kvality je také možné použít formální verifikaci (používá se třeba pro dokazování správnosti algoritmů).

### Detekce problémů kvality

- **Code reviews** (vzájemné mezi vývojáři), **inspections** (formální, je fajn použít formulář; ukazuje to přípravu, na nic se nezapomene a zároveň se odfiltrují zbytečnosti, nelpíme na stylu, řešíme správnost, dodržování standardů...)
- **(Automatizované) testování** (rust\cargo test)
- **Statická analýza** (rust\cargo clippy, borrow checker, sonarqube) - nespouštíme kód

### Špatný kód

- Pomíchané úrovně abstrakce
- Nízká koheze (megatřídy, dlouhé funkce...)
- Kruhové závislosti (je pak závislost na implementaci, blbě se sleduje flow a vztahy, blbě se to testuje, udržuje a škáluje)
- Duplikace kódu
- Spousta parametrů
- Blbé názvy
- Dělání věcí příliš "chytře", když to není nutné
- Nedodržování standardů/vhodných konstruktů jazyka
- Magické konstanty

#### Code smells a řešení

!Jednotlivé taktiky mohou být vzájemně v rozporu, je potřeba si určit, čeho chceme docílit! (např. udržitelnost vs výkon)

##### Udržitelnost
- příliš brzké optimalizace => nejdřív profiluj, pak případně optimalizuj
- přílišná flexibilita => snaž se o jednoduchost, pak případně rozšiřuj
- snaha o moc chytré řešení => stavební základy by měly být co nejjednodušší
- nepoužívání standardů, principů návrhových vzorů
- nízká modularizace

##### Výkonnost
- redundantní práce => kešování, memoizace, bottom-up approach dynamického programování
- sekvenční zpracování/hledání => binární hledání, chytřejší algoritmy, práce se seřazenými kolekcemi, paralelizace go brrrrrr
- dlouhé kritické sekce (ve vícevláknových programech) => minimalizujeme kritickou sekci, může být lepší použít více zámků
- aktivní čekání => async zpracování, necháme se notifikovat až operace skončí...

##### Spolehlivost
- nevalidujeme vstupní data, slepá důvěra
- špatný error/exception handling
- nepředpokládáme, že by funkce mohl někdo zavolat v jiném pořadí
- přílišný hypetrain, používáme technologie, kterým úplně nerozumíme
- absence logování => loguj, je fajn vědět, co se v systému dělo před pádem
- snadný pád celého systému kvůli jedné části => nasaď více služeb, implementuj restart/recover, automatické přepnutí se na jinou, funkční službu

##### Testovatelnost
- globální stav, proměnné
- schovávání závislostí; je lepší provést dependency injection, než sázet na předchozí volání `init()` funkce pracující s globálním stavem
- komunikace mezi jednotkami, které by neměly komunikovat => SOLID
- nutnost hacky solutions, abychom vůbec mohli testovat => SOLID
- nedeterminismus (závislost na čase, náhodnosti, globálním stavu, databázi... např. bacha na iteraci přes rust std::collections::HashMap, elementy jsou náhodně seřazené)
- neoddělujeme inicializační a aplikační logiku

##### Škálovatelnost
- monolitická aplikace, distribuce může zvýšit výkon/kapacitu, ale bacha na nutný režijní overhead, těžší testování, nasazování, bezpečnost...

### Sledování problémů kvality

- Issue tracking
- Správa technického dluhu (tracking, vyhrazení času na jeho nápravu)

[Go to the next question](./2_softwarove_inzenyrstvi.md)
