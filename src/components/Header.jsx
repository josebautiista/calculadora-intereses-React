const Header = () => {
  return (
    <div className="flex flex-col gap-2 max-w-[800px]">
      <h1 className="md:text-3xl text-2xl font-bold text-white">
        Simulador de cuotas de tarjetas de crédito
      </h1>
      <p className="text-white text-sm md:text-md">
        Este simulador no puede asegurar la precisión absoluta de los resultados
        en comparación con la factura generada por su banco. Le recomendamos que
        consulte con su banco para obtener una experiencia más precisa y
        completa.
      </p>
    </div>
  );
};

export default Header;
