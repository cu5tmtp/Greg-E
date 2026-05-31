ServerEvents.recipes((event) => {

    event.recipes.gtceu.chemical_reactor()
        .inputFluids(
            'gtceu:nitrobenzene 500',
            'gtceu:hydrogen 350'
        )
        .outputFluids(
            'gtceu:aniline 850'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(150)
        .circuit(4)

    event.recipes.gtceu.chemical_reactor()
        .inputFluids(
            'gtceu:aniline 850',
            'gtceu:ammonia 150'
        )
        .outputFluids(
            'gtceu:p_phenylenediamine 700'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
        .circuit(4)

    event.recipes.gtceu.autoclave()
        .inputFluids(
            'gtceu:dimethylbenzene 532',
        )
        .itemOutputs(
            'gtceu:proto_p_xylene_dust'
        )
        .outputFluids(
            'gtceu:dimethylbenzene 288'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(100)
        .circuit(13)

    event.recipes.gtceu.chemical_reactor()
        .itemInputs(
            'gtceu:proto_p_xylene_dust'
        )
        .inputFluids(
            'gtceu:nitric_acid 850',
            'gtceu:hydrogen 350'
        )
        .outputFluids(
            'gtceu:terephthalic_acid 1000'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(250)
        .circuit(4)

    event.recipes.gtceu.chemical_reactor()
        .inputFluids(
            'gtceu:carbon_monoxide 750',
            'gtceu:chlorine 650'
        )
        .outputFluids(
            'gtceu:phosgene 1000'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(330)
        .circuit(4)

    event.recipes.gtceu.chemical_reactor()
        .inputFluids(
            'gtceu:terephthalic_acid 550',
            'gtceu:phosgene 450'
        )
        .outputFluids(
            'gtceu:terephthaloyl_chloride 750'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
        .circuit(4)

    event.recipes.gtceu.chemical_reactor()
        .inputFluids(
            'gtceu:terephthaloyl_chloride 750',
            'gtceu:p_phenylenediamine 250'
        )
        .itemOutputs(
            '4x gtceu:kevlar_dust'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(400)
        .circuit(4)

    event.recipes.gtceu.forming_press()
        .itemInputs(
            'gtceu:kevlar_dust'
        )
        .notConsumable('gtceu:ingot_casting_mold')
        .itemOutputs(
            'gtceu:kevlar_ingot'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(100)

    event.recipes.gtceu.bender()
        .itemInputs(
            'gtceu:kevlar_ingot'
        )
        .itemOutputs(
            'gtceu:kevlar_plate'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(100)
        .circuit(1)

    event.recipes.gtceu.netherdrillrig('drillevilore2')
        .itemInputs(
            '2x kubejs:earthlydust',
            'gtceu:kevlar_plate'
        )
        .itemOutputs(
            '3x kubejs:eidust'
        )
        .duration(40)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(3)   
        .dimension('minecraft:the_nether')  

})