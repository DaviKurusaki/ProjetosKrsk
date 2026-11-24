const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const store = { get: k => { try { return localStorage.getItem(k) } catch { return null } }, set: (k, v) => { try { localStorage.setItem(k, v) } catch {} } };
const WA = 'https://wa.me/5519993779228?text=';
const waMsg = { pt: 'Olá Davi, vi seu portfólio e quero um orçamento de site.', en: 'Hi Davi, I saw your portfolio and would like a website quote.', es: 'Hola Davi, vi tu portafolio y quiero un presupuesto de sitio web.' };

/* ---------- textos EN / ES (PT vem do HTML) ---------- */
const T = {
en: {
  skip:'Skip to content','nav.projects':'Projects','nav.services':'Services','nav.about':'About','nav.faq':'FAQ','nav.contact':'Get a quote',
  'hero.where':'Davi Augusto Raimundo, web developer','hero.title':'Fast, good-looking websites that help your business get found.',
  'hero.lead':'I\'ve been coding for 5 years and I build websites, landing pages and NFC card pages that load fast on phones, show up on Google and take customers straight to your WhatsApp.',
  'hero.cta1':'Get a quote on WhatsApp','hero.cta2':'See projects','hero.clients':'Live websites for','hero.and':'and',
  'proj.title':'Live projects','proj.sub':'Websites for real companies and games I made in college. Click a project to see its goal and tools.','proj.all':'All','proj.f1':'Business websites','proj.f2':'Web games','proj.f3':'Unity games','proj.empty':'No projects in this category yet.',
  'cat.site':'Business website','cat.web':'Web game','cat.unity':'Unity game',
  'p.porto.d':'Page opened by the company\'s NFC card, with services, contacts and catalog in one tap.','p.sist.d':'Digital card with save contact, WhatsApp, map directions and company socials.','p.parts.d':'Links hub in Portuguese and English, with per-department emails and PDF materials.',
  'p.jardim.t':'The Garden of Poisons','p.jardim.d':'Mystery game inspired by The Apothecary Diaries, made for a college seminar.','p.eco.t':'Echo of the Veil','p.eco.d':'Final college project made by two people in Unity in 3 months: concept, 3D modeling, sound and code.',
  'm.goal':'Goal','m.feat':'What it has','m.open':'Open project',
  'serv.title':'What I do for your business','serv.sub':'Light websites that are fast on phones and easy to find on Google. You get it finished and online, with nothing to set up.',
  's1.t':'Business website','s1.d':'A complete page that presents your business, shows what you do and takes customers straight to WhatsApp.','s1.a':'Design that matches your brand','s1.b':'Ready to show up on Google','s1.c':'Privacy policy (LGPD)',
  's2.t':'NFC card and links page','s2.d':'Customers tap the card with their phone and save your contact, open WhatsApp, the map and your catalog.','s2.a':'Save contact in one tap','s2.b':'Buttons for every channel','s2.c':'Also works with a QR code',
  's3.t':'Fixes and Google presence','s3.d':'Already have a site that is slow, broken on mobile or missing from search? I fix it.','s3.a':'Google Business Profile','s3.b':'Layout and speed fixes','s3.c':'Text and photo updates',
  'steps.title':'How it works','st1.t':'Talk','st1.d':'Tell me what you need on WhatsApp. I reply with timeline and price within 24 hours.','st2.t':'First version','st2.d':'I build the site with your text, photos and logo and send you a link to check on your phone.','st3.t':'Adjustments','st3.d':'You ask for changes and I fix them until it\'s right.','st4.t':'Live','st4.d':'I publish it, connect your domain if you have one and get it ready for Google.',
  'about.title':'Who will build your site','about.p1':'I\'m Davi, I\'m 22 and I\'ve been coding since I was 17. I started by building small tools to solve everyday problems, and today I make websites for businesses, professionals and personal brands.',
  'about.p2':'I use plain HTML, CSS and JavaScript when a project needs to be light, and React or Electron when it needs more. I\'m also studying Digital Games at FATEC Americana, where I build games in Unity and for the browser.','about.p3':'I take care of every site from the first sketch until it\'s live and showing up on Google, and I stay around after delivery.',
  'sk.web':'Web','sk.sys':'Tools','sk.design':'Design','sk.designv':'Responsive interfaces, animation, image optimization','sk.game':'Games','sk.gamev':'Unity 2D and 3D, C#, Blender, spritesheets, animation',
  'rev.title':'People I\'ve worked with','r1':'“I really liked the way the project was handled. He was respectful, organized and brought creative ideas that greatly improved the final result.”','r1.role':'Parts Seals, links page','r2':'“An extremely attentive, creative and committed professional. He understood the proposal clearly and delivered a result far above expectations.”','r2.role':'Partner on the game Echo of the Veil',
  'faq.title':'Common questions','q1':'How much does a website cost?','a1':'It depends on size. A single page for a business or NFC card is the most affordable; multi-page sites cost more. Send me what you need and I\'ll reply with a price within 24 hours.',
  'q2':'How long does it take?','a2':'A single page is usually ready in 3 to 7 days after I receive text, photos and logo. Larger sites get a timeline in the quote.','q3':'Do I need to pay for hosting?','a3':'In most cases, no. Static sites are hosted for free on services like Netlify. The only extra cost is your own domain, if you want one.',
  'q4':'Do you work outside Santa Bárbara d\'Oeste?','a4':'Yes. In person in Santa Bárbara d\'Oeste, Americana and nearby, and remotely anywhere.','q5':'Is the site LGPD compliant?','a5':'Yes. Every site ships with a privacy policy and, if it uses analytics or forms, a consent notice.',
  'ct.title':'Let\'s put your business on Google','ct.sub':'Message me on WhatsApp with your company name and what you need. No commitment.','ct.wa':'Message on WhatsApp',
  'ft.city':'Santa Bárbara d\'Oeste, Brazil.','ft.priv':'Privacy policy','cookie.t':'This site uses no tracking cookies. It only stores the language and theme you choose in your browser.','cookie.more':'Learn more','cookie.ok':'Got it'
},
es: {
  skip:'Saltar al contenido','nav.projects':'Proyectos','nav.services':'Servicios','nav.about':'Sobre mí','nav.faq':'Dudas','nav.contact':'Pedir presupuesto',
  'hero.where':'Davi Augusto Raimundo, desarrollador web','hero.title':'Sitios rápidos y bonitos, hechos para que encuentren tu empresa.',
  'hero.lead':'Programo hace 5 años y creo sitios, landing pages y páginas para tarjeta NFC que cargan rápido en el celular, aparecen en Google y llevan al cliente directo a tu WhatsApp.',
  'hero.cta1':'Pedir presupuesto por WhatsApp','hero.cta2':'Ver proyectos','hero.clients':'Sitios online para','hero.and':'y',
  'proj.title':'Proyectos online','proj.sub':'Sitios de empresas reales y juegos que hice en la facultad. Haz clic en un proyecto para ver su objetivo y herramientas.','proj.all':'Todos','proj.f1':'Sitios para empresas','proj.f2':'Juegos web','proj.f3':'Juegos Unity','proj.empty':'Todavía no hay proyectos en esta categoría.',
  'cat.site':'Sitio para empresa','cat.web':'Juego web','cat.unity':'Juego Unity',
  'p.porto.d':'Página que abre la tarjeta NFC de la empresa, con servicios, contactos y catálogo en un toque.','p.sist.d':'Tarjeta digital con guardar contacto, WhatsApp, ruta en el mapa y redes de la empresa.','p.parts.d':'Central de enlaces en portugués e inglés, con e-mails por sector y materiales en PDF.',
  'p.jardim.t':'El Jardín de los Venenos','p.jardim.d':'Juego de misterio inspirado en The Apothecary Diaries, hecho para un seminario de la facultad.','p.eco.t':'Eco del Velo','p.eco.d':'Trabajo final hecho en dupla en Unity en 3 meses: idea, modelado 3D, sonidos y programación.',
  'm.goal':'Objetivo','m.feat':'Qué incluye','m.open':'Abrir proyecto',
  'serv.title':'Lo que hago por tu empresa','serv.sub':'Sitios livianos, rápidos en el celular y fáciles de encontrar en Google. Lo recibes listo y online, sin configurar nada.',
  's1.t':'Sitio para empresa','s1.d':'Una página completa que presenta tu negocio, muestra lo que haces y lleva al cliente directo a WhatsApp.','s1.a':'Diseño con la identidad de tu marca','s1.b':'Listo para aparecer en Google','s1.c':'Política de privacidad (LGPD)',
  's2.t':'Tarjeta NFC y página de enlaces','s2.d':'El cliente acerca el celular a la tarjeta y guarda tu contacto, abre WhatsApp, el mapa y el catálogo.','s2.a':'Guardar contacto en un toque','s2.b':'Botones para todos los canales','s2.c':'También funciona con código QR',
  's3.t':'Ajustes y presencia en Google','s3.d':'¿Tu sitio ya existe pero es lento, se rompe en el celular o no aparece en las búsquedas? Lo arreglo.','s3.a':'Perfil de empresa en Google','s3.b':'Corrección de diseño y velocidad','s3.c':'Actualización de textos y fotos',
  'steps.title':'Cómo funciona','st1.t':'Conversación','st1.d':'Me cuentas lo que necesitas por WhatsApp. Respondo con plazo y precio en 24 horas.','st2.t':'Primera versión','st2.d':'Armo el sitio con tus textos, fotos y logo y te envío un enlace para verlo en el celular.','st3.t':'Ajustes','st3.d':'Pides los cambios y los corrijo hasta que quede bien.','st4.t':'Online','st4.d':'Lo publico, lo conecto a tu dominio si tienes uno y lo dejo listo para Google.',
  'about.title':'Quién va a hacer tu sitio','about.p1':'Soy Davi, tengo 22 años y programo desde los 17. Empecé creando pequeñas herramientas para resolver problemas del día a día y hoy hago sitios para empresas, profesionales y marcas personales.',
  'about.p2':'Uso HTML, CSS y JavaScript puros cuando el proyecto pide liviandad, y React o Electron cuando pide más. También estudio Juegos Digitales en la FATEC Americana, donde desarrollo juegos en Unity y para navegador.','about.p3':'Me ocupo de cada sitio desde el primer boceto hasta que está online y aparece en Google, y sigo cerca después de la entrega.',
  'sk.web':'Web','sk.sys':'Herramientas','sk.design':'Diseño','sk.designv':'Interfaces responsivas, animaciones, optimización de imágenes','sk.game':'Juegos','sk.gamev':'Unity 2D y 3D, C#, Blender, spritesheets, animación',
  'rev.title':'Quién ya trabajó conmigo','r1':'“Me gustó mucho la forma en que condujo el proyecto. Fue respetuoso, organizado y aportó ideas creativas que valoraron mucho el resultado final.”','r1.role':'Parts Seals, página de enlaces','r2':'“Un profesional extremadamente atento, creativo y comprometido. Entendió la propuesta con claridad y entregó un resultado muy por encima de lo esperado.”','r2.role':'Compañero en el juego Eco del Velo',
  'faq.title':'Dudas comunes','q1':'¿Cuánto cuesta un sitio?','a1':'Depende del tamaño. Una página única para empresa o tarjeta NFC es lo más económico; los sitios con varias páginas cuestan más. Envíame lo que necesitas y respondo con el precio en 24 horas.',
  'q2':'¿En cuánto tiempo está listo?','a2':'Una página única suele estar lista en 3 a 7 días después de recibir textos, fotos y logo. Los sitios más grandes tienen el plazo en el presupuesto.','q3':'¿Tengo que pagar hosting?','a3':'En la mayoría de los casos, no. Los sitios estáticos se alojan gratis en servicios como Netlify. El único costo aparte es el dominio propio, si quieres uno.',
  'q4':'¿Atiendes fuera de Santa Bárbara d\'Oeste?','a4':'Sí. Presencial en Santa Bárbara d\'Oeste, Americana y región, y a distancia en cualquier lugar.','q5':'¿El sitio cumple la LGPD?','a5':'Sí. Todo sitio sale con política de privacidad y, si usa analítica o formularios, con aviso de consentimiento.',
  'ct.title':'¿Ponemos tu empresa en Google?','ct.sub':'Escríbeme por WhatsApp con el nombre de tu empresa y lo que necesitas. Sin compromiso.','ct.wa':'Escribir por WhatsApp',
  'ft.city':'Santa Bárbara d\'Oeste, Brasil.','ft.priv':'Política de privacidad','cookie.t':'Este sitio no usa cookies de seguimiento. Solo guarda en tu navegador el idioma y el tema que elijas.','cookie.more':'Saber más','cookie.ok':'Entendido'
}};

