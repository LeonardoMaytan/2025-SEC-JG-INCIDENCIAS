const { jsPDF } = window.jspdf;

// 🧑‍🏫 Lista de docentes (DNI y nombre completo)
const docentes = [
    { dni: "20023295", nombre: "MELGAR QUISPE José Fernando" },
    { dni: "20659653", nombre: "AQUINO BORJA Julio César" },
    { dni: "19936071", nombre: "HUAMAN ESPIÑOZA Luis Jaime" },
    { dni: "20995200", nombre: "RAYMUNDO OLORTEGUI Celia Haydee" },
    { dni: "77678711", nombre: "MAYTAN QUISPE Leonardo" },
    { dni: "20026612", nombre: "MUÑOZ ROMERO Ernesto Basilio" },
    { dni: "8132128", nombre: "CONDE NUÑEZ Baltazar" },
    { dni: "44617071", nombre: "SARMIENTO PÁRRAGA Judit Sarai" },
    { dni: "43580649", nombre: "SUAREZ MERCADO Bertha Alicia" },
    { dni: "77571745", nombre: "SANCHEZ MARTINEZ Eliza" },
    { dni: "19944259", nombre: "GARCÍA NAVARRO Rosario" },
    { dni: "20721648", nombre: "PUITALLA PALOMINO Dina" },
    { dni: "20046032", nombre: "ZURITA AVELLANEDA Lilian Luz" },
    { dni: "41325193", nombre: "HUAMÁN FUENTES Jaime" },
    { dni: "44620632", nombre: "HUACHO AYALA Francisco" },
    { dni: "43113025", nombre: "VILLAR QUIÑONEZ Jimmy" },
    { dni: "71259223", nombre: "DE LA CRUZ FELIPES Jackeline Ruth" },
    { dni: "19986593", nombre: "ARNESQUITO SEDANO Eliseo" },
    { dni: "45373482", nombre: "OCHOCHOQUE HERNANDEZ Julio" },
    { dni: "72858666", nombre: "CARHUAS QUISPE Wilkenson David" },
    { dni: "72786192", nombre: "MENDOZA CHAMORRO Elver" },
    { dni: "42307113", nombre: "ZEVALLOS CÓRDOVA Gilda Mercedes" },
    { dni: "20717089", nombre: "AQUINO ESPEJO Virginia Margarita" },
    { dni: "70299075", nombre: "JUÑO CANDIOTTI Rosmeri" },
    { dni: "71015731", nombre: "HUARACA ALHUAY Naida" },
    { dni: "41416677", nombre: "PAUCAR SANTIAGO Teofilo" },
    { dni: "40350479", nombre: "CASAS MUCHA Yony Genaro" },
    { dni: "45298490", nombre: "BALDEON MELCHOR Abner M." },
    { dni: "70515635", nombre: "JAUREGUI ZÁRATE Elfer Teo" },
    { dni: "73769942", nombre: "PARRA ROJAS Rosario Estephany" },
    { dni: "40064782", nombre: "FABIAN CABRERA Nestor Aquilio" },
    { dni: "80210142", nombre: "ROSADO FABIAN Manuel" },
    { dni: "20702993", nombre: "NONALAYA MANDUJANO Mencio Elmer" },
    { dni: "46652939", nombre: "SANABRIA RICCSE David" },
    { dni: "42669957", nombre: "ROJAS ZAVALETA Johana" },
    { dni: "44299875", nombre: "APOLINARIO PRADO Jessica" },
    { dni: "42569257", nombre: "CORILLOCLLA HUAMAN Wilfredo" },
    { dni: "19972859", nombre: "PARIONA MOLINA, Roger" },
    { dni: "72977073", nombre: "VASQUEZ QUINTICUARI, Jean Jose" },
    { dni: "63422838", nombre: "MATOS OCAÑO GILMER SILVERIO" },
    { dni: "48114358", nombre: "VIDAL CASTAÑEDA Moisés" },
    { dni: "20966829", nombre: "CHAVES CERRATO JESUS" },
    { dni: "21003397", nombre: "GARAY MINA Yuri" },
    { dni: "41976775", nombre: "CARNICA SANTOS Walter Ivan" },
    { dni: "43410403", nombre: "ARROYO DEL CASTILLO Yoreli Nerby" },


    // ... añade todos los demás docentes aquí
];

// 👨‍🎓 Lista de estudiantes (ejemplo — tú pondrás los 600 reales)

