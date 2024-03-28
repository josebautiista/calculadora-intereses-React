/* eslint-disable react/prop-types */
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const Resultados = ({ data }) => {
  const totalesColumnas = {
    interesMensual: 0,
    cuotaManejo: 0,
    otrosCargos: 0,
    total: 0,
  };

  data.forEach((item) => {
    totalesColumnas.interesMensual += item.interesMensual;
    totalesColumnas.cuotaManejo += item.cuotaManejo;
    totalesColumnas.otrosCargos += item.cargos;
    totalesColumnas.total += item.total;
  });

  const formatNumber = (number) => {
    return "$ " + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const totalStyle = {
    whiteSpace: "nowrap",
  };

  return (
    <div className="w-full">
      <Table
        color="primary"
        selectionMode="single"
        defaultSelectedKeys={["2"]}
        aria-label="Example static collection table"
        className="text-black min-w-[350px] max-w-[350px] md:min-w-[800px] md:max-w-[800px] overflow-x-auto "
      >
        <TableHeader className="text-left">
          <TableColumn>Mes</TableColumn>
          <TableColumn>Abono a Capital</TableColumn>
          <TableColumn>Interes Mensual</TableColumn>
          <TableColumn className="text-left">Cuota Manejo</TableColumn>
          <TableColumn className="text-left">Otros Cargos</TableColumn>
          <TableColumn>Total a Pagar</TableColumn>
          <TableColumn>Saldo Restante</TableColumn>
        </TableHeader>
        <TableBody>
          {data.map((item, i) => (
            <TableRow key={i}>
              <TableCell className="text-left">{item.mes}</TableCell>
              <TableCell className="text-left">
                {formatNumber(item.capital)}
              </TableCell>
              <TableCell className="text-left">
                {formatNumber(item.interesMensual)}
              </TableCell>
              <TableCell className="text-left">
                {formatNumber(item.cuotaManejo)}
              </TableCell>
              <TableCell className="text-left">
                {formatNumber(item.cargos)}
              </TableCell>
              <TableCell className="text-left" style={totalStyle}>
                {formatNumber(item.total)}
              </TableCell>
              <TableCell className="text-left">
                {formatNumber(item.restante)}
              </TableCell>
            </TableRow>
          ))}
          {/* Fila de totales */}
          <TableRow>
            <TableCell></TableCell>
            <TableCell className="text-right font-bold">Total: </TableCell>
            <TableCell className="text-left font-bold">
              {formatNumber(totalesColumnas.interesMensual)}
            </TableCell>
            <TableCell className="text-left font-bold">
              {formatNumber(totalesColumnas.cuotaManejo)}
            </TableCell>
            <TableCell className="text-left font-bold">
              {formatNumber(totalesColumnas.otrosCargos)}
            </TableCell>
            <TableCell className="text-left font-bold" style={totalStyle}>
              {formatNumber(totalesColumnas.total)}
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Resultados;
