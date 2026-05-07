import React, { useState } from "react";
import { Box, Card, Typography, Slider, Button, Chip } from "@mui/material";
import SavingsIcon from "@mui/icons-material/Savings";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { simularEconomia } from "../utils/calculos";

function Simulador() {
  const [valorEconomia, setValorEconomia] = useState(300);
  const [meses, setMeses] = useState(6);
  const [resultados, setResultados] = useState([]);
  const [simulou, setSimulou] = useState(false);

  function handleSimular() {
    const resultado = simularEconomia(0, valorEconomia, meses);
    setResultados(resultado);
    setSimulou(true);
  }

  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h5"
        sx={{ color: "white", fontWeight: "bold", mb: 1 }}
      >
        🔮 Simulador de Cenários
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "rgba(255,255,255,0.5)", mb: 3 }}
      >
        Veja quanto você pode acumular economizando todo mês
      </Typography>

      <Card
        sx={{
          background: "linear-gradient(135deg, #1a1f35, #242938)",
          borderRadius: "20px",
          padding: "30px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          mb: 3,
        }}
      >
        {/* Slider valor */}
        <Box sx={{ mb: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography
              sx={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}
            >
              💰 Valor a economizar por mês
            </Typography>
            <Chip
              label={`R$ ${valorEconomia}`}
              sx={{
                backgroundColor: "rgba(66, 165, 245, 0.15)",
                color: "#42a5f5",
                fontWeight: "bold",
                fontSize: "0.95rem",
                border: "1px solid rgba(66,165,245,0.3)",
              }}
            />
          </Box>
          <Slider
            value={valorEconomia}
            min={50}
            max={2000}
            step={50}
            onChange={(e, val) => setValorEconomia(val)}
            sx={{
              color: "#42a5f5",
              height: 6,
              "& .MuiSlider-thumb": {
                backgroundColor: "#42a5f5",
                width: 18,
                height: 18,
                "&:hover": { boxShadow: "0 0 0 8px rgba(66,165,245,0.2)" },
              },
            }}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="caption"
              sx={{ color: "rgba(255,255,255,0.3)" }}
            >
              R$ 50
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "rgba(255,255,255,0.3)" }}
            >
              R$ 2000
            </Typography>
          </Box>
        </Box>

        {/* Slider meses */}
        <Box sx={{ mb: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography
              sx={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}
            >
              📅 Por quantos meses?
            </Typography>
            <Chip
              label={`${meses} meses`}
              sx={{
                backgroundColor: "rgba(102, 187, 106, 0.15)",
                color: "#66bb6a",
                fontWeight: "bold",
                fontSize: "0.95rem",
                border: "1px solid rgba(102,187,106,0.3)",
              }}
            />
          </Box>
          <Slider
            value={meses}
            min={1}
            max={24}
            step={1}
            onChange={(e, val) => setMeses(val)}
            sx={{
              color: "#66bb6a",
              height: 6,
              "& .MuiSlider-thumb": {
                backgroundColor: "#66bb6a",
                width: 18,
                height: 18,
                "&:hover": { boxShadow: "0 0 0 8px rgba(102,187,106,0.2)" },
              },
            }}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="caption"
              sx={{ color: "rgba(255,255,255,0.3)" }}
            >
              1 mês
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "rgba(255,255,255,0.3)" }}
            >
              24 meses
            </Typography>
          </Box>
        </Box>

        {/* Botão menor e centralizado */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            onClick={handleSimular}
            startIcon={<PlayArrowIcon />}
            endIcon={<SavingsIcon />}
            sx={{
              background: "linear-gradient(135deg, #1565c0, #42a5f5)",
              padding: "10px 32px",
              borderRadius: "50px",
              fontSize: "0.95rem",
              fontWeight: "bold",
              textTransform: "none",
              boxShadow: "0 4px 20px rgba(66,165,245,0.4)",
              "&:hover": {
                background: "linear-gradient(135deg, #1976d2, #64b5f6)",
                boxShadow: "0 6px 24px rgba(66,165,245,0.6)",
                transform: "translateY(-2px)",
              },
              transition: "all 0.2s ease",
            }}
          >
            Simular Economia
          </Button>
        </Box>
      </Card>

      {/* Resultados */}
      {simulou && (
        <Box>
          <Typography variant="h6" sx={{ color: "white", mb: 2 }}>
            📈 Se você economizar{" "}
            <span style={{ color: "#42a5f5" }}>R$ {valorEconomia}</span>/mês:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            {resultados.map((r) => (
              <Card
                key={r.mes}
                sx={{
                  background: "linear-gradient(135deg, #1565c0, #1976d2)",
                  borderRadius: "14px",
                  padding: "14px 18px",
                  textAlign: "center",
                  minWidth: "90px",
                  flex: 1,
                  boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                  transition: "transform 0.2s",
                  "&:hover": { transform: "translateY(-4px)" },
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "rgba(255,255,255,0.6)", display: "block" }}
                >
                  Mês {r.mes}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  R$ {r.totalEconomizado}
                </Typography>
              </Card>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Simulador;