/* ---------- detalhes dos projetos ---------- */
const P = {
  porto:{url:'https://portovedacoes-apresentacao.netlify.app/',tech:'HTML, CSS, JavaScript',
    full:{pt:'Página institucional e de contato criada para ser acessada pelo cartão NFC da empresa. Reúne informações comerciais, serviços, canais de contato e atalhos úteis em uma experiência direta e profissional.',en:'Institutional and contact page created to be opened from the company\'s NFC card. It brings together business information, services, contact channels and useful shortcuts in a direct, professional experience.',es:'Página institucional y de contacto creada para abrirse desde la tarjeta NFC de la empresa. Reúne información comercial, servicios, canales de contacto y accesos útiles en una experiencia directa y profesional.'},
    goal:{pt:'Facilitar o acesso rápido às informações da empresa e transformar o cartão NFC em uma apresentação digital completa.',en:'Make company information quick to reach and turn the NFC card into a complete digital presentation.',es:'Facilitar el acceso rápido a la información de la empresa y convertir la tarjeta NFC en una presentación digital completa.'},
    feat:{pt:['Apresentação institucional','Atalhos de contato','Seções de serviços','Layout responsivo'],en:['Company presentation','Contact shortcuts','Service sections','Responsive layout'],es:['Presentación institucional','Atajos de contacto','Secciones de servicios','Diseño responsivo']}},
  sistendrau:{url:'https://sistendrau-nfc.netlify.app/',tech:'HTML, CSS, JavaScript',
    full:{pt:'Página de acesso rápido para cartão NFC, reunindo informações essenciais, ações de contato e caminhos úteis para clientes da Sistendrau.',en:'Quick-access page for an NFC card, gathering essential information, contact actions and useful paths for Sistendrau clients.',es:'Página de acceso rápido para tarjeta NFC, con información esencial, acciones de contacto y rutas útiles para clientes de Sistendrau.'},
    goal:{pt:'Centralizar contatos e dados da empresa em uma página simples, elegante e acessível pelo cartão NFC.',en:'Centralize company contacts and details in a simple, elegant page opened from the NFC card.',es:'Centralizar contactos y datos de la empresa en una página simple, elegante y accesible desde la tarjeta NFC.'},
    feat:{pt:['Links rápidos','Contato por WhatsApp','Dados comerciais','Visual responsivo'],en:['Quick links','WhatsApp contact','Business details','Responsive design'],es:['Enlaces rápidos','Contacto por WhatsApp','Datos comerciales','Diseño responsivo']}},
  parts:{url:'https://parts-seals-links.netlify.app/',tech:'HTML, CSS, JavaScript',
    full:{pt:'Página prática para organizar os principais canais de atendimento, e-mails, materiais e áreas de atuação da Parts Seals em uma interface direta e responsiva.',en:'Practical page organizing Parts Seals\' main service channels, emails, materials and business areas in a direct, responsive interface.',es:'Página práctica que organiza los canales de atención, e-mails, materiales y áreas de actuación de Parts Seals en una interfaz directa y responsiva.'},
    goal:{pt:'Oferecer uma página central de links para clientes acessarem rapidamente os canais e materiais da empresa.',en:'Give clients one central page to quickly reach the company\'s channels and materials.',es:'Ofrecer una página central de enlaces para que los clientes accedan rápido a los canales y materiales de la empresa.'},
    feat:{pt:['Links comerciais','E-mails por setor','Materiais em PDF','Português e inglês'],en:['Business links','Per-department emails','PDF materials','Portuguese and English'],es:['Enlaces comerciales','E-mails por sector','Materiales en PDF','Portugués e inglés']}},
  jardim:{url:'https://apotecaria.netlify.app/',tech:'HTML, CSS, JavaScript',
    full:{pt:'Projeto acadêmico em formato de jogo para navegador. Tem ambientação visual temática, tela inicial, instruções e navegação pensada para apoiar a apresentação do seminário.',en:'Academic project made as a browser game. It has a themed visual atmosphere, start screen, instructions and navigation built to support the seminar presentation.',es:'Proyecto académico hecho como juego de navegador. Tiene ambientación temática, pantalla inicial, instrucciones y navegación pensada para apoyar el seminario.'},
    goal:{pt:'Transformar o conteúdo do seminário em uma experiência interativa e memorável para apresentar em sala.',en:'Turn the seminar content into an interactive, memorable experience for the classroom.',es:'Transformar el contenido del seminario en una experiencia interactiva y memorable para presentar en clase.'},
    feat:{pt:['Tela inicial temática','Fluxo de jogo','Instruções de uso','Roda no navegador'],en:['Themed start screen','Game flow','How-to-play guide','Runs in the browser'],es:['Pantalla inicial temática','Flujo de juego','Instrucciones de uso','Funciona en el navegador']}},
  eco:{url:'https://davikurusaki.itch.io/eco-do-vu',tech:'Unity, C#, Blender, 3D',
    full:{pt:'Desenvolvido em dupla como TCC da faculdade. O projeto nasceu da ideia inicial e avançou em 3 meses por game design, modelagem, sistemas, sons e programação dentro da Unity.',en:'Made by two people as a college final project. It grew from the initial idea through game design, modeling, systems, sound and code in Unity over 3 months.',es:'Desarrollado en dupla como trabajo final de la facultad. Nació de la idea inicial y avanzó en 3 meses por game design, modelado, sistemas, sonidos y programación en Unity.'},
    goal:{pt:'Criar uma experiência jogável autoral reunindo narrativa, ambientação, sistemas de gameplay e produção visual.',en:'Create an original playable experience combining narrative, atmosphere, gameplay systems and visual production.',es:'Crear una experiencia jugable original que reúna narrativa, ambientación, sistemas de gameplay y producción visual.'},
    feat:{pt:['Desenvolvimento em dupla','Produção em 3 meses','Modelagem e assets 3D','Sons e programação na Unity'],en:['Two-person team','3-month production','3D modeling and assets','Sound and Unity code'],es:['Desarrollo en dupla','Producción en 3 meses','Modelado y assets 3D','Sonidos y programación en Unity']}}
};

