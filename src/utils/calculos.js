// 1. Calcula o total de todos os gastos
export function calcularTotalGastos(gastos) {
  return gastos.reduce((total, gasto) => total + gasto.valor, 0);
}

// 2. Calcula o saldo (quanto sobrou da renda)
export function calcularSaldo(rendaMensal, gastos) {
  const total = calcularTotalGastos(gastos);
  return rendaMensal - total;
}

// 3. Agrupa os gastos por categoria
export function agruparPorCategoria(gastos) {
  return gastos.reduce((grupos, gasto) => {
    const cat = gasto.categoria;
    if (!grupos[cat]) {
      grupos[cat] = 0;
    }
    grupos[cat] += gasto.valor;
    return grupos;
  }, {});
}

// 4. Gera insights automáticos baseados nos gastos
export function gerarInsights(gastos, rendaMensal, metaEconomia) {
  const insights = [];
  const total = calcularTotalGastos(gastos);
  const saldo = rendaMensal - total;
  const grupos = agruparPorCategoria(gastos);

  // Insight 1: Saldo negativo
  if (saldo < 0) {
    insights.push({
      tipo: "perigo",
      mensagem: ` Você gastou R$${Math.abs(saldo).toFixed(2)} a mais do que ganhou esse mês!`,
    });
  }

  // Insight 2: Gasto alto com alimentação
  if (grupos["Alimentação"] > rendaMensal * 0.3) {
    insights.push({
      tipo: "atencao",
      mensagem: ` Seus gastos com alimentação (R$${grupos["Alimentação"]}) estão acima de 30% da sua renda. Considere cozinhar mais em casa!`,
    });
  }

  // Insight 3: Gasto alto com lazer
  if (grupos["Lazer"] > rendaMensal * 0.15) {
    insights.push({
      tipo: "atencao",
      mensagem: ` Você gastou R$${grupos["Lazer"]} com lazer. Tente reduzir para liberar mais dinheiro!`,
    });
  }

  // Insight 4: Meta de economia
  if (saldo >= metaEconomia) {
    insights.push({
      tipo: "sucesso",
      mensagem: ` Parabéns! Você conseguiu guardar R$${saldo.toFixed(2)}, superando sua meta de R$${metaEconomia}!`,
    });
  } else {
    insights.push({
      tipo: "atencao",
      mensagem: ` Sua meta é economizar R$${metaEconomia}, mas você só conseguiu R$${saldo > 0 ? saldo.toFixed(2) : 0}. Precisamos ajustar!`,
    });
  }

  return insights;
}

// 5. Simula economia futura
export function simularEconomia(saldoAtual, valorEconomia, meses) {
  const resultados = [];
  for (let i = 1; i <= meses; i++) {
    resultados.push({
      mes: i,
      totalEconomizado: (valorEconomia * i).toFixed(2),
    });
  }
  return resultados;
}
