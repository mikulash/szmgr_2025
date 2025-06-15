# Programování a softwarový vývoj

> Nástroje a prostředí pro softwarový vývoj rozsáhlých systémů. Základní koncepty softwarových architektur z pohledu implementace. Vícevrstvá architektura moderních informačních systémů, architektura model-view-controller. Technologie a jazyky vhodné pro frontend a backend vývoj. Persistence, ORM. Příklady z praxe pro vše výše uvedené. (PA165 || PV179, volba Programování, SA200)

1. [Nástroje a prostředí pro softwarový vývoj rozsáhlých systémů (1/6)](#nástroje-a-prostředí-pro-softwarový-vývoj-rozsáhlých-systémů-16)
2. [Základní koncepty softwarových architektur z pohledu implementace (2/6)](#základní-koncepty-softwarových-architektur-z-pohledu-implementace-26)
3. [Vícevrstvá architektura moderních informačních systémů, architektura model-view-controller (3/6)](#vícevrstvá-architektura-moderních-informačních-systémů-architektura-model-view-controller-36)
4. [Technologie a jazyky vhodné pro frontend a backend vývoj (4/6)](#technologie-a-jazyky-vhodné-pro-frontend-a-backend-vývoj-46)
5. [Persistence, ORM (5/6)](#persistence-orm-56)
6. [Příklady z praxe pro vše výše uvedené (6/6)](#příklady-z-praxe-pro-vše-výše-uvedené-66)

## Nástroje a prostředí pro softwarový vývoj rozsáhlých systémů (1/6)

Vývoj sw řešení se obvykle skládá z kroků: Analýza, Návrh, Implementace, Testování, Nasazení. Více v otázce [Softwarové inženýrství](2_softwarove_inzenyrstvi.md)

- **Komunikace a ubiquitous language** - klíčové je zajistit pravidelnou a dobře definovanou komunikaci mezi stakeholdery (nejen na začátku, ale i v průběhu vývoje), definovat ubiquitous language (univerzální jazyk domény) a vynucovat jeho používání, aby v rámci úzce spolupracujících skupin nedocházelo k vytváření vlastních výrazů a následnému neporozumění mezi skupinami.

- **Kontinuální integrace a nasazení (CI/CD)** - při vývoji se často používá kontinuální integrace a nasazení (CI/CD), čímž se mohou vynucovat standardy (dobré pro udržitelnost kódu) a spouštět se automatizované testy. Bývá součástí verzování kódu.

- **Dekompozice a abstrakce** - klíčovou součástí analýzy a návrhu bývá dekompozice (a abstrakce) na komponenty, při které dělíme komplexní systém na jednodušší nezávislé části, abychom nemuseli neustále držet v hlavě kontext celého systému. Cílem je minimalizovat závislost mezi komponenty a dodržovat SOLID principy. [Více v Kvalita kódu](1_kvalita_kodu.md).

- **Kontrakty komponentů** - komponenty systému mají dobře definovaný kontrakt, nezávisí na konkrétních implementacích, ale na abstrakcích (např. parametr metody je typu interface, ne konkrétní struktura)

Pro vývoj rozsáhlých systémů se používají následující typy nástrojů:

- **Editory a vývojová prostředí** - v ideálním případě (pokud jazyk podporuje Language Server Protocol) závisí na preferencích vývojáře. Je možné použít od jednoduchých editorů až po plně integrovaná vývojová prostředí (vim/neovim, vscode, jetbrains produkty).
- **Verzovací systémy** - umožňují správu verzí zdrojového kódu a spolupráci vývojářů (git, SVN). Obvykle běží na platformě, která může být hostovaná (github, gitlab), nebo kterou si hostujeme sami na vlastních serverech (gitlab). Platformy obvykle nabízí víc, než jen správu zdrojového kódu (CI/CD, issue tracking...)
- **Nástroje pro správu projektů** - slouží pro správu úkolů, sledování chyb a komunikaci v týmu (Clickup, Jira, ale i třeba Github).
- **Nástroje pro testování** - umožňují vytvářet a spouštět testy, simulovat uživatelské interakce, ověřovat funkčnost systému (Jest, cargo test, Insomnia, Postman)
- **Nástroje pro kontinuální integraci a nasazení** - automatizují spouštění testů a sestavení výsledného produktu (github workflows, gitlab CI/CD, circle ci, Travis CI, Jenkins).
- **Monitoring a logování** - slouží pro sledování výkonu systému a analýzu chyb a problémů (Grafana)
- **Dokumentační nástroje** - popisující fungování systému a jeho částí. Dokumentaci zdrojového kódu je vhodné z něj generovat, aby se minimalizoval problém neaktuálnosti (cargo doc, OpenAPI (machine-readable JSON/YAML formát, je možné ho generovat z anotací, nebo z něj generovat příklady, dokumentaci), pro jednoduchý formátovaný text Markdown). Dokumentace je důležitá zvlášť pro vystavovaná API
- **Kontejnerová prostředí** - slouží pro minimalizaci rozdílů mezi prostředími, usnadňují reprodukovatelnost prostředí, ve kterých aplikace běží (vývojové, testovací, produkční) (Docker, Podman).
- **Nástroje pro analýzu kódu** - kontrolují dodržování standardů, zajišťují určitou kvalitu kódu, hledají potenciální chyby/slabá místa (cargo clippy, ESLint, SonarQube).

## Základní koncepty softwarových architektur z pohledu implementace (2/6)

### Specifika implementace webových informačních systémů

Webové informační systémy se obvykle skládají z několika částí:

- **Uživatelské rozhraní/frontend/klient** je zpřístupněno uživateli skrz prohlížeč. Základními stavebními kameny jsou HTML, CSS a JavaScript/Web Assembly. Tradičně šlo o **multipage aplikace** renderované na serveru (šablonovací systémy jako python\jinja, rust\askama, php má šablonování přímo v sobě), po každém požadavku proběhlo překreslení. Nedávno byl trend **singlepage** aplikací renderovaných na klientovi (založeny na JS frameworkcích jako React, Vue, Svelte, Solid, nebo WASM (aktuálně defaultně) rust\yew), kde po iniciálním načtení aplikace putovala mezi klientem a serverem jen data. Aktuální trend je používat fullstack/meta frameworky (NextJS, SvelteKit, rust\leptos...), kde prvotní vykreslení je na serveru a následně se web chová jako SPA (ale umožňuje vícero módů fungování, třeba plně static-site generation). Toto platí zvlášť pro menší projekty, protože fullstack framework umožňuje vývoj frontendu i backendu na jednom místě.

- **Aplikační server/backend** slouží k vykonávání aplikační logiky, zpracovává požadavky klienta a odpovídá na ně, zajišťuje autentizaci a autorizaci. Stav systému propisuje do databáze, obvykle je server bezstavový. Používají se general-purpose programovací jazyky (Rust, JS/TS, Go, C#, Python, Java).

- **Databáze** uchovává stav systému. Tradičně se používá relační databáze (Postgres, MySQL, Oracle), ale může být vhodnější použít dokumentovou (MongoDB) či grafovou (Neo4j).

Webové informační systémy mají tato specifika:

- **Snadnost aktualizací klienta** - na rozdíl od desktop aplikací není potřeba ze strany uživatele nic explicitně stahovat a instalovat
- Nutnost **responzivního a přístupného uživatelského rozhraní**, ke kterému uživatelé mohou přistupovat i z mobilních zařízení, prohlížeče usnadňují implementaci přístupnosti (vada zraku, přístup pouze pomocí klávesnice...)
- Většinou **tenký klient** - aplikační logika se provádí z pravidla na serveru
- Webové systémy bývají (pokud není řešeno jinak) přístupné z celého internetu, proto je důležité vhodně řešit **autentizaci a autorizaci**, a jejich **zabezpečení proti útokům** (například SQL injection, XSS, CSRF, více níže)
- Mohou být používané větším množstvím uživatelů, proto je vhodné třeba řešit škálování (vertikální větším výkonem nemusí stačit, horizontální více stroji nemusí být vždy aplikovatelné). Aplikační servery je možné díky jejich bezstavovosti škálovat horizontálně, databáze se obvykle řeší vertikálně, či použitím distribuovaných databází (Cassandra). Základem zvyšování výkonu systému je kešování (Redis).
- Obvykle se používá model klient-server

### Útoky

- **SQL injection** - do vstupního pole vložíme specifický string, který dokáže způsobit akci v databázi (např. vstup `ahoj; DROP TABLE Users; --`)
  - obrana pomocí prepared statements
- **Session hijacking** - útočník se zmocní cookie/tokenu, který se používá pro prokázání identity. Tokeny ukládáme jako cookie (nejbezpečnější, pro mobilní aplikace je v pohodě local storage)
  - obrana pomocí nastavení cookie jako "Secure" (lze poslat jen skrz https) a "HttpOnly" (nelze číst/upravit pomocí JS)
- **Cross site scripting (XSS)** - útočník vloží na web obsah, který je validní html/js a oběti se zobrazí/spustí při načtení stránky
  - obrana pomocí sanitizace vstupů
- **Cross site request forgery (CSRF)** - útočník připraví a pošle klientovi URL odkaz (nebo vytvoří na svém webu formulář) vyvolávající akci na našem serveru
  - obrana pomocí CSRF náhodných tokenů (jednorázově vydaný s požadavkem dávající uživateli přístup k akci). Token vložíme do formuláře (aby ho uživatel mohl odeslat) a zároveň si ho buď uložíme, nebo ho nastavíme jako cookie. Při zpracování požadavku zkontrolujeme, zda se tokeny shodují.
  - obrana pomocí cookie atributu "SameSite", který modifikuje, kdy se cookie posílá při cross-site požadavcích. `Strict` neposílá cookie nikdy při cross site požadavcích, `Lax` jen při GET požadavcích - ty by stejně neměly vyvolávat akci, takže by to nemělo vadit. Problém však přetrvává u starých prohlížečů, nebo pokud se útočníkovi podaří umístit vlastní formulář na naši doménu či subdoménu.
  - obrana pomocí explicitního potvrzení (nebo MFA) u důležitých akcí
- **Clickjacking** - útočník na svém webu zobrazí průhledný iframe nad svou stránkou. Uživatel si myslí, že kliká na tlačítko útočníkova webu, ale ve skutečnosti kliká na web v iframe, čímž může vyvolat nechtěnou akci
  - obrana pomocí `X-Frame-Options` hlavičky
- **Phishing** - útočník vytvoří vizuálně identický web, na kterém chce po uživatelích přihlášení
  - obrana pomocí kontroly domény uživatelem, nutný trénink uživatelů
  - pomoct může přizpůsobení webu - pokud je uživatel zvyklý vídat u kritických akcí svou fotku a všimne si, že na útočníkově webu chybí, může pojmout podezření

### Auth

Více v [Bezpečný kód](dev_4_bezpecny_kod.md)

#### Autentizace

- Ověření identity
- **Session based** - uživatel poskytne údaje, server vydá cookie, kterou si udržuje (db/paměť). Uživatel následně s každým požadavkem zasílá cookie, podle které server ověří a rozpozná uživatele
- **Token based** - uživatel ověří svou identitu, server zapouzdří údaje o uživateli do tokenu, který podepíše, čímž zajistí, že je možné detekovat modifikaci. Uživatel následně zasílá token, kterým prokazuje svou totožnost, mohou zde být i informace o právech. Na rozdíl od sessions nemusí díky certifikátům servery nic držet v paměti, jde o řešení vhodné pro použití s více servery/systémy, nebo když se uchovávají sessions v databázi a databáze začíná být bottleneck. Tokeny se nedají revokovat ze strany serveru => dává se časově omezená platnost
- Pokud nám nevadí používat autorizaci poskytnutou třetí stranou, bývá nejbezpečnější a nejjednodušší řešení použít federalizovanou identitu. Pokud opravdu chceme ukládat uživatelská hesla, ukládáme heše (se solí) získané aktuálně doporučovaným Argon2 (může se změnit).

#### Autorizace

- Ověření práv k určité akci

### Používané technologie

- **HTTP basic** - http header `Authorization: Basic <data>`, kde `<data>` jsou `<jméno>:<heslo>` v base64
  - `-` hlavička je viditelná (=> použij aspoň https), údaje se zasílají s každým požadavkem
- **TLS certifikáty** - server musí poskytnout certifikát, klient může poskytnout certifikát, čímž se autentizuje
- **OAuth2** - protokol pro poskytnutí autorizace třetím stranám, funguje na principu vydávání tokenů (Refresh token, Access token). Access token má omezenou dobu platnosti a obsahuje autorizační data (majitel tokenu je oprávněn k akci) uživatele podepsaná soukromým klíčem autorizačního serveru. Refresh token může mít delší dobu platnosti, je uložený u uživatele a je možné ho použít k získání dalšího access tokenu bez nutnosti autentizace (provedou se ale kontroly ohledně práv uživatele).
- **OpenID Connect** - nadstavba nad OAuth2, přidává autentizaci a informace o identitě uživatele. Používá se pro federalizovanou správu identity (single sign-on). *Klient* je aplikace, která potřebuje autentizovat uživatele. *Autorizační server* autentizuje uživatele, vydává token autorizující držitele k přístupu ke *scopes* obsahující *claims* (např. scope profil pro claimy id, email, name, picture, locale...) umístěných na *resource serveru*. Resource server slouží jako endpoint pro poskytování claimů na základě scopes v tokenu (JWT)
- **SAML** - xml protokol pro výměnu autentizačních a autorizačních dat, starší než oauth/oidc
- **Kerberos** - na rozdíl od oauth2 a openid connect používá v základu symetrickou kryptografii (např. uživatelovo heslo je na autorizačním serveru, uživatel posílá pouze svou identitu a server vrací přístupová data šifrovaná heslem uživatele)

## Vícevrstvá architektura moderních informačních systémů, architektura model-view-controller (3/6)

Architektury popsány v [otázce 1](dev_1_programovani_a_softwarovy_vyvoj.md#základní-koncepty-softwarových-architektur-z-pohledu-implementace-26), takže jen shrnutí:

- **MVC pattern - model, view, controller** - odděluje systém na model, view a controller. Model obsahuje data a business logiku. View je zobrazením těchto dat a controller slouží k manipulaci nad modelem. Jde o cyklický vztah: `USER (uses)> CONTROLLER (manipulates)> MODEL (updates)> VIEW (shown to)> USER`
  - oddělení logiky zvyšuje modulárnost kódu, který je pak snadnější upravovat, testovat, udržovat
  - např. multipage web
- **MVP pattern - model, view, presenter** - presenter je prostředník mezi modelem a view, jde přes něj veškerá komunikace. Uživatel používá pouze view, akce uživatele view předává presenteru, který aktualizuje model a zasílá view nová data. Např. SPA. Vztah Presenter - View je imperativní. Presenter naslouchá událostem vyvolaným View a podle toho s ním manipuluje.
- **MVVM pattern - model, view, viewmodel** - uživatel interaguje pouze přes view, veškerá komunikace jde přes viewmodel, které provádí data, propisuje je do modelu. Rozdíl oproti mvp je, že viewmodel může být použit pro více views, změny se sledují pomocí observeru. Např. android aplikace. Vztah View - ViewModel je deklarativní. ViewModel neinteraguje s View přímo, ale pozoruje deklarované vlastnosti prostřednictvím speciální vrstvy datových vazeb.
- **Klient-Server** - klient slouží jako uživatelské rozhraní. Server zpracovává požadavky zasílané klientem a odpovídá na ně. Server dle požadavku klienta provádí aplikační logiku, přistupuje k databázi... Komunikace je vždy iniciována klientem, server pouze odpovídá. Lze dělit na úrovně (2 tier, 3 tier i s databází, další úrovně můžou být servisní vrstvy...)

- **Peer-to-Peer** - každý klient je současně i serverem, klienti spolu komunikují napřímo. Klienti takto sdílí výpočetní výkon, distribuují data... např. BitTorrent

- **Vrstvená architektura (layered, případně clean)** - Dělí monolitický systém na vrstvy, každá je zodpovědná za určitou část aplikace. Vrstva využívá služeb vrstvy pod ní. Každá vrstva může být otevřená/uzavřená, otevřené vrstvy je možné přeskočit.
  - **Presentation** - closed, UI, klient
  - **Business** - closed, zpracovává business logiku
  - **Service** - open, obsahuje sdílené komponenty business vrstvy (autentizace, logování)
  - **Persistence** - closed, slouží k přístupu do databáze, repository pattern
  - **Database** - closed, čistě databázová vrstva

  - jednoduchá na vývoj (pořád je to monolit), levná, vhodná pro projekty s velmi omezeným časem/rozpočtem, vhodná pokud si nejsme jistí co použít
  - oproti klasickému monolitu je větší overhead s předáváním dat mezi vrstvami
  - není odolná vůči chybám, pád části = pád celého systému, relativně dlouhý startup
  - vrstvu je možné nasadit samostatně a zlepšit tak škálovatelnost systému
  - např. eshop

- **Pipeline architektura/Pipes and Filters** - monolitická, skládá se z:
  - **pipe** - point-to-point komunikace
  - **filter** - komponenty transformující data, bezstavové, ale mohou zapisovat do db. Filter se má soustředit čistě na jednu úlohu. Jsou typy:
    - **Producer/source** - zdroj, iniciátor akce
    - **Transformer (map)** - transformuje vstup na výstup
    - **Tester (reduce)** - testuje kritérium a potenciálně vyprodukuje (mimo předání dat bez modifikace dál) výstup, který může vyvolat akci (zápis do databáze)
    - **Consumer/sink** - ukončuje akci
  - filtry je možné snadno používat znovu (reuse)
  - vede k batch processingu, což není fajn pro rychlou odezvu systému
  - např. unix terminal, compiler, RxJS, Dart streamy
    ![](img/20230518144835.png)

- **Microkernel/Hexagonal/Component-based architecture** - monolitická, dělí systém na jádro (core) a (ideálně) plug-in komponenty, aplikační logika je v těchto komponentech. Jednoduchá rozšiřitelnost, adaptabilita, customizace
  - Jádro obsahuje minimální nutnou funkcionalitu, která se rozšiřuje skrz pluginy
  - Pluginy by měly být nezávislé, připojitelné za běhu, mohou mít vlastní db, mohou být vzdálené a komunikovat s jádrem přes např. REST.
  - Pluginy jsou obvykle dostupné z nějakého registru, kde jsou data jako název, kontrakt, detaily pro připojení pluginu.
  - Důležité je dobře definovat standardizované kontrakty, které musí pluginy splňovat
  - Pro využití komponenty je nutné řešit discovery pomocí nějakého registru (může stačit hashmapa), musíme znát identitu (která by se neměla měnit) chtěného komponentu, který v systému nemusí být
  - např. VS Code - jádro je textový editor, pluginy jsou extensions

- **Servisně orientovaná architektura ([SOA](https://www.youtube.com/watch?v=9fn4vGEKFs8))** - tradiční enterprise přístup
  - důraz na znovupoužitelnost služeb napříč celou organizací
  - používá ESB (Enterprise Service Bus) pro komunikaci mezi službami
  - standardy jako SOAP, WSDL, UDDI pro definici a objevování služeb
  - služby jsou obvykle hrubozrnné (coarse-grained)
  - centralizovaná governance a správa služeb
  - těžší infrastruktura, komplexnější implementace
  - fajn pro velké enterprise organizace s potřebou sdílení služeb
![img.png](img/SOA_archi.png)

- **Servisně založená architektura ([Service-Based Architecture](https://www.youtube.com/watch?v=LK0tC1-mlFA))** - hybrid mezi monolitem a microservices
  - separátní UI (může jich být více), separátně nasazené služby (obvykle 4-12), každá se soustředí na jednu úlohu (nebo část systému), sdílená db, služby jsou interně tvořeny vrstvenou architekturou/děleny dle domény
  - Pokud služba využívá část databáze, kterou žádná jiná služba nevyužívá, je možné tuto část oddělit do vlastní databáze.
  - pokud chceme jednotné API, používá se vrstva fasády, která přeposílá komunikaci jednotlivým službám
  - ACID transakce (microservices mají BASE - basically available, soft state, eventually consistent, tj. duplikace dat, konzistence může chvíli trvat...), fajn pro konzistenci a integritu, ale úprava znamená nutnost testu celého systému
  - fajn pro domain driven design bez přílišné složitosti
  - fajn když potřebujeme ACID
  - modernější, jednodušší přístup než tradiční SOA
![img_1.png](img/service_based_archi.png)

- **Microservices**
  - cílem je vysoká nezávislost jednotlivých služeb, mohou být implementovány v různých programovacích jazycích
  - každá služba se stará o nutné minimum, služby fungují nezávisle
  - nesdílí se DB
  - duplikace je akceptovatelná, když se sníží provázanost

## Technologie a jazyky vhodné pro frontend a backend vývoj (4/6)

### Frontend technologie

#### Základní webové technologie
- **HTML** - struktura obsahu webových stránek
- **CSS** - stylování a layout webových stránek
- **JavaScript** - interaktivita a dynamické chování
- **WebAssembly (WASM)** - vysokooptimalizované aplikace v prohlížeči

#### JavaScript frameworky a knihovny
- **React** - component-based, virtual DOM, unidirectional data flow, velký ekosystém
- **Vue.js** - progressive framework, template-based syntax, snadné učení
- **Svelte/SvelteKit** - compile-time optimized, bez virtual DOM, menší bundle size
- **Angular** - full-featured framework, TypeScript-first, velké enterprise aplikace

#### Meta/Fullstack frameworky
- **Next.js** (React-based) - SSR, SSG, API routes, automatic code splitting
- **Nuxt.js** (Vue-based) - universal applications, automatic routing
- **SvelteKit** - SSR, SPA, SSG mode support

#### CSS frameworky a nástroje
- **Tailwind CSS** - utility classes pro rapid prototyping
- **Bootstrap** - responsive grid system, pre-built components
- **Styled Components** - CSS v React komponentech

#### Build nástroje
- **Webpack** - konfigurovatelný bundler, široká podpora
- **Vite** - rychlý development server, založený na ES modules
- **esbuild** - extrémně rychlý Go-based bundler

### Backend technologie

#### Programovací jazyky
- **JavaScript/Node.js** - shared language s frontendem, velký ekosystém (Express.js, Fastify, NestJS)
- **Python** - čitelnost kódu, rozsáhlé knihovny (Django, Flask, FastAPI)
- **Java** - enterprise standard, type safety, JVM ekosystém (Spring Boot, Jakarta EE)
- **C#/.NET** - strong typing, performance, Microsoft ekosystém (ASP.NET Core)
- **Go** - performance, jednoduchost, built-in concurrency (Gin, Echo)
- **Rust** - memory safety, performance, zero-cost abstractions (Actix-web, Axum)
- **PHP** - široké přijetí, hosting support (Laravel, Symfony)

#### Databázové technologie
- **Relační databáze** - PostgreSQL, MySQL, SQLite, SQL Server, Oracle
- **NoSQL databáze** - MongoDB (document), Redis (key-value), Cassandra (wide-column)
- **Graph databáze** - Neo4j, Amazon Neptune

#### API technologie
- **REST** - HTTP-based, resource-oriented, OpenAPI/Swagger dokumentace
- **GraphQL** - single endpoint, efficient data fetching, flexibilní API
- **gRPC** - high performance, type safety, microservices communication

#### Messaging a queue systémy
- **RabbitMQ** - traditional message broker
- **Apache Kafka** - distributed streaming platform
- **Redis Pub/Sub** - simple messaging

### Cloud a DevOps technologie

#### Kontejnerizace a orchestrace
- **Docker** - containerization platform
- **Kubernetes** - container orchestration
- **Podman** - daemonless container engine

#### Cloud platformy
- **AWS** - největší cloud provider (EC2, S3, RDS, Lambda)
- **Google Cloud Platform** - strong v AI/ML services
- **Microsoft Azure** - integration s Microsoft stack
- **Heroku** - jednoduchá PaaS platforma

#### CI/CD nástroje
- **GitHub Actions** - integrated s GitHub
- **GitLab CI/CD** - integrated s GitLab
- **Jenkins** - open-source automation server

## Persistence, ORM (5/6)

Zabývá se uchováním dat mezi jednotlivými běhy aplikace/restarty systému/požadavky klienta:

- **Relační databáze** - nejběžnější způsob uchovávání dat v sw systémech. Data jsou strukturována do tabulek obsahujících sloupce, řádek tabulky = datový záznam. Vztahy mezi daty se řeší relacemi, odkazy na primární klíč jiné tabulky. Pro manipulaci nad daty se využívá SQL (structured query language). (Postgres, MySQL, SQLite). Jsou široce podporovány v programovacích jazycích, je potřeba dávat pozor na sql injection (rust/sqlx). Při použití SQL v aplikacích se doporučuje použít Repository/DAO pattern, případně CQRS.

- **Objektově relační mapování (ORM)** - umožňuje mapování objektového modelu aplikace na relační databázi. Výhodou je, že není nutné psát přímé SQL dotazy a kód je (měl by být) agnostický k použité databázi, může však vzniknout problém s nedostatečnou kontrolou nad dotazem/nutností tvorby specializovaných struktur/tříd. Složitější dotazy mohou být ve výsledku podobně komplikované, jako vlastní sql dotaz. Problém může působit i výkon (js\prisma, rust\diesel, java\hibernate)

- **Souborový systém** - data je možné ukládat přímo do souborového systému. Toto je vhodné třeba pro obrázky/pdf, ale je potřeba ošetřit, abychom neposkytli přístup k jiným částem systému, než k jakým chceme.

- **NoSQL** - alternativa k relačním db, umožňují ukládání a manipulaci s nestrukturovanými daty. Oproti relačním databázím poskytují lepší škálovatelnost a flexibilitu, problém může být konzistence (často se používá duplikace pro vyšší rychlost) (mongodb, cassandra)

- **Cachování** - dočasné ukládání často používaných dat/výsledků operací. Lze provádět na úrovni RAM, před databází, před serverem... (redis, nginx)

## Příklady z praxe pro vše výše uvedené (6/6)

### Reálné architektury

- **Netflix** - microservices architektura s 600+ službami, circuit breaker pattern (Hystrix), service discovery (Eureka), API Gateway (Zuul), distributed caching (EVCache)
- **Spotify** - microservices s event-driven architekturou, Kafka pro user activity tracking, Apache Spark pro ML workloads
- **Uber** - 1000+ mikroservic, Kafka pro location updates, Schemaless (MySQL wrapper) + Cassandra

### Nástroje v praxi

#### CI/CD implementace
- **GitHub Actions** - YAML konfigurace pro build, test, deploy pipeline
- **GitLab CI/CD** - integrované s GitLab repository

#### Kontejnerizace
- **Docker** - standardní kontejnerizace aplikací
- **Kubernetes** - orchestrace kontejnerů v produkci s auto-scaling

#### Monitoring a observability
- **Prometheus + Grafana** - metriky a dashboardy
- **Jaeger, Zipkin** - distributed tracing napříč mikroservicemi

### Frontend implementace v praxi

- **React aplikace** - component-based architektura s hooks pro state management
- **Next.js** - SSR/SSG s API routes pro fullstack aplikace
- **Tailwind CSS** - utility-first styling pro rychlý vývoj
- **Redux/Zustand** - state management pro complex aplikace

### Backend implementace v praxi

- **Express.js API** - REST endpoints s middleware pro auth, validation, logging
- **Spring Boot** - enterprise Java aplikace s dependency injection
- **ASP.NET Core** - .NET aplikace s built-in dependency injection

### Databázové implementace

- **PostgreSQL** - relační databáze s JSON support a advanced features
- **MongoDB** - document database pro flexible schema
- **Redis** - in-memory cache a session store
- **Prisma/TypeORM** - type-safe ORM s automatickou migrací

### Security implementace

- **JWT tokens** - stateless authentication s claims
- **OAuth2/OpenID Connect** - federalized identity management
- **API rate limiting** - ochrana proti abuse
- **HTTPS everywhere** - TLS certifikáty pro všechnu komunikaci

### DevOps workflow

- **Git workflow** - feature branches, pull requests, code review
- **Automated testing** - unit, integration, e2e testy v CI pipeline
- **Blue-green deployment** - zero-downtime nasazení
- **Infrastructure as Code** - Terraform, CloudFormation pro reproducible infrastructure

## Notes

**Validace** - systém dělá to, co se od něj čeká (v rámci požadavků)

**Verifikace** - systém dělá věci správně interně

**DAO** - data access object, abstrahuje přístup k databázi/persistenčnímu mechanismu

- umožňuje výměnu persistenční technologie, aniž by bylo třeba zasahovat do jiných vrstev
- usnadňuje testování business logiky
- obvykle jeden na entitu, CRUD

**DTO a.k.a. Value Object** - data transfer object, zapouzdřuje data pro komunikaci mezi vrstvami

**Inversion of Control** - struktura má pole (třeba connection pool), které používá pro své fungování (závisí na něm). Nemá si pole tvořit sama, naplnit ho z parametru konstruktoru/jiným způsobem.

**Dependency Injection** - existují frameworky, které asistují s IoC pomocí injekce závislostí přímo do polí struktur "automaticky" (rust\di, java\spring)

**Aspect Oriented Programming** - technika, kde se definuje aspekt, který je volán pokaždé při definované akci. Např. pro logování - aspekt je definován jednou a je řečeno, že se má provádět pro všechny metody. Není nutné upravit každou metodu, aby explicitně logovala.

**Software as a service**, **Platform as a service** (staráme se jen o vývoj, vše ostatní zajišťuje služba, např. Heroku), **Infrastructure as a service** (pronajímáme si infrastrukturu, např. klasický cloud, AWS, azure, gcp...)

**CORS** - zabraňuje, aby skript z prohlížeče komunikoval se serverem odjinud, než z webové aplikace. Např. pokud z klienta SPA myweb.com chci poslat asynchronní dotaz (pomocí fetch API) na other.com, tak pokud other.com explicitně nepovolí přístup, prohlížeč můj požadavek neodešle.

**Message queue** - namísto synchronního zpracování je možné použít message queue (používá se často interně v distribuovaných systémech, není nutné okamžité zpracování, usnadňuje load balancing, je možný broadcast, zprávy mohou být persisted, ...) FIFO, na kazdym konci queue je jeden konzument, RabbitMQ

**Message bus** = dokaze zpravu poslat na vic zarizeni (ne jen jedno jako mq), pub/sub pattern, mam tam topics, ktery odebiram, kafka, redis

**Event queue** - primarne pro event driven systemy, komunikujeme, ze neco probehlo, vetsinou append only log, napr pro big data analyzu. Kafka

**Continuous integration** - pravidelně sestavujeme výsledný systém (děláme malé a relativně jednoduché změny), automaticky testujeme výsledek

**Continuous delivery** - pravidelně sestavujeme výsledný systém tak, že by mohl být okamžitě vydán, automaticky testujeme výsledek

**Continuous deployment** - pravidelně dodáváme, automaticky testujeme výsledek

**Regresní testy** - provádí se po změnách, abychom detekovali nechtěné efekty

#### REST (Representational State Transfer)

- nejpoužívanější styl/způsob tvorby rozhraní webových aplikací (ne protokol), vychází z HTTP, požadavek má syntax `<metoda> <uri>`
- zdroje identifikovány URI, mohou mít různou podobu (JSON, XML, HTML, PNG...)
- užívá HTTP metod:
  - **GET** - pro získání dat
  - **HEAD** - pro získání metadat - hlavička je totožná s GET, ale v odpovědi není přítomno tělo
  - **POST** - požadavek, aby cílový zdroj zpracoval data obsažená v těle. Obvykle se používá pro akce/přidání nového prvku do kolekce (login, přidání příspěvku...). V případě tvorby prvku bývá pravidlem vrátit nově vytvořené ID v odpovědi
  - **PUT** - jako post, ale součástí požadavku je ID. Prvek s tímto ID má být upraven novými daty (v těle), nebo vytvořen právě s tímto ID
  - **PATCH** - jako put, ale v těle nemusí být všechna pole upravovaného prvku - změnit se mají jen ta pole, která jsou přítomná
  - **DELETE** - požadavek k odstranění dat
  - dále existují **CONNECT**, **OPTIONS** a **TRACE**

*Safe* metody nemění stav na serveru (get, head, options, trace)

*Idempotentní* metody splňují vlastnost, že více identických požadavků má stejný efekt, jako jediný požadavek (všechny, kromě POST, PATCH (není zcela standardizované chování) a CONNECT)

RESTové služby jsou bezstavové (pro vyhodnocení požadavku by nemělo být nutné znát nic, co není v požadavku obsaženo, např. namísto `GET /nextPage` se použije `GET /pages/2`)

Některé REST metody jsou kešovatelné, v komunikaci mohou být prostředníci (třeba cache, proxy, load balancer...), o kterých klient neví

**Best practices**

- konzistentní pojmenovávání zdrojů
- vztahy řešíme pomocí URI (např. `GET /users/1/orders` vrací objednávky uživatele 1)
- je v cajku udělat alias (např. `/me`, `/trends`)
- používání správných metod, přemýšlíme v rámci CRUD operací
- filtrování a řazení řešíme pomocí query parametrů (`/users?active=true&sort=name`)
- verzování API
- metody, které vytvářejí/upravují zdroje by měly vracet výslednou podobu zdroje
- aktuálně je preference pracovat s JSON
- používání správných HTTP návratových hodnot

#### Richardson Maturity Model - úrovně REST API

- **Level 0 (Swamp of POX - Plain Old XML)**
  - jeden endpoint pro celé API (např. `POST /api/service`)
  - většinou jen POST metoda pro všechny operace
  - akce určována obsahem payload `{"action": "getUser", "userId": 1}`

- **Level 1 (Resources)**
  - rozdělené zdroje s vlastními URI (`/api/users`, `/api/orders`)
  - stále převážně POST operace pro všechny akce `POST /api/users`with payload `{"action": "getUser", "userId": 1 }`
  - začíná resource-based design, ale nerespektuje HTTP metody

- **Level 2 (HTTP Verbs)**
  - správné využití HTTP metod pro různé operace s resources
  - `GET /api/users/1` (získání), `POST /api/users` (vytvoření), `PUT /api/users/1` (aktualizace), `DELETE /api/users/1` (smazání)
  - HTTP se používá jako aplikační protokol, ne jen transport
  - intuitivní a snadno pochopitelné API

- **Level 3 (Hypermedia/HATEOAS - Hypermedia As The Engine Of Application State)**
  - odpovědi obsahují odkazy na související akce a možné stavy
  - klient může dynamicky objevovat možnosti API bez hard-coded URL
  - decoupling klienta od serveru, API lze měnit bez breaking changes, klienti u sebe nepotřebují uchovávat dané URI
  - nejzralejší forma REST API

```json5
{
  // Příklad HATEOAS odpovědi
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "links": {
    "self": "/api/users/1",
    "update": "/api/users/1",
    "delete": "/api/users/1",
    "orders": "/api/users/1/orders"
  }
}
```
#### WSDL (web services definition language)

- standardizovaný způsob popisu rozhraní webových služeb (jméno, lokaci, podporované protokoly, operace, formát zpráv...), používá se se SOAP

#### SOAP (simple object access protocol)

- komunikační protokol pro web services, umožňuje výměnu dat, vzdálená volání funkcí
- slouží jako jednotná vrstva mezi službami (aktuálně se používá spíš gRPC)
