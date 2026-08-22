ServerEvents.recipes((event) => {

    event.recipes.gtceu.chemical_reactor()
        .itemInputs(
            'gtceu:raw_delirium'
        )
        .inputFluids(
            'gtceu:sulfuric_acid 1500'
        )
        .outputFluids(
            'gtceu:delirium_slurry 1200'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(250)
        .circuit(1)


    event.recipes.gtceu.chemical_reactor()
        .inputFluids(
            'gtceu:delirium_slurry 1000',
            'gtceu:poly_atarax_acid 500'
        )
        .outputFluids(
            'gtceu:poly_atarium_solution 750'
        )
        .chancedOutput('gtceu:delirium_gem_gem', 100, 0)
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(250)
        .circuit(1)

    event.recipes.gtceu.auxillaryfiltrator()
        .inputFluids(
            'gtceu:poly_atarium_solution 750'
        )
        .itemOutputs(
            'gtceu:poly_atarium_solution_dust'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .circuit(1)

    event.recipes.gtceu.auxillaryfiltrator()
        .inputFluids(
            'gtceu:poly_atarium_solution 1000'
        )
        .itemOutputs(
            '4x gtceu:poly_atarium_solution_dust'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(800)
        .circuit(2)

    event.recipes.gtceu.auxillaryfiltrator()
        .inputFluids(
            'gtceu:poly_atarium_solution 850'
        )
        .itemOutputs(
            '2x gtceu:poly_atarium_solution_dust'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(350)
        .circuit(3)

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'gtceu:poly_atarium_solution_dust'
        )
        .itemOutputs(
            'gtceu:delirium_dust',
            'gtceu:atarax_dust'
        )
        .chancedOutput('gtceu:small_atarax_dust', 2500, 0)
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(250)
        .circuit(2)

    event.shaped(
        Item.of('gtceu:atarax_dust', 1),
        [
            'AA ',
            'AA ',
            '   '
        ],
        {
            A: 'gtceu:small_atarax_dust'
        }
    )

    event.recipes.gtceu.compressor()
        .itemInputs(
            '4x gtceu:small_atarax_dust'
        )
        .itemOutputs(
            'gtceu:atarax_dust'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(50)

    event.recipes.gtceu.macerator()
        .itemInputs(
            'gtceu:delirium_gem_gem'
        )
        .itemOutputs(
            'gtceu:delirium_gem_dust'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(75)

    event.recipes.gtceu.mixer()
        .itemInputs(
            '2x gtceu:delirium_gem_dust',
            'gtceu:delirium_dust'
        )
        .itemOutputs(
            '2x gtceu:reinforced_delirium_dust'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)
        .circuit(1)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:reinforced_delirium_dust'
        )
        .inputFluids(
            'gtceu:nebulon_alpha 100'
        )
        .chancedOutput('gtceu:hot_reinforced_delirium_bad_ingot', 6500, 0)
        .chancedOutput('gtceu:hot_reinforced_delirium_ingot', 3500, 0)
        .chancedItemOutputLogic(ChanceLogic.XOR)
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(500)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            '2x gtceu:hot_reinforced_delirium_bad_ingot'
        )
        .inputFluids(
            'gtceu:nebulon_alpha 50'
        )
        .itemOutputs(
            'gtceu:hot_reinforced_delirium_ingot'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)

    event.recipes.gtceu.vacuum_freezer()
        .itemInputs(
            'gtceu:hot_reinforced_delirium_ingot'
        )
        .itemOutputs(
            'gtceu:reinforced_delirium_ingot'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)

    event.shaped(
        Item.of('gtceu:reinforced_delirium_block', 1),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'gtceu:reinforced_delirium_ingot'
        }
    )

    event.recipes.gtceu.compressor()
        .itemInputs(
            '9x gtceu:reinforced_delirium_ingot'
        )
        .itemOutputs(
            'gtceu:reinforced_delirium_block'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(50)

    event.recipes.gtceu.macerator()
        .itemInputs(
            'gtceu:raw_atarax'
        )
        .itemOutputs(
            '3x gtceu:atarax_dust'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

    event.recipes.gtceu.large_chemical_reactor()
        .itemInputs(
            '4x gtceu:atarax_dust'
        )
        .inputFluids(
            'gtceu:psi_particles 250',
            'gtceu:fluoronaquadic_acid 350'
        )
        .outputFluids(
            'gtceu:poly_atarax_acid 1100'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(600)

    event.recipes.gtceu.advanced_fusion()
        .itemInputs(
            'avaritia:infinity_catalyst'
        )
        .outputFluids(
            'gtceu:psi_particles 1500'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)
        .addData('heat_level', 3700)

    event.recipes.gtceu.wiremill()
        .itemInputs(
            'gtceu:reinforced_delirium_ingot'
        )
        .outputFluids(
            '2x gtceu:reinforced_delirium_single_wire'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)

})