/* ---------- idioma ---------- */
const PT = {};
$$('[data-i18n]').forEach(el => PT[el.dataset.i18n] ??= el.innerHTML);
let lang = 'pt';
function setLang(l) {
  lang = T[l] || l === 'pt' ? l : 'pt';
  $$('[data-i18n]').forEach(el => { const k = el.dataset.i18n; el.innerHTML = lang === 'pt' ? PT[k] : (T[lang][k] ?? PT[k]); });
  $$('[data-lang]').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === lang));
  $$('a[href^="https://wa.me"]').forEach(a => a.href = WA + encodeURIComponent(waMsg[lang]));
  document.documentElement.lang = { pt: 'pt-BR', en: 'en', es: 'es' }[lang];
  store.set('portfolio-language', lang);
}
$$('[data-lang]').forEach(b => b.onclick = () => setLang(b.dataset.lang));
const saved = store.get('portfolio-language'), nav = (navigator.language || 'pt').slice(0, 2);
setLang(saved || (nav === 'en' || nav === 'es' ? nav : 'pt'));

/* ---------- tema ---------- */
$('#theme').onclick = () => { const d = document.documentElement.classList.toggle('dark'); store.set('portfolio-theme', d ? 'dark' : 'light'); };

/* ---------- menu mobile ---------- */
const menu = $('#menu'), burger = $('#burger');
burger.onclick = () => { const o = menu.classList.toggle('open'); burger.setAttribute('aria-expanded', o); };
$$('a', menu).forEach(a => a.addEventListener('click', () => { menu.classList.remove('open'); burger.setAttribute('aria-expanded', false); }));

