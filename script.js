document.addEventListener("DOMContentLoaded", async () => {
  const form = document.getElementById("fichaForm");

  // === Cargar estudiantes y docentes desde data.js ===
  const estudianteSelect = document.getElementById("estudiante");
  const docenteSelect = document.getElementById("derivadaPor");

  estudiantes.forEach(e => {
    const opt = document.createElement("option");
    opt.value = e.nombre;
    opt.textContent = e.nombre;
    estudianteSelect.appendChild(opt);
  });

  docentes.forEach(d => {
    const opt = document.createElement("option");
    opt.value = d.nombre;
    opt.textContent = d.nombre;
    docenteSelect.appendChild(opt);
  });

  // === Autocompletar estudiante ===
  estudianteSelect.addEventListener("change", () => {
    const seleccionado = estudiantes.find(e => e.nombre === estudianteSelect.value);
    if (seleccionado) {
      document.getElementById("dni").value = seleccionado.dni;
      document.getElementById("edad").value = seleccionado.edad;
      document.getElementById("aula").value = seleccionado.aula;
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

    const estudiante = document.getElementById("estudiante").value;
    const dni = document.getElementById("dni").value;
    const edad = document.getElementById("edad").value;
    const aula = document.getElementById("aula").value;
    const derivadaPor = document.getElementById("derivadaPor").value;
    const rendimiento = document.getElementById("rendimiento").value;
    const dificultadArea = document.getElementById("dificultadArea").value;
    const descripcion = document.getElementById("descripcion").value;
    const desdeCuando = document.getElementById("desdeCuando").value;
    const conversoPadres = document.getElementById("conversoPadres").value;
    const observaciones = document.getElementById("observaciones").value;
    const acciones = document.getElementById("acciones").value;

    const dificultades = Array.from(document.querySelectorAll("input[name='dificultad']:checked"))
      .map(el => el.value);
    const otrosTexto = document.getElementById("otrosTexto")?.value.trim() || "";
    if (dificultades.includes("Otros") && otrosTexto !== "") {
      dificultades[dificultades.indexOf("Otros")] = `Otros (${otrosTexto})`;
    }

    const pageWidth = doc.internal.pageSize.getWidth();
    let y = 5;

    // === Logos ===
    try {
      const img1 = await loadImageAsBase64("img/logo1.png");
      const img2 = await loadImageAsBase64("img/logo2.png");
      const img3 = await loadImageAsBase64("img/logo3.png");
      const img4 = await loadImageAsBase64("img/logo4.png");
      const logoHeight = 18;
      doc.addImage(img1, "PNG", 15, y, 20, logoHeight);
      doc.addImage(img2, "PNG", 45, y, 20, logoHeight);
      doc.addImage(img3, "PNG", 125, y, 20, logoHeight);
      doc.addImage(img4, "PNG", 155, y, 20, logoHeight);
    } catch (err) {
      console.log("⚠️ No se pudieron cargar los logos:", err);
    }

    // === Encabezado ===
    y += 23;
    doc.setTextColor(0, 51, 153);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text('"AÑO DE LA RECUPERACIÓN Y CONSOLIDACIÓN DE LA ECONOMÍA PERUANA"', pageWidth / 2, y, { align: "center" });
    doc.setTextColor(0, 0, 0);

    y += 10;
    doc.setFontSize(13);
    doc.text("FICHA DE DERIVACIÓN", pageWidth / 2, y, { align: "center" });
    y += 8;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");

    // === Datos principales con líneas ===
    const drawLine = (x1, y1, length = 60) => doc.line(x1, y1, x1 + length, y1);

    doc.text("Estudiante:", 15, y);
    drawLine(38, y + 0.5, 130);
    doc.text(estudiante || "", 40, y);

    y += 6;
    doc.text("DNI:", 15, y);
    drawLine(25, y + 0.5, 40);
    doc.text(dni || "", 27, y);

    doc.text("Edad:", 70, y);
    drawLine(82, y + 0.5, 20);
    doc.text(edad || "", 84, y);

    doc.text("Aula:", 110, y);
    drawLine(122, y + 0.5, 20);
    doc.text(aula || "", 124, y);

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
    drawLine(70, y + 0.5, 100);

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

    y += 3;
    doc.setFont("helvetica", "bold");
    doc.text("V. ¿Conversó con los padres de familia?:", 15, y);
    doc.setFont("helvetica", "normal");
    doc.text(`Sí ( )  No ( )   Fecha: ${conversoPadres || "__________________"}`, 100, y);
    y += 8;

    doc.setFont("helvetica", "bold");
    doc.text("Observaciones adicionales:", 15, y);
    doc.setFont("helvetica", "normal");
    y = addMultilineText(doc, observaciones, 20, y + 5, 170);

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
