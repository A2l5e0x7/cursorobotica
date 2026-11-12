// src/data/module1.js
export const module1 = {
  "id": 1,
  "title": "Módulo 1",
  "description": "b",
  "lessons": [
    {
      "id": 101,
      "title": "Módulo Demostrativo: Todos los Tipos de Actividades",
      "description": "Una lección completa que repasa teoría, orden de código, ejemplos prácticos, preguntas de opción múltiple y retos de conexión.",
      "tasks": [
        {
          "id": 1,
          "type": "theory",
          "title": "1. Introducción Teórica",
          "subtitle": "Conceptos básicos",
          "instruction": "Lee con atención la siguiente información antes de comenzar con los retos.",
          "content": "Los microcontroladores y sistemas embebidos funcionan ejecutando instrucciones secuenciales y gestionando señales eléctricas. Comprender la estructura del código y cómo interactúan los componentes es fundamental para diseñar cualquier circuito exitoso."
        },
        {
          "id": 2,
          "type": "code_order",
          "title": "2. Ordena el Código",
          "subtitle": "Estructura básica de configuración",
          "instruction": "Organiza las líneas de código en el orden correcto para inicializar un pin digital como salida.",
          "lines": [
            {
              "id": 1,
              "text": "void setup() {"
            },
            {
              "id": 2,
              "text": "  pinMode(LED_BUILTIN, OUTPUT);"
            },
            {
              "id": 3,
              "text": "}"
            },
            {
              "id": 4,
              "text": "void loop() {"
            },
            {
              "id": 5,
              "text": "  digitalWrite(LED_BUILTIN, HIGH);"
            },
            {
              "id": 6,
              "text": "}"
            }
          ],
          "validOrders": [
            [1, 2, 3, 4, 5, 6],
            [1, 2, 3, 6, 5, 4]
          ]
        },
        {
          "id": 3,
          "type": "example",
          "title": "3. Ejemplo Práctico",
          "subtitle": "Observa cómo se implementa...",
          "explanation": "Este ejemplo lee el valor de un pin analógico...",
          "codeSnippet": "int sensorValue = analogRead(A0);\nfloat voltage = sensorValue * (5.0 / 1023.0);",
          "image": "https://tu-sitio.com/ruta-a-tu-imagen.png"
        },
        {
          "id": 4,
          "type": "quiz",
          "title": "4. Pregunta de Opción Múltiple",
          "subtitle": "Evaluación de conceptos",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "¿Qué función de Arduino se ejecuta una sola vez al encender o reiniciar el microcontrolador?",
          "options": [
            {
              "id": "0",
              "text": "loop()"
            },
            {
              "id": "1",
              "text": "setup()"
            },
            {
              "id": "2",
              "text": "initHardware()"
            },
            {
              "id": "3",
              "text": "pinMode()"
            }
          ],
          "correct": "1"
        },
        {
          "id": 5,
          "type": "matching",
          "title": "5. Conecta el Circuito",
          "subtitle": "Asocia componentes con sus funciones",
          "instruction": "Une cada componente electrónico de la izquierda con su función o definición correcta a la derecha.",
          "pairs": [
            {
              "id": 0,
              "term": "Resistencia",
              "definition": "Opone resistencia al flujo de corriente eléctrica."
            },
            {
              "id": 1,
              "term": "LED",
              "definition": "Emite luz cuando pasa corriente a través de él."
            },
            {
              "id": 2,
              "term": "Pulsador",
              "definition": "Permite o interrumpe el paso de la corriente al presionarlo."
            },
            {
              "id": 3,
              "term": "GND",
              "definition": "Representa la tierra o el punto de referencia de 0V."
            }
          ]
        }
      ]
    },
    {
      "id": 1,
      "title": "Lección 1: Conociendo nuestras herramientas",
      "description": "Arduino IDE, Tinkercad y la plataforma: para qué sirve cada una y cómo hacer que funcionen las tres.",
      "tasks": [
        {
          "id": 1,
          "type": "theory",
          "title": "1. Introducción Teórica",
          "subtitle": "Nuestras tres herramientas",
          "instruction": "Lee con atención la siguiente información antes de comenzar con los retos.",
          "content": "Para crear proyectos con Arduino usamos tres herramientas. El Arduino IDE es el programa donde escribimos el código y lo enviamos a la placa. Tinkercad es un simulador donde armamos y probamos circuitos en la computadora sin riesgo de quemar nada. Y esta plataforma es donde practicamos cada lección. Siempre probamos primero en simulación y después armamos el circuito real."
        },
        {
          "id": 2,
          "type": "quiz",
          "title": "2. Pregunta Rápida",
          "subtitle": "Herramientas",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "¿Qué herramienta nos permite probar un circuito en la computadora sin riesgo de dañar componentes?",
          "options": [
            {
              "id": "0",
              "text": "Arduino IDE"
            },
            {
              "id": "1",
              "text": "Tinkercad"
            },
            {
              "id": "2",
              "text": "Cable USB"
            },
            {
              "id": "3",
              "text": "Resistencia"
            }
          ],
          "correct": "1"
        },
        {
          "id": 3,
          "type": "circuit",
          "title": "3. Arma el Circuito",
          "subtitle": "Blink con LED externo",
          "instruction": "Conecta el pin 13 a la resistencia, la resistencia a la pata larga (+) del LED y la pata corta (−) a GND.",
          "parts": [
            {
              "id": "r1",
              "type": "resistor",
              "value": "220 Ω"
            },
            {
              "id": "led1",
              "type": "led",
              "color": "red"
            }
          ],
          "wires": [],
          "branches": [
            [
              "uno.D13",
              "r1",
              "led1"
            ]
          ],
          "hint": "El LED siempre lleva una resistencia en serie, entre el pin y la pata larga (+).",
          "failTip": "Recuerda: cada LED necesita su resistencia."
        },
        {
          "id": 4,
          "type": "example",
          "title": "4. Ejemplo Práctico",
          "subtitle": "El programa Blink",
          "instruction": "Observa cómo se implementa y piensa qué pasaría si cambiaras algún valor.",
          "explanation": "Este programa se llama \"Blink\". Lo escribes en el Arduino IDE, lo pruebas en Tinkercad y lo subes a tu placa con el cable USB (botón Verificar y luego Subir). Aquí el LED parpadea rápido porque cada pausa dura 200 milisegundos. ¡Prueba cambiar el 200 por 1000 y mira la diferencia!",
          "codeSnippet": "void setup() {\n  pinMode(LED_BUILTIN, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(LED_BUILTIN, HIGH);\n  delay(200);\n  digitalWrite(LED_BUILTIN, LOW);\n  delay(200);\n}"
        },
        {
          "id": 5,
          "type": "code_order",
          "title": "5. Ordena el Código",
          "subtitle": "Hacer parpadear el LED integrado",
          "instruction": "Ordena las líneas para que el LED integrado de la placa parpadee: 1 segundo prendido y 1 segundo apagado.",
          "lines": [
            {
              "id": 1,
              "text": "void setup() {"
            },
            {
              "id": 2,
              "text": "  pinMode(LED_BUILTIN, OUTPUT);"
            },
            {
              "id": 3,
              "text": "}"
            },
            {
              "id": 4,
              "text": "void loop() {"
            },
            {
              "id": 5,
              "text": "  digitalWrite(LED_BUILTIN, HIGH);"
            },
            {
              "id": 6,
              "text": "  delay(1000);"
            },
            {
              "id": 7,
              "text": "  digitalWrite(LED_BUILTIN, LOW);"
            },
            {
              "id": 8,
              "text": "  delay(1000);"
            },
            {
              "id": 9,
              "text": "}"
            }
          ],
          "validOrders": [
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 2, 3, 4, 5, 8, 7, 6, 9],
            [1, 2, 9, 4, 5, 6, 7, 8, 3],
            [1, 2, 9, 4, 5, 8, 7, 6, 3],
            [1, 2, 3, 4, 7, 8, 5, 6, 9],
            [1, 2, 3, 4, 7, 6, 5, 8, 9],
            [1, 2, 9, 4, 7, 8, 5, 6, 3],
            [1, 2, 9, 4, 7, 6, 5, 8, 3]
          ]
        },
        {
          "id": 6,
          "type": "matching",
          "title": "6. Conecta el Circuito",
          "subtitle": "Herramientas y componentes",
          "instruction": "Une cada componente o término de la izquierda con su función o definición correcta a la derecha.",
          "pairs": [
            {
              "id": 0,
              "term": "Arduino IDE",
              "definition": "Programa donde escribimos el código y lo subimos a la placa."
            },
            {
              "id": 1,
              "term": "Tinkercad",
              "definition": "Simulador donde armamos y probamos circuitos en la computadora."
            },
            {
              "id": 2,
              "term": "Arduino UNO",
              "definition": "Placa con un microcontrolador que ejecuta nuestro programa."
            },
            {
              "id": 3,
              "term": "Cable USB",
              "definition": "Conecta la placa con la computadora para darle energía y subir el código."
            }
          ]
        },
        {
          "id": 7,
          "type": "quiz",
          "title": "7. Piensa y Responde",
          "subtitle": "delay()",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "¿Qué hace delay(1000) en el programa Blink?",
          "options": [
            {
              "id": "0",
              "text": "Apaga el LED para siempre"
            },
            {
              "id": "1",
              "text": "Repite el programa 1000 veces"
            },
            {
              "id": "2",
              "text": "Espera 1 segundo antes de seguir con la siguiente instrucción"
            },
            {
              "id": "3",
              "text": "Sube el brillo del LED a 1000"
            }
          ],
          "correct": "2"
        },
        {
          "id": 8,
          "type": "code_order",
          "title": "8. Ordena el Código",
          "subtitle": "Blink con una variable",
          "instruction": "Ordena el código para hacer parpadear el LED del pin guardado en la variable led.",
          "lines": [
            {
              "id": 1,
              "text": "int led = 13;"
            },
            {
              "id": 2,
              "text": "void setup() {"
            },
            {
              "id": 3,
              "text": "  pinMode(led, OUTPUT);"
            },
            {
              "id": 4,
              "text": "}"
            },
            {
              "id": 5,
              "text": "void loop() {"
            },
            {
              "id": 6,
              "text": "  digitalWrite(led, HIGH);"
            },
            {
              "id": 7,
              "text": "  delay(500);"
            },
            {
              "id": 8,
              "text": "  digitalWrite(led, LOW);"
            },
            {
              "id": 9,
              "text": "  delay(500);"
            },
            {
              "id": 10,
              "text": "}"
            }
          ],
          "validOrders": [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            [1, 2, 3, 4, 5, 6, 9, 8, 7, 10],
            [1, 2, 3, 10, 5, 6, 7, 8, 9, 4],
            [1, 2, 3, 10, 5, 6, 9, 8, 7, 4],
            [1, 2, 3, 4, 5, 8, 9, 6, 7, 10],
            [1, 2, 3, 4, 5, 8, 7, 6, 9, 10],
            [1, 2, 3, 10, 5, 8, 9, 6, 7, 4],
            [1, 2, 3, 10, 5, 8, 7, 6, 9, 4]
          ]
        },
        {
          "id": 9,
          "type": "quiz",
          "title": "9. Reto Final",
          "subtitle": "Subir el código",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "Para subir un programa a la placa, ¿qué necesitas conectar?",
          "options": [
            {
              "id": "0",
              "text": "El cable USB entre la placa y la computadora"
            },
            {
              "id": "1",
              "text": "Un cable HDMI"
            },
            {
              "id": "2",
              "text": "Una pila de 9 V solamente"
            },
            {
              "id": "3",
              "text": "Nada, se sube por WiFi"
            }
          ],
          "correct": "0"
        }
      ]
    },
    {
      "id": 2,
      "title": "Lección 2: Electricidad básica y nuestro primer LED",
      "description": "Electricidad, voltaje y resistencia: cómo prender un LED de forma segura.",
      "tasks": [
        {
          "id": 1,
          "type": "theory",
          "title": "1. Introducción Teórica",
          "subtitle": "Voltaje, corriente y resistencia",
          "instruction": "Lee con atención la siguiente información antes de comenzar con los retos.",
          "content": "La electricidad es el movimiento de pequeñas cargas por un cable, parecido al agua que corre por una manguera. El voltaje (V) es la fuerza que empuja la corriente, la corriente es lo que fluye y la resistencia es lo que la frena. El LED es muy delicado: si no le ponemos una resistencia en serie, recibe demasiada corriente y se puede quemar."
        },
        {
          "id": 2,
          "type": "quiz",
          "title": "2. Pregunta Rápida",
          "subtitle": "La resistencia del LED",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "¿Para qué sirve la resistencia que ponemos junto al LED?",
          "options": [
            {
              "id": "0",
              "text": "Para que el LED brille con otro color"
            },
            {
              "id": "1",
              "text": "Para guardar energía"
            },
            {
              "id": "2",
              "text": "Para limitar la corriente y evitar que el LED se queme"
            },
            {
              "id": "3",
              "text": "Para que el Arduino trabaje más rápido"
            }
          ],
          "correct": "2"
        },
        {
          "id": 3,
          "type": "circuit",
          "title": "3. Arma el Circuito",
          "subtitle": "Primer LED",
          "instruction": "Conecta el pin 8 a la resistencia, luego a la pata larga (+) del LED, y la pata corta (−) a GND.",
          "parts": [
            {
              "id": "r1",
              "type": "resistor",
              "value": "220 Ω"
            },
            {
              "id": "led1",
              "type": "led",
              "color": "red"
            }
          ],
          "wires": [],
          "branches": [
            [
              "uno.D8",
              "r1",
              "led1"
            ]
          ],
          "hint": "Pin 8 → resistencia → LED (+) y LED (−) → GND.",
          "failTip": "Recuerda: cada LED necesita su resistencia."
        },
        {
          "id": 4,
          "type": "example",
          "title": "4. Ejemplo Práctico",
          "subtitle": "El circuito del LED",
          "instruction": "Observa cómo se implementa y piensa qué pasaría si cambiaras algún valor.",
          "explanation": "Conecta el pin 8 a una resistencia de 220 Ω, luego a la pata larga (+) del LED, y la pata corta (−) a GND. Con HIGH el pin entrega 5 V y la corriente pasa por el circuito: el LED se enciende. Si cambias HIGH por LOW, se apaga.",
          "codeSnippet": "// Circuito: pin 8 -> resistencia de 220 ohms -> LED -> GND\nvoid setup() {\n  pinMode(8, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(8, HIGH);\n}"
        },
        {
          "id": 5,
          "type": "code_order",
          "title": "5. Ordena el Código",
          "subtitle": "Prender un LED en el pin 8",
          "instruction": "Ordena el código para prender un LED conectado al pin 8.",
          "lines": [
            {
              "id": 1,
              "text": "void setup() {"
            },
            {
              "id": 2,
              "text": "  pinMode(8, OUTPUT);"
            },
            {
              "id": 3,
              "text": "}"
            },
            {
              "id": 4,
              "text": "void loop() {"
            },
            {
              "id": 5,
              "text": "  digitalWrite(8, HIGH);"
            },
            {
              "id": 6,
              "text": "}"
            }
          ],
          "validOrders": [
            [1, 2, 3, 4, 5, 6],
            [1, 2, 6, 4, 5, 3],
            [4, 5, 6, 1, 2, 3],
            [4, 5, 3, 1, 2, 6]
          ]
        },
        {
          "id": 6,
          "type": "matching",
          "title": "6. Conecta el Circuito",
          "subtitle": "Conceptos de electricidad",
          "instruction": "Une cada componente o término de la izquierda con su función o definición correcta a la derecha.",
          "pairs": [
            {
              "id": 0,
              "term": "Voltaje",
              "definition": "La fuerza que empuja la corriente por el circuito."
            },
            {
              "id": 1,
              "term": "Corriente",
              "definition": "Las cargas eléctricas que fluyen por el cable."
            },
            {
              "id": 2,
              "term": "Resistencia",
              "definition": "Frena el paso de la corriente."
            },
            {
              "id": 3,
              "term": "LED",
              "definition": "Emite luz cuando pasa corriente por él (solo en un sentido)."
            }
          ]
        },
        {
          "id": 7,
          "type": "quiz",
          "title": "7. Piensa y Responde",
          "subtitle": "LOW",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "Si el pin 8 está en LOW, ¿qué pasa con el LED?",
          "options": [
            {
              "id": "0",
              "text": "Brilla más fuerte"
            },
            {
              "id": "1",
              "text": "Se apaga porque ya no le llega voltaje"
            },
            {
              "id": "2",
              "text": "Se quema"
            },
            {
              "id": "3",
              "text": "Parpadea solo"
            }
          ],
          "correct": "1"
        },
        {
          "id": 8,
          "type": "code_order",
          "title": "8. Ordena el Código",
          "subtitle": "Uno prendido y otro apagado",
          "instruction": "Ordena el código para dejar el LED del pin 8 prendido y el LED del pin 9 apagado.",
          "lines": [
            {
              "id": 1,
              "text": "void setup() {"
            },
            {
              "id": 2,
              "text": "  pinMode(8, OUTPUT);"
            },
            {
              "id": 3,
              "text": "  pinMode(9, OUTPUT);"
            },
            {
              "id": 4,
              "text": "}"
            },
            {
              "id": 5,
              "text": "void loop() {"
            },
            {
              "id": 6,
              "text": "  digitalWrite(8, HIGH);"
            },
            {
              "id": 7,
              "text": "  digitalWrite(9, LOW);"
            },
            {
              "id": 8,
              "text": "}"
            }
          ],
          "validOrders": [
            [1, 2, 3, 4, 5, 6, 7, 8],
            [1, 2, 3, 8, 5, 6, 7, 4],
            [1, 3, 2, 4, 5, 6, 7, 8],
            [1, 3, 2, 8, 5, 6, 7, 4],
            [1, 2, 3, 4, 5, 7, 6, 8],
            [1, 2, 3, 8, 5, 7, 6, 4]
          ]
        },
        {
          "id": 9,
          "type": "circuit",
          "title": "9. Arma el Circuito",
          "subtitle": "Dos LEDs",
          "instruction": "Conecta un LED rojo al pin 8 y un LED amarillo al pin 9. Cada LED lleva su propia resistencia.",
          "parts": [
            {
              "id": "r1",
              "type": "resistor",
              "value": "220 Ω"
            },
            {
              "id": "led1",
              "type": "led",
              "color": "red"
            },
            {
              "id": "r2",
              "type": "resistor",
              "value": "220 Ω"
            },
            {
              "id": "led2",
              "type": "led",
              "color": "yellow"
            }
          ],
          "wires": [],
          "branches": [
            [
              "uno.D8",
              "r1",
              "led1"
            ],
            [
              "uno.D9",
              "r2",
              "led2"
            ]
          ],
          "failTip": "Recuerda: cada LED necesita su resistencia."
        },
        {
          "id": 10,
          "type": "quiz",
          "title": "10. Reto Final",
          "subtitle": "Polaridad del LED",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "¿Cuál pata del LED se conecta hacia el pin del Arduino (a través de la resistencia)?",
          "options": [
            {
              "id": "0",
              "text": "La pata corta (−)"
            },
            {
              "id": "1",
              "text": "Cualquiera: el LED funciona igual"
            },
            {
              "id": "2",
              "text": "Ninguna, va directo a GND"
            },
            {
              "id": "3",
              "text": "La pata larga (+)"
            }
          ],
          "correct": "3"
        }
      ]
    },
    {
      "id": 3,
      "title": "Lección 3: Secuencias con setup() y loop()",
      "description": "Cómo se ejecuta un programa y cómo crear una secuencia de LEDs con delay().",
      "tasks": [
        {
          "id": 1,
          "type": "theory",
          "title": "1. Introducción Teórica",
          "subtitle": "Programas paso a paso",
          "instruction": "Lee con atención la siguiente información antes de comenzar con los retos.",
          "content": "Un programa de Arduino se ejecuta de arriba hacia abajo, una instrucción tras otra. setup() corre una sola vez al inicio para configurar los pines, y loop() se repite sin parar. Si encendemos y apagamos LEDs en cierto orden con un delay() entre cada paso, creamos una secuencia de luces."
        },
        {
          "id": 2,
          "type": "quiz",
          "title": "2. Pregunta Rápida",
          "subtitle": "setup() y loop()",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "¿Cuántas veces se ejecuta el código que está dentro de setup()?",
          "options": [
            {
              "id": "0",
              "text": "Una sola vez, al encender o reiniciar la placa"
            },
            {
              "id": "1",
              "text": "Todo el tiempo, sin parar"
            },
            {
              "id": "2",
              "text": "Una vez por segundo"
            },
            {
              "id": "3",
              "text": "Depende del valor de delay()"
            }
          ],
          "correct": "0"
        },
        {
          "id": 3,
          "type": "circuit",
          "title": "3. Arma el Circuito",
          "subtitle": "Dos LEDs en secuencia",
          "instruction": "Conecta el LED rojo al pin 8 y el LED verde al pin 9, cada uno con su resistencia.",
          "parts": [
            {
              "id": "r1",
              "type": "resistor",
              "value": "220 Ω"
            },
            {
              "id": "led1",
              "type": "led",
              "color": "red"
            },
            {
              "id": "r2",
              "type": "resistor",
              "value": "220 Ω"
            },
            {
              "id": "led2",
              "type": "led",
              "color": "green"
            }
          ],
          "wires": [],
          "branches": [
            [
              "uno.D8",
              "r1",
              "led1"
            ],
            [
              "uno.D9",
              "r2",
              "led2"
            ]
          ],
          "failTip": "Recuerda: cada LED necesita su resistencia."
        },
        {
          "id": 4,
          "type": "example",
          "title": "4. Ejemplo Práctico",
          "subtitle": "Persecución de 3 LEDs",
          "instruction": "Observa cómo se implementa y piensa qué pasaría si cambiaras algún valor.",
          "explanation": "Cada LED se prende 300 milisegundos y luego se apaga para darle el turno al siguiente. Como esto está dentro de loop(), la secuencia se repite siempre. Reto extra: cambia los números dentro de delay() y mira cómo cambia la velocidad.",
          "codeSnippet": "void setup() {\n  pinMode(8, OUTPUT);\n  pinMode(9, OUTPUT);\n  pinMode(10, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(8, HIGH);\n  delay(300);\n  digitalWrite(8, LOW);\n  digitalWrite(9, HIGH);\n  delay(300);\n  digitalWrite(9, LOW);\n  digitalWrite(10, HIGH);\n  delay(300);\n  digitalWrite(10, LOW);\n}"
        },
        {
          "id": 5,
          "type": "code_order",
          "title": "5. Ordena el Código",
          "subtitle": "Secuencia de 2 LEDs",
          "instruction": "Ordena el código para que primero se prenda el LED del pin 8 y luego el del pin 9.",
          "lines": [
            {
              "id": 1,
              "text": "void setup() {"
            },
            {
              "id": 2,
              "text": "  pinMode(8, OUTPUT);"
            },
            {
              "id": 3,
              "text": "  pinMode(9, OUTPUT);"
            },
            {
              "id": 4,
              "text": "}"
            },
            {
              "id": 5,
              "text": "void loop() {"
            },
            {
              "id": 6,
              "text": "  digitalWrite(8, HIGH);"
            },
            {
              "id": 7,
              "text": "  delay(500);"
            },
            {
              "id": 8,
              "text": "  digitalWrite(8, LOW);"
            },
            {
              "id": 9,
              "text": "  digitalWrite(9, HIGH);"
            },
            {
              "id": 10,
              "text": "  delay(500);"
            },
            {
              "id": 11,
              "text": "  digitalWrite(9, LOW);"
            },
            {
              "id": 12,
              "text": "}"
            }
          ],
          "validOrders": [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            [1, 2, 3, 4, 5, 6, 10, 8, 9, 7, 11, 12],
            [1, 2, 3, 12, 5, 6, 7, 8, 9, 10, 11, 4],
            [1, 2, 3, 12, 5, 6, 10, 8, 9, 7, 11, 4],
            [1, 3, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            [1, 3, 2, 4, 5, 6, 10, 8, 9, 7, 11, 12],
            [1, 3, 2, 12, 5, 6, 7, 8, 9, 10, 11, 4],
            [1, 3, 2, 12, 5, 6, 10, 8, 9, 7, 11, 4]
          ]
        },
        {
          "id": 6,
          "type": "matching",
          "title": "6. Conecta el Circuito",
          "subtitle": "Instrucciones básicas",
          "instruction": "Une cada componente o término de la izquierda con su función o definición correcta a la derecha.",
          "pairs": [
            {
              "id": 0,
              "term": "setup()",
              "definition": "Se ejecuta una sola vez al inicio del programa."
            },
            {
              "id": 1,
              "term": "loop()",
              "definition": "Se repite una y otra vez mientras la placa tiene energía."
            },
            {
              "id": 2,
              "term": "delay(500)",
              "definition": "Pausa el programa 500 milisegundos (medio segundo)."
            },
            {
              "id": 3,
              "term": "pinMode()",
              "definition": "Define si un pin será una entrada o una salida."
            }
          ]
        },
        {
          "id": 7,
          "type": "quiz",
          "title": "7. Piensa y Responde",
          "subtitle": "Lee el código",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "¿Qué hace este código?  digitalWrite(8, HIGH); delay(500); digitalWrite(8, LOW);",
          "options": [
            {
              "id": "0",
              "text": "Prende el LED medio segundo y luego lo apaga"
            },
            {
              "id": "1",
              "text": "Lo apaga medio segundo y luego lo prende"
            },
            {
              "id": "2",
              "text": "Lo prende durante 500 segundos"
            },
            {
              "id": "3",
              "text": "Parpadea 500 veces"
            }
          ],
          "correct": "0"
        },
        {
          "id": 8,
          "type": "code_order",
          "title": "8. Ordena el Código",
          "subtitle": "Secuencia de 2 LEDs",
          "instruction": "Ordena el loop para que el LED del pin 8 se prenda y apague, y después le toque al del pin 9.",
          "lines": [
            {
              "id": 1,
              "text": "void loop() {"
            },
            {
              "id": 2,
              "text": "  digitalWrite(8, HIGH);"
            },
            {
              "id": 3,
              "text": "  delay(300);"
            },
            {
              "id": 4,
              "text": "  digitalWrite(8, LOW);"
            },
            {
              "id": 5,
              "text": "  digitalWrite(9, HIGH);"
            },
            {
              "id": 6,
              "text": "  delay(300);"
            },
            {
              "id": 7,
              "text": "  digitalWrite(9, LOW);"
            },
            {
              "id": 8,
              "text": "}"
            }
          ],
          "validOrders": [
            [1, 2, 3, 4, 5, 6, 7, 8],
            [1, 2, 6, 4, 5, 3, 7, 8]
          ]
        },
        {
          "id": 9,
          "type": "circuit",
          "title": "9. Arma el Circuito",
          "subtitle": "Persecución de 3 LEDs",
          "instruction": "Conecta tres LEDs a los pines 8, 9 y 10 (rojo, amarillo y verde), cada uno con su resistencia.",
          "parts": [
            {
              "id": "r1",
              "type": "resistor",
              "value": "220 Ω"
            },
            {
              "id": "led1",
              "type": "led",
              "color": "red"
            },
            {
              "id": "r2",
              "type": "resistor",
              "value": "220 Ω"
            },
            {
              "id": "led2",
              "type": "led",
              "color": "yellow"
            },
            {
              "id": "r3",
              "type": "resistor",
              "value": "220 Ω"
            },
            {
              "id": "led3",
              "type": "led",
              "color": "green"
            }
          ],
          "wires": [],
          "branches": [
            [
              "uno.D8",
              "r1",
              "led1"
            ],
            [
              "uno.D9",
              "r2",
              "led2"
            ],
            [
              "uno.D10",
              "r3",
              "led3"
            ]
          ],
          "failTip": "Recuerda: cada LED necesita su resistencia."
        },
        {
          "id": 10,
          "type": "quiz",
          "title": "10. Reto Final",
          "subtitle": "Velocidad",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "Si quieres que la secuencia vaya más lenta, ¿qué cambio haces?",
          "options": [
            {
              "id": "0",
              "text": "Poner números más chicos dentro de delay()"
            },
            {
              "id": "1",
              "text": "Poner números más grandes dentro de delay()"
            },
            {
              "id": "2",
              "text": "Cambiar HIGH por LOW"
            },
            {
              "id": "3",
              "text": "Borrar la función setup()"
            }
          ],
          "correct": "1"
        }
      ]
    },
    {
      "id": 4,
      "title": "Lección 4: Salidas desde la consola",
      "description": "Usar el Monitor Serie para elegir qué LED se prende escribiendo en la consola.",
      "tasks": [
        {
          "id": 1,
          "type": "theory",
          "title": "1. Introducción Teórica",
          "subtitle": "Hablando con la placa",
          "instruction": "Lee con atención la siguiente información antes de comenzar con los retos.",
          "content": "El Monitor Serie es una ventana por donde la computadora y la placa se mandan mensajes. Con Serial.begin(9600) abrimos la comunicación, Serial.available() pregunta si llegó un mensaje y Serial.read() lo lee. Así, escribiendo un número en la consola, ¡podemos elegir cuál LED se enciende!"
        },
        {
          "id": 2,
          "type": "quiz",
          "title": "2. Pregunta Rápida",
          "subtitle": "Monitor Serie",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "¿Qué instrucción abre la comunicación con el Monitor Serie?",
          "options": [
            {
              "id": "0",
              "text": "Serial.open();"
            },
            {
              "id": "1",
              "text": "Serial.start(LED);"
            },
            {
              "id": "2",
              "text": "pinMode(9600, SERIAL);"
            },
            {
              "id": "3",
              "text": "Serial.begin(9600);"
            }
          ],
          "correct": "3"
        },
        {
          "id": 3,
          "type": "circuit",
          "title": "3. Arma el Circuito",
          "subtitle": "LEDs controlados desde la consola",
          "instruction": "Conecta un LED rojo al pin 8 y un LED verde al pin 9, cada uno con su resistencia.",
          "parts": [
            {
              "id": "r1",
              "type": "resistor",
              "value": "220 Ω"
            },
            {
              "id": "led1",
              "type": "led",
              "color": "red"
            },
            {
              "id": "r2",
              "type": "resistor",
              "value": "220 Ω"
            },
            {
              "id": "led2",
              "type": "led",
              "color": "green"
            }
          ],
          "wires": [],
          "branches": [
            [
              "uno.D8",
              "r1",
              "led1"
            ],
            [
              "uno.D9",
              "r2",
              "led2"
            ]
          ],
          "failTip": "Recuerda: cada LED necesita su resistencia."
        },
        {
          "id": 4,
          "type": "example",
          "title": "4. Ejemplo Práctico",
          "subtitle": "Elegir entre dos LEDs",
          "instruction": "Observa cómo se implementa y piensa qué pasaría si cambiaras algún valor.",
          "explanation": "Escribe 1 o 2 en el Monitor Serie para prender cada LED, y 0 para apagarlos. La placa también te contesta con Serial.println(), así sabes que recibió tu orden. Reto extra: agrega un tercer LED con la opción 3.",
          "codeSnippet": "void setup() {\n  Serial.begin(9600);\n  pinMode(8, OUTPUT);\n  pinMode(9, OUTPUT);\n}\n\nvoid loop() {\n  if (Serial.available() > 0) {\n    char opcion = Serial.read();\n    if (opcion == '1') {\n      digitalWrite(8, HIGH);\n      Serial.println(\"LED 1 prendido\");\n    }\n    if (opcion == '2') {\n      digitalWrite(9, HIGH);\n      Serial.println(\"LED 2 prendido\");\n    }\n    if (opcion == '0') {\n      digitalWrite(8, LOW);\n      digitalWrite(9, LOW);\n      Serial.println(\"Todo apagado\");\n    }\n  }\n}"
        },
        {
          "id": 5,
          "type": "code_order",
          "title": "5. Ordena el Código",
          "subtitle": "Prender un LED desde la consola",
          "instruction": "Ordena el código para que el LED del pin 8 se prenda cuando escribas el número 1 en el Monitor Serie.",
          "lines": [
            {
              "id": 1,
              "text": "void setup() {"
            },
            {
              "id": 2,
              "text": "  Serial.begin(9600);"
            },
            {
              "id": 3,
              "text": "  pinMode(8, OUTPUT);"
            },
            {
              "id": 4,
              "text": "}"
            },
            {
              "id": 5,
              "text": "void loop() {"
            },
            {
              "id": 6,
              "text": "  if (Serial.available() > 0) {"
            },
            {
              "id": 7,
              "text": "    char letra = Serial.read();"
            },
            {
              "id": 8,
              "text": "    if (letra == '1') {"
            },
            {
              "id": 9,
              "text": "      digitalWrite(8, HIGH);"
            },
            {
              "id": 10,
              "text": "    }"
            },
            {
              "id": 11,
              "text": "  }"
            },
            {
              "id": 12,
              "text": "}"
            }
          ],
          "validOrders": [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 10, 12],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 10],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 10, 11],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 11, 10],
            [1, 2, 3, 10, 5, 6, 7, 8, 9, 4, 11, 12],
            [1, 2, 3, 10, 5, 6, 7, 8, 9, 4, 12, 11],
            [1, 2, 3, 10, 5, 6, 7, 8, 9, 11, 4, 12],
            [1, 2, 3, 10, 5, 6, 7, 8, 9, 11, 12, 4],
            [1, 2, 3, 10, 5, 6, 7, 8, 9, 12, 4, 11],
            [1, 2, 3, 10, 5, 6, 7, 8, 9, 12, 11, 4],
            [1, 2, 3, 11, 5, 6, 7, 8, 9, 4, 10, 12],
            [1, 2, 3, 11, 5, 6, 7, 8, 9, 4, 12, 10],
            [1, 2, 3, 11, 5, 6, 7, 8, 9, 10, 4, 12],
            [1, 2, 3, 11, 5, 6, 7, 8, 9, 10, 12, 4],
            [1, 2, 3, 11, 5, 6, 7, 8, 9, 12, 4, 10],
            [1, 2, 3, 11, 5, 6, 7, 8, 9, 12, 10, 4],
            [1, 2, 3, 12, 5, 6, 7, 8, 9, 4, 10, 11],
            [1, 2, 3, 12, 5, 6, 7, 8, 9, 4, 11, 10],
            [1, 2, 3, 12, 5, 6, 7, 8, 9, 10, 4, 11],
            [1, 2, 3, 12, 5, 6, 7, 8, 9, 10, 11, 4],
            [1, 2, 3, 12, 5, 6, 7, 8, 9, 11, 4, 10],
            [1, 2, 3, 12, 5, 6, 7, 8, 9, 11, 10, 4],
            [1, 3, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            [1, 3, 2, 4, 5, 6, 7, 8, 9, 10, 12, 11],
            [1, 3, 2, 4, 5, 6, 7, 8, 9, 11, 10, 12],
            [1, 3, 2, 4, 5, 6, 7, 8, 9, 11, 12, 10],
            [1, 3, 2, 4, 5, 6, 7, 8, 9, 12, 10, 11],
            [1, 3, 2, 4, 5, 6, 7, 8, 9, 12, 11, 10],
            [1, 3, 2, 10, 5, 6, 7, 8, 9, 4, 11, 12],
            [1, 3, 2, 10, 5, 6, 7, 8, 9, 4, 12, 11],
            [1, 3, 2, 10, 5, 6, 7, 8, 9, 11, 4, 12],
            [1, 3, 2, 10, 5, 6, 7, 8, 9, 11, 12, 4],
            [1, 3, 2, 10, 5, 6, 7, 8, 9, 12, 4, 11],
            [1, 3, 2, 10, 5, 6, 7, 8, 9, 12, 11, 4],
            [1, 3, 2, 11, 5, 6, 7, 8, 9, 4, 10, 12],
            [1, 3, 2, 11, 5, 6, 7, 8, 9, 4, 12, 10],
            [1, 3, 2, 11, 5, 6, 7, 8, 9, 10, 4, 12],
            [1, 3, 2, 11, 5, 6, 7, 8, 9, 10, 12, 4],
            [1, 3, 2, 11, 5, 6, 7, 8, 9, 12, 4, 10],
            [1, 3, 2, 11, 5, 6, 7, 8, 9, 12, 10, 4],
            [1, 3, 2, 12, 5, 6, 7, 8, 9, 4, 10, 11],
            [1, 3, 2, 12, 5, 6, 7, 8, 9, 4, 11, 10],
            [1, 3, 2, 12, 5, 6, 7, 8, 9, 10, 4, 11],
            [1, 3, 2, 12, 5, 6, 7, 8, 9, 10, 11, 4],
            [1, 3, 2, 12, 5, 6, 7, 8, 9, 11, 4, 10],
            [1, 3, 2, 12, 5, 6, 7, 8, 9, 11, 10, 4]
          ]
        },
        {
          "id": 6,
          "type": "matching",
          "title": "6. Conecta el Circuito",
          "subtitle": "Instrucciones de la consola",
          "instruction": "Une cada componente o término de la izquierda con su función o definición correcta a la derecha.",
          "pairs": [
            {
              "id": 0,
              "term": "Serial.begin(9600)",
              "definition": "Abre la comunicación con el Monitor Serie."
            },
            {
              "id": 1,
              "term": "Serial.available()",
              "definition": "Avisa si llegó un mensaje desde la consola."
            },
            {
              "id": 2,
              "term": "Serial.read()",
              "definition": "Lee el carácter que escribimos en la consola."
            },
            {
              "id": 3,
              "term": "Serial.println()",
              "definition": "Escribe un mensaje en la consola."
            }
          ]
        },
        {
          "id": 7,
          "type": "quiz",
          "title": "7. Piensa y Responde",
          "subtitle": "Opciones de la consola",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "Con el programa de ejemplo, si escribes 2 en el Monitor Serie, ¿qué LED se prende?",
          "options": [
            {
              "id": "0",
              "text": "El del pin 8"
            },
            {
              "id": "1",
              "text": "Los dos LEDs"
            },
            {
              "id": "2",
              "text": "El del pin 9"
            },
            {
              "id": "3",
              "text": "Ninguno"
            }
          ],
          "correct": "2"
        },
        {
          "id": 8,
          "type": "code_order",
          "title": "8. Ordena el Código",
          "subtitle": "Mensajes en la consola",
          "instruction": "Ordena el código para que la placa escriba \"Hola, Arduino\" en el Monitor Serie cada segundo.",
          "lines": [
            {
              "id": 1,
              "text": "void setup() {"
            },
            {
              "id": 2,
              "text": "  Serial.begin(9600);"
            },
            {
              "id": 3,
              "text": "}"
            },
            {
              "id": 4,
              "text": "void loop() {"
            },
            {
              "id": 5,
              "text": "  Serial.println(\"Hola, Arduino\");"
            },
            {
              "id": 6,
              "text": "  delay(1000);"
            },
            {
              "id": 7,
              "text": "}"
            }
          ],
          "validOrders": [
            [1, 2, 3, 4, 5, 6, 7],
            [1, 2, 7, 4, 5, 6, 3],
            [4, 5, 6, 7, 1, 2, 3],
            [4, 5, 6, 3, 1, 2, 7]
          ]
        },
        {
          "id": 9,
          "type": "quiz",
          "title": "9. Reto Final",
          "subtitle": "Velocidad de comunicación",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "¿Qué velocidad (baudios) usamos en Serial.begin() en nuestros programas?",
          "options": [
            {
              "id": "0",
              "text": "9600"
            },
            {
              "id": "1",
              "text": "100"
            },
            {
              "id": "2",
              "text": "5000"
            },
            {
              "id": "3",
              "text": "255"
            }
          ],
          "correct": "0"
        }
      ]
    },
    {
      "id": 5,
      "title": "Lección 5: Variables y constantes, ponle nombre a tus pines",
      "description": "Usar variables y constantes para que el código sea más claro. Actividad: un semáforo de LEDs.",
      "tasks": [
        {
          "id": 1,
          "type": "theory",
          "title": "1. Introducción Teórica",
          "subtitle": "Dándole nombre a los datos",
          "instruction": "Lee con atención la siguiente información antes de comenzar con los retos.",
          "content": "En vez de escribir el número del pin muchas veces, le damos un nombre con una variable. Por ejemplo, const int rojo = 8; guarda el número 8 y desde ahí lo usamos como \"rojo\". Si movemos el LED a otro pin, solo corregimos una línea. Las constantes (const) nunca cambian; las variables normales pueden cambiar mientras el programa corre."
        },
        {
          "id": 2,
          "type": "quiz",
          "title": "2. Pregunta Rápida",
          "subtitle": "const",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "¿Qué hace la línea const int ledRojo = 8; ?",
          "options": [
            {
              "id": "0",
              "text": "Prende el LED del pin 8"
            },
            {
              "id": "1",
              "text": "Repite el programa 8 veces"
            },
            {
              "id": "2",
              "text": "Crea un nombre (ledRojo) para el número 8, que no va a cambiar"
            },
            {
              "id": "3",
              "text": "Borra el pin 8"
            }
          ],
          "correct": "2"
        },
        {
          "id": 3,
          "type": "circuit",
          "title": "3. Arma el Circuito",
          "subtitle": "LED con nombre",
          "instruction": "Conecta el LED rojo al pin 8 con su resistencia (en el código lo llamamos rojo).",
          "parts": [
            {
              "id": "r1",
              "type": "resistor",
              "value": "220 Ω"
            },
            {
              "id": "led1",
              "type": "led",
              "color": "red"
            }
          ],
          "wires": [],
          "branches": [
            [
              "uno.D8",
              "r1",
              "led1"
            ]
          ],
          "failTip": "Recuerda: cada LED necesita su resistencia."
        },
        {
          "id": 4,
          "type": "example",
          "title": "4. Ejemplo Práctico",
          "subtitle": "Semáforo de LEDs",
          "instruction": "Observa cómo se implementa y piensa qué pasaría si cambiaras algún valor.",
          "explanation": "Un semáforo con tres LEDs: rojo, verde y amarillo. Gracias a los nombres, el código se lee casi como una frase: \"prende rojo, espera, apaga rojo...\". Reto extra: cambia los tiempos de cada luz para hacer un semáforo de peatones.",
          "codeSnippet": "const int rojo = 8;\nconst int amarillo = 9;\nconst int verde = 10;\n\nvoid setup() {\n  pinMode(rojo, OUTPUT);\n  pinMode(amarillo, OUTPUT);\n  pinMode(verde, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(rojo, HIGH);\n  delay(3000);\n  digitalWrite(rojo, LOW);\n  digitalWrite(verde, HIGH);\n  delay(3000);\n  digitalWrite(verde, LOW);\n  digitalWrite(amarillo, HIGH);\n  delay(1000);\n  digitalWrite(amarillo, LOW);\n}"
        },
        {
          "id": 5,
          "type": "code_order",
          "title": "5. Ordena el Código",
          "subtitle": "Un pin con nombre",
          "instruction": "Ordena el código para hacer parpadear un LED usando una constante llamada rojo.",
          "lines": [
            {
              "id": 1,
              "text": "const int rojo = 8;"
            },
            {
              "id": 2,
              "text": "void setup() {"
            },
            {
              "id": 3,
              "text": "  pinMode(rojo, OUTPUT);"
            },
            {
              "id": 4,
              "text": "}"
            },
            {
              "id": 5,
              "text": "void loop() {"
            },
            {
              "id": 6,
              "text": "  digitalWrite(rojo, HIGH);"
            },
            {
              "id": 7,
              "text": "  delay(2000);"
            },
            {
              "id": 8,
              "text": "  digitalWrite(rojo, LOW);"
            },
            {
              "id": 9,
              "text": "  delay(2000);"
            },
            {
              "id": 10,
              "text": "}"
            }
          ],
          "validOrders": [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            [1, 2, 3, 4, 5, 6, 9, 8, 7, 10],
            [1, 2, 3, 10, 5, 6, 7, 8, 9, 4],
            [1, 2, 3, 10, 5, 6, 9, 8, 7, 4],
            [1, 5, 6, 7, 8, 9, 10, 2, 3, 4],
            [1, 5, 6, 7, 8, 9, 4, 2, 3, 10],
            [1, 5, 6, 9, 8, 7, 10, 2, 3, 4],
            [1, 5, 6, 9, 8, 7, 4, 2, 3, 10],
            [1, 2, 3, 4, 5, 8, 9, 6, 7, 10],
            [1, 2, 3, 4, 5, 8, 7, 6, 9, 10],
            [1, 2, 3, 10, 5, 8, 9, 6, 7, 4],
            [1, 2, 3, 10, 5, 8, 7, 6, 9, 4]
          ]
        },
        {
          "id": 6,
          "type": "matching",
          "title": "6. Conecta el Circuito",
          "subtitle": "Variables",
          "instruction": "Une cada componente o término de la izquierda con su función o definición correcta a la derecha.",
          "pairs": [
            {
              "id": 0,
              "term": "int",
              "definition": "Tipo de dato que guarda números enteros."
            },
            {
              "id": 1,
              "term": "const",
              "definition": "Indica que el valor nunca va a cambiar."
            },
            {
              "id": 2,
              "term": "Variable",
              "definition": "Espacio con nombre donde guardamos un dato."
            },
            {
              "id": 3,
              "term": "=",
              "definition": "Guarda el valor de la derecha en la variable de la izquierda."
            }
          ]
        },
        {
          "id": 7,
          "type": "quiz",
          "title": "7. Piensa y Responde",
          "subtitle": "Variables",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "Con const int amarillo = 9; ¿qué valor guarda la variable amarillo?",
          "options": [
            {
              "id": "0",
              "text": "La palabra \"amarillo\""
            },
            {
              "id": "1",
              "text": "Un color"
            },
            {
              "id": "2",
              "text": "0"
            },
            {
              "id": "3",
              "text": "9, el número del pin"
            }
          ],
          "correct": "3"
        },
        {
          "id": 8,
          "type": "code_order",
          "title": "8. Ordena el Código",
          "subtitle": "Rojo y verde",
          "instruction": "Ordena el loop del semáforo: primero rojo encendido, después verde.",
          "lines": [
            {
              "id": 1,
              "text": "void loop() {"
            },
            {
              "id": 2,
              "text": "  digitalWrite(rojo, HIGH);"
            },
            {
              "id": 3,
              "text": "  delay(3000);"
            },
            {
              "id": 4,
              "text": "  digitalWrite(rojo, LOW);"
            },
            {
              "id": 5,
              "text": "  digitalWrite(verde, HIGH);"
            },
            {
              "id": 6,
              "text": "  delay(3000);"
            },
            {
              "id": 7,
              "text": "  digitalWrite(verde, LOW);"
            },
            {
              "id": 8,
              "text": "}"
            }
          ],
          "validOrders": [
            [1, 2, 3, 4, 5, 6, 7, 8],
            [1, 2, 6, 4, 5, 3, 7, 8]
          ]
        },
        {
          "id": 9,
          "type": "circuit",
          "title": "9. Arma el Circuito",
          "subtitle": "Semáforo",
          "instruction": "Arma el semáforo: LED rojo en el pin 8, amarillo en el pin 9 y verde en el pin 10, cada uno con su resistencia.",
          "parts": [
            {
              "id": "r1",
              "type": "resistor",
              "value": "220 Ω"
            },
            {
              "id": "led1",
              "type": "led",
              "color": "red"
            },
            {
              "id": "r2",
              "type": "resistor",
              "value": "220 Ω"
            },
            {
              "id": "led2",
              "type": "led",
              "color": "yellow"
            },
            {
              "id": "r3",
              "type": "resistor",
              "value": "220 Ω"
            },
            {
              "id": "led3",
              "type": "led",
              "color": "green"
            }
          ],
          "wires": [],
          "branches": [
            [
              "uno.D8",
              "r1",
              "led1"
            ],
            [
              "uno.D9",
              "r2",
              "led2"
            ],
            [
              "uno.D10",
              "r3",
              "led3"
            ]
          ],
          "failTip": "Recuerda: cada LED necesita su resistencia."
        },
        {
          "id": 10,
          "type": "quiz",
          "title": "10. Reto Final",
          "subtitle": "Ventaja de los nombres",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "¿Qué ventaja tiene usar const int rojo = 8; en lugar de escribir 8 en todo el código?",
          "options": [
            {
              "id": "0",
              "text": "Si cambio el LED de pin, solo corrijo una línea"
            },
            {
              "id": "1",
              "text": "El programa corre mucho más rápido"
            },
            {
              "id": "2",
              "text": "El LED brilla más fuerte"
            },
            {
              "id": "3",
              "text": "La placa ya no necesita setup()"
            }
          ],
          "correct": "0"
        }
      ]
    },
    {
      "id": 6,
      "title": "Lección 6: Ciclos for, repetir sin copiar",
      "description": "Repetir instrucciones con un ciclo for. Actividad: efecto de luces tipo Auto Fantástico.",
      "tasks": [
        {
          "id": 1,
          "type": "theory",
          "title": "1. Introducción Teórica",
          "subtitle": "Repetir de forma inteligente",
          "instruction": "Lee con atención la siguiente información antes de comenzar con los retos.",
          "content": "Cuando queremos repetir algo muchas veces no copiamos y pegamos el código: usamos un ciclo for. Tiene tres partes: dónde empieza el contador, hasta cuándo sigue y cómo cambia en cada vuelta. Por ejemplo, for (int pin = 8; pin <= 12; pin++) repite el código con pin igual a 8, 9, 10, 11 y 12."
        },
        {
          "id": 2,
          "type": "quiz",
          "title": "2. Pregunta Rápida",
          "subtitle": "Ciclo for",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "En for (int i = 0; i < 5; i++), ¿cuántas veces se repite el código del ciclo?",
          "options": [
            {
              "id": "0",
              "text": "4 veces"
            },
            {
              "id": "1",
              "text": "6 veces"
            },
            {
              "id": "2",
              "text": "5 veces (i vale 0, 1, 2, 3 y 4)"
            },
            {
              "id": "3",
              "text": "Infinitas veces"
            }
          ],
          "correct": "2"
        },
        {
          "id": 3,
          "type": "circuit",
          "title": "3. Arma el Circuito",
          "subtitle": "Tres LEDs en fila",
          "instruction": "Conecta tres LEDs a los pines 8, 9 y 10, cada uno con su resistencia.",
          "parts": [
            {
              "id": "r1",
              "type": "resistor",
              "value": "220 Ω"
            },
            {
              "id": "led1",
              "type": "led",
              "color": "red"
            },
            {
              "id": "r2",
              "type": "resistor",
              "value": "220 Ω"
            },
            {
              "id": "led2",
              "type": "led",
              "color": "yellow"
            },
            {
              "id": "r3",
              "type": "resistor",
              "value": "220 Ω"
            },
            {
              "id": "led3",
              "type": "led",
              "color": "green"
            }
          ],
          "wires": [],
          "branches": [
            [
              "uno.D8",
              "r1",
              "led1"
            ],
            [
              "uno.D9",
              "r2",
              "led2"
            ],
            [
              "uno.D10",
              "r3",
              "led3"
            ]
          ],
          "failTip": "Recuerda: cada LED necesita su resistencia."
        },
        {
          "id": 4,
          "type": "example",
          "title": "4. Ejemplo Práctico",
          "subtitle": "Efecto de ida y vuelta",
          "instruction": "Observa cómo se implementa y piensa qué pasaría si cambiaras algún valor.",
          "explanation": "El primer for sube de 8 a 12 con pin++, y el segundo baja de 11 a 9 con pin--. Juntos hacen que la luz vaya y regrese como el coche de la serie \"El Auto Fantástico\". Con solo 2 ciclos reemplazamos más de 20 líneas de código.",
          "codeSnippet": "void setup() {\n  for (int pin = 8; pin <= 12; pin++) {\n    pinMode(pin, OUTPUT);\n  }\n}\n\nvoid loop() {\n  // de izquierda a derecha\n  for (int pin = 8; pin <= 12; pin++) {\n    digitalWrite(pin, HIGH);\n    delay(100);\n    digitalWrite(pin, LOW);\n  }\n  // de derecha a izquierda\n  for (int pin = 11; pin >= 9; pin--) {\n    digitalWrite(pin, HIGH);\n    delay(100);\n    digitalWrite(pin, LOW);\n  }\n}"
        },
        {
          "id": 5,
          "type": "code_order",
          "title": "5. Ordena el Código",
          "subtitle": "Recorrer 5 LEDs",
          "instruction": "Ordena el código para prender uno por uno los LEDs conectados de los pines 8 al 12.",
          "lines": [
            {
              "id": 1,
              "text": "void setup() {"
            },
            {
              "id": 2,
              "text": "  for (int pin = 8; pin <= 12; pin++) {"
            },
            {
              "id": 3,
              "text": "    pinMode(pin, OUTPUT);"
            },
            {
              "id": 4,
              "text": "  }"
            },
            {
              "id": 5,
              "text": "}"
            },
            {
              "id": 6,
              "text": "void loop() {"
            },
            {
              "id": 7,
              "text": "  for (int pin = 8; pin <= 12; pin++) {"
            },
            {
              "id": 8,
              "text": "    digitalWrite(pin, HIGH);"
            },
            {
              "id": 9,
              "text": "    delay(150);"
            },
            {
              "id": 10,
              "text": "    digitalWrite(pin, LOW);"
            },
            {
              "id": 11,
              "text": "  }"
            },
            {
              "id": 12,
              "text": "}"
            }
          ],
          "validOrders": [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11],
            [1, 2, 3, 4, 11, 6, 7, 8, 9, 10, 5, 12],
            [1, 2, 3, 4, 11, 6, 7, 8, 9, 10, 12, 5],
            [1, 2, 3, 4, 12, 6, 7, 8, 9, 10, 5, 11],
            [1, 2, 3, 4, 12, 6, 7, 8, 9, 10, 11, 5],
            [1, 2, 3, 5, 4, 6, 7, 8, 9, 10, 11, 12],
            [1, 2, 3, 5, 4, 6, 7, 8, 9, 10, 12, 11],
            [1, 2, 3, 5, 11, 6, 7, 8, 9, 10, 4, 12],
            [1, 2, 3, 5, 11, 6, 7, 8, 9, 10, 12, 4],
            [1, 2, 3, 5, 12, 6, 7, 8, 9, 10, 4, 11],
            [1, 2, 3, 5, 12, 6, 7, 8, 9, 10, 11, 4],
            [1, 2, 3, 11, 4, 6, 7, 8, 9, 10, 5, 12],
            [1, 2, 3, 11, 4, 6, 7, 8, 9, 10, 12, 5],
            [1, 2, 3, 11, 5, 6, 7, 8, 9, 10, 4, 12],
            [1, 2, 3, 11, 5, 6, 7, 8, 9, 10, 12, 4],
            [1, 2, 3, 11, 12, 6, 7, 8, 9, 10, 4, 5],
            [1, 2, 3, 11, 12, 6, 7, 8, 9, 10, 5, 4],
            [1, 2, 3, 12, 4, 6, 7, 8, 9, 10, 5, 11],
            [1, 2, 3, 12, 4, 6, 7, 8, 9, 10, 11, 5],
            [1, 2, 3, 12, 5, 6, 7, 8, 9, 10, 4, 11],
            [1, 2, 3, 12, 5, 6, 7, 8, 9, 10, 11, 4],
            [1, 2, 3, 12, 11, 6, 7, 8, 9, 10, 4, 5],
            [1, 2, 3, 12, 11, 6, 7, 8, 9, 10, 5, 4],
            [1, 7, 3, 4, 5, 6, 2, 8, 9, 10, 11, 12],
            [1, 7, 3, 4, 5, 6, 2, 8, 9, 10, 12, 11],
            [1, 7, 3, 4, 11, 6, 2, 8, 9, 10, 5, 12],
            [1, 7, 3, 4, 11, 6, 2, 8, 9, 10, 12, 5],
            [1, 7, 3, 4, 12, 6, 2, 8, 9, 10, 5, 11],
            [1, 7, 3, 4, 12, 6, 2, 8, 9, 10, 11, 5],
            [1, 7, 3, 5, 4, 6, 2, 8, 9, 10, 11, 12],
            [1, 7, 3, 5, 4, 6, 2, 8, 9, 10, 12, 11],
            [1, 7, 3, 5, 11, 6, 2, 8, 9, 10, 4, 12],
            [1, 7, 3, 5, 11, 6, 2, 8, 9, 10, 12, 4],
            [1, 7, 3, 5, 12, 6, 2, 8, 9, 10, 4, 11],
            [1, 7, 3, 5, 12, 6, 2, 8, 9, 10, 11, 4],
            [1, 7, 3, 11, 4, 6, 2, 8, 9, 10, 5, 12],
            [1, 7, 3, 11, 4, 6, 2, 8, 9, 10, 12, 5],
            [1, 7, 3, 11, 5, 6, 2, 8, 9, 10, 4, 12],
            [1, 7, 3, 11, 5, 6, 2, 8, 9, 10, 12, 4],
            [1, 7, 3, 11, 12, 6, 2, 8, 9, 10, 4, 5],
            [1, 7, 3, 11, 12, 6, 2, 8, 9, 10, 5, 4],
            [1, 7, 3, 12, 4, 6, 2, 8, 9, 10, 5, 11],
            [1, 7, 3, 12, 4, 6, 2, 8, 9, 10, 11, 5],
            [1, 7, 3, 12, 5, 6, 2, 8, 9, 10, 4, 11],
            [1, 7, 3, 12, 5, 6, 2, 8, 9, 10, 11, 4],
            [1, 7, 3, 12, 11, 6, 2, 8, 9, 10, 4, 5],
            [1, 7, 3, 12, 11, 6, 2, 8, 9, 10, 5, 4]
          ]
        },
        {
          "id": 6,
          "type": "matching",
          "title": "6. Conecta el Circuito",
          "subtitle": "Partes del ciclo for",
          "instruction": "Une cada componente o término de la izquierda con su función o definición correcta a la derecha.",
          "pairs": [
            {
              "id": 0,
              "term": "for",
              "definition": "Repite un bloque de código varias veces."
            },
            {
              "id": 1,
              "term": "int i = 0",
              "definition": "Crea el contador y lo inicia en 0."
            },
            {
              "id": 2,
              "term": "i < 5",
              "definition": "Condición: el ciclo sigue mientras sea verdadera."
            },
            {
              "id": 3,
              "term": "i++",
              "definition": "Suma 1 al contador en cada vuelta."
            }
          ]
        },
        {
          "id": 7,
          "type": "quiz",
          "title": "7. Piensa y Responde",
          "subtitle": "Último valor del ciclo",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "En for (int pin = 8; pin <= 12; pin++), ¿cuál es el último valor que toma pin?",
          "options": [
            {
              "id": "0",
              "text": "11"
            },
            {
              "id": "1",
              "text": "12"
            },
            {
              "id": "2",
              "text": "13"
            },
            {
              "id": "3",
              "text": "8"
            }
          ],
          "correct": "1"
        },
        {
          "id": 8,
          "type": "code_order",
          "title": "8. Ordena el Código",
          "subtitle": "Prender y apagar con for",
          "instruction": "Ordena el loop que prende los LEDs de los pines 8 al 10 y luego los apaga.",
          "lines": [
            {
              "id": 1,
              "text": "void loop() {"
            },
            {
              "id": 2,
              "text": "  for (int pin = 8; pin <= 10; pin++) {"
            },
            {
              "id": 3,
              "text": "    digitalWrite(pin, HIGH);"
            },
            {
              "id": 4,
              "text": "    delay(200);"
            },
            {
              "id": 5,
              "text": "  }"
            },
            {
              "id": 6,
              "text": "  for (int pin = 8; pin <= 10; pin++) {"
            },
            {
              "id": 7,
              "text": "    digitalWrite(pin, LOW);"
            },
            {
              "id": 8,
              "text": "  }"
            },
            {
              "id": 9,
              "text": "}"
            }
          ],
          "validOrders": [
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 2, 3, 4, 5, 6, 7, 9, 8],
            [1, 2, 3, 4, 8, 6, 7, 5, 9],
            [1, 2, 3, 4, 8, 6, 7, 9, 5],
            [1, 2, 3, 4, 9, 6, 7, 5, 8],
            [1, 2, 3, 4, 9, 6, 7, 8, 5],
            [1, 6, 3, 4, 5, 2, 7, 8, 9],
            [1, 6, 3, 4, 5, 2, 7, 9, 8],
            [1, 6, 3, 4, 8, 2, 7, 5, 9],
            [1, 6, 3, 4, 8, 2, 7, 9, 5],
            [1, 6, 3, 4, 9, 2, 7, 5, 8],
            [1, 6, 3, 4, 9, 2, 7, 8, 5]
          ]
        },
        {
          "id": 9,
          "type": "circuit",
          "title": "9. Arma el Circuito",
          "subtitle": "Auto Fantástico: 5 LEDs",
          "instruction": "Conecta cinco LEDs a los pines 8 al 12, cada uno con su propia resistencia.",
          "parts": [
            {
              "id": "r1",
              "type": "resistor",
              "value": "220 Ω"
            },
            {
              "id": "led1",
              "type": "led",
              "color": "red"
            },
            {
              "id": "r2",
              "type": "resistor",
              "value": "220 Ω"
            },
            {
              "id": "led2",
              "type": "led",
              "color": "red"
            },
            {
              "id": "r3",
              "type": "resistor",
              "value": "220 Ω"
            },
            {
              "id": "led3",
              "type": "led",
              "color": "red"
            },
            {
              "id": "r4",
              "type": "resistor",
              "value": "220 Ω"
            },
            {
              "id": "led4",
              "type": "led",
              "color": "red"
            },
            {
              "id": "r5",
              "type": "resistor",
              "value": "220 Ω"
            },
            {
              "id": "led5",
              "type": "led",
              "color": "red"
            }
          ],
          "wires": [],
          "branches": [
            [
              "uno.D8",
              "r1",
              "led1"
            ],
            [
              "uno.D9",
              "r2",
              "led2"
            ],
            [
              "uno.D10",
              "r3",
              "led3"
            ],
            [
              "uno.D11",
              "r4",
              "led4"
            ],
            [
              "uno.D12",
              "r5",
              "led5"
            ]
          ],
          "failTip": "Recuerda: cada LED necesita su resistencia."
        },
        {
          "id": 10,
          "type": "quiz",
          "title": "10. Reto Final",
          "subtitle": "Efecto de regreso",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "¿Qué usas para que la luz vaya de derecha a izquierda?",
          "options": [
            {
              "id": "0",
              "text": "Un for con pin++ empezando en 8"
            },
            {
              "id": "1",
              "text": "Cambiar HIGH por LOW"
            },
            {
              "id": "2",
              "text": "Un for con pin-- empezando en el pin más grande"
            },
            {
              "id": "3",
              "text": "Quitar el delay()"
            }
          ],
          "correct": "2"
        }
      ]
    },
    {
      "id": 7,
      "title": "Lección 7: Display de 7 segmentos",
      "description": "Cómo dibujar números con un display de 7 segmentos. Actividad: imprimir los números del 0 al 9.",
      "tasks": [
        {
          "id": 1,
          "type": "theory",
          "title": "1. Introducción Teórica",
          "subtitle": "Dibujando números con luz",
          "instruction": "Lee con atención la siguiente información antes de comenzar con los retos.",
          "content": "Un display de 7 segmentos tiene 7 LEDs con forma de rayita, llamados a, b, c, d, e, f y g. Al encender solo algunos dibujamos los números. Usaremos un display de cátodo común, o sea que su pin común va a GND, y cada segmento lleva su resistencia y su propio pin del Arduino (a = pin 2, b = pin 3 ... g = pin 8). Por ejemplo, para mostrar un 1 solo se encienden b y c."
        },
        {
          "id": 2,
          "type": "quiz",
          "title": "2. Pregunta Rápida",
          "subtitle": "Segmentos",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "Para mostrar el número 1 en el display, ¿qué segmentos se encienden?",
          "options": [
            {
              "id": "0",
              "text": "b y c"
            },
            {
              "id": "1",
              "text": "a y d"
            },
            {
              "id": "2",
              "text": "e y f"
            },
            {
              "id": "3",
              "text": "Solo g"
            }
          ],
          "correct": "0"
        },
        {
          "id": 3,
          "type": "circuit",
          "title": "3. Arma el Circuito",
          "subtitle": "Mostrar un 1",
          "instruction": "Conecta el segmento b al pin 3, el segmento c al pin 4 y el pin COM a GND pasando por una resistencia.",
          "parts": [
            {
              "id": "d1",
              "type": "display",
              "show": [
                "b",
                "c"
              ]
            },
            {
              "id": "r1",
              "type": "resistor",
              "value": "220 Ω"
            }
          ],
          "wires": [
            [
              "uno.D3",
              "d1.b"
            ],
            [
              "uno.D4",
              "d1.c"
            ],
            [
              "d1.com",
              "r1.a"
            ],
            [
              "r1.b",
              "uno.GND"
            ]
          ],
          "branches": [],
          "hint": "Solo hacen falta 2 segmentos. La resistencia va entre COM y GND.",
          "failTip": "Sin la resistencia en COM los segmentos se queman."
        },
        {
          "id": 4,
          "type": "example",
          "title": "4. Ejemplo Práctico",
          "subtitle": "Contar del 0 al 9",
          "instruction": "Observa cómo se implementa y piensa qué pasaría si cambiaras algún valor.",
          "explanation": "Cada fila de la tabla dice qué segmentos (a, b, c, d, e, f, g) se prenden con un 1 y cuáles se apagan con un 0. La función mostrar(n) lee la fila del número n y prende los segmentos correctos. El ciclo de loop() va del 0 al 9 mostrando cada número un segundo.",
          "codeSnippet": "byte numeros[10][7] = {\n  {1,1,1,1,1,1,0}, // 0\n  {0,1,1,0,0,0,0}, // 1\n  {1,1,0,1,1,0,1}, // 2\n  {1,1,1,1,0,0,1}, // 3\n  {0,1,1,0,0,1,1}, // 4\n  {1,0,1,1,0,1,1}, // 5\n  {1,0,1,1,1,1,1}, // 6\n  {1,1,1,0,0,0,0}, // 7\n  {1,1,1,1,1,1,1}, // 8\n  {1,1,1,1,0,1,1}  // 9\n};\n\nvoid mostrar(int n) {\n  for (int s = 0; s < 7; s++) {\n    digitalWrite(s + 2, numeros[n][s]);\n  }\n}\n\nvoid setup() {\n  for (int pin = 2; pin <= 8; pin++) pinMode(pin, OUTPUT);\n}\n\nvoid loop() {\n  for (int n = 0; n < 10; n++) {\n    mostrar(n);\n    delay(1000);\n  }\n}"
        },
        {
          "id": 5,
          "type": "code_order",
          "title": "5. Ordena el Código",
          "subtitle": "Mostrar un 1",
          "instruction": "Ordena el código para mostrar el número 1 en el display (segmentos b y c).",
          "lines": [
            {
              "id": 1,
              "text": "void setup() {"
            },
            {
              "id": 2,
              "text": "  for (int pin = 2; pin <= 8; pin++) {"
            },
            {
              "id": 3,
              "text": "    pinMode(pin, OUTPUT);"
            },
            {
              "id": 4,
              "text": "  }"
            },
            {
              "id": 5,
              "text": "}"
            },
            {
              "id": 6,
              "text": "void loop() {"
            },
            {
              "id": 7,
              "text": "  digitalWrite(3, HIGH);"
            },
            {
              "id": 8,
              "text": "  digitalWrite(4, HIGH);"
            },
            {
              "id": 9,
              "text": "}"
            }
          ],
          "validOrders": [
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 2, 3, 4, 9, 6, 7, 8, 5],
            [1, 2, 3, 5, 4, 6, 7, 8, 9],
            [1, 2, 3, 5, 9, 6, 7, 8, 4],
            [1, 2, 3, 9, 4, 6, 7, 8, 5],
            [1, 2, 3, 9, 5, 6, 7, 8, 4],
            [1, 2, 3, 4, 5, 6, 8, 7, 9],
            [1, 2, 3, 4, 9, 6, 8, 7, 5],
            [1, 2, 3, 5, 4, 6, 8, 7, 9],
            [1, 2, 3, 5, 9, 6, 8, 7, 4],
            [1, 2, 3, 9, 4, 6, 8, 7, 5],
            [1, 2, 3, 9, 5, 6, 8, 7, 4]
          ]
        },
        {
          "id": 6,
          "type": "matching",
          "title": "6. Conecta el Circuito",
          "subtitle": "El display",
          "instruction": "Une cada componente o término de la izquierda con su función o definición correcta a la derecha.",
          "pairs": [
            {
              "id": 0,
              "term": "Segmento",
              "definition": "Cada una de las 7 rayitas (LED) del display."
            },
            {
              "id": 1,
              "term": "Cátodo común",
              "definition": "Pin del display que se conecta a GND."
            },
            {
              "id": 2,
              "term": "Segmentos b y c",
              "definition": "Dibujan el número 1."
            },
            {
              "id": 3,
              "term": "Los 7 segmentos",
              "definition": "Encendidos todos juntos dibujan el número 8."
            }
          ]
        },
        {
          "id": 7,
          "type": "quiz",
          "title": "7. Piensa y Responde",
          "subtitle": "El número 7",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "¿Qué segmentos hay que encender para dibujar el número 7?",
          "options": [
            {
              "id": "0",
              "text": "a, b y c"
            },
            {
              "id": "1",
              "text": "d, e y f"
            },
            {
              "id": "2",
              "text": "b, c y g"
            },
            {
              "id": "3",
              "text": "Los 7 segmentos"
            }
          ],
          "correct": "0"
        },
        {
          "id": 8,
          "type": "code_order",
          "title": "8. Ordena el Código",
          "subtitle": "Mostrar un 7",
          "instruction": "Ordena el loop para mostrar el número 7 (segmentos a, b y c en los pines 2, 3 y 4).",
          "lines": [
            {
              "id": 1,
              "text": "void loop() {"
            },
            {
              "id": 2,
              "text": "  digitalWrite(2, HIGH);"
            },
            {
              "id": 3,
              "text": "  digitalWrite(3, HIGH);"
            },
            {
              "id": 4,
              "text": "  digitalWrite(4, HIGH);"
            },
            {
              "id": 5,
              "text": "}"
            }
          ],
          "validOrders": [
            [1, 2, 3, 4, 5],
            [1, 2, 4, 3, 5],
            [1, 3, 2, 4, 5],
            [1, 3, 4, 2, 5],
            [1, 4, 2, 3, 5],
            [1, 4, 3, 2, 5]
          ]
        },
        {
          "id": 9,
          "type": "circuit",
          "title": "9. Arma el Circuito",
          "subtitle": "Mostrar un 8",
          "instruction": "Conecta los 7 segmentos a los pines 2 al 8 (a = 2, b = 3 ... g = 8) y el pin COM a GND con una resistencia.",
          "parts": [
            {
              "id": "d1",
              "type": "display",
              "show": [
                "a",
                "b",
                "c",
                "d",
                "e",
                "f",
                "g"
              ]
            },
            {
              "id": "r1",
              "type": "resistor",
              "value": "220 Ω"
            }
          ],
          "wires": [
            [
              "uno.D2",
              "d1.a"
            ],
            [
              "uno.D3",
              "d1.b"
            ],
            [
              "uno.D4",
              "d1.c"
            ],
            [
              "uno.D5",
              "d1.d"
            ],
            [
              "uno.D6",
              "d1.e"
            ],
            [
              "uno.D7",
              "d1.f"
            ],
            [
              "uno.D8",
              "d1.g"
            ],
            [
              "d1.com",
              "r1.a"
            ],
            [
              "r1.b",
              "uno.GND"
            ]
          ],
          "branches": [],
          "hint": "Los segmentos van en orden: a al pin 2, b al 3, c al 4, d al 5, e al 6, f al 7 y g al 8.",
          "failTip": "Revisa que cada segmento vaya a su pin."
        },
        {
          "id": 10,
          "type": "quiz",
          "title": "10. Reto Final",
          "subtitle": "Resistencia en COM",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "¿Por qué el display lleva una resistencia en el pin común?",
          "options": [
            {
              "id": "0",
              "text": "Para que los números cambien más rápido"
            },
            {
              "id": "1",
              "text": "Para cambiar el color del display"
            },
            {
              "id": "2",
              "text": "Para apagar el display"
            },
            {
              "id": "3",
              "text": "Para proteger los LEDs de recibir demasiada corriente"
            }
          ],
          "correct": "3"
        }
      ]
    },
    {
      "id": 8,
      "title": "Lección 8: Cuenta regresiva y letras en el display",
      "description": "Contar hacia atrás y dibujar letras básicas. Actividad: invertir la cuenta y agregar letras.",
      "tasks": [
        {
          "id": 1,
          "type": "theory",
          "title": "1. Introducción Teórica",
          "subtitle": "Contando al revés",
          "instruction": "Lee con atención la siguiente información antes de comenzar con los retos.",
          "content": "Ya sabemos mostrar números; ahora haremos que la cuenta vaya al revés. Con un for podemos empezar en 9 y restar 1 en cada vuelta con i--. Además, el display puede dibujar letras sencillas encendiendo otras combinaciones de segmentos, como A, C, E, F, H, L y P."
        },
        {
          "id": 2,
          "type": "quiz",
          "title": "2. Pregunta Rápida",
          "subtitle": "Contar hacia atrás",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "¿Cómo se hace una cuenta regresiva con un ciclo for?",
          "options": [
            {
              "id": "0",
              "text": "Usando i++ para sumar 1"
            },
            {
              "id": "1",
              "text": "Poniendo un delay negativo"
            },
            {
              "id": "2",
              "text": "No se puede contar hacia atrás"
            },
            {
              "id": "3",
              "text": "Empezando en un número grande y usando i-- para restar 1"
            }
          ],
          "correct": "3"
        },
        {
          "id": 3,
          "type": "circuit",
          "title": "3. Arma el Circuito",
          "subtitle": "Display completo",
          "instruction": "Conecta los 7 segmentos a los pines 2 al 8 (a = 2 ... g = 8) y COM a GND con una resistencia. Servirá para números y letras.",
          "parts": [
            {
              "id": "d1",
              "type": "display",
              "show": [
                "a",
                "b",
                "c",
                "d",
                "e",
                "f",
                "g"
              ]
            },
            {
              "id": "r1",
              "type": "resistor",
              "value": "220 Ω"
            }
          ],
          "wires": [
            [
              "uno.D2",
              "d1.a"
            ],
            [
              "uno.D3",
              "d1.b"
            ],
            [
              "uno.D4",
              "d1.c"
            ],
            [
              "uno.D5",
              "d1.d"
            ],
            [
              "uno.D6",
              "d1.e"
            ],
            [
              "uno.D7",
              "d1.f"
            ],
            [
              "uno.D8",
              "d1.g"
            ],
            [
              "d1.com",
              "r1.a"
            ],
            [
              "r1.b",
              "uno.GND"
            ]
          ],
          "branches": [],
          "hint": "a→2, b→3, c→4, d→5, e→6, f→7, g→8.",
          "failTip": "Revisa que cada segmento vaya a su pin."
        },
        {
          "id": 4,
          "type": "example",
          "title": "4. Ejemplo Práctico",
          "subtitle": "Escribir HOLA",
          "instruction": "Observa cómo se implementa y piensa qué pasaría si cambiaras algún valor.",
          "explanation": "Una letra se guarda igual que un número: una lista de 7 valores, uno por segmento. Aquí mostramos H, O, L, A una por una para formar HOLA. Reto extra: dibuja la P (a, b, e, f, g) y la E (a, d, e, f, g) y escribe tu propia palabra.",
          "codeSnippet": "byte letraH[7] = {0,1,1,0,1,1,1};\nbyte letraO[7] = {1,1,1,1,1,1,0};\nbyte letraL[7] = {0,0,0,1,1,1,0};\nbyte letraA[7] = {1,1,1,0,1,1,1};\n\nvoid mostrarLetra(byte letra[]) {\n  for (int s = 0; s < 7; s++) {\n    digitalWrite(s + 2, letra[s]);\n  }\n}\n\nvoid setup() {\n  for (int pin = 2; pin <= 8; pin++) pinMode(pin, OUTPUT);\n}\n\nvoid loop() {\n  mostrarLetra(letraH); delay(800);\n  mostrarLetra(letraO); delay(800);\n  mostrarLetra(letraL); delay(800);\n  mostrarLetra(letraA); delay(800);\n}"
        },
        {
          "id": 5,
          "type": "code_order",
          "title": "5. Ordena el Código",
          "subtitle": "Cuenta regresiva",
          "instruction": "Ordena el código para contar de 9 a 0, mostrando cada número un segundo (la función mostrar() ya existe).",
          "lines": [
            {
              "id": 1,
              "text": "void loop() {"
            },
            {
              "id": 2,
              "text": "  for (int i = 9; i >= 0; i--) {"
            },
            {
              "id": 3,
              "text": "    mostrar(i);"
            },
            {
              "id": 4,
              "text": "    delay(1000);"
            },
            {
              "id": 5,
              "text": "  }"
            },
            {
              "id": 6,
              "text": "}"
            }
          ],
          "validOrders": [
            [1, 2, 3, 4, 5, 6],
            [1, 2, 3, 4, 6, 5]
          ]
        },
        {
          "id": 6,
          "type": "matching",
          "title": "6. Conecta el Circuito",
          "subtitle": "Cuenta y letras",
          "instruction": "Une cada componente o término de la izquierda con su función o definición correcta a la derecha.",
          "pairs": [
            {
              "id": 0,
              "term": "i--",
              "definition": "Resta 1 al contador en cada vuelta."
            },
            {
              "id": 1,
              "term": "mostrar(i)",
              "definition": "Función que dibuja el número i en el display."
            },
            {
              "id": 2,
              "term": "Letra H",
              "definition": "Se dibuja con los segmentos b, c, e, f y g."
            },
            {
              "id": 3,
              "term": "Letra L",
              "definition": "Se dibuja con los segmentos d, e y f."
            }
          ]
        },
        {
          "id": 7,
          "type": "quiz",
          "title": "7. Piensa y Responde",
          "subtitle": "La letra H",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "Para escribir la letra H, ¿qué segmentos se encienden?",
          "options": [
            {
              "id": "0",
              "text": "a, b, c y d"
            },
            {
              "id": "1",
              "text": "b, c, e, f y g"
            },
            {
              "id": "2",
              "text": "a, d, e y f"
            },
            {
              "id": "3",
              "text": "Solo g"
            }
          ],
          "correct": "1"
        },
        {
          "id": 8,
          "type": "code_order",
          "title": "8. Ordena el Código",
          "subtitle": "Cuenta de 3 a 1",
          "instruction": "Ordena el loop: cuenta de 3 a 1 y al final muestra el 0 (mostrar() ya existe).",
          "lines": [
            {
              "id": 1,
              "text": "void loop() {"
            },
            {
              "id": 2,
              "text": "  for (int i = 3; i >= 1; i--) {"
            },
            {
              "id": 3,
              "text": "    mostrar(i);"
            },
            {
              "id": 4,
              "text": "    delay(1000);"
            },
            {
              "id": 5,
              "text": "  }"
            },
            {
              "id": 6,
              "text": "  mostrar(0);"
            },
            {
              "id": 7,
              "text": "}"
            }
          ],
          "validOrders": [
            [1, 2, 3, 4, 5, 6, 7],
            [1, 2, 3, 4, 7, 6, 5]
          ]
        },
        {
          "id": 9,
          "type": "quiz",
          "title": "9. Reto Final",
          "subtitle": "Condición del ciclo",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "En una cuenta regresiva de 9 a 0, ¿qué condición mantiene el ciclo funcionando?",
          "options": [
            {
              "id": "0",
              "text": "i <= 0"
            },
            {
              "id": "1",
              "text": "i > 9"
            },
            {
              "id": "2",
              "text": "i >= 0"
            },
            {
              "id": "3",
              "text": "i == 9"
            }
          ],
          "correct": "2"
        }
      ]
    },
    {
      "id": 9,
      "title": "Lección 9: El buzzer",
      "description": "Cómo hacer sonar un buzzer con un tono definido.",
      "tasks": [
        {
          "id": 1,
          "type": "theory",
          "title": "1. Introducción Teórica",
          "subtitle": "Haciendo sonido",
          "instruction": "Lee con atención la siguiente información antes de comenzar con los retos.",
          "content": "El buzzer es un pequeño parlante que produce tonos. Tiene una pata positiva (+) y una negativa (−), y usaremos uno pasivo, que suena con la instrucción tone(pin, frecuencia). Entre más alta sea la frecuencia en Hertz (Hz), más agudo es el sonido; por ejemplo, 440 Hz es la nota La. Con noTone(pin) lo silenciamos."
        },
        {
          "id": 2,
          "type": "quiz",
          "title": "2. Pregunta Rápida",
          "subtitle": "Frecuencia",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "¿Qué pasa con el sonido si aumentamos la frecuencia en tone()?",
          "options": [
            {
              "id": "0",
              "text": "Se vuelve más agudo"
            },
            {
              "id": "1",
              "text": "Se vuelve más grave"
            },
            {
              "id": "2",
              "text": "Suena durante más tiempo"
            },
            {
              "id": "3",
              "text": "Se apaga"
            }
          ],
          "correct": "0"
        },
        {
          "id": 3,
          "type": "circuit",
          "title": "3. Arma el Circuito",
          "subtitle": "Conectar el buzzer",
          "instruction": "Conecta el pin 9 al positivo (+) del buzzer y el negativo (−) a GND.",
          "parts": [
            {
              "id": "buz",
              "type": "buzzer"
            }
          ],
          "wires": [
            [
              "uno.D9",
              "buz.pos"
            ],
            [
              "buz.neg",
              "uno.GND"
            ]
          ],
          "branches": [],
          "hint": "La pata marcada con + va al pin 9."
        },
        {
          "id": 4,
          "type": "example",
          "title": "4. Ejemplo Práctico",
          "subtitle": "Tres bips cortos",
          "instruction": "Observa cómo se implementa y piensa qué pasaría si cambiaras algún valor.",
          "explanation": "tone(9, 1000, 200) hace sonar 1000 Hz durante 200 milisegundos, y después el sonido se apaga solo. El ciclo for lo repite 3 veces y luego esperamos 2 segundos antes de empezar otra vez. ¡Parece la alarma de un reloj!",
          "codeSnippet": "void setup() {\n  pinMode(9, OUTPUT);\n}\n\nvoid loop() {\n  for (int i = 0; i < 3; i++) {\n    tone(9, 1000, 200);\n    delay(300);\n  }\n  delay(2000);\n}"
        },
        {
          "id": 5,
          "type": "code_order",
          "title": "5. Ordena el Código",
          "subtitle": "Un tono con pausas",
          "instruction": "Ordena el código para que el buzzer del pin 9 suene un segundo y descanse otro segundo.",
          "lines": [
            {
              "id": 1,
              "text": "void setup() {"
            },
            {
              "id": 2,
              "text": "  pinMode(9, OUTPUT);"
            },
            {
              "id": 3,
              "text": "}"
            },
            {
              "id": 4,
              "text": "void loop() {"
            },
            {
              "id": 5,
              "text": "  tone(9, 440);"
            },
            {
              "id": 6,
              "text": "  delay(1000);"
            },
            {
              "id": 7,
              "text": "  noTone(9);"
            },
            {
              "id": 8,
              "text": "  delay(1000);"
            },
            {
              "id": 9,
              "text": "}"
            }
          ],
          "validOrders": [
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 2, 3, 4, 5, 8, 7, 6, 9],
            [1, 2, 9, 4, 5, 6, 7, 8, 3],
            [1, 2, 9, 4, 5, 8, 7, 6, 3]
          ]
        },
        {
          "id": 6,
          "type": "matching",
          "title": "6. Conecta el Circuito",
          "subtitle": "El buzzer",
          "instruction": "Une cada componente o término de la izquierda con su función o definición correcta a la derecha.",
          "pairs": [
            {
              "id": 0,
              "term": "Buzzer",
              "definition": "Componente que convierte señales eléctricas en sonido."
            },
            {
              "id": 1,
              "term": "tone(9, 440)",
              "definition": "Hace sonar una nota de 440 Hz en el pin 9."
            },
            {
              "id": 2,
              "term": "noTone(9)",
              "definition": "Detiene el sonido del pin 9."
            },
            {
              "id": 3,
              "term": "Frecuencia (Hz)",
              "definition": "Vibraciones por segundo: decide si el sonido es agudo o grave."
            }
          ]
        },
        {
          "id": 7,
          "type": "quiz",
          "title": "7. Piensa y Responde",
          "subtitle": "noTone()",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "¿Qué pasa si usas tone() y después solo delay(), sin noTone()?",
          "options": [
            {
              "id": "0",
              "text": "El buzzer se apaga solo"
            },
            {
              "id": "1",
              "text": "La placa se reinicia"
            },
            {
              "id": "2",
              "text": "El sonido se vuelve más fuerte"
            },
            {
              "id": "3",
              "text": "El tono sigue sonando sin parar"
            }
          ],
          "correct": "3"
        },
        {
          "id": 8,
          "type": "code_order",
          "title": "8. Ordena el Código",
          "subtitle": "Bip repetido",
          "instruction": "Ordena el loop para que el buzzer haga bip de 0.2 segundos con pausas de 0.2 segundos.",
          "lines": [
            {
              "id": 1,
              "text": "void loop() {"
            },
            {
              "id": 2,
              "text": "  tone(9, 1000);"
            },
            {
              "id": 3,
              "text": "  delay(200);"
            },
            {
              "id": 4,
              "text": "  noTone(9);"
            },
            {
              "id": 5,
              "text": "  delay(200);"
            },
            {
              "id": 6,
              "text": "}"
            }
          ],
          "validOrders": [
            [1, 2, 3, 4, 5, 6],
            [1, 2, 5, 4, 3, 6]
          ]
        },
        {
          "id": 9,
          "type": "quiz",
          "title": "9. Reto Final",
          "subtitle": "Agudo o grave",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "¿Cuál nota suena más aguda: 262 Hz o 440 Hz?",
          "options": [
            {
              "id": "0",
              "text": "262 Hz"
            },
            {
              "id": "1",
              "text": "440 Hz"
            },
            {
              "id": "2",
              "text": "Suenan igual"
            },
            {
              "id": "3",
              "text": "Depende del pin"
            }
          ],
          "correct": "1"
        }
      ]
    },
    {
      "id": 10,
      "title": "Lección 10: Crea tu propio tono",
      "description": "Hacer una melodía con una lista de notas. Actividad: crear un tono propio y hacerlo sonar.",
      "tasks": [
        {
          "id": 1,
          "type": "theory",
          "title": "1. Introducción Teórica",
          "subtitle": "De notas a melodías",
          "instruction": "Lee con atención la siguiente información antes de comenzar con los retos.",
          "content": "Una melodía es una lista de notas, cada una con su frecuencia y su duración. Podemos guardar las frecuencias en una lista (arreglo) y recorrerla con un for. Algunas notas: Do = 262 Hz, Re = 294 Hz, Mi = 330 Hz, Fa = 349 Hz y Sol = 392 Hz. Con esto puedes inventar tu propia canción corta."
        },
        {
          "id": 2,
          "type": "quiz",
          "title": "2. Pregunta Rápida",
          "subtitle": "Duración de la nota",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "En tone(9, 262, 300), ¿qué significa el número 300?",
          "options": [
            {
              "id": "0",
              "text": "La frecuencia de la nota"
            },
            {
              "id": "1",
              "text": "La duración de la nota en milisegundos"
            },
            {
              "id": "2",
              "text": "El número del pin"
            },
            {
              "id": "3",
              "text": "El volumen del buzzer"
            }
          ],
          "correct": "1"
        },
        {
          "id": 3,
          "type": "circuit",
          "title": "3. Arma el Circuito",
          "subtitle": "Buzzer con luz de aviso",
          "instruction": "Conecta el buzzer al pin 9 (+ al pin y − a GND) y un LED rojo al pin 8 con su resistencia.",
          "parts": [
            {
              "id": "buz",
              "type": "buzzer"
            },
            {
              "id": "r1",
              "type": "resistor",
              "value": "220 Ω"
            },
            {
              "id": "led1",
              "type": "led",
              "color": "red"
            }
          ],
          "wires": [
            [
              "uno.D9",
              "buz.pos"
            ],
            [
              "buz.neg",
              "uno.GND"
            ]
          ],
          "branches": [
            [
              "uno.D8",
              "r1",
              "led1"
            ]
          ],
          "failTip": "Recuerda: cada LED necesita su resistencia."
        },
        {
          "id": 4,
          "type": "example",
          "title": "4. Ejemplo Práctico",
          "subtitle": "Sirena de patrulla",
          "instruction": "Observa cómo se implementa y piensa qué pasaría si cambiaras algún valor.",
          "explanation": "En vez de una lista de notas, aquí la frecuencia f sube poco a poco de 400 a 1000 Hz y luego baja otra vez. Así el sonido se desliza como una sirena. Reto extra: cambia el 10 de los delay() para hacer una sirena más lenta o más rápida.",
          "codeSnippet": "void setup() {\n  pinMode(9, OUTPUT);\n}\n\nvoid loop() {\n  for (int f = 400; f <= 1000; f += 10) {\n    tone(9, f);\n    delay(10);\n  }\n  for (int f = 1000; f >= 400; f -= 10) {\n    tone(9, f);\n    delay(10);\n  }\n}"
        },
        {
          "id": 5,
          "type": "code_order",
          "title": "5. Ordena el Código",
          "subtitle": "Tocar una escala",
          "instruction": "Ordena el código para tocar las notas Do, Re, Mi y Fa, una tras otra.",
          "lines": [
            {
              "id": 1,
              "text": "int notas[] = {262, 294, 330, 349};"
            },
            {
              "id": 2,
              "text": "void setup() {"
            },
            {
              "id": 3,
              "text": "  pinMode(9, OUTPUT);"
            },
            {
              "id": 4,
              "text": "}"
            },
            {
              "id": 5,
              "text": "void loop() {"
            },
            {
              "id": 6,
              "text": "  for (int i = 0; i < 4; i++) {"
            },
            {
              "id": 7,
              "text": "    tone(9, notas[i], 300);"
            },
            {
              "id": 8,
              "text": "    delay(400);"
            },
            {
              "id": 9,
              "text": "  }"
            },
            {
              "id": 10,
              "text": "}"
            }
          ],
          "validOrders": [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            [1, 2, 3, 4, 5, 6, 7, 8, 10, 9],
            [1, 2, 3, 9, 5, 6, 7, 8, 4, 10],
            [1, 2, 3, 9, 5, 6, 7, 8, 10, 4],
            [1, 2, 3, 10, 5, 6, 7, 8, 4, 9],
            [1, 2, 3, 10, 5, 6, 7, 8, 9, 4],
            [2, 3, 4, 1, 5, 6, 7, 8, 9, 10],
            [2, 3, 4, 1, 5, 6, 7, 8, 10, 9],
            [2, 3, 9, 1, 5, 6, 7, 8, 4, 10],
            [2, 3, 9, 1, 5, 6, 7, 8, 10, 4],
            [2, 3, 10, 1, 5, 6, 7, 8, 4, 9],
            [2, 3, 10, 1, 5, 6, 7, 8, 9, 4]
          ]
        },
        {
          "id": 6,
          "type": "matching",
          "title": "6. Conecta el Circuito",
          "subtitle": "Melodías",
          "instruction": "Une cada componente o término de la izquierda con su función o definición correcta a la derecha.",
          "pairs": [
            {
              "id": 0,
              "term": "notas[]",
              "definition": "Lista (arreglo) con las frecuencias de la melodía."
            },
            {
              "id": 1,
              "term": "262 Hz",
              "definition": "Frecuencia de la nota Do."
            },
            {
              "id": 2,
              "term": "Duración",
              "definition": "Cuánto tiempo suena cada nota."
            },
            {
              "id": 3,
              "term": "notas[i]",
              "definition": "La nota que ocupa la posición i de la lista."
            }
          ]
        },
        {
          "id": 7,
          "type": "quiz",
          "title": "7. Piensa y Responde",
          "subtitle": "Notas en un for",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "En tone(9, notas[i], 300) dentro de un for, ¿qué pasa en cada vuelta?",
          "options": [
            {
              "id": "0",
              "text": "Suena la nota número i de la lista"
            },
            {
              "id": "1",
              "text": "Suenan todas las notas a la vez"
            },
            {
              "id": "2",
              "text": "Se cambia el pin del buzzer"
            },
            {
              "id": "3",
              "text": "Se borra la lista"
            }
          ],
          "correct": "0"
        },
        {
          "id": 8,
          "type": "code_order",
          "title": "8. Ordena el Código",
          "subtitle": "Sirena",
          "instruction": "Ordena el loop para que la frecuencia suba de 400 a 1000 Hz.",
          "lines": [
            {
              "id": 1,
              "text": "void loop() {"
            },
            {
              "id": 2,
              "text": "  for (int f = 400; f <= 1000; f += 10) {"
            },
            {
              "id": 3,
              "text": "    tone(9, f);"
            },
            {
              "id": 4,
              "text": "    delay(10);"
            },
            {
              "id": 5,
              "text": "  }"
            },
            {
              "id": 6,
              "text": "}"
            }
          ],
          "validOrders": [
            [1, 2, 3, 4, 5, 6],
            [1, 2, 3, 4, 6, 5]
          ]
        },
        {
          "id": 9,
          "type": "quiz",
          "title": "9. Reto Final",
          "subtitle": "Melodía más rápida",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "Para que la melodía suene más rápido, ¿qué cambio haces en los delay()?",
          "options": [
            {
              "id": "0",
              "text": "Usar números más grandes"
            },
            {
              "id": "1",
              "text": "Quitar tone()"
            },
            {
              "id": "2",
              "text": "Usar números más pequeños"
            },
            {
              "id": "3",
              "text": "Cambiar de pin"
            }
          ],
          "correct": "2"
        }
      ]
    }
  ]
};
