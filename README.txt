CanelaBlueWeb - Proyecto Disney College Program (Versión Final)
--------------------------------------------------------------

Contenido del paquete:
- index.html
- que-es.html
- testimonios.html
- galeria.html
- css/style.css
- js/script.js
- images/           (carpeta con imágenes de ejemplo - puedes reemplazarlas)
- videos/           (vacía - coloca aquí tus .mp4)
- fonts/            (CARPETA VACÍA: coloca aquí fonts/Waltograph.ttf si tienes la fuente y licencia)
- README.txt        (este archivo)

IMPORTANTE sobre la tipografía Waltograph:
-----------------------------------------
Por razones de licencia no se incluye el archivo de la fuente Waltograph.ttf en este paquete.
Si deseas que TODO el sitio use Waltograph (estilo Disney) coloca el archivo de fuente en:
    fonts/Waltograph.ttf
y recarga la página (Live Server). El style.css ya está preparado para usar la fuente local.

Cómo añadir videos a la INTRO (index.html):
------------------------------------------
1. Copia tus archivos .mp4 a la carpeta 'videos' (por ejemplo: videos/video-intro-1.mp4).
2. Abre index.html en un editor (VS Code) y localiza las tarjetas de video con clase "video-card".
   Cada una tiene un atributo data-src. Cambia data-src por la ruta real de tu archivo, por ejemplo:
     <div class="video-card" data-src="videos/video-intro-1.mp4">...</div>
3. Si quieres una miniatura personalizada, reemplaza el contenido de <div class="video-thumb"> por
   una etiqueta <img src="images/tu-miniatura.jpg" alt="..."> u otro elemento visual.
4. Guarda y recarga con Live Server. Haz clic en el triángulo de play para abrir el video en pantalla grande.

Cómo añadir testimonios (testimonios.html):
-------------------------------------------
1. Coloca tus archivos .mp4 en 'videos/' (ej: videos/testimonio1.mp4).
2. En testimonios.html, actualiza los atributos data-src de las tarjetas .video-card con las rutas de tus videos.
3. Guarda y recarga; al hacer clic en PLAY el video se abrirá en el lightbox y se reproducirá.

Cómo reemplazar imágenes en la galería (galeria.html):
-----------------------------------------------------
1. Copia tus imágenes a la carpeta 'images/' (ej: images/foto1.jpg).
2. En galeria.html, reemplaza las etiquetas <img src="https://picsum.photos/..."> por <img src="images/foto1.jpg">, etc.
3. Guarda y recarga; las imágenes se mostrarán y el lightbox abrirá la imagen en grande al hacer clic.

Agregar videos de YouTube embebidos (opcional):
------------------------------------------------
Si quieres embeber un video de YouTube en lugar de un archivo local, sigue estos pasos:
1. Copia el iframe proporcionado por YouTube y pégalo dentro del lightbox mediante JavaScript,
   o sustituye el contenido de una tarjeta .video-card por un enlace y ajusta el script para crear un iframe.
2. Si quieres que un botón de PLAY abra un iframe, reemplaza data-src por la URL de YouTube y adapta
   la sección del script que crea el elemento <video> para crear un <iframe> con src basado en la URL.

Recomendaciones finales:
- Abre el proyecto en Visual Studio Code y usa la extensión Live Server: clic derecho sobre index.html -> Open with Live Server.
- Mantén nombres en minúsculas y sin espacios para evitar problemas de ruta.
- Asegúrate de tener licencia para usar Waltograph si la colocas en /fonts/.

Si quieres, puedo actualizar el paquete para añadir miniaturas locales o ejemplos de videos locales.
