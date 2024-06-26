# Trabajo practico unidad 2 (optativo)

## Consigna 1

De la API de detalle se puede obtener una propiedad picture. La misma, contiene todas las imagenes del producto. Mostrarlas en la pagina de detalle en lugar de thumbnail.

https://api.mercadolibre.com/items/MLA1434251253

## Consigna 2

Desarrollar la navegacion (utilizando el router) de los componentes home y pagina de producto desarrollados hasta el momento.

Pasos de que se hizo:

1. Mover el componente Home a la carpeta Pages.
2. Utilizar axios en lugar de fetch de JS.
3. Usar spread de JS en el componente Producto.
4. Crear el componente Public en Routes para asociar la ruta "/" al componente Home.
5. Crear el componente NotFound en la carpeta Pages y asociarle cualquier otra ruta.
6. Crear el componente NavBar.
7. Modificar el componente App para que utilice los componentes Public y NavBar.
8. Crear el componente Detalle en la carpeta Pages y asociarle la ruta con la propiedad id "/producto/:id".
9. Modificar los componentes Producto y Boton, de modo que al pulsarlo, se haga una redireccion a "/producto/:id" sin recargar toda la pagina (SPA). Para ello, utilizar template strings y el componente Link.
10. En productosServices crear la funcion getByIdProductos para consumir datos de la API de detalle.
11. En el componente Detalle utilizar el Hook useParams para recuperar el id y pedir los datos a la API de detalle.
12. Crear el componente Imagen para inyectar el thumbnail en el componente Home.
13. Utilizar el componente Imagen para inyectar todas las pictures en el componente Detalle.

https://api.mercadolibre.com/sites/MLA/search?q=ipod

https://api.mercadolibre.com/items/MLA1434251253
