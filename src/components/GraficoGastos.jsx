import React from "react";
import { Box, Card, Typography } from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { agruparPorCategoria } from "../utils/calculos";

// Cores para cada fatia do gráfico
const CORES = [
  "#005ca9",
  "#ffb81c",
  "#66bb6a",
  "#f29100",
  "#003366",
  "#54bbff",
];

function GraficoGastos({ gastos }) {
  // Agrupa os gastos por categoria
  const grupos = agruparPorCategoria(gastos);

  // Transforma o objeto em array para o gráfico
  const dadosGrafico = Object.entries(grupos).map(([nome, valor]) => ({
    name: nome,
    value: valor,
  }));

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
        📈 Gastos por Categoria
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "rgba(255,255,255,0.5)", mb: 3 }}
      >
        Veja onde seu dinheiro está sendo gasto
      </Typography>

      <Card
        sx={{
          background: "linear-gradient(135deg, #1a1f35, #242938)",
          borderRadius: "20px",
          padding: "30px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        }}
      >
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={dadosGrafico}
              cx="50%"
              cy="50%"
              outerRadius={120}
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {dadosGrafico.map((entry, index) => (
                <Cell key={index} fill={CORES[index % CORES.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => [`R$ ${value.toFixed(2)}`, "Valor"]}
              contentStyle={{
                backgroundColor: "#1a1f35",
                border: "1px solid #42a5f5",
                borderRadius: "8px",
                color: "white",
              }}
            />
            <Legend
              formatter={(value) => (
                <span style={{ color: "white" }}>{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </Card>
    </Box>
  );
}

export default GraficoGastos;
