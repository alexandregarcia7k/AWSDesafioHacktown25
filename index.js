const readline = require('readline');
const { exec } = require('child_process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual gênero musical você gostaria? ', (genero) => {
  console.log(`\nBuscando recomendações de ${genero}...\n`);
  
  const prompt = `Recomende exatamente 5 músicas do gênero ${genero}. Para cada música, forneça: nome da música, artista e uma justificativa curta (máximo 20 palavras) de por que é uma boa representação do gênero.`;
  
  exec(`q ask "${prompt}"`, (error, stdout, stderr) => {
    if (error) {
      console.error('Erro ao executar Amazon Q CLI:', error.message);
      rl.close();
      return;
    }
    
    if (stderr) {
      console.error('Aviso:', stderr);
    }
    
    console.log('🎵 Recomendações do Amazon Q:\n');
    console.log(stdout);
    
    rl.close();
  });
});