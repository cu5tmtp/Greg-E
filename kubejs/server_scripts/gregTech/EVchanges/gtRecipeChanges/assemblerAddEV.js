ServerEvents.recipes((event) =>{

    event.recipes.gtceu.assembler('getnettherrackcsx')
        .itemInputs('8x minecraft:cobblestone')
        .inputFluids('minecraft:lava 1000')
        .itemOutputs('8x minecraft:netherrack')
        .duration(200)
        .EUt(1680)

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