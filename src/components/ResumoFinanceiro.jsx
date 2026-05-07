import React from "react";
import { Box, Card, Typography, LinearProgress } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { calcularTotalGastos, calcularSaldo } from "../utils/calculos";

function ResumoFinanceiro({ usuario, gastos }) {
  const totalGastos = calcularTotalGastos(gastos);
  const saldo = calcularSaldo(usuario.rendaMensal, gastos);
  const porcentagemGasta = (totalGastos / usuario.rendaMensal) * 100;

  const cards = [
    {
      titulo: "Renda Mensal",
      valor: usuario.rendaMensal,
      icon: <TrendingUpIcon sx={{ fontSize: 30 }} />,
      cor: "#42a5f5",
      fundo: "linear-gradient(135deg, #1565c0, #1976d2)",
    },
    {
      titulo: "Total Gasto",
      valor: totalGastos,
      icon: <TrendingDownIcon sx={{ fontSize: 30 }} />,
      cor: "#ef5350",
      fundo: "linear-gradient(135deg, #b71c1c, #c62828)",
    },
    {
      titulo: "Saldo Restante",
      valor: saldo,
      icon: <AccountBalanceIcon sx={{ fontSize: 30 }} />,
      cor: "#66bb6a",
      fundo:
        saldo >= 0
          ? "linear-gradient(135deg, #1b5e20, #2e7d32)"
          : "linear-gradient(135deg, #b71c1c, #c62828)",
    },
  ];

  return (
    <Box sx={{ mt: 3, mb: 4 }}>
      {/* Cards */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          mb: 3,
        }}
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            sx={{
              flex: 1,
              minWidth: "200px",
              background: card.fundo,
              borderRadius: "16px",
              padding: "24px",
              color: "white",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            }}
          >
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                {card.titulo}
              </Typography>
              <Box sx={{ opacity: 0.8 }}>{card.icon}</Box>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              R$ {card.valor.toFixed(2)}
            </Typography>
          </Card>
        ))}
      </Box>

      {/* Barra de progresso */}
      <Card
        sx={{
          background: "linear-gradient(135deg, #1a1f35, #242938)",
          borderRadius: "16px",
          padding: "24px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
            💸 Percentual gasto da renda
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "white", fontWeight: "bold" }}
          >
            {porcentagemGasta.toFixed(1)}%
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={Math.min(porcentagemGasta, 100)}
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: "rgba(255,255,255,0.1)",
            "& .MuiLinearProgress-bar": {
              backgroundColor: porcentagemGasta > 80 ? "#ef5350" : "#42a5f5",
              borderRadius: 5,
            },
          }}
        />
        <Typography
          variant="caption"
          sx={{ color: "rgba(255,255,255,0.5)", mt: 1, display: "block" }}
        >
          {porcentagemGasta > 80
            ? "⚠️ Atenção! Você já usou mais de 80% da sua renda!"
            : "✅ Seus gastos estão sob controle!"}
        </Typography>
      </Card>
    </Box>
  );
}

export default ResumoFinanceiro;
