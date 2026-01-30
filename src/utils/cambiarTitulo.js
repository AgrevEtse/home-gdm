export const cambiarTitulo = (titulo) => {
  if (!titulo) {
    document.title = '? - Colegio Gómez de Mendiola, Cultura Popular A.C.'
    return
  }

  document.title = `${titulo} - Colegio Gómez de Mendiola, Cultura Popular A.C.`
}
