export const cambiarTitulo = (titulo) => {
  if (!titulo) {
    document.title = '? - Escuela Gómez de Mendiola, Cultura Popular A.C.'
    return
  }

  document.title = `${titulo} - Escuela Gómez de Mendiola, Cultura Popular A.C.`
}