const estudiantes = [
    { dni: "63587491", nombre: "AGUIRRE MORON NICOLL ARELI", grado: "PRIMERO A                             " },
    { dni: "62269052", nombre: "BALTAZAR PAUCAR SADIT SARAY", grado: "PRIMERO                       A                             " },
    { dni: "63151025", nombre: "BENDEZU CHAMORRO ADAEL OTHNIEL AHUV", grado: "PRIMERO                       A                             " },
    { dni: "80847006", nombre: "BENDEZU FLORES ZIREL SHARELLY", grado: "PRIMERO                       A                             " },
    { dni: "63150947", nombre: "CASTILLON CASTILLO JUAN ALFONSO", grado: "PRIMERO                       A                             " },
    { dni: "63233886", nombre: "CAYSAHUANA CHIRICENTE JHONSELL JHAMS", grado: "PRIMERO                       A                             " },
    { dni: "63692444", nombre: "CORNEJO ZUTA ANDREA MILAGROS", grado: "PRIMERO                       A                             " },
    { dni: "63368844", nombre: "ESPIRITU BUENDIA YULIET SADAI", grado: "PRIMERO                       A                             " },
    { dni: "63349766", nombre: "ETENE MAGIN EDWIN FRANCISCO", grado: "PRIMERO                       A                             " },
    { dni: "62201364", nombre: "FLORES INGA SAMUEL", grado: "PRIMERO                       A                             " },
    { dni: "81090384", nombre: "GUERRA QUISPE JEAMPOL SMITH", grado: "PRIMERO                       A                             " },
    { dni: "80978269", nombre: "LAPA RAMOS RAFAEL TEODORO", grado: "PRIMERO                       A                             " },
    { dni: "62388215", nombre: "LOPEZ CAMACHO KENER RANDY", grado: "PRIMERO                       A                             " },
    { dni: "62976742", nombre: "MALDONADO CAMPOS JHOSSIER HENDERSON", grado: "PRIMERO                       A                             " },
    { dni: "63020986", nombre: "MAUCALLE YANOS MARCO ANTONIO", grado: "PRIMERO                       A                             " },
    { dni: "80846670", nombre: "MEZA GAMBOA ESMERALDA ANALI", grado: "PRIMERO                       A                             " },
    { dni: "79146291", nombre: "MUÑOZ RAMOS REY ANGUIELO", grado: "PRIMERO                       A                             " },
    { dni: "62955928", nombre: "OROZ VICENTE MIRELLA ARACELY", grado: "PRIMERO                       A                             " },
    { dni: "80838203", nombre: "PAREDES MIRANDA ESMERALDA DALILA", grado: "PRIMERO                       A                             " },
    { dni: "80847018", nombre: "PERALTA RAMOS JHOSMAN JHONPEO", grado: "PRIMERO                       A                             " },
    { dni: "81094837", nombre: "PINEDO PALACIOS NICOLE LUANA", grado: "PRIMERO                       A                             " },
    { dni: "62731689", nombre: "QUILCA SANCHEZ ELEAZAR JOAQUIN", grado: "PRIMERO                       A                             " },
    { dni: "63409269", nombre: "QUINTIMARI SANTOMA LEONEL MESSI", grado: "PRIMERO                       A                             " },
    { dni: "63188352", nombre: "RIVERA VILLALBA EFRAIN", grado: "PRIMERO                       A                             " },
    { dni: "81117017", nombre: "ROJAS MARCOS RUT NOHEMÍ", grado: "PRIMERO                       A                             " },
    { dni: "62388236", nombre: "SALVATIERRA CRISANTO LUCY MILENE", grado: "PRIMERO                       A                             " },
    { dni: "62955980", nombre: "SANTOMA CARLOS DANNY RUDY", grado: "PRIMERO                       A                             " },
    { dni: "77941019", nombre: "SEVERINO MENDOZA SOANLY THIAGO", grado: "PRIMERO                       A                             " },
    { dni: "90085514", nombre: "TRINIDAD HARO YOVANI AXEL", grado: "PRIMERO                       A                             " },
    { dni: "81057600", nombre: "VIVAS FLORES ALEX JOEL", grado: "PRIMERO                       A                             " },
    { dni: "63587566", nombre: "ANTEZANA CORO ROSY NAYSHA", grado: "PRIMERO                       B                             " },
    { dni: "61752592", nombre: "ARONE POMALLANQUI ALEXIS MARCIAL", grado: "PRIMERO                       B                             " },
    { dni: "63587555", nombre: "ARRIETA NOLBERTO ALEXANDER JOSUE", grado: "PRIMERO                       B                             " },
    { dni: "81099182", nombre: "BUJAICO ROMERO JOEL ABNER", grado: "PRIMERO                       B                             " },
    { dni: "63587473", nombre: "CACERES MAYTA JOEL ANTHONY", grado: "PRIMERO                       B                             " },
    { dni: "81417344", nombre: "CAMPOS CARDENAS YINA KASUMI", grado: "PRIMERO                       B                             " },
    { dni: "63587552", nombre: "CARLOS QUISPE MARICELA LIZ", grado: "PRIMERO                       B                             " },
    { dni: "63409253", nombre: "CHAPAY MAHUANCA ENEDINA MIREYA", grado: "PRIMERO                       B                             " },
    { dni: "81392906", nombre: "CHOCCE DIAZ FABIAN ERICK", grado: "PRIMERO                       B                             " },
    { dni: "81057494", nombre: "CUTIPA QUINTANA OSCAR DENNIS", grado: "PRIMERO                       B                             " },
    { dni: "62731662", nombre: "FLORES ESPINOZA CRISTOPHER MIGUEL", grado: "PRIMERO                       B                             " },
    { dni: "62733795", nombre: "FLORES VIVAS RITA", grado: "PRIMERO                       B                             " },
    { dni: "63150966", nombre: "HUANAY VARGAS DAVID EDILSON", grado: "PRIMERO                       B                             " },
    { dni: "81099194", nombre: "HUATUCO MARTINEZ ALLISSON GIANELA", grado: "PRIMERO                       B                             " },
    { dni: "76709696", nombre: "LAPA RAMOS GRACIELA ANALY", grado: "PRIMERO                       B                             " },
    { dni: "78519956", nombre: "LAUREANO ARCE YANDI LUCERO", grado: "PRIMERO                       B                             " },
    { dni: "63409293", nombre: "LOZANO MALDONADO ARNOLD JOSE", grado: "PRIMERO                       B                             " },
    { dni: "62703712", nombre: "OROPEZA TORRES ROBERT DAVID", grado: "PRIMERO                       B                             " },
    { dni: "63587635", nombre: "PALOMINO NOA WISIN JHANDEL", grado: "PRIMERO                       B                             " },
    { dni: "63049947", nombre: "PALOMINO TAIPE YOBANA ALICIA", grado: "PRIMERO                       B                             " },
    { dni: "80847004", nombre: "PAQUI CHAPA LIZ YUMI", grado: "PRIMERO                       B                             " },
    { dni: "80847025", nombre: "PAQUILLO RIBBECK ISSAYDDU BLANCA", grado: "PRIMERO                       B                             " },
    { dni: "63804237", nombre: "RAMIREZ GARCIA MERYCARMEN ESTHER", grado: "PRIMERO                       B                             " },
    { dni: "78047138", nombre: "REYES GAMBOA AILYN GIAMINA", grado: "PRIMERO                       B                             " },
    { dni: "80703960", nombre: "REYES QUISPE DAYANA ROVERTINA", grado: "PRIMERO                       B                             " },
    { dni: "79597254", nombre: "RODRIGUEZ QUINTO NEYMAR JEAN", grado: "PRIMERO                       B                             " },
    { dni: "63587646", nombre: "ROJAS CULLANCO DAMARIS XIOMARA", grado: "PRIMERO                       B                             " },
    { dni: "63151015", nombre: "SANCHEZ GONZALEZ LEONIDAS YORDI", grado: "PRIMERO                       B                             " },
    { dni: "80847010", nombre: "TORRES YUPANQUI SHEYLA DAMARIS", grado: "PRIMERO                       B                             " },
    { dni: "62733619", nombre: "VARGAS RAMOS ADENY TAIZ", grado: "PRIMERO                       B                             " },
    { dni: "63151022", nombre: "VILLANO MENDOZA JHAN FRANCO", grado: "PRIMERO                       B                             " },
    { dni: "63587534", nombre: "ALVA CARDENAS JUAN MANUEL", grado: "PRIMERO                       C                             " },
    { dni: "81099279", nombre: "AYSANA BAUTISTA MILET NAHOMY", grado: "PRIMERO                       C                             " },
    { dni: "62842221", nombre: "BARRIENTOS TORRES JHOSELYN EVELYN", grado: "PRIMERO                       C                             " },
    { dni: "77759421", nombre: "BASILIO TITO YAZMIN YADIRA", grado: "PRIMERO                       C                             " },
    { dni: "63151035", nombre: "BENITO CAMPOS NATALY WENDY", grado: "PRIMERO                       C                             " },
    { dni: "62731651", nombre: "BUJAICO FLORES MUSOK ÑAN", grado: "PRIMERO                       C                             " },
    { dni: "62934693", nombre: "CAMASCA ALIAGA ANGELY DAYANA", grado: "PRIMERO                       C                             " },
    { dni: "62168768", nombre: "CASO PAUCARCAJA CRISTIAN", grado: "PRIMERO                       C                             " },
    { dni: "81099397", nombre: "CASTILLO LIZARRAGA XIMENA ASUMI", grado: "PRIMERO                       C                             " },
    { dni: "63151039", nombre: "CASTRO CANCHIHUAMAN FRANK MARTIN", grado: "PRIMERO                       C                             " },
    { dni: "79953268", nombre: "CERON MUNIVE ANGELINA BIANCA", grado: "PRIMERO                       C                             " },
    { dni: "80992134", nombre: "CHAVEZ FERNANDEZ RUBI", grado: "PRIMERO                       C                             " },
    { dni: "81736517", nombre: "CONDOR ORELLANO MAYCOL ABEL", grado: "PRIMERO                       C                             " },
    { dni: "63189199", nombre: "ESPINOZA GOMEZ NEYMAR JHON", grado: "PRIMERO                       C                             " },
    { dni: "77858272", nombre: "ESPINOZA PACHECO MATIAS NICOLA", grado: "PRIMERO                       C                             " },
    { dni: "63753616", nombre: "FLORES LOA NEHEMIAS KENYI", grado: "PRIMERO                       C                             " },
    { dni: "80706559", nombre: "GUZMAN VILLANUEVA ESTHER YANAI", grado: "PRIMERO                       C                             " },
    { dni: "81119803", nombre: "HARO ARREDONDO VALENTINA GUADALUPE", grado: "PRIMERO                       C                             " },
    { dni: "63587597", nombre: "HUAROC GOMEZ YIRA PAULINA", grado: "PRIMERO                       C                             " },
    { dni: "62842156", nombre: "LLANCO QUIROZ JOSE MOISES", grado: "PRIMERO                       C                             " },
    { dni: "81519346", nombre: "MUÑOZ SANTIAGO JASER CALEB", grado: "PRIMERO                       C                             " },
    { dni: "63804144", nombre: "OCEDA ALARCON ANDREA KORAL", grado: "PRIMERO                       C                             " },
    { dni: "81021563", nombre: "PALOMINO HUARACA IVELIA ESPERANZA", grado: "PRIMERO                       C                             " },
    { dni: "63587599", nombre: "PAQUILLO TOMENOTTI DEKER MANUEL", grado: "PRIMERO                       C                             " },
    { dni: "80847007", nombre: "PREJO NOLBERTO GENESIS TEODORA", grado: "PRIMERO                       C                             " },
    { dni: "62731703", nombre: "RIVAS SAUÑI LENNI ANTHONY", grado: "PRIMERO                       C                             " },
    { dni: "63150983", nombre: "RODRIGUEZ ROBLES KENYIE JOB", grado: "PRIMERO                       C                             " },
    { dni: "63587602", nombre: "ROJAS ZELARAYAN NATALY TATIANA", grado: "PRIMERO                       C                             " },
    { dni: "63587617", nombre: "TORRES CAYSAHUANA EDWARD SEBASTIAN", grado: "PRIMERO                       C                             " },
    { dni: "62265143", nombre: "VENTURA ESCOBAR RUTH ALEJANDRA", grado: "PRIMERO                       C                             " },
    { dni: "80988552", nombre: "ZELA GUERRERO DAYANA RUTH", grado: "PRIMERO                       C                             " },
    { dni: "79094374", nombre: "ACOSTA RAFAEL ADRIANO ALEXIS", grado: "PRIMERO                       D                             " },
    { dni: "63587572", nombre: "AGUILAR POMA MARYOLI YILU", grado: "PRIMERO                       D                             " },
    { dni: "63233974", nombre: "BARJA SALAZAR LUZ CLARITA", grado: "PRIMERO                       D                             " },
    { dni: "62042759", nombre: "CANCHARI RAMOS JORDAN MAYKOL", grado: "PRIMERO                       D                             " },
    { dni: "81124205", nombre: "CAÑARI PEREZ MARCEL ADRIANO", grado: "PRIMERO                       D                             " },
    { dni: "63587545", nombre: "CHAHUA PRETEL JAVIER ANGELO", grado: "PRIMERO                       D                             " },
    { dni: "63452598", nombre: "CONDOR ALARCON ANNY MILILLY", grado: "PRIMERO                       D                             " },
    { dni: "81057433", nombre: "CULLANCO RAMOS NEIMAR ADRIAN", grado: "PRIMERO                       D                             " },
    { dni: "62976804", nombre: "DAMIAN LANAZCA YADIRA GIMENA", grado: "PRIMERO                       D                             " },
    { dni: "62163524", nombre: "DIAZ CARHUARICRA DANIEL", grado: "PRIMERO                       D                             " },
    { dni: "63160238", nombre: "FABIAN SALAZAR SONG JU FERNANDO", grado: "PRIMERO                       D                             " },
    { dni: "78433085", nombre: "GABRIEL REMUZGO EDGAR STHEFANO", grado: "PRIMERO                       D                             " },
    { dni: "78067506", nombre: "GARCIA BASILIO ISAAC NEHEMIAS", grado: "PRIMERO                       D                             " },
    { dni: "81099396", nombre: "HINOSTROZA GUILLEN PILAR STHEICY", grado: "PRIMERO                       D                             " },
    { dni: "78734019", nombre: "KOC AIZANA YASPER RICARDO", grado: "PRIMERO                       D                             " },
    { dni: "63234092", nombre: "MALLQUI PEREZ JHORDAN ANGELO", grado: "PRIMERO                       D                             " },
    { dni: "63234006", nombre: "MATENCIOS CHAUSIN DAILA ARIADNA", grado: "PRIMERO                       D                             " },
    { dni: "77267156", nombre: "MECHATO TOMAS ADRIAN ELISEO", grado: "PRIMERO                       D                             " },
    { dni: "80847013", nombre: "MEZA ACOSTA MAYTTE ALHEY", grado: "PRIMERO                       D                             " },
    { dni: "63587476", nombre: "MORALES CARRERA NAYELI BRIYITH", grado: "PRIMERO                       D                             " },
    { dni: "81073980", nombre: "OLIVARES DIAZ ADRID ANYELY", grado: "PRIMERO                       D                             " },
    { dni: "62924004", nombre: "ORTIZ CASCO ABRAHAM CALEB", grado: "PRIMERO                       D                             " },
    { dni: "79168213", nombre: "PACAYA QUINTIMARI JUNIOR", grado: "PRIMERO                       D                             " },
    { dni: "81057572", nombre: "PANEZ PIZARRO JEFFRY JARED", grado: "PRIMERO                       D                             " },
    { dni: "63804182", nombre: "QUIÑONEZ SEDANO ZARAI LESLY", grado: "PRIMERO                       D                             " },
    { dni: "63587471", nombre: "RICRA NOYA JHANS YOSIPT", grado: "PRIMERO                       D                             " },
    { dni: "63587580", nombre: "SUAREZ MOYA ALEXANDRA MILENA", grado: "PRIMERO                       D                             " },
    { dni: "63587605", nombre: "TAIPE TOLENTINO JHAN FRANCO", grado: "PRIMERO                       D                             " },
    { dni: "62731712", nombre: "VALERO CHIRISENTE JOHAO NATSUJIRO", grado: "PRIMERO                       D                             " },
    { dni: "63587514", nombre: "VARGAS CARBAJAL CIELO YARELY", grado: "PRIMERO                       D                             " },
    { dni: "63743180", nombre: "YANCE MOZOMBITE GABRIELA", grado: "PRIMERO                       D                             " },
    { dni: "62923654", nombre: "BAUTISTA MENDOZA JIMMY JOEL", grado: "SEGUNDO                       A                             " },
    { dni: "62842298", nombre: "BEJARANO LUME ALVIERY", grado: "SEGUNDO                       A                             " },
    { dni: "62955963", nombre: "BENDEZU DURAND SARA SALOME", grado: "SEGUNDO                       A                             " },
    { dni: "62842233", nombre: "BENDEZU PACHECO NEYMAR SMITH", grado: "SEGUNDO                       A                             " },
    { dni: "63023361", nombre: "BENITO CORDOVA RICHARDS MARCELO", grado: "SEGUNDO                       A                             " },
    { dni: "63233815", nombre: "CAJAHUANCA MUÑOZ ADRIAN CESAR", grado: "SEGUNDO                       A                             " },
    { dni: "62955972", nombre: "CAMPOSANO VILCHEZ KENNEDY", grado: "SEGUNDO                       A                             " },
    { dni: "73279225", nombre: "CANO VASQUEZ NIK KEVIN", grado: "SEGUNDO                       A                             " },
    { dni: "62842203", nombre: "CHAVEZ PUENTE FRANCKLIN WILDER", grado: "SEGUNDO                       A                             " },
    { dni: "62955959", nombre: "ESPINAL AGUILAR BELEN ALLISSON", grado: "SEGUNDO                       A                             " },
    { dni: "62731749", nombre: "ESPINOZA AGUIRRE DAHANA MILEY", grado: "SEGUNDO                       A                             " },
    { dni: "62955974", nombre: "GONZALEZ CAMARGO RUTH STEFANY", grado: "SEGUNDO                       A                             " },
    { dni: "63150906", nombre: "GUZMAN CAMPOS ANTHONY MAYCOL", grado: "SEGUNDO                       A                             " },
    { dni: "62842195", nombre: "HUAMAN SOLIS MARCO ANTONIO", grado: "SEGUNDO                       A                             " },
    { dni: "63233869", nombre: "JULIAN SANCHEZ NATANIEL JHANMY", grado: "SEGUNDO                       A                             " },
    { dni: "74345050", nombre: "LAUREANO RAMOS LUIS ALVERTO", grado: "SEGUNDO                       A                             " },
    { dni: "63150902", nombre: "MENDOZA JOIJA PABLO KENNEDY", grado: "SEGUNDO                       A                             " },
    { dni: "62842204", nombre: "MUNIVE BUITRON CRISTHIAN DAYIRO", grado: "SEGUNDO                       A                             " },
    { dni: "63150938", nombre: "NOLBERTO ARELLANO GERAL YAREN", grado: "SEGUNDO                       A                             " },
    { dni: "62842152", nombre: "PAUCAR ESPINAL PAULO SAMY", grado: "SEGUNDO                       A                             " },
    { dni: "77254063", nombre: "QUIROZ GASTELU ALISON GABRIELA", grado: "SEGUNDO                       A                             " },
    { dni: "62731724", nombre: "ROBLES MERCADO YERALDINHE BAYOLETH", grado: "SEGUNDO                       A                             " },
    { dni: "77446017", nombre: "SANCHEZ CAMPOS VIOLETA SARUMI", grado: "SEGUNDO                       A                             " },
    { dni: "63416390", nombre: "SEDANO CURO AARON DAYIRO", grado: "SEGUNDO                       A                             " },
    { dni: "77457623", nombre: "VASQUEZ HERRERA DARLENE JULESKA", grado: "SEGUNDO                       A                             " },
    { dni: "63150903", nombre: "VILCAS CUTIMANCO MEGAN SAID LUHANA", grado: "SEGUNDO                       A                             " },
    { dni: "77357805", nombre: "VILCHEZ HUARACA SEBASTIÁN ADRIANO", grado: "SEGUNDO                       A                             " },
    { dni: "77579006", nombre: "VILLAR MENDOZA JIMENA CELESTE", grado: "SEGUNDO                       A                             " },
    { dni: "77578979", nombre: "VILLAR MENDOZA PAMELA KIARA", grado: "SEGUNDO                       A                             " },
    { dni: "62731727", nombre: "ZAFORA VASQUEZ DARWIN WILLIAMS", grado: "SEGUNDO                       A                             " },
    { dni: "62923620", nombre: "ZAMUDIO VILCHEZ DANAIZ VALERY", grado: "SEGUNDO                       A                             " },
    { dni: "63156736", nombre: "BELLO RICOPA GREYSI ESTHER", grado: "SEGUNDO                       B                             " },
    { dni: "63365972", nombre: "BENDEZU MARIN JEANPOOL", grado: "SEGUNDO                       B                             " },
    { dni: "63233940", nombre: "BISARES PEREZ ANTONINA VAIOLIT", grado: "SEGUNDO                       B                             " },
    { dni: "63150905", nombre: "CAMAYO CAMPOS ISAI ENRIQUE", grado: "SEGUNDO                       B                             " },
    { dni: "62955861", nombre: "CAMPOSANO CHAGUA ANGELINA VALERY", grado: "SEGUNDO                       B                             " },
    { dni: "62955983", nombre: "CARRASCO MENDEZ CALEB LIONEL", grado: "SEGUNDO                       B                             " },
    { dni: "62923794", nombre: "CHAVEZ GAMARRA FRANK RODRIGO", grado: "SEGUNDO                       B                             " },
    { dni: "62842201", nombre: "CHUQUIRUNA PEÑA AMPARO MILAGROS", grado: "SEGUNDO                       B                             " },
    { dni: "62860308", nombre: "CONDOR RODRIGUEZ ANAHI BRISEIDA", grado: "SEGUNDO                       B                             " },
    { dni: "62955957", nombre: "CONDORI JANAMPA JOSELYN EUGENIA", grado: "SEGUNDO                       B                             " },
    { dni: "61590089", nombre: "DIAZ NAVARRO ROGER BRUSS", grado: "SEGUNDO                       B                             " },
    { dni: "62201338", nombre: "EDUARDO DE LA CRUZ NATALIA THALIA", grado: "SEGUNDO                       B                             " },
    { dni: "63233917", nombre: "ENCARNACION TRUJILLO WILLER LUIS", grado: "SEGUNDO                       B                             " },
    { dni: "62201412", nombre: "HUANCAUQUE HUARI SALHY YASUMI", grado: "SEGUNDO                       B                             " },
    { dni: "62420958", nombre: "LAGUNA ARROYO JHAN CARLOS", grado: "SEGUNDO                       B                             " },
    { dni: "62731717", nombre: "MELCHOR SALVADOR EDUARD PIERO", grado: "SEGUNDO                       B                             " },
    { dni: "62666512", nombre: "MISARI ESCALERA CRISTOFER JHOSEP", grado: "SEGUNDO                       B                             " },
    { dni: "62924035", nombre: "MUÑOZ SALVADOR FELIX GIOVANNI", grado: "SEGUNDO                       B                             " },
    { dni: "62731711", nombre: "NOLORBE ANTEZANA NEFTHALI JULIO", grado: "SEGUNDO                       B                             " },
    { dni: "62955932", nombre: "ORE SOLIS JOHANNS MILLER", grado: "SEGUNDO                       B                             " },
    { dni: "61641697", nombre: "PARIONA AGUILA DIEGO JAVIER", grado: "SEGUNDO                       B                             " },
    { dni: "62842241", nombre: "PEREZ BASILIO MELANY HELIDA", grado: "SEGUNDO                       B                             " },
    { dni: "63233777", nombre: "PEREZ VERGARAY MATHIAS FABRIZIO", grado: "SEGUNDO                       B                             " },
    { dni: "62731736", nombre: "PORRAS CAMPOS THALIA ALCIRA", grado: "SEGUNDO                       B                             " },
    { dni: "63335158", nombre: "PORTOCARRERO HOYOS KERLIN NEYMAR", grado: "SEGUNDO                       B                             " },
    { dni: "62731611", nombre: "ROJAS TAIPE DILMER YOSMET", grado: "SEGUNDO                       B                             " },
    { dni: "62923799", nombre: "ROQUE ZELARAYAN ROBERT", grado: "SEGUNDO                       B                             " },
    { dni: "62955981", nombre: "SEGUIL MALDONADO EVER KEVIN", grado: "SEGUNDO                       B                             " },
    { dni: "61626148", nombre: "TRILLO FLORES VICTOR MANUEL", grado: "SEGUNDO                       B                             " },
    { dni: "62955869", nombre: "ACOSTA CANTORAL ANGELO GONZALO", grado: "SEGUNDO                       C                             " },
    { dni: "62955900", nombre: "AVILA SANTOS AYLLEN YARELI", grado: "SEGUNDO                       C                             " },
    { dni: "62116939", nombre: "BALLEJO TUPALAYA JAVIER", grado: "SEGUNDO                       C                             " },
    { dni: "76497871", nombre: "BELLIDO REYES DAYRON FIDELIÑO", grado: "SEGUNDO                       C                             " },
    { dni: "76498392", nombre: "CARBAJAL JARA CHRISTOPHER", grado: "SEGUNDO                       C                             " },
    { dni: "62420963", nombre: "CARLOS QUISPE FERNANDA GRISEL", grado: "SEGUNDO                       C                             " },
    { dni: "62415113", nombre: "DEL AGUILA RICOPA PRIYANKA SOLANSH", grado: "SEGUNDO                       C                             " },
    { dni: "62923736", nombre: "GANSBILLER VENTURA JUAN CARLOS", grado: "SEGUNDO                       C                             " },
    { dni: "62731732", nombre: "HUANACO RAMIREZ ADINSON ASU", grado: "SEGUNDO                       C                             " },
    { dni: "62842205", nombre: "LAURA FLORES THALIA MONICA", grado: "SEGUNDO                       C                             " },
    { dni: "62733655", nombre: "LIZARRAGA VILCA BRIYITT MELANNY", grado: "SEGUNDO                       C                             " },
    { dni: "63023429", nombre: "LLIHUAS MORATILLO JOSIMAR VICTOR", grado: "SEGUNDO                       C                             " },
    { dni: "77741130", nombre: "LOPEZ BERROCAL MICAELA ABIGAIL", grado: "SEGUNDO                       C                             " },
    { dni: "62292296", nombre: "MALLQUI CASANCHO ALEX YONATAN", grado: "SEGUNDO                       C                             " },
    { dni: "62955921", nombre: "MALPARTIDA CAMPOS JHON SERGIO", grado: "SEGUNDO                       C                             " },
    { dni: "63103942", nombre: "MEDINA TINCO NATALY SONYU", grado: "SEGUNDO                       C                             " },
    { dni: "77456662", nombre: "MELENDEZ VIZCARDO GUADALUPE MILAGROS FILONILA", grado: "SEGUNDO                       C                             " },
    { dni: "80708653", nombre: "MENDOZA MACHA ESNAYDER VANPERCY", grado: "SEGUNDO                       C                             " },
    { dni: "61901440", nombre: "MEZA ROJAS RAUL MOISES", grado: "SEGUNDO                       C                             " },
    { dni: "62409050", nombre: "PACAYA LAUREANO JAMES ANTONY", grado: "SEGUNDO                       C                             " },
    { dni: "62409051", nombre: "PACAYA LAUREANO SEBASTIAN ANTONY", grado: "SEGUNDO                       C                             " },
    { dni: "62731728", nombre: "PAUCAR ENRIQUE WENDY MAYUMI", grado: "SEGUNDO                       C                             " },
    { dni: "62904978", nombre: "PEÑA MURAYARI JAMY HELLEN", grado: "SEGUNDO                       C                             " },
    { dni: "63092496", nombre: "PEREZ HILARIO JAIME MIGUEL", grado: "SEGUNDO                       C                             " },
    { dni: "62420954", nombre: "RAMOS MONTERO KEYSI ROSALINDA", grado: "SEGUNDO                       C                             " },
    { dni: "81262258", nombre: "RODRIGUEZ GARAY JENCI JESMITH", grado: "SEGUNDO                       C                             " },
    { dni: "62731647", nombre: "ROMERO SALAZAR BRUSS DAVID", grado: "SEGUNDO                       C                             " },
    { dni: "62388186", nombre: "SANTOS FERMIN MARGOTH", grado: "SEGUNDO                       C                             " },
    { dni: "62420980", nombre: "SANTOS PAREDES MARYURI", grado: "SEGUNDO                       C                             " },
    { dni: "76889570", nombre: "SEVERINO MENDOZA NIDIEL LUCIA", grado: "SEGUNDO                       C                             " },
    { dni: "63023649", nombre: "SOVERO PIZARRO SAUL VICTOR", grado: "SEGUNDO                       C                             " },
    { dni: "63150944", nombre: "ABANTO LLAVE HENRY PAUL", grado: "SEGUNDO                       D                             " },
    { dni: "63233946", nombre: "ACUÑA BRINGAS JHAMPIER MANUEL", grado: "SEGUNDO                       D                             " },
    { dni: "62923986", nombre: "ALMONACID MUÑOZ BRAYAN EMANUEL", grado: "SEGUNDO                       D                             " },
    { dni: "62384025", nombre: "ARONE POMALLANQUI CRUZMIRY", grado: "SEGUNDO                       D                             " },
    { dni: "62955958", nombre: "BALDEON MEZA YARELI HELEN", grado: "SEGUNDO                       D                             " },
    { dni: "73725441", nombre: "BENDEZU DIONICIO UZZIEL", grado: "SEGUNDO                       D                             " },
    { dni: "62261291", nombre: "BRAVO PASCUAL MILAGROS CELINA", grado: "SEGUNDO                       D                             " },
    { dni: "62842270", nombre: "CANO BOCANEGRA DAYANA JHORLEY", grado: "SEGUNDO                       D                             " },
    { dni: "63260233", nombre: "CASTILLO AQUINO LEONEL MILLER", grado: "SEGUNDO                       D                             " },
    { dni: "62955934", nombre: "EGOAVIL GUTIERREZ JHUSTYN LUIS", grado: "SEGUNDO                       D                             " },
    { dni: "78433060", nombre: "GABRIEL REMUZGO MATHIAS ROBBEN", grado: "SEGUNDO                       D                             " },
    { dni: "62566434", nombre: "GAGO MARTINEZ LEONEL FABRIZIO", grado: "SEGUNDO                       D                             " },
    { dni: "62733816", nombre: "GUILLEN LOAYZA EMERICK SEBASTIAN", grado: "SEGUNDO                       D                             " },
    { dni: "62885242", nombre: "HINOJOSA PEREZ VALERY ASTRID", grado: "SEGUNDO                       D                             " },
    { dni: "62923715", nombre: "HUAMAN ATAUCUSI LEONEL ROGER", grado: "SEGUNDO                       D                             " },
    { dni: "62910324", nombre: "LIMACHI GARCIA RAINIE YANG", grado: "SEGUNDO                       D                             " },
    { dni: "63152257", nombre: "MERCADO MENDOZA LUCAS GABRIEL", grado: "SEGUNDO                       D                             " },
    { dni: "62201407", nombre: "MEZA SANTOS DEYSI MARIALENA", grado: "SEGUNDO                       D                             " },
    { dni: "62955868", nombre: "NOLASCO VARGAS DARWIN DEYVIS", grado: "SEGUNDO                       D                             " },
    { dni: "63379792", nombre: "ORE GARCIA EDWAR ABDIAS", grado: "SEGUNDO                       D                             " },
    { dni: "62955990", nombre: "PAQUI SIMON ROCIO PAOLA", grado: "SEGUNDO                       D                             " },
    { dni: "63233841", nombre: "PORRAS YAURI WILDER MAURO", grado: "SEGUNDO                       D                             " },
    { dni: "61523375", nombre: "QUISPE PEREZ DAYANNA NICOLE", grado: "SEGUNDO                       D                             " },
    { dni: "62733660", nombre: "RICRA CHANCO JOHN KELVIN", grado: "SEGUNDO                       D                             " },
    { dni: "61839064", nombre: "RIVERA PAREDES JHEFERSON DANIEL", grado: "SEGUNDO                       D                             " },
    { dni: "62842197", nombre: "SANTORI ANTONIO STEFANY YAROMI", grado: "SEGUNDO                       D                             " },
    { dni: "62955881", nombre: "SEGUIL RICSE DIEGO ARMANDO", grado: "SEGUNDO                       D                             " },
    { dni: "62731645", nombre: "SHINGARI LOZANO YESEYNER DEYMAR", grado: "SEGUNDO                       D                             " },
    { dni: "63023475", nombre: "ULLOA TRIGOS DENNYS ADRIEL", grado: "SEGUNDO                       D                             " },
    { dni: "62842274", nombre: "VENTURA MEZA NEYMAR LIONEL", grado: "SEGUNDO                       D                             " },
    { dni: "62731653", nombre: "VILLANUEVA GARCIA JHENY MARGOT", grado: "SEGUNDO                       D                             " },
    { dni: "62409145", nombre: "ARONES NAVARRO DARWIN KEYLER", grado: "TERCERO                       A                             " },
    { dni: "62201428", nombre: "AYQUIPA CARBAJAL DANNY EDINSON", grado: "TERCERO                       A                             " },
    { dni: "62201303", nombre: "AYSANA CONDORI FRANCIS ANDRIW", grado: "TERCERO                       A                             " },
    { dni: "62769639", nombre: "BAZAN MONTOYA JANDERSON JAFETH", grado: "TERCERO                       A                             " },
    { dni: "62657367", nombre: "BUENDIA ALHUA TAMEENKIRO SOLEDAD", grado: "TERCERO                       A                             " },
    { dni: "62388241", nombre: "CAMPOS BAUTISTA ELI LUIS", grado: "TERCERO                       A                             " },
    { dni: "62420960", nombre: "CONDOR ORELLANO DORIAN YEFRY", grado: "TERCERO                       A                             " },
    { dni: "62201354", nombre: "CONDORI JANAMPA DAVID ANTHONY", grado: "TERCERO                       A                             " },
    { dni: "75037762", nombre: "DUEÑAS ORTIZ DAYRON JADIEL", grado: "TERCERO                       A                             " },
    { dni: "62168866", nombre: "ESPEJO CONTRERAS YORKI MAXIMO", grado: "TERCERO                       A                             " },
    { dni: "62399517", nombre: "HARO ALMONACID KENYERLY BRICER LEE", grado: "TERCERO                       A                             " },
    { dni: "75298497", nombre: "INGA FLORES DAFNE ALEXANDRA", grado: "TERCERO                       A                             " },
    { dni: "70743683", nombre: "MALDONADO CARLOS GUILLERMO ALONSO", grado: "TERCERO                       A                             " },
    { dni: "62731704", nombre: "MALDONADO HUAYANA JIMY MICHAEL SALVADOR", grado: "TERCERO                       A                             " },
    { dni: "60657123", nombre: "MENDOZA SUAREZ MOISES IAN", grado: "TERCERO                       A                             " },
    { dni: "62391146", nombre: "MENDOZA UCHUYPOMA TREYCY MELODY", grado: "TERCERO                       A                             " },
    { dni: "62731660", nombre: "MERCADO CAVERO JHOSSEPH", grado: "TERCERO                       A                             " },
    { dni: "62590264", nombre: "MOZOMBITE ROBLES BRUSS", grado: "TERCERO                       A                             " },
    { dni: "61739781", nombre: "ORE SOLIS MIGUEL ANGEL", grado: "TERCERO                       A                             " },
    { dni: "63327283", nombre: "PARIONA SANTOS FIDEL RUBEN", grado: "TERCERO                       A                             " },
    { dni: "62201316", nombre: "RAMON LOPEZ ESTEISY BRIYITT", grado: "TERCERO                       A                             " },
    { dni: "62201355", nombre: "RIVERA ESTRADA LARYSHA MILAGROS", grado: "TERCERO                       A                             " },
    { dni: "62388231", nombre: "SAMANIEGO SUAREZ ANGELO BRADLEY", grado: "TERCERO                       A                             " },
    { dni: "62666791", nombre: "TAIPE CURO ROBINIO SEBACHS", grado: "TERCERO                       A                             " },
    { dni: "63587513", nombre: "VARGAS CARBAJAL SARAI NAYELI", grado: "TERCERO                       A                             " },
    { dni: "62163440", nombre: "VEGA FLORES JARENH PITER", grado: "TERCERO                       A                             " },
    { dni: "61739744", nombre: "VICENTE VALLEJOS MEREDITH KATHLEN", grado: "TERCERO                       A                             " },
    { dni: "62420972", nombre: "AGUIRRE PACHECO ALEXIS JESUS", grado: "TERCERO                       B                             " },
    { dni: "62092284", nombre: "ALTOS CCELLCCASCCA EDWAR", grado: "TERCERO                       B                             " },
    { dni: "62388209", nombre: "BAUTISTA PALANTE MISAEL ABEDAYIN", grado: "TERCERO                       B                             " },
    { dni: "62388248", nombre: "BRAVO PEREZ LEONELA", grado: "TERCERO                       B                             " },
    { dni: "61523268", nombre: "BRAVO REVOLLAR ROSIBEL TANIA", grado: "TERCERO                       B                             " },
    { dni: "61972139", nombre: "CANTALICIO HUARANGA NINO", grado: "TERCERO                       B                             " },
    { dni: "62666625", nombre: "CUTIPA QUINTANA LIZETH PAMELA", grado: "TERCERO                       B                             " },
    { dni: "62201415", nombre: "GAVILAN CACERES SARAI LESLI", grado: "TERCERO                       B                             " },
    { dni: "62201340", nombre: "GUTIERREZ BEJARANO XUMI MAYTE", grado: "TERCERO                       B                             " },
    { dni: "62201427", nombre: "HUACHOPOMA PEREZ HELCIA FERNANDA", grado: "TERCERO                       B                             " },
    { dni: "62042776", nombre: "LOZANO MALDONADO MARIA FERNANDA", grado: "TERCERO                       B                             " },
    { dni: "62388216", nombre: "MENESES BIZARES ELIZABETH", grado: "TERCERO                       B                             " },
    { dni: "62666674", nombre: "MESCUA CAMARENA BRITNEY LUCERO", grado: "TERCERO                       B                             " },
    { dni: "62010331", nombre: "MISARI ESCALERA LUANA ESTHEFANNI", grado: "TERCERO                       B                             " },
    { dni: "61931260", nombre: "PALOMINO CANAQUIRI WILMER SAMUEL", grado: "TERCERO                       B                             " },
    { dni: "61744578", nombre: "PALOMINO NOA JHONATAN ANGEL", grado: "TERCERO                       B                             " },
    { dni: "61702760", nombre: "PAQUI CHAPA FANNY TANIA", grado: "TERCERO                       B                             " },
    { dni: "62208376", nombre: "ROWE CLEMENTE MARIANA MARISELA", grado: "TERCERO                       B                             " },
    { dni: "62388218", nombre: "ROWE MANTARI ORLANDO DAVID", grado: "TERCERO                       B                             " },
    { dni: "61702811", nombre: "SANTOMA CARLOS JANETH NELLY", grado: "TERCERO                       B                             " },
    { dni: "63100090", nombre: "SOLIS CONTRERAS RITA MARÍA MERCEDES", grado: "TERCERO                       B                             " },
    { dni: "62176307", nombre: "TORRE MACHARI JERAI CRISCEL", grado: "TERCERO                       B                             " },
    { dni: "62145525", nombre: "TORRES VILLALOBOS DIANA IVONNE", grado: "TERCERO                       B                             " },
    { dni: "74670528", nombre: "VALLEJOS LLIMPE JAFET QORI ARAM", grado: "TERCERO                       B                             " },
    { dni: "62201414", nombre: "VILCHEZ GANSBILLER STEFANY ROSSY", grado: "TERCERO                       B                             " },
    { dni: "62420976", nombre: "YRRAZABAL BUJAICO RUTH MARLENI", grado: "TERCERO                       B                             " },
    { dni: "62388246", nombre: "ZELARAYAN CRISPIN FLOR MARIA", grado: "TERCERO                       B                             " },
    { dni: "62265181", nombre: "ALIAGA PORRAS GERCYN ANDY", grado: "TERCERO                       C                             " },
    { dni: "62094638", nombre: "BACON ROMANI LUIS ANTONIO", grado: "TERCERO                       C                             " },
    { dni: "62666602", nombre: "BUJAICO ROMERO ELIAS ROBERTO", grado: "TERCERO                       C                             " },
    { dni: "63323985", nombre: "CALIXTO SAAVEDRA ALINLLER", grado: "TERCERO                       C                             " },
    { dni: "62666781", nombre: "CARDENAS UNTIVEROS GRISEIDA VERY", grado: "TERCERO                       C                             " },
    { dni: "62421032", nombre: "CASTILLON ROJAS ANYELI SOFIA", grado: "TERCERO                       C                             " },
    { dni: "61785466", nombre: "CAYSAHUANA CHIRICENTE KINA HALANA", grado: "TERCERO                       C                             " },
    { dni: "61702808", nombre: "CONDORI AYALA MISAEL UEL", grado: "TERCERO                       C                             " },
    { dni: "60314748", nombre: "CUADROS TUPALAYA ADRIANA ESTHER", grado: "TERCERO                       C                             " },
    { dni: "61785455", nombre: "CUADROS TUPALAYA THALIA PATRICIA", grado: "TERCERO                       C                             " },
    { dni: "62420950", nombre: "CULLANCO PERALES MARIA DORA", grado: "TERCERO                       C                             " },
    { dni: "62184353", nombre: "DIAZ CAMAYTERI MIGUEL ANGEL", grado: "TERCERO                       C                             " },
    { dni: "62042755", nombre: "GONZALES CRISTOBAL MISHELL LI", grado: "TERCERO                       C                             " },
    { dni: "62265176", nombre: "GUILLERMO PORRAS KIARA THALIA", grado: "TERCERO                       C                             " },
    { dni: "61744560", nombre: "MARAVI PALANTE BRACK GRODER", grado: "TERCERO                       C                             " },
    { dni: "61702774", nombre: "MUÑOZ CULLANCO ISABELA FERNANDA", grado: "TERCERO                       C                             " },
    { dni: "62420975", nombre: "MUÑOZ SANTIAGO CHARLIN JENIFER", grado: "TERCERO                       C                             " },
    { dni: "61407282", nombre: "PERALTA FERNANDEZ DANGIO DANGLER", grado: "TERCERO                       C                             " },
    { dni: "62442130", nombre: "PEREZ CONDORI LEYDY BELINDA", grado: "TERCERO                       C                             " },
    { dni: "62042694", nombre: "QUISPE QUINCHOCRE JOSEP DIEFRI", grado: "TERCERO                       C                             " },
    { dni: "61452255", nombre: "ROJAS TORRES DEYVIS ALEXIS", grado: "TERCERO                       C                             " },
    { dni: "62421001", nombre: "SALVADOR MARCOS SLIM STEFY", grado: "TERCERO                       C                             " },
    { dni: "62042747", nombre: "SANCHEZ SIMON OMAR LEO", grado: "TERCERO                       C                             " },
    { dni: "62414392", nombre: "SENCIA JORGE YASIR ISAIAS GIOVANNI", grado: "TERCERO                       C                             " },
    { dni: "62668790", nombre: "SOTO CASANCHO MIRELLA MIRIAN", grado: "TERCERO                       C                             " },
    { dni: "80838049", nombre: "SOTO FRANCISCO LIONEL ELIAS", grado: "TERCERO                       C                             " },
    { dni: "75299112", nombre: "TORRES CRISTOBAL EMERSON JOSE ARMANDO", grado: "TERCERO                       C                             " },
    { dni: "61932695", nombre: "ACOSTA RAFAEL GENESIS ARACELI", grado: "CUARTO                        A                             " },
    { dni: "62347419", nombre: "ALBINAGORTA GUTIERREZ SARAI EUNICE", grado: "CUARTO                        A                             " },
    { dni: "61712467", nombre: "ALIAGA MILLAN YOTMER", grado: "CUARTO                        A                             " },
    { dni: "61785374", nombre: "ASTORAY ORTIZ VICTOR GREGORIO", grado: "CUARTO                        A                             " },
    { dni: "62343970", nombre: "BARJA SALAZAR MARICARMEN ANALHY", grado: "CUARTO                        A                             " },
    { dni: "74943284", nombre: "BRAVO REVOLLAR LUIS MARIO", grado: "CUARTO                        A                             " },
    { dni: "62388191", nombre: "CAMPOS LOPEZ JACOB ALFREDO", grado: "CUARTO                        A                             " },
    { dni: "62535962", nombre: "CAÑARI PEREZ ABEL RAUL", grado: "CUARTO                        A                             " },
    { dni: "62344000", nombre: "CAPCHA POMACINO HEYDI LIZBETH", grado: "CUARTO                        A                             " },
    { dni: "62347403", nombre: "CHAVEZ PUENTE ROSALI MILANA", grado: "CUARTO                        A                             " },
    { dni: "61256075", nombre: "CUEVA COTRINA ENGELL TERRY", grado: "CUARTO                        A                             " },
    { dni: "62042709", nombre: "EGOAVIL GANSBILLER NELSON GABRIEL", grado: "CUARTO                        A                             " },
    { dni: "62614927", nombre: "ESPINAL LOYOLA MARICIELO JANYUNCEO", grado: "CUARTO                        A                             " },
    { dni: "61642857", nombre: "ESPIRITU BUENDIA CRIS JHADE", grado: "CUARTO                        A                             " },
    { dni: "62347441", nombre: "HUANCAUQUE HUARI JESUS SCRISH", grado: "CUARTO                        A                             " },
    { dni: "62042730", nombre: "JULCARIMA ROJAS SACHI CIELO", grado: "CUARTO                        A                             " },
    { dni: "73293888", nombre: "LLANCARI BENDEZU JHEFRY ANTONY", grado: "CUARTO                        A                             " },
    { dni: "73293877", nombre: "LLANCARI BENDEZU JHORDAN ALEX", grado: "CUARTO                        A                             " },
    { dni: "62042744", nombre: "LUNA QUISPE XIMENA KAROL", grado: "CUARTO                        A                             " },
    { dni: "60321443", nombre: "MEZA PACHECO MARCIA MARIANA", grado: "CUARTO                        A                             " },
    { dni: "73916491", nombre: "MUNIVE BUITRON FRAN KENYI", grado: "CUARTO                        A                             " },
    { dni: "61256076", nombre: "NOLBERTO CAYSAHUANA ALEXANDER ANTHONY", grado: "CUARTO                        A                             " },
    { dni: "62042714", nombre: "QUISPE CULLANCO JULIO FERNANDO", grado: "CUARTO                        A                             " },
    { dni: "62347381", nombre: "RAMOS BAUTISTA FERNANDO JOSE", grado: "CUARTO                        A                             " },
    { dni: "62013233", nombre: "RUIZ CORNEJO FLAVIO ANDREE", grado: "CUARTO                        A                             " },
    { dni: "73845860", nombre: "SANCHEZ CAMPOS EDMON SMITH", grado: "CUARTO                        A                             " },
    { dni: "62842153", nombre: "SANCHEZ ROJAS GREIS DAMAR", grado: "CUARTO                        A                             " },
    { dni: "62361902", nombre: "SOLIS CABRERA MARJHORI NICOL", grado: "CUARTO                        A                             " },
    { dni: "62344022", nombre: "URBINA LAZO LEONARDO SEBASTIAN", grado: "CUARTO                        A                             " },
    { dni: "60399793", nombre: "VASQUEZ QUISPE WILBER FAVIO", grado: "CUARTO                        A                             " },
    { dni: "62347367", nombre: "ASTORAY PEREZ EMELY ZADITH", grado: "CUARTO                        B                             " },
    { dni: "61702836", nombre: "AVILA SANTOS LUCERO MEYLY", grado: "CUARTO                        B                             " },
    { dni: "62347358", nombre: "BELLIDO RAMOS NICOLL", grado: "CUARTO                        B                             " },
    { dni: "62072002", nombre: "BENDEZU MARIN MARYORI NICOL", grado: "CUARTO                        B                             " },
    { dni: "62042768", nombre: "BENDEZU RAMOS ISABEL ESTHER", grado: "CUARTO                        B                             " },
    { dni: "61702815", nombre: "CARDENAS QUISPE TANIA JARUMI", grado: "CUARTO                        B                             " },
    { dni: "62388167", nombre: "CARDENAS TINCO JHOSMEL MOISES", grado: "CUARTO                        B                             " },
    { dni: "62347389", nombre: "DIAZ CHAVEZ LUIS FERNANDO", grado: "CUARTO                        B                             " },
    { dni: "61739830", nombre: "ESPINAL GAVILAN NIKOL YANIRA", grado: "CUARTO                        B                             " },
    { dni: "61702809", nombre: "FERNANDEZ CASTILLON ANDERSON MANUEL", grado: "CUARTO                        B                             " },
    { dni: "61755860", nombre: "GONZALES MUÑOZ CARLOS SALVADOR", grado: "CUARTO                        B                             " },
    { dni: "61664667", nombre: "GUZMAN TRILLO DANIEL", grado: "CUARTO                        B                             " },
    { dni: "61785585", nombre: "HUAMANI AGUIRRE KENNYI HARLY", grado: "CUARTO                        B                             " },
    { dni: "61804284", nombre: "HUERE VELASQUEZ JHON KIM", grado: "CUARTO                        B                             " },
    { dni: "61342239", nombre: "LUNA ROJAS ALDAIR JUNIOR", grado: "CUARTO                        B                             " },
    { dni: "61862448", nombre: "MALLQUI SALVATIERRA DAVID SEBASTIAN", grado: "CUARTO                        B                             " },
    { dni: "62388193", nombre: "MALPARTIDA AGUILAR DILAN AYLI", grado: "CUARTO                        B                             " },
    { dni: "62092259", nombre: "NOLBERTO TAIPE ESTEFANY", grado: "CUARTO                        B                             " },
    { dni: "62347440", nombre: "RAMOS RAMIREZ LAURA GREYS", grado: "CUARTO                        B                             " },
    { dni: "61739705", nombre: "RAMOS UTUS BENJAMIN EMANUEL", grado: "CUARTO                        B                             " },
    { dni: "62711418", nombre: "RUIZ OCHOA KAHORI MAYARA", grado: "CUARTO                        B                             " },
    { dni: "61739703", nombre: "SEGUIL PEREZ JHORVIN NILO", grado: "CUARTO                        B                             " },
    { dni: "61785523", nombre: "TELLO RICSE CESIA NOEMI", grado: "CUARTO                        B                             " },
    { dni: "61702806", nombre: "TOSCANO MENESES ALDER PAUL", grado: "CUARTO                        B                             " },
    { dni: "61523269", nombre: "VILCHEZ GANSBILLER KEVIN KENYI", grado: "CUARTO                        B                             " },
    { dni: "61376386", nombre: "ALVA HILARIO DARWIN VIDAL", grado: "CUARTO                        C                             " },
    { dni: "62343973", nombre: "APOLINARIO LAZARO JORGE ROYER", grado: "CUARTO                        C                             " },
    { dni: "61895282", nombre: "ASPOR SUCÑO ALLISON YURITH", grado: "CUARTO                        C                             " },
    { dni: "61702768", nombre: "CAMPOS PORRAS SANDRA", grado: "CUARTO                        C                             " },
    { dni: "62347427", nombre: "CRISANTO EGOAVIL MARNY GRICELA", grado: "CUARTO                        C                             " },
    { dni: "61671050", nombre: "CURIÑAUPA QUINTEROS CAMILA", grado: "CUARTO                        C                             " },
    { dni: "61255977", nombre: "ESPINOZA PACHECO JOSE MANUEL", grado: "CUARTO                        C                             " },
    { dni: "61523374", nombre: "FLORES MEZA ABRAHAM ISAAC", grado: "CUARTO                        C                             " },
    { dni: "61815318", nombre: "GARCIA BASILIO JOMINIT JEMINA", grado: "CUARTO                        C                             " },
    { dni: "62731659", nombre: "GOMEZ QUIJANDRIA JESUS HORACIO", grado: "CUARTO                        C                             " },
    { dni: "61702793", nombre: "LAURA FLORES RONY", grado: "CUARTO                        C                             " },
    { dni: "61232570", nombre: "LEON SOTO DEYLON JEYMI", grado: "CUARTO                        C                             " },
    { dni: "60653753", nombre: "LOPEZ OSORIO EMERSON ANDY", grado: "CUARTO                        C                             " },
    { dni: "61785596", nombre: "MUÑOZ SOLANO MARIA ELENA", grado: "CUARTO                        C                             " },
    { dni: "61561966", nombre: "NOLBERTO TAIPE LINETH", grado: "CUARTO                        C                             " },
    { dni: "62116504", nombre: "ORE GARCIA SANTIAGO ALONZO", grado: "CUARTO                        C                             " },
    { dni: "62042769", nombre: "PALOMINO TAIPE SULMA RAQUEL", grado: "CUARTO                        C                             " },
    { dni: "74682572", nombre: "PESUA PIRCA NICOL YAMELI", grado: "CUARTO                        C                             " },
    { dni: "61407154", nombre: "PINEDA SANTANA RAFAEL SHANDEY", grado: "CUARTO                        C                             " },
    { dni: "61654093", nombre: "PUENTE GALVEZ LEONEL", grado: "CUARTO                        C                             " },
    { dni: "61407241", nombre: "SAMANIEGO RODRIGUEZ SUSAN ARIEL", grado: "CUARTO                        C                             " },
    { dni: "61697266", nombre: "SOTO PORRAS AYLIM KEILA", grado: "CUARTO                        C                             " },
    { dni: "61702822", nombre: "TORRES YUPANQUI PAMELA KATERINE", grado: "CUARTO                        C                             " },
    { dni: "61550777", nombre: "VALDEZ CAMAYTERI ELIEL JAFEX", grado: "CUARTO                        C                             " },
    { dni: "74555773", nombre: "VIVAS FLORES SOFIA MAYULI", grado: "CUARTO                        C                             " },
    { dni: "61300574", nombre: "AVILA SANTOS BRIGYTH STEFANY", grado: "QUINTO                        A                             " },
    { dni: "61055774", nombre: "BARJA SALAZAR CATHERINE MARY", grado: "QUINTO                        A                             " },
    { dni: "61256058", nombre: "CAMPOS LOPEZ JAMIL JOSUE", grado: "QUINTO                        A                             " },
    { dni: "61256014", nombre: "CAMPOS OLORTEGUI LUIS ALBERTO", grado: "QUINTO                        A                             " },
    { dni: "62042705", nombre: "CAMPOS QUIRIGUA GIMENA", grado: "QUINTO                        A                             " },
    { dni: "62010264", nombre: "CARBAJAL NAVARRO ANTONY YEFFER", grado: "QUINTO                        A                             " },
    { dni: "63390848", nombre: "CAYSAHUANA CHIRICENTE DAVID JOSUE", grado: "QUINTO                        A                             " },
    { dni: "60642077", nombre: "CERALAYAN HUARCAYA ZOSIMO", grado: "QUINTO                        A                             " },
    { dni: "62521274", nombre: "CHILIN AROSTIGUE YADIRA YAMILE", grado: "QUINTO                        A                             " },
    { dni: "61523256", nombre: "EDUARDO DE LA CRUZ JUAN DIEGO", grado: "QUINTO                        A                             " },
    { dni: "62751241", nombre: "NIETO CARDENAS LEONARDO KEVIN", grado: "QUINTO                        A                             " },
    { dni: "61407226", nombre: "ÑAÑA GASTELU LEYDI MARITA", grado: "QUINTO                        A                             " },
    { dni: "61567966", nombre: "PACHECO LEON JUAN DANIEL", grado: "QUINTO                        A                             " },
    { dni: "60653758", nombre: "PONISAS MENDOZA ROLY", grado: "QUINTO                        A                             " },
    { dni: "62731641", nombre: "QUISPE ARO CRISTHIAN RICARDO", grado: "QUINTO                        A                             " },
    { dni: "61523347", nombre: "RAMOS MINAMANGO BRUSS FABIAN", grado: "QUINTO                        A                             " },
    { dni: "62280135", nombre: "RODRIGUEZ GARAY JOISY SICEL", grado: "QUINTO                        A                             " },
    { dni: "61481605", nombre: "ROJAS MARCOS EMANUEL DANTE", grado: "QUINTO                        A                             " },
    { dni: "71186320", nombre: "ROSAS LIZARRAGA JOHAN ALEXANDER", grado: "QUINTO                        A                             " },
    { dni: "80837536", nombre: "SEGUIL ESQUIVEL YASE YACO", grado: "QUINTO                        A                             " },
    { dni: "62042663", nombre: "SERALAYAN COTRINA MARCK DERYCK", grado: "QUINTO                        A                             " },
    { dni: "61407158", nombre: "TAPIA CURO FRAY KIM", grado: "QUINTO                        A                             " },
    { dni: "71680960", nombre: "TINCO MIREZ ERICK SEFERINO JUNIOR", grado: "QUINTO                        A                             " },
    { dni: "61523335", nombre: "TORRES ARROYO ANGEL ORLANDO", grado: "QUINTO                        A                             " },
    { dni: "61523372", nombre: "ZAFORA VASQUEZ ANALY NAISHA", grado: "QUINTO                        A                             " },
    { dni: "61523360", nombre: "ALBINAGORTA MEDINA EFRAIN PIERO", grado: "QUINTO                        B                             " },
    { dni: "61523261", nombre: "ANTEZANA VELASQUE GRACIA NAIL", grado: "QUINTO                        B                             " },
    { dni: "62193832", nombre: "ARCOS ROSAS CAMILA JHADE", grado: "QUINTO                        B                             " },
    { dni: "61440798", nombre: "ARIAS SANCHEZ EDGAR DANIEL", grado: "QUINTO                        B                             " },
    { dni: "62042656", nombre: "AYQUIPA CARBAJAL LINDA FLOR", grado: "QUINTO                        B                             " },
    { dni: "60321433", nombre: "BACON ROMANI RUTH RAQUEL", grado: "QUINTO                        B                             " },
    { dni: "61561952", nombre: "CCELLCCASCCA ALTOS JENDIRSON", grado: "QUINTO                        B                             " },
    { dni: "62042673", nombre: "CCENCHO HUARINGA TABITA DAMARIS", grado: "QUINTO                        B                             " },
    { dni: "61523309", nombre: "CHUCO CHAVEZ RONY PETTER", grado: "QUINTO                        B                             " },
    { dni: "61407179", nombre: "CONTRERAS CASTRO LIZETH NAYELY", grado: "QUINTO                        B                             " },
    { dni: "61407272", nombre: "CORDOVA ALIAGA JIMENA YANIRA", grado: "QUINTO                        B                             " },
    { dni: "60523029", nombre: "DURAN VALENCIA THALIA KATHERINE", grado: "QUINTO                        B                             " },
    { dni: "61610957", nombre: "ESPINOZA SHINTSIA NAYTY ROSIO", grado: "QUINTO                        B                             " },
    { dni: "72339164", nombre: "FLORES DAVILA JESSY PAMELA", grado: "QUINTO                        B                             " },
    { dni: "61407264", nombre: "FLORES INGA DANIEL", grado: "QUINTO                        B                             " },
    { dni: "60281575", nombre: "HUAYANA RICRA ROSA MARIA", grado: "QUINTO                        B                             " },
    { dni: "61376151", nombre: "MANGUALAYA TAIPE MARCK ANTONI", grado: "QUINTO                        B                             " },
    { dni: "61523322", nombre: "ORIHUELA QUENTIOVIA JAZMIN ADELITH", grado: "QUINTO                        B                             " },
    { dni: "61071255", nombre: "OROZ VICENTE JOSE LUIS", grado: "QUINTO                        B                             " },
    { dni: "61407265", nombre: "PEÑA GUZMAN LIZBETH", grado: "QUINTO                        B                             " },
    { dni: "61407278", nombre: "PIZARRO RIVAS LINDSAY MARIADELA", grado: "QUINTO                        B                             " },
    { dni: "61523284", nombre: "ROJAS USCAMAYTA ANGHELO JEFERSON", grado: "QUINTO                        B                             " },
    { dni: "62842266", nombre: "SEGUIL ESQUIVEL FRECIA LINDA", grado: "QUINTO                        B                             " },
    { dni: "61376323", nombre: "SOVERO PIZARRO KATERIN NICOL", grado: "QUINTO                        B                             " },
    { dni: "73163846", nombre: "VALLEJOS LLIMPE JANS LEE", grado: "QUINTO                        B                             " },
    { dni: "61255980", nombre: "VARGAS QUISPE MEDALITH NIDIA", grado: "QUINTO                        B                             " },
    { dni: "61407249", nombre: "ACOSTA CALDAS ELVA ROSARIO", grado: "QUINTO                        C                             " },
    { dni: "61407199", nombre: "ASTORAY PEREZ MARICIELO PALOMA", grado: "QUINTO                        C                             " },
    { dni: "61055659", nombre: "CARDENAS UNTIVEROS SHIRLEY LIZBETH", grado: "QUINTO                        C                             " },
    { dni: "61551777", nombre: "CASO PAUCARCAJA CILMA", grado: "QUINTO                        C                             " },
    { dni: "61407159", nombre: "CELIS GAMBOA JEFERSON BINCE", grado: "QUINTO                        C                             " },
    { dni: "61407167", nombre: "CHAMORRO SILVESTRE IVETT YADIRA", grado: "QUINTO                        C                             " },
    { dni: "61407150", nombre: "CHAUSIN LOZANO NADINE MAYELA", grado: "QUINTO                        C                             " },
    { dni: "72829376", nombre: "CHAVEZ FERNANDEZ BIANCA", grado: "QUINTO                        C                             " },
    { dni: "61523370", nombre: "DIAZ REYES EMY LIZ", grado: "QUINTO                        C                             " },
    { dni: "61071268", nombre: "FLORES ESPINOZA ALLISON NICOLE", grado: "QUINTO                        C                             " },
    { dni: "62347423", nombre: "GAMARRA TAPIA ANNELY STEFANY", grado: "QUINTO                        C                             " },
    { dni: "60102685", nombre: "HUAMAN LLANOS MARICIELO HOTISHI", grado: "QUINTO                        C                             " },
    { dni: "60105545", nombre: "HUAMAN ROJAS MIRIAN NAYDALY", grado: "QUINTO                        C                             " },
    { dni: "61407288", nombre: "HUARI RIVAS JESUS JOSE", grado: "QUINTO                        C                             " },
    { dni: "61407194", nombre: "MALLMA SIMON KEIKO SOFIA", grado: "QUINTO                        C                             " },
    { dni: "61407294", nombre: "MENDEZ BALTAZAR YAJAYRA", grado: "QUINTO                        C                             " },
    { dni: "61667595", nombre: "MONTERO ALARCON JHANELI ROSMERI", grado: "QUINTO                        C                             " },
    { dni: "60368114", nombre: "MORALES GARCIA RUTH NOEMI", grado: "QUINTO                        C                             " },
    { dni: "61407263", nombre: "NOLASCO VARGAS DEYSI NICOLE", grado: "QUINTO                        C                             " },
    { dni: "62010108", nombre: "QUINTO LAVANDO EVELYN YENY", grado: "QUINTO                        C                             " },
    { dni: "62010146", nombre: "RICSE NOLASCO MEDALY NAYELI", grado: "QUINTO                        C                             " },
    { dni: "61507068", nombre: "TINEO RAMOS VARINIA MAVEL", grado: "QUINTO                        C                             " },
    { dni: "61507067", nombre: "VASQUEZ HUAMAN DAVID GUSTAVO", grado: "QUINTO                        C                             " },
    { dni: "60708470", nombre: "VEGA FLORES NEISI MARIENY", grado: "QUINTO                        C                             " },
    { dni: "61523301", nombre: "VILA MOYA YHANDALY CLAUDIA", grado: "QUINTO                        C                             " }

];

