// add chess pieces
var config = {
    pieceTheme: 'assets/chessboardjs-1.0.0/img/chesspieces/{piece}.png',
    position: 'start'
};

var board = ChessBoard('board5', config);
var game = new Chess();

var pgn = '.Nc3 1.d4 Nf6 2.c4 g6 3Bg7 4.e4 d6 5.Nf3 0-0 6.O-O e4 7.Re1 Kd7 8.Rxe4 Qg5 9.Nxg5 f6 10.Qg4+ Ne6 11.Qxe6+ Kd8 12.Qe8#  1-0';
game.load_pgn(pgn);
$('#pgn5').html(pgn);

var history = game.history();
game.reset();
var i = 0;

// If prevous button clicked, go to prevous position
$('#prevBtn').on('click', function () {
    game.undo();
    board.position(game.fen());
    i -= 1;
    if (i < 0) {
        i = 0;
    }
});

// If next button clicked, go to next position
$('#nextBtn').on('click', function () {
    game.move(history[i]);
    board.position(game.fen());
    i += 1;
    if (i > history.length) {
        i = history.length;
    }
});


// If start button clicked, go to start position
$('#startPositionBtn').on('click', function () {
    game.reset();
    board.start();
    i = 0;
});

// If End button clicked, go to end position
$('#endPositionBtn').on('click', function () {
    game.load_pgn(pgn);
    board.position(game.fen());
    i = history.length;
});

// If reset button clicked, go to start position
$('#resetBtn').on('click', function () {
    game.reset();
    board.start();
    i = 0;
});

//moving pieces on button click

