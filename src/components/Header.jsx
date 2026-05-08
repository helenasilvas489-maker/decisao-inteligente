import React from "react";
import { Box, Typography, Avatar, Chip, Divider } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function Header({ usuario }) {
  const dataAtual = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #003F88 0%, #002366 100%)",
        padding: "28px 40px",
        borderBottom: "3px solid #F7941D",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Círculo decorativo */}
      <Box
        sx={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 220,
          height: 220,
          borderRadius: "50%",
          border: "40px solid rgba(247,148,29,0.08)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -40,
          right: 180,
          width: 130,
          height: 130,
          borderRadius: "50%",
          border: "30px solid rgba(247,148,29,0.06)",
        }}
      />

      {/* Linha superior — logo + chip */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2.5,
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            sx={{
              backgroundColor: "#F7941D",
              width: 46,
              height: 46,
              boxShadow: "0 4px 14px rgba(247,148,29,0.4)",
            }}
          >
            <AccountBalanceIcon sx={{ color: "white", fontSize: 24 }} />
          </Avatar>
          <Box>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: "1.3rem",
                lineHeight: 1.2,
              }}
            >
              Decisão Inteligente
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "0.78rem",
              }}
            >
              Plataforma de Análise Financeira
            </Typography>
          </Box>
        </Box>

        {/* Chip ativo */}
        <Chip
          icon={
            <TrendingUpIcon sx={{ color: "white !important", fontSize: 16 }} />
          }
          label="Ativo"
          sx={{
            backgroundColor: "#F7941D",
            color: "white",
            fontWeight: "bold",
            fontSize: "0.8rem",
            height: 30,
            boxShadow: "0 2px 10px rgba(247,148,29,0.3)",
          }}
        />
      </Box>

      {/* Divisor sutil */}
      <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", mb: 2.5 }} />

      {/* Linha inferior — saudação + data */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: "1.15rem",
            }}
          >
            Olá, {usuario.nome} 👋
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "0.82rem",
            }}
          >
            Aqui está o resumo financeiro do seu mês
          </Typography>
        </Box>

        {/* Data */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            backgroundColor: "rgba(255,255,255,0.07)",
            padding: "6px 14px",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <CalendarMonthIcon sx={{ color: "#F7941D", fontSize: 16 }} />
          <Typography
            sx={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "0.78rem",
              textTransform: "capitalize",
            }}
          >
            {dataAtual}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
