import { number} from "@inquirer/prompts";

const num = await number ({message:"Digite o número da tabuada desejada:"})


for (let i = 1; i <= 10; i++) {
  console.log(`${num} X ${i} = ${num * i}`)
}
