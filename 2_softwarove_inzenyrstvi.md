# Softwarové inženýrství

> Životní cyklus SW, proces vývoje a řízení softwarového vývoje. Metodika (Rational) Unified Process (UP, RUP), agilní metodiky a principy agilního vývoje SW. Nasazení a provoz softwarových systémů. Údržba softwarových systémů, znovupoužitelnost. Příklady z praxe pro vše výše uvedené. (PA017)

1. [Životní cyklus sw, proces vývoje a řízení softwarového vývoje (1/5)](#životní-cyklus-sw-proces-vývoje-a-řízení-softwarového-vývoje-15)
2. [Metodika (Rational) Unified Process (UP, RUP) (2/5)](#metodika-rational-unified-process-up-rup-25)
3. [Agilní metodiky a principy agilního vývoje SW (3/5)](#agilní-metodiky-a-principy-agilního-vývoje-sw-35)
4. [Nasazení a provoz softwarových systémů (4/5)](#nasazení-a-provoz-softwarových-systémů-45)
5. [Údržba softwarových systémů, znovupoužitelnost (5/5)](#údržba-softwarových-systémů-znovupoužitelnost-55)

## Životní cyklus sw, proces vývoje a řízení softwarového vývoje (1/5)

Vždy nějakým způsobem obsahuje fáze analýza, návrh, implementace, testování a provoz (včetně nasazení). Rozdíly jsou v tom, zda a jakým způsobem dělíme projekt na uchopitelnější části. Důsledkem toho jsou i různé způsoby, jakým se vývoj řídí.

Existuje několik základních modelů:

### Vodopádový model

Skládá se z:
- **Analýza**
    - sběr požadavků klienta
    - Je důležité rozlišovat mezi tím, co říká že potřebuje, a co skutečně potřebuje. Pro lepší představu můžeme sledovat, jak koncový uživatel pracuje se současným řešením.
    - zajímá nás **co** a **proč**, často ale klient zmiňuje **jak**. V takových případech je důležité se ptát **proč**. Může jít o legitimní důvod, ale také třeba o nevědomost. => studie proveditelnosti, dokument požadavků...
- **Návrh**
    - návrh architektury, jednotek, výběr technologií, plán testování => diagramy (uml), wireframy, prototypy
- **Implementace**
    - tvorba systému dle návrhu
- **Testování**
- **Provoz**

tj. nejprve sesbíráme všechny požadavky, pak sw jako celek postupně navrhneme, implementujeme, otestujeme a nasadíme

**Výhody:**
- snadný na řízení
- pokud vše jde hladce, je to nejlevnější způsob

**Nevýhody:**
- většinou všechno nejde hladce
- špatně se reaguje na změny (musíme se vracet do předchozích fází modelu)
- zákazník předem nedokáže přesně a úplně definovat, co potřebuje
- v praxi nejsou kroky v tomto pořadí dodržovány (testovat chceme ideálně při vývoji, něco chceme ukázat netrpělivému zákazníkovi...)

### Inkrementální model

- Projekt se rozdělí na inkrementy, části, které budou vyvíjeny a dodávány postupně, pro každý si uděláme jednoduchou rámcovou analýzu
- Inkrementy se vyvíjí v pořadí podle priority
- Po nasazení do systému máme o inkrementu od zákazníka zpětnou vazbu

**Výhody:**
- Systém je dodáván po částech, celkové náklady jsou distribuovány
- Není potřeba vytvářet velký tým, protože práce je dodávaná po částech
- Uživatel vidí systém v raných fázích projektu. Lze rychle reagovat na zpětnou vazbu uživatele
- O nutnosti změny se dozvíme dříve a její zavedení bude levnější (není třeba vše překopávat, přidáme změnový inkrement)

**Nevýhody:**
- Náklady na vývoj jsou vysoké kvůli dodávce systému po částech
- Model vyžaduje náročné plánování k distribuci práce
- Pro připojení modulů vyvinutých s každou fází je nezbytné důkladně popsat rozhraní

### Spirála

![](img/20230607122950.png)

- kombinace iterací a vodopádu, důraz na analýzu rizik
- vývoj probíhá v cyklech, každý má několik fází

**Fáze:**
- **Analýza**
- **Návrh**
- **Implementace**
- **Testování, zpětná vazba a plán dalšího cyklu** - zpětnou vazbu používáme pro práci v dalším cyklu

- oproti inkrementálnímu modelu nemusíme mít po každé iteraci hotovou část nasazeného systému (inkrement je třeba ve formě jasných požadavků, návrhu systému, nebo tak).
- cykly aplikujeme i na jednotlivé fáze vodopádu
- lépe pracujeme s nejistotou, ale trvá to déle

### Prototypování

- vytvoříme prototyp systému, abychom porozuměli, jakým způsobem chce zákazník systém používat a co od něj očekává
- po analýze prototypu ho zahodíme a začneme práci na reálném systému, využijeme vhodný model

### Model výzkumník

- navrhni systém a implementuj ho. Vyhovuje? Super. Nevyhovuje? Zpět k návrhu/implementaci
- nelze pořádně řídit, neexistuje dokumentace, řešitelé jsou obtížně nahraditelní, jde o experimentování

### V procesní model

- ala vodopád, ale zobrazuje i různé testy k fázím (jednotkové, integrační, systémové, uživatelské, akceptační...)

Nezávisle na modelu je důležité nastavit správnou komunikaci, definovat a používat jednotný jazyk. Pokud chceme cokoliv řídit, je potřeba mít informace o aktuálním stavu, dodržování plánu, očekávaných změnách, problémech...

Hlavní metodiky řízení sw projektů jsou **prediktivní metodiky (např. RUP)** a **agilní (např. SCRUM)**.

## Metodika (Rational) Unified Process (UP, RUP) (2/5)

- rigidní, důraz na procesy
- vhodná, pokud máme jasné a pevné požadavky, variabilní aspekty mohou být čas a zdroje
- vyžaduje podstatné plánování předem
- iterativní a inkrementální, jednotlivé aktivity (plánování, požadavky, modelování, návrh, vývoj, testování, nasazení...) se částečně překrývají
- řízena riziky, use-case požadavky
- architektura je středobodem - existuje architektonický tým, se kterým ostatní týmy konzultují případné nejasnosti/problémy, slouží jako centrální komunikační uzel (lepší, než kdyby spousta dev týmů komunikovala navzájem)
- umožňuje pevnou kontrolu nad procesy a týmem
- vhodná, pokud potřebujeme pořádnou dokumentaci (UML diagramy)
- hodí se pro velké a heterogenní produkty, velké týmy...

**Výhody:**
- zákazník není při vývoji potřeba, definice produktu je zakotvena v kontraktu (přesně ví, co dostane)

**Nevýhody:**
- pracujeme s fixními deadliny, rozpočtem i funkcionalitou
    - v reálu se deadline a rozpočet může lehce měnit v závislosti na vývoji
- změnové požadavky jsou problém
- potřeba více času k plánování
- složitý kontrakt, je třeba myslet na všechno (exhaustive kritéria přijetí, penále...)

![](img/20230523215135.png)

### Fáze iterací

Iterace jsou seskupovány do fází:

#### Inception (1 iterace)
- řešíme feasibilitu, zachycujeme klíčové požadavky, rizika
- popis významných požadavků s dopadem na architekturu
- identifikace actorů
- identifikace dalších systémů, se kterými máme komunikovat
- na konci známe cíle, hrubou architekturu
- co se používá pro podobné systémy? s čím máme zkušenosti?
- určení použitých technologií
- určení orientační ceny, časového plánu a rizik => **Project brief**

#### Elaboration (2 iterace)
- řešíme požadavky, architekturu, hrajeme si s UML diagramy
- na konci máme architekturu, návrh systému reflektující požadavky

#### Construction (4 iterace)
- tvoříme systém, testujeme, nasazujeme
- na konci máme beta verzi, relativně stabilní a otestovanou, připravenou k použití

#### Transition (2 iterace)
- hledáme a opravujeme chyby, děláme manuály, poskytujeme konzultace
- testování s uživateli (beta, na základě feedbacku děláme změnové požadavky), akceptační testy

### Workflows a UML diagramy

Iterace by neměla překročit 3 měsíce, přínos iterace je **inkrement**, každá iterace obsahuje workflows, které jsou více či méně přítomné. Pro každé workflow se používají určité UML diagramy:

- **Business modelování**
    - activity diagram
- **Požadavky**
    - use case diagram
- **Analýza a návrh**
    - sequence, collaboration diagrams
- **Implementace**
    - class, object, component diagrams
- **Testování**
    - use case, class, activity diagrams
- **Deployment**
    - deployment diagram

RUP je konkrétní metodika stavějící na UP (přidává třeba jednotlivé role a odpovědnosti v týmu, konkrétní postupy...), UP je obecný rámec.

## Agilní metodiky a principy agilního vývoje SW (3/5)

- flexibilní, důraz na lidi
- radši budeme reagovat na změnu, než se pevně držet plánu
- snažíme se fixovat čas a zdroje, proměnlivá může být funkcionalita (*Postavili jsme dům a plot, v rozpočtu zbývají zdroje na garáž, nebo bazén. Co z toho chcete?*)
- vhodná, pokud se požadavky mění, není jasná kýžená výsledná podoba systému, nebo zákazník požaduje něco hmatatelného relativně brzo => není přesné datum dokončení
- vyžaduje minimální plánování předem
- klíčová je dobrá komunikace a spolupráce týmu
- automatizované testování
- variabilita funkcionality (vývoj postupuje tak, že když dojde čas/peníze, tak se ptáme zákazníka, zda něco přihodí, nebo zda vyškrtneme nějakou část systému)
- face-to-face komunikace, rychlé meetingy - rychlejší, získáme lepší porozumění
- jednoduchá dokumentace - dokumentace těžko udržuje tempo s realitou, proto ji držme co nejjednodušší, ideálně navázanou na kód
- častá setkání se stakeholdery (sprint review), prezentace nové funkcionality (lepší, než jen popis)

### Příklady agilních metodik

#### Extreme programming
- osvědčené postupy tahá do extrému (osvědčují se reviews? => dělej reviews co to jde)
- párové programování, důraz na testy, refaktorizaci, kód je single source of truth (dokumentaci generujeme z kódu, používáme schéma pro generování ostatních věcí...)
- rychlá zpětná vazba, důraz na jednoduchost, malé inkrementy

### SCRUM

- nejčastěji využívaná agilní metodika
- iterativní, inkrementální
- jednoduchý, očekává se použití i dalších nástrojů/procesů
- vhodný pro menší týmy (<=15 lidí)
- hodí se, když máme tým schopný samostatnější práce, potřebujeme rychle vytvořit aspoň nějaký produkt

#### Role

- **product owner** - reprezentuje stakeholdery, má největší přehled o požadavcích na produkt, spravuje product backlog
- **scrum master** - zodpovědný za dodržování scrumu, řeší procesy
- **tým vývojářů** - 3-9 lidí, soběstačný (má lidi na všechno) a sebeorganizující se, spravují sprint backlog, zodpovědný za doručení produktu

#### Artefakty

##### Product backlog
- obsahuje veškerou zbývající požadovanou funkcionalitu ve formě **user stories**
    - jednotka funkcionality, testovatelná, logický celek
    - každé story má:
        - **story points** reprezentující časovou náročnost odhadnutou pomocí [planning pokeru](#planning-poker)
        - akceptační kritéria (testovatelná, formulovaná jako Given ... When ... Then ...)
        - může mít seznam rizik
        - stories mají prioritu (MoSCoW) dle hodnoty, náročnosti, rizika, přínosu...
            - Must - nezbytné
            - Should - mělo by být
            - Could - bylo by fajn
            - Won't/Wish - zapomeň na to, možná jindy
        - pro testování je možné použít Gherkin/Cucumber (As a ... I can ... So that ...)

- tvořen celým scrum týmem, spravuje ho product owner
- v praxi jde o tabuli (reálnou/virtuální) se sticky notes

##### Sprint backlog
- část product backlogu (množina user stories), která se má provést v daném sprintu
- stories jsou rozděleny na jednotlivé tasky, u každého je určen časový odhad v hodinách
- task má fáze Todo, In progress a Done
- tasky si k práci vybírají vývojáři dle vlastního uvážení, ale žádné (ani user stories) nemohou být v rámci sprintu přidány/odebrány
    - bylo by nutné zrušit celý sprint product ownerem
- spravován týmem vývojářů

##### Product increment
- všechny předměty product backlogu, které se splní během sprintu (a.k.a. to, co se za sprint stihne/udělá)
- tvořen týmem vývojářů, testován zákazníkem, může být released product ownerem
- je nutné, aby byl použitelný a byl splněn (dle definice scrum týmu)

#### Události

##### Project planning
- tvorba [project charteru](3_projektove_rizeni.md#pmi-project-management-body-of-knowledge-pmbok)
- tvorba product backlogu
- výběr klíčových strategií (komunikace, rizika, řízení změn, kvalita...)

##### Sprint planning
- probíhá na začátku sprintu, cca 8 hodin
- účastní se celý scrum tým
- vytyčuje se cíl nadcházejícího sprintu (a.k.a. co chceme udělat), vybíráme věci z product backlogu a přiřazujeme jim tasky

##### Sprint
- iterace soustředěná na vývoj funkcionality v sprint backlogu, cílem je vytvořit použitelný a potenciálně vydatelný product increment
- pracuje na něm celý scrum team
- product owner řeší komunikaci, vývojáři vývojáří, scrum master sleduje dodržování procesů
- analýza, návrh, implementace, testování
- max 1 měsíc, všechny sprinty trvají stejnou dobu
- po sprintu sledujeme [team velocity](#team-velocity), podle ní máme lepší odhad pro budoucí plány, lze podle ní upravit rozsah sprint backlogu

##### Daily scrum (standup)
- 15 minut každý den, účastní se vývojáři a možná i scrum master
- co jsem dělal včera, co budu dělat dneska, narazil jsem na nějaké problémy?

##### Sprint review
- 4 hodiny, účastní se celý scrum team a klíčoví stakeholdeři (např. zákazník, uživatel)
- proběhne předvedení inkrementu
- proberou se případné problémy, změny, odpovídá se na případné otázky stakeholderů
- proberou se případné změny product backlogu
- případně se přepočítá předpokládané datum dokončení
- probere se, co by se mělo dělat dál, upraví se priorita/pořadí v product backlogu

##### Sprint retrospective
- 3 hodiny, účastní se scrum team
- řeší se procesy - rozložení práce, splnil se cíl, je třeba něco upravit?
- řeší se vztahy - klapalo to? potřebuje někdo užší spolupráci?
- řeší se nástroje - dobrá komunikace? dostatečná transparentnost?
- řeší se lidi - měl někdo trable? někoho pochválíme?
- co nefungovalo, co můžeme zlepšit
- ideálně se vymyslí jedno zlepšení procesů, které se v příštím sprintu bude používat
- případně se upraví klíčové strategie, rizika

##### Project retrospective
- uzavření projektu s týmem
- řešíme lessons learned, co se povedlo, nepovedlo...
- poděkujeme všem

#### Ukončení SCRUM

SCRUM může skončit, když:
- product backlog je prázdný (vše hotovo), nebo nepovažujeme (společně se stakeholdery) jeho obsah za důležitý
- dojde čas/peníze
- udělali jsme poslední sprint a je sice co spravovat, ale defekty jsou přijatelné
- product owner/stakeholder se rozhodne ukončit projekt

#### Další aspekty SCRUM

- návrh a architektura se mohou dělat průběžně pro jednotlivé user stories, nebo se do procesu zavádí jako standard (např. používáme vrstvenou architekturu, používáme tyto technologie...)
- kontrakt se obvykle určuje podle toho, kolik (a jakých) lidí bude za dané období na projektu pracovat
    - super na flexibilitu, ale těžko se určuje výsledná cena/deadline
- zákazník je zatažen do postupu vývoje, může hned dávat zpětnou vazbu, ale tento overhead vyžaduje extra čas
- balancuje se Čas, Cena a Rozsah funkcionalit

### Burndown chart

Ukazuje kolik práce zbývá a jak si vedeme oproti plánu:

![](img/20230525221317.png)

### Team velocity

Dokončené story pointy za sprint, je vidět v Burndown Chartu v dy/dx, nebo jako samostatná křivka:

![](img/20230525221638.png)

### Planning poker

Pro každé story každý z týmu provede odhad, odhady se zveřejní najednou. Následuje diskuze, dokud se na bodech za dané story všichni neshodnou (doporučené použité body jsou podle Fibonacciho posloupnosti).

### SCRUM Board

Viditelný celému týmu, na jednotlivých lístcích tasků je vidět i zpracovávající člověk:

![](img/20230525224009.png)

## Nasazení a provoz softwarových systémů (4/5)

- před nasazením je důležité systém otestovat v prostředí, které bude co nejbližší tomu produkčnímu
- klíčové je v provozu logování událostí (abychom v případě chyby věděli, co se v systému dělo), monitoring, systém zpětné vazby
- nasazení zahrnuje přípravu prostředí (instalace os, databází...), lze automatizovat/zjednodušit použitím Platform as a Service, případně kubernetes
- před nasazením do provozu je fajn projít a zkontrolovat dokumentaci, která může být kvůli vývoji neaktuální
- součástí nasazení je i školení uživatelů, abychom předešli neúspěchu z důvodu neochoty/neznalosti používání
- součástí nasazení může být i customizace systému pro specifické potřeby zákazníka (pokud to náš systém umožňuje)

## Údržba softwarových systémů, znovupoužitelnost (5/5)

### Analýza projektu

V závěru je fajn si udělat analýzu toho, co (ne)fungovalo, co zlepšit...
- dosažená produktivita a kvalita
- použitý proces, odchylky, důvody
- plán vs realita a důvody (čas, peníze, chyby, FP/LOC...)
- rizika (plán vs realita, jak jsme řešili rizika a problémy)
- pracnost (i dle etap)
- souhrn defektů
- kauzální analýza - analýza odchylek výkonu u použitého procesu (jak a proč)
- použité technologie a jejich hodnocení
- popsat v dokumentu tým a jednotlivce, na které je možné se případně obrátit (třeba když se řeší problém v dalším projektu)
- aktiva procesu - co vzniklo a může být použito i v jiných projektech (třeba knihovny, checklisty...)

### Údržba systému

- údržba se může dělat jako samostatný projekt, mohou na to být specializované týmy
- řeší se oprava (i bezpečnostních) chyb, aktualizace a vylepšení (ideálně nějakým způsobem automatizované, ale může být fajn potvrzení uživatele), správu změn (co se jak a proč změnilo)
- znovupoužitelnost se obvykle řeší v rámci jednotlivých služeb/programů/komponent, ale ne znovupoužitím struktur mezi různými projekty (pokud nejde o specializovanou knihovnu) - mohli bychom mít problém v případě změny