var movesArr = ['A következő játszmára a 9. fordulóban került sor, s éreztem, hogy különösen nagy jelentősége lehet. Az azeri Mamedov korosztályom (annó a 14 év alatti vb-n 2001-ben már össze is csaptunk), így egész jól ismerem. Tudtam, hogy kiváló formában van (értékszáma is erre utalt), de úgy gondoltam, hogy ellene akadhat bőven keresnivalóm, hiszen erőssége inkább a ravasz, taktikus állásokban rejlik, s nem a mély stratégiákban, így a pozíciójátékban könnyen eltévedhet hosszú távon, ami az én erős oldalam. Így nyugodt mederbe próbáltam terelni a játszmát, bízva abban, hogy az állások apró nüanszait majd jobban kiaknázom. Mellesleg egy kis megfázással küzdöttem az utolsó napokban, de ez néha még "előny" is tud lenni. Kihat a közérzetre, fáradtabb picit az ember, épp ezért jobban fókuszál, kevésbé ragadja el az izgalom, kisebb a mozgásigény épp ezért jobban bele tud feküdni a játszmába...:-) Nem kell feltétlenül elhinni ezt tőlem, de meglepő, hogy mennyire pozitív a mérlegem ilyenkor. ',
 '1.d4', 'Nf6 ', '1...d5', '-re is bőven volt esély. A szláv manapság a fő repertoárja klasszikus időbeosztás esetén.', '2.c4', 'g6 ', 'Szóval a királyindiai kerül terítékre. Ellenfelem alighanem valamilyen g3-as kezelésre, esetleg Saemisch szisztémára számíthatott. [',
  '2...e6', '3.Nf3', ']', '3.Nc3', '[', '3.g3', '-ra', '3...c6', 'komoly fejfájást okoz világosnak.]', '3...Bg7', '4.e4', 'd6 ', '5.Nf3', 'Az első meglepetés. 2011-ben Könnyű Jani megsemmisítő vereséget mért rám a klasszikus változatban, azóta nem játszottam így. [',
   '5.f3', 'A már "klasszikusnak" számító 16 évvel ezelőtti játszmánkban picit jobban álltam, de ügyes játékkal kitartotta az állást.', '5...0-0', '6.Bg5', 'a6 ', '7.Qd2', 'Nbd7 ', '8.Nh3', 'c6 ', '9.Nf2', 'b5 ','10.Rc1', 'bxc4 ', '11.Bxc4','c5 ', '12.dxc5', 'Nxc5 ','13.0-0', 'Be6 ', '14.Bxe6','Nxe6 ', '15.Be3', 'Erdős - Mamedov, Oropesa del Mar 2001]',
   '5...0-0', '6.Be2', 'e5 ','7.0-0', 'Nc6!', 'Irány a Mar del Plata, ami kb. a legélesebb védelmek egyike. Sötét az állás mielőbbi lezárására törekszik, ami után megindítja szokásos királyszárnyi offenzíváját. Fifikás döntés Mamedov részéről, ebben a változatban mindig akad kavarásra lehetőség, még ha objektíve sötét talán picit rosszabbul is áll. Manapság nem játszott így ellenfelem, inkább 7..exd4 vagy 7...c6 lépést kultiválta, főleg utóbbira fókuszáltam a felkészülés alatt. Az a tudat viszont erősített, hogy neki relatíve szerény tapasztalata van itt, míg nekem annó a főrepertoárom volt. ',
   '8.d5', ' Ne7 ', '9.Bg5!?','Második meglepetés, amire ellenfelem kicsit izgatottá is vált, percekre elmerült a gondolataiban. A változatot már a verseny előtt is elemeztem, de a Matinian elleni játszmámban már élesben is bevetésre várt. Ez a visszafogott pozíciós kezelés nem ad előnyt, viszont nagyon praktikus. Korábban itt amúgy főleg 9.e1-et részesítettem előnyben.',
    '9...h6 ', '[9...Nh5','tartják a változat kritikus pontjának, de a szöveglépés a legnépszerűbb.]', '10.Bxf6', 'A "Lukács iskola" növendékei mind így játszottak. Nem láttam okát, hogy eltérjek a hagyományoktól :)',
    '[10.Bd2!?', 'is komolyan számításba jön. A 9.d2-es varihoz képest van egy + ...h6 lépés, ez inkább világosnak kedvez alapvetően, de nem triviális.]', '10...Bxf6','11.b4', 'Világos miután eliminálta sötét legveszélyesebb támadó figuráját, gyors lerohanást tervez a vezérszárnyon! Sötété a futópár, de további tempót is bukik az ...f5 lépés megtétele előtt.',
     'a5','Hasznos közbeiktatás. Viszont lemond az ...a6 lehetőségről, ami egy csomó állásban az egyetlen védelem b5 ellen. [Egy időben', '11...Kg7', '12.c5','Ng8 ', '13.a4!', 'Be7 ','tervet jónak tartották, de kiderült, hogy',
    '14.c6!','után világos előnyre számíthat, hiszen 14...b6-ra most 15.a5 kellemetlen!; ','1...Bg7','12.c5','f5 ','13.Bd3','A másik fővonal. Egy korai példa a volt edzőm tollából szépen szemlélteti világos céljait:',
    '13...f4?!','14.Nd2!','g5 ','15.Be2!','Világos gyakorta ezzel a manőverrel veszi eléjét sötét kezdeményezési szándékának.','15...Kh8', '16.Rc1', 'Ng8', '17.Bg4', 'Nf6', '18.Bxc8', 'Rxc8', '19.f3',
    'Világos a futócserét követően vígan néz a jövőbe.','19...h5', '20.Kh1', 'Rf7', '21.Qa4', 'g4', '22.Qxa7', 'Ra8', '23.Qxb7', 'Rb8', '24.Qa6', 'g3', '25.h3', 'Nh7', '26.cxd6', 'cxd6', '27.Ne2!+-',
    'Sötét egyetlen fenyegetését (h4, g5-xh3) világos egy apró g1 lépéssel kivédi, s anyagi előnyét érvényesíti. Lukács - Ád.Horváth, Zalakaros 1996]','12.a3','Bg7 ','13.c5','[Relevant:',
    '13.Nd2', 'c6', '14.Nb3', 'axb4', '15.axb4', 'Rxa1', '16.Qxa1', 'f5', '17.Qa5', 'fxe4', '18.Nxe4', 'cxd5', '19.cxd5', 'Bf5', '20.f3', 'b6', '21.Qb5', 'Bd7', '22.Qd3', 'b5', '23.Kh1', 'Qb6', '24.Nc3 Rf4 25.Ne4', 'Rf8',
     '26.Nc3', 'Nf5', '27.Na5', 'Ne3', '28.Rc1', 'Nf5', '29.Nc6', 'Bxc6', '30.dxc6', 'Qxc6', '31.Qxb5', 'Qxb5', '32.Nxb5', 'Rb8', '33.Rb1', 'd5', '34.Nc7', 'e4', '35.Nxd5', 'Nd4', '36.Bd1', 'exf3', '37.Bxf3', 'Nxf3', '38.gxf3',
      'Rb5', '39.Nc7', 'Rh5', '40.f4', 'g5', '41.Ne8', 'gxf4', '42.Nxg7', 'Kxg7','Medvegy,Z (2518)-Bromberger,S (2505) Germany 2007 1-0]','13...f5','14.Bd3!','A rendszer alapeszméje. Világos a potenciális gyalogcsere esetén a futóját szeretné a blokád szerepében látni, remek védő és támadószerepet töltene be e4-en.',
      '[14.Nd2','Rosszabb, hiszen','14...fxe4','15.Ndxe4','Nf5 ','után sötét gond nélkül szállja meg a d4 mezőt.]','14...Kh8!?','Ravasz lépés egy hosszabb tépelődés eredményeképp.','[14...f4','után két terv közül választhat fehér:','15.Nd2','g5 ','16.cxd6!? ','(16.Nb5','16.Be2?!','11..a5 ','12.a3','beiktatása miatt, itt ez nem jó:',
      '16...axb4', '17.axb4', 'Rxa1', '18.Qxa1', 'g4)', '16...cxd6', '17.bxa5','pici előnnyel.;','14...axb4', '15.axb4', 'Rxa1', '16.Qxa1', 'f4 17.Nb5;', 
      '14...Kh7', '-re is', '15.Qb3','a precíz. Egy példaváltozat: ', '(15.Rc1', 'axb4', '16.axb4', 'c6=)', '15...f4', '16.Nb5', 'g5', '17.cxd6', 'cxd6', '18.Nd2', 'g4', '19.Nc4', 'a4', '20.Qc2', 'Rf6', '21.Rac1', 'Ng6', '22.Nbxd6', 'Rxd6', '23.Nxd6', 'Qxd6', '24.Qc7˛; ',
      '14...fxe4', '15.Bxe4', 'axb4', '16.axb4', 'Rxa1', '17.Qxa1', 'Nf5', '18.Qb1', 'g5', '19.Qd3','/= volt az elemzésem egyik kritikus változata.]','15.Rc1?!','Sajnos ez egy könnyelmű lépés volt a részemről, olyannyira, hogy sötét azonnal kiegyenlíthet.Elég gyorsan raktam ki a kezdőlépéseket, s még vitt a lendület...11...a5 12.a3 nélkül valóban ez a főlépés, de itt pontatlan. Az asztaltól elégedetten álltam fel egy rövid sétára, de röviddel ezután hirtelen belémhasított a felismerés, hogy megfeledkeztem a ...c6 opcióról...',
      '[15.Qb3','jobb, de utólag kiderült amúgy, hogy ez sem egyszerű, ha sötét nagyon precíz: ','15...c6!','(15...fxe4', '16.Bxe4', 'Nf5', '17.Nb5', 'Bd7', '18.a4!', '(18.c6', 'bxc6', '19.dxc6', 'Be8)', '18...axb4', '19.Qxb4 dxc5', '20.Qxc5˛)', '16.dxc6', 'Nxc6', '17.Rad1', '(17.Nb5', 'd5!',
      'Különben sötét sima hátrányban van, de így épp elég játékhoz jut.', '18.exd5', 'e4!„)', '17...axb4', '18.axb4', 'dxc5', '19.bxc5', 'Qe7!', '20.Nd5', '(20.Qb6!?', 'Ra3', '21.Nd5', 'Qf7)', '20...Qf7!„', '(20...Qxc5', '21.Nh4!', 'Kh7', '22.Nxg6!', 'Kxg6', '23.exf5+', 'Bxf5', '24.Bxf5+', 'Rxf5', '25.Qxb7', 'Ra7', '(25...Rd8', '26.Qxc6+)', '26.Qb1) ]', '15...axb4N',
      '[Predecessor:','15...fxe4', '16.Bxe4', 'Bf5', '17.Nd2', 'Bxe4', '18.Ndxe4', 'Nf5', '19.Qd3', 'Qd7', '20.c6', 'bxc6', '21.dxc6', 'Qf7', '22.Qd5', 'axb4', '23.axb4', 'Nd4', '24.Qxf7', 'Rxf7', '25.Kh1', 'Nxc6', '26.Nd5', 'Nxb4', '27.Nxb4', 'Ra4', '28.Rb1', 'c5', '29.Nxd6', 'Rd7', '30.Ne4', 
      'Rxb4', '31.Nxc5', 'Rdd4', '32.f3', 'Kh7', '33.Ne4', 'Bf8', '34.Rxb4', 'Bxb4', '35.Rc1', 'g5', '36.Rc7+', 'Kg6', '37.h3', 'Bd2', '38.Rc6+', 'Kh7', '39.Rc7+', 'Kg6', '40.Rc6+', 'Kh7', '41.Re6', 'Be3', '42.Kh2', 'Rb4', '43.Kg3', 'Rb6', '44.Rxb6', 'Bxb6', '45.h4',
      'Berczes,D (2461)-Zhao,N (2284) Acri 2006 1/2 (61)]','16.axb4','Az igazsághoz hozzátartozik, hogy annyira bosszantott, hogy még a saját varimat se tudom rendesen kirakni, s látván, hogy mennyire nincs semmim ...c6 után, remit ajánlottam. Mit számítana az a pár lépés plusz, amit a lépés megtétele után még rutinból megteszünk? Legalább lesz időm rendezni a soraim a hajrá előtt... De valahogy éreztem, hogy nem így ér véget ez a nap, s az ellenfelem - bár már elhasznált kb. 40 percet az én negyed órámmal szemben, az ambíciózus nyitásválasztásával összhangban - a továbbjátszás mellett döntött...',
      '16...Bd7?!','Ennyire nem örültem egy lépésnek sem a verseny folyamán. Ellenfelem fenn akarja tartani a figurákat, tovább bonyolítana, s inkább elkerüli az objektíve helyes folytatást, amit valószínűleg nem tett volna meg az események "normál" alakulása esetén, pl. ha csak simán á tempó visszaütöm a gyalogot. Így utólag akár egy sikeres pszichológia trükknek is tekinthető a dolog némi jóindulattal :-). Innentől mellesleg magabiztosan irányítom a játszmát.',
      '[16...c6','után eltűnnek a vezérszárnyi gyalogok, így a nyerési esélyeknek is viszlát:','17.dxc6', 'bxc6', '(17...Nxc6?!', '18.Nb5', 'dxc5', '19.bxc5', 'b6', '20.Nd6', 'bxc5', '21.Nxc8', 'Rxc8', '22.Rxc5)', '18.cxd6', 'Qxd6', '19.b5', '(19.Qe2!?', 'fxe4', '(19...Qxb4', '20.exf5', 'Bxf5', '21.Bxf5', 'Rxf5', '22.Ne4°)', '20.Nxe4', 'Qxb4',
      'A kompenzáció egálra elég max.)','19...Rd8', '20.Qe2!', 'cxb5', '(20...Qxd3?', '21.Rfd1)', '21.Bxb5', 'Bb7','Teljesen egál.]','17.Nd2!','Mivel a  d7-en nem áll annyira jól a centrum nyitása esetén, ez a helyes reakció! ',
      '[17.Qb3','-re felmerülne','17...Be8!?', '(17...fxe4', '18.Bxe4)', '18.Nd2', 'Bf7','gondolata.]','17...f4?!','Ideges lépés. Sötét támadna, de enélkül a lépés nélkül nem lehetséges. Így viszont világos centruma stabilizálódik, viszonylag nyugodtan kibontakoztathatja vezérszárnyi terveit.',
      '[17...fxe4','után nekem tetszene: ','18.Bxe4', '(18.Ndxe4','A gép választása:','18...Nf5', '19.Bc4!?', '(19.Ra1!?', '19.Bb5', 'Bc8÷)', '18...Nf5', '19.c6', '(19.Nc4!?', 'Qe7', '20.c6', 'bxc6', '21.dxc6', 'Be6', '22.Nd5)', '19...bxc6', '(19...Bc8', '20.Nc4', 'b6', '(20...bxc6', '21.dxc6', 'Nd4', '22.b5;', '20...Kh7', '21.Qd3)', '21.Qd3˛)', '20.dxc6', 'Be6 21.Bd5', 'Qe8', '22.Nde4',
      'remek blokáddal a világos centrummezőkön!; ','17...Be8!?]','18.Nb5','Kritikus pillanat. Több lehetőségem is akadt, de egy idő után rájöttem, hogy felesleges túlbonyolítani a dolgokat. Világos stratégiája egyszerű 18.b5-tel: megsemmisíteni sötét világos színeken mozgó futóját - a gyalogcsere után c7-e6-ra igyekszik a paripa - miután sötét komoly támadásra nem számíthat, s az e6-on keletkező gyalog lenyerése meg könnyen nehézségekbe ütközhet... ',
      '[18.Bb5', 'c6', '19.Be2', '(19.cxd6', 'cxb5!?', '20.dxe7', 'Qxe7÷)', '19...dxc5', '20.bxc5 b6!?', '21.Nb3˛;', 
        '18.Be2', 'h5', '19.Qb3', '(19.Nc4', 'Nc8)', '19...Bh6˛]', '18...Rf6','Profilaxis a fent említett terv keresztülhúzására és védi a d6-ot is.','[18...Bxb5', '19.Bxb5', 'c6', '20.Bc4', '(20.Be2!?)', '20...dxc5', '21.bxc5', 'cxd5', '22.exd5', 'Nxd5', '23.Ne4', 'Nf6', '24.Nd6˛;', 
            '18...g5', '19.cxd6', 'cxd6', '20.Nc7', 'Rc8', '(20...Ra3?', '21.Bb5', 'Bc8', '(21...Bxb5', '22.Nxb5+-)', '22.Nc4+-)', '21.Ne6', 'Bxe6', '22.dxe6', 'Rxc1', '23.Qxc1˛;', 
            '18...Nc8', '19.Be2', '(19.c6?', 'bxc6', '20.dxc6', 'Be8!;', '19.Ra1!?', 'Rxa1', '20.Qxa1', '19.cxd6', 'Nxd6', '20.Nxc7', 'Rc8', '21.Ne6', 'Bxe6', '22.dxe6', 'Rxc1', '23.Qxc1', 'Qe7)', '19...h5', '20.Qb3', 'Bh6', '21.Rc2˛]', '19.Qb3', 
            'Ideális mező a vezérnek, s támogatja a fő eszmét is.','19...g5', '[19...Rc8', '20.Rc2', 'g5', '21.Rfc1]', '20.cxd6', 'cxd6', '21.Nc7', 'Rc8', '22.Ne6', 'Bxe6', '23.dxe6', 
            'Megvalósult a korábban elképzelt terv.','23...g4 ','Ellenjátékban reménykedik sötét.','[23...Nc6','rettentő gyanús, de nem egyértelmű.','24.b5','(24.Bb5!?)','24...Nd4','25.e7','Qd7 ','26.Rxc8+',
            'Qxc8 ','27.Qa3!','(27.Qd5','Re6!','28.Nc4','Rxe7 ','29.Nxd6','Qg8!','Computeri higgadtság...)','27...Re6 ','28.Rc1]','24.Bb5!±','Egyszerű és logikus, a d7-re igyekszik, ahol véd s támad egyszerre. Mellesleg előkészíti majd a c4-et is, ami után a d6 védhetetlen lesz.',
            '24...Rxc1', '[24...h5', '25.Bd7', 'Rb8', '26.Nc4', 'Nc8', '27.Rfd1+-]', '25.Rxc1', 'g3!?','ötét megkaparintja a szabadgyalogot, de tovább romlik a szerkezete, s egyre nyilvánvalóbbá válik könnyűtisztjeinek kényelmetlen helyzete. Nehéz mit javasolni helyette, hiszen világos különben szép lassan építgette volna állását, s alighanem az e7 blokád se lett volna tartható idővel, ami a parti végét jelentené.',
            '26.hxg3', 'fxg3', '27.Qxg3', 'Rxe6', '28.Qh3!', 'Gyorsan hoztam meg ezt a praktikus döntést is. A vezérek cseréje után sötét a legcsekélyebb ellenjátékban is alig reménykedhet. Mamedov dolgát itt már fogyatkozó ideje is nehezítette.',
            '28...Rf6', '[28...Rg6', '29.Qd7', '(29.Nf3!?)', '29...Qf8', '30.Rc7', 'Qf4', '(30...Bf6', '31.Rxb7)', '31.Qxe7', '(31.Nf1!?)', '31...Qxd2', '32.Rxb7+-]', '29.Qd7!', '[29.Nc4!?','is számításba jött.] ','29...Qxd7', '30.Bxd7', 'd5', '31.Rc7',
            'Meglehetősen egyszerű stílusban döntő előnybe kerültem. Nem mindig szükségesek világmegváltó ötletek egy játszma megnyeréséhez :)','31...b6', '32.b5', '[32.Be8', 'Bf8™', '(32...Re6?', '33.Bf7)', '33.b5',
            'volt a másik lehetőség.]','32...Bf8','33.Kf1','Néhány változatban számolni kellett a d5 gyalog előre nyomulásával. Mi sem könnyebb, mint ennek elejét venni?','33...Rd6', '[33...d4', '34.Nc4]', '34.Bc6', '[34.Rb7',
            'pontosabb lett volna. Most fenyeget 35.c6 xc6 36.xb6!]','34...dxe4', '35.Nc4', '[35.Nxe4','is jónak kell legyen, de nekem más tervem akadt.]','35...Rd1+', '36.Ke2', 'Rb1', '37.Nxe5', 'Ezt számoltam 33.f1-nél. Sötét bástyája bár aktivizálódott ez aligha mondható el a többi figurájáról. Az e4, b6 gyalog krónikusan gyenge. Ráadásul egy apró trükk lóg a levegőben, ellenfelem megfeledkezik róla, felgyorsítva a befejezést.',
            '37...Rb2+?!','[37...Kg7','után sincs feketének reális esélye a túlélésre, hiába maradt kevés anyag a táblán. ','38.Ke3', 'Rb4', '(38...Rb2', '39.Rb7;', '38...Kf6', '39.Nd7+)', '39.Rb7+-]', '38.Ke3', 'Rb4?“', '[38...Kg7','volt az egyetlen.]','39.Rxe7!','39...xe7-re 40.g6 lenyeri a futót és rövidesen hullik a b6, e4 gyalog is, ezért sötét feladta.','1-0']

            

for (var i = 0; i < movesArr.length; i++) {
    var moves = document.getElementById('moves')
    var createButtons = moves.appendChild(document.createElement("button"));
    createButtons.appendChild(document.createTextNode(movesArr[i]));
}

var buttons = document.getElementsByTagName('button')
for (var i = 0; i < buttons.length; i++)
    buttons[i].id = 'move' + i;


$('#move5').on('click', function () {
    board.position('rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq d3 0 1')
})

$('#move6').on('click', function () {
    board.position('rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 1 2')
})

$('#move7').on('click', function () {
    board.position('rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq c3 0 2')
})

$('#move8').on('click', function () {
    board.position('rnbqkb1r/pppppp1p/5np1/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3')
})

$('#move9').on('click', function () {
    board.position('rnbqkb1r/pppppp1p/5np1/8/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq - 1 3')
})

$('#move10').on('click', function () {
    board.position('rnbqk2r/ppppppbp/5np1/8/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 4')
})