/* ---------- filtros ---------- */
$$('[data-filter]').forEach(b => b.onclick = () => {
  const f = b.dataset.filter; let n = 0;
  $$('[data-filter]').forEach(x => x.setAttribute('aria-pressed', x === b));
  $$('.work').forEach(w => { const show = f === 'all' || w.dataset.cat === f; w.hidden = !show; n += show; });
  $('.empty').hidden = n > 0;
});

/* ---------- modal ---------- */
const modal = $('#modal');
$$('.work__open').forEach(btn => btn.onclick = () => {
  const li = btn.closest('.work'), p = P[li.dataset.id], img = $('img', li);
  $('.modal__img', modal).src = img.src; $('.modal__img', modal).alt = img.alt;
  $('#m-cat').textContent = $('.work__cat', li).textContent;
  $('#m-title').textContent = $('.work__name', li).textContent;
  $('#m-full').textContent = p.full[lang]; $('#m-goal').textContent = p.goal[lang];
  $('#m-feat').innerHTML = p.feat[lang].map(f => `<li>${f}</li>`).join('');
  $('#m-tech').textContent = p.tech; $('#m-link').href = p.url;
  modal.showModal();
});
modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });

/* ---------- aviso de privacidade ---------- */
if (!store.get('aviso-ok')) $('#aviso').hidden = false;
$('#aviso-ok').onclick = () => { $('#aviso').hidden = true; store.set('aviso-ok', '1'); };

$('#ano').textContent = new Date().getFullYear();

/* ---------- profundidade no hero (só mouse, respeita reduzir movimento) ---------- */
const stage = $('#stage');
if (stage && matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches) {
  $('.hero').addEventListener('pointermove', e => {
    const r = stage.getBoundingClientRect();
    stage.style.setProperty('--mx', ((e.clientX - r.left) / r.width - .5).toFixed(3));
    stage.style.setProperty('--my', ((e.clientY - r.top) / r.height - .5).toFixed(3));
  });
}
