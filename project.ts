
function logExecucao(target:any, propertkey:string, descriptor:PropertyDescriptor) {
  const originalMethod = descriptor.value
  descriptor.value = function(...agrs:any[]) {
    console.log(`o metodo ${propertkey} foi acionado, com os seguintes argumentos : `, agrs)
    const resultado = originalMethod.apply(this, agrs)
    return resultado
  }
}



interface Usuario {
  nome: string
  idade: number
  email: string
}


class Respositorio<T> {
   private items: T[] = []

   @logExecucao
   adicionar(item: T): void {
      this.items.push(item)
   } 

   @logExecucao
   remover(item: T):void {
    this.items = this.items.filter((i)=> {i !== item})
   }

   @logExecucao
   listar():T[] {
    return this.items
   }
}