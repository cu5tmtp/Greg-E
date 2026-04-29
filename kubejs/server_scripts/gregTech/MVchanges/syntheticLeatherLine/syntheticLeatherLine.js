ServerEvents.recipes((event) => {

    event.recipes.gtceu.chemical_reactor('getleatherbassee')
        .inputFluids(
            'gtceu:polyvinyl_chloride 288',
            'gtceu:seed_oil 532'
        )
        .outputFluids(
            'gtceu:liquid_synthetic_leather_base 216'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(300)
        .circuit(9)

    event.recipes.gtceu.chemical_reactor('getunleatheringot')
        .inputFluids(
            'gtceu:liquid_synthetic_leather_base 288',
        )
        .itemInputs(
            'gtceu:polyethylene_ingot'
        )
        .itemOutputs(
            'gtceu:unfinished_artificial_leather_ingot'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)

    event.recipes.gtceu.bender('getfinleatherplate')
        .itemInputs(
            'gtceu:unfinished_artificial_leather_ingot'
        )
        .itemOutputs(
            'gtceu:artificial_leather_plate'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(60)
        .circuit(1)

    event.recipes.gtceu.chemical_reactor('getbetterboardeasymulti')
        .itemInputs(
            'gtceu:artificial_leather_plate',
            '4x gtceu:silver_foil'
        )
        .inputFluids(
            'gtceu:sodium_persulfate 50',
        )
        .itemOutputs(
            '4x gtceu:phenolic_printed_circuit_board'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(100)
        .circuit(24)
    

    event.recipes.gtceu.chemical_reactor('getbetterboardeasymulti2')
        .itemInputs(
            'gtceu:artificial_leather_plate',
            '4x gtceu:copper_foil'
        )
        .inputFluids(
            'gtceu:glue 10',
        )
        .itemOutputs(
            '8x gtceu:resin_printed_circuit_board'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(100)
        .circuit(24)
})