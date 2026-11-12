// src/data/module2.js
export const module2 = {
  "id": 2,
  "title": "Módulo 2",
  "lessons": [
    {
      "id": 1,
      "title": "Lección 1: Sensores, ¿cómo siente el Arduino?",
      "description": "Qué es un sensor, cómo se relaciona con las resistencias y cómo leerlo con analogRead().",
      "tasks": [
        {
          "id": 1,
          "type": "theory",
          "title": "1. Introducción Teórica",
          "subtitle": "Del mundo real al Arduino",
          "instruction": "Lee con atención la siguiente información antes de comenzar con los retos.",
          "content": "Un sensor es un componente que mide algo del mundo real, como luz, temperatura o nivel de agua, y lo convierte en una señal eléctrica. Muchos sensores funcionan cambiando su resistencia según lo que miden. El Arduino lee esa señal con sus entradas analógicas (A0 a A5) y la convierte en un número entre 0 y 1023."
        },
        {
          "id": 2,
          "type": "quiz",
          "title": "2. Pregunta Rápida",
          "subtitle": "analogRead()",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "¿Qué rango de números devuelve la instrucción analogRead()?",
          "options": [
            {
              "id": "0",
              "text": "De 0 a 255"
            },
            {
              "id": "1",
              "text": "De 0 a 100"
            },
            {
              "id": "2",
              "text": "De 0 a 1023"
            },
            {
              "id": "3",
              "text": "Solo 0 o 1"
            }
          ],
          "correct": "2"
        },
        {
          "id": 3,
          "type": "circuit",
          "title": "3. Arma el Circuito",
          "subtitle": "Un sensor variable",
          "instruction": "Conecta el potenciómetro: pata 1 a 5V, pata 2 a GND y la pata del centro a la entrada A0.",
          "parts": [
            {
              "id": "pot",
              "type": "pot"
            }
          ],
          "wires": [
            [
              "uno.5V",
              "pot.1"
            ],
            [
              "pot.2",
              "uno.GND"
            ],
            [
              "pot.w",
              "uno.A0"
            ]
          ],
          "branches": [],
          "hint": "La pata del centro es la que entrega el voltaje variable.",
          "failTip": "Nunca conectes 5V directo a GND."
        },
        {
          "id": 4,
          "type": "example",
          "title": "4. Ejemplo Práctico",
          "subtitle": "De números a voltaje",
          "instruction": "Observa cómo se implementa y piensa qué pasaría si cambiaras algún valor.",
          "explanation": "analogRead() devuelve 0 cuando hay 0 V en el pin y 1023 cuando hay 5 V. La fórmula lectura * (5.0 / 1023.0) convierte ese número en voltios. Reto extra: agrega un buzzer que suene cuando la lectura pase de 800.",
          "codeSnippet": "void setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int lectura = analogRead(A0);\n  float voltaje = lectura * (5.0 / 1023.0);\n  Serial.print(\"Lectura: \");\n  Serial.print(lectura);\n  Serial.print(\"  Voltaje: \");\n  Serial.println(voltaje);\n  delay(300);\n}"
        },
        {
          "id": 5,
          "type": "code_order",
          "title": "5. Ordena el Código",
          "subtitle": "Leer una entrada analógica",
          "instruction": "Ordena el código para leer la entrada A0 y mostrar el valor en el Monitor Serie.",
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
              "text": "  int lectura = analogRead(A0);"
            },
            {
              "id": 6,
              "text": "  Serial.println(lectura);"
            },
            {
              "id": 7,
              "text": "  delay(200);"
            },
            {
              "id": 8,
              "text": "}"
            }
          ],
          "validOrders": [
            [1, 2, 3, 4, 5, 6, 7, 8],
            [1, 2, 8, 4, 5, 6, 7, 3]
          ]
        },
        {
          "id": 6,
          "type": "matching",
          "title": "6. Conecta el Circuito",
          "subtitle": "Sensores",
          "instruction": "Une cada componente o término de la izquierda con su función o definición correcta a la derecha.",
          "pairs": [
            {
              "id": 0,
              "term": "Sensor",
              "definition": "Mide algo del mundo real y lo convierte en señal eléctrica."
            },
            {
              "id": 1,
              "term": "analogRead(A0)",
              "definition": "Lee un valor de 0 a 1023 en la entrada A0."
            },
            {
              "id": 2,
              "term": "Resistencia variable",
              "definition": "Cambia su valor según lo que mide el sensor."
            },
            {
              "id": 3,
              "term": "Monitor Serie",
              "definition": "Nos deja ver las lecturas en la pantalla de la computadora."
            }
          ]
        },
        {
          "id": 7,
          "type": "quiz",
          "title": "7. Piensa y Responde",
          "subtitle": "Cómo siente el Arduino",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "¿Qué lee el Arduino de un sensor conectado a una entrada analógica?",
          "options": [
            {
              "id": "0",
              "text": "El color del cable"
            },
            {
              "id": "1",
              "text": "El voltaje que llega al pin"
            },
            {
              "id": "2",
              "text": "El sonido del ambiente"
            },
            {
              "id": "3",
              "text": "El brillo del LED"
            }
          ],
          "correct": "1"
        },
        {
          "id": 8,
          "type": "code_order",
          "title": "8. Ordena el Código",
          "subtitle": "Decidir con un sensor",
          "instruction": "Ordena el loop para escribir \"Mucho\" cuando la lectura pase de 800.",
          "lines": [
            {
              "id": 1,
              "text": "void loop() {"
            },
            {
              "id": 2,
              "text": "  int sensor = analogRead(A0);"
            },
            {
              "id": 3,
              "text": "  if (sensor > 800) {"
            },
            {
              "id": 4,
              "text": "    Serial.println(\"Mucho\");"
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
          "type": "circuit",
          "title": "9. Arma el Circuito",
          "subtitle": "Sensor de luz",
          "instruction": "Conecta la fotorresistencia entre 5V y A0, y la resistencia de 10 kΩ entre A0 y GND.",
          "parts": [
            {
              "id": "ldr",
              "type": "ldr"
            },
            {
              "id": "r1",
              "type": "resistor",
              "value": "10 kΩ"
            }
          ],
          "wires": [
            [
              "uno.5V",
              "ldr.a"
            ],
            [
              "ldr.b",
              "uno.A0"
            ],
            [
              "r1.a",
              "uno.A0"
            ],
            [
              "r1.b",
              "uno.GND"
            ]
          ],
          "branches": [],
          "hint": "El punto A0 recibe un cable de la fotorresistencia y otro de la resistencia.",
          "failTip": "Las dos resistencias reparten el voltaje: sin una de ellas no funciona."
        },
        {
          "id": 10,
          "type": "quiz",
          "title": "10. Reto Final",
          "subtitle": "Lectura máxima",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "Si analogRead() da 1023, ¿cuántos voltios hay en el pin?",
          "options": [
            {
              "id": "0",
              "text": "0 V"
            },
            {
              "id": "1",
              "text": "1023 V"
            },
            {
              "id": "2",
              "text": "2.5 V"
            },
            {
              "id": "3",
              "text": "5 V"
            }
          ],
          "correct": "3"
        }
      ]
    },
    {
      "id": 2,
      "title": "Lección 2: Push button",
      "description": "Leer un botón con INPUT_PULLUP. Actividades: prender un LED con un botón, mantenerlo prendido y hacer una linterna.",
      "tasks": [
        {
          "id": 1,
          "type": "theory",
          "title": "1. Introducción Teórica",
          "subtitle": "Un interruptor para el Arduino",
          "instruction": "Lee con atención la siguiente información antes de comenzar con los retos.",
          "content": "El push button (pulsador) es un interruptor que deja pasar la corriente solo mientras lo presionas. Para leerlo usamos el pin como entrada con INPUT_PULLUP, que mantiene el pin en HIGH mientras nadie lo presiona. Un lado del botón va al pin y el otro lado a GND, así que al presionarlo la lectura cambia a LOW."
        },
        {
          "id": 2,
          "type": "quiz",
          "title": "2. Pregunta Rápida",
          "subtitle": "INPUT_PULLUP",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "Con INPUT_PULLUP, ¿qué lectura da digitalRead() cuando el botón está presionado?",
          "options": [
            {
              "id": "0",
              "text": "LOW"
            },
            {
              "id": "1",
              "text": "HIGH"
            },
            {
              "id": "2",
              "text": "1023"
            },
            {
              "id": "3",
              "text": "Ninguna lectura"
            }
          ],
          "correct": "0"
        },
        {
          "id": 3,
          "type": "circuit",
          "title": "3. Arma el Circuito",
          "subtitle": "LED con botón",
          "instruction": "Conecta un lado del botón al pin 2 y el otro a GND. El LED rojo va al pin 8 con su resistencia.",
          "parts": [
            {
              "id": "btn",
              "type": "button"
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
              "uno.D2",
              "btn.a"
            ],
            [
              "btn.b",
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
          "hint": "Con INPUT_PULLUP el botón se conecta entre el pin y GND.",
          "failTip": "Recuerda: cada LED necesita su resistencia."
        },
        {
          "id": 4,
          "type": "example",
          "title": "4. Ejemplo Práctico",
          "subtitle": "Linterna con un solo botón",
          "instruction": "Observa cómo se implementa y piensa qué pasaría si cambiaras algún valor.",
          "explanation": "Cada vez que presionas el botón, la variable encendido cambia de verdadero a falso (o al revés) y el LED la copia: ¡funciona como una linterna! El delay(250) evita que un solo toque se cuente varias veces.",
          "codeSnippet": "bool encendido = false;\n\nvoid setup() {\n  pinMode(2, INPUT_PULLUP);\n  pinMode(8, OUTPUT);\n}\n\nvoid loop() {\n  if (digitalRead(2) == LOW) {\n    encendido = !encendido;\n    digitalWrite(8, encendido);\n    delay(250);\n  }\n}"
        },
        {
          "id": 5,
          "type": "code_order",
          "title": "5. Ordena el Código",
          "subtitle": "LED con botón",
          "instruction": "Ordena el código para que el LED del pin 8 se prenda mientras mantienes presionado el botón del pin 2.",
          "lines": [
            {
              "id": 1,
              "text": "void setup() {"
            },
            {
              "id": 2,
              "text": "  pinMode(2, INPUT_PULLUP);"
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
              "text": "  if (digitalRead(2) == LOW) {"
            },
            {
              "id": 7,
              "text": "    digitalWrite(8, HIGH);"
            },
            {
              "id": 8,
              "text": "  } else {"
            },
            {
              "id": 9,
              "text": "    digitalWrite(8, LOW);"
            },
            {
              "id": 10,
              "text": "  }"
            },
            {
              "id": 11,
              "text": "}"
            }
          ],
          "validOrders": [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 10],
            [1, 2, 3, 10, 5, 6, 7, 8, 9, 4, 11],
            [1, 2, 3, 10, 5, 6, 7, 8, 9, 11, 4],
            [1, 2, 3, 11, 5, 6, 7, 8, 9, 4, 10],
            [1, 2, 3, 11, 5, 6, 7, 8, 9, 10, 4],
            [1, 3, 2, 4, 5, 6, 7, 8, 9, 10, 11],
            [1, 3, 2, 4, 5, 6, 7, 8, 9, 11, 10],
            [1, 3, 2, 10, 5, 6, 7, 8, 9, 4, 11],
            [1, 3, 2, 10, 5, 6, 7, 8, 9, 11, 4],
            [1, 3, 2, 11, 5, 6, 7, 8, 9, 4, 10],
            [1, 3, 2, 11, 5, 6, 7, 8, 9, 10, 4]
          ]
        },
        {
          "id": 6,
          "type": "matching",
          "title": "6. Conecta el Circuito",
          "subtitle": "El botón",
          "instruction": "Une cada componente o término de la izquierda con su función o definición correcta a la derecha.",
          "pairs": [
            {
              "id": 0,
              "term": "Push button",
              "definition": "Interruptor que deja pasar la corriente mientras lo presionas."
            },
            {
              "id": 1,
              "term": "INPUT_PULLUP",
              "definition": "Mantiene el pin en HIGH mientras no se presiona el botón."
            },
            {
              "id": 2,
              "term": "digitalRead()",
              "definition": "Lee si un pin está en HIGH o en LOW."
            },
            {
              "id": 3,
              "term": "LOW",
              "definition": "Valor que se lee cuando el botón está presionado (con pull-up)."
            }
          ]
        },
        {
          "id": 7,
          "type": "quiz",
          "title": "7. Piensa y Responde",
          "subtitle": "Sin pull-up",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "¿Qué pasa si no usas INPUT_PULLUP y dejas el pin del botón sin nada conectado?",
          "options": [
            {
              "id": "0",
              "text": "La lectura es inestable y cambia sola"
            },
            {
              "id": "1",
              "text": "El botón ya no se puede presionar"
            },
            {
              "id": "2",
              "text": "El LED se quema"
            },
            {
              "id": "3",
              "text": "Siempre lee LOW"
            }
          ],
          "correct": "0"
        },
        {
          "id": 8,
          "type": "code_order",
          "title": "8. Ordena el Código",
          "subtitle": "Mensaje al presionar",
          "instruction": "Ordena el código para escribir \"Presionado\" en la consola cuando se presione el botón del pin 2.",
          "lines": [
            {
              "id": 1,
              "text": "void setup() {"
            },
            {
              "id": 2,
              "text": "  pinMode(2, INPUT_PULLUP);"
            },
            {
              "id": 3,
              "text": "  Serial.begin(9600);"
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
              "text": "  if (digitalRead(2) == LOW) {"
            },
            {
              "id": 7,
              "text": "    Serial.println(\"Presionado\");"
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
            [1, 2, 3, 8, 5, 6, 7, 4, 9],
            [1, 2, 3, 8, 5, 6, 7, 9, 4],
            [1, 2, 3, 9, 5, 6, 7, 4, 8],
            [1, 2, 3, 9, 5, 6, 7, 8, 4],
            [1, 3, 2, 4, 5, 6, 7, 8, 9],
            [1, 3, 2, 4, 5, 6, 7, 9, 8],
            [1, 3, 2, 8, 5, 6, 7, 4, 9],
            [1, 3, 2, 8, 5, 6, 7, 9, 4],
            [1, 3, 2, 9, 5, 6, 7, 4, 8],
            [1, 3, 2, 9, 5, 6, 7, 8, 4]
          ]
        },
        {
          "id": 9,
          "type": "circuit",
          "title": "9. Arma el Circuito",
          "subtitle": "Dos botones, dos LEDs",
          "instruction": "Botón 1 al pin 2 y botón 2 al pin 3 (el otro lado de cada uno a GND). LED rojo al pin 8 y LED verde al pin 9.",
          "parts": [
            {
              "id": "b1",
              "type": "button"
            },
            {
              "id": "b2",
              "type": "button"
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
          "wires": [
            [
              "uno.D2",
              "b1.a"
            ],
            [
              "b1.b",
              "uno.GND"
            ],
            [
              "uno.D3",
              "b2.a"
            ],
            [
              "b2.b",
              "uno.GND"
            ]
          ],
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
          "subtitle": "Rebote del botón",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "¿Para qué sirve el delay(250) en el programa de la linterna?",
          "options": [
            {
              "id": "0",
              "text": "Para que el LED brille más"
            },
            {
              "id": "1",
              "text": "Para apagar el botón"
            },
            {
              "id": "2",
              "text": "Para que un solo toque no se cuente varias veces"
            },
            {
              "id": "3",
              "text": "Para cambiar el pin"
            }
          ],
          "correct": "2"
        }
      ]
    },
    {
      "id": 3,
      "title": "Lección 3: Repaso del display, sube y baja con botones",
      "description": "Repasar el display de 7 segmentos y el push button. Actividad: aumentar y disminuir el número con dos botones.",
      "tasks": [
        {
          "id": 1,
          "type": "theory",
          "title": "1. Introducción Teórica",
          "subtitle": "Juntando lo aprendido",
          "instruction": "Lee con atención la siguiente información antes de comenzar con los retos.",
          "content": "Vamos a combinar un display de 7 segmentos con dos botones. Guardamos el número en una variable llamada contador: un botón le suma 1 y el otro le resta 1. Con las condiciones cuidamos que el contador nunca pase de 9 ni baje de 0, porque el display solo muestra un dígito."
        },
        {
          "id": 2,
          "type": "quiz",
          "title": "2. Pregunta Rápida",
          "subtitle": "Condiciones",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "¿Para qué sirve la condición contador < 9 al subir el número?",
          "options": [
            {
              "id": "0",
              "text": "Para que el contador empiece en 9"
            },
            {
              "id": "1",
              "text": "Para apagar el display"
            },
            {
              "id": "2",
              "text": "Para repetir el ciclo 9 veces"
            },
            {
              "id": "3",
              "text": "Para que el número no pase de 9, el máximo que muestra el display"
            }
          ],
          "correct": "3"
        },
        {
          "id": 3,
          "type": "circuit",
          "title": "3. Arma el Circuito",
          "subtitle": "Dos botones",
          "instruction": "Conecta el botón de subir al pin 9 y el botón de bajar al pin 10 (el otro lado de cada uno a GND).",
          "parts": [
            {
              "id": "b1",
              "type": "button",
              "label": "Subir"
            },
            {
              "id": "b2",
              "type": "button",
              "label": "Bajar"
            }
          ],
          "wires": [
            [
              "uno.D9",
              "b1.a"
            ],
            [
              "b1.b",
              "uno.GND"
            ],
            [
              "uno.D10",
              "b2.a"
            ],
            [
              "b2.b",
              "uno.GND"
            ]
          ],
          "branches": []
        },
        {
          "id": 4,
          "type": "example",
          "title": "4. Ejemplo Práctico",
          "subtitle": "Programa completo",
          "instruction": "Observa cómo se implementa y piensa qué pasaría si cambiaras algún valor.",
          "explanation": "El display usa los pines 2 a 8 y los botones los pines 9 y 10. Cada pulsación cambia el contador y mostrar() lo dibuja. El delay(200) da tiempo de soltar el botón para que no cuente de más. Reto extra: haz que al llegar a 9 regrese a 0.",
          "codeSnippet": "int contador = 0;\n\nvoid setup() {\n  for (int pin = 2; pin <= 8; pin++) pinMode(pin, OUTPUT);\n  pinMode(9, INPUT_PULLUP);\n  pinMode(10, INPUT_PULLUP);\n}\n\nvoid loop() {\n  if (digitalRead(9) == LOW && contador < 9) {\n    contador++;\n  }\n  if (digitalRead(10) == LOW && contador > 0) {\n    contador--;\n  }\n  mostrar(contador); // la misma función de la lección 7 del Módulo 1\n  delay(200);\n}"
        },
        {
          "id": 5,
          "type": "code_order",
          "title": "5. Ordena el Código",
          "subtitle": "Subir y bajar",
          "instruction": "Ordena el loop que sube el contador con el botón del pin 9 y lo baja con el botón del pin 10.",
          "lines": [
            {
              "id": 1,
              "text": "void loop() {"
            },
            {
              "id": 2,
              "text": "  if (digitalRead(9) == LOW && contador < 9) {"
            },
            {
              "id": 3,
              "text": "    contador++;"
            },
            {
              "id": 4,
              "text": "  }"
            },
            {
              "id": 5,
              "text": "  if (digitalRead(10) == LOW && contador > 0) {"
            },
            {
              "id": 6,
              "text": "    contador--;"
            },
            {
              "id": 7,
              "text": "  }"
            },
            {
              "id": 8,
              "text": "  mostrar(contador);"
            },
            {
              "id": 9,
              "text": "  delay(200);"
            },
            {
              "id": 10,
              "text": "}"
            }
          ],
          "validOrders": [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            [1, 2, 3, 4, 5, 6, 10, 8, 9, 7],
            [1, 2, 3, 7, 5, 6, 4, 8, 9, 10],
            [1, 2, 3, 7, 5, 6, 10, 8, 9, 4],
            [1, 2, 3, 10, 5, 6, 4, 8, 9, 7],
            [1, 2, 3, 10, 5, 6, 7, 8, 9, 4],
            [1, 5, 6, 7, 2, 3, 4, 8, 9, 10],
            [1, 5, 6, 7, 2, 3, 10, 8, 9, 4],
            [1, 5, 6, 4, 2, 3, 7, 8, 9, 10],
            [1, 5, 6, 4, 2, 3, 10, 8, 9, 7],
            [1, 5, 6, 10, 2, 3, 7, 8, 9, 4],
            [1, 5, 6, 10, 2, 3, 4, 8, 9, 7]
          ]
        },
        {
          "id": 6,
          "type": "matching",
          "title": "6. Conecta el Circuito",
          "subtitle": "Contador y botones",
          "instruction": "Une cada componente o término de la izquierda con su función o definición correcta a la derecha.",
          "pairs": [
            {
              "id": 0,
              "term": "contador++",
              "definition": "Suma 1 al valor guardado en la variable."
            },
            {
              "id": 1,
              "term": "contador--",
              "definition": "Resta 1 al valor guardado en la variable."
            },
            {
              "id": 2,
              "term": "&&",
              "definition": "Significa \"y\": las dos condiciones deben cumplirse."
            },
            {
              "id": 3,
              "term": "delay(200)",
              "definition": "Evita que un solo toque del botón cuente varias veces."
            }
          ]
        },
        {
          "id": 7,
          "type": "quiz",
          "title": "7. Piensa y Responde",
          "subtitle": "Límite del contador",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "Si contador vale 9 y presionas subir, ¿qué pasa?",
          "options": [
            {
              "id": "0",
              "text": "Cambia a 10"
            },
            {
              "id": "1",
              "text": "No pasa nada, porque contador < 9 es falso"
            },
            {
              "id": "2",
              "text": "Se reinicia en 0"
            },
            {
              "id": "3",
              "text": "Se apaga el display"
            }
          ],
          "correct": "1"
        },
        {
          "id": 8,
          "type": "code_order",
          "title": "8. Ordena el Código",
          "subtitle": "Solo subir",
          "instruction": "Ordena el loop que sube el contador con el botón del pin 9 y lo muestra.",
          "lines": [
            {
              "id": 1,
              "text": "void loop() {"
            },
            {
              "id": 2,
              "text": "  if (digitalRead(9) == LOW && contador < 9) {"
            },
            {
              "id": 3,
              "text": "    contador++;"
            },
            {
              "id": 4,
              "text": "  }"
            },
            {
              "id": 5,
              "text": "  mostrar(contador);"
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
          "id": 9,
          "type": "circuit",
          "title": "9. Arma el Circuito",
          "subtitle": "Display listo",
          "instruction": "Conecta los 7 segmentos a los pines 2 al 8 y COM a GND con una resistencia.",
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
          "id": 10,
          "type": "quiz",
          "title": "10. Reto Final",
          "subtitle": "Operador Y",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "¿Qué operador significa \"y\" (deben cumplirse las dos condiciones)?",
          "options": [
            {
              "id": "0",
              "text": "||"
            },
            {
              "id": "1",
              "text": "=="
            },
            {
              "id": "2",
              "text": "&&"
            },
            {
              "id": "3",
              "text": "!="
            }
          ],
          "correct": "2"
        }
      ]
    },
    {
      "id": 4,
      "title": "Lección 4: Repaso del buzzer, ¡la bomba!",
      "description": "Repasar el buzzer. Actividad: añadir un buzzer al circuito anterior y hacer un programa tipo bomba.",
      "tasks": [
        {
          "id": 1,
          "type": "theory",
          "title": "1. Introducción Teórica",
          "subtitle": "Cuenta regresiva con sonido",
          "instruction": "Lee con atención la siguiente información antes de comenzar con los retos.",
          "content": "Sumamos un buzzer al circuito del display para hacer una cuenta regresiva tipo bomba. El display muestra los segundos que quedan, el buzzer hace un \"bip\" en cada número y, cuando llega a 0, suena una alarma larga. Un botón (pin 9) inicia la cuenta y el buzzer va conectado al pin 12."
        },
        {
          "id": 2,
          "type": "quiz",
          "title": "2. Pregunta Rápida",
          "subtitle": "Duración del tono",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "En tone(12, 400, 2000), ¿cuánto dura el sonido?",
          "options": [
            {
              "id": "0",
              "text": "400 segundos"
            },
            {
              "id": "1",
              "text": "2 segundos (2000 milisegundos)"
            },
            {
              "id": "2",
              "text": "12 segundos"
            },
            {
              "id": "3",
              "text": "2000 segundos"
            }
          ],
          "correct": "1"
        },
        {
          "id": 3,
          "type": "circuit",
          "title": "3. Arma el Circuito",
          "subtitle": "Botón y buzzer",
          "instruction": "Conecta el botón al pin 9 y a GND. El buzzer va con el positivo (+) al pin 12 y el negativo (−) a GND.",
          "parts": [
            {
              "id": "btn",
              "type": "button",
              "label": "Iniciar"
            },
            {
              "id": "buz",
              "type": "buzzer"
            }
          ],
          "wires": [
            [
              "uno.D9",
              "btn.a"
            ],
            [
              "btn.b",
              "uno.GND"
            ],
            [
              "uno.D12",
              "buz.pos"
            ],
            [
              "buz.neg",
              "uno.GND"
            ]
          ],
          "branches": []
        },
        {
          "id": 4,
          "type": "example",
          "title": "4. Ejemplo Práctico",
          "subtitle": "La bomba se acelera",
          "instruction": "Observa cómo se implementa y piensa qué pasaría si cambiaras algún valor.",
          "explanation": "Al usar delay(i * 100), la espera se hace más corta cada vez que i baja: con i = 9 espera 900 ms y con i = 1 solo 100 ms. Por eso los bips se aceleran conforme se acerca el final. Reto extra: agrega un LED que parpadee junto con cada bip.",
          "codeSnippet": "void loop() {\n  if (digitalRead(9) == LOW) {\n    for (int i = 9; i > 0; i--) {\n      mostrar(i);\n      tone(12, 1000, 80);\n      delay(i * 100);\n    }\n    mostrar(0);\n    tone(12, 400, 2000);\n    delay(2000);\n  }\n}"
        },
        {
          "id": 5,
          "type": "code_order",
          "title": "5. Ordena el Código",
          "subtitle": "Iniciar la bomba",
          "instruction": "Ordena el loop: al presionar el botón empieza la cuenta de 9 a 0 con un bip por número y una alarma larga al final.",
          "lines": [
            {
              "id": 1,
              "text": "void loop() {"
            },
            {
              "id": 2,
              "text": "  if (digitalRead(9) == LOW) {"
            },
            {
              "id": 3,
              "text": "    for (int i = 9; i >= 0; i--) {"
            },
            {
              "id": 4,
              "text": "      mostrar(i);"
            },
            {
              "id": 5,
              "text": "      tone(12, 1000, 100);"
            },
            {
              "id": 6,
              "text": "      delay(1000);"
            },
            {
              "id": 7,
              "text": "    }"
            },
            {
              "id": 8,
              "text": "    tone(12, 400, 2000);"
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
            [1, 2, 3, 4, 5, 6, 9, 8, 7, 10],
            [1, 2, 3, 4, 5, 6, 9, 8, 10, 7],
            [1, 2, 3, 4, 5, 6, 10, 8, 7, 9],
            [1, 2, 3, 4, 5, 6, 10, 8, 9, 7],
            [1, 2, 3, 5, 4, 6, 7, 8, 9, 10],
            [1, 2, 3, 5, 4, 6, 7, 8, 10, 9],
            [1, 2, 3, 5, 4, 6, 9, 8, 7, 10],
            [1, 2, 3, 5, 4, 6, 9, 8, 10, 7],
            [1, 2, 3, 5, 4, 6, 10, 8, 7, 9],
            [1, 2, 3, 5, 4, 6, 10, 8, 9, 7]
          ]
        },
        {
          "id": 6,
          "type": "matching",
          "title": "6. Conecta el Circuito",
          "subtitle": "La bomba",
          "instruction": "Une cada componente o término de la izquierda con su función o definición correcta a la derecha.",
          "pairs": [
            {
              "id": 0,
              "term": "for con i--",
              "definition": "Recorre los números hacia atrás para la cuenta regresiva."
            },
            {
              "id": 1,
              "term": "tone(12, 1000, 100)",
              "definition": "Bip corto de 100 milisegundos."
            },
            {
              "id": 2,
              "term": "tone(12, 400, 2000)",
              "definition": "Alarma larga y grave al llegar a cero."
            },
            {
              "id": 3,
              "term": "delay(i * 100)",
              "definition": "Espera cada vez menos tiempo conforme baja i."
            }
          ]
        },
        {
          "id": 7,
          "type": "quiz",
          "title": "7. Piensa y Responde",
          "subtitle": "Bip corto",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "¿Qué hace tone(12, 1000, 100)?",
          "options": [
            {
              "id": "0",
              "text": "Hace sonar 12 Hz"
            },
            {
              "id": "1",
              "text": "Hace un bip de 1000 segundos"
            },
            {
              "id": "2",
              "text": "Apaga el pin 12"
            },
            {
              "id": "3",
              "text": "Hace un bip corto de 100 ms en el pin 12"
            }
          ],
          "correct": "3"
        },
        {
          "id": 8,
          "type": "code_order",
          "title": "8. Ordena el Código",
          "subtitle": "Cuenta con bips",
          "instruction": "Ordena el loop: tres bips cortos de cuenta regresiva y una alarma larga al final.",
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
              "text": "    tone(12, 1000, 100);"
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
              "text": "  tone(12, 400, 2000);"
            },
            {
              "id": 7,
              "text": "  delay(3000);"
            },
            {
              "id": 8,
              "text": "}"
            }
          ],
          "validOrders": [
            [1, 2, 3, 4, 5, 6, 7, 8],
            [1, 2, 3, 4, 8, 6, 7, 5]
          ]
        },
        {
          "id": 9,
          "type": "quiz",
          "title": "9. Reto Final",
          "subtitle": "La bomba se acelera",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "Con delay(i * 100), ¿qué pasa conforme i va bajando?",
          "options": [
            {
              "id": "0",
              "text": "Los bips se hacen más rápidos"
            },
            {
              "id": "1",
              "text": "Los bips se hacen más lentos"
            },
            {
              "id": "2",
              "text": "El buzzer se apaga"
            },
            {
              "id": "3",
              "text": "No cambia nada"
            }
          ],
          "correct": "0"
        }
      ]
    },
    {
      "id": 5,
      "title": "Lección 5: Mapeo de datos con map()",
      "description": "Convertir un rango de valores en otro. Actividad: practicar el mapeo en la consola.",
      "tasks": [
        {
          "id": 1,
          "type": "theory",
          "title": "1. Introducción Teórica",
          "subtitle": "Cambiando de escala",
          "instruction": "Lee con atención la siguiente información antes de comenzar con los retos.",
          "content": "A veces un sensor entrega números muy grandes (0 a 1023) pero necesitamos números más pequeños, por ejemplo de 0 a 255 para controlar el brillo de un LED. La instrucción map() convierte un valor de un rango a otro de forma proporcional: map(valor, 0, 1023, 0, 255). Si la lectura está a la mitad (512), el resultado también queda más o menos a la mitad (127)."
        },
        {
          "id": 2,
          "type": "quiz",
          "title": "2. Pregunta Rápida",
          "subtitle": "map()",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "¿Qué resultado da map(1023, 0, 1023, 0, 100)?",
          "options": [
            {
              "id": "0",
              "text": "1023"
            },
            {
              "id": "1",
              "text": "0"
            },
            {
              "id": "2",
              "text": "100"
            },
            {
              "id": "3",
              "text": "50"
            }
          ],
          "correct": "2"
        },
        {
          "id": 3,
          "type": "circuit",
          "title": "3. Arma el Circuito",
          "subtitle": "Potenciómetro en A0",
          "instruction": "Para practicar el mapeo, conecta el potenciómetro: pata 1 a 5V, pata 2 a GND y pata del centro a A0.",
          "parts": [
            {
              "id": "pot",
              "type": "pot"
            }
          ],
          "wires": [
            [
              "uno.5V",
              "pot.1"
            ],
            [
              "pot.2",
              "uno.GND"
            ],
            [
              "pot.w",
              "uno.A0"
            ]
          ],
          "branches": [],
          "hint": "La pata del centro va a la entrada analógica A0."
        },
        {
          "id": 4,
          "type": "example",
          "title": "4. Ejemplo Práctico",
          "subtitle": "Comparar lectura y mapeo",
          "instruction": "Observa cómo se implementa y piensa qué pasaría si cambiaras algún valor.",
          "explanation": "Con un potenciómetro en A0, gira la perilla y mira la consola: cuando la lectura es 0, el porcentaje es 0; cuando es 1023, el porcentaje es 100; y a la mitad (512) es 50. Reto extra: cambia el rango final a 0-180, como los grados de un servomotor.",
          "codeSnippet": "void setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int lectura = analogRead(A0);\n  int porcentaje = map(lectura, 0, 1023, 0, 100);\n  Serial.print(\"Lectura: \");\n  Serial.print(lectura);\n  Serial.print(\"  Porcentaje: \");\n  Serial.println(porcentaje);\n  delay(300);\n}"
        },
        {
          "id": 5,
          "type": "code_order",
          "title": "5. Ordena el Código",
          "subtitle": "Mapear una lectura",
          "instruction": "Ordena el código para leer A0, convertir la lectura de 0-1023 a 0-255 y mostrarla en la consola.",
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
              "text": "  int lectura = analogRead(A0);"
            },
            {
              "id": 6,
              "text": "  int mapeado = map(lectura, 0, 1023, 0, 255);"
            },
            {
              "id": 7,
              "text": "  Serial.println(mapeado);"
            },
            {
              "id": 8,
              "text": "  delay(200);"
            },
            {
              "id": 9,
              "text": "}"
            }
          ],
          "validOrders": [
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 2, 9, 4, 5, 6, 7, 8, 3],
            [4, 5, 6, 7, 8, 9, 1, 2, 3],
            [4, 5, 6, 7, 8, 3, 1, 2, 9]
          ]
        },
        {
          "id": 6,
          "type": "matching",
          "title": "6. Conecta el Circuito",
          "subtitle": "Mapeo",
          "instruction": "Une cada componente o término de la izquierda con su función o definición correcta a la derecha.",
          "pairs": [
            {
              "id": 0,
              "term": "map()",
              "definition": "Convierte un valor de un rango a otro de forma proporcional."
            },
            {
              "id": 1,
              "term": "0 a 1023",
              "definition": "Rango de números que entrega analogRead()."
            },
            {
              "id": 2,
              "term": "0 a 255",
              "definition": "Rango de valores que acepta analogWrite() para el brillo."
            },
            {
              "id": 3,
              "term": "map(512, 0, 1023, 0, 100)",
              "definition": "Da aproximadamente 50, la mitad del rango."
            }
          ]
        },
        {
          "id": 7,
          "type": "quiz",
          "title": "7. Piensa y Responde",
          "subtitle": "map() en cero",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "¿Qué resultado da map(0, 0, 1023, 0, 255)?",
          "options": [
            {
              "id": "0",
              "text": "255"
            },
            {
              "id": "1",
              "text": "0"
            },
            {
              "id": "2",
              "text": "1023"
            },
            {
              "id": "3",
              "text": "127"
            }
          ],
          "correct": "1"
        },
        {
          "id": 8,
          "type": "code_order",
          "title": "8. Ordena el Código",
          "subtitle": "Mapear a grados",
          "instruction": "Ordena el loop para convertir la lectura del potenciómetro a un ángulo de 0 a 180 y mostrarlo.",
          "lines": [
            {
              "id": 1,
              "text": "void loop() {"
            },
            {
              "id": 2,
              "text": "  int giro = analogRead(A0);"
            },
            {
              "id": 3,
              "text": "  int angulo = map(giro, 0, 1023, 0, 180);"
            },
            {
              "id": 4,
              "text": "  Serial.println(angulo);"
            },
            {
              "id": 5,
              "text": "}"
            }
          ],
          "validOrders": [
            [1, 2, 3, 4, 5]
          ]
        },
        {
          "id": 9,
          "type": "quiz",
          "title": "9. Reto Final",
          "subtitle": "Mitad del rango",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "Si la lectura está a la mitad de su rango, ¿qué da map()?",
          "options": [
            {
              "id": "0",
              "text": "Cero"
            },
            {
              "id": "1",
              "text": "El valor máximo"
            },
            {
              "id": "2",
              "text": "Un valor a la mitad del nuevo rango"
            },
            {
              "id": "3",
              "text": "Un error"
            }
          ],
          "correct": "2"
        }
      ]
    },
    {
      "id": 6,
      "title": "Lección 6: Potenciómetro, controla el brillo",
      "description": "Usar un potenciómetro como entrada. Actividad: controlar la intensidad de un LED y una fila de LEDs gradualmente.",
      "tasks": [
        {
          "id": 1,
          "type": "theory",
          "title": "1. Introducción Teórica",
          "subtitle": "Una perilla para el Arduino",
          "instruction": "Lee con atención la siguiente información antes de comenzar con los retos.",
          "content": "El potenciómetro es una resistencia que cambias girando su perilla. Tiene 3 patas: los extremos van a 5V y a GND, y la pata del centro va a la entrada analógica (A0). Al girarlo, el voltaje del centro cambia de 0 a 5 V. Con analogWrite() usamos ese valor para controlar el brillo de un LED conectado a un pin con ~ (pin PWM)."
        },
        {
          "id": 2,
          "type": "quiz",
          "title": "2. Pregunta Rápida",
          "subtitle": "Pata central",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "¿A qué entrada del Arduino se conecta la pata central del potenciómetro?",
          "options": [
            {
              "id": "0",
              "text": "A una entrada analógica, como A0"
            },
            {
              "id": "1",
              "text": "A GND"
            },
            {
              "id": "2",
              "text": "A 5V"
            },
            {
              "id": "3",
              "text": "Al pin 13"
            }
          ],
          "correct": "0"
        },
        {
          "id": 3,
          "type": "circuit",
          "title": "3. Arma el Circuito",
          "subtitle": "LED con brillo ajustable",
          "instruction": "Potenciómetro: pata 1 a 5V, pata 2 a GND y centro a A0. El LED va al pin 9 (marcado con ~) con su resistencia.",
          "parts": [
            {
              "id": "pot",
              "type": "pot"
            },
            {
              "id": "r1",
              "type": "resistor",
              "value": "220 Ω"
            },
            {
              "id": "led1",
              "type": "led",
              "color": "yellow"
            }
          ],
          "wires": [
            [
              "uno.5V",
              "pot.1"
            ],
            [
              "pot.2",
              "uno.GND"
            ],
            [
              "pot.w",
              "uno.A0"
            ]
          ],
          "branches": [
            [
              "uno.D9",
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
          "subtitle": "Barra de LEDs",
          "instruction": "Observa cómo se implementa y piensa qué pasaría si cambiaras algún valor.",
          "explanation": "Convertimos la perilla a un nivel de 0 a 5. Si el nivel es 3, los LEDs 0, 1 y 2 se prenden y los demás se apagan, como una barra de volumen. Reto extra: usa analogWrite() en pines con ~ para que el último LED encienda poco a poco.",
          "codeSnippet": "int leds[] = {8, 9, 10, 11, 12};\n\nvoid setup() {\n  for (int i = 0; i < 5; i++) {\n    pinMode(leds[i], OUTPUT);\n  }\n}\n\nvoid loop() {\n  int giro = analogRead(A0);\n  int nivel = map(giro, 0, 1023, 0, 5);\n  for (int i = 0; i < 5; i++) {\n    digitalWrite(leds[i], i < nivel);\n  }\n}"
        },
        {
          "id": 5,
          "type": "code_order",
          "title": "5. Ordena el Código",
          "subtitle": "Brillo con la perilla",
          "instruction": "Ordena el código para que el brillo del LED del pin 9 dependa de la perilla conectada a A0.",
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
              "text": "  int giro = analogRead(A0);"
            },
            {
              "id": 6,
              "text": "  int brillo = map(giro, 0, 1023, 0, 255);"
            },
            {
              "id": 7,
              "text": "  analogWrite(9, brillo);"
            },
            {
              "id": 8,
              "text": "}"
            }
          ],
          "validOrders": [
            [1, 2, 3, 4, 5, 6, 7, 8],
            [1, 2, 8, 4, 5, 6, 7, 3],
            [4, 5, 6, 7, 8, 1, 2, 3],
            [4, 5, 6, 7, 3, 1, 2, 8]
          ]
        },
        {
          "id": 6,
          "type": "matching",
          "title": "6. Conecta el Circuito",
          "subtitle": "Potenciómetro",
          "instruction": "Une cada componente o término de la izquierda con su función o definición correcta a la derecha.",
          "pairs": [
            {
              "id": 0,
              "term": "Potenciómetro",
              "definition": "Resistencia que cambia al girar su perilla."
            },
            {
              "id": 1,
              "term": "analogWrite()",
              "definition": "Controla el brillo con valores de 0 a 255."
            },
            {
              "id": 2,
              "term": "Pin con ~",
              "definition": "Pin PWM, capaz de dar brillos intermedios."
            },
            {
              "id": 3,
              "term": "Pata central",
              "definition": "Entrega el voltaje variable a la entrada analógica."
            }
          ]
        },
        {
          "id": 7,
          "type": "quiz",
          "title": "7. Piensa y Responde",
          "subtitle": "Pines PWM",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "¿Qué pines del Arduino UNO pueden usar analogWrite()?",
          "options": [
            {
              "id": "0",
              "text": "Todos los pines digitales"
            },
            {
              "id": "1",
              "text": "Solo A0 a A5"
            },
            {
              "id": "2",
              "text": "Los marcados con ~ (3, 5, 6, 9, 10 y 11)"
            },
            {
              "id": "3",
              "text": "Solo el pin 13"
            }
          ],
          "correct": "2"
        },
        {
          "id": 8,
          "type": "code_order",
          "title": "8. Ordena el Código",
          "subtitle": "Barra de LEDs",
          "instruction": "Ordena el loop que enciende una barra de 3 LEDs (pines 8, 9 y 10) según la perilla.",
          "lines": [
            {
              "id": 1,
              "text": "void loop() {"
            },
            {
              "id": 2,
              "text": "  int giro = analogRead(A0);"
            },
            {
              "id": 3,
              "text": "  int nivel = map(giro, 0, 1023, 0, 3);"
            },
            {
              "id": 4,
              "text": "  for (int i = 0; i < 3; i++) {"
            },
            {
              "id": 5,
              "text": "    digitalWrite(8 + i, i < nivel);"
            },
            {
              "id": 6,
              "text": "  }"
            },
            {
              "id": 7,
              "text": "}"
            }
          ],
          "validOrders": [
            [1, 2, 3, 4, 5, 6, 7],
            [1, 2, 3, 4, 5, 7, 6]
          ]
        },
        {
          "id": 9,
          "type": "circuit",
          "title": "9. Arma el Circuito",
          "subtitle": "Barra de 3 LEDs",
          "instruction": "Potenciómetro a 5V, GND y A0. Tres LEDs en los pines 8, 9 y 10, cada uno con su resistencia.",
          "parts": [
            {
              "id": "pot",
              "type": "pot"
            },
            {
              "id": "r1",
              "type": "resistor",
              "value": "220 Ω"
            },
            {
              "id": "led1",
              "type": "led",
              "color": "green"
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
              "color": "red"
            }
          ],
          "wires": [
            [
              "uno.5V",
              "pot.1"
            ],
            [
              "pot.2",
              "uno.GND"
            ],
            [
              "pot.w",
              "uno.A0"
            ]
          ],
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
          "subtitle": "Brillo en cero",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "Si ejecutas analogWrite(9, 0), ¿cómo está el LED?",
          "options": [
            {
              "id": "0",
              "text": "Brillando al máximo"
            },
            {
              "id": "1",
              "text": "Brillando a la mitad"
            },
            {
              "id": "2",
              "text": "Parpadeando"
            },
            {
              "id": "3",
              "text": "Apagado"
            }
          ],
          "correct": "3"
        }
      ]
    },
    {
      "id": 7,
      "title": "Lección 7: Termorresistencia y temperatura",
      "description": "Medir temperatura con un sensor. Actividad: prender un LED a cierta temperatura.",
      "tasks": [
        {
          "id": 1,
          "type": "theory",
          "title": "1. Introducción Teórica",
          "subtitle": "El Arduino siente el calor",
          "instruction": "Lee con atención la siguiente información antes de comenzar con los retos.",
          "content": "Una termorresistencia es un sensor que cambia su resistencia cuando cambia la temperatura. En Tinkercad usaremos el sensor TMP36, que entrega un voltaje según el calor: 0.5 V equivale a 0 °C y sube 0.01 V por cada grado. Leemos ese voltaje con analogRead() y lo convertimos a grados Celsius con una fórmula. Así podemos prender un LED cuando haga demasiado calor."
        },
        {
          "id": 2,
          "type": "quiz",
          "title": "2. Pregunta Rápida",
          "subtitle": "TMP36",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "En el sensor TMP36, ¿cuál es el voltaje cuando hay 25 °C?",
          "options": [
            {
              "id": "0",
              "text": "0.25 V"
            },
            {
              "id": "1",
              "text": "2.5 V"
            },
            {
              "id": "2",
              "text": "25 V"
            },
            {
              "id": "3",
              "text": "0.75 V"
            }
          ],
          "correct": "3"
        },
        {
          "id": 3,
          "type": "circuit",
          "title": "3. Arma el Circuito",
          "subtitle": "Conectar el TMP36",
          "instruction": "Conecta la pata 5V del sensor a 5V, la pata OUT a A0 y la pata GND a GND.",
          "parts": [
            {
              "id": "tmp",
              "type": "tmp36"
            }
          ],
          "wires": [
            [
              "uno.5V",
              "tmp.vcc"
            ],
            [
              "tmp.out",
              "uno.A0"
            ],
            [
              "tmp.gnd",
              "uno.GND"
            ]
          ],
          "branches": [],
          "hint": "La pata del centro (OUT) entrega el voltaje que depende de la temperatura.",
          "failTip": "Si conectas mal la alimentación, el sensor se calienta y se quema."
        },
        {
          "id": 4,
          "type": "example",
          "title": "4. Ejemplo Práctico",
          "subtitle": "Termómetro en la consola",
          "instruction": "Observa cómo se implementa y piensa qué pasaría si cambiaras algún valor.",
          "explanation": "Si el TMP36 entrega 0.75 V, la fórmula da (0.75 − 0.5) × 100 = 25 °C. En Tinkercad puedes cambiar la temperatura del sensor con el mouse y ver cómo cambian los números de la consola. Reto extra: si terminas rápido, prende un LED distinto para cada rango de temperatura.",
          "codeSnippet": "void setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int lectura = analogRead(A0);\n  float voltaje = lectura * (5.0 / 1023.0);\n  float temperatura = (voltaje - 0.5) * 100;\n  Serial.print(\"Temperatura: \");\n  Serial.print(temperatura);\n  Serial.println(\" C\");\n  delay(500);\n}"
        },
        {
          "id": 5,
          "type": "code_order",
          "title": "5. Ordena el Código",
          "subtitle": "Alerta de calor",
          "instruction": "Ordena el código para prender el LED del pin 8 cuando la temperatura pase de 30 °C.",
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
              "text": "  int lectura = analogRead(A0);"
            },
            {
              "id": 6,
              "text": "  float voltaje = lectura * (5.0 / 1023.0);"
            },
            {
              "id": 7,
              "text": "  float temperatura = (voltaje - 0.5) * 100;"
            },
            {
              "id": 8,
              "text": "  if (temperatura > 30) {"
            },
            {
              "id": 9,
              "text": "    digitalWrite(8, HIGH);"
            },
            {
              "id": 10,
              "text": "  } else {"
            },
            {
              "id": 11,
              "text": "    digitalWrite(8, LOW);"
            },
            {
              "id": 12,
              "text": "  }"
            },
            {
              "id": 13,
              "text": "}"
            }
          ],
          "validOrders": [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 12],
            [1, 2, 12, 4, 5, 6, 7, 8, 9, 10, 11, 3, 13],
            [1, 2, 12, 4, 5, 6, 7, 8, 9, 10, 11, 13, 3],
            [1, 2, 13, 4, 5, 6, 7, 8, 9, 10, 11, 3, 12],
            [1, 2, 13, 4, 5, 6, 7, 8, 9, 10, 11, 12, 3],
            [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3],
            [4, 5, 6, 7, 8, 9, 10, 11, 12, 3, 1, 2, 13],
            [4, 5, 6, 7, 8, 9, 10, 11, 13, 12, 1, 2, 3],
            [4, 5, 6, 7, 8, 9, 10, 11, 13, 3, 1, 2, 12],
            [4, 5, 6, 7, 8, 9, 10, 11, 3, 12, 1, 2, 13],
            [4, 5, 6, 7, 8, 9, 10, 11, 3, 13, 1, 2, 12]
          ]
        },
        {
          "id": 6,
          "type": "matching",
          "title": "6. Conecta el Circuito",
          "subtitle": "Temperatura",
          "instruction": "Une cada componente o término de la izquierda con su función o definición correcta a la derecha.",
          "pairs": [
            {
              "id": 0,
              "term": "Termorresistencia",
              "definition": "Sensor que cambia su resistencia con la temperatura."
            },
            {
              "id": 1,
              "term": "TMP36",
              "definition": "Sensor de temperatura que usamos en Tinkercad."
            },
            {
              "id": 2,
              "term": "(voltaje - 0.5) * 100",
              "definition": "Fórmula que convierte el voltaje del TMP36 a grados Celsius."
            },
            {
              "id": 3,
              "term": "float",
              "definition": "Tipo de dato para guardar números con decimales."
            }
          ]
        },
        {
          "id": 7,
          "type": "quiz",
          "title": "7. Piensa y Responde",
          "subtitle": "Voltaje y grados",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "Si el TMP36 entrega 0.5 V, ¿cuántos grados Celsius hay?",
          "options": [
            {
              "id": "0",
              "text": "0 °C"
            },
            {
              "id": "1",
              "text": "5 °C"
            },
            {
              "id": "2",
              "text": "50 °C"
            },
            {
              "id": "3",
              "text": "25 °C"
            }
          ],
          "correct": "0"
        },
        {
          "id": 8,
          "type": "code_order",
          "title": "8. Ordena el Código",
          "subtitle": "Leer la temperatura",
          "instruction": "Ordena el loop para calcular la temperatura y mostrarla en la consola.",
          "lines": [
            {
              "id": 1,
              "text": "void loop() {"
            },
            {
              "id": 2,
              "text": "  float v = analogRead(A0) * (5.0 / 1023.0);"
            },
            {
              "id": 3,
              "text": "  float temp = (v - 0.5) * 100;"
            },
            {
              "id": 4,
              "text": "  Serial.println(temp);"
            },
            {
              "id": 5,
              "text": "  delay(500);"
            },
            {
              "id": 6,
              "text": "}"
            }
          ],
          "validOrders": [
            [1, 2, 3, 4, 5, 6]
          ]
        },
        {
          "id": 9,
          "type": "circuit",
          "title": "9. Arma el Circuito",
          "subtitle": "Alarma de calor",
          "instruction": "Conecta el TMP36 (5V, A0 y GND) y un LED rojo al pin 8 con su resistencia.",
          "parts": [
            {
              "id": "tmp",
              "type": "tmp36"
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
              "uno.5V",
              "tmp.vcc"
            ],
            [
              "tmp.out",
              "uno.A0"
            ],
            [
              "tmp.gnd",
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
          "id": 10,
          "type": "quiz",
          "title": "10. Reto Final",
          "subtitle": "Condición de calor",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "Para prender el LED cuando haya más de 30 °C, ¿qué condición usas?",
          "options": [
            {
              "id": "0",
              "text": "if (temperatura < 30)"
            },
            {
              "id": "1",
              "text": "if (temperatura > 30)"
            },
            {
              "id": "2",
              "text": "if (temperatura = 30)"
            },
            {
              "id": "3",
              "text": "if (voltaje > 30)"
            }
          ],
          "correct": "1"
        }
      ]
    },
    {
      "id": 8,
      "title": "Lección 8: Fotorresistencia, sentir la luz",
      "description": "Medir la luz con una fotorresistencia. Actividad: prender un LED cuando hay cierta cantidad de luz.",
      "tasks": [
        {
          "id": 1,
          "type": "theory",
          "title": "1. Introducción Teórica",
          "subtitle": "Un sensor de luz",
          "instruction": "Lee con atención la siguiente información antes de comenzar con los retos.",
          "content": "La fotorresistencia (LDR) cambia su resistencia según la luz: con mucha luz tiene poca resistencia y con oscuridad tiene mucha. Para leerla la conectamos junto con una resistencia fija de 10 kΩ formando un divisor de voltaje, así el pin A0 recibe un voltaje que cambia con la luz. En nuestro circuito, más luz da una lectura más alta y menos luz da una lectura más baja."
        },
        {
          "id": 2,
          "type": "quiz",
          "title": "2. Pregunta Rápida",
          "subtitle": "Luz y lectura",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "En nuestro circuito, ¿qué lectura da la fotorresistencia cuando está oscuro?",
          "options": [
            {
              "id": "0",
              "text": "Una lectura alta (cercana a 1023)"
            },
            {
              "id": "1",
              "text": "Una lectura baja (cercana a 0)"
            },
            {
              "id": "2",
              "text": "Siempre 512"
            },
            {
              "id": "3",
              "text": "No da ninguna lectura"
            }
          ],
          "correct": "1"
        },
        {
          "id": 3,
          "type": "circuit",
          "title": "3. Arma el Circuito",
          "subtitle": "Sensor de luz",
          "instruction": "Conecta la fotorresistencia entre 5V y A0, y la resistencia de 10 kΩ entre A0 y GND.",
          "parts": [
            {
              "id": "ldr",
              "type": "ldr"
            },
            {
              "id": "r1",
              "type": "resistor",
              "value": "10 kΩ"
            }
          ],
          "wires": [
            [
              "uno.5V",
              "ldr.a"
            ],
            [
              "ldr.b",
              "uno.A0"
            ],
            [
              "r1.a",
              "uno.A0"
            ],
            [
              "r1.b",
              "uno.GND"
            ]
          ],
          "branches": [],
          "hint": "El punto A0 recibe un cable de la fotorresistencia y otro de la resistencia de 10 kΩ.",
          "failTip": "Sin la resistencia fija el Arduino no puede leer la luz."
        },
        {
          "id": 4,
          "type": "example",
          "title": "4. Ejemplo Práctico",
          "subtitle": "Ajustando el umbral",
          "instruction": "Observa cómo se implementa y piensa qué pasaría si cambiaras algún valor.",
          "explanation": "Guardamos el límite en la constante umbral para cambiarlo fácilmente. Mira la consola: con la luz del salón verás un número, y al tapar la fotorresistencia con la mano el número baja. Elige un umbral entre esos dos valores para que tu lámpara se prenda justo cuando tú quieras.",
          "codeSnippet": "const int umbral = 300;\n\nvoid setup() {\n  Serial.begin(9600);\n  pinMode(8, OUTPUT);\n}\n\nvoid loop() {\n  int luz = analogRead(A0);\n  Serial.println(luz);\n  if (luz < umbral) {\n    digitalWrite(8, HIGH);\n  } else {\n    digitalWrite(8, LOW);\n  }\n  delay(200);\n}"
        },
        {
          "id": 5,
          "type": "code_order",
          "title": "5. Ordena el Código",
          "subtitle": "Lámpara automática",
          "instruction": "Ordena el código para prender el LED del pin 8 cuando la lectura de luz sea menor a 300 (está oscuro).",
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
              "text": "  int luz = analogRead(A0);"
            },
            {
              "id": 6,
              "text": "  if (luz < 300) {"
            },
            {
              "id": 7,
              "text": "    digitalWrite(8, HIGH);"
            },
            {
              "id": 8,
              "text": "  } else {"
            },
            {
              "id": 9,
              "text": "    digitalWrite(8, LOW);"
            },
            {
              "id": 10,
              "text": "  }"
            },
            {
              "id": 11,
              "text": "}"
            }
          ],
          "validOrders": [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 10],
            [1, 2, 10, 4, 5, 6, 7, 8, 9, 3, 11],
            [1, 2, 10, 4, 5, 6, 7, 8, 9, 11, 3],
            [1, 2, 11, 4, 5, 6, 7, 8, 9, 3, 10],
            [1, 2, 11, 4, 5, 6, 7, 8, 9, 10, 3],
            [4, 5, 6, 7, 8, 9, 10, 11, 1, 2, 3],
            [4, 5, 6, 7, 8, 9, 10, 3, 1, 2, 11],
            [4, 5, 6, 7, 8, 9, 11, 10, 1, 2, 3],
            [4, 5, 6, 7, 8, 9, 11, 3, 1, 2, 10],
            [4, 5, 6, 7, 8, 9, 3, 10, 1, 2, 11],
            [4, 5, 6, 7, 8, 9, 3, 11, 1, 2, 10]
          ]
        },
        {
          "id": 6,
          "type": "matching",
          "title": "6. Conecta el Circuito",
          "subtitle": "Sensor de luz",
          "instruction": "Une cada componente o término de la izquierda con su función o definición correcta a la derecha.",
          "pairs": [
            {
              "id": 0,
              "term": "Fotorresistencia (LDR)",
              "definition": "Cambia su resistencia según la cantidad de luz."
            },
            {
              "id": 1,
              "term": "Divisor de voltaje",
              "definition": "Dos resistencias que reparten el voltaje para poder leerlo."
            },
            {
              "id": 2,
              "term": "Umbral",
              "definition": "Valor límite con el que decidimos qué hacer."
            },
            {
              "id": 3,
              "term": "Resistencia de 10 kΩ",
              "definition": "Resistencia fija que acompaña a la fotorresistencia."
            }
          ]
        },
        {
          "id": 7,
          "type": "quiz",
          "title": "7. Piensa y Responde",
          "subtitle": "Mucha luz",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "En nuestro circuito, ¿qué lectura esperas con mucha luz?",
          "options": [
            {
              "id": "0",
              "text": "Una lectura baja"
            },
            {
              "id": "1",
              "text": "Siempre cero"
            },
            {
              "id": "2",
              "text": "Una lectura alta"
            },
            {
              "id": "3",
              "text": "Un error"
            }
          ],
          "correct": "2"
        },
        {
          "id": 8,
          "type": "code_order",
          "title": "8. Ordena el Código",
          "subtitle": "Decidir con la luz",
          "instruction": "Ordena el loop para prender el LED del pin 8 cuando la luz sea menor al umbral.",
          "lines": [
            {
              "id": 1,
              "text": "void loop() {"
            },
            {
              "id": 2,
              "text": "  int luz = analogRead(A0);"
            },
            {
              "id": 3,
              "text": "  if (luz < umbral) {"
            },
            {
              "id": 4,
              "text": "    digitalWrite(8, HIGH);"
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
          "type": "circuit",
          "title": "9. Arma el Circuito",
          "subtitle": "Lámpara automática",
          "instruction": "Arma el divisor de la fotorresistencia (con la resistencia de 10 kΩ) y agrega un LED al pin 8 con su resistencia de 220 Ω.",
          "parts": [
            {
              "id": "ldr",
              "type": "ldr"
            },
            {
              "id": "r1",
              "type": "resistor",
              "value": "10 kΩ"
            },
            {
              "id": "r2",
              "type": "resistor",
              "value": "220 Ω"
            },
            {
              "id": "led1",
              "type": "led",
              "color": "yellow"
            }
          ],
          "wires": [
            [
              "uno.5V",
              "ldr.a"
            ],
            [
              "ldr.b",
              "uno.A0"
            ],
            [
              "r1.a",
              "uno.A0"
            ],
            [
              "r1.b",
              "uno.GND"
            ]
          ],
          "branches": [
            [
              "uno.D8",
              "r2",
              "led1"
            ]
          ],
          "hint": "La resistencia de 10 kΩ va al sensor; la de 220 Ω va al LED.",
          "failTip": "Cada resistencia tiene su trabajo: 10 kΩ para el sensor y 220 Ω para el LED."
        },
        {
          "id": 10,
          "type": "quiz",
          "title": "10. Reto Final",
          "subtitle": "Lámpara al revés",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "Si tu lámpara se prende con mucha luz y se apaga en la oscuridad, ¿qué corriges?",
          "options": [
            {
              "id": "0",
              "text": "Cambiar el pin 8 por el 9"
            },
            {
              "id": "1",
              "text": "Quitar la fotorresistencia"
            },
            {
              "id": "2",
              "text": "Cambiar HIGH por 1023"
            },
            {
              "id": "3",
              "text": "Cambiar el signo < por >"
            }
          ],
          "correct": "3"
        }
      ]
    },
    {
      "id": 9,
      "title": "Lección 9: Sensor de nivel de agua, semáforo de LEDs",
      "description": "Leer el nivel de agua. Actividad: un semáforo de LEDs que depende del nivel (simulado con un potenciómetro en Tinkercad).",
      "tasks": [
        {
          "id": 1,
          "type": "theory",
          "title": "1. Introducción Teórica",
          "subtitle": "¿Cuánta agua hay?",
          "instruction": "Lee con atención la siguiente información antes de comenzar con los retos.",
          "content": "El sensor de nivel de agua tiene líneas metálicas: entre más agua las toca, más corriente conduce y más alta es la lectura en A0. Así sabemos qué tan lleno está un recipiente. Haremos un semáforo: LED verde si hay mucha agua, amarillo si hay poca y rojo si está casi vacío. Recuerda que solo se moja la parte de las líneas del sensor, nunca la parte con los componentes. En Tinkercad no existe este sensor, así que lo simulamos con un potenciómetro."
        },
        {
          "id": 2,
          "type": "quiz",
          "title": "2. Pregunta Rápida",
          "subtitle": "Nivel y lectura",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "Si el nivel del agua sube, ¿qué pasa con la lectura de analogRead()?",
          "options": [
            {
              "id": "0",
              "text": "Aumenta"
            },
            {
              "id": "1",
              "text": "Disminuye"
            },
            {
              "id": "2",
              "text": "Se queda siempre en 0"
            },
            {
              "id": "3",
              "text": "Se vuelve negativa"
            }
          ],
          "correct": "0"
        },
        {
          "id": 3,
          "type": "circuit",
          "title": "3. Arma el Circuito",
          "subtitle": "Conectar el sensor de nivel",
          "instruction": "Conecta el pin + del sensor a 5V, el pin − a GND y el pin S a la entrada A0.",
          "parts": [
            {
              "id": "w",
              "type": "water"
            }
          ],
          "wires": [
            [
              "uno.5V",
              "w.pos"
            ],
            [
              "w.neg",
              "uno.GND"
            ],
            [
              "w.s",
              "uno.A0"
            ]
          ],
          "branches": [],
          "hint": "El pin S (señal) va a la entrada analógica.",
          "failTip": "Cuidado con invertir + y −."
        },
        {
          "id": 4,
          "type": "example",
          "title": "4. Ejemplo Práctico",
          "subtitle": "Semáforo con LEDs que se apagan",
          "instruction": "Observa cómo se implementa y piensa qué pasaría si cambiaras algún valor.",
          "explanation": "Antes de decidir apagamos los tres LEDs, así siempre queda prendido solo el que corresponde al nivel actual. Si usas el potenciómetro en Tinkercad, gira la perilla para simular que el agua sube y baja. Reto extra: cambia los valores 600 y 300 para ajustar cuándo cambia cada color.",
          "codeSnippet": "void setup() {\n  pinMode(8, OUTPUT);\n  pinMode(9, OUTPUT);\n  pinMode(10, OUTPUT);\n}\n\nvoid loop() {\n  int nivel = analogRead(A0);\n  digitalWrite(8, LOW);\n  digitalWrite(9, LOW);\n  digitalWrite(10, LOW);\n  if (nivel > 600) {\n    digitalWrite(10, HIGH);\n  } else if (nivel > 300) {\n    digitalWrite(9, HIGH);\n  } else {\n    digitalWrite(8, HIGH);\n  }\n  delay(100);\n}"
        },
        {
          "id": 5,
          "type": "code_order",
          "title": "5. Ordena el Código",
          "subtitle": "Semáforo de agua",
          "instruction": "Ordena el loop: verde (pin 10) si el nivel es mayor a 600, amarillo (pin 9) si es mayor a 300 y rojo (pin 8) en otro caso.",
          "lines": [
            {
              "id": 1,
              "text": "void loop() {"
            },
            {
              "id": 2,
              "text": "  int nivel = analogRead(A0);"
            },
            {
              "id": 3,
              "text": "  if (nivel > 600) {"
            },
            {
              "id": 4,
              "text": "    digitalWrite(10, HIGH);"
            },
            {
              "id": 5,
              "text": "  } else if (nivel > 300) {"
            },
            {
              "id": 6,
              "text": "    digitalWrite(9, HIGH);"
            },
            {
              "id": 7,
              "text": "  } else {"
            },
            {
              "id": 8,
              "text": "    digitalWrite(8, HIGH);"
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
            [1, 2, 3, 4, 5, 6, 7, 8, 10, 9]
          ]
        },
        {
          "id": 6,
          "type": "matching",
          "title": "6. Conecta el Circuito",
          "subtitle": "Nivel de agua",
          "instruction": "Une cada componente o término de la izquierda con su función o definición correcta a la derecha.",
          "pairs": [
            {
              "id": 0,
              "term": "Sensor de nivel de agua",
              "definition": "Mide qué tan alto llega el agua en un recipiente."
            },
            {
              "id": 1,
              "term": "else if",
              "definition": "Revisa otra condición si la anterior no se cumplió."
            },
            {
              "id": 2,
              "term": "LED verde",
              "definition": "Indica que hay un nivel de agua alto."
            },
            {
              "id": 3,
              "term": "LED rojo",
              "definition": "Indica que el nivel de agua es crítico (muy bajo)."
            }
          ]
        },
        {
          "id": 7,
          "type": "quiz",
          "title": "7. Piensa y Responde",
          "subtitle": "Semáforo de agua",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "Si el agua sube en nuestro semáforo, ¿qué LED se prende?",
          "options": [
            {
              "id": "0",
              "text": "El verde"
            },
            {
              "id": "1",
              "text": "El rojo"
            },
            {
              "id": "2",
              "text": "El amarillo"
            },
            {
              "id": "3",
              "text": "Ninguno"
            }
          ],
          "correct": "0"
        },
        {
          "id": 8,
          "type": "code_order",
          "title": "8. Ordena el Código",
          "subtitle": "Lleno o poco",
          "instruction": "Ordena el loop para escribir \"Lleno\" si el nivel pasa de 600 y \"Poco\" en otro caso.",
          "lines": [
            {
              "id": 1,
              "text": "void loop() {"
            },
            {
              "id": 2,
              "text": "  int nivel = analogRead(A0);"
            },
            {
              "id": 3,
              "text": "  if (nivel > 600) {"
            },
            {
              "id": 4,
              "text": "    Serial.println(\"Lleno\");"
            },
            {
              "id": 5,
              "text": "  } else {"
            },
            {
              "id": 6,
              "text": "    Serial.println(\"Poco\");"
            },
            {
              "id": 7,
              "text": "  }"
            },
            {
              "id": 8,
              "text": "}"
            }
          ],
          "validOrders": [
            [1, 2, 3, 4, 5, 6, 7, 8],
            [1, 2, 3, 4, 5, 6, 8, 7]
          ]
        },
        {
          "id": 9,
          "type": "circuit",
          "title": "9. Arma el Circuito",
          "subtitle": "Semáforo con potenciómetro",
          "instruction": "Simula el sensor con un potenciómetro (5V, GND y A0). LED rojo al pin 8, amarillo al 9 y verde al 10, cada uno con su resistencia.",
          "parts": [
            {
              "id": "pot",
              "type": "pot",
              "label": "Potenciómetro (nivel)"
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
          "wires": [
            [
              "uno.5V",
              "pot.1"
            ],
            [
              "pot.2",
              "uno.GND"
            ],
            [
              "pot.w",
              "uno.A0"
            ]
          ],
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
          "subtitle": "Cuidado con el agua",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "¿Qué parte del sensor de nivel de agua debe mojarse?",
          "options": [
            {
              "id": "0",
              "text": "Toda la placa, con sus componentes"
            },
            {
              "id": "1",
              "text": "Solo las líneas metálicas de abajo"
            },
            {
              "id": "2",
              "text": "Solo los pines"
            },
            {
              "id": "3",
              "text": "Ninguna parte"
            }
          ],
          "correct": "1"
        }
      ]
    },
    {
      "id": 10,
      "title": "Lección 10: Alarma de nivel crítico",
      "description": "Repaso de buzzer. Actividad: hacer que el buzzer pite cuando se llegue a un nivel de agua crítico (simulado con un potenciómetro).",
      "tasks": [
        {
          "id": 1,
          "type": "theory",
          "title": "1. Introducción Teórica",
          "subtitle": "Una alarma para el agua",
          "instruction": "Lee con atención la siguiente información antes de comenzar con los retos.",
          "content": "Cerramos el módulo con una alarma: si el nivel de agua baja a un punto crítico, el buzzer pita para avisarnos. Combinamos todo lo aprendido: leer un sensor con analogRead(), decidir con if, y hacer sonar el buzzer con tone(). Recuerda que en Tinkercad el sensor de nivel se simula con un potenciómetro en A0 y el buzzer va al pin 12."
        },
        {
          "id": 2,
          "type": "quiz",
          "title": "2. Pregunta Rápida",
          "subtitle": "noTone()",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "¿Qué instrucción apaga el sonido del buzzer conectado al pin 12?",
          "options": [
            {
              "id": "0",
              "text": "noTone(12);"
            },
            {
              "id": "1",
              "text": "stopSound(12);"
            },
            {
              "id": "2",
              "text": "digitalRead(12);"
            },
            {
              "id": "3",
              "text": "delay(12);"
            }
          ],
          "correct": "0"
        },
        {
          "id": 3,
          "type": "circuit",
          "title": "3. Arma el Circuito",
          "subtitle": "Potenciómetro y buzzer",
          "instruction": "Potenciómetro a 5V, GND y A0 (simula el nivel de agua). Buzzer: positivo (+) al pin 12 y negativo (−) a GND.",
          "parts": [
            {
              "id": "pot",
              "type": "pot",
              "label": "Potenciómetro (nivel)"
            },
            {
              "id": "buz",
              "type": "buzzer"
            }
          ],
          "wires": [
            [
              "uno.5V",
              "pot.1"
            ],
            [
              "pot.2",
              "uno.GND"
            ],
            [
              "pot.w",
              "uno.A0"
            ],
            [
              "uno.D12",
              "buz.pos"
            ],
            [
              "buz.neg",
              "uno.GND"
            ]
          ],
          "branches": []
        },
        {
          "id": 4,
          "type": "example",
          "title": "4. Ejemplo Práctico",
          "subtitle": "Alarma intermitente con LED",
          "instruction": "Observa cómo se implementa y piensa qué pasaría si cambiaras algún valor.",
          "explanation": "Cuando el nivel está por debajo del punto crítico, el LED rojo parpadea y el buzzer hace bips cortos: ¡una alarma que se ve y se escucha! Si el nivel vuelve a subir, todo se apaga. Reto extra: haz que los bips sean más rápidos mientras más bajo esté el nivel.",
          "codeSnippet": "const int critico = 200;\n\nvoid setup() {\n  pinMode(8, OUTPUT);\n  pinMode(12, OUTPUT);\n}\n\nvoid loop() {\n  int nivel = analogRead(A0);\n  if (nivel < critico) {\n    digitalWrite(8, HIGH);\n    tone(12, 1000, 200);\n    delay(200);\n    digitalWrite(8, LOW);\n    delay(200);\n  } else {\n    digitalWrite(8, LOW);\n    noTone(12);\n  }\n}"
        },
        {
          "id": 5,
          "type": "code_order",
          "title": "5. Ordena el Código",
          "subtitle": "Pita si el nivel es crítico",
          "instruction": "Ordena el código para que el buzzer suene cuando el nivel sea menor a 200 y se calle cuando no.",
          "lines": [
            {
              "id": 1,
              "text": "const int critico = 200;"
            },
            {
              "id": 2,
              "text": "void setup() {"
            },
            {
              "id": 3,
              "text": "  pinMode(12, OUTPUT);"
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
              "text": "  int nivel = analogRead(A0);"
            },
            {
              "id": 7,
              "text": "  if (nivel < critico) {"
            },
            {
              "id": 8,
              "text": "    tone(12, 1000);"
            },
            {
              "id": 9,
              "text": "  } else {"
            },
            {
              "id": 10,
              "text": "    noTone(12);"
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
            [1, 2, 3, 11, 5, 6, 7, 8, 9, 10, 4, 12],
            [1, 2, 3, 11, 5, 6, 7, 8, 9, 10, 12, 4],
            [1, 2, 3, 12, 5, 6, 7, 8, 9, 10, 4, 11],
            [1, 2, 3, 12, 5, 6, 7, 8, 9, 10, 11, 4],
            [2, 3, 4, 1, 5, 6, 7, 8, 9, 10, 11, 12],
            [2, 3, 4, 1, 5, 6, 7, 8, 9, 10, 12, 11],
            [2, 3, 11, 1, 5, 6, 7, 8, 9, 10, 4, 12],
            [2, 3, 11, 1, 5, 6, 7, 8, 9, 10, 12, 4],
            [2, 3, 12, 1, 5, 6, 7, 8, 9, 10, 4, 11],
            [2, 3, 12, 1, 5, 6, 7, 8, 9, 10, 11, 4]
          ]
        },
        {
          "id": 6,
          "type": "matching",
          "title": "6. Conecta el Circuito",
          "subtitle": "La alarma",
          "instruction": "Une cada componente o término de la izquierda con su función o definición correcta a la derecha.",
          "pairs": [
            {
              "id": 0,
              "term": "Nivel crítico",
              "definition": "Punto bajo en el que debe sonar la alarma."
            },
            {
              "id": 1,
              "term": "const int critico",
              "definition": "Guarda el valor límite sin que cambie."
            },
            {
              "id": 2,
              "term": "tone(12, 1000)",
              "definition": "Hace sonar el buzzer sin parar hasta que lo apagues."
            },
            {
              "id": 3,
              "term": "noTone(12)",
              "definition": "Silencia el buzzer del pin 12."
            }
          ]
        },
        {
          "id": 7,
          "type": "quiz",
          "title": "7. Piensa y Responde",
          "subtitle": "Condición de alarma",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "¿Qué condición hace sonar la alarma de nivel crítico?",
          "options": [
            {
              "id": "0",
              "text": "nivel < critico"
            },
            {
              "id": "1",
              "text": "nivel > critico"
            },
            {
              "id": "2",
              "text": "nivel == 1023"
            },
            {
              "id": "3",
              "text": "nivel = 0"
            }
          ],
          "correct": "0"
        },
        {
          "id": 8,
          "type": "code_order",
          "title": "8. Ordena el Código",
          "subtitle": "Alarma con bips",
          "instruction": "Ordena el loop para que el buzzer pite cuando el nivel baje de 200.",
          "lines": [
            {
              "id": 1,
              "text": "void loop() {"
            },
            {
              "id": 2,
              "text": "  int nivel = analogRead(A0);"
            },
            {
              "id": 3,
              "text": "  if (nivel < 200) {"
            },
            {
              "id": 4,
              "text": "    tone(12, 1000, 200);"
            },
            {
              "id": 5,
              "text": "  }"
            },
            {
              "id": 6,
              "text": "  delay(300);"
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
          "type": "circuit",
          "title": "9. Arma el Circuito",
          "subtitle": "Alarma completa",
          "instruction": "Agrega un LED rojo al pin 8 con su resistencia, además del potenciómetro (5V, GND, A0) y el buzzer (pin 12 y GND).",
          "parts": [
            {
              "id": "pot",
              "type": "pot",
              "label": "Potenciómetro (nivel)"
            },
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
              "uno.5V",
              "pot.1"
            ],
            [
              "pot.2",
              "uno.GND"
            ],
            [
              "pot.w",
              "uno.A0"
            ],
            [
              "uno.D12",
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
          "id": 10,
          "type": "quiz",
          "title": "10. Reto Final",
          "subtitle": "Esperar antes de leer",
          "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
          "question": "¿Qué hace el delay(300) al final del loop?",
          "options": [
            {
              "id": "0",
              "text": "Apaga el buzzer para siempre"
            },
            {
              "id": "1",
              "text": "Sube el nivel del agua"
            },
            {
              "id": "2",
              "text": "Cambia el pin del sensor"
            },
            {
              "id": "3",
              "text": "Espera un momento antes de volver a leer el sensor"
            }
          ],
          "correct": "3"
        }
      ]
    }
  ]
};
