ServerEvents.recipes((event) => {

    event.recipes.gtceu.bender('twilightfoilbender')
        .itemInputs(
            'kubejs:twilightingots',
        )
        .itemOutputs(
            '4x kubejs:twilightfoil',
        )
        .duration(100)
        .EUt(120)
        .circuit(10)

})