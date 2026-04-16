const STORAGE_KEY = 'mcb_plan30_state_v2';
const AUTHORIZED_KEYS = [
  'McB-Blancanieves-00'
];

const quotes = [
  'Hoy no te maquillas para esconderte, sino para expresarte.',
  'Cuidarte también es una forma de volver a ti.',
  'La belleza que permanece empieza en cómo te miras.',
  'No se trata de tapar, sino de resaltar lo que ya hay en ti.',
  'Cada pequeño paso también transforma.'
];

const weeks = [
  { id: 1, title: 'Semana 1 · Piel bonita', objective: 'Que la piel se vea sana sin recargar', days: [1,2,3,4,5,6,7] },
  { id: 2, title: 'Semana 2 · Correcciones y rostro', objective: 'Verte descansada, no maquillada', days: [8,9,10,11,12,13,14] },
  { id: 3, title: 'Semana 3 · Ojos', objective: 'Levantar la mirada con suavidad', days: [15,16,17,18,19,20,21] },
  { id: 4, title: 'Semana 4 · Labios e integración', objective: 'Armonía total y estilo propio', days: [22,23,24,25,26,27,28,29,30] }
];

const days = [
  {day:1, week:1, title:'Limpieza + hidratación', objective:'Empezar desde una piel cómoda y receptiva.', summary:'Observa manchas, arrugas, zonas secas y textura. Una piel limpia e hidratada mejora todo el maquillaje.', technical:'El PDF insiste en limpiar con emulsión neutra, tonificar y humectar según el tipo de piel. La piel debe estar fresca, nunca tirante.', matureTip:'En piel madura, la sequedad se nota más. Si la piel tira, el maquillaje marcará todo.', task:'Haz tu rutina básica y anota cómo se comporta tu piel durante 10 minutos.', premiumTip:'Si la piel se ve sana sin maquillaje, ya tienes media cara resuelta.'},
  {day:2, week:1, title:'Crema bien aplicada', objective:'Aprender a preparar sin arrastrar.', summary:'Aplica la crema con presión suave, respetando la piel y sin frotar.', technical:'La preparación correcta mejora duración y acabado. Presionar ayuda a no sensibilizar la epidermis.', matureTip:'La presión suave favorece confort y evita insistir sobre zonas finas.', task:'Aplica tu crema presionando en mejillas, frente, contorno y cuello.', premiumTip:'Menos fricción, más elegancia en el resultado.'},
  {day:3, week:1, title:'Protector solar + textura', objective:'Entender cómo responde tu piel antes de maquillar.', summary:'El protector es parte del ritual. Aprende si tu piel queda jugosa, seca o con exceso de brillo.', technical:'La clasificación de la piel del PDF te ayuda a distinguir normal, grasa, seca, mixta, deshidratada o sensible.', matureTip:'Muchas pieles +50 son secas o deshidratadas aunque también tengan zona T.', task:'Aplica protector y observa acabado, duración y sensación.', premiumTip:'No copies rutinas ajenas: lee tu piel cada mañana.'},
  {day:4, week:1, title:'Primer con criterio', objective:'Usarlo solo si suma.', summary:'Descubre qué hace y dónde aplicarlo para no saturar la piel.', technical:'No toda la cara necesita lo mismo. El primer puede suavizar poro, alisar o prolongar duración.', matureTip:'En piel madura funciona mejor en zonas puntuales que como capa total.', task:'Prueba primer solo en la zona que más lo necesite.', premiumTip:'Producto útil no significa producto obligatorio.'},
  {day:5, week:1, title:'Base ligera', objective:'Trabajar la técnica “menos es más”.', summary:'Busca uniformar sin tapar tu piel.', technical:'El paso a paso del PDF coloca la base después de preparar y observar el rostro. Empieza siempre por poca cantidad.', matureTip:'El exceso marca arrugas, poros y textura. Base fina, mejor resultado.', task:'Aplica base solo en centro del rostro y difumina hacia fuera.', premiumTip:'Corrige, no enmascares.'},
  {day:6, week:1, title:'Dedos vs brocha vs esponja', objective:'Encontrar tu herramienta ideal.', summary:'Cada herramienta cambia el acabado, cobertura y tiempo.', technical:'Los pinceles sintéticos van bien con texturas cremosas; brochas y pelo natural funcionan mejor con polvo.', matureTip:'Los dedos calientan el producto y pueden dar naturalidad. La esponja suaviza exceso.', task:'Haz media cara con una herramienta y la otra media con otra distinta.', premiumTip:'No existe la herramienta perfecta; existe la que mejor te deja a ti.'},
  {day:7, week:1, title:'Rutina completa de piel', objective:'Integrar todo sin prisas.', summary:'Une limpieza, hidratación, protector, preparación y base ligera.', technical:'El PDF recuerda que la piel debe estar lista y fría al tacto antes de maquillar.', matureTip:'Esperar unos minutos entre cuidado y maquillaje cambia el acabado.', task:'Haz tu rutina completa y saca una foto con luz natural.', premiumTip:'Aquí ya tienes gran parte del trabajo hecho.'},
  {day:8, week:2, title:'Corrector de ojeras', objective:'Corregir solo donde hace falta.', summary:'Trabaja la zona oscura, no toda la ojera.', technical:'La teoría del color ayuda a neutralizar tonos apagados o violáceos antes de iluminar.', matureTip:'Demasiado corrector cuartea y suma edad.', task:'Aplica una capa fina solo en la sombra más marcada.', premiumTip:'Dos capas finas siempre ganan a una gruesa.'},
  {day:9, week:2, title:'Técnica de luz', objective:'Verte más despierta.', summary:'Ilumina con un triángulo invertido muy suave.', technical:'La luz bien colocada equilibra más que una cobertura alta.', matureTip:'La piel madura agradece más luminosidad estratégica que producto denso.', task:'Haz una corrección ligera y observa cómo cambia tu expresión.', premiumTip:'Luz antes que cobertura.'},
  {day:10, week:2, title:'Polvos: dónde sí y dónde no', objective:'Fijar sin apagar.', summary:'Quita el exceso de brillo solo donde moleste.', technical:'El paso a paso del PDF sitúa los polvos cerca del final, no como una capa pesada desde el principio.', matureTip:'Demasiado polvo endurece y envejece.', task:'Aplica muy poca cantidad solo en zona T o donde haga falta.', premiumTip:'Si pierdes vida, te has pasado.'},
  {day:11, week:2, title:'Colorete lifting', objective:'Subir visualmente el rostro.', summary:'El colorete debe levantar, no caer.', technical:'La corrección del rostro usa claroscuros y dirección. En tu caso manda la diagonal ascendente.', matureTip:'Textura crema o satinada suele favorecer más que un polvo seco.', task:'Coloca el colorete desde mejilla hacia sien y difumina.', premiumTip:'El rubor bien puesto rejuvenece más que muchos productos.'},
  {day:12, week:2, title:'Bronzer suave', objective:'Dar dimensión sin endurecer.', summary:'Usa calor con moderación para aportar estructura.', technical:'Los claroscuros del PDF sirven para corregir, no para dibujar líneas evidentes.', matureTip:'En +50 mejor sombra suave que contorno duro.', task:'Añade bronzer muy difuminado en sien y perímetro alto.', premiumTip:'Que se intuya, no que se vea.'},
  {day:13, week:2, title:'Iluminador natural', objective:'Dar luz sutil y elegante.', summary:'Aplica brillo fino, nunca escarchado.', technical:'La brillantez del color cambia la percepción del volumen. La luz debe parecer piel, no producto.', matureTip:'Evita texturas gruesas sobre zonas con arruga marcada.', task:'Pon un toque mínimo en pómulo alto y observa con luz natural.', premiumTip:'Iluminar no es brillar: es devolver frescura.'},
  {day:14, week:2, title:'Rutina completa de rostro', objective:'Combinar corrección, color y luz.', summary:'Haz una versión equilibrada y ligera de tu maquillaje de buena cara.', technical:'Base, corrección, rubor, luz e integración deben verse unidas.', matureTip:'Mejor quedarte un poco corta que excederte.', task:'Haz la rutina completa y detecta qué paso te cambia más.', premiumTip:'Aquí empieza ese efecto de “te veo estupenda y no sé por qué”.'},
  {day:15, week:3, title:'Preparar párpado', objective:'Mejorar agarre y duración.', summary:'Un párpado bien preparado facilita todo lo que viene después.', technical:'La observación del rostro también incluye forma y necesidad de corrección de los ojos.', matureTip:'En piel madura el párpado puede plegarse más; prepara con poco producto.', task:'Uniforma suavemente el párpado antes de aplicar sombra.', premiumTip:'La mirada bonita empieza antes de la sombra.'},
  {day:16, week:3, title:'Sombra base neutra', objective:'Crear una base suave y favorecedora.', summary:'Los tonos neutros dan limpieza y estructura.', technical:'La temperatura del color importa: cálidos y fríos deben acompañar tu piel y armonía general.', matureTip:'Los neutros satinados suaves suelen resultar más amables que tonos muy mates y duros.', task:'Aplica una sombra neutra en todo el párpado móvil.', premiumTip:'La sencillez bien ejecutada siempre se ve más cara.'},
  {day:17, week:3, title:'Profundidad suave', objective:'Dar dimensión sin endurecer.', summary:'Trabaja cuenca y extremo externo con una sombra suave.', technical:'El sombreado del ojo debe corregir con claridad y dirección, no con exceso de pigmento.', matureTip:'En +50 manda el difuminado ascendente y la sutileza.', task:'Marca solo un poco la cuenca y sube el difuminado.', premiumTip:'Más aire, menos bloque de color.'},
  {day:18, week:3, title:'Difuminado', objective:'Hacer desaparecer cortes.', summary:'El producto bonito no tiene bordes duros.', technical:'El PDF repite la importancia de la armonía y de la transición entre tonos.', matureTip:'Una mirada suave abre más que una línea dura.', task:'Difumina hasta que no sepas dónde empieza exactamente la sombra.', premiumTip:'Difuminar es más importante que aplicar.'},
  {day:19, week:3, title:'Delineado suave', objective:'Definir sin endurecer.', summary:'Olvida la raya rígida; busca efecto de sombra pegada a pestañas.', technical:'Los perfiladores y sombras pueden convivir, pero en social el resultado debe ser corrector y favorecedor.', matureTip:'Marrones y grises difuminados suelen funcionar mejor que negro marcado.', task:'Haz un delineado pequeño y difumínalo con pincel.', premiumTip:'Si parece sombra, vas bien.'},
  {day:20, week:3, title:'Máscara de pestañas', objective:'Abrir la mirada.', summary:'La técnica importa tanto como el producto.', technical:'El paso a paso del PDF sitúa máscara y postizas tras el trabajo de ojos y cejas.', matureTip:'Insiste en raíz y peina bien para no apelmazar.', task:'Aplica desde raíz hacia arriba con movimiento suave.', premiumTip:'Raíz marcada, puntas ligeras.'},
  {day:21, week:3, title:'Rutina completa de ojos', objective:'Integrar párpado, profundidad, delineado y máscara.', summary:'Hoy unes todo lo trabajado durante la semana.', technical:'La armonía de color del conjunto debe respetar rostro y labios.', matureTip:'Ojo trabajado no significa ojo pesado.', task:'Haz tu rutina completa con acabado suave y ascendente.', premiumTip:'Aquí es donde más cambia el rostro.'},
  {day:22, week:4, title:'Perfilado natural de labios', objective:'Definir sin endurecer.', summary:'Perfila respetando tu forma y corrige solo lo justo.', technical:'El PDF contempla correcciones de labios y proporciones del rostro para armonizar.', matureTip:'Texturas cremosas e hidratantes suelen favorecer más que acabados secos.', task:'Perfila con trazo suave y difumina el borde hacia dentro.', premiumTip:'Perfilador que no se ve, pero sí mejora.'},
  {day:23, week:4, title:'Labiales favorecedores +50', objective:'Elegir color y textura con intención.', summary:'Busca tonos que aporten vida y confort.', technical:'La armonía del color importa tanto como la saturación y la brillantez.', matureTip:'Los hidratantes satinados suelen devolver frescura.', task:'Prueba dos tonos: uno nude vivo y otro más subido, y compáralos.', premiumTip:'Tu mejor labial no es el más llamativo: es el que te despierta la cara.'},
  {day:24, week:4, title:'Equilibrio ojos vs labios', objective:'Que todo tenga armonía.', summary:'No todo debe gritar a la vez.', technical:'El maquillaje social debe concordar con temperamento, contexto y equilibrio.', matureTip:'Ojo suave con labio bonito o labio más protagonista con mirada limpia.', task:'Haz dos versiones rápidas y decide cuál te favorece más.', premiumTip:'La elegancia casi siempre está en el equilibrio.'},
  {day:25, week:4, title:'Look rápido 10 min', objective:'Tener una rutina realista.', summary:'Aprende a verte bien con pocos pasos.', technical:'El criterio manda más que la cantidad de productos.', matureTip:'Piel, corrector, rubor, ojos suaves y labios hidratados pueden bastar.', task:'Cronometra 10 minutos y construye tu look exprés.', premiumTip:'Si puedes repetirlo en un día real, ese look sí cuenta.'},
  {day:26, week:4, title:'Look de día completo', objective:'Crear un maquillaje fresco y favorecedor.', summary:'Haz una versión luminosa pensada para diario.', technical:'Respeta la secuencia: piel, base, ojos, rubor, labios, iluminación y fijación.', matureTip:'La luz natural debe ser tu juez final.', task:'Haz tu look de día y mírate junto a una ventana.', premiumTip:'La naturalidad siempre gana de cerca.'},
  {day:27, week:4, title:'Look de noche sencillo', objective:'Subir intensidad sin perder elegancia.', summary:'Añade un punto más de profundidad o labio, no todo a la vez.', technical:'El contexto importa: día y noche piden intensidad distinta, no rostro distinto.', matureTip:'Sube el contraste con cuidado para no endurecer.', task:'Transforma tu look de día en uno de noche en 5 minutos.', premiumTip:'Más presencia, no más peso.'},
  {day:28, week:4, title:'Corrección de errores comunes', objective:'Saber ajustar sobre la marcha.', summary:'Hoy observas exceso de base, polvo, corrector, delineado o color.', technical:'Las correcciones faciales del PDF te ayudan a entender volumen, equilibrio y dirección.', matureTip:'Cuando algo no te guste, quita o difumina antes de añadir.', task:'Haz tu look y corrige conscientemente dos errores.', premiumTip:'Corregir bien es más profesional que aplicar mucho.'},
  {day:29, week:4, title:'Práctica mental paso a paso', objective:'Consolidar criterio.', summary:'Repasa tu rutina de memoria y entiende el orden.', technical:'El aprendizaje real no es repetir sin pensar, sino saber por qué haces cada paso.', matureTip:'Cuando tu secuencia está clara, te maquillas mejor y más rápido.', task:'Sin espejo, recita o escribe tus pasos clave.', premiumTip:'Primero se ordena la mente; luego se ordena la mano.'},
  {day:30, week:4, title:'Rutina final completa', objective:'Cerrar con tu estilo propio.', summary:'Hoy construyes tu versión final: favorecida, cómoda y coherente contigo.', technical:'Integra piel, corrección, color, armonía y forma sin perder naturalidad.', matureTip:'El objetivo no es parecer otra, sino verte tú, pero mejor.', task:'Haz tu look final, hazte una foto y anota tus 3 claves personales.', premiumTip:'No solo has aprendido maquillaje. Has aprendido criterio.'}
];

