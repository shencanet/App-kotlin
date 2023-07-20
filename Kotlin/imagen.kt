Cargar Imagen desde una URL web

Si en lugar de usar un archivo local, queremos mostrar en un ImageView una imagen a la que vamos a referenciar mediante su URL (es decir su direccion web que conseguimos por ejemplo navegando y pulsando sobre la imagen BOTON DERECHO > COPIAR DIRECCION DE LA IMAGEN, o algo similar segun el navegador) debemos seguir los siguientes pasos

1- Dar permisos a la app para cargar datos de internet

añadimos en el archivo AndroidManifest.xml la siguiente linea antes de la etiqueta <application ...

    <uses-permission android:name="android.permission.INTERNET" />

2- Añadimos en el gradle (Module) la siguiente linea en las dependencias

    implementation 'com.squareup.picasso:picasso:2.71828'

3- Usamos este código kt haciendo referencia al id que hayamos asignado al ImageView en su declaración en el archivo xml y a una variable donde tendremos la ruta de la imagen

    var ivEjemplo = findViewById<ImageView>(R.id.ivEjemplo)
    val imageURL = "http://jotajotavm.com/img/PREMIUM-AndroidDevelopment.gif"
    Picasso.get().load(imageURL).into(ivEjemplo)


Tendremos que importar "Picasso" para que acepte el uso

Personalmente,  a menos que la situacion realmente lo justifique, no recomiendo hacer esto siempre que pueda evitarse, ¿por qué?

- La app consumira datos

- El tiempo de carga de las imagenes puede ser lento segun la conexion del usuario y eso perjudicara la UX (experiencia de usuario)

- Aumenta la probabilidad de errores (si la imagen la borran del dominio web, o le cambian de nombre, o el usuario no tiene conexion, o tiene conexion pero no suficientes datos...  es más seguro si se usa la imagen como parte de la app aunque aumente el tamaño de espacio en el dispostivo. Si has hecho un uso optimizado de imágenes no será tanto el tamaño)

¿Cuándo no puede evitarse?

En la mayoria de apps modernas esto NO puede evitarse en muchísimos casos, por ejempo:

Imagenes propias de un usuario: no se pueden guardar en toooodos los dispositivos de tooooodos los usuarios toooodas sus imagenes. Tendrán que cargarse cada vez que se quieran mostrar. Este es el caso de posts en redes sociales.

¿Cuándo puede evitarse?

Cuando son imágenes que se usan como parte del diseño especifico de la app. El resto de imágenes que sean cuestiones relativas a usuarios o publicaciones tendrán que cargarse externamente desde la url en la que previamente se hayan cargado, generalmente una base de datos


En la app del proyecto real veremos ambos casos: imágenes cargadas de forma local y desde internet conectándonos a una base de datos







