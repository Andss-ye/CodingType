# Coding Type Panel

## 🚀 Descripción
**Coding Type Panel** es un componente interactivo de React que permite a los usuarios practicar la escritura de código con retroalimentación visual en tiempo real. Cada letra escrita se compara con un fragmento de código predefinido y se marca en verde si es correcta o en rojo si es incorrecta. Además, incluye una barra de seguimiento y una lógica de indentación automática.

## 🖥️ Características
- 🎨 **Resaltado de sintaxis** con `Prism.js`.
- ✅ **Corrección en tiempo real**: Letras correctas en verde, incorrectas en rojo.
- 📏 **Seguimiento visual**: Barra de progreso basada en el avance del usuario.
- ⌨️ **Indentación automática** al bajar de línea.
- 🖱️ **Foco automático** en el campo de entrada invisible.

## 📦 Instalación
```sh
npm install prismjs
```

## 🔧 Uso
```tsx
import CodingTypePanel from "./CodingTypePanel";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-950">
      <CodingTypePanel />
    </div>
  );
}

export default App;
```

## 🛠️ Tecnologías utilizadas
- **React**: Para la interfaz interactiva.
- **Tailwind CSS**: Para el diseño responsivo y estilizado.
- **Prism.js**: Para el resaltado de sintaxis del código.

## 📌 Mejoras futuras
- Agregar selección de fragmentos de código.
- Integrar métricas de velocidad y precisión.
- Incluir soporte para múltiples lenguajes.

¡Disfruta mejorando tu velocidad y precisión al escribir código! 🚀

