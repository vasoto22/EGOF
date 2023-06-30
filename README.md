# Patrones de Diseño (GoF)

Los patrones de diseño GoF son ampliamente utilizados en la industria del desarrollo de software para mejorar la estructura, la flexibilidad y la mantenibilidad del código. 
Son considerados como una guía útil para resolver problemas de diseño comunes y promover buenas prácticas de diseño orientado a objetos.

## Patrones Creacionales:

* Singleton: Garantiza que una clase tenga una única instancia y proporciona un punto de acceso global a ella.
* Factory Method: Define una interfaz para crear objetos, pero permite a las subclases decidir qué clase concreta instanciar.
* Abstract Factory: Proporciona una interfaz para crear familias de objetos relacionados sin especificar sus clases concretas.
* Builder: Separar la construcción de un objeto complejo de su representación, de modo que el mismo proceso de construcción pueda crear diferentes representaciones.
* Prototype: Permite crear nuevos objetos mediante la clonación de un objeto existente.

## Patrones Estructurales:

* Adapter: Convierte la interfaz de una clase en otra interfaz que los clientes esperan.
* Bridge: Separa la abstracción de su implementación, lo que permite que ambas varíen de forma independiente.
* Composite: Compone objetos en estructuras de árbol para representar jerarquías parte-todo.
* Decorator: Agrega responsabilidades adicionales a un objeto dinámicamente.
* Facade: Proporciona una interfaz unificada para un conjunto de interfaces en un subsistema.
* Flyweight: Comparte de manera eficiente objetos que se usan frecuentemente para minimizar el consumo de memoria.
* Proxy: Proporciona un representante o sustituto de otro objeto para controlar su acceso.

## Patrones de Comportamiento:

* Chain of Responsibility: Permite que múltiples objetos se turnen para manejar una solicitud, evitando acoplamientos entre el remitente y el receptor.
* Command: Encapsula una solicitud como un objeto, permitiendo parametrizar clientes con diferentes solicitudes, encolarlas o registrar su ejecución.
* Interpreter: Define una representación gramatical de un lenguaje y proporciona un intérprete para evaluar sentencias en el lenguaje.
* Iterator: Proporciona una forma de acceder secuencialmente a los elementos de una colección sin exponer su estructura interna.
* Mediator: Define un objeto que encapsula cómo un conjunto de objetos interactúa, promoviendo el bajo acoplamiento entre ellos.
* Memento: Captura y externaliza el estado interno de un objeto, de modo que se pueda restaurar más tarde sin violar la encapsulación.
* Observer: Define una dependencia de uno a muchos entre objetos, de modo que cuando un objeto cambia su estado, todos los objetos dependientes son notificados y actualizados automáticamente.
* State: Permite que un objeto altere su comportamiento cuando su estado interno cambia.
* Strategy: Permite definir una familia de algoritmos, encapsular cada uno y hacerlos intercambiables.
* Template Method: Define el esqueleto de un algoritmo en una clase base, dejando que las subclases proporcionen la implementación concreta de ciertos pasos.
* Visitor: Permite separar los algoritmos de la estructura de los objetos sobre los que operan.

Cada patrón de diseño GoF describe un problema común de diseño, su solución general y las consecuencias y consideraciones de implementación asociadas. 
Los patrones se presentan en un formato estructurado que incluye una descripción del problema, el diseño de la solución, diagramas UML y ejemplos de código.

# Ventajas de usar GoF

En general, el uso de patrones de diseño ofrece numerosos beneficios, incluida la reutilización de soluciones probadas, la mejora de la estructura del código, la flexibilidad del sistema y la promoción 
de principios de diseño sólidos. Sin embargo, es importante recordar que no todos los problemas requieren el uso de patrones de diseño y que su aplicación debe realizarse de manera adecuada y justificada en cada caso.

## Algunas ventanjas más detalladas

* Reutilización de soluciones probadas: Los patrones de diseño encapsulan soluciones probadas y efectivas para problemas comunes en el diseño de software. Al utilizar estos patrones, puedes aprovechar soluciones           
  existentes y evitar reinventar la rueda en cada proyecto.

* Mejora la estructura y organización del código: Los patrones de diseño promueven buenas prácticas de diseño y arquitectura. Ayudan a organizar y estructurar el código de manera más clara, modular y mantenible. Al seguir   los patrones, puedes hacer que tu código sea más legible, comprensible y fácil de mantener.

* Facilita la comunicación entre desarrolladores: Los patrones de diseño proporcionan un lenguaje común y una terminología compartida entre los desarrolladores. Esto facilita la comunicación y la comprensión entre los       miembros del equipo, ya que pueden referirse a los patrones para describir problemas y soluciones de manera precisa y concisa.

* Mejora la flexibilidad y extensibilidad del sistema: Los patrones de diseño permiten que los sistemas sean más flexibles y adaptables a los cambios. Al utilizar patrones como el Principio Abierto-Cerrado y la Inversión    de Dependencias, puedes diseñar tu código de manera que sea fácil de extender y modificar sin afectar el funcionamiento existente.

* Promueve el diseño orientado a objetos y los principios SOLID: Los patrones de diseño están estrechamente relacionados con los principios de diseño orientado a objetos, como el Principio de Responsabilidad Única, el       Principio de Sustitución de Liskov y el Principio de Inversión de Dependencias. Utilizar patrones de diseño te ayuda a aplicar estos principios y a crear un código más modular, flexible y mantenible.

* Estándares de la industria: Los patrones de diseño son ampliamente utilizados y reconocidos en la industria del desarrollo de software. Al utilizar patrones de diseño, sigues prácticas comunes y estándares de diseño       aceptados, lo que facilita la colaboración con otros desarrolladores y la comprensión de tu código por parte de terceros.


