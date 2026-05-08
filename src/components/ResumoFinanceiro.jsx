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
    titulo: "RENDA MENSAL",
    valor: usuario.rendaMensal,
    icon: <TrendingUpIcon sx={{ fontSize: 30 }} />,
    cor: "#FFB81C", 
    fundo: "linear-gradient(135deg, #003366 0%, #005ca9 100%)", 
  },
  {
    titulo: "TOTAL GASTO",
    valor: totalGastos,
    icon: <TrendingDownIcon sx={{ fontSize: 30 }} />,
    cor: "#FFFFFF", 
    fundo: "linear-gradient(135deg, #C47500 0%, #f29100 100%)", 
  },
  {
    titulo: "SALDO RESTANTE",
    valor: saldo,
    icon: <AccountBalanceIcon sx={{ fontSize: 30 }} />,
    cor: "#FFFFFF",
    fundo:
      saldo >= 0
        ? "linear-gradient(135deg, #005ca9 0%, #54bbff 100%)" 
        : "linear-gradient(135deg, #d32f2f 0%, #f29100 100%)",
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
            💸 Índice de Consumo:
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
              backgroundColor: porcentagemGasta > 80 ? "#f29100" : "#003366",
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
