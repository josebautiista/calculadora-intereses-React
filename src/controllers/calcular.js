export const calcular = (
  monto,
  cuotas,
  interes,
  fechaCompra,
  fechaCorte,
  cuotaManejo,
  cargos,
  setResultados
) => {
  console.log(cuotaManejo, cargos);
  monto = parseFloat(monto.replace(/\./g, ""));
  cuotas = parseInt(cuotas);
  interes = parseFloat(interes);
  cuotaManejo =
    cuotaManejo.trim() !== "" ? parseFloat(cuotaManejo.replace(/\./g, "")) : 0;
  cargos = cargos.trim() !== "" ? parseFloat(cargos.replace(/\./g, "")) : 0;

  let montoCopy = monto;

  const fechaCompraObj = new Date(fechaCompra);
  const fechaCorteObj = new Date(fechaCorte);

  const diferenciaMilisegundos = fechaCorteObj - fechaCompraObj;

  const diferenciaDias = Math.floor(
    diferenciaMilisegundos / (1000 * 60 * 60 * 24)
  );
  const interesDecimal = interes / 100;
  const interesDiario = (monto * interesDecimal) / 30;
  let diasHataCorte = 0;

  if (diferenciaDias > 0) {
    console.log(interesDiario, diferenciaDias);
    diasHataCorte = interesDiario * diferenciaDias;
    console.log(diasHataCorte);
  }
  const capital = monto / cuotas;

  for (let i = 0; i < cuotas; i++) {
    const interesMensual = montoCopy * interesDecimal;
    let total;
    if (i === 0 && diasHataCorte > 0) {
      total = capital + cuotaManejo + cargos + diasHataCorte;
    } else {
      total = interesMensual + capital + cuotaManejo + cargos;
    }
    montoCopy -= capital;
    const restante = montoCopy;

    setResultados((prevState) => [
      ...prevState,
      {
        mes: i + 1,
        capital,
        interesMensual: i === 0 ? diasHataCorte : interesMensual,
        montoCopy,
        restante,
        cuotaManejo,
        cargos,
        fechaCompra,
        fechaCorte,
        total,
      },
    ]);
  }
};