const library = [
  { title:'Piel y preparación', text:'Clasifica tu piel: normal, seca, grasa, mixta, deshidratada o sensible. Limpia, tonifica, hidrata y deja que la piel se asiente antes de maquillar.', bullets:['La piel debe estar limpia y cómoda.','Si al tacto está caliente, espera o brumiza.','En +50 la hidratación es la verdadera prebase.'] },
  { title:'Teoría del color', text:'El color se organiza en primarios, secundarios y terciarios. En maquillaje importa el tono, la brillantez y la saturación.', bullets:['Tonos cálidos: rojos, amarillos, naranjas.','Tonos fríos: azules y verdes.','La armonía correcta hace que todo se vea más natural.'] },
  { title:'Correctores', text:'Corrigen oscuridad y desequilibrios antes de cubrir. La clave está en usar poco y solo en la zona necesaria.', bullets:['Corrige primero, ilumina después.','Menos producto, más efecto.','Difumina bien para evitar pliegues.'] },
  { title:'Bases', text:'La base debe concordar con tu piel y tu contexto. En maquillaje social no debe enmascarar.', bullets:['Empieza en el centro del rostro.','Difumina hacia fuera.','El tono debe desaparecer en mandíbula.'] },
  { title:'Rubor y polvos', text:'Aportan estructura, fijación y vida, pero sin secar el rostro.', bullets:['Colorete ascendente para efecto lifting.','Polvos solo donde hagan falta.','Mejor textura ligera que acabado duro.'] },
  { title:'Cejas y ojos', text:'La mirada se define con equilibrio: cejas peinadas, sombras suaves, profundidad bien difuminada y máscara bien aplicada.', bullets:['Evita líneas negras rígidas.','La cuenca suave da dimensión.','La máscara abre la mirada si trabajas la raíz.'] },
  { title:'Labios', text:'El labio acompaña el conjunto. Puede equilibrar o protagonizar según el resto del maquillaje.', bullets:['Perfila natural y difumina.','Texturas hidratantes suelen favorecer más.','Respeta tu forma antes de exagerarla.'] },
  { title:'Correcciones faciales', text:'Los claroscuros sirven para modificar visualmente el volumen y equilibrar el rostro.', bullets:['Todo hacia arriba rejuvenece.','Corrige con suavidad.','Que no se note el truco.'] }
];

