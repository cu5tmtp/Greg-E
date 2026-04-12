ServerEvents.recipes((event) =>{

    event.recipes.gtceu.assembler('getmythrilyummy')
        .itemInputs(
            'minecraft:brush'
        )
        .inputFluids(
            'gregecore:molten_mythril 1008'
        )
        .itemOutputs(
            'kubejs:mybrush'
        )
        .duration(200)
        .EUt(1680)

})