const seleccionados = [];
let logo1 = "", logo2 = "";

document.addEventListener("DOMContentLoaded", () => {
    const selDocente = document.getElementById("docente");
    docentes.forEach(doc => {
        const opt = document.createElement("option");
        opt.value = doc.dni;
        opt.textContent = `${doc.nombre} (${doc.dni})`;
        selDocente.appendChild(opt);
    });

    const listaEst = document.getElementById("listaEstudiantes");
    estudiantes.forEach(est => {
        const opt = document.createElement("option");
        opt.value = `${est.nombre} - ${est.dni}`;
        listaEst.appendChild(opt);
    });

    // ✅ Reemplazado con rutas absolutas
    cargarLogo("https://leonardomaytan.github.io/2025-SEC-JG-INCIDENCIAS/img/logo-jg.png", b64 => logo1 = b64);
    cargarLogo("https://leonardomaytan.github.io/2025-SEC-JG-INCIDENCIAS/img/logo-sec.png", b64 => logo2 = b64);
});

function cargarLogo(url, callback) {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = function () {
        const canvas = document.createElement("canvas");
        canvas.width = this.width;
        canvas.height = this.height;
        canvas.getContext("2d").drawImage(this, 0, 0);
        callback(canvas.toDataURL("image/png"));
    };
    img.src = url;
}

