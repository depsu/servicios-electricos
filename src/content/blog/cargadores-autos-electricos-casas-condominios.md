---
title: "Cargadores de autos eléctricos en casas y condominios: lo que piden los reglamentos"
description: "Qué exige la normativa SEC para instalar un cargador de auto eléctrico en una casa o condominio en Chile: pliego RIC N°15, declaración TE6, dimensionamiento del empalme y los errores que vemos en terreno."
pubDate: 2026-07-22
author: "Equipo ChileEléctrico"
image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1600&auto=format&fit=crop"
tags: ["electromovilidad", "condominios", "SEC", "RIC"]
featured: false
---

Cada mes nos llegan más consultas del mismo tipo: "compré un auto eléctrico, ¿puedo enchufarlo en mi estacionamiento?". La respuesta corta es sí — pero no a cualquier enchufe, no con cualquier instalación, y en condominio no sin pasar por la administración. Esta guía resume lo que pide la normativa y lo que hemos aprendido instalando cargadores en la RM.

## El marco normativo: RIC N°15 y declaración TE6

La instalación de infraestructura de carga en Chile está regulada por el **Pliego Técnico Normativo RIC N°15** (electromovilidad) de la SEC. Lo esencial:

- La instalación debe ejecutarla un **instalador eléctrico autorizado SEC** de la clase correspondiente.
- Terminada la obra, se declara ante la SEC (trámite **TE6** de infraestructura de carga). Sin esa declaración, el cargador no existe legalmente — y ante un siniestro, el seguro lo sabe.
- El circuito del cargador es **exclusivo**: nada de colgarlo del circuito de enchufes del estacionamiento o de la bodega.
- Protecciones dedicadas: diferencial tipo A (o tipo B según el equipo) y protección térmica dimensionada para carga continua.

El "cargador" que viene de regalo con el auto (Modo 2, enchufe doméstico) sirve de respaldo ocasional. Para uso diario, la carga a 8-10 A en un enchufe común somete a la instalación a una exigencia de horas continuas para la que la mayoría de las casas chilenas no fue dimensionada. Los conectores derretidos que nos ha tocado retirar son siempre de ese escenario.

## Casa: la pregunta clave es el empalme

En una casa el proyecto es directo, pero hay un cuello de botella que casi nadie mira antes de comprar el auto: **la capacidad del empalme**.

| Empalme | Cargador viable | Comentario |
|---|---|---|
| Monofásico 6-8 kW | 3,7 kW (16 A) | Compite con horno + termo; conviene gestor de carga |
| Monofásico 10-12 kW | 7,4 kW (32 A) | El estándar residencial cómodo |
| Trifásico | 11-22 kW | Carga rápida AC; requiere proyecto |

Si el empalme queda corto, las opciones son aumentar potencia con la distribuidora (trámite que toma semanas) o instalar un **gestor dinámico de carga** que baja la potencia del cargador cuando la casa está exigida. En la mayoría de los casos el gestor es más rápido y más barato que el aumento de empalme.

## Condominio: técnica + copropiedad

En edificios y condominios se suman dos capas:

1. **La eléctrica**: el estacionamiento suele alimentarse desde servicios comunes o desde el medidor del departamento, a decenas de metros. Hay que calcular caída de tensión real, canalización y desde dónde nace el circuito. Con varios vehículos, lo correcto es una **alimentación troncal con gestión de carga compartida** — no diez extensiones improvisadas.
2. **La legal**: la Ley de Copropiedad exige acuerdo con la administración para intervenir bienes comunes. Nuestro consejo de terreno: llegar al comité con el proyecto técnico ya armado (diagrama unilineal, protecciones, recorrido de canalización, TE6 comprometida). Un proyecto serio se aprueba; una solicitud vaga duerme meses.

## Los 4 errores que vemos en terreno

- **Enchufe doméstico como solución definitiva.** Funciona… hasta que el conector se degrada por temperatura. Es la causa #1 de incidentes con EV en casas.
- **Circuito compartido.** El cargador convive con el portón automático y la iluminación del estacionamiento: disparos "misteriosos" del diferencial cada noche.
- **Diferencial equivocado.** Los cargadores exigen protección contra fugas DC (tipo A con detección de 6 mA DC o tipo B). El diferencial AC común no las ve.
- **Sin declaración TE6.** La instalación puede estar impecable, pero sin el trámite no hay respaldo ante la SEC ni el seguro.

## Un dato que pocos dueños de EV conocen

Si un auto eléctrico queda en pana — batería agotada en ruta o falla que bloquea la transmisión — **no se puede remolcar con cuerda ni con las ruedas motrices girando**: el motor eléctrico genera corriente al girar y puede dañarse la electrónica de tracción. El rescate correcto es siempre con **grúa de plataforma**, como las de [ASVR Grúas](https://www.asvrgruas.cl/) en Santiago, que suben el vehículo completo. Vale la pena guardar el contacto antes de necesitarlo, porque no todas las grúas de arrastre pueden tomar un EV sin riesgo.

## Antes de comprar el cargador

Nuestro checklist mínimo para cotizar bien:

1. Foto del tablero general y del medidor/empalme.
2. Distancia real tablero → punto de carga.
3. Modelo del vehículo (define potencia máxima AC que acepta).
4. En condominio: reglamento de copropiedad y contacto de la administración.

Con esos cuatro datos, un proyecto residencial estándar se resuelve en una visita técnica y una jornada de instalación — con su TE6 declarada, que es lo que separa una instalación de verdad de un enchufe con pretensiones.
