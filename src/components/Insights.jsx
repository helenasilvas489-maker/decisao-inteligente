import React from "react";
import { Box, Card, Typography, Chip } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InfoIcon from "@mui/icons-material/Info";
import { gerarInsights } from "../utils/calculos";

function Insights({ gastos, rendaMensal, metaEconomia }) {
  const insights = gerarInsights(gastos, rendaMensal, metaEconomia);

  const config = {
    perigo: {
      cor: "#ef5350",
      fundo: "rgba(239, 83, 80, 0.1)",
      borda: "#ef5350",
      icon: <WarningIcon sx={{ color: "#ef5350" }} />,
      label: "Atenção",
    },
    atencao: {
      cor: "#ffa726",
      fundo: "rgba(255, 167, 38, 0.1)",
      borda: "#ffa726",
      icon: <InfoIcon sx={{ color: "#ffa726" }} />,
      label: "Dica",
    },
    sucesso: {
      cor: "#66bb6a",
      fundo: "rgba(102, 187, 106, 0.1)",
      borda: "#66bb6a",
      icon: <CheckCircleIcon sx={{ color: "#66bb6a" }} />,
      label: "Parabéns",
    },
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h5"
        sx={{
          color: "white",
          fontWeight: "bold",
          mb: 1,
        }}
      >
        🧠 Insights Automáticos
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "rgba(255,255,255,0.5)", mb: 3 }}
      >
        Análise inteligente baseada no seu comportamento financeiro
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {insights.map((insight, index) => {
          const c = config[insight.tipo];
          return (
            <Card
              key={index}
              sx={{
                background: `linear-gradient(135deg, #1a1f35, #242938)`,
                borderRadius: "16px",
                padding: "20px 24px",
                borderLeft: `4px solid ${c.borda}`,
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              {c.icon}
              <Typography variant="body1" sx={{ color: "white", flex: 1 }}>
                {insight.mensagem}
              </Typography>
              <Chip
                label={c.label}
                size="small"
                sx={{
                  backgroundColor: c.fundo,
                  color: c.cor,
                  fontWeight: "bold",
                  border: `1px solid ${c.borda}`,
                }}
              />
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}

export default Insights;
