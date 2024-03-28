import { Card, Input } from "@nextui-org/react";
import { useState } from "react";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaCalendarDay, FaFileInvoiceDollar } from "react-icons/fa";
import { RiCoinsFill } from "react-icons/ri";
import { Button } from "@nextui-org/react";
import ToolTip from "./ToolTip";
import { calcular } from "../controllers/calcular";
import Resultados from "./Resultados";

const CardInputs = () => {
  const [monto, setMonto] = useState("");
  const [cuotas, setCuotas] = useState("");
  const [interes, setInteres] = useState("");
  const [fechaCompra, setFecha] = useState("");
  const [fechaCorte, setFechaCorte] = useState("");
  const [cuotaManejo, setCuotaManejo] = useState(0);
  const [cargos, setCargos] = useState(0);
  const [resultados, setResultados] = useState([]);

  const handleCalcular = (e) => {
    setResultados([]);
    e.preventDefault();
    calcular(
      monto,
      cuotas,
      interes,
      fechaCompra,
      fechaCorte,
      cuotaManejo,
      cargos,
      setResultados
    );

    setMonto("");
    setCuotas("");
    setInteres("");
    setFecha("");
    setFechaCorte("");
    setCuotaManejo(0);
    setCargos(0);
  };

  const formatNumberInput = (value) => {
    return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleInputChange = (e, setter) => {
    const input = e.target.value;
    const formattedInput = formatNumberInput(input);
    setter(formattedInput);
  };

  const handleMonto = (e) => {
    handleInputChange(e, setMonto);
  };

  const handleCuotas = (e) => {
    handleInputChange(e, setCuotas);
  };

  const handleInteres = (e) => {
    const input = e.target.value;
    if ((input.match(/\./g) || []).length <= 1) {
      setInteres(input);
    }
  };

  const handleManejo = (e) => {
    handleInputChange(e, setCuotaManejo);
  };

  const handleCargos = (e) => {
    handleInputChange(e, setCargos);
  };

  return (
    <>
      <Card className="w-full md:w-4/5 md:py-5 md:px-10 px-5 py-5 flex flex-col gap-7">
        <h2 className="text-xl font-bold text-black text-left">
          Ingresa los siguientes datos:
        </h2>

        <form
          onSubmit={handleCalcular}
          className="flex flex-col gap-3 items-center"
        >
          <Input
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-small text-blue-400">$</span>
              </div>
            }
            color="primary"
            label="Monto en COP"
            value={monto}
            onChange={handleMonto}
            isRequired
            endContent={<ToolTip message="Monto de la compra." />}
          />

          <Input
            startContent={
              <div className="pointer-events-none h-4/6 flex items-center">
                <FaHandHoldingDollar className="text-small text-blue-400" />
              </div>
            }
            color="primary"
            label="Número de cuotas"
            value={cuotas}
            onChange={handleCuotas}
            isRequired
            endContent={
              <ToolTip message="Número de cuotas en la que quieres dividir la compra." />
            }
          />

          <Input
            startContent={
              <div className="pointer-events-none h-4/6 flex items-center">
                <BsGraphUpArrow className="text-small text-blue-400" />
              </div>
            }
            color="primary"
            label="Interés mensual (separado por punto)"
            value={interes}
            onChange={handleInteres}
            isRequired
            endContent={
              <ToolTip message="Sino conoces el interes mensual, en una tarjeta de crédito se calcula dividiendo su tasa de interés anual entre 12 meses. Por ejemplo, una tasa anual del 24% equivale a un interés mensual del 2%." />
            }
          />

          <Input
            startContent={
              <div className="pointer-events-none h-3/6 flex items-center">
                <FaCalendarDay className="text-small text-blue-400" />
              </div>
            }
            color="primary"
            type="date"
            label="Fecha de compra"
            value={fechaCompra}
            onChange={(e) => setFecha(e.target.value)}
            isRequired
            endContent={
              <ToolTip message="Fecha en que se realiza la compra." />
            }
          />

          <Input
            startContent={
              <div className="pointer-events-none h-3/6 flex items-center">
                <FaCalendarDay className="text-small text-blue-400" />
              </div>
            }
            color="primary"
            type="date"
            label="Fecha de corte"
            value={fechaCorte}
            onChange={(e) => setFechaCorte(e.target.value)}
            isRequired
            endContent={
              <ToolTip message="La fecha de corte es el límite para hacer compras y que aparezcan en tu próxima factura." />
            }
          />

          <Input
            startContent={
              <div className="pointer-events-none h-3/6 flex items-center">
                <RiCoinsFill className="text-small text-blue-400" />
              </div>
            }
            color="primary"
            label="Cuota de manejo"
            value={cuotaManejo}
            onChange={handleManejo}
            endContent={
              <ToolTip message="Cuota mensual por uso de la tarjeta. Si no hay cuota de manejo, dejar en 0." />
            }
          />

          <Input
            startContent={
              <div className="pointer-events-none h-3/6 flex items-center">
                <FaFileInvoiceDollar className="text-small text-blue-400" />
              </div>
            }
            color="primary"
            label="Otros cargos mensuales"
            value={cargos}
            onChange={handleCargos}
            endContent={
              <ToolTip message="Cobros fijos mensuales en la tarjeta, como seguros u otros servicios adicionales." />
            }
          />

          <Button type="submit" color="primary" className="w-1/2">
            Calcular
          </Button>
        </form>
      </Card>
      {resultados.length > 0 && <Resultados data={resultados} />}
    </>
  );
};

export default CardInputs;
