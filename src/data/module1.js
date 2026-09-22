// src/data/module1.js
export const module1 = {
  id: 1,
  title: "Módulo 1",
  description: "b",
  lessons: [
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
        { "id": 1, "text": "void setup() {" },
        { "id": 2, "text": "  pinMode(LED_BUILTIN, OUTPUT);" },
        { "id": 3, "text": "}" },
        { "id": 4, "text": "void loop() {" },
        { "id": 5, "text": "  digitalWrite(LED_BUILTIN, HIGH);" },
        { "id": 6, "text": "}" }
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
  "image": "https://tu-sitio.com/ruta-a-tu-imagen.png"},
    {
      "id": 4,
      "type": "quiz",
      "title": "4. Pregunta de Opción Múltiple",
      "subtitle": "Evaluación de conceptos",
      "instruction": "Selecciona la respuesta correcta para la siguiente pregunta.",
      "question": "¿Qué función de Arduino se ejecuta una sola vez al encender o reiniciar el microcontrolador?",
      "options": [
        { "id": "0", "text": "loop()" },
        { "id": "1", "text": "setup()" },
        { "id": "2", "text": "initHardware()" },
        { "id": "3", "text": "pinMode()" }
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
        { "id": 0, "term": "Resistencia", "definition": "Opone resistencia al flujo de corriente eléctrica." },
        { "id": 1, "term": "LED", "definition": "Emite luz cuando pasa corriente a través de él." },
        { "id": 2, "term": "Pulsador", "definition": "Permite o interrumpe el paso de la corriente al presionarlo." },
        { "id": 3, "term": "GND", "definition": "Representa la tierra o el punto de referencia de 0V." }
      ]
    }
  ]
    }
  ]
};