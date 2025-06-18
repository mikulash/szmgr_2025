# Uživatelská rozhraní

> Principy návrhu a vývoje uživatelského rozhraní v moderních softwarových systémech, vč. webových, mobilních. Proces vývoje uživatelského rozhraní a zásady kvality. User experience (UX), interaction design, prototypování, wireframování, uživatelský výzkum, testování použitelnosti. Technologie a nástroje. Příklady z praxe pro vše výše uvedené. (PV252 || PV247 || PV278 || PV182)

1. [Principy návrhu a vývoje uživatelského rozhraní v moderních softwarových systémech, vč. webových, mobilních (1/4)](#principy-návrhu-a-vývoje-uživatelského-rozhraní-v-moderních-softwarových-systémech-vč-webových-mobilních-14)
2. [Proces vývoje uživatelského rozhraní a zásady kvality (2/4)](#proces-vývoje-uživatelského-rozhraní-a-zásady-kvality-24)
3. [User experience (UX), interaction design, prototypování, wireframování, uživatelský výzkum, testování použitelnosti (3/4)](#user-experience-ux-interaction-design-prototypování-wireframování-uživatelský-výzkum-testování-použitelnosti-34)
4. [Technologie a nástroje (4/4)](#technologie-a-nástroje-44)

*Fun fact: v PV247 se toho o této otázce (vyjma základů Reactu) moc nedozvíte. Ostatní předměty jsem neměl, tak jen z vlastních zkušeností.*

## Principy návrhu a vývoje uživatelského rozhraní v moderních softwarových systémech, vč. webových, mobilních (1/4)

Klíčem k úspěchu UI je uživatelská přívětivost a snadné použití rozhraní. Nabušený systém s tunou pokročilých funkcionalit bude k ničemu, pokud se nedá jednoduše používat koncovými uživateli. Běžní uživatelé obvykle dokáží systémům s dobrým UI prominout i některé funkcionální nedostatky.

Návrh rozhraní může ovlivňovat:

- Jedná se o interní, nebo veřejný systém? (Musí s ním uživatelé pracovat, nebo s ním pracují jen, když chtějí?)
- Úroveň odbornosti uživatelů
- Nutnost možnosti přizpůsobení
- Nutnost vícejazyčnosti aplikace (problém mohou dělat třeba odlišné druhy písma)
- Nutnost přístupnosti (accessibility) pro uživatele s nějakým omezením (zrakové nebo sluchové specifické potřeby, nutnost používat pro ovládání pouze myš nebo pouze klávesnici)
- Platforma, na které aplikace běží

UI se obvykle vyvíjí jako monolit, ale je možné dělat i microfrontendy.

Je fajn brát v potaz

- Uživatelskou přívětivost (např. složité formuláře je lepší rozdělit na více částí, pole uspořádat top-down namísto v tabulce)
- Bezpečnost – u aplikací, na které mohou cílit útočníci, je vhodné stránku uživateli přizpůsobit (např. zobrazit jeho fotku), aby bylo těžké stránku napodobit
- Skrývání hesel (změna viditelnosti textu ve vstupním poli)
- Používání vhodných vstupních polí (např. `<input type="email">` pro e-mail, `<input type="tel">` pro telefonní číslo)
- Rozhraní by mělo být jednotné (konzistentní – jednotné barvy, fonty, styl tlačítek apod.)
- Responsivita – fungování aplikace na různě velkých obrazovkách (desktop, tablet, mobil)

### Specifika pro web

- Řešíme, kdy je stránka renderovaná:
  - Server side rendering (SSR) – stránka je plně renderovaná na serveru, vhodné pro statické aplikace
  - Client side rendering (CSR) – stránka se renderuje na straně klienta, data se do aplikace načítají pomocí dotazů na server

- Dříve aplikace fungovaly jako multi-page (přechod na jinou stránku znamenal kompletní nové načtení, např. v PHP)
- Později se přešlo na single-page přístup pomocí client side renderingu
- Aktuálně je možné přístupy míchat (initial page load je SSR, následně CSR), což je vhodné pro rychlý počáteční load a SEO (např. Next.js)

## Proces vývoje uživatelského rozhraní a zásady kvality (2/4)

Začneme uživatelským výzkumem, abychom pochopili skutečné požadavky na UI. Následuje návrh pomocí wireframů a prototypů, které lze použít pro zpětnou vazbu a jako předlohu pro vývoj. Na závěr je důležité provést uživatelské testování s různými typy uživatelů, abychom předešli problémům při nasazení aplikace.

### Uživatelský výzkum, analýza

- Je důležité určit, kdo jsou naši uživatelé, jak dosud pracují se stávajícími systémy, co jim vyhovuje a co ne.
- Je třeba analyzovat požadavky na systém a způsob, jakým se systém používá (např. minimalizace počtu kliknutí pro dosažení určité operace).
- S uživateli lze pracovat ve **focus groups** (diskusních skupinách).
- Lze použít A/B testování – každé skupině uživatelů prezentujeme určitou variantu produktu a sledujeme její dopad na chování.

## User experience (UX), interaction design, prototypování, wireframování, uživatelský výzkum, testování použitelnosti (3/4)

### User experience (UX)

UX kombinuje následující aspekty:

- Vizuální estetika (přitažlivý a konzistentní design)
- Použitelnost (usability – rozhraní, které umožňuje plnit úkoly i za určitých omezení)
- Užitnost (utility – rozhraní musí umožňovat provádět požadované úkony)
- Efektivita (efficiency – usnadňuje provádění opakujících se činností)
  - Uživatel by neměl být nucen zadávat do systému stejné informace vícekrát.
  - Pro časté akce je vhodné umožnit dobře známé klávesové zkratky (např. Ctrl + S pro uložení).

Celkové uživatelské zkušenosti rozhodují o tom, zda budou uživatelé produkt aktivně využívat.

### Interaction design

Snažíme se pochopit, jakým způsobem uživatelé se systémem interagují, a navrhnout rozhraní tak, aby odpovídalo jejich potřebám a zvyklostem. Patří sem mapování uživatelských toků, definice klíčových scénářů a optimalizace cest (user flows).

### Wireframování

Wireframe je grafický skelet webu nebo aplikace, který slouží jako průvodce obsahem a koncepty stránek. Funguje podobně jako architektonický plán a pomáhá designérům a klientům diskutovat o detailech budování rozhraní.
**Účel:** Získání konsenzu a sběr interní zpětné vazby o tom, jak bude nová funkcionalita fungovat

**Charakteristiky:**
- Low fidelity design (nízká věrnost)
- Skládá se z čar, boxů a odstínů šedi
- Neřeší se zde barvy a styly, ale pouze layout a struktura obsahu
- Slouží ke komunikaci informační struktury, layoutu, obsahu a funkcionality
  

### Mockupy
Mockup je statický návrh uživatelského rozhraní, který zobrazuje, jak bude aplikace vypadat. Obsahuje detaily jako barvy, fonty a další vizuální prvky, ale obvykle není interaktivní.

### Prototypování

Krok výše od wireframu s vyšší věrností (higher fidelity). Pomocí návrhových nástrojů jako Adobe XD nebo Figma lze vytvořit (částečně i interaktivní) prototyp.

**Charakteristiky:**
- Zahrnuje realisticky vypadající komponenty
- Slouží pro další diskusi se stakeholdery
- Využívá se pro uživatelské testování a získání zpětné vazby
- Validované prototypy jsou připravené k vývoji
### Testování použitelnosti

Testování použitelnosti může zahrnovat:

- Pozorování uživatelů při provádění úkonů v rámci systému:
  - Sledujeme jejich akce, reakce, potíže.
  - Na základě pozorování navrhujeme zlepšení a úpravy UI.
- Evaluaci experty z oblasti přístupnosti (accessibility). Lze také použít automatizované nástroje jako Lighthouse.
- Sledování pohybu očí (eye-tracking) uživatele při používání produktu:
  - Zjistíme, které části rozhraní upoutají nejvíce pozornosti.
  - Pro eye-tracking je obvykle nutný souhlas uživatele.

## Technologie a nástroje (4/4)

V současnosti je nejuniverzálnějším způsobem tvorby UI HTML + CSS + JS. Aktuálně jsou populární frontendové JS frameworky (React, Vue, Solid, Svelte, Angular …). Lze je použít v prohlížeči, jako desktopovou aplikaci (Electron – přibalí se k aplikaci Chromium, nebo s využitím nativního WebView, např. Tauri), pro mobilní aplikace (Progressive Web App, není nutné instalovat z App Store), případně mají vlastní verze pro nativní mobilní zařízení (React Native, Svelte Native …). Tyto technologie mají obvykle dobře řešené věci jako accessibility či lokalizaci, existují pro ně solidní komponentové knihovny.

Aktuálním trendem s interesantním potenciálem je WebAssembly, které umožňuje použití kompilovaného jazyka (C/C++, Rust …). Výsledná aplikace je spustitelná v prohlížeči a zpravidla rychlejší než čistý JS. WASM podporuje dva režimy – práci s DOM, nebo přímé vykreslování na `<canvas>` (používá třeba Figma).

Alternativou může být použití multiplatformního frameworku Flutter (používá jazyk Dart, podporuje Android, iOS, web), který umožňuje vývoj pro více platforem z jednoho kódu.

Nativními jazyky pro mobilní aplikace jsou Swift (iOS) a Java/Kotlin (Android).

Pro desktopové aplikace je možné použít i technologie jako GTK (existují bindingy pro různé jazyky) nebo Qt (C++), JavaFX …

[Go back to the first question](1_kvalita_kodu.md)