const fundamentals = [
  ['La piel es la protagonista','A partir de los 50 la piel suele ser más fina y con más textura. Si la preparas bien, necesitas menos maquillaje.','Limpia, hidrata, protege y espera unos minutos antes de empezar.'],
  ['Menos cantidad, más efecto','El exceso marca arrugas y resta frescura.','Empieza con poco y añade solo donde realmente haga falta.'],
  ['Luz antes que cobertura','La piel madura necesita vida, no peso.','Ilumina estratégicamente y corrige lo justo.'],
  ['Todo hacia arriba','La dirección cambia el rostro.','Colorete, sombra y correcciones siempre en ascendente.'],
  ['Difuminar es más importante que aplicar','El maquillaje bonito no se nota por líneas.','Si no ves bordes, vas bien.'],
  ['Texturas adecuadas','Los productos secos y mates endurecen si se abusan.','Prioriza acabados finos, cremosos o satinados.'],
  ['Ojos suaves, no duros','Una mirada demasiado rígida envejece.','Sombra difuminada mejor que raya negra marcada.'],
  ['Menos es más','Naturalidad y elegancia van juntas.','Si dudas en añadir, normalmente no lo añadas.'],
  ['Armonía, no protagonistas','No todo debe destacar a la vez.','Equilibra ojos y labios según el look.'],
  ['Practicar con intención','No es hacer mucho, sino mejorar algo concreto cada día.','Una práctica enfocada acelera el progreso.']
].map(([title,text,example])=>({title,text,example}));

