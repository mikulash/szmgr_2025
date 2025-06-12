# Otázky N-SWE Softwarové inženýrství (DEV) 2025

Tohle je fork [původního repozitáře s notes](https://github.com/holubond/szmgr/tree/main), s trochu updated strukturou a doplněnými/aktualizovanými/odstraněnými podotázkami. Trochu věcí je z google drive otazek nebo ruzne z internetu. Postupujte opatrně.

Oficiální link s otázkami: [https://www.fi.muni.cz/studies/fe-mgr/swe2021.html](https://www.fi.muni.cz/studies/fe-mgr/swe2021.html)

Každá otázka je v samostatném markdown souboru, ale všechny poznamky jsou pravidelně mergovany do jednoho souboru dostupného v github [releasech](https://github.com/mikulash/szmgr_2025/releases). třeba pro vygerování PDFka nebo tak. Tohle je dělaný github actions, takže by to `combined` verze by měla být vždy aktuální.

## Shorter TOC
**Společný základ programu**
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
   1. [Kvalita ve vývoji softwarových systémů, atributy kvality a softwarové metriky](1_kvalita_kodu.md#kvalita-ve-vývoji-softwarových-systémů-atributy-kvality-a-softwarové-metriky-16)
   2. [Taktiky pro zajištění kvality na úrovni jednotlivých atributů kvality](1_kvalita_kodu.md#taktiky-pro-zajištění-kvality-na-úrovni-jednotlivých-atributů-kvality-26)
   3. [Principy Clean Code a SOLID, refaktoring kódu](1_kvalita_kodu.md#principy-clean-code-a-solid-refaktoring-kódu-36)
   4. [Testování kódu, jednotkové testy, integrační testy, uživatelské a akceptační testy](1_kvalita_kodu.md#testování-kódu-jednotkové-testy-integrační-testy-uživatelské-a-akceptační-testy-46)
   5. [Ladění a testování výkonu](1_kvalita_kodu.md#ladění-a-testování-výkonu-56)
   6. [Proces řízení kvality ve vývoji softwarových systémů](1_kvalita_kodu.md#proces-řízení-kvality-ve-vývoji-softwarových-systémů-66)
   7. [Příklady z praxe pro vše výše uvedené](1_kvalita_kodu.md#notes)
2. [Softwarové inženýrství](2_softwarove_inzenyrstvi.md) (PA017)
   1. [Životní cyklus SW, proces vývoje a řízení softwarového vývoje](2_softwarove_inzenyrstvi.md#životní-cyklus-sw-proces-vývoje-a-řízení-softwarového-vývoje-15)
   2. [Metodika (Rational) Unified Process (UP, RUP), agilní metodiky a principy agilního vývoje SW](2_softwarove_inzenyrstvi.md#metodika-rational-unified-process-up-rup-25)
   3. [Nasazení a provoz softwarových systémů](2_softwarove_inzenyrstvi.md#nasazení-a-provoz-softwarových-systémů-45)
   4. [Údržba softwarových systémů, znovupoužitelnost](2_softwarove_inzenyrstvi.md#údržba-softwarových-systémů-znovupoužitelnost-55)
   5. [Příklady z praxe pro vše výše uvedené](2_softwarove_inzenyrstvi.md#agilní-metodiky-a-principy-agilního-vývoje-sw-35)
3. [Projektové řízení](3_projektove_rizeni.md) (PA179)
   1. [Plánování, řízení rizik, role modelů v projektovém řízení](3_projektove_rizeni.md#plánování-18)
   2. [Ganttovy diagramy, síťová analýza, metoda kritické cesty (CPM)](3_projektove_rizeni.md#ganttovy-diagramy-48)
   3. [Program Evaluation and Review Technique (PERT)](3_projektove_rizeni.md#program-evaluation-and-review-technique-pert-78)
   4. [Mezinárodní standardy a metodiky projektového řízení (PMI Project Management Body of Knowledge, PRINCE 2)](3_projektove_rizeni.md#mezinárodní-standardy-a-metodiky-projektového-řízení-88)
   5. [Příklady z praxe pro vše výše uvedené](3_projektove_rizeni.md#notes)
4. [Databáze](4_databaze.md) (PV003 || PA152)
   1. [Principy ukládání dat, databáze](4_databaze.md#principy-ukládání-dat-databáze-17)
   2. [Architektura relačních databází, dotazovací jazyk SQL a jeho části (definice, manipulace, transakce)](4_databaze.md#architektura-relačních-databází-dotazovací-jazyk-sql-a-jeho-části-27)
   3. [Jazyk definice datového schématu, DDL](4_databaze.md#jazyk-definice-datového-schématu-ddl-37)
   4. [Jazyk manipulace s daty, DML](4_databaze.md#jazyk-manipulace-s-daty-dml-47)
   5. [Relační algebra, integritní omezení, řízení transakcí](4_databaze.md#relační-algebra-integritní-omezení-řízení-transakcí-57)
   6. [Indexování, hašování](4_databaze.md#indexování-hašování-67)
   7. [Příklady z praxe pro vše výše uvedené](4_databaze.md#příklady-z-praxe-pro-vše-výše-uvedené-77)
5. [Počítačové sítě](5_pocitacove_site.md) (PA159, PA191)
   1. [Koncepty, principy, architektury](5_pocitacove_site.md#koncepty-principy-architektury-15)
   2. [ISO/OSI a TCP/IP model, IP protokol, transportní protokoly (TCP, UDP)](5_pocitacove_site.md#isoosi-a-tcpip-model-ip-protokol-transportní-protokoly-25)
   3. [Protokoly na síťových vrstvách, funkce IPv4, pokročilé funkce IPv6](5_pocitacove_site.md#protokoly-na-síťových-vrstvách-funkce-ipv4-pokročilé-funkce-ipv6-35)
   4. [Peer-to-peer (P2P) sítě, ad-hoc/senzorové sítě, vysokorychlostní sítě, počítačové sítě a multimédia](5_pocitacove_site.md#peer-to-peer-sítě-ad-hocsenzorové-sítě-vysokorychlostní-sítě-počítačové-sítě-a-multimédia-45)
   5. [Příklady z praxe pro vše výše uvedené](5_pocitacove_site.md#příklady-z-praxe-pro-vše-výše-uvedené-55)
6. [Distribuované systémy](6_distribuovane_systemy.md) (PA053) MISSING
   1. [Základní pojmy, principy](6_distribuovane_systemy.md#základní-pojmy-principy-16)
   2. [Rozdíl mezi centralizovanou a distribuovanou architekturou systému, nevýhody obojího a jejich překonávání](6_distribuovane_systemy.md#rozdíl-mezi-centralizovanou-a-distribuovanou-architekturou-systému-nevýhody-obojího-a-jejich-překonávání-26)
   3. [Replikace, sdílení dat](6_distribuovane_systemy.md#replikace-sdílení-dat-36)
   4. [Architektura orientovaná na služby (SOA), webové služby](6_distribuovane_systemy.md#architektura-orientovaná-na-služby-soa-webové-služby-46)
   5. [Příklady existujících technologií a jejich využití](6_distribuovane_systemy.md#příklady-existujících-technologií-a-jejich-využití-56)
   6. [Příklady z praxe pro vše výše uvedené](6_distribuovane_systemy.md#příklady-z-praxe-pro-vše-výše-uvedené-66)

### **Specializace DEV**

1. [Programování a softwarový vývoj](dev_1_programovani_a_softwarovy_vyvoj.md) (PA165 || PV179, volba Programování, SA200)
   1. [Nástroje a prostředí pro softwarový vývoj rozsáhlých systémů](dev_1_programovani_a_softwarovy_vyvoj.md#nástroje-a-prostředí-pro-softwarový-vývoj-rozsáhlých-systémů-16)
   2. [Základní koncepty softwarových architektur z pohledu implementace](dev_1_programovani_a_softwarovy_vyvoj.md#základní-koncepty-softwarových-architektur-z-pohledu-implementace-26)
   3. [Vícevrstvá architektura moderních informačních systémů, architektura model-view-controller](dev_1_programovani_a_softwarovy_vyvoj.md#vícevrstvá-architektura-moderních-informačních-systémů-architektura-model-view-controller-36)
   4. [Technologie a jazyky vhodné pro frontend a backend vývoj](dev_1_programovani_a_softwarovy_vyvoj.md#technologie-a-jazyky-vhodné-pro-frontend-a-backend-vývoj-46) MISSING
   5. [Persistence, ORM](dev_1_programovani_a_softwarovy_vyvoj.md#persistence-orm-56)
   6. [Příklady z praxe pro vše výše uvedené](dev_1_programovani_a_softwarovy_vyvoj.md#příklady-z-praxe-pro-vše-výše-uvedené-66)
2. [Analýza a návrh systémů](dev_2_analyza_a_navrh.md) (PA103, PV167 || PV258 || PV293)
   1. [Objektové metody návrhu informačních systémů](dev_2_analyza_a_navrh.md#objektové-metody-návrhu-informačních-systémů-16)
   2. [Specifikace a řízení požadavků](dev_2_analyza_a_navrh.md#specifikace-a-řízení-požadavků-26)
   3. [Softwarové architektury, komponentové systémy](dev_2_analyza_a_navrh.md#softwarové-architektury-komponentové-systémy-36)
   4. [Návrhové a architektonické vzory](dev_2_analyza_a_navrh.md#návrhové-a-architektonické-vzory-46)
   5. [Rozhraní komponent, kontrakty na úrovni rozhraní, OCL](dev_2_analyza_a_navrh.md#rozhraní-komponent-kontrakty-na-úrovni-rozhraní-ocl-56)
   6. [Modely softwarových systémů, jazyk UML](dev_2_analyza_a_navrh.md#modely-softwarových-systémů-jazyk-uml-66)
   7. [Příklady z praxe pro vše výše uvedené](dev_2_analyza_a_navrh.md#notes)
3. [Zpracování dat](dev_3_zpracovani_dat.md) (PA036, PA220 || PA212)
   1. [Základní pojmy a principy datových skladů, datové analytiky a business intelligence](dev_3_zpracovani_dat.md#základní-pojmy-a-principy-datových-skladů-datové-analytiky-a-business-intelligence-15)
   2. [Životní cyklus datového skladu](dev_3_zpracovani_dat.md#životní-cyklus-datového-skladu-25)
   3. [Analytika velkých dat, jazyky pro realizaci analytický úloh, analytika na úrovni databází](dev_3_zpracovani_dat.md#analytika-velkých-dat-jazyky-pro-realizaci-analytických-úloh-analytika-na-úrovni-databází-35)
   4. [Pokročilé techniky zpracování dat, výkonnostní aspekty zpracování velkých dat](dev_3_zpracovani_dat.md#pokročilé-techniky-zpracování-dat-výkonnostní-aspekty-zpracování-velkých-dat-45)
   5. [Příklady z praxe pro vše výše uvedené](dev_3_zpracovani_dat.md#notes)
4. [Bezpečný kód](dev_4_bezpecny_kod.md) (PV157, PV286 || PV017 || PV276)
   1. [Metody autentizace a řízení přístupu](dev_4_bezpecny_kod.md#metody-autentizace-a-řízení-přístupu-17)
   2. [Biometrické metody autentizace, jejich dopady a problémy](dev_4_bezpecny_kod.md#biometrické-metody-autentizace-jejich-dopady-a-problémy-27)
   3. [Elektronický podpis a jeho použití](dev_4_bezpecny_kod.md#elektronický-podpis-a-jeho-použití-37)
   4. [Autentizace strojů a aplikací](dev_4_bezpecny_kod.md#autentizace-strojů-a-aplikací-47)
   5. [Zásady a principy bezpečného kódu](dev_4_bezpecny_kod.md#zásady-a-principy-bezpečného-kódu-57)
   6. [Typické bezpečnostní chyby na úrovni kódu, souběžnost, ošetření vstupů](dev_4_bezpecny_kod.md#typické-bezpečnostní-chyby-na-úrovni-kódu-souběžnost-ošetření-vstupů-67)
   7. [Detekce bezpečnostních zranitelností, penetrační testování](dev_4_bezpecny_kod.md#detekce-bezpečnostních-zranitelností-penetrační-testování-77)
   8. [Příklady z praxe pro vše výše uvedené](dev_4_bezpecny_kod.md#notes)
5. [Uživatelská rozhraní](dev_5_uzivatelska_rozhrani.md) (PV252 || PV247 || PV278 || PV182)
   1. [Principy návrhu a vývoje uživatelského rozhraní v moderních softwarových systémech, vč. webových, mobilních](dev_5_uzivatelska_rozhrani.md#principy-návrhu-a-vývoje-uživatelského-rozhraní-v-moderních-softwarových-systémech-vč-webových-mobilních-14)
   2. [Proces vývoje uživatelského rozhraní a zásady kvality](dev_5_uzivatelska_rozhrani.md#proces-vývoje-uživatelského-rozhraní-a-zásady-kvality-24)
   3. [User experience (UX), interaction design, prototypování, wireframování, uživatelský výzkum, testování použitelnosti](dev_5_uzivatelska_rozhrani.md#user-experience-ux-interaction-design-prototypování-wireframování-uživatelský-výzkum-testování-použitelnosti-34)
   4. [Technologie a nástroje](dev_5_uzivatelska_rozhrani.md#technologie-a-nástroje-44)
