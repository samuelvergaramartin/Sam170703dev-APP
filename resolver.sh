#!/bin/bash

# Función que se ejecutará en caso de error
handle_error() {
    echo "Ocurrió un error en la operación."
    # Agrega aquí cualquier acción adicional que quieras realizar en caso de error
}

# Intenta ejecutar el comando o la operación
try_operation() {
    # Introduce aquí el comando o la operación que quieres intentar
    # Por ejemplo, lanzar un comando y verificar su código de salida
    electron . 2> errors.log
    if [ $? -ne 0 ]; then
        # Si el código de salida no es 0 (indicando un error), ejecuta la función de manejo de errores
        handle_error
    fi
}

# Intenta la operación
try_operation