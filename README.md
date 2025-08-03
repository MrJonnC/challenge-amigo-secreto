# 🎁 Challenge - Amigo Secreto

Este proyecto es una aplicación web interactiva que permite ingresar nombres para luego sortear de forma aleatoria a un "amigo secreto". Está pensado para ser fácil de usar, visualmente atractivo y perfecto para actividades grupales como navidades, cumpleaños, team buildings o dinámicas escolares.

---

## 📋 Pre-requisitos

Solo necesitas un navegador moderno y un editor de código si deseas modificarlo.

### Recomendado:

- Google Chrome / Firefox / Safari
- Visual Studio Code
- Live Server (extensión para VSCode)

---

## 🔧 Instalación

### Paso 1: Clonar el repositorio

```bash
git clone https://github.com/tuusuario/challenge-amigo-secreto.git
```

### Paso 2: Abrir en tu editor de código

```bash
cd challenge-amigo-secreto
code .
```

### Paso 3: Abrir `index.html`

Puedes hacer doble clic o usar Live Server si estás en VSCode.

---

### ✅ Prueba rápida

1. Escribe nombres en el campo de texto y haz clic en **"Agregar"**.
2. Verás los nombres listados con opciones para **editar** o **eliminar**.
3. Cuando haya más de dos nombres, podrás hacer clic en **"Sortear"**.
4. Los resultados del sorteo se mostrarán abajo.

---

## ⚙️ Ejecutando las pruebas

Este proyecto es simple y no usa frameworks de testing automatizados aún. Pero puedes verificar el flujo manualmente siguiendo los pasos anteriores.

---

## 🔩 Analice las pruebas end-to-end

Las pruebas manuales cubren:

- Validación de nombres (no se aceptan números o símbolos).
- Evita nombres repetidos o vacíos.
- Controla que no puedas sortear con menos de 2 personas.
- Asegura que un usuario no se auto-asigne.

**Ejemplo**:

- Si ingresas "a" o "aa" o "ashjdkalsjhd" como nombre, el sistema lo rechazará.
- Si intentas sortear sin suficientes personas, el botón estará desactivado.

---

## ⌨️ Pruebas de estilo de codificación

Se sigue una estructura limpia con separación de estilos (`style.css`) y lógica (`app.js`). Se usan convenciones semánticas y comentarios para cada bloque importante del código.

**Ejemplo**:

```css
/* Estilo del contenedor del nombre */
.nombre-item {
    display: flex;
    ...
}
```

## 🛠️ Construido con

- [HTML5](https://developer.mozilla.org/es/docs/Web/HTML)
- [CSS3](https://developer.mozilla.org/es/docs/Web/CSS)
- [JavaScript Vanilla](https://developer.mozilla.org/es/docs/Web/JavaScript)
  
---
## 👩‍💻 Personas Desarrolladoras del Proyecto
<p align="center">
  <img src="https://avatars.githubusercontent.com/u/101259509?v=4" width="115" alt="Foto de MrJonnC"><br>
  <sub><strong>MrJonnC</strong></sub>
</p>

---

## 🥇 Insignia
<p align="center">
  <img src="assets/insignia.png" width="115" alt="Imagen Insignia"><br>
  <sub><strong>.....</strong></sub>
</p>


---

## 🎁 Expresiones de Gratitud

- 🙌 Gracias especiales a [**Alura Latam**](https://www.aluracursos.com/) y al programa **Oracle Next Education** por brindar la formación, el acompañamiento y las herramientas que hicieron posible este proyecto.