const errors = [
  ['Demasiada base','Se marca la textura y se apaga el rostro.','Aplica solo en el centro y difumina hacia fuera.'],
  ['Tono incorrecto','Genera efecto máscara o cara apagada.','Prueba en mandíbula y elige el que desaparece.'],
  ['Exceso de polvos','Endurece y envejece.','Úsalos solo donde haga falta.'],
  ['Corrector en exceso','Se cuartea y marca más la zona.','Pon poca cantidad solo en la oscuridad.'],
  ['No preparar la piel','El maquillaje no se integra.','Hidrata siempre y espera un poco.'],
  ['Delineado duro','La mirada se vuelve rígida.','Sustitúyelo por sombra difuminada.'],
  ['Mal difuminado','Se ven cortes y líneas.','Dedica más tiempo a suavizar bordes.'],
  ['Colorete mal colocado','Puede hacer que el rostro caiga.','Llévalo hacia la sien.'],
  ['Todo demasiado mate','Apaga y seca la piel.','Busca acabados vivos y finos.'],
  ['Querer hacerlo perfecto el día 1','Frustra y bloquea el avance.','Trabaja una sola habilidad por práctica.']
].map(([title,problem,fix])=>({title,problem,fix}));

const projects = [
  ['Buena cara en 10 minutos','Crear una versión rápida y realista del maquillaje diario.'],
  ['Adiós cara cansada','Usar luz, corrector y rubor para despertar el rostro.'],
  ['Mirada elevada','Construir ojos suaves con efecto ascendente.'],
  ['Efecto lifting completo','Integrar dirección, rubor y correcciones faciales.'],
  ['Piel jugosa vs apagada','Comparar acabados y entender qué texturas te favorecen.'],
  ['Look de día real','Conseguir un maquillaje cómodo y repetible.'],
  ['Look de noche sutil +50','Subir presencia sin endurecer.'],
  ['Errores vs corrección','Aprender a detectar y ajustar sobre la marcha.'],
  ['Maquillaje sin espejo perfecto','Reforzar memoria mental y orden.'],
  ['Mi evolución en 30 días','Valorar lo aprendido con mirada objetiva.']
].map(([title,goal])=>({title,goal}));

