ServerEvents.recipes((event) => {

    event.remove('gtceu:chemical_reactor/hydrofluoric_acid_from_elements')
    event.remove('gtceu:large_chemical_reactor/hydrofluoric_acid_from_elements')

    event.recipes.gtceu.chemical_reactor()
        .inputFluids(
            '#forge:hydrogen 1000',
            'gtceu:fluorine 1000'
        )
        .outputFluids(
            'gtceu:hydrofluoric_acid 1000'
        )
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(60)
        .circuit(1)

})