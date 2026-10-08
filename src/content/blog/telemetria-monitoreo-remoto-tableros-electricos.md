---
title: "Telemetría y monitoreo remoto de tableros eléctricos: qué datos genera, para qué sirven y quién los cuida"
metaTitle: "Telemetría de tableros eléctricos: datos, usos y quién los cuida"
description: "Qué mide un tablero eléctrico monitoreado (consumo, temperatura, armónicos, alarmas), cómo viaja el dato, qué decisiones permite y por qué la red de los medidores debe ir separada y respaldada."
pubDate: 2026-10-08
author: "Equipo ChileEléctrico"
tags: ["industria", "mantención", "tableros"]
featured: false
---

Cada vez más plantas nos piden que el tablero "avise" antes de fallar. La respuesta es telemetría: medidores y sensores instalados en el tablero que registran lo que pasa dentro y lo envían a un servidor donde alguien lo mira. El proyecto tiene dos mitades: una eléctrica, que hacemos nosotros, y otra de redes y servidores, y conviene saber desde el principio quién administra la segunda.

## Qué se mide dentro de un tablero

Un tablero monitoreado suele registrar cuatro familias de datos:

- **Consumo por fase y por circuito**: corriente, tensión, potencia activa y reactiva, energía acumulada. Es lo que permite saber qué máquina consume cuánto y a qué hora.
- **Temperatura**: en barras, en bornes de los interruptores principales y en el ambiente interior del gabinete. Un punto que se calienta más que sus vecinos es una conexión que se está aflojando.
- **Calidad de la energía**: armónicos, desbalance entre fases, caídas y sobretensiones breves. Son los datos que explican por qué un variador se resetea o un equipo electrónico falla "sin motivo".
- **Estados y alarmas**: posición de interruptores, disparo de protecciones, apertura de puerta, falla de ventilación forzada.

Nada de esto reemplaza la revisión física. Los pliegos técnicos RIC de la Superintendencia de Electricidad y Combustibles, en particular el de tableros (RIC N°02), siguen fijando cómo debe construirse, protegerse e identificarse un tablero; la medición remota se agrega sobre esa base, no la sustituye. Los pliegos vigentes están publicados en [el sitio oficial de la SEC](https://www.sec.cl/normas-tecnicas-electricas/).

## Cómo viaja el dato

Los medidores hablan por protocolos industriales (Modbus RTU sobre RS-485 o Modbus TCP sobre Ethernet, en la mayoría de los casos). Desde ahí hay dos caminos habituales:

1. **Red de la planta**: los medidores se conectan a un switch y el dato llega al servidor interno o a la nube a través de la red corporativa.
2. **Módem 4G propio**: una pasarela (gateway) con chip de datos envía la información directamente a un servidor en internet, sin tocar la red de la planta. Es la opción típica en subestaciones, bodegas alejadas o cuando el área de TI no quiere equipos desconocidos en su red.

Las dos funcionan. La diferencia está en quién responde cuando algo deja de reportar, y en qué tan expuesto queda el resto de la planta si un equipo de medición se compromete.

## Qué decisiones permite

Con uno o dos meses de datos, las decisiones empiezan a ser concretas:

- **Mantención predictiva**: una tendencia de temperatura que sube semana a semana en un borne señala el reapriete antes de que haya un arco. Se programa la intervención en una parada planificada, no en una emergencia.
- **Factor de potencia**: la potencia reactiva registrada permite dimensionar o corregir el banco de condensadores con datos propios, y verificar después si la corrección funcionó.
- **Distribución de cargas**: saber qué circuitos están al límite antes de conectar una máquina nueva, en vez de descubrirlo cuando salta el interruptor general.
- **Evidencia para la [auditoría eléctrica anual](/blog/auditoria-electrica-anual-pyme/)**: el historial de alarmas y temperaturas acorta la revisión y deja respaldo de que la instalación estuvo vigilada.

## Por qué la red de los medidores va separada y respaldada

Aquí está la parte que más se descuida. Los medidores y las pasarelas son computadores pequeños, con contraseñas de fábrica y actualizaciones poco frecuentes. Si comparten la misma red que las oficinas y los servidores de producción, un problema en cualquiera de los dos lados afecta al otro. La práctica recomendada es ponerlos en una red propia (una VLAN o un segmento aislado), con acceso solo desde los equipos que realmente necesitan leerlos.

Lo mismo con el destino del dato. Si el historial de consumo y alarmas vive en un solo computador en la sala de control, un disco dañado borra meses de información que ya no se puede volver a medir. El servidor donde llegan los datos necesita copias de respaldo probadas, usuarios con permisos definidos y alguien que mire que siga recibiendo. Esa parte no es trabajo del instalador eléctrico. Cuando la planta no tiene un área de TI propia, o la tiene pero sin tiempo para esto, lo habitual es que la red de medición y el servidor los administre [una empresa TI que trabaja con plantas industriales](https://www.vitisorigins.cl/industrias/manufactura-industria/), coordinada con quien hizo la instalación eléctrica.

## Qué pedirle al integrador

Antes de firmar un proyecto de telemetría, conviene dejar por escrito:

- **Lista de variables medidas y frecuencia de registro**, punto por punto, para que no queden circuitos sin medir.
- **Camino del dato** (red de planta o 4G), quién administra cada tramo y qué pasa si se corta.
- **Dónde quedan los datos**, por cuánto tiempo, y cómo se exportan si cambias de proveedor.
- **Separación de red**: VLAN o segmento propio para los medidores, y cambio de todas las contraseñas de fábrica.
- **Respaldo del servidor** y prueba de restauración documentada.
- **Alarmas con responsable**: cada aviso debe llegar a una persona definida, no a un correo que nadie revisa.
- **Certificación eléctrica** de la intervención en el tablero, con declaración ante la SEC cuando corresponda.

Si tu planta quiere empezar a medir, revisamos la instalación primero. En la sección de [empresas e industria](/empresas-industria/) está lo que hacemos en tableros y montaje; la telemetría se suma a eso.
