ServerEvents.recipes((event) => {

    event.recipes.gtceu.macerator()
        .itemInputs(
            'minecraft:ancient_debris'
        )
        .itemOutputs(
            'gtceu:dirty_ancient_debris_dust',
            '2x gtceu:small_dirty_ancient_debris_dust'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)

    event.shaped(
        Item.of('gtceu:dirty_ancient_debris_dust', 1),
        [
            'AA ',
            'AA ',
            '   '
        ],
        {
            A: 'gtceu:small_dirty_ancient_debris_dust'
        }
    )

    event.shaped(
        Item.of('gtceu:specthermalcentrifuge', 1),
        [
            'DAD',
            'CBC',
            'FEF'
        ],
        {
            A: '#gtceu:circuits/iv',
            B: 'gtceu:iv_machine_hull',
            C: 'gtceu:iv_electric_motor',
            D: 'gtceu:iv_electric_pump',
            E: 'gtceu:tungsten_steel_rotor',
            F: 'gtceu:solid_machine_casing'
        }
    )

    event.recipes.gtceu.compressor()
        .itemInputs(
            '4x gtceu:small_dirty_ancient_debris_dust'
        )
        .itemOutputs(
            'gtceu:dirty_ancient_debris_dust'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)

    event.recipes.gtceu.specthermalcentrifuge()
        .itemInputs(
            'gtceu:dirty_ancient_debris_dust'
        )
        .itemOutputs(
            'gtceu:purified_ancient_debris_dust',
            '3x gtceu:stone_dust'
        )
        .outputFluids(
            'gtceu:ender_air 50'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(300)

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'gtceu:purified_ancient_debris_dust'
        )
        .itemOutputs(
            'gtceu:ignisium_sulfide_dust'
        )
        .outputFluids(
            'gtceu:hydrogen_sulfide 30',
            'gtceu:sulfuric_naphtha 10'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(150)

    event.recipes.gtceu.extractor()
        .itemInputs(
            'gtceu:ignisium_sulfide_dust'
        )
        .outputFluids(
            'gtceu:ignisium_sulfide 1000'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(100)

    event.recipes.gtceu.distillation_tower()
        .inputFluids(
            'gtceu:ignisium_sulfide 1000'
        )
        .outputFluids(
            'gtceu:ignisium 550',
            'gtceu:carbon_monoxide 150',
            'gtceu:carbon_dioxide 100',
            'gtceu:sulfur_trioxide 200'
        )
        .chancedOutput('gtceu:stygian_slag_dust', 5000, 0)
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(350)
        .disableDistilleryRecipes(true)

    event.recipes.gtceu.autoclave()
        .inputFluids(
            'gtceu:ignisium 1000'
        )
        .itemOutputs(
            'gtceu:ignisium_dust'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(100)
        .circuit(1)

    event.recipes.gtceu.mixer()
        .itemInputs(
            'gtceu:ignisium_dust',
            '4x gtceu:gold_dust'
        )
        .inputFluids(
            'gtceu:nether_air 100'
        )
        .itemOutputs(
            '4x gtceu:netherite_dust'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(100)
        .circuit(1)

    event.recipes.gtceu.large_chemical_reactor()
        .itemInputs(
            'gtceu:stygian_slag_dust'
        )
        .inputFluids(
            'gtceu:sulfuric_acid 350',
            'gtceu:phosphoric_acid 500',
            'gtceu:hydrochloric_acid 150'
        )
        .outputFluids(
            'gtceu:stygian_solution 1200'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(550)
        .circuit(4)

    event.recipes.gtceu.centrifuge()
        .inputFluids(
            'gtceu:stygian_solution 1000'
        )
        .itemOutputs(
            '3x gtceu:small_gold_dust',
            'gtceu:muddy_infernit_dust',
            '2x gtceu:netherrack_dust'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(550)

    event.recipes.gtceu.large_chemical_reactor()
        .itemInputs(
            'gtceu:muddy_infernit_dust'
        )
        .inputFluids(
            'gtceu:sulfuric_acid 650',
            'gtceu:fluoroantimonic_acid 350'
        )
        .outputFluids(
            'gtceu:infernit_slurry 500'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(550)
        .circuit(4)

    event.recipes.gtceu.specthermalcentrifuge()
        .inputFluids(
            'gtceu:infernit_slurry 1000'
        )
        .itemOutputs(
            'gtceu:infernit_dust'
        )
        .outputFluids(
            'gtceu:fluoroantimonic_acid 100'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(350)

    event.recipes.gtceu.mixer()
        .itemInputs(
            'gtceu:infernit_dust',
            '8x gtceu:gold_dust'
        )
        .inputFluids(
            'gtceu:nether_air 500'
        )
        .itemOutputs(
            '8x gtceu:netherite_dust'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(100)
        .circuit(1)

})