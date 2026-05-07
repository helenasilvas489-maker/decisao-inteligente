import React from "react";
import { Box } from "@mui/material";
import Header from "./components/Header";
import ResumoFinanceiro from "./components/ResumoFinanceiro";
import Insights from "./components/Insights";
import Simulador from "./components/Simulador";
import GraficoGastos from "./components/GraficoGastos";
import dados from "./data/dados.json";

function App() {
  return (
    <Box sx={{ backgroundColor: "#0a0e1a", minHeight: "100vh" }}>
      <Header usuario={dados.usuario} />

      <Box
        sx={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "0 24px 40px 24px",
        }}
      >
        <ResumoFinanceiro usuario={dados.usuario} gastos={dados.gastos} />
        <Insights
          gastos={dados.gastos}
          rendaMensal={dados.usuario.rendaMensal}
          metaEconomia={dados.metaEconomia}
        />
        <Simulador />
      </Box>
    </Box>
  );
}

export default App;