function agregarEstudiante() {
    const valor = document.getElementById("buscador").value.trim().toLowerCase();
    if (!valor) return;

    const est = estudiantes.find(e =>
        e.dni === valor ||                        // DNI exacto
        (`${e.nombre} - ${e.dni}`).toLowerCase() === valor || // Selección completa del datalist
        e.nombre.toLowerCase().includes(valor)    // Coincidencia parcial por apellido/nombre
    );

    if (!est) return alert("No se encontró el estudiante");
    if (seleccionados.some(e => e.dni === est.dni)) return alert("Estudiante ya agregado");

    seleccionados.push(est);
    actualizarTabla();
    document.getElementById("buscador").value = "";
}


function eliminarEstudiante(dni) {
    const idx = seleccionados.findIndex(e => e.dni === dni);
    if (idx >= 0) {
        seleccionados.splice(idx, 1);
        actualizarTabla();
    }
}

function actualizarTabla() {
    const tbody = document.querySelector("#tablaEstudiantes tbody");
    tbody.innerHTML = "";
    seleccionados.forEach(est => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${est.dni}</td>
          <td>${est.nombre}</td>
          <td>${est.grado}</td>
          <td><button class="delete-btn" onclick="eliminarEstudiante('${est.dni}')">Eliminar</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function generarPDFMasivo() {
    if (seleccionados.length === 0) return alert("Agrega al menos un estudiante");
    const docenteDNI = document.getElementById("docente").value;
    if (!docenteDNI) return alert("Selecciona un docente responsable");

    const descripcion = document.getElementById("descripcion").value.trim();
    if (!descripcion) return alert("La descripción es obligatoria");
    if (descripcion.length > 190) return alert("La descripción no puede superar los 190 caracteres");

    const docente = docentes.find(d => d.dni === docenteDNI);

    const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

    seleccionados.forEach((est, i) => {
        if (i > 0 && i % 2 === 0) doc.addPage();
        const yOffset = (i % 2 === 0) ? 10 : 140;

        const ticketID = generarID();
        const fecha = new Date().toISOString().slice(0, 10);
        const hora = new Date().toTimeString().slice(0, 5);

        if (logo1) doc.addImage(logo1, 'PNG', 10, yOffset, 25, 25);
        if (logo2) doc.addImage(logo2, 'PNG', 180, yOffset, 25, 25);

        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.text("“AÑO DE LA RECUPERACIÓN Y CONSOLIDACIÓN", 105, yOffset + 4, null, null, "center");
        doc.text("DE LA ECONOMÍA PERUANA”", 105, yOffset + 10, null, null, "center");
        doc.text("Institución Educativa Integrada JOSÉ GÁLVEZ", 105, yOffset + 18, null, null, "center");
        doc.setFontSize(11);
        doc.text("¡HACIA UNA EDUCACIÓN COMPETITIVA Y DE CALIDAD!", 105, yOffset + 25, null, null, "center");

        doc.setFontSize(13);
        doc.text("FICHA DE INCIDENCIA", 105, yOffset + 35, null, null, "center");
        doc.setLineWidth(0.5);
        doc.line(10, yOffset + 38, 200, yOffset + 38);

        const x = 15;
        let y = yOffset + 45;
        const ancho = 180;
        doc.rect(x, y - 5, ancho, 85);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.text(`Número de Incidencia: ${ticketID}`, x + 5, y); y += 7;
        doc.text(`DNI Estudiante: ${est.dni}`, x + 5, y); y += 7;
        doc.text(`Nombre Estudiante: ${est.nombre}`, x + 5, y); y += 7;
        doc.text(`Grado y Sección: ${est.grado}`, x + 5, y); y += 7;
        doc.text(`Fecha: ${fecha}`, x + 5, y); y += 7;
        doc.text(`Hora: ${hora}`, x + 5, y); y += 7;

        const textoDesc = doc.splitTextToSize(`Descripción: ${descripcion}`, ancho - 10);
        doc.text(textoDesc, x + 5, y); y += textoDesc.length * 6;

        y += 10;
        doc.text("_______________________________", x + 5, y);
        doc.text("Firma del Apoderado", x + 15, y + 5);
        doc.text("_______________________________", x + 105, y);
        doc.text(docente.nombre, x + 110, y + 5);
        doc.text(`DNI: ${docente.dni}`, x + 110, y + 10);
    });

    doc.save("Incidencia.pdf");
}


function generarID() {
    const now = new Date();
    const fecha = now.toISOString().slice(0, 10).replace(/-/g, '');
    const hora = now.toTimeString().slice(0, 8).replace(/:/g, '');
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `Ficha-${fecha}-${hora}-${random}`;}

    const descripcionInput = document.getElementById("descripcion");
const contador = document.getElementById("contador");

descripcionInput.addEventListener("input", () => {
    contador.textContent = `${descripcionInput.value.length} / 190`;
});

