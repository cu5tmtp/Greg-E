ServerEvents.recipes((event) => {

    event.recipes.gtceu.mixer('craftalchfluid')
        .itemInputs(
            '20x projecte:low_covalence_dust',
            '20x projecte:medium_covalence_dust',
            '20x projecte:high_covalence_dust'
        )
        .inputFluids(
            'minecraft:water 1000'
        )
        .outputFluids(
            'kubejs:alchessence 1000'
        )
        .duration(200)
        .EUt(80)
        

})