ServerEvents.recipes((event) => {

    event.recipes.gtceu.gas_collector()
        .outputFluids(
            'gtceu:forge_smoke 10000'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(300)
        .circuit(7)
        .dimension('cataclysm_dimension:cataclysm_forge_of_aeons')

    event.recipes.gtceu.centrifuge()
        .inputFluids(
            'gtceu:forge_smoke 5000'
        )
        .itemOutputs(
            'gtceu:small_iron_dust',
            'gtceu:small_nickel_dust',
            'gtceu:small_imitation_witherite_dust'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)

    event.shapeless(
        Item.of('gtceu:imitation_witherite_dust', 1),
        [
            '4x gtceu:small_imitation_witherite_dust'
        ]
    )

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:imitation_witherite_dust'
        )
        .itemOutputs(
            'gtceu:imitation_witherite_ingot'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400)
        .blastFurnaceTemp(1500)

    event.recipes.gtceu.wiremill()
        .itemInputs(
            '#grege:witherite'
        )
        .itemOutputs(
            '2x gtceu:witherite_wire_single_wire'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(100)
        .circuit(1)

    event.recipes.gtceu.circuit_assembler('betterboard11111111111')
        .itemInputs(
            'gtceu:phenolic_printed_circuit_board',
            'gtceu:basic_electronic_circuit',
            '2x #gtceu:diodes',
            '2x gtceu:witherite_wire_single_wire'
        )
        .itemOutputs(
            'gtceu:good_electronic_circuit'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(250)
        .circuit(2)

    event.recipes.gtceu.gas_collector()
        .outputFluids(
            'gtceu:abyssal_air 10000'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(300)
        .circuit(8)
        .dimension('cataclysm_dimension:cataclysm_abyssal_depths')

    event.recipes.gtceu.electrolyzer()
        .inputFluids(
            'gtceu:abyssal_air 5000'
        )
        .outputFluids(
            'gtceu:abyssal_goo 2500'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(300)
        .circuit(1)

    event.recipes.gtceu.mixer()
        .inputFluids(
            'gtceu:abyssal_goo 1000'
        )
        .itemInputs(
            'minecraft:egg'
        )
        .itemOutputs(
            'kubejs:imitationegg'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)
        .circuit(1)

    event.recipes.gtceu.analyzator()
        .itemInputs(
            'kubejs:imitationegg'
        )
        .itemOutputs(
            'gtceu:abyssal_wire_ingot'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)
        .circuit(1)

    event.recipes.gtceu.analyzator()
        .notConsumable(
            'cataclysm:abyssal_egg'
        )
        .itemOutputs(
            'gtceu:abyssal_wire_ingot'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(100)
        .circuit(2)

    event.recipes.gtceu.wiremill()
        .itemInputs(
            'gtceu:abyssal_wire_ingot'
        )
        .itemOutputs(
            '2x gtceu:abyssal_wire_single_wire'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(100)
        .circuit(1)

    event.recipes.gtceu.circuit_assembler('circffvf12312311')
        .itemInputs(
            'gtceu:good_integrated_circuit',
            'gtceu:ilc_chip',
            '2x gtceu:ram_chip',
            '4x #gtceu:transistors',
            '8x gtceu:fine_electrum_wire',
            '2x gtceu:abyssal_wire_single_wire'
        )
        .itemOutputs(
            'gtceu:advanced_integrated_circuit'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(700)

})