const metrics = ['pielNatural','difuminado','efectoLifting','ojosFavorecedores','tiempo'];
const metricLabels = {
  pielNatural: 'Piel natural',
  difuminado: 'Difuminado',
  efectoLifting: 'Efecto lifting',
  ojosFavorecedores: 'Ojos favorecedores',
  tiempo: 'Tiempo / soltura'
};

const defaultState = {
  accessName: '',
  completedDays: [],
  tracking: {},
  selectedDay: 1,
  certificateReady: false
};

let state = loadState();
let certificateDataUrl = null;

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...defaultState, ...JSON.parse(raw) } : { ...defaultState };
  } catch {
    return { ...defaultState };
  }
}
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
function getProgressPercent() {
  return Math.round((state.completedDays.length / days.length) * 100);
}
function getStatus(dayNumber) {
  if (state.completedDays.includes(dayNumber)) return 'completed';
  if (dayNumber === state.selectedDay) return 'in-progress';
  return 'pending';
}
function getNextDay() {
  return days.find(d => !state.completedDays.includes(d.day)) || days[days.length - 1];
}
function formatName(raw) {
  return raw.replace(/^McB-/i, '').replace(/-\d+$/, '').replace(/-/g,' ').trim();
}
function validateKey(key) {
  return /^McB-[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+(?:[A-Za-zÁÉÍÓÚÜÑáéíóúüñ-]*)-\d{2}$/u.test(key.trim());
}
function isAuthorizedKey(key) {
  return AUTHORIZED_KEYS.includes(key.trim());
}

const accessKey = document.getElementById('accessKey');
const toggleKeyBtn = document.getElementById('toggleKeyBtn');
const accessBtn = document.getElementById('accessBtn');
const loginMessage = document.getElementById('loginMessage');
const publicArea = document.getElementById('publicArea');
const appContent = document.getElementById('appContent');
const toggleBizumBtn = document.getElementById('toggleBizumBtn');
const bizumBox = document.getElementById('bizumBox');
const continueBtn = document.getElementById('continueBtn');
const resetProgressBtn = document.getElementById('resetProgressBtn');
const progressPercent = document.getElementById('progressPercent');
const progressText = document.getElementById('progressText');
const progressFill = document.getElementById('progressFill');
const nextDayTitle = document.getElementById('nextDayTitle');
const nextDaySubtitle = document.getElementById('nextDaySubtitle');
const welcomeTitle = document.getElementById('welcomeTitle');
const rotatingQuote = document.getElementById('rotatingQuote');
const certificateStatus = document.getElementById('certificateStatus');
const weeksOverview = document.getElementById('weeksOverview');
const daysGrid = document.getElementById('daysGrid');
const dayDetail = document.getElementById('dayDetail');
const libraryGrid = document.getElementById('libraryGrid');
const fundamentalsGrid = document.getElementById('fundamentalsGrid');
const errorsGrid = document.getElementById('errorsGrid');
const projectsGrid = document.getElementById('projectsGrid');
const trackingDaySelect = document.getElementById('trackingDaySelect');
const trackingForm = document.getElementById('trackingForm');
const saveTrackingBtn = document.getElementById('saveTrackingBtn');
const trackingMessage = document.getElementById('trackingMessage');
const weeklyReview = document.getElementById('weeklyReview');
const generateCertificateBtn = document.getElementById('generateCertificateBtn');
const downloadCertificateBtn = document.getElementById('downloadCertificateBtn');
const certificateCanvas = document.getElementById('certificateCanvas');
const ctx = certificateCanvas.getContext('2d');

toggleBizumBtn.addEventListener('click', () => bizumBox.classList.toggle('hidden'));
toggleKeyBtn.addEventListener('click', () => {
  accessKey.type = accessKey.type === 'password' ? 'text' : 'password';
  toggleKeyBtn.textContent = accessKey.type === 'password' ? 'Mostrar' : 'Ocultar';
});
accessBtn.addEventListener('click', handleAccess);
accessKey.addEventListener('keydown', e => { if (e.key === 'Enter') handleAccess(); });
continueBtn.addEventListener('click', () => selectDay(getNextDay().day, true));
resetProgressBtn.addEventListener('click', resetProgress);
saveTrackingBtn.addEventListener('click', saveTracking);
trackingDaySelect.addEventListener('change', () => renderTrackingForm(Number(trackingDaySelect.value)));
generateCertificateBtn.addEventListener('click', generateCertificate);
downloadCertificateBtn.addEventListener('click', downloadCertificate);

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

function handleAccess() {
  const key = accessKey.value.trim();
  if (!validateKey(key)) {
    loginMessage.textContent = 'La clave no tiene el formato correcto. Usa algo como McB-Virginia-01.';
    return;
  }
  if (!isAuthorizedKey(key)) {
    loginMessage.textContent = 'Esta clave no está activa. Primero realiza el pago por Bizum y recibe tu acceso personalizado.';
    return;
  }
  state.accessName = formatName(key);
  state.accessKey = key;
  saveState();
  loginMessage.textContent = '';
  publicArea.classList.add('hidden');
  appContent.classList.remove('hidden');
  initApp();
}

function initApp() {
  welcomeTitle.textContent = `Bienvenida, ${state.accessName}. Este espacio es para ti.`;
  rotatingQuote.textContent = quotes[new Date().getDate() % quotes.length];
  renderOverview();
  renderWeeks();
  renderDays();
  renderLibrary();
  renderFundamentals();
  renderErrors();
  renderProjects();
  renderTrackingSelect();
  renderTrackingForm(state.selectedDay);
  renderWeeklyReview();
  drawLockedCertificate();
}

function renderOverview() {
  const percent = getProgressPercent();
  const next = getNextDay();
  progressPercent.textContent = `${percent}%`;
  progressText.textContent = `${state.completedDays.length} de 30 días completados`;
  progressFill.style.width = `${percent}%`;
  nextDayTitle.textContent = `Día ${next.day}`;
  nextDaySubtitle.textContent = next.title;
  const done = percent === 100;
  certificateStatus.textContent = done ? 'Disponible' : 'Bloqueado';
  state.certificateReady = done;
  generateCertificateBtn.disabled = !done;
  downloadCertificateBtn.disabled = !certificateDataUrl;
  saveState();
}

function renderWeeks() {
  weeksOverview.innerHTML = weeks.map(week => {
    const done = week.days.filter(d => state.completedDays.includes(d)).length;
    const percent = Math.round((done / week.days.length) * 100);
    return `
      <article class="week-card">
        <p class="eyebrow">${week.title}</p>
        <h3>${week.objective}</h3>
        <p>${done} de ${week.days.length} prácticas completadas</p>
        <div class="mini-progress"><span style="width:${percent}%"></span></div>
      </article>`;
  }).join('');
}

function renderDays() {
  daysGrid.innerHTML = days.map(item => {
    const status = getStatus(item.day);
    const statusLabel = status === 'completed' ? 'Completado' : status === 'in-progress' ? 'En curso' : 'Pendiente';
    return `
      <button class="day-chip ${status} ${state.selectedDay===item.day?'active':''}" data-day="${item.day}">
        <div>
          <strong>Día ${item.day}</strong>
          <p>${item.title}</p>
        </div>
        <small>${statusLabel}</small>
      </button>`;
  }).join('');
  daysGrid.querySelectorAll('[data-day]').forEach(btn => btn.addEventListener('click', () => selectDay(Number(btn.dataset.day))));
  renderDayDetail();
}

function selectDay(dayNumber, scroll = false) {
  state.selectedDay = dayNumber;
  saveState();
  renderDays();
  renderTrackingForm(dayNumber);
  trackingDaySelect.value = String(dayNumber);
  if (scroll) dayDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderDayDetail() {
  const item = days.find(d => d.day === state.selectedDay);
  const status = getStatus(item.day);
  const statusClass = status === 'completed' ? 'done' : status === 'in-progress' ? 'live' : 'pending';
  const statusLabel = status === 'completed' ? 'Completado' : status === 'in-progress' ? 'En práctica' : 'Pendiente';
  dayDetail.innerHTML = `
    <div class="detail-grid">
      <div>
        <p class="eyebrow">Semana ${item.week} · Día ${item.day}</p>
        <h2>${item.title}</h2>
        <span class="status-pill ${statusClass}">${statusLabel}</span>
        <div class="info-block"><h4>Objetivo del día</h4><p>${item.objective}</p></div>
        <div class="info-block"><h4>Qué vas a trabajar</h4><p>${item.summary}</p></div>
        <div class="info-block"><h4>Base técnica</h4><p>${item.technical}</p></div>
      </div>
      <div>
        <div class="info-block"><h4>Tip para piel madura</h4><p>${item.matureTip}</p></div>
        <div class="info-block"><h4>Tarea del día</h4><p>${item.task}</p></div>
        <div class="info-block"><h4>Tip premium</h4><p>${item.premiumTip}</p></div>
      </div>
    </div>
    <div class="day-actions">
      <button class="primary-btn" id="completeDayBtn">${state.completedDays.includes(item.day) ? 'Marcar como pendiente' : 'Marcar como completado'}</button>
      <button class="ghost-btn" id="nextDetailBtn">Ir al siguiente día</button>
    </div>`;
  document.getElementById('completeDayBtn').addEventListener('click', () => toggleComplete(item.day));
  document.getElementById('nextDetailBtn').addEventListener('click', () => {
    const next = Math.min(item.day + 1, 30);
    selectDay(next, true);
  });
}

function toggleComplete(dayNumber) {
  if (state.completedDays.includes(dayNumber)) {
    state.completedDays = state.completedDays.filter(d => d !== dayNumber);
  } else {
    state.completedDays.push(dayNumber);
    state.completedDays.sort((a,b)=>a-b);
    const currentWeek = weeks.find(w => w.days.includes(dayNumber));
    if (currentWeek && currentWeek.days.every(d => state.completedDays.includes(d))) {
      alert(`Has completado ${currentWeek.title}. Muy bien: estás consolidando criterio, no solo pasos.`);
    }
    if (state.completedDays.length === 30) {
      alert('Lo has conseguido. No solo has aprendido maquillaje. También te has dedicado tiempo, atención y cuidado.');
    }
  }
  saveState();
  renderOverview();
  renderWeeks();
  renderDays();
}

function renderLibrary() {
  libraryGrid.innerHTML = library.map(item => `
    <article class="library-item">
      <p class="eyebrow">Biblioteca</p>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <ul class="clean-list">${item.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
    </article>`).join('');
}

function renderFundamentals() {
  fundamentalsGrid.innerHTML = fundamentals.map(item => `
    <article class="stack-item">
      <p class="eyebrow">Fundamento</p>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <div class="info-block"><h4>Ejemplo práctico</h4><p>${item.example}</p></div>
    </article>`).join('');
}

function renderErrors() {
  errorsGrid.innerHTML = errors.map(item => `
    <article class="stack-item">
      <p class="eyebrow">Error común</p>
      <h3>${item.title}</h3>
      <div class="info-block"><h4>Qué pasa</h4><p>${item.problem}</p></div>
      <div class="info-block"><h4>Cómo corregirlo</h4><p>${item.fix}</p></div>
    </article>`).join('');
}

function renderProjects() {
  projectsGrid.innerHTML = projects.map(item => `
    <article class="stack-item">
      <p class="eyebrow">Mini proyecto</p>
      <h3>${item.title}</h3>
      <p>${item.goal}</p>
    </article>`).join('');
}

function renderTrackingSelect() {
  trackingDaySelect.innerHTML = days.map(item => `<option value="${item.day}">Día ${item.day} · ${item.title}</option>`).join('');
  trackingDaySelect.value = String(state.selectedDay);
}

function renderTrackingForm(dayNumber) {
  const entry = state.tracking[dayNumber] || { notes: '', scores: {} };
  trackingForm.innerHTML = metrics.map(metric => `
    <div class="metric-card">
      <label for="metric-${metric}">${metricLabels[metric]}</label>
      <input id="metric-${metric}" type="number" min="0" max="5" value="${entry.scores[metric] ?? ''}" />
    </div>`).join('') + `
    <div class="metric-card" style="grid-column: 1 / -1;">
      <label for="trackingNotes">Qué practiqué y qué mejorar mañana</label>
      <textarea id="trackingNotes" rows="5" placeholder="Hoy trabajé..."></textarea>
    </div>`;
  document.getElementById('trackingNotes').value = entry.notes || '';
}

function saveTracking() {
  const dayNumber = Number(trackingDaySelect.value);
  const scores = {};
  metrics.forEach(metric => {
    const value = document.getElementById(`metric-${metric}`).value;
    scores[metric] = value === '' ? null : Math.max(0, Math.min(5, Number(value)));
  });
  state.tracking[dayNumber] = { scores, notes: document.getElementById('trackingNotes').value.trim() };
  saveState();
  trackingMessage.textContent = 'Seguimiento guardado.';
  renderWeeklyReview();
  setTimeout(() => trackingMessage.textContent = '', 2200);
}

function renderWeeklyReview() {
  weeklyReview.innerHTML = weeks.map(week => {
    const entries = week.days.map(day => state.tracking[day]).filter(Boolean);
    if (!entries.length) {
      return `<div class="review-item"><strong>${week.title}</strong><p>Aún no hay seguimiento guardado.</p></div>`;
    }
    const averages = metrics.map(metric => {
      const vals = entries.map(e => e.scores?.[metric]).filter(v => typeof v === 'number');
      if (!vals.length) return `${metricLabels[metric]}: —`;
      const avg = (vals.reduce((a,b)=>a+b,0) / vals.length).toFixed(1);
      return `${metricLabels[metric]}: ${avg}/5`;
    });
    return `<div class="review-item"><strong>${week.title}</strong><p>${averages.join(' · ')}</p></div>`;
  }).join('');
}

function resetProgress() {
  if (!confirm('Se reiniciará el progreso, el seguimiento y el certificado.')) return;
  state = { ...defaultState, accessName: state.accessName };
  certificateDataUrl = null;
  saveState();
  initApp();
}

function drawLockedCertificate() {
  ctx.clearRect(0,0,certificateCanvas.width, certificateCanvas.height);
  ctx.fillStyle = '#faf6f3';
  ctx.fillRect(0,0,certificateCanvas.width, certificateCanvas.height);
  ctx.fillStyle = '#6f6a64';
  ctx.font = '600 52px Lora';
  ctx.textAlign = 'center';
  ctx.fillText('Certificado de finalización', certificateCanvas.width/2, 260);
  ctx.font = '400 28px Inter';
  ctx.fillText('Completa los 30 días para desbloquear tu certificado.', certificateCanvas.width/2, 340);
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function generateCertificate() {
  if (!state.certificateReady) return;
  const [bg, logo, sign] = await Promise.all([
    loadImage('assets/certificado-base.png'),
    loadImage('assets/logo-mcb.png'),
    loadImage('assets/firma-blancanieves.png')
  ]);
  ctx.clearRect(0,0,certificateCanvas.width, certificateCanvas.height);
  ctx.drawImage(bg, 0, 0, certificateCanvas.width, certificateCanvas.height);

  ctx.fillStyle = '#3f3d3b';
  ctx.textAlign = 'center';
  ctx.font = '600 54px Lora';
  ctx.fillText('Certificado de finalización', certificateCanvas.width / 2, 230);

  ctx.font = '400 26px Inter';
  ctx.fillStyle = '#6b6763';
  ctx.fillText('Momentos con Blancanieves', certificateCanvas.width / 2, 295);
  ctx.fillText('Plan 30 Días de Maquillaje', certificateCanvas.width / 2, 333);

  ctx.strokeStyle = 'rgba(115, 104, 93, 0.2)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(220, 392);
  ctx.lineTo(980, 392);
  ctx.stroke();

  let nameSize = 74;
  ctx.font = `600 ${nameSize}px Lora`;
  while (ctx.measureText(state.accessName).width > 820 && nameSize > 42) {
    nameSize -= 2;
    ctx.font = `600 ${nameSize}px Lora`;
  }
  ctx.fillStyle = '#544d46';
  ctx.fillText(state.accessName, certificateCanvas.width / 2, 560);

  const paragraph = 'Por haber decidido cuidarte, escucharte y priorizarte, logrando resultados que nacen desde dentro y se reflejan en tu piel, tu mirada y tu confianza.';
  wrapText(ctx, paragraph, certificateCanvas.width / 2, 690, 760, 42, '400 32px Inter', '#5f5a56');

  ctx.drawImage(logo, certificateCanvas.width / 2 - 120, 980, 240, 140);

  const signatureWidth = 360;
  const signatureHeight = sign.height / sign.width * signatureWidth;
  ctx.drawImage(sign, 135, 1150, signatureWidth, signatureHeight);

  ctx.font = '400 24px Inter';
  ctx.fillStyle = '#67615c';
  ctx.textAlign = 'left';
  ctx.fillText('Blancanieves', 155, 1325);
  ctx.fillText('Guía del programa', 155, 1360);

  ctx.textAlign = 'right';
  ctx.fillText(new Date().toLocaleDateString('es-ES'), 1040, 1325);
  ctx.fillText('Fecha de finalización', 1040, 1360);

  ctx.strokeStyle = 'rgba(115, 104, 93, 0.25)';
  ctx.beginPath();
  ctx.moveTo(145, 1388);
  ctx.lineTo(460, 1388);
  ctx.moveTo(760, 1388);
  ctx.lineTo(1040, 1388);
  ctx.stroke();

  certificateDataUrl = certificateCanvas.toDataURL('image/png');
  downloadCertificateBtn.disabled = false;
}

function wrapText(context, text, centerX, startY, maxWidth, lineHeight, font, color) {
  context.font = font;
  context.fillStyle = color;
  context.textAlign = 'center';
  const words = text.split(' ');
  let line = '';
  let y = startY;
  for (let i = 0; i < words.length; i++) {
    const test = line + words[i] + ' ';
    if (context.measureText(test).width > maxWidth && i > 0) {
      context.fillText(line.trim(), centerX, y);
      line = words[i] + ' ';
      y += lineHeight;
    } else {
      line = test;
    }
  }
  context.fillText(line.trim(), centerX, y);
}

function downloadCertificate() {
  if (!certificateDataUrl) return;
  const link = document.createElement('a');
  link.href = certificateDataUrl;
  link.download = `certificado-${state.accessName.replace(/\s+/g,'-').toLowerCase()}.png`;
  link.click();
}

if (state.accessName && state.accessKey && isAuthorizedKey(state.accessKey)) {
  publicArea.classList.add('hidden');
  appContent.classList.remove('hidden');
  initApp();
} else {
  state.accessName = '';
  state.accessKey = '';
  saveState();
  drawLockedCertificate();
}
