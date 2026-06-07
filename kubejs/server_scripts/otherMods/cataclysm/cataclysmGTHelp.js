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
        .EUt(GTValues.VA[GTValues.LV])
        .duration(700)

    event.recipes.gtceu.sifter()
        .itemInputs(
            '4x #forge:sand'
        )
        .itemOutputs(
            'gtceu:small_impure_ancient_metal_dust'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
        .dimension('cataclysm_dimension:cataclysm_pharaohs_bane')

    event.shapeless(
        Item.of('gtceu:impure_ancient_metal_dust', 1),
        [
            '4x gtceu:small_impure_ancient_metal_dust'
        ]
    )

    event.recipes.gtceu.chemical_reactor()
        .itemInputs(
            'gtceu:impure_ancient_metal_dust'
        )
        .inputFluids(
            'gtceu:sulfuric_acid 150'
        )
        .itemOutputs(
            'gtceu:dirty_ancient_metal_dust'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(250)
        .circuit(5)

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'gtceu:dirty_ancient_metal_dust'
        )
        .itemOutputs(
            'gtceu:quartz_sand_dust',
            'gtceu:ancient_metal_imitation_dust'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(150)
        .circuit(1)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:ancient_metal_imitation_dust'
        )
        .itemOutputs(
            'gtceu:ancient_metal_imitation_ingot'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(450)

    event.recipes.gtceu.wiremill()
        .itemInputs(
            '#grege:ancientmetal'
        )
        .itemOutputs(
            '2x gtceu:ancient_metal_single_wire'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(100)
        .circuit(1)

    event.recipes.gtceu.circuit_assembler('fvev123f32135e1gfe35v1531')
        .itemInputs(
            'gtceu:plastic_printed_circuit_board',
            'gtceu:micro_processor_assembly',
            '2x #gtceu:diodes',
            '2x gtceu:ram_chip',
            '2x gtceu:ancient_metal_single_wire',
            '12x gregecore:nobelium_bolt'
        )
        .itemOutputs(
            'gtceu:micro_processor_computer'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(300)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.gas_collector()
        .outputFluids(
            'gtceu:ignitium_infused_lava 10000'
        )   
        .circuit(9) 
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
        .dimension('cataclysm_dimension:cataclysm_infernos_maw')

    event.recipes.gtceu.centrifuge()
        .inputFluids(
            'gtceu:ignitium_infused_lava 5000'
        )
        .outputFluids(
            'minecraft:lava 100',
            'gtceu:dirty_ignitium_lava 3500'
        )
        .itemOutputs(
            'gtceu:ash_dust'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(350)
        .circuit(4)

    event.recipes.gtceu.electrolyzer()
        .inputFluids(
            'gtceu:dirty_ignitium_lava 2000'
        )
        .outputFluids(
            'minecraft:lava 100'
        )
        .itemOutputs(
            'gtceu:ignitium_imitation_dust',
            'gtceu:small_stone_dust'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(300)
        .circuit(2)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:ignitium_imitation_dust'
        )
        .itemOutputs(
            'gtceu:ignitium_imitation_ingot'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(800)
        .blastFurnaceTemp(2500)

    event.recipes.gtceu.wiremill()
        .itemInputs(
            '#grege:ignitium'
        )
        .itemOutputs(
            '2x gtceu:ignitium_wire_single_wire'
        )
        .circuit(1)
        .EUt(GTValues.VA[GTValues.EV])
        .duration(100)

    event.recipes.gtceu.circuit_assembler('d4fed35v43df5v43df5v4d3fv4d')
        .itemInputs(
            '2x gtceu:aluminium_frame',
            'gtceu:micro_processor_computer',
            '6x #gtceu:inductors',
            '12x #gtceu:capacitors',
            '12x gtceu:ram_chip',
            '12x gtceu:ignitium_wire_single_wire'
        )
        .itemOutputs(
            'gtceu:micro_processor_mainframe'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(700)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.circuit_assembler('d4fed35v43df5v43dvcghchgf5v4d3fv4d')
        .itemInputs(
            '2x gtceu:aluminium_frame',
            'gtceu:micro_processor_computer',
            'gtceu:advanced_smd_inductor',
            '2x gtceu:advanced_smd_capacitor',
            '12x gtceu:ram_chip',
            '12x gtceu:ignitium_wire_single_wire'
        )
        .itemOutputs(
            'gtceu:micro_processor_mainframe'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(300)
        .cleanroom(CleanroomType.CLEANROOM)

})