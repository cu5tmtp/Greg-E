ServerEvents.recipes((event) => {

    event.recipes.gtceu.large_chemical_reactor()
        .itemInputs(
            'kubejs:mirrorofkalandra'
        )
        .inputFluids(
            'minecraft:water 10000'
        )
        .outputFluids(
            'justdirethings:polymorphic_fluid 10000'
        )

})