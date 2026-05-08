ServerEvents.recipes((event) => {

    event.shaped(
        Item.of('gtceu:oreprocessor', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/zpm',
            B: 'gtceu:crushing_wheels',
            C: 'gtceu:secure_maceration_casing',
            D: 'gtceu:high_temperature_smelting_casing',
            E: 'gtceu:zpm_machine_hull'
        }
    )

    event.recipes.botania.mana_infusion('2x bloodmagic:rawdemonite', 'bloodmagic:rawdemonite', 15000, 'botania:conjuration_catalyst')

    event.recipes.gtceu.gas_collector('getdemoinicaroi')
        .circuit(6)
        .outputFluids(
            'gtceu:demonic_air 10000'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(500)
        .dimension('bloodmagic:dungeon')

    event.recipes.gtceu.distillation_tower('distilldemonicarrrr')
        .inputFluids(
            'gtceu:demonic_air 30000'
        )
        .outputFluids(
            'gtceu:demonic_gas 7500',
            'gtceu:sulfuric_gas 15000',
            'gtceu:sulfur_dioxide 7500'
        )
        .chancedOutput('gtceu:sulfur_dust', 1000, 0)
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(750)

    event.recipes.gtceu.canner('canthegassssin')
        .itemInputs(
            'gtceu:empty_spray_can'
        )
        .inputFluids(
            'gtceu:demonic_gas 1500',
        )
        .itemOutputs(
            'kubejs:demonicgascan'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(250)
       
    event.recipes.gtceu.oreprocessor('oreeehelforgeteit')
        .itemInputs(
            'bloodmagic:rawdemonite'
        )
        .itemOutputs(
            'gtceu:dirty_demonite_dust'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(250)

    event.recipes.gtceu.electrolyzer('electrolyzethedamndemondust')
        .itemInputs(
            '3x gtceu:dirty_demonite_dust'
        )
        .itemOutputs(
            'gtceu:pure_demonite_dust',
            '2x gtceu:sulfur_dust',
            '5x gtceu:iron_dust'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(500)

    event.recipes.gtceu.electric_blast_furnace('smelttheingot')
        .itemInputs(
            'gtceu:pure_demonite_dust'
        )
        .itemOutputs(
            'gtceu:pure_demonite_ingot'
        )
        .inputFluids(
            'gtceu:demonic_gas 500',
        )
        .outputFluids(
            'gtceu:sulfuric_gas 250',
        )
        .blastFurnaceTemp(7000)
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(600)

    event.recipes.gtceu.assembler('coattheingot')
        .itemInputs(
            'gtceu:pure_demonite_ingot',
            'kubejs:demonicgascan'
        )
        .itemOutputs(
            'gtceu:coated_demonite_ingot'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(200)
        .circuit(1)

    event.recipes.gtceu.wiremill('getthewire')
        .itemInputs(
            'gtceu:coated_demonite_ingot'
        )
        .itemOutputs(
            '8x gtceu:fine_coated_demonite_wire'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(250)
        .circuit(3)

    event.recipes.gtceu.large_chemical_reactor('getthefufinallyldcsddsxxs')
        .itemInputs(
            'gtceu:multilayer_fiber_reinforced_circuit_board',
            '4x gtceu:fine_coated_demonite_wire'
        )
        .inputFluids(
            'gtceu:iron_iii_chloride 1000'
        )
        .itemOutputs(
            '4x gtceu:multilayer_fiber_reinforced_printed_circuit_board'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(1200)
        .circuit(24)
        .cleanroom(CleanroomType.CLEANROOM)


})