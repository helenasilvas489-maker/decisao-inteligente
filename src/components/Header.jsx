import React from "react";
import { Box, Typography, Avatar, Chip } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

function Header({ usuario }) {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, #1a237e 0%, #0d47a1 50%, #01579b 100%)",
        padding: "40px 40px 60px 40px",
        position: "relative",
        overflow: "hidden",
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
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
        <Avatar sx={{ backgroundColor: "#42a5f5", width: 50, height: 50 }}>
          <AccountBalanceWalletIcon />
        </Avatar>
        <Box>
          <Typography variant="h5" sx={{ color: "white", fontWeight: "bold" }}>
            💡 Decisão Inteligente
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
            Plataforma de Análise Financeira
          </Typography>
        </Box>
        <Chip
          icon={<TrendingUpIcon />}
          label="Ativo"
          sx={{ ml: "auto", backgroundColor: "#43a047", color: "white" }}
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
