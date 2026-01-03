ServerEvents.recipes((event) => {

    event.recipes.gtceu.wiremill('2xmanasteel')
        .itemInputs(
            'botania:manasteel_ingot'
        )
        .itemOutputs(
            'kubejs:twoxmanacable'
        )
        .duration(60)
        .EUt(5)
        .circuit(2)

    event.recipes.gtceu.bender('manasteelfoil')
        .itemInputs(
            'botania:manasteel_ingot'
        )
        .itemOutputs(
            '4x kubejs:manasteelfoil'
        )
        .duration(70)
        .EUt(24)
        .circuit(10)

    
})