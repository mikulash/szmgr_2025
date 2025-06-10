# Otázky N-SWE Softwarové inženýrství (DEV) 2025

Tohle je fork [původního repozitáře s notes](https://github.com/holubond/szmgr/tree/main), s trochu updated strukturou a doplněnými/aktualizovanými/odstraněnými podotázkami. Trochu věcí je z google drive otazek nebo ruzne z internetu. Postupujte opatrně.

Oficiální link s otázkami: [https://www.fi.muni.cz/studies/fe-mgr/swe2021.html](https://www.fi.muni.cz/studies/fe-mgr/swe2021.html)

## Shorter TOC

1. [Kvalita kódu](1_kvalita_kodu.md)
2. [Softwarové inženýrství](2_softwarove_inzenyrstvi.md)
3. [Projektové řízení](3_projektove_rizeni.md)
4. [Databáze](4_databaze.md)
5. [Počítačové sítě](5_pocitacove_site.md)
6. [Distribuované systémy](6_distribuovane_systemy.md)

Specializace DEV
1. [Programování a softwarový vývoj](dev_1_programovani_a_softwarovy_vyvoj.md)
2. [Analýza a návrh systémů](dev_2_analyza_a_navrh.md)
3. [Zpracování dat](dev_3_zpracovani_dat.md)
4. [Bezpečný kód](dev_4_bezpecny_kod.md)
5. [Uživatelská rozhraní](dev_5_uzivatelska_rozhrani.md)

## Detailed TOC

### **Společný základ programu**

1. [Kvalita kódu](1_kvalita_kodu.md) (PV260, PA017, PA103)
    1. Kvalita ve vývoji softwarových systémů, atributy kvality a softwarové metriky.
    2. Taktiky pro zajištění kvality na úrovni jednotlivých atributů kvality.
    3. Principy Clean Code a SOLID, refaktoring kódu.
    4. Testování kódu, jednotkové testy, integrační testy, uživatelské a akceptační testy.
    5. Ladění a testování výkonu.
    6. Proces řízení kvality ve vývoji softwarových systémů.
    7. Příklady z praxe pro vše výše uvedené.
2. [Softwarové inženýrství](2_softwarove_inzenyrstvi.md) (PA017)
    1. Životní cyklus SW, proces vývoje a řízení softwarového vývoje.
    2. Metodika (Rational) Unified Process (UP, RUP), agilní metodiky a principy agilního vývoje SW.
    3. Nasazení a provoz softwarových systémů.
    4. Údržba softwarových systémů, znovupoužitelnost.
    5. Příklady z praxe pro vše výše uvedené.
3. [Projektové řízení](3_projektove_rizeni.md) (PA179)
    1. Plánování, řízení rizik, role modelů v projektovém řízení.
    2. Ganttovy diagramy, síťová analýza, metoda kritické cesty (CPM), Program Evaluation and Review Technique (PERT).
    3. Mezinárodní standardy a metodiky projektového řízení (PMI Project Management Body of Knowledge, PRINCE 2).
    4. Příklady z praxe pro vše výše uvedené.
4. [Databáze](4_databaze.md) (PV003 || PA152)
    1. Principy ukládání dat, databáze.
    2. Architektura relačních databází, dotazovací jazyk SQL a jeho části (definice, manipulace, transakce).
    3. Jazyk definice datového schématu, DDL.
    4. Jazyk manipulace s daty, DML.
    5. Relační algebra, integritní omezení, řízení transakcí.
    6. Indexování, hašování.
    7. Příklady z praxe pro vše výše uvedené.
5. [Počítačové sítě](5_pocitacove_site.md) (PA159, PA191)
    1. Koncepty, principy, architektury.
    2. ISO/OSI a TCP/IP model, IP protokol, transportní protokoly (TCP, UDP).
    3. Protokoly na síťových vrstvách, funkce IPv4, pokročilé funkce IPv6.
    4. Peer-to-peer (P2P) sítě, ad-hoc/senzorové sítě, vysokorychlostní sítě, počítačové sítě a multimédia.
    5. Příklady z praxe pro vše výše uvedené.
6. [Distribuované systémy](6_distribuovane_systemy.md) (PA053) MISSING
    1. Základní pojmy, principy.
    2. Rozdíl mezi centralizovanou a distribuovanou architekturou systému, nevýhody obojího a jejich překonávání.
    3. Replikace, sdílení dat.
    4. Architektura orientovaná na služby (SOA), webové služby.
    5. Příklady existujících technologií a jejich využití.
    6. Příklady z praxe pro vše výše uvedené.

### **Specializace DEV**

1. [Programování a softwarový vývoj](dev_1_programovani_a_softwarovy_vyvoj.md) (PA165 || PV179, volba Programování, SA200)
    1. Nástroje a prostředí pro softwarový vývoj rozsáhlých systémů.
    2. Základní koncepty softwarových architektur z pohledu implementace.
    3. Vícevrstvá architektura moderních informačních systémů, architektura model-view-controller.
    4. Technologie a jazyky vhodné pro frontend a backend vývoj. MISSING
    5. Persistence, ORM.
    6. Příklady z praxe pro vše výše uvedené.
2. [Analýza a návrh systémů](dev_2_analyza_a_navrh.md) (PA103, PV167 || PV258 || PV293)
    1. Objektové metody návrhu informačních systémů.
    2. Specifikace a řízení požadavků.
    3. Softwarové architektury, komponentové systémy.
    4. Návrhové a architektonické vzory.
    5. Rozhraní komponent, kontrakty na úrovni rozhraní, OCL.
    6. Modely softwarových systémů, jazyk UML.
    7. Příklady z praxe pro vše výše uvedené.
3. [Zpracování dat](dev_3_zpracovani_dat.md) (PA036, PA220 || PA212)
    1. Základní pojmy a principy datových skladů, datové analytiky a business intelligence.
    2. Životní cyklus datového skladu.
    3. Analytika velkých dat, jazyky pro realizaci analytický úloh, analytika na úrovni databází.
    4. Pokročilé techniky zpracování dat, výkonnostní aspekty zpracování velkých dat.
    5. Příklady z praxe pro vše výše uvedené.
4. [Bezpečný kód](dev_4_bezpecny_kod.md) (PV157, PV286 || PV017 || PV276)
    1. Metody autentizace a řízení přístupu.
    2. Biometrické metody autentizace, jejich dopady a problémy.
    3. Elektronický podpis a jeho použití.
    4. Autentizace strojů a aplikací.
    5. Zásady a principy bezpečného kódu.
    6. Typické bezpečnostní chyby na úrovni kódu, souběžnost, ošetření vstupů.
    7. Detekce bezpečnostních zranitelností, penetrační testování.
    8. Příklady z praxe pro vše výše uvedené.
5. [Uživatelská rozhraní](dev_5_uzivatelska_rozhrani.md) (PV252 || PV247 || PV278 || PV182)
    1. Principy návrhu a vývoje uživatelského rozhraní v moderních softwarových systémech, vč. webových, mobilních.
    2. Proces vývoje uživatelského rozhraní a zásady kvality.
    3. User experience (UX), interaction design, prototypování, wireframování, uživatelský výzkum, testování použitelnosti.
    4. Technologie a nástroje.
    5. Příklady z praxe pro vše výše uvedené.
