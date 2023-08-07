const arrayDeDados = [{nome: 'Ronaldo', nota: 8}, {nome: 'Gian', nota: 3}, {nome: 'Matheus', nota: 7}, {nome: 'José', nota: 4}, {nome: 'Maria', nota: 9}, {nome: 'Eduarda', nota: 1}]
console.log(arrayDeDados)

const retornaArrayComNotasBoas = () =>
{
    const notasMaioresOuIgualASeis = arrayDeDados.filter(function(item)
    {
        return item.nota >= 6
    })
    return notasMaioresOuIgualASeis
}
console.log('As pessoas com notas maiores ou igual a 6 são:')
console.log(retornaArrayComNotasBoas())