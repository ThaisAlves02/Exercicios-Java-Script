import { number} from "@inquirer/prompts";

const secreto = 7;

let tentativas = 0;

while (true) {
  const num = await number ({message:"Dê um palpite de 1 à 20: "})
  tentativas += 1;

  if (num === secreto) {
    console.log(`Acertou! ${secreto}`)
    break
  }
  else if (num > secreto) {
    console.log("É menor!")
  }
  else if (num < secreto) {
    console.log("É maior!")
  }

  if (tentativas >= 3) {
    console.log(`Você usou ${tentativas}!`)
    break
  }
}