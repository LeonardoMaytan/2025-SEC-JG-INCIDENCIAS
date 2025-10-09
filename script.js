document.addEventListener("DOMContentLoaded", async () => {
  const form = document.getElementById("fichaForm");
  const estudianteInput = document.getElementById("estudiante");
  const estudianteList = document.getElementById("estudiantesList");
  const docenteSelect = document.getElementById("derivadaPor");
  const conversoPadres = document.getElementById("conversoPadres");
  const fechaConversacionContainer = document.getElementById("fechaConversacionContainer");
  const fechaConversacion = document.getElementById("fechaConversacion");

  // === Mostrar u ocultar fecha de conversación ===
  conversoPadres.addEventListener("change", () => {
    if (conversoPadres.value === "Sí") {
      fechaConversacion.style.display = "block";
    } else {
      fechaConversacion.style.display = "none";
      fechaConversacion.value = "";
    }
  });
  fechaConversacion.style.display = "none"; // Ocultar por defecto

  // === Cargar estudiantes ===
  estudiantes.forEach(e => {
    const opt = document.createElement("option");
    opt.value = e.nombre;
    estudianteList.appendChild(opt);
  });

  // === Cargar docentes ===
  docentes.forEach(d => {
    const opt = document.createElement("option");
    opt.value = d.nombre;
    opt.textContent = d.nombre;
    docenteSelect.appendChild(opt);
  });

  // === Autocompletar datos del estudiante ===
  estudianteInput.addEventListener("change", () => {
    const seleccionado = estudiantes.find(e => e.nombre.toLowerCase() === estudianteInput.value.toLowerCase());
    if (seleccionado) {
      document.getElementById("edad").value = seleccionado.edad;
      document.getElementById("aula").value = seleccionado.aula;
    } else {
      document.getElementById("edad").value = "";
      document.getElementById("aula").value = "";
    }
  });   

  // === Campo “Otros” dinámico ===
  const otrosCheck = document.querySelector("input[value='Otros']");
  let otrosInput = null;

  otrosCheck.addEventListener("change", () => {
    if (otrosCheck.checked && !otrosInput) {
      otrosInput = document.createElement("input");
      otrosInput.type = "text";
      otrosInput.id = "otrosTexto";
      otrosInput.placeholder = "Especifique otro tipo de dificultad (máx. 250 caracteres)";
      otrosInput.classList.add("form-control", "mt-2");
      otrosInput.maxLength = 250;

      const contador = document.createElement("small");
      contador.classList.add("text-muted");
      contador.textContent = "0 / 250";

      otrosInput.addEventListener("input", () => {
        contador.textContent = `${otrosInput.value.length} / 250`;
      });

      otrosCheck.parentNode.appendChild(otrosInput);
      otrosCheck.parentNode.appendChild(contador);
    } else if (!otrosCheck.checked && otrosInput) {
      otrosInput.nextElementSibling?.remove();
      otrosInput.remove();
      otrosInput = null;
    }
  });

  // === Límite de caracteres ===
  const limitados = ["dificultadArea", "descripcion", "desdeCuando", "observaciones", "acciones"];
  limitados.forEach(id => {
    const el = document.getElementById(id);
    const counter = document.createElement("small");
    counter.classList.add("text-muted");
    counter.textContent = "0 / 250";
    el.parentNode.insertBefore(counter, el.nextSibling);

    el.addEventListener("input", () => {
      if (el.value.length > 250) el.value = el.value.slice(0, 250);
      counter.textContent = `${el.value.length} / 250`;
    });
  });

  // === GENERAR PDF ===
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

    const estudiante = estudianteInput.value;
    const edad = document.getElementById("edad").value;
    const aula = document.getElementById("aula").value;
    const derivadaPor = document.getElementById("derivadaPor").value;
    const rendimiento = document.getElementById("rendimiento").value;
    const dificultadArea = document.getElementById("dificultadArea").value;
    const descripcion = document.getElementById("descripcion").value;
    const desdeCuando = document.getElementById("desdeCuando").value;
    const converso = conversoPadres.value;
    const fechaConv = fechaConversacion.value;
    const observaciones = document.getElementById("observaciones").value;
    const acciones = document.getElementById("acciones").value;

    const dificultades = Array.from(document.querySelectorAll("input[name='dificultad']:checked"))
      .map(el => el.value);
    const otrosTexto = document.getElementById("otrosTexto")?.value.trim() || "";
    if (dificultades.includes("Otros") && otrosTexto !== "") {
      dificultades[dificultades.indexOf("Otros")] = `Otros (${otrosTexto})`;
    }


    // === Fecha automática ===
    const hoy = new Date();
    const dia = String(hoy.getDate()).padStart(2, '0');
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const anio = hoy.getFullYear();
    const fechaTexto = `${dia}/${mes}/${anio}`;


    // === Encabezado ===
    const pageWidth = doc.internal.pageSize.getWidth();
    let y = 5;

    try {
      const logos = ["img/logo1.png", "img/logo2.png", "img/logo3.png", "img/logo4.png"];
      const base64 = await Promise.all(logos.map(loadImageAsBase64));
      const positions = [15, 45, 125, 155];
      base64.forEach((img, i) => doc.addImage(img, "PNG", positions[i], y, 20, 18));
    } catch (err) {
      console.log("⚠️ No se pudieron cargar los logos:", err);
    }

    y += 23;
    doc.setTextColor(0, 51, 153);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text('"AÑO DE LA RECUPERACIÓN Y CONSOLIDACIÓN DE LA ECONOMÍA PERUANA"', pageWidth / 2, y, { align: "center" });

    y += 10;
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(13);
    doc.text("FICHA DE DERIVACIÓN", pageWidth / 2, y, { align: "center" });

    y += 10;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");

    const drawLine = (x1, y1, length = 60) => doc.line(x1, y1, x1 + length, y1);

    doc.text("Estudiante:", 15, y);
    drawLine(38, y + 0.5, 130);
    doc.text(estudiante || "", 40, y);

    y += 6;
    doc.text("Edad:", 15, y);
    drawLine(28, y + 0.5, 20);
    doc.text(edad || "", 30, y);

    doc.text("Aula:", 60, y);
    drawLine(73, y + 0.5, 25);
    doc.text(aula || "", 75, y);

    doc.text("Fecha de derivación:", 110, y);
    drawLine(155, y + 0.5, 35);
    doc.text(fechaTexto, 157, y);

    y += 6;
    doc.text("Derivada por:", 15, y);
    drawLine(43, y + 0.5, 125);
    doc.text(derivadaPor || "", 45, y);

    y += 8;
    doc.setFont("helvetica", "bold");
    doc.text("I. Dificultad observada:", 15, y);
    doc.setFont("helvetica", "normal");
    y += 5;
    const dificultadTexto = dificultades.join(", ") || "_______________________________________";
    y = addMultilineText(doc, dificultadTexto, 20, y, 170);

    y += 4;
    doc.setFont("helvetica", "bold");
    doc.text("II. Rendimiento académico:", 15, y);
    doc.setFont("helvetica", "normal");
    doc.text(rendimiento || "", 75, y);

    y += 6;
    doc.text("La mayor dificultad se presenta en:", 15, y);
    y = addMultilineText(doc, dificultadArea, 20, y + 5, 170);

    y += 3;
    doc.setFont("helvetica", "bold");
    doc.text("III. Descripción de la dificultad:", 15, y);
    y = addMultilineText(doc, descripcion, 20, y + 5, 170);

    y += 3;
    doc.setFont("helvetica", "bold");
    doc.text("IV. ¿Desde cuándo se presenta la dificultad?", 15, y);
    y = addMultilineText(doc, desdeCuando, 20, y + 5, 170);

    // === Conversación con padres ===
    y += 3;
    doc.setFont("helvetica", "bold");
    doc.text("V. ¿Conversó con los padres de familia?:", 15, y);
    doc.setFont("helvetica", "normal");
    const siMarcado = converso === "Sí" ? "X" : " ";
    const noMarcado = converso === "No" ? "X" : " ";
    const fechaMostrar = converso === "Sí" && fechaConv ? fechaConv : "__________________";
    doc.text(`Sí (${siMarcado})   No (${noMarcado})   Fecha: ${fechaMostrar}`, 100, y);

    // === Observaciones ===
    y += 8;
    doc.setFont("helvetica", "bold");
    doc.text("Observaciones adicionales:", 15, y);
    doc.setFont("helvetica", "normal");
    y = addMultilineText(doc, observaciones, 20, y + 5, 170);

    // === Acciones ===
    y += 3;
    doc.setFont("helvetica", "bold");
    doc.text("VI. Acciones realizadas ante el caso:", 15, y);
    doc.setFont("helvetica", "normal");
    y = addMultilineText(doc, acciones, 20, y + 5, 170);

    // === Firma ===
    y += 25;
    doc.line(75, y, 135, y);
    doc.text("Docente Derivante", 90, y + 5);

    doc.save(`Ficha_Derivacion_${estudiante || "sin_nombre"}.pdf`);
  });
});

// === FUNCIONES AUXILIARES ===
async function loadImageAsBase64(url) {
  const response = await fetch(url);
  const blob = await response.blob();
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

function addMultilineText(doc, text, x, y, maxWidth) {
  if (!text) text = "________________________________________________________";
  const lines = doc.splitTextToSize(text, maxWidth);
  const lineHeight = 6;
  doc.text(lines, x, y);
  return y + lines.length * lineHeight;
}
