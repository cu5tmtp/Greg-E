ServerEvents.recipes((event) => {

     event.shaped(
        Item.of('gtceu:marsbacteriabreeder', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/hv',
            B: 'ad_astra:mars_sand',
            C: 'gtceu:fine_steel_wire',
            D: 'gtceu:steel_frame',
            E: 'gtceu:hv_machine_hull'
        }
    )

    event.recipes.botania.mana_infusion('2x ad_astra:mars_sand', 'ad_astra:mars_sand', 1000, 'botania:conjuration_catalyst')

    event.recipes.gtceu.macerator('getcrushedmarssand')
        .itemInputs(
            'ad_astra:mars_sand'
        )
        .itemOutputs(
            'gtceu:crushed_mars_stone_dust'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(50)

    event.recipes.gtceu.gas_collector('getmarsairrrrrr')
        .outputFluids(
            'gtceu:mars_air 10000'
        )
        .dimension('ad_astra:mars')
        .circuit(4)
        .EUt(GTValues.VA[GTValues.HV])
        .duration(1000)

    event.recipes.gtceu.chemical_reactor('getmediumtierone')
        .inputFluids(
            'gtceu:distilled_water 1000',
            'gtceu:ammonia 500',
            'gtceu:nitrogen 250'
        )
        .outputFluids(
            'gtceu:culture_medium 750'
        )
        .circuit(1)
        .EUt(GTValues.VA[GTValues.HV])
        .duration(500)

    event.recipes.gtceu.chemical_reactor('getmediumtiertwo')
        .itemInputs(
            '4x gtceu:crushed_mars_stone_dust'
        )
        .inputFluids(
            'gtceu:culture_medium 500'
        )
        .outputFluids(
            'gtceu:extreme_medium 250'
        )
        .circuit(1)
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)

    event.recipes.gtceu.marsbacteriabreeder('gettetmoorrrrerr')
        .inputFluids(
            'gtceu:mars_air 5000',
            'gtceu:extreme_medium 1000'
        )
        .outputFluids(
            'gtceu:mars_bacteria 500'
        )
        .circuit(1)
        .EUt(GTValues.VA[GTValues.HV])
        .duration(1000)

    event.recipes.gtceu.large_chemical_reactor('plasticprintedlalalala')
        .itemInputs(
            'gtceu:plastic_circuit_board',
            '6x gtceu:copper_foil'
        )
        .inputFluids(
            'gtceu:mars_bacteria 50'
        )
        .itemOutputs(
            '4x gtceu:plastic_printed_circuit_board'
        )
        .circuit(24)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400)
        
})