ServerEvents.recipes((event) => {

    event.recipes.gtceu.mixer('getfineduuuusttt')
        .itemInputs(
            '2x kubejs:voiddust'
        )
        .inputFluids(
            'kubejs:meltedirt 500'
        )
        .itemOutputs(
            'kubejs:earthlydust'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)

})