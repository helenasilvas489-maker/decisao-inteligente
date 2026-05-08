import React from "react";
import { Box, Typography, Avatar, Chip } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

function Header({ usuario }) {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, #003366 0%, #005ca9 100%)",
        padding: "40px 40px 60px 40px",
        position: "relative",
        overflow: "hidden",
        borderBottom: "4px solid #f29100",
      }}
    >
      {/* Círculos decorativos */}
      <Box
        sx={{
          position: "absolute",
          top: -50,
          right: -50,
          width: 200,
          height: 200,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.05)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -30,
          right: 150,
          width: 120,
          height: 120,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.05)",
        }}
      />

      {/* Conteúdo */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
        <Avatar sx={{ backgroundColor: "#f29100", width: 48, height: 48, boxShadow: "0px 4px 12px rgba(0,0,0,0.15)" }}>
          <AccountBalanceWalletIcon />
        </Avatar>
        <Box>
          <Typography variant="h5" sx={{ color: "white", fontWeight: "800" }}>
            💡 Decisão Inteligente
          </Typography>
          <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>
            Análise Financeira
          </Typography>
        </Box>
        <Chip
          icon={<TrendingUpIcon />}
          label="Ativo"
          sx={{ ml: "auto", backgroundColor: "#66bb6a", fontWeight: "bold", textTransform: "uppercase", color: "white"}}
        />
      </Box>

      <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.8)", mb: 1 }}>
        Olá, {usuario.nome} 👋
      </Typography>
      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)" }}>
        Aqui está o resumo financeiro do seu mês
      </Typography>
    </Box>
  );
}

export default Header;
