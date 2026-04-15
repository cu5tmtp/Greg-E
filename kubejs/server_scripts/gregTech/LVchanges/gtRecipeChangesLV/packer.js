ServerEvents.recipes((event) => {

    const specksToChange = [
        {id: 'quartz', output: 'quartz'},
        {id: 'cquartz', output: 'cquartz'},
        {id: 'g', output: 'g'},
        {id: 'lapis', output: 'lapis'}
    ]

    specksToChange.forEach(change => {

        event.recipes.gtceu.packer(`${change.id}craft`)
            .itemInputs(
                `9x kubejs:${change.id}speck`
            )
            .itemOutputs(
                `kubejs:${change.output}spile`
            )
            .EUt(GTValues.VA[GTValues.LV])
            .duration(30)
            .circuit(1)
            
    })

    event.recipes.gtceu.packer('getdclusterrr')
        .itemInputs(
            '9x kubejs:dshard'
        )
        .itemOutputs(
            'kubejs:dcluster'                
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(30)
        .circuit(1)

    const pilesToChange = [
        {id: 'quartz', output: 'minecraft:quartz'},
        {id: 'cquartz', output: 'ae2:certus_quartz_crystal'},
        {id: 'g', output: 'gtceu:gold_dust'},
        {id: 'lapis', output: 'minecraft:lapis_lazuli'}
    ]

    pilesToChange.forEach(change => {

        event.recipes.gtceu.packer(`${change.id}craftwithpile`)
            .itemInputs(
                `9x kubejs:${change.id}spile`
            )
            .itemOutputs(
                `${change.output}`
            )
            .EUt(GTValues.VA[GTValues.LV])
            .duration(30)
            .circuit(1)
            
    })

    event.recipes.gtceu.packer('getdiaaaaaaa')
        .itemInputs(
            '9x kubejs:dcluster'
        )
        .itemOutputs(
            'minecraft:diamond'                
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(30)
        .circuit(